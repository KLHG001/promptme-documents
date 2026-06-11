import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Forms() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-display font-bold text-foreground">Forms</h1>
        <p className="text-muted-foreground mt-1">
          Start a conversation and the AI will build any form you need.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md"
      >
        <Card className="group cursor-pointer border-border hover:border-primary/50 transition-colors bg-card">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-base font-display">Interrogator</CardTitle>
                <CardDescription className="text-xs">AI Agent</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Tell the AI what form or document you need — reimbursements, client intake, invoices, NDAs, or anything else. It'll guide you through it one question at a time.
            </p>
            <Button size="sm" onClick={() => navigate("/forms/new")} className="w-full">
              Start Conversation <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
