import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type NquizzyMode = "live" | "love";

const STORAGE_KEY = "nquizzy_mode";

interface ModeContextValue {
  mode: NquizzyMode;
  setMode: (mode: NquizzyMode) => void;
  toggleMode: () => void;
  isLive: boolean;
}

const ModeContext = createContext<ModeContextValue | null>(null);

function readStoredMode(): NquizzyMode {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "live" ? "live" : "love";
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<NquizzyMode>(readStoredMode);

  useEffect(() => {
    document.documentElement.dataset.nquizzyMode = mode;
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const setMode = (next: NquizzyMode) => setModeState(next);
  const toggleMode = () => setModeState((m) => (m === "live" ? "love" : "live"));

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode, isLive: mode === "live" }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within ModeProvider");
  return ctx;
}
