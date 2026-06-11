import { Sun, Moon, CheckCircle2 } from "lucide-react";

interface CheckinStatusProps {
  hasCheckedIn: boolean;
  hasCheckedOut: boolean;
  checkinMood?: number | null;
  checkoutMood?: number | null;
  moodComparison?: string | null;
}

export function CheckinStatus({
  hasCheckedIn,
  hasCheckedOut,
  checkinMood,
  checkoutMood,
  moodComparison,
}: CheckinStatusProps) {
  if (!hasCheckedIn) return null;

  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <div className="flex items-center gap-1.5">
        <Sun className="w-3.5 h-3.5 text-primary" />
        <span className="font-medium">{checkinMood}/10</span>
      </div>
      {hasCheckedOut ? (
        <>
          <div className="flex items-center gap-1.5">
            <Moon className="w-3.5 h-3.5 text-accent" />
            <span className="font-medium">{checkoutMood}/10</span>
          </div>
          {moodComparison && (
            <span className={`font-semibold ${moodComparison.startsWith("+") ? "text-green-500" : moodComparison === "0" ? "text-muted-foreground" : "text-red-500"}`}>
              ({moodComparison})
            </span>
          )}
          <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
        </>
      ) : (
        <span className="italic">Check-out pending</span>
      )}
    </div>
  );
}
