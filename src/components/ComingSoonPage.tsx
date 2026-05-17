import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { useT } from "@/lib/i18n";

export type ComingSoonProps = {
  eyebrow: string;
  name: string;
  tagline: { ro: string; en: string };
  intro: { ro: string; en: string };
  features: { icon: LucideIcon; title: { ro: string; en: string }; body: { ro: string; en: string } }[];
  audience: { ro: string; en: string };
  accent: string;
  accentGlow: string;
  eta: { ro: string; en: string };
};

export function ComingSoonPage(props: ComingSoonProps) {
  const { lang } = useT();
  const { eyebrow, name, tagline, intro, features, audience, accent, accentGlow, eta } = props;

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--hairline)] pt-36 pb-24">
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
        <div className="noise-overlay" aria-hidden />
        <div
          className="glow-orb"
          style={{
            width: 700,
            height: 700,
            left: "50%",
            top: -260,
            transform: "translateX(-50%)",
            background: `radial-gradient(circle, ${accentGlow}, transparent 60%)`,
          }}
          aria-hidden
        />

        <div className="container-page relative">
          <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: accent, boxShadow: `0 0 14px ${accent}` }}
            />
            {eyebrow}
          </div>

          <h1 className="hero-display mt-4 max-w-4xl text-4xl text-liquid md:text-[80px]">{name}</h1>
          <p className="mt-5 max-w-2xl text-lg font-medium tracking-tight text-[var(--foreground)]/90 md:text-xl">
            {tagline[lang]}
          </p>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--muted-foreground)] md:text-[16px]">
            {intro[lang]}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[12px] uppercase tracking-widest"
              style={{
                borderColor: accent,
                color: accent,
                background: `${accent}14`,
              }}
            >
              <Sparkles className="h-3 w-3" /> {lang === "ro" ? "În dezvoltare" : "In development"} · {eta[lang]}
            </span>
            <Link
              to="/contact"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-[var(--foreground)] px-5 text-[13px] font-medium text-[var(--background)] transition-opacity hover:opacity-90"
            >
              <Mail className="h-3.5 w-3.5" /> {lang === "ro" ? "Vreau să fiu primul" : "Notify me first"}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <Reveal>
          <span className="eyebrow">{lang === "ro" ? "Ce va face" : "What it will do"}</span>
          <h2 className="hero-display mt-3 max-w-3xl text-3xl text-liquid md:text-4xl">
            {lang === "ro" ? "Construit pentru " : "Built for "}
            <span style={{ color: accent }}>{audience[lang]}</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2">
          {features.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title.ro} delay={i * 80}>
              <div className="h-full bg-[var(--background)] p-7">
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--hairline)] bg-[var(--surface)]/60"
                  style={{ color: accent }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{title[lang]}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{body[lang]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--hairline)]">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <div className="glass-strong relative flex flex-col gap-6 overflow-hidden rounded-3xl p-8 md:flex-row md:items-center md:justify-between md:p-12">
              <div
                className="glow-orb"
                style={{
                  width: 420,
                  height: 420,
                  right: -120,
                  top: -120,
                  background: `radial-gradient(circle, ${accentGlow}, transparent 60%)`,
                }}
                aria-hidden
              />
              <div className="relative">
                <h3 className="hero-display text-2xl text-liquid md:text-4xl">
                  {lang === "ro" ? "Vrei să-l încerci primul?" : "Want early access?"}
                </h3>
                <p className="mt-3 max-w-lg text-sm text-[var(--muted-foreground)] md:text-[15px]">
                  {lang === "ro"
                    ? "Lasă-ne adresa și te anunțăm când deschidem testarea privată."
                    : "Drop us a line and we'll let you know when private testing opens."}
                </p>
              </div>
              <Link
                to="/contact"
                className="relative inline-flex h-11 items-center gap-2 self-start rounded-full bg-[var(--foreground)] px-5 text-[13px] font-medium text-[var(--background)] transition-opacity hover:opacity-90 md:self-auto"
              >
                {lang === "ro" ? "Înscrie-mă" : "Sign me up"} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}