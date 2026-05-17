export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--hairline)] pt-36 pb-20">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <div
        className="glow-orb animate-glow-pulse"
        style={{
          width: 520,
          height: 520,
          left: "50%",
          top: -200,
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(70,110,200,0.4), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="container-page relative">
        <div className="eyebrow animate-fade-in">{eyebrow}</div>
        <h1 className="hero-display mt-5 max-w-3xl text-5xl text-gradient md:text-[68px] animate-fade-up">
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--muted-foreground)] md:text-[17px] animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}