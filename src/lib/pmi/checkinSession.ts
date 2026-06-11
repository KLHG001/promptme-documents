import { CHECKIN_WINDOW_HOURS } from "./constants";

export type CheckinPromptMode = "SKIP" | "UPDATE_PROMPT" | "FULL_CHECKIN";

export function hoursSince(iso: string): number {
  return (Date.now() - new Date(iso).getTime()) / (1000 * 60 * 60);
}

/** PMI OS check-in session window rules based on last check-in time */
export function resolveCheckinPromptMode(lastCheckedInAt: string | null): CheckinPromptMode {
  if (!lastCheckedInAt) return "FULL_CHECKIN";
  const hours = hoursSince(lastCheckedInAt);
  if (hours < CHECKIN_WINDOW_HOURS.skipBelow) return "SKIP";
  if (hours < CHECKIN_WINDOW_HOURS.updatePromptBelow) return "UPDATE_PROMPT";
  return "FULL_CHECKIN";
}

export function isSameLocalDay(a: string, b = new Date()): boolean {
  const d1 = new Date(a);
  const d2 = b;
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  );
}
