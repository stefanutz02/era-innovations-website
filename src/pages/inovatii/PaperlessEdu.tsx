// src/pages/inovatii/PaperlessEdu.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Mail, Sparkles, TreePine, Wallet,
  GraduationCap, Tablet, PenLine, ClipboardCheck, Cloud,
  School, HandCoins, Check,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";

const ACCENT = "#60c8a0";
const ACCENT_GLOW = "rgba(96,200,160,0.45)";

export default function PaperlessEdu() {
  useEffect(() => {
    updateSEO({
      title: "PaperLess EDU — Educație fără hârtie | ERA Innovations",
      description: "PaperLess EDU este inițiativa ERA Innovations care vrea să scoată hârtia din clase: tablete, stylus, notițe și evaluări digitale.",
      canonical: "/inovatii/paperless-edu",
      ogUrl: "/inovatii/paperless-edu",
    });
  }, []);

  return (
    <>
      <HeroSection />
      <Stats />
      <Problem />
      <PaperToTablet />
      <HowItWorks />
      <SignUp />
    </>
  );
}

function HeroSection() {
  const { lang } = useT();
  return (
    <section className="relative overflow-hidden border-b border-[var(--hairline)] pt-36 pb-24 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <div
        className="glow-orb"
        style={{ width: 760, height: 760, left: "50%", top: -300, transform: "translateX(-50%)", background: `radial-gradient(circle, ${ACCENT_GLOW}, transparent 60%)` }}
        aria-hidden
      />
      <div className="container-page relative">
        <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 14px ${ACCENT}` }} />
          ER nr. 00002 · {lang === "ro" ? "Inițiativă proprie ERA" : "An ERA initiative"}
        </div>
        <h1 className="hero-display mt-5 max-w-5xl text-5xl text-liquid md:text-[88px]">
          {lang === "ro" ? (<>Scoatem hârtia <br /> din clase.</>) : (<>Taking paper <br /> out of the classroom.</>)}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--foreground)]/90 md:text-xl">
          {lang === "ro"
            ? "Tablete, stylus, notițe și evaluări digitale. O școală mai aerisită, mai ieftină pentru părinți și mai verde pentru toată lumea."
            : "Tablets, stylus, digital notes and assessments. A school that's lighter, cheaper for parents and greener for everyone."}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#sign-up" className="inline-flex h-11 items-center gap-2 rounded-full bg-[var(--foreground)] px-5 text-[13.5px] font-medium text-[var(--background)] transition-opacity hover:opacity-90">
            {lang === "ro" ? "Vreau să particip" : "I want in"} <ArrowRight className="h-4 w-4" />
          </a>
          <a href="mailto:paperless.edu@erainnovations.ro" className="glass inline-flex h-11 items-center gap-2 rounded-full px-5 text-[13.5px] font-medium text-[var(--foreground)]/90 transition-colors hover:bg-[var(--surface)]">
            <Mail className="h-4 w-4" /> paperless.edu@erainnovations.ro
          </a>
        </div>
      </div>
    </section>
  );
}

function useCounter(target: number, durationMs = 1400) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(target * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs]);
  return { val, ref };
}

function Stat({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: typeof TreePine }) {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} className="glass relative overflow-hidden rounded-2xl p-7">
      <Icon className="h-5 w-5" style={{ color: ACCENT }} />
      <div className="hero-display mt-5 text-4xl text-liquid md:text-5xl">
        {val.toLocaleString("ro-RO")}
        <span className="ml-1 text-2xl text-[var(--foreground)]/70 md:text-3xl">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-[var(--muted-foreground)]">{label}</p>
    </div>
  );
}

function Stats() {
  const { lang } = useT();
  return (
    <section className="container-page py-20 md:py-24">
      <Reveal>
        <span className="eyebrow">{lang === "ro" ? "De ce contează" : "Why it matters"}</span>
        <h2 className="hero-display mt-3 max-w-3xl text-3xl text-liquid md:text-5xl">
          {lang === "ro" ? "Cifre care nu ar trebui să mai existe." : "Numbers that shouldn't still exist."}
        </h2>
      </Reveal>
      <Reveal delay={120}>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value={200} suffix="kg" label={lang === "ro" ? "Hârtie consumată anual de o clasă medie" : "Paper used yearly by an average class"} icon={TreePine} />
          <Stat value={1200} suffix={lang === "ro" ? "lei" : "RON"} label={lang === "ro" ? "Cheltuiala medie pentru rechizite per elev" : "Average cost of supplies per student"} icon={Wallet} />
          <Stat value={30} suffix="%" label={lang === "ro" ? "din timpul profesorilor pentru corectare pe hârtie" : "of teachers' time spent grading paper"} icon={ClipboardCheck} />
          <Stat value={5} suffix="kg" label={lang === "ro" ? "Greutatea medie a ghiozdanului unui elev de gimnaziu" : "Average backpack weight of a middle-schooler"} icon={GraduationCap} />
        </div>
      </Reveal>
    </section>
  );
}

function Problem() {
  const { lang } = useT();
  const items = [
    { bad: lang === "ro" ? "Caiete pierdute, manuale rupte, fișe printate la rând" : "Lost notebooks, torn textbooks, endless printed sheets", good: lang === "ro" ? "Tot materialul, sincronizat, mereu acolo" : "All materials, synced, always available" },
    { bad: lang === "ro" ? "Profesori care duc acasă teancuri de teste de corectat" : "Teachers carrying piles of tests home for grading", good: lang === "ro" ? "Evaluări digitale cu corecție automată" : "Digital tests with auto-grading" },
    { bad: lang === "ro" ? "Părinți care nu știu ce s-a făcut la școală" : "Parents who don't know what happened at school", good: lang === "ro" ? "Acces în timp real la teme, note și anunțuri" : "Real-time access to homework, grades and notices" },
    { bad: lang === "ro" ? "Ghiozdane de 5 kg și spate strâmb" : "5 kg backpacks and bad posture", good: lang === "ro" ? "O tabletă cu stylus. Atât." : "One tablet with a stylus. That's it." },
  ];
  return (
    <section className="border-y border-[var(--hairline)] bg-[var(--surface)]/30">
      <div className="container-page py-20 md:py-24">
        <Reveal>
          <span className="eyebrow">{lang === "ro" ? "Problema vs. soluția" : "Problem vs. solution"}</span>
          <h2 className="hero-display mt-3 max-w-3xl text-3xl text-liquid md:text-5xl">
            {lang === "ro" ? "De la teancuri de hârtie la o tabletă." : "From stacks of paper to one tablet."}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2">
          <div className="bg-[var(--background)] p-7">
            <div className="text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">{lang === "ro" ? "Acum" : "Today"}</div>
            <ul className="mt-4 space-y-3">
              {items.map((it) => (
                <li key={it.bad} className="flex items-start gap-2.5 text-[14px] text-[var(--muted-foreground)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]/30" />
                  {it.bad}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--background)] p-7">
            <div className="text-[11px] uppercase tracking-widest" style={{ color: ACCENT }}>{lang === "ro" ? "Cu PaperLess EDU" : "With PaperLess EDU"}</div>
            <ul className="mt-4 space-y-3">
              {items.map((it) => (
                <li key={it.good} className="flex items-start gap-2.5 text-[14px] text-[var(--foreground)]/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} />
                  {it.good}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PaperToTablet() {
  const { lang } = useT();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const total = rect.height - vh;
      if (total <= 0) { setProgress(0); return; }
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const paperOpacity = 1 - Math.min(1, progress * 1.6);
  const paperRotate = -6 + progress * 18;
  const paperShift = progress * -120;
  const tabletScale = 0.7 + Math.min(1, progress * 1.1) * 0.35;
  const tabletOpacity = Math.min(1, Math.max(0, (progress - 0.2) * 1.6));
  const captionIndex = progress < 0.33 ? 0 : progress < 0.7 ? 1 : 2;

  const captions = [
    { ro: "Caiete, manuale, fișe — totul pe hârtie.", en: "Notebooks, textbooks, sheets — all on paper." },
    { ro: "Toate notițele, sincronizate. Stylus pe sticlă, nu pix pe foaie.", en: "All notes, synced. Stylus on glass, not pen on paper." },
    { ro: "Profesorul vede tema în timp real. Părintele, la fel.", en: "The teacher sees the homework in real time. So does the parent." },
  ];

  return (
    <section ref={sectionRef} className="relative" style={{ height: "260vh" }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden />
        <div className="glow-orb" style={{ width: 600, height: 600, left: "30%", top: "10%", background: `radial-gradient(circle, ${ACCENT_GLOW}, transparent 60%)` }} aria-hidden />
        <div className="container-page relative grid w-full gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">{lang === "ro" ? "Cum se simte" : "How it feels"}</span>
            <h2 className="hero-display mt-3 text-3xl text-liquid md:text-5xl">
              {lang === "ro" ? "De la grămadă de hârtie..." : "From a pile of paper..."}
              <br />
              <span style={{ color: ACCENT }}>{lang === "ro" ? "...la o singură tabletă." : "...to a single tablet."}</span>
            </h2>
            <p key={captionIndex} className="mt-6 max-w-md animate-fade-in text-[15px] leading-relaxed text-[var(--muted-foreground)] md:text-[17px]">
              {captions[captionIndex][lang]}
            </p>
            <div className="mt-8 h-[2px] w-40 overflow-hidden rounded-full bg-[var(--hairline)]">
              <div className="h-full rounded-full transition-[width] duration-100" style={{ width: `${Math.round(progress * 100)}%`, background: ACCENT }} />
            </div>
          </div>

          <div className="relative h-[420px] md:h-[520px]">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="absolute left-1/2 top-1/2 h-[300px] w-[230px] rounded-md border border-[var(--hairline)] bg-[var(--foreground)]/95 shadow-2xl md:h-[380px] md:w-[290px]"
                style={{ transform: `translate(-50%, -50%) translate(${i * 8 + paperShift}px, ${i * -8}px) rotate(${paperRotate + i * 2}deg)`, opacity: paperOpacity, transition: "opacity 0.2s linear" }}>
                <div className="m-5 space-y-2">
                  {[...Array(10)].map((_, j) => (
                    <div key={j} className="h-1.5 rounded-full" style={{ background: "rgba(60,70,100,0.5)", width: `${50 + ((j * 7) % 45)}%` }} />
                  ))}
                </div>
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 h-[340px] w-[260px] rounded-[28px] border p-3 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.7)] md:h-[440px] md:w-[330px]"
              style={{ borderColor: "rgba(255,255,255,0.12)", background: "linear-gradient(to bottom, #1a2030, #0d0f14)", transform: `translate(-50%, -50%) scale(${tabletScale})`, opacity: tabletOpacity, transition: "opacity 0.2s linear" }}>
              <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-[#131720]">
                <div className="flex items-center justify-between border-b border-[var(--hairline)] px-4 py-2">
                  <span className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">PaperLess EDU</span>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                </div>
                <div className="space-y-3 p-4">
                  <div className="text-[11px] text-[var(--muted-foreground)]">{lang === "ro" ? "Matematică · Geometrie" : "Math · Geometry"}</div>
                  <div className="text-sm font-semibold tracking-tight">{lang === "ro" ? "Teorema lui Pitagora" : "Pythagorean theorem"}</div>
                  <div className="space-y-1.5 pt-2">
                    {[...Array(7)].map((_, j) => (
                      <div key={j} className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)", width: `${55 + ((j * 11) % 40)}%` }} />
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg border border-[var(--hairline)] p-3">
                    <div className="text-[10px] uppercase tracking-widest text-[var(--muted-foreground)]">{lang === "ro" ? "Temă" : "Homework"}</div>
                    <div className="mt-1 text-[12px] text-[var(--foreground)]/85">a² + b² = c²</div>
                  </div>
                </div>
                <div className="absolute right-6 bottom-6 flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--background)]/60 px-2 py-1 text-[10px] text-[var(--muted-foreground)] backdrop-blur">
                  <PenLine className="h-3 w-3" style={{ color: ACCENT }} /> Stylus
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const { lang } = useT();
  const steps = [
    { icon: Tablet, t: { ro: "Tableta", en: "The tablet" }, b: { ro: "Un singur device pentru fiecare elev — robust, gândit pentru școală, cu stylus inclus.", en: "One device per student — rugged, school-ready, stylus included." } },
    { icon: PenLine, t: { ro: "Aplicația pentru notițe", en: "The notes app" }, b: { ro: "Caiet digital cu scris de mână, audio, atașamente. Sincronizare automată în cloud.", en: "Digital notebook with handwriting, audio, attachments. Auto cloud sync." } },
    { icon: ClipboardCheck, t: { ro: "Evaluări fără hârtie", en: "Paperless assessments" }, b: { ro: "Teste planificate, anti-fraudă, cu corecție automată acolo unde se poate.", en: "Scheduled, anti-cheat tests, auto-graded where possible." } },
    { icon: Cloud, t: { ro: "Cloud pentru școală", en: "School cloud" }, b: { ro: "Profesori, elevi, părinți — fiecare cu rolul lui, totul într-un singur ecosistem.", en: "Teachers, students, parents — each with their role, in one ecosystem." } },
  ];
  return (
    <section className="container-page py-20 md:py-24">
      <Reveal>
        <span className="eyebrow">{lang === "ro" ? "Cum funcționează" : "How it works"}</span>
        <h2 className="hero-display mt-3 max-w-3xl text-3xl text-liquid md:text-5xl">
          {lang === "ro" ? "Patru piese. Un singur ecosistem." : "Four pieces. One ecosystem."}
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[var(--hairline)] bg-[var(--hairline)] md:grid-cols-2">
        {steps.map(({ icon: Icon, t, b }, i) => (
          <Reveal key={t.ro} delay={i * 80}>
            <div className="h-full bg-[var(--background)] p-7">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--hairline)] bg-[var(--surface)]/60" style={{ color: ACCENT }}>
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{t[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">{b[lang]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

type AudienceTab = "school" | "investor";

function SignUp() {
  const { lang } = useT();
  const [tab, setTab] = useState<AudienceTab>("school");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(tab === "school" ? "[PaperLess EDU] Înscriere școală" : "[PaperLess EDU] Interes investitor");
    const body = encodeURIComponent(Array.from(data.entries()).map(([k, v]) => `${k}: ${v}`).join("\n"));
    window.location.href = `mailto:paperless.edu@erainnovations.ro?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass = [
    "w-full rounded-xl border border-[var(--hairline)] px-4 py-2.5 text-[14px]",
    "outline-none transition-colors",
    "focus:border-[var(--foreground)]/30",
  ].join(" ");

  const inputStyle = {
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
  };

  return (
    <section id="sign-up" className="border-t border-[var(--hairline)]">
      <div className="container-page py-24 md:py-32">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <span className="eyebrow">{lang === "ro" ? "Hai cu noi" : "Join us"}</span>
              <h2 className="hero-display mt-3 text-3xl text-liquid md:text-5xl">{lang === "ro" ? "Construim împreună." : "Let's build it together."}</h2>
              <p className="mt-5 max-w-md text-[15px] text-[var(--muted-foreground)]">
                {lang === "ro" ? "Suntem la început. Căutăm școli pilot care vor să încerce și investitori care văd cât de mult se poate schimba o școală cu o tabletă." : "We're at the start. We're looking for pilot schools willing to try and investors who see how much a single tablet can change a school."}
              </p>
              <div className="mt-10 grid gap-5">
                <div className="flex items-start gap-3">
                  <School className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} />
                  <div>
                    <div className="text-sm font-semibold tracking-tight">{lang === "ro" ? "Pentru școli" : "For schools"}</div>
                    <p className="mt-1 text-[13px] text-[var(--muted-foreground)]">{lang === "ro" ? "Pilot gratuit pe o clasă în primul an. Suport tehnic complet, training profesori inclus." : "Free pilot on one class in year one. Full tech support, teacher training included."}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HandCoins className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} />
                  <div>
                    <div className="text-sm font-semibold tracking-tight">{lang === "ro" ? "Pentru investitori" : "For investors"}</div>
                    <p className="mt-1 text-[13px] text-[var(--muted-foreground)]">{lang === "ro" ? "Pitch deck, studiu de fezabilitate, plan financiar — toate pregătite." : "Pitch deck, feasibility study, financial plan — all ready."}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong relative overflow-hidden rounded-3xl p-6 md:p-8">
              <div className="glow-orb" style={{ width: 360, height: 360, right: -120, top: -120, background: `radial-gradient(circle, ${ACCENT_GLOW}, transparent 60%)` }} aria-hidden />
              <div className="relative">
                <div className="inline-flex items-center rounded-full border border-[var(--hairline)] bg-[var(--background)]/40 p-0.5">
                  {([{ id: "school" as const, label: lang === "ro" ? "Sunt o școală" : "I'm a school", icon: School }, { id: "investor" as const, label: lang === "ro" ? "Sunt investitor" : "I'm an investor", icon: HandCoins }]).map(({ id, label, icon: Icon }) => (
                    <button key={id} type="button" onClick={() => { setTab(id); setSubmitted(false); }}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium transition-colors ${tab === id ? "bg-[var(--foreground)] text-[var(--background)]" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"}`}>
                      <Icon className="h-3.5 w-3.5" /> {label}
                    </button>
                  ))}
                </div>

                {submitted ? (
                  <div className="mt-8 flex flex-col items-start gap-3 rounded-2xl border border-[var(--hairline)] bg-[var(--background)]/40 p-6">
                    <Sparkles className="h-5 w-5" style={{ color: ACCENT }} />
                    <p className="text-sm text-[var(--foreground)]/90">{lang === "ro" ? "Ți-am deschis un draft de email. Trimite-l și revenim în 48h." : "We opened a draft email for you. Send it and we'll get back in 48h."}</p>
                    <button onClick={() => setSubmitted(false)} className="text-[12px] text-[var(--muted-foreground)] underline-offset-4 hover:text-[var(--foreground)] hover:underline">{lang === "ro" ? "Trimite alt formular" : "Send another"}</button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="mt-8 grid gap-3">
                    {tab === "school" ? (<>
                      <FormField name={lang === "ro" ? "Numele școlii" : "School name"} input={<input required name="school" className={inputClass} style={inputStyle} />} />
                      <FormField name={lang === "ro" ? "Localitate" : "Town"} input={<input required name="town" className={inputClass} style={inputStyle} />} />
                      <FormField name={lang === "ro" ? "Persoana de contact" : "Contact person"} input={<input required name="contact" className={inputClass} style={inputStyle} />} />
                      <FormField name="Email" input={<input required type="email" name="email" className={inputClass} style={inputStyle} />} />
                      <FormField name={lang === "ro" ? "Câți elevi sunt în școală?" : "How many students?"} input={<input name="students" type="number" min={0} className={inputClass} style={inputStyle} />} />
                    </>) : (<>
                      <FormField name={lang === "ro" ? "Nume complet" : "Full name"} input={<input required name="name" className={inputClass} style={inputStyle} />} />
                      <FormField name={lang === "ro" ? "Companie / fond" : "Company / fund"} input={<input name="company" className={inputClass} style={inputStyle} />} />
                      <FormField name="Email" input={<input required type="email" name="email" className={inputClass} style={inputStyle} />} />
                      <FormField name={lang === "ro" ? "Mărimea biletului (EUR)" : "Ticket size (EUR)"} input={<input name="ticket" className={inputClass} style={inputStyle} placeholder="50.000 — 500.000" />} />
                      <FormField name={lang === "ro" ? "Mesaj (opțional)" : "Message (optional)"} input={<textarea name="message" rows={3} className={`${inputClass} resize-none`} style={inputStyle} />} />
                    </>)}
                    <button type="submit" className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 text-[13px] font-medium text-[var(--background)] transition-opacity hover:opacity-90">
                      {lang === "ro" ? "Trimite" : "Submit"} <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <p className="text-[11px] text-[var(--muted-foreground)]">{lang === "ro" ? "Trimitem datele direct pe email. Nu stocăm nimic." : "We send the form straight to email. We don't store anything."}</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 flex items-center justify-between rounded-2xl border border-[var(--hairline)] bg-[var(--background)]/60 p-6">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">{lang === "ro" ? "Vrei doar să afli mai multe?" : "Just want to learn more?"}</div>
              <p className="mt-1 text-sm text-[var(--foreground)]/90">paperless.edu@erainnovations.ro</p>
            </div>
            <Link to="/contact" className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--hairline)] bg-[var(--surface)]/40 px-4 text-[13px] font-medium text-[var(--foreground)]/90 transition-colors hover:bg-[var(--surface)]">
              {lang === "ro" ? "Contact general" : "General contact"} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({ name, input }: { name: string; input: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-widest text-[var(--muted-foreground)]">{name}</span>
      {input}
    </label>
  );
}