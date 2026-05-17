import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "inline" | "stacked" | "image";
  showImage?: boolean;
}

export function Logo({
  className,
  variant = "inline",
  showImage = true,
}: LogoProps) {
  const sizeClass = variant === "stacked" ? "text-3xl" : "text-xl";

  // If you have a logo image, use it. Otherwise fallback to text
  if (showImage) {
    return (
      <img
        src="/assets/logo.svg"
        alt="ERA Innovations"
        className={cn("h-20 w-auto", className)}
        width={160}
        height={32}
        loading="eager"
      />
    );
  }

  // Fallback text logo
  return (
    <span
      className={cn(
        "font-display font-semibold tracking-tight select-none flex items-center gap-1.5",
        sizeClass,
        className,
      )}
      style={{ color: "var(--foreground)" }}
      aria-label="ERA Innovations"
    >
      <span className="text-liquid">ERA</span>
      <span
        className="inline-block w-1.5 h-1.5 rounded-full"
        style={{
          background: "var(--brand)",
          boxShadow: "0 0 14px var(--brand)",
        }}
      />
      <span className="text-liquid">Innovations</span>
    </span>
  );
}