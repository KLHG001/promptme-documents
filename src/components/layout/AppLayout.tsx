import { Outlet, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Sun } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useCheckin } from "@/hooks/useCheckin";
import { ModeToggle } from "@/components/branding/ModeToggle";
import { AppFooter } from "@/components/branding/AppFooter";

function getInitials(profile: { username?: string | null; email?: string | null } | null, email?: string) {
  if (profile?.username) {
    return profile.username.slice(0, 2).toUpperCase();
  }
  const fallbackEmail = profile?.email || email || "";
  return fallbackEmail.slice(0, 2).toUpperCase() || "??";
}

export function AppLayout() {
  const { user, profile, signOut } = useAuth();
  const initials = getInitials(profile, user?.email);
  const location = useLocation();
  const isChatRoute = location.pathname === "/chat";
  const { displayMood } = useCheckin();
  const checkinMood = displayMood;

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <div className="flex-1 flex flex-col min-h-screen">
          {/* Top bar - hidden on chat route */}
          {!isChatRoute && (
            <header className="h-12 flex items-center justify-between border-b border-border px-4 bg-card">
              <div className="flex items-center gap-3">
                <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
                {/* Mood & Alter Ego strip */}
                {checkinMood != null && (
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Sun className="w-3 h-3" />
                    <span className="font-medium">{checkinMood ?? "—"}/10</span>
                    <span className="text-border">|</span>
                    <span className="font-mono text-[11px]">Alter Ego: Active</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <ModeToggle compact />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="focus:outline-none">
                      <Avatar className="h-7 w-7 cursor-pointer">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs font-display font-semibold">
                          {initials}
                        </AvatarFallback>
                      </Avatar>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </header>
          )}

          {/* Main content */}
          <main className="flex-1 flex flex-col overflow-hidden">
            <Outlet />
          </main>

          {!isChatRoute && <AppFooter />}
        </div>
      </div>
    </SidebarProvider>
  );
}
