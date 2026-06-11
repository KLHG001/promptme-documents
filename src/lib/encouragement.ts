const MESSAGES = [
  "Nice work — that's one more thing off your plate.",
  "You showed up and got it done. That counts.",
  "Document drafted. Take a breath — you earned it.",
  "Progress, not perfection. You're moving forward.",
  "Another win in the vault. Keep going.",
];

export function randomEncouragement(): string {
  return MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
}
