import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, FileText, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useAuth } from "@/contexts/AuthContext";
import { useMode } from "@/contexts/ModeContext";
import { fetchActiveSessions } from "@/hooks/useInterrogator";
import { cn } from "@/lib/utils";

interface ActiveSession {
  id: string;
  title: string;
  updated_at: string;
}

export function UnfinishedDocuments() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isLive } = useMode();
  const [open, setOpen] = useState(false);
  const [sessions, setSessions] = useState<ActiveSession[]>([]);

  useEffect(() => {
    if (!user) return;
    fetchActiveSessions(user.id).then(setSessions);
  }, [user]);

  if (sessions.length === 0) return null;

  const chevronColor = isLive ? "text-primary" : "text-secondary";

  const handleResume = (sessionId: string) => {
    navigate(`/chat?session=${sessionId}`);
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <section className="rounded-xl border border-border/60 bg-card shadow-sm overflow-hidden">
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/30 transition-colors touch-target min-h-12"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-accent" />
              </div>
              <div className="text-left min-w-0">
                <h2 className="text-sm font-display font-semibold text-foreground">Unfinished Documents</h2>
                <p className="text-xs text-muted-foreground">
                  {sessions.length} in progress — tap to {open ? "collapse" : "expand"}
                </p>
              </div>
            </div>
            <ChevronDown
              className={cn(
                "w-4 h-4 shrink-0 transition-transform",
                chevronColor,
                open && "rotate-180"
              )}
            />
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-3 pb-3 space-y-2">
            {sessions.map((session) => (
              <Card
                key={session.id}
                className="border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
              >
                <CardContent className="p-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{session.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(session.updated_at).toLocaleDateString()} ·{" "}
                        {new Date(session.updated_at).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="shrink-0 text-primary touch-target h-12 px-3"
                    onClick={() => handleResume(session.id)}
                  >
                    Resume <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CollapsibleContent>
      </section>
    </Collapsible>
  );
}
