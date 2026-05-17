import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useT();

  return (
    <footer className="border-t border-[var(--hairline)]">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center" aria-label="ERA Innovations">
            <Logo />
          </Link>
          <p className="mt-5 max-w-xs text-sm text-[var(--muted-foreground)]">{t("footer.tag")}</p>
          <p className="mt-4 text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]/70">
            MONKEYLAB ART S.R.L. · Piatra-Neamț
          </p>
        </div>

        <div>
          <div className="eyebrow">{t("footer.studio")}</div>
          <ul className="mt-4 space-y-3">
            <li><Link to="/about" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("nav.about")}</Link></li>
            <li><Link to="/services" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("nav.services")}</Link></li>
            <li><Link to="/work" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("nav.work")}</Link></li>
            <li><Link to="/blog" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("nav.blog")}</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">{t("nav.platforms")}</div>
          <ul className="mt-4 space-y-3">
            <li><Link to="/inovatii/era-cloud" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">ERA Cloud</Link></li>
            <li><Link to="/inovatii/era-education" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">ERA Education</Link></li>
            <li><Link to="/inovatii/era-real-estate" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">ERA Real Estate</Link></li>
            <li><Link to="/inovatii/era-finance" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">ERA Finance</Link></li>
            <li><Link to="/inovatii/paperless-edu" className="text-sm text-[var(--foreground)]/80 hover:text-[var(--foreground)]">PaperLess EDU</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">{t("footer.contact")}</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="mailto:hello@erainnovations.ro" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)]">
                hello@erainnovations.ro
              </a>
            </li>
            <li className="text-[var(--muted-foreground)]">Piatra-Neamț · România</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--hairline)]">
        <div className="container-page flex flex-col gap-6 py-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="eyebrow">{t("footer.legal")}</div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
              <Link to="/legal/termeni" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("footer.terms")}</Link>
              <Link to="/legal/confidentialitate" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("footer.privacy")}</Link>
              <a href="https://anpc.ro/" target="_blank" rel="noreferrer noopener" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("footer.anpc")}</a>
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer noopener" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("footer.anpc.sol")}</a>
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noreferrer noopener" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)]">{t("footer.anpc.sal")}</a>
            </div>
            <p className="text-[12px] text-[var(--muted-foreground)]">{t("footer.cookies")}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--hairline)]">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-[var(--muted-foreground)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} ERA Innovations · MONKEYLAB ART S.R.L.</p>
          <p className="text-[11px] uppercase tracking-widest">Piatra-Neamț · RO</p>
        </div>
      </div>
    </footer>
  );
}