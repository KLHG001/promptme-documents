import { z } from "zod";

export type FieldType = "text" | "number" | "date" | "select" | "currency";

export interface FormField {
  id: string;
  label: string;
  type: FieldType;
  question: string;
  placeholder?: string;
  options?: string[];
  validation: z.ZodSchema;
  confirmMessage?: (value: string) => string;
}

export interface FormTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  fields: FormField[];
  completionMessage: string;
}

export const formTemplates: FormTemplate[] = [
  {
    id: "reimbursement",
    name: "Reimbursement Request",
    description: "Submit an expense for reimbursement with full details.",
    icon: "receipt",
    category: "Spend",
    fields: [
      {
        id: "amount",
        label: "Amount",
        type: "currency",
        question: "What's the total amount you need reimbursed?",
        placeholder: "e.g. 150.00",
        validation: z.string().refine(
          (v) => !isNaN(parseFloat(v)) && parseFloat(v) > 0,
          "Please enter a valid dollar amount greater than 0."
        ),
        confirmMessage: (v) => `Got it — $${parseFloat(v).toFixed(2)}. Let's keep going.`,
      },
      {
        id: "purpose",
        label: "Purpose",
        type: "text",
        question: "What was this expense for? Give me a brief description.",
        placeholder: "e.g. Client dinner at Nobu",
        validation: z.string().min(3, "Give me a bit more detail — at least a few words."),
        confirmMessage: (v) => `"${v}" — noted. Next question.`,
      },
      {
        id: "date",
        label: "Date of Expense",
        type: "date",
        question: "When did this expense occur? (MM/DD/YYYY)",
        placeholder: "e.g. 03/01/2026",
        validation: z.string().regex(
          /^\d{2}\/\d{2}\/\d{4}$/,
          "Use MM/DD/YYYY format please."
        ),
        confirmMessage: (v) => `Expense dated ${v}. Almost done.`,
      },
      {
        id: "category",
        label: "Category",
        type: "select",
        question: "What category fits best? Choose one: Travel, Meals, Supplies, Software, or Other.",
        options: ["Travel", "Meals", "Supplies", "Software", "Other"],
        validation: z.string().refine(
          (v) => ["travel", "meals", "supplies", "software", "other"].includes(v.toLowerCase()),
          "Pick from: Travel, Meals, Supplies, Software, or Other."
        ),
        confirmMessage: (v) => `Categorized as "${v}". One more to go.`,
      },
      {
        id: "notes",
        label: "Additional Notes",
        type: "text",
        question: "Any additional notes or context? (or type 'none')",
        placeholder: "Optional details...",
        validation: z.string().min(1, "Type something — even 'none' works."),
        confirmMessage: (v) => v.toLowerCase() === "none" ? "No extra notes. All good." : `Added your note. That's everything!`,
      },
    ],
    completionMessage: "Your reimbursement request is complete. Here's a summary of what you submitted:",
  },
  {
    id: "client-intake",
    name: "Client Intake Form",
    description: "Onboard a new client with essential contact and project details.",
    icon: "user-plus",
    category: "Business",
    fields: [
      {
        id: "clientName",
        label: "Client Name",
        type: "text",
        question: "What's the client's full name or business name?",
        placeholder: "e.g. Acme Corp",
        validation: z.string().min(2, "Need at least a name to work with."),
        confirmMessage: (v) => `Welcome aboard, ${v}. Let's get the details.`,
      },
      {
        id: "email",
        label: "Email",
        type: "text",
        question: "What's their primary email address?",
        placeholder: "e.g. contact@acme.com",
        validation: z.string().email("That doesn't look like a valid email. Try again."),
        confirmMessage: (v) => `Email set to ${v}. Moving on.`,
      },
      {
        id: "projectType",
        label: "Project Type",
        type: "select",
        question: "What type of engagement is this? Choose: Consulting, Development, Design, or Strategy.",
        options: ["Consulting", "Development", "Design", "Strategy"],
        validation: z.string().refine(
          (v) => ["consulting", "development", "design", "strategy"].includes(v.toLowerCase()),
          "Pick from: Consulting, Development, Design, or Strategy."
        ),
        confirmMessage: (v) => `${v} engagement — locked in.`,
      },
      {
        id: "budget",
        label: "Estimated Budget",
        type: "currency",
        question: "What's the estimated budget for this project?",
        placeholder: "e.g. 25000",
        validation: z.string().refine(
          (v) => !isNaN(parseFloat(v)) && parseFloat(v) > 0,
          "Enter a valid number."
        ),
        confirmMessage: (v) => `Budget: $${parseFloat(v).toLocaleString()}. That's everything!`,
      },
    ],
    completionMessage: "Client intake complete. Here's the profile you just built:",
  },
];

export function getTemplate(id: string): FormTemplate | undefined {
  return formTemplates.find((t) => t.id === id);
}
