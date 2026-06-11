import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, MessageSquare, Upload, Clock, ArrowRight } from "lucide-react";
import { DailyCheckin } from "@/components/checkin/DailyCheckin";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { fetchActiveSessions } from "@/hooks/useInterrogator";

interface RecentActivity {
  formsCreated: number;
  documentsUploaded: number;
  lastSessionDate: string | null;
}

interface ActiveSession {
  id: string;
  title: string;
  updated_at: string;
}

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activity, setActivity] = useState<RecentActivity>({
    formsCreated: 0,
    documentsUploaded: 0,
    lastSessionDate: null,
  });
  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>([]);

  useEffect(() => {
    if (!user) return;

    const fetchActivity = async () => {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const { count: formsCount } = await supabase
        .from("blueprints")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id)
        .gte("created_at", sevenDaysAgo.toISOString());

      const { data: lastCheckin } = await supabase
        .from("daily_checkins")
        .select("checked_in_at")
        .eq("user_id", user.id)
        .order("checked_in_at", { ascending: false })
        .limit(1);

      setActivity({
        formsCreated: formsCount ?? 0,
        documentsUploaded: 0,
        lastSessionDate: lastCheckin?.[0]?.checked_in_at ?? null,
      });
    };

    const fetchSessions = async () => {
      const sessions = await fetchActiveSessions(user.id);
      setActiveSessions(sessions);
    };

    fetchActivity();
    fetchSessions();
  }, [user]);

  const stats = [
    {
      label: "Forms Created",
      value: activity.formsCreated,
      icon: MessageSquare,
      subtitle: "Last 7 days",
    },
    {
      label: "Documents Uploaded",
      value: activity.documentsUploaded,
      icon: Upload,
      subtitle: "Coming soon",
    },
    {
      label: "Last Session",
      value: activity.lastSessionDate
        ? new Date(activity.lastSessionDate).toLocaleDateString()
        : "—",
      icon: Clock,
      subtitle: activity.lastSessionDate
        ? new Date(activity.lastSessionDate).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
        : "No sessions yet",
    },
  ];

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 gap-6 overflow-y-auto overflow-x-hidden">
      {/* Daily Check-in */}
      <DailyCheckin />

      {/* Unfinished Chats */}
      {activeSessions.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-4 h-4 text-primary" />
            <h2 className="text-sm font-display font-semibold text-foreground">Unfinished Requests</h2>
          </div>

          <div className="space-y-2">
            {activeSessions.map((session) => (
              <Card
                key={session.id}
                className="border-border/60 bg-card shadow-sm hover:border-primary/40 hover:shadow-md transition-all cursor-pointer"
                onClick={() => navigate(`/chat?session=${session.id}`)}
              >
                <CardContent className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-md bg-accent/15 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-accent" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{session.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(session.updated_at).toLocaleDateString()} · {new Date(session.updated_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="shrink-0 text-primary">
                    Resume <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Recent Activity Summary */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-display font-semibold text-foreground">Recent Activity</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="border-border/60 bg-card shadow-sm">
              <CardHeader className="pb-1 pt-3 px-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-primary/15 flex items-center justify-center">
                    <stat.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <CardTitle className="text-xs font-medium text-muted-foreground">{stat.label}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-3">
                <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
