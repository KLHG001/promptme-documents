import { Home, MessageSquare, FilePlus2, FileInput, Shield } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";

const items = [
  { title: "Home", url: "/", icon: Home, end: true },
  { title: "Chat", url: "/chat", icon: MessageSquare },
  { title: "Scribe", url: "/document-gen", icon: FilePlus2 },
  { title: "PDF", url: "/pdf-fill", icon: FileInput },
  { title: "Vault", url: "/vault", icon: Shield },
];

export function MobileBottomNav() {
  const location = useLocation();
  const hideOnChat = location.pathname === "/chat";

  if (hideOnChat) return null;

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 pb-safe"
      aria-label="Main navigation"
    >
      <div className="flex items-stretch justify-around max-w-[100vw]">
        {items.map((item) => (
          <NavLink
            key={item.url}
            to={item.url}
            end={item.end}
            className="flex flex-1 flex-col items-center justify-center gap-0.5 min-h-[3rem] min-w-0 px-1 py-2 text-[10px] font-medium text-muted-foreground transition-colors touch-target"
            activeClassName="text-primary"
          >
            <item.icon className="h-5 w-5 shrink-0" />
            <span className="truncate w-full text-center">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
