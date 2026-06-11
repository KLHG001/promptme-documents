import { cn } from "@/lib/utils";

interface PmiLogoProps {
  className?: string;
  size?: "sm" | "md";
}

export function PmiLogo({ className, size = "md" }: PmiLogoProps) {
  const dim = size === "sm" ? 32 : 40;
  return (
    <div
      className={cn("flex-shrink-0 rounded-xl overflow-hidden", className)}
      style={{ width: dim, height: dim }}
      aria-hidden
    >
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect width="40" height="40" rx="10" fill="#2C1A0E" />
        <circle cx="20" cy="20" r="11" fill="#2ABFBF" />
        <path
          d="M14 26c2-4 4-6 6-6s4 2 6 6"
          stroke="#C8832A"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="16" cy="17" r="1.5" fill="#2C1A0E" />
        <circle cx="24" cy="17" r="1.5" fill="#2C1A0E" />
      </svg>
    </div>
  );
}
