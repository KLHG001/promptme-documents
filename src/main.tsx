import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ModeProvider } from "@/contexts/ModeContext";

const storedMode = localStorage.getItem("nquizzy_mode");
document.documentElement.dataset.nquizzyMode = storedMode === "live" ? "live" : "love";

createRoot(document.getElementById("root")!).render(
  <ModeProvider>
    <App />
  </ModeProvider>
);
