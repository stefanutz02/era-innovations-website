import { useEffect } from "react";
import { PageHero } from "@/components/PageHero";
import { useT } from "@/lib/i18n";
import { updateSEO, setDefaultSchemas, generateBreadcrumbSchema, addJsonLd } from "@/lib/seo";

const values = [
  {
    title: { ro: "Sistem, nu silos", en: "Systems, not silos" },
    body: { ro: "Produsele noastre comunică între ele. Aceeași identitate, același limbaj de design.", en: "Our products talk to each other. Same identity, same design language." },
  },
  {
    title: { ro: "Calitate, nu zgomot", en: "Quality, not noise" },
    body: { ro: "Mai puține lansări, făcute cu mai multă atenție. Detalii care se simt la utilizare.", en: "Fewer releases, more care. Details you feel when you use them." },
  },
  {
    title: { ro: "Pe termen lung", en: "For the long run" },
    body: { ro: "Construim ca să rămână — cod întreținut, design coerent, produse care trăiesc ani.", en: "We build to last — maintained code, coherent design, products that live for years." },
  },
];

const team = [
  { name: "Bogdan Cosma", role: { ro: "Founder", en: "Founder" }, initials: "BC", email: "bogdan@erainnovations.ro" },
  { name: "Ștefan Vasilescu", role: { ro: "Co-Founder & Developer", en: "Co-Founder & Developer" }, initials: "ȘV", email: "stefan@erainnovations.ro" },
  { name: "Riccardo Străjeru", role: { ro: "Developer", en: "Developer" }, initials: "RS", email: "riccardo@erainnovations.ro" },
];

const companies = [
  { name: "ERA Software", body: { ro: "Construiește produsele ecosistemului.", en: "Builds the ecosystem products." } },
  { name: "ERA Games", body: { ro: "Studio de jocuri în formare.", en: "Game studio in the making." } },
  { name: "ERA Education", body: { ro: "Echipa din spatele platformei pentru școli.", en: "Team behind the schools platform." } },
];

export default function About() {
  const { t, lang } = useT();

  useEffect(() => {
    updateSEO({
      title: lang === "ro"
        ? "Despre ERA Innovations — Echipă, Valori și Viziune | Software Piatra-Neamț"
        : "About ERA Innovations — Team, Values & Vision | Software Piatra-Neamț",
      description: lang === "ro"
        ? "Cunoaște echipa ERA Innovations: Bogdan Cosma, Ștefan Vasilescu, Riccardo Străjeru. Companie de software din Piatra-Neamț care construiește produse digitale și platforme proprii."
        : "Meet the ERA Innovations team: Bogdan Cosma, Ștefan Vasilescu, Riccardo Străjeru. Software company from Piatra-Neamț building digital products and in-house platforms.",
      canonical: "/about",
      ogUrl: "/about",
      ogType: "business.business",
      keywords: lang === "ro"
        ? "despre ERA Innovations, echipă software, Bogdan Cosma, Piatra Neamț software, dezvoltatori România, companie IT Neamț"
        : "about ERA Innovations, software team, Bogdan Cosma, Piatra Neamț developers, Romania developers, IT company Neamț",
      alternateLangs: [
        { lang: "ro", url: "https://erainnovations.ro/about" },
        { lang: "en", url: "https://erainnovations.ro/about?lang=en" }
      ]
    });

    setDefaultSchemas();
    addJsonLd(generateBreadcrumbSchema([
      { name: "Acasă", url: "/" },
      { name: lang === "ro" ? "Despre" : "About", url: "/about" }
    ]));
  }, [lang]);

  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        subtitle={t("about.hero.sub")}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6 text-[15px] leading-relaxed text-[var(--foreground)]/85">
            <p>ERA Innovations este grupul din care cresc echipele și companiile noastre. Fiecare are propriul focus, dar împărtășesc același set de standarde și aceeași identitate.</p>
            <p>Lucrăm cu clienți care vor mai mult decât un livrabil — vor o fundație care să țină. Construim în paralel propriile produse, fix din același motiv.</p>
            <p>Suntem din Piatra-Neamț. Lucrăm remote cu clienți din toată țara și din afara ei.</p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)]">
            {values.map((v) => (
              <div key={v.title.en} className="bg-[var(--background)] p-6">
                <h3 className="text-base font-semibold tracking-tight">{v.title[lang]}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">{v.body[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--hairline)] bg-[var(--surface)]/30">
        <div className="container-page py-20 md:py-24">
          <span className="eyebrow">{t("about.team.title")}</span>
          <h2 className="hero-display mt-3 text-3xl text-gradient md:text-5xl">
            {lang === "ro" ? "Oamenii din spate." : "The people behind it."}
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col gap-5 bg-[var(--background)] p-7">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--hairline)] bg-[var(--surface)]/60 text-base font-semibold tracking-tight"
                  style={{ color: "var(--brand)" }}
                >
                  {m.initials}
                </div>
                <div>
                  <div className="text-base font-semibold tracking-tight">{m.name}</div>
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">
                    {m.role[lang]}
                  </div>
                  <a
                    href={`mailto:${m.email}`}
                    className="mt-2 inline-block text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]"
                  >
                    {m.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-24">
        <span className="eyebrow">{lang === "ro" ? "Grupul" : "The group"}</span>
        <h2 className="hero-display mt-3 max-w-2xl text-3xl text-gradient md:text-4xl">
          {lang === "ro" ? "Mai multe echipe, sub aceeași umbrelă." : "Multiple teams, one umbrella."}
        </h2>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-3">
          {companies.map((c) => (
            <div key={c.name} className="bg-[var(--background)] p-7">
              <div className="flex items-center gap-2">
                <span className="dot-brand" />
                <h3 className="text-base font-semibold tracking-tight">{c.name}</h3>
              </div>
              <p className="mt-3 text-sm text-[var(--muted-foreground)]">{c.body[lang]}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}