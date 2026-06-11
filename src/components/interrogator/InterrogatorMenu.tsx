import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  History,
  ScrollText,
  FileInput,
  Shield,
  Settings,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/branding/ModeToggle";
import { useAuth } from "@/contexts/AuthContext";

interface InterrogatorMenuProps {
  onBack?: () => void;
}

export function InterrogatorMenu({ onBack }: InterrogatorMenuProps) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="touch-target rounded-full border-primary/30"
            aria-label="Open menu"
          >
            <Plus className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52">
          <DropdownMenuItem className="cursor-pointer touch-target" onClick={() => navigate("/history")}>
            <History className="mr-2 h-4 w-4" />
            History
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer touch-target" onClick={() => navigate("/document-gen")}>
            <ScrollText className="mr-2 h-4 w-4" />
            Templates
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer touch-target" onClick={() => navigate("/pdf-fill")}>
            <FileInput className="mr-2 h-4 w-4" />
            PDF Filler
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer touch-target" onClick={() => navigate("/vault")}>
            <Shield className="mr-2 h-4 w-4" />
            Vault
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer touch-target" onClick={() => setSettingsOpen(true)}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="cursor-pointer touch-target"
            onClick={() => (onBack ? onBack() : navigate("/"))}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle className="font-serif">Settings</SheetTitle>
          </SheetHeader>
          <div className="mt-8 space-y-6">
            <div>
              <p className="text-sm font-medium mb-3">Display mode</p>
              <ModeToggle />
              <p className="text-xs text-muted-foreground mt-2">
                Live — focused dark. Love — warm cream.
              </p>
            </div>
            <Button
              variant="outline"
              className="touch-target w-full gap-2"
              onClick={() => {
                setSettingsOpen(false);
                signOut();
              }}
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
