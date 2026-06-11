import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCheckin } from "@/hooks/useCheckin";
import { CheckinStatus } from "./CheckinStatus";
import { Sun, Moon, ChevronDown, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export function DailyCheckin() {
  const navigate = useNavigate();
  const {
    todayCheckin,
    todayCheckout,
    hasCheckedIn,
    hasCheckedOut,
    loading,
    promptMode,
    submitCheckin,
    submitCheckout,
    submitMoodUpdate,
  } = useCheckin();

  const [mood, setMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(true);

  if (loading || promptMode === "SKIP") return null;

  const isUpdatePrompt = promptMode === "UPDATE_PROMPT";
  const isCheckout = !isUpdatePrompt && hasCheckedIn && !hasCheckedOut;
  const allDone = !isUpdatePrompt && hasCheckedIn && hasCheckedOut;

  const handleSubmit = async () => {
    if (mood === null) return;
    setSubmitting(true);

    if (isUpdatePrompt) {
      await submitMoodUpdate(mood);
    } else if (isCheckout) {
      await submitCheckout(mood);
    } else {
      await submitCheckin(mood);
      navigate("/chat");
      return;
    }

    setMood(null);
    setNote("");
    setSubmitting(false);
  };

  if (allDone) {
    return (
      <div className="px-4 py-2.5 rounded-lg border border-border bg-card flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Daily Check-in</span>
        </div>
        <CheckinStatus
          hasCheckedIn={hasCheckedIn}
          hasCheckedOut={hasCheckedOut}
          checkinMood={todayCheckin?.mood_input_number}
          checkoutMood={todayCheckout?.mood_input_number}
          moodComparison={todayCheckout?.mood_comparison}
        />
      </div>
    );
  }

  const label = isUpdatePrompt ? "Mood update" : isCheckout ? "Check-out" : "Check-in";
  const Icon = isUpdatePrompt ? RefreshCw : isCheckout ? Moon : Sun;
  const subtitle = isUpdatePrompt
    ? "Quick pulse check — how are you now? (1–10)"
    : "How are you feeling? (1–10)";

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="rounded-xl border-2 border-primary/20 bg-card shadow-sm overflow-hidden max-w-full">
        <CollapsibleTrigger asChild>
          <button className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/30 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-display font-semibold text-foreground">
                  {isUpdatePrompt ? label : `Daily ${label}`}
                </h3>
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {hasCheckedIn && !isUpdatePrompt && (
                <CheckinStatus
                  hasCheckedIn={hasCheckedIn}
                  hasCheckedOut={hasCheckedOut}
                  checkinMood={todayCheckin?.mood_input_number}
                />
              )}
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
              />
            </div>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-4 pb-4 pt-1 space-y-3">
            <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-10">
              <AnimatePresence>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <motion.button
                    key={n}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: n * 0.02 }}
                    onClick={() => setMood(n)}
                    className={`h-9 rounded-lg text-xs font-semibold transition-all ${
                      mood === n
                        ? "bg-primary text-primary-foreground shadow-md scale-110"
                        : "bg-muted text-muted-foreground hover:bg-primary/15 hover:text-foreground"
                    }`}
                  >
                    {n}
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {!isUpdatePrompt && (
              <Input
                placeholder="Add a note (optional)..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="h-8 text-xs"
              />
            )}

            <Button
              size="sm"
              className="w-full h-8 text-xs"
              disabled={mood === null || submitting}
              onClick={handleSubmit}
            >
              {submitting ? "Saving..." : `Submit ${label}`}
            </Button>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
