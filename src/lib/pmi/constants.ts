/** PMI OS app source identifier for all MasterVault writes from PromptMe Documents */
export const APP_SOURCE = "promptme-docs" as const;

export const CHECKIN_WINDOW_HOURS = {
  skipBelow: 6,
  updatePromptBelow: 24,
} as const;

export const COIN_AMOUNTS = {
  templateUsed: 10,
  pdfFilled: 15,
  aiGenerated: 25,
} as const;

export const COIN_TRANSACTION_TYPES = {
  templateUsed: `${APP_SOURCE}:template_used`,
  pdfFilled: `${APP_SOURCE}:pdf_filled`,
  aiGenerated: `${APP_SOURCE}:ai_generated`,
} as const;
