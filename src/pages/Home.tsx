import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Cloud, GraduationCap, Building2, Wallet, FileText } from "lucide-react";
import { Partners } from "@/components/Partners";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { updateSEO, setDefaultSchemas, generateBreadcrumbSchema, addJsonLd } from "@/lib/seo";

export default function Home() {
  const { lang } = useT();

  useEffect(() => {
    // Enhanced SEO for homepage
    updateSEO({
      title: lang === "ro" 
        ? "ERA Innovations — Software Custom & Platforme Digitale | Piatra-Neamț, România"
        : "ERA Innovations — Custom Software & Digital Platforms | Piatra-Neamț, Romania",
      description: lang === "ro"
        ? "Companie de software din Piatra-Neamț. Construim aplicații web, mobile iOS & Android, SaaS, automatizări și API-uri pentru afaceri din România și internațional. Cere o ofertă gratuită."
        : "Software company from Piatra-Neamț, Romania. We build web apps, mobile apps (iOS & Android), SaaS, automations and APIs for businesses in Romania and worldwide. Get a free quote.",
      keywords: lang === "ro"
        ? "software custom, dezvoltare web, aplicații mobile, SaaS România, Piatra Neamț, ERA Innovations, web design, aplicații iOS, aplicații Android, consultanță IT, dezvoltare software, platforme digitale, software Piatra Neamț, dezvoltator software România"
        : "custom software, web development, mobile apps, SaaS Romania, Piatra Neamț, ERA Innovations, web design, iOS apps, Android apps, IT consulting, software development, digital platforms, software developer Romania",
      canonical: "/",
      ogUrl: "/",
      ogType: "website",
      alternateLangs: [
        { lang: "ro", url: "https://erainnovations.ro/" },
        { lang: "en", url: "https://erainnovations.ro/?lang=en" }
      ]
    });

    // Add structured data
    setDefaultSchemas();
    
    // Add breadcrumb for homepage (self-referencing)
    addJsonLd(generateBreadcrumbSchema([
      { name: "Acasă", url: "/" }
    ]));
  }, [lang]);

  return (
    <>
      <Hero />
      <Partners />
      <Ecosystem />
      <Manifesto />
      <CTA />
    </>
  );
}

function Hero() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-center pt-20">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <div
        className="glow-orb float-soft animate-glow-pulse"
        style={{
          width: 760, height: 760, left: "50%", top: -280, transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(60,100,200,0.5), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="container-page relative">
        <h1 className="hero-display mx-auto mt-8 max-w-4xl text-center text-5xl md:text-[96px]">
          <span className="text-liquid">{t("hero.title.1")}</span>
          <br />
          <span className="text-liquid">{t("hero.title.2")}</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-center text-[15px] leading-relaxed text-[var(--muted-foreground)] md:text-[17px] animate-fade-up" style={{ animationDelay: "100ms" }}>
          {t("hero.sub")}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up" style={{ animationDelay: "200ms" }}>
          <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--foreground)] px-5 text-[13.5px] font-medium text-[var(--background)] transition-opacity hover:opacity-90">
            {t("hero.cta.primary")} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link to="/services" className="glass inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium text-[var(--foreground)]/90 transition-colors hover:bg-[var(--surface)]">
            {t("hero.cta.secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  const { t, lang } = useT();
  const items = [
    { icon: Cloud, key: "cloud" as const, slug: "era-cloud", accent: "var(--brand)" },
    { icon: GraduationCap, key: "education" as const, slug: "era-education", accent: "#60c8a0" },
    { icon: Building2, key: "realestate" as const, slug: "era-real-estate", accent: "#d4a060" },
    { icon: Wallet, key: "finance" as const, slug: "era-finance", accent: "#9080e0" },
  ] as const;

  return (
    <section className="border-y border-[var(--hairline)] bg-[var(--surface)]/20">
      <div className="container-page py-24 md:py-32">
        <Reveal>
          <span className="eyebrow">{t("eco.eyebrow")}</span>
          <h2 className="hero-display mt-3 max-w-3xl text-3xl text-liquid md:text-5xl">{t("eco.title")}</h2>
          <p className="mt-4 max-w-xl text-[15px] text-[var(--muted-foreground)]">{t("eco.sub")}</p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2">
            {items.map(({ icon: Icon, key, slug, accent }) => (
              <Link
                key={key}
                to={`/inovatii/${slug}`}
                className="group bg-[var(--background)] p-8 transition-colors hover:bg-[var(--surface)]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--hairline)] bg-[var(--surface)]/60" style={{ color: accent }}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className="text-lg font-semibold tracking-tight">{t(`eco.${key}.title`)}</h3>
                  </div>
                  <span className="rounded-full border border-[var(--hairline)] px-2.5 py-1 text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
                    {t("eco.status.soon")}
                  </span>
                </div>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--muted-foreground)]">{t(`eco.${key}.body`)}</p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <Link to="/inovatii/paperless-edu" className="group mt-6 flex items-center justify-between gap-6 rounded-2xl border border-[var(--hairline)] bg-[var(--background)]/60 p-6 transition-colors hover:bg-[var(--surface)]">
            <div className="flex items-start gap-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--hairline)] bg-[var(--surface)]/60 text-[var(--accent)]">
                <FileText className="h-4 w-4" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold tracking-tight">{t("eco.paperless.title")}</h3>
                  <span className="rounded-full border border-[var(--hairline)] px-2 py-0.5 text-[10px] uppercase tracking-widest text-[var(--accent)]">
                    {lang === "ro" ? "Inițiativă" : "Initiative"}
                  </span>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-[var(--muted-foreground)]">{t("eco.paperless.body")}</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-[var(--muted-foreground)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)]" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Manifesto() {
  const { t } = useT();
  return (
    <section className="border-b border-[var(--hairline)]">
      <div className="container-page py-24 md:py-32">
        <Reveal>
          <div className="eyebrow">{t("manifesto.eyebrow")}</div>
          <h2 className="hero-display mt-3 max-w-3xl text-3xl text-liquid md:text-5xl">{t("manifesto.title")}</h2>
        </Reveal>
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal delay={100}>
            <p className="text-balance text-2xl font-medium leading-tight tracking-[-0.02em] text-[var(--foreground)] md:text-3xl">
              {t("manifesto.lead")}
            </p>
          </Reveal>
          <Reveal delay={180}>
            <div className="space-y-5 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
              <p>{t("manifesto.body.1")}</p>
              <p>{t("manifesto.body.2")}</p>
              <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)]">
                {t("manifesto.link")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { t } = useT();
  return (
    <section className="container-page py-24 md:py-32">
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 md:p-16">
          <div className="glow-orb" style={{ width: 500, height: 500, right: -100, top: -200,
            background: "radial-gradient(circle, rgba(60,100,200,0.45), transparent 60%)" }} aria-hidden />
          <div className="relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
            <div>
              <div className="eyebrow">{t("cta.eyebrow")}</div>
              <h2 className="hero-display mt-4 max-w-2xl text-3xl text-liquid md:text-5xl">{t("cta.title")}</h2>
              <p className="mt-4 max-w-lg text-[15px] text-[var(--muted-foreground)]">{t("cta.body")}</p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--foreground)] px-5 text-[13.5px] font-medium text-[var(--background)] transition-opacity hover:opacity-90">
                {t("nav.cta")} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}