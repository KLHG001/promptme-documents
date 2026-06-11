import { Home, MessageSquare, FileText, Link2, Shield, FilePlus2, History, FileInput, Users } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { PmiLogo } from "@/components/branding/PmiLogo";
import { AppFooter } from "@/components/branding/AppFooter";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Interrogator", url: "/chat", icon: MessageSquare },
  { title: "History", url: "/history", icon: History },
  { title: "Forms", url: "/forms", icon: FileText },
  { title: "Scribe", url: "/document-gen", icon: FilePlus2 },
  { title: "PDF Filler", url: "/pdf-fill", icon: FileInput },
  { title: "Contacts", url: "/contacts", icon: Users },
  { title: "Sovereign Vault", url: "/vault", icon: Shield },
  { title: "Bridge", url: "/bridge", icon: Link2 },
];

export function AppSidebar() {
  const { state, setOpenMobile, isMobile } = useSidebar();
  const collapsed = state === "collapsed";
  const showLabels = isMobile || !collapsed;
  const location = useLocation();

  const handleNavClick = () => {
    if (isMobile) setOpenMobile(false);
  };

  const isActive = (url: string) =>
    url === "/" ? location.pathname === "/" : location.pathname.startsWith(url);

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2.5">
          <PmiLogo size="sm" />
          {showLabels && (
            <div className="min-w-0">
              <span className="font-serif font-bold text-base text-foreground tracking-tight block leading-tight">
                PromptMe Docs
              </span>
              <span className="text-[10px] text-muted-foreground block truncate">
                The Interrogator • Scribe • Vault
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{showLabels ? "Navigation" : ""}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    size="lg"
                    className={cn(!showLabels && "flex-col h-auto min-h-12 py-2 gap-1")}
                  >
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={cn(
                        "hover:bg-sidebar-accent/50 min-h-12",
                        !showLabels && "flex-col items-center justify-center gap-1 py-2"
                      )}
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                      onClick={handleNavClick}
                    >
                      <item.icon className={cn("h-4 w-4 shrink-0", showLabels && "mr-2")} />
                      <span
                        className={cn(
                          showLabels ? "truncate" : "text-[10px] leading-tight text-center w-full px-1"
                        )}
                      >
                        {item.title}
                      </span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {showLabels && (
          <>
            <p className="text-xs text-muted-foreground mb-2">PromptMe Documents v0.2</p>
            <AppFooter className="!py-0 !px-0 text-left" />
          </>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
