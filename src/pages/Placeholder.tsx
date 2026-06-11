import { useLocation } from "react-router-dom";
import { Construction } from "lucide-react";

export default function Placeholder() {
  const { pathname } = useLocation();
  const name = pathname.replace("/", "").replace(/^\w/, (c) => c.toUpperCase()) || "Page";

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
      <Construction className="w-12 h-12 text-muted-foreground" />
      <h1 className="text-xl font-display font-semibold text-foreground">{name}</h1>
      <p className="text-muted-foreground text-sm max-w-md">
        This module is on the roadmap. It'll be wired up once the core Interrogator is locked in.
      </p>
    </div>
  );
}
