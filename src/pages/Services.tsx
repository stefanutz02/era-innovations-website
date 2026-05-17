import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Cloud, GraduationCap, Building2, Wallet, Code2, Lightbulb, Check, X, Globe, Smartphone, Monitor } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";

export default function Services() {
  const { t, lang } = useT();

  useEffect(() => {
    updateSEO({
      title: "Servicii — ERA Innovations — Software custom, web & mobile România",
      description: "Web development, aplicații mobile iOS & Android, SaaS, automatizări și API-uri. Servicii de software custom pentru companii din România și internațional.",
      canonical: "/services",
      ogUrl: "/services",
    });
  }, []);

  const platforms = [
    { icon: Cloud, key: "cloud" as const, accent: "var(--brand)" },
    { icon: GraduationCap, key: "education" as const, accent: "#60c8a0" },
    { icon: Building2, key: "realestate" as const, accent: "#d4a060" },
    { icon: Wallet, key: "finance" as const, accent: "#9080e0" },
  ];

  const stack = [
    { icon: Globe, label: "Web" },
    { icon: Smartphone, label: "iOS · Android" },
    { icon: Monitor, label: "Windows · macOS" },
  ];

  const pros = lang === "ro" ? [
    "Echipă mică, comunicare directă cu founderii",
    "Construim cu metodă: arhitectură, design system, code review",
    "Proprietate completă pe cod și pe stack — fără lock-in",
    "Susținem produsul după lansare, nu dispărem",
    "Construim deja propriile platforme — știm ce înseamnă să scalezi",
  ] : [
    "Small team, direct line to the founders",
    "Method-driven: architecture, design system, code review",
    "Full ownership of code and stack — no lock-in",
    "We support the product after launch, we don't disappear",
    "We build our own platforms — we know what scaling actually means",
  ];

  const cons = lang === "ro" ? [
    "Nu suntem cea mai ieftină opțiune din piață",
    "Nu acceptăm proiecte „urgent până mâine",
    "Nu lucrăm cu template-uri sau site-uri WordPress one-click",
    "Nu suntem agenție full-service (ads, SEO operațional, PR)",
  ] : [
    "We're not the cheapest option on the market",
    "We don't take 'urgent by tomorrow' projects",
    "We don't work with templates or one-click WordPress sites",
    "We're not a full-service agency (ads, operational SEO, PR)",
  ];

  return (
    <>
      <PageHero eyebrow={t("svc.hero.eyebrow")} title={t("svc.hero.title")} subtitle={t("svc.hero.sub")} />

      {/* Custom */}
      <section className="container-page py-20 md:py-24">
        <Reveal>
          <span className="eyebrow">{t("svc.custom.eyebrow")}</span>
          <h2 className="hero-display mt-3 text-3xl text-liquid md:text-5xl">{t("svc.custom.title")}</h2>
          <p className="mt-4 max-w-2xl text-[15px] text-[var(--muted-foreground)]">{t("svc.custom.body")}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {stack.map(({ icon: Icon, label }) => (
              <div key={label} className="glass flex items-center gap-3 rounded-xl px-5 py-4">
                <Icon className="h-4 w-4 text-[var(--accent)]" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2">
            <div className="bg-[var(--background)] p-7">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-[var(--accent)]" />
                <h3 className="text-lg font-semibold tracking-tight">{lang === "ro" ? "Aplicații & SaaS" : "Apps & SaaS"}</h3>
              </div>
              <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                {lang === "ro"
                  ? "Produse SaaS, dashboard-uri, panouri admin, automatizări interne. Construite cu un design system propriu și o arhitectură pregătită să scaleze."
                  : "SaaS products, dashboards, admin panels, internal automations. Built with our own design system and an architecture ready to scale."}
              </p>
            </div>
            <div className="bg-[var(--background)] p-7">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-[var(--accent)]" />
                <h3 className="text-lg font-semibold tracking-tight">{lang === "ro" ? "Site-uri pentru orice domeniu" : "Sites for any domain"}</h3>
              </div>
              <p className="mt-3 text-sm text-[var(--muted-foreground)]">
                {lang === "ro"
                  ? "Site-uri de prezentare, landing-uri și e-commerce — construite la nivel de produs, nu de template. Performante, accesibile, ușor de actualizat."
                  : "Brand sites, landing pages and e-commerce — built at product level, not template level. Fast, accessible, easy to maintain."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Platforms */}
      <section className="border-y border-[var(--hairline)] bg-[var(--surface)]/30">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <span className="eyebrow">{t("svc.platforms.eyebrow")}</span>
            <h2 className="hero-display mt-3 text-3xl text-liquid md:text-5xl">{t("svc.platforms.title")}</h2>
            <p className="mt-4 max-w-2xl text-[15px] text-[var(--muted-foreground)]">{t("svc.platforms.body")}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2">
              {platforms.map(({ icon: Icon, key, accent }) => (
                <div key={key} className="group bg-[var(--background)] p-7 transition-colors hover:bg-[var(--surface)]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--hairline)] bg-[var(--surface)]/60" style={{ color: accent }}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{t(`eco.${key}.title`)}</h3>
                    </div>
                    <span className="rounded-full border border-[var(--hairline)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
                      {t("eco.status.soon")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">{t(`eco.${key}.body`)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consulting */}
      <section className="container-page py-20 md:py-24">
        <Reveal>
          <div className="flex items-start gap-4">
            <Lightbulb className="mt-1 h-5 w-5 text-[var(--accent)]" />
            <div>
              <span className="eyebrow">{t("svc.consult.eyebrow")}</span>
              <h2 className="hero-display mt-3 text-3xl text-liquid md:text-4xl">{t("svc.consult.title")}</h2>
              <p className="mt-4 max-w-2xl text-[15px] text-[var(--muted-foreground)]">{t("svc.consult.body")}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Pros/Cons */}
      <section className="border-t border-[var(--hairline)]">
        <div className="container-page py-20 md:py-24">
          <Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2">
              <div className="bg-[var(--background)] p-8">
                <div className="flex items-center gap-2">
                  <span className="dot-brand" />
                  <h3 className="text-base font-semibold tracking-tight">{t("svc.pros.title")}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {pros.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14px] text-[var(--foreground)]/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--background)] p-8">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--foreground)]/30" />
                  <h3 className="text-base font-semibold tracking-tight">{t("svc.cons.title")}</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {cons.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-[14px] text-[var(--muted-foreground)]">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-[var(--foreground)]/40" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12 glass-strong flex flex-col items-start justify-between gap-6 rounded-2xl p-8 md:flex-row md:items-center">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">{t("cta.title")}</h3>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{t("cta.body")}</p>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-[13px] font-medium text-[var(--background)]">
                {t("nav.cta")} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}