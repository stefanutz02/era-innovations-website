import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Lang = "ro" | "en";

type Dict = Record<string, { ro: string; en: string }>;

export const dict = {
  // Nav
  "nav.about": { ro: "Despre", en: "About" },
  "nav.services": { ro: "Servicii", en: "Services" },
  "nav.work": { ro: "Portofoliu", en: "Portfolio" },
  "nav.platforms": { ro: "Inovații", en: "Innovations" },
  "nav.blog": { ro: "Blog", en: "Blog" },
  "nav.contact": { ro: "Contact", en: "Contact" },
  "nav.cta": { ro: "Începe un proiect", en: "Start a project" },

  // Hero
  "hero.badge": { ro: "Casa inovației din Piatra-Neamț", en: "The home of innovation from Piatra-Neamț" },
  "hero.title.1": { ro: "Inovăm.", en: "We innovate." },
  "hero.title.2": { ro: "Construim. Schimbăm.", en: "We build. We change." },
  "hero.sub": {
    ro: "Construim software custom pentru companii și platforme proprii pentru educație, imobiliare, finanțe și management. Inovație care chiar rezolvă ceva, făcută în Piatra-Neamț.",
    en: "We build custom software for companies and in-house platforms for education, real estate, finance and management. Innovation that actually solves something — made in Piatra-Neamț.",
  },
  "hero.cta.primary": { ro: "Spune-ne ideea ta", en: "Tell us your idea" },
  "hero.cta.secondary": { ro: "Vezi ce construim", en: "See what we build" },

  // Partners
  "partners.eyebrow": { ro: "Parteneri", en: "Partners" },
  "partners.title": { ro: "Oameni alături de care construim.", en: "People we build alongside." },

  // Ecosystem
  "eco.eyebrow": { ro: "Inovațiile ERA", en: "ERA Innovations" },
  "eco.title": { ro: "Construim sisteme, nu fragmente.", en: "We build systems, not fragments." },
  "eco.sub": {
    ro: "Cinci proiecte proprii, gândite să funcționeze împreună — pentru companii, școli, agenții și antreprenori. Toate, sub umbrela ERA.",
    en: "Five in-house projects designed to work together — for companies, schools, agencies and founders. All under one umbrella: ERA.",
  },
  "eco.status.soon": { ro: "În dezvoltare", en: "In development" },
  "eco.status.live": { ro: "Disponibil", en: "Live" },
  "eco.cloud.title": { ro: "ERA Cloud", en: "ERA Cloud" },
  "eco.cloud.body": {
    ro: "Platformă de management intern pentru echipe — proiecte, oameni, documente, procese. Un singur loc, fără silos.",
    en: "An internal management platform for teams — projects, people, documents, processes. One place, no silos.",
  },
  "eco.education.title": { ro: "ERA Education", en: "ERA Education" },
  "eco.education.body": {
    ro: "Sistem complet pentru școli: notare, teste, caiete electronice, comunicare profesori–elevi–părinți.",
    en: "A complete platform for schools: grading, tests, digital notebooks, teacher–student–parent communication.",
  },
  "eco.realestate.title": { ro: "ERA Real Estate", en: "ERA Real Estate" },
  "eco.realestate.body": {
    ro: "CRM dedicat agențiilor imobiliare — listări, leads, contracte, agenți, totul construit pentru piața din România.",
    en: "A CRM built for real estate agencies — listings, leads, contracts, agents — designed for the Romanian market.",
  },
  "eco.finance.title": { ro: "ERA Finance", en: "ERA Finance" },
  "eco.finance.body": {
    ro: "Software financiar pentru antreprenori, companii și contabili. Cifre clare, rapoarte simple, integrare cu SPV.",
    en: "Finance software for founders, companies and accountants. Clear numbers, simple reports, SPV integration.",
  },
  "eco.paperless.title": { ro: "PaperLess EDU", en: "PaperLess EDU" },
  "eco.paperless.body": {
    ro: "Inițiativă proprie care vrea să scoată hârtia din clase: tablete, stylus, notițe digitale și evaluări fără teancuri de foi.",
    en: "An in-house initiative to get paper out of classrooms: tablets, stylus, digital notes and tests without stacks of paper.",
  },

  // Manifesto
  "manifesto.eyebrow": { ro: "Manifest", en: "Manifesto" },
  "manifesto.title": { ro: "Inovație care chiar înseamnă ceva.", en: "Innovation that actually means something." },
  "manifesto.lead": {
    ro: "Lumea nu duce lipsă de tehnologie. Duce lipsă de tehnologie făcută cu cap.",
    en: "The world doesn't lack technology. It lacks technology made with intent.",
  },
  "manifesto.body.1": {
    ro: "Trăim într-un moment în care produsele digitale apar peste noapte și dispar la fel de repede. Suntem aici ca să facem opusul: software gândit să țină, platforme construite ca să fie folosite ani, idei care chiar rezolvă ceva.",
    en: "We live in a moment when digital products appear overnight and vanish just as fast. We're here to do the opposite: software built to last, platforms made to be used for years, ideas that actually solve something.",
  },
  "manifesto.body.2": {
    ro: "Lucrăm cu echipă mică, cu metodă, fără urgențe artificiale. Fiecare produs trece prin design system propriu, arhitectură gândită să țină și code review serios. Asta e diferența pe care o aducem.",
    en: "We work with a small team, on method, without manufactured urgency. Every product goes through our own design system, an architecture built to hold up, and serious code review. That's the difference we bring.",
  },
  "manifesto.link": { ro: "Cunoaște echipa", en: "Meet the team" },

  // CTA
  "cta.eyebrow": { ro: "Hai să construim", en: "Let's build" },
  "cta.title": { ro: "Ai o idee care merită construită?", en: "Got an idea worth building?" },
  "cta.body": { ro: "Scrie-ne și revenim în 24h cu primii pași concreți.", en: "Write to us and we'll get back in 24h with the first concrete steps." },

  // Footer
  "footer.tag": {
    ro: "Casa inovației din Piatra-Neamț. Software custom și platforme proprii pentru educație, imobiliare, finanțe și management.",
    en: "The home of innovation from Piatra-Neamț. Custom software and in-house platforms for education, real estate, finance and management.",
  },
  "footer.studio": { ro: "Grup", en: "Group" },
  "footer.resources": { ro: "Resurse", en: "Resources" },
  "footer.contact": { ro: "Contact", en: "Contact" },
  "footer.legal": { ro: "Legal", en: "Legal" },
  "footer.terms": { ro: "Termeni și Condiții", en: "Terms and Conditions" },
  "footer.privacy": { ro: "Politica de Confidențialitate", en: "Privacy Policy" },
  "footer.anpc": { ro: "ANPC", en: "ANPC" },
  "footer.anpc.sol": { ro: "ANPC — SOL", en: "ANPC — ODR" },
  "footer.anpc.sal": { ro: "ANPC — SAL", en: "ANPC — ADR" },
  "footer.cookies": { ro: "Folosim Google Analytics. Vezi Politica de Confidențialitate.", en: "We use Google Analytics. See our Privacy Policy." },

  // Services
  "svc.hero.eyebrow": { ro: "Servicii", en: "Services" },
  "svc.hero.title": { ro: "Construim software-ul de care chiar ai nevoie.", en: "We build the software you actually need." },
  "svc.hero.sub": {
    ro: "De la o aplicație custom până la o platformă întreagă, lucrăm la aceleași standarde cu care ne construim propriile produse.",
    en: "From a single custom app to an entire platform, we work to the same standards we apply to our own products.",
  },
  "svc.custom.eyebrow": { ro: "01 — Pentru tine", en: "01 — For you" },
  "svc.custom.title": { ro: "Software & site-uri custom", en: "Custom software & websites" },
  "svc.custom.body": {
    ro: "Aplicații web, mobile (iOS & Android) și desktop (Windows & macOS). Site-uri pentru orice domeniu — de la prezentare de brand până la SaaS de producție.",
    en: "Web, mobile (iOS & Android) and desktop (Windows & macOS) apps. Websites for any field — from brand showcases to production-grade SaaS.",
  },
  "svc.platforms.eyebrow": { ro: "02 — Ale noastre", en: "02 — Ours" },
  "svc.platforms.title": { ro: "Platformele ERA", en: "The ERA Platforms" },
  "svc.platforms.body": {
    ro: "Patru platforme construite în casă: Cloud, Real Estate, Education și Finance. Ne folosim de tot ce învățăm cu clienții ca să le facem mai bune.",
    en: "Four in-house platforms: Cloud, Real Estate, Education and Finance. Everything we learn with clients goes back into making them better.",
  },
  "svc.consult.eyebrow": { ro: "03 — Consultanță", en: "03 — Consulting" },
  "svc.consult.title": { ro: "Consultanță tehnică & strategie", en: "Technical consulting & strategy" },
  "svc.consult.body": {
    ro: "Audit, arhitectură, alegerea stack-ului, code review. Te ajutăm să iei deciziile care țin pe termen lung — fără șabloane, fără jargon.",
    en: "Audits, architecture, stack choices, code reviews. We help you make decisions that hold up — no templates, no jargon.",
  },
  "svc.pros.title": { ro: "De ce ERA", en: "Why ERA" },
  "svc.cons.title": { ro: "Când nu suntem potrivirea bună", en: "When we're not the right fit" },

  // About
  "about.hero.eyebrow": { ro: "Despre", en: "About" },
  "about.hero.title": { ro: "Un grup mic. Cu obsesia inovației.", en: "A small group. Obsessed with innovation." },
  "about.hero.sub": {
    ro: "ERA Innovations este compania-umbrelă din care cresc platformele ERA, proiectele custom pentru clienți și viitoarea asociație prin care ducem inovația mai departe.",
    en: "ERA Innovations is the umbrella company behind the ERA platforms, our custom client work and the future association through which we'll push innovation further.",
  },
  "about.team.title": { ro: "Echipa", en: "The team" },

  // Contact
  "contact.hero.title": { ro: "Spune-ne ideea ta.", en: "Tell us your idea." },
  "contact.hero.sub": {
    ro: "Răspundem în mai puțin de 24h. Prima discuție e gratuită și fără obligații.",
    en: "We respond in under 24h. The first conversation is free and with no strings attached.",
  },

  // Work
  "work.hero.eyebrow": { ro: "Portofoliu", en: "Portfolio" },
  "work.hero.title": { ro: "Proiecte construite cu metodă, nu cu grabă.", en: "Projects built with method, not haste." },
  "work.hero.subtitle": {
    ro: "O selecție din munca recentă. Fiecare proiect — un sistem complet, nu un livrabil izolat.",
    en: "A selection of recent work. Each project — a complete system, not an isolated deliverable.",
  },
  "work.obi.title": { ro: "Obiectiv Imobiliare", en: "Obiectiv Imobiliare" },
  "work.obi.desc": {
    ro: "Aplicație mobilă completă pentru o agenție imobiliară din Piatra Neamț. Sistem de căutare avansată, favorite, notificări push, chatbot AI (Alessia) și sincronizare în timp real cu platforma ImmoFlux. Construită cu React Native și Expo.",
    en: "Full-featured mobile app for a real estate agency in Piatra Neamț. Advanced search, favorites, push notifications, AI chatbot (Alessia), and real-time sync with the ImmoFlux platform. Built with React Native and Expo.",
  },
  "work.obi.tag": { ro: "Mobile · 2025", en: "Mobile · 2025" },
  "work.obi.googleplay": { ro: "Google Play", en: "Google Play" },
  "work.obi.appstore": { ro: "App Store", en: "App Store" },
  "work.anya.tag": { ro: "E-Commerce · 2025", en: "E-Commerce · 2025" },
  "work.anya.title": { ro: "Anya Events", en: "Anya Events" },
  "work.anya.desc": {
    ro: "Magazin online complet pentru o companie care produce obiecte pentru evenimente. Design premium, sistem de coș, plăți integrate și panou de administrare intuitiv — totul pe Shopify.",
    en: "Full e-commerce store for a company who makes objects for events. Premium design, cart system, integrated payments and an intuitive admin panel — all on Shopify.",
  },
  "work.anya.visit": { ro: "Vezi site", en: "Visit site" },

  // Common
  "common.learn": { ro: "Află mai mult", en: "Learn more" },
  "common.visit": { ro: "Vezi site", en: "Visit site" },
  "common.soon": { ro: "În curând", en: "Coming soon" },
} satisfies Dict;

export type DictKey = keyof typeof dict;

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
}>({
  lang: "ro",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ro");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("era.lang") as Lang | null;
      if (saved === "ro" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("era.lang", l);
    } catch {}
  };

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (k: DictKey) => (dict[k] ? dict[k][lang] : k),
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  return useContext(I18nContext);
}