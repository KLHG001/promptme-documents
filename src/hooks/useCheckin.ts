import { useState, useEffect, useCallback } from "react";
import { masterVault } from "@/integrations/supabase/masterVaultClient";
import { useAuth } from "@/contexts/AuthContext";
import { useMode } from "@/contexts/ModeContext";
import { APP_SOURCE } from "@/lib/pmi/constants";
import {
  resolveCheckinPromptMode,
  isSameLocalDay,
  type CheckinPromptMode,
} from "@/lib/pmi/checkinSession";

export interface CheckinRow {
  id: string;
  checkin_value: number;
  checkout_value: number | null;
  session_delta: number | null;
  checked_in_at: string;
  checked_out_at: string | null;
}

export function useCheckin() {
  const { user } = useAuth();
  const { mode } = useMode();
  const [latestCheckin, setLatestCheckin] = useState<CheckinRow | null>(null);
  const [todaySession, setTodaySession] = useState<CheckinRow | null>(null);
  const [promptMode, setPromptMode] = useState<CheckinPromptMode>("SKIP");
  const [loading, setLoading] = useState(true);

  const fetchCheckins = useCallback(async () => {
    if (!user) return;
    setLoading(true);

    const { data } = await masterVault
      .from("check_ins")
      .select(
        "id, checkin_value, checkout_value, session_delta, checked_in_at, checked_out_at"
      )
      .eq("user_id", user.id)
      .eq("app_source", APP_SOURCE)
      .order("checked_in_at", { ascending: false })
      .limit(10);

    const rows = (data ?? []) as CheckinRow[];
    const latest = rows[0] ?? null;
    setLatestCheckin(latest);
    setPromptMode(resolveCheckinPromptMode(latest?.checked_in_at ?? null));

    const openToday = rows.find(
      (r) => !r.checked_out_at && isSameLocalDay(r.checked_in_at)
    );
    setTodaySession(openToday ?? null);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    fetchCheckins();
  }, [fetchCheckins]);

  const insertCheckin = async (mood: number) => {
    if (!user) return { error: new Error("Not signed in") };

    const { error } = await masterVault.from("check_ins").insert({
      user_id: user.id,
      checkin_value: mood,
      voice_zone: "AI",
      app_source: APP_SOURCE,
      mode,
    });

    if (!error) await fetchCheckins();
    return { error };
  };

  const submitCheckin = async (mood: number) => insertCheckin(mood);

  /** Quick mood refresh (6–24h window) */
  const submitMoodUpdate = async (mood: number) => insertCheckin(mood);

  const submitCheckout = async (mood: number) => {
    if (!user || !todaySession) return { error: new Error("No open check-in") };

    const delta = mood - todaySession.checkin_value;
    const { error } = await masterVault
      .from("check_ins")
      .update({
        checkout_value: mood,
        session_delta: delta,
        checked_out_at: new Date().toISOString(),
      })
      .eq("id", todaySession.id);

    if (!error) await fetchCheckins();
    return { error };
  };

  const hasCheckedIn = !!todaySession;
  const hasCheckedOut = !!todaySession?.checked_out_at;

  return {
    latestCheckin,
    todaySession,
    promptMode,
    todayCheckin: todaySession
      ? {
          id: todaySession.id,
          mood_input_number: todaySession.checkin_value,
          mood_input_text: null,
          mood_comparison:
            todaySession.session_delta != null
              ? todaySession.session_delta > 0
                ? `+${todaySession.session_delta}`
                : `${todaySession.session_delta}`
              : null,
          morning_checkin_id: null,
          checked_in_at: todaySession.checked_in_at,
        }
      : null,
    todayCheckout:
      todaySession?.checkout_value != null
        ? {
            id: todaySession.id,
            mood_input_number: todaySession.checkout_value,
            mood_comparison:
              todaySession.session_delta != null
                ? todaySession.session_delta > 0
                  ? `+${todaySession.session_delta}`
                  : `${todaySession.session_delta}`
                : null,
          }
        : null,
    hasCheckedIn,
    hasCheckedOut,
    loading,
    submitCheckin,
    submitCheckout,
    submitMoodUpdate,
    /** Latest mood for header strip (even when prompt is SKIP) */
    displayMood: latestCheckin?.checkin_value ?? null,
  };
}
