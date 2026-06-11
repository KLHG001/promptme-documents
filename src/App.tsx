import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Forms from "./pages/Forms";
import ConversationalForm from "./pages/ConversationalForm";
import DocumentGeneration from "./pages/DocumentGeneration";
import SovereignVault from "./pages/SovereignVault";
import ChatHistory from "./pages/ChatHistory";
import Placeholder from "./pages/Placeholder";
import PdfFormFill from "./pages/PdfFormFill";
import Contacts from "./pages/Contacts";
import Auth from "./pages/Auth";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/forms/new" element={<ConversationalForm />} />
                <Route path="/document-gen" element={<DocumentGeneration />} />
                <Route path="/vault" element={<SovereignVault />} />
                <Route path="/history" element={<ChatHistory />} />
                <Route path="/pdf-fill" element={<PdfFormFill />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/bridge" element={<Placeholder />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
