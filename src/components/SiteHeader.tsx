import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { useT, type Lang } from "@/lib/i18n";

const platforms = [
  { to: "/inovatii/era-cloud", name: "ERA Cloud", desc: { ro: "Management intern pentru echipe", en: "Internal team management" } },
  { to: "/inovatii/era-education", name: "ERA Education", desc: { ro: "Sistem digital pentru școli", en: "Digital system for schools" } },
  { to: "/inovatii/era-real-estate", name: "ERA Real Estate", desc: { ro: "CRM pentru agenții imobiliare", en: "CRM for real estate agencies" } },
  { to: "/inovatii/era-finance", name: "ERA Finance", desc: { ro: "Software financiar pentru antreprenori", en: "Finance software for founders" } },
  { to: "/inovatii/paperless-edu", name: "PaperLess EDU", desc: { ro: "Educație fără hârtie", en: "Education without paper" } },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [platOpen, setPlatOpen] = useState(false);
  const platRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const { t, lang, setLang } = useT();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setPlatOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!platOpen) return;
    const onClick = (e: MouseEvent) => {
      if (platRef.current && !platRef.current.contains(e.target as Node)) setPlatOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [platOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-[var(--hairline)] bg-[var(--background)]/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="ERA Innovations">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 rounded-full border border-[var(--hairline)] bg-[var(--background)]/50 px-1.5 py-1 backdrop-blur-xl lg:flex">
          <NavItem to="/about" label={t("nav.about")} active={pathname === "/about"} />
          <NavItem to="/services" label={t("nav.services")} active={pathname === "/services"} />
          <NavItem to="/work" label={t("nav.work")} active={pathname === "/work"} />

          {/* Platforms dropdown */}
          <div ref={platRef} className="relative">
            <button
              type="button"
              onClick={() => setPlatOpen((v) => !v)}
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                pathname.startsWith("/inovatii")
                  ? "bg-[var(--foreground)]/8 text-[var(--foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
              )}
              aria-haspopup="menu"
              aria-expanded={platOpen}
            >
              {t("nav.platforms")}
              <ChevronDown className={cn("h-3 w-3 transition-transform", platOpen && "rotate-180")} />
            </button>
            {platOpen && (
              <div
                role="menu"
                className="absolute left-1/2 top-[calc(100%+10px)] z-50 w-72 -translate-x-1/2 rounded-2xl border border-[var(--hairline)] bg-[var(--background)] p-2 shadow-xl animate-fade-in"
              >
                {platforms.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    role="menuitem"
                    className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-[var(--foreground)]/5"
                  >
                    <span className="text-[13.5px] font-medium tracking-tight text-[var(--foreground)]">{p.name}</span>
                    <span className="text-[12px] text-[var(--muted-foreground)]">{p.desc[lang]}</span>
                  </Link>
                ))}
                <div className="my-1 h-px bg-[var(--hairline)]" />
                <Link
                  to="/services"
                  className="block rounded-xl px-3 py-2 text-[12.5px] text-[var(--muted-foreground)] transition-colors hover:bg-[var(--foreground)]/5 hover:text-[var(--foreground)]"
                >
                  {lang === "ro" ? "Vezi toate inovațiile ERA →" : "See all ERA innovations →"}
                </Link>
              </div>
            )}
          </div>

          <NavItem to="/blog" label={t("nav.blog")} active={pathname === "/blog"} />
          <NavItem to="/contact" label={t("nav.contact")} active={pathname === "/contact"} />
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LangSwitch lang={lang} setLang={setLang} />
          <Link
            to="/contact"
            className="inline-flex h-8 items-center rounded-full bg-[var(--foreground)] px-3.5 text-[12.5px] font-medium text-[var(--background)] transition-opacity hover:opacity-90"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch lang={lang} setLang={setLang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--foreground)]"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--hairline)] bg-[var(--background)]/95 backdrop-blur-xl lg:hidden">
          <nav className="container-page flex flex-col py-4">
            {[
              { to: "/about", label: t("nav.about") },
              { to: "/services", label: t("nav.services") },
              { to: "/work", label: t("nav.work") },
              { to: "/blog", label: t("nav.blog") },
              { to: "/contact", label: t("nav.contact") },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-3 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-[var(--hairline)] pt-2">
              <div className="px-1 pb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">
                {t("nav.platforms")}
              </div>
              {platforms.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  className="block py-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                >
                  {p.name}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-[var(--foreground)] px-4 text-sm font-medium text-[var(--background)]"
            >
              {t("nav.cta")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label, active }: { to: string; label: string; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
        active
          ? "bg-[var(--foreground)]/8 text-[var(--foreground)]"
          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
      )}
    >
      {label}
    </Link>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="inline-flex items-center rounded-full border border-[var(--hairline)] bg-[var(--background)]/40 p-0.5 font-mono text-[10.5px] uppercase tracking-widest backdrop-blur">
      {(["ro", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          className={cn(
            "rounded-full px-2 py-1 transition-colors",
            lang === l
              ? "bg-[var(--foreground)]/10 text-[var(--foreground)]"
              : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]",
          )}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  );
}