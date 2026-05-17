import { useEffect } from "react";
import { ArrowUpRight, Smartphone, ShoppingBag, Globe } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";

export default function Work() {
  const { t } = useT();

  useEffect(() => {
    updateSEO({
      title: "Portofoliu — ERA Innovations — Software custom, web & mobile România",
      description: "Studii de caz și proiecte realizate de ERA Innovations: platforme SaaS, site-uri custom, branding și produse digitale pentru clienți din România și internațional.",
      canonical: "/work",
      ogUrl: "/work",
    });
  }, []);

  return (
    <>
      <PageHero
        eyebrow={t("work.hero.eyebrow")}
        title={t("work.hero.title")}
        subtitle={t("work.hero.subtitle")}
      />

      <section className="container-page pt-16 pb-24 md:pt-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Obiectiv Imobiliare */}
          <article className="group relative overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/40 transition-colors hover:bg-[var(--surface)]">
            <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-[#8a5c30] to-[#5a3010]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)]/70 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[11px] tracking-wider text-white/85 backdrop-blur">
                {t("work.obi.tag")}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-6 p-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{t("work.obi.title")}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{t("work.obi.desc")}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.obiectivimobiliare.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--foreground)] px-3 py-1.5 text-[11px] font-medium text-[var(--background)] transition-opacity hover:opacity-90"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                    </svg>
                    {t("work.obi.googleplay")}
                  </a>
                  <a
                    href="https://apps.apple.com/ro/app/obiectiv-imobiliare/id6754935818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--background)] px-3 py-1.5 text-[11px] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/5"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.98 1.07-3.11-1.05.05-2.31.74-3.04 1.55-.67.73-1.26 1.91-1.1 3.04 1.19.09 2.38-.6 3.07-1.48z"/>
                    </svg>
                    {t("work.obi.appstore")}
                  </a>
                </div>
              </div>
              <ArrowUpRight className="mt-1 hidden h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)] md:block" />
            </div>
          </article>

          {/* Anya Events */}
          <article className="group relative overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/40 transition-colors hover:bg-[var(--surface)]">
            <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-[#7040a0] to-[#501880]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)]/70 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/20 px-3 py-1 font-mono text-[11px] tracking-wider text-white/85 backdrop-blur">
                {t("work.anya.tag")}
              </span>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between gap-6 p-6">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{t("work.anya.title")}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{t("work.anya.desc")}</p>
                <div className="mt-4">
                  <a
                    href="https://anya-events.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[var(--foreground)] px-3 py-1.5 text-[11px] font-medium text-[var(--background)] transition-opacity hover:opacity-90"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {t("work.anya.visit")}
                  </a>
                </div>
              </div>
              <ArrowUpRight className="mt-1 hidden h-5 w-5 shrink-0 text-[var(--muted-foreground)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)] md:block" />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}