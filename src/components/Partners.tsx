import { useT } from "@/lib/i18n";
import { Link } from "react-router-dom";

type PartnerText = { kind: "text"; name: string; href?: string };
type Partner = PartnerText;

const partners: Partner[] = [
  { kind: "text", name: "Vesko Software", href: "https://vesko.ro" },
  { kind: "text", name: "MonkeyLab Art" },
  { kind: "text", name: "Offshade Studio" },
  { kind: "text", name: "PaperLess EDU", href: "/inovatii/paperless-edu" },
];

export function Partners() {
  const { t } = useT();
  return (
    <section className="border-y border-[var(--hairline)] bg-[var(--background)]/60">
      <div className="container-page py-14">
        <div className="flex flex-col items-center gap-2 text-center">
          <span className="eyebrow">{t("partners.eyebrow")}</span>
          <p className="max-w-md text-sm text-[var(--muted-foreground)]">{t("partners.title")}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {partners.map((p) => {
            const inner = (
              <span className="flex h-12 w-36 items-center justify-center text-[var(--foreground)]/70 transition-colors group-hover:text-[var(--foreground)]">
                <span className="font-display text-[15px] font-semibold tracking-tight">
                  {p.name}
                </span>
              </span>
            );

            if (p.href?.startsWith("http")) {
              return (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group block transition-opacity"
                  aria-label={p.name}
                >
                  {inner}
                </a>
              );
            }
            if (p.href) {
              return (
                <Link key={p.name} to={p.href} className="group block" aria-label={p.name}>
                  {inner}
                </Link>
              );
            }
            return (
              <div key={p.name} className="group block" aria-label={p.name}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}