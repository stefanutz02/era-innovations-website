import { useEffect } from "react";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";

export default function Confidentialitate() {
  const { lang } = useT();

  useEffect(() => {
    updateSEO({
      title: "Politica de Confidențialitate — ERA Innovations",
      description: "Politica de confidențialitate ERA Innovations: ce date prelucrăm, cum folosim Google Analytics, drepturile tale GDPR.",
      canonical: "/legal/confidentialitate",
      ogUrl: "/legal/confidentialitate",
      noIndex: true,
    });
  }, []);

  return (
    <article className="relative pt-36 pb-24">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container-page relative max-w-3xl">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Legal</span>
        <h1 className="hero-display mt-4 text-4xl text-gradient md:text-5xl">
          {lang === "ro" ? "Politica de Confidențialitate" : "Privacy Policy"}
        </h1>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          {lang === "ro" ? "Ultima actualizare: aprilie 2026" : "Last updated: April 2026"}
        </p>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-[var(--foreground)]/85">
          {lang === "ro" ? <PrivacyRO /> : <PrivacyEN />}
        </div>
      </div>
    </article>
  );
}

function PrivacyRO() {
  return (
    <>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">1. Operatorul de date</h2>
      <p><strong>MONKEYLAB ART S.R.L.</strong>, sub brandul <strong>ERA Innovations</strong>, cu sediul în Piatra-Neamț, România, este operatorul de date personale pentru acest site. Contact: <a className="text-[var(--accent)] underline" href="mailto:hello@erainnovations.ro">hello@erainnovations.ro</a>.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">2. Ce date colectăm</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Date pe care ni le trimiți tu prin formularul de contact (nume, email, mesaj).</li>
        <li>Date tehnice anonimizate prin <strong>Google Analytics</strong> (pagini vizitate, durată, dispozitiv, sursă).</li>
      </ul>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">3. Google Analytics</h2>
      <p>Folosim Google Analytics 4 pentru a înțelege cum este utilizat site-ul. Datele sunt agregate și nu permit identificarea ta directă. Poți dezactiva colectarea instalând extensia oficială <em>Google Analytics Opt-out</em>.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">4. Cum folosim datele</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Pentru a-ți răspunde la mesaje și a discuta despre potențiale colaborări.</li>
        <li>Pentru a îmbunătăți site-ul și conținutul.</li>
        <li>Nu vindem și nu transferăm date personale către terți în scopuri de marketing.</li>
      </ul>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">5. Drepturile tale (GDPR)</h2>
      <p>Ai dreptul să accesezi, rectifici, ștergi sau restricționezi prelucrarea datelor tale, precum și dreptul la portabilitate și opoziție. Pentru a-ți exercita aceste drepturi, scrie-ne la <a className="text-[var(--accent)] underline" href="mailto:hello@erainnovations.ro">hello@erainnovations.ro</a>.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">6. ANPC</h2>
      <p>Pentru reclamații, te poți adresa <strong>Autorității Naționale pentru Protecția Consumatorilor (ANPC)</strong> prin platformele oficiale SOL și SAL.</p>
    </>
  );
}

function PrivacyEN() {
  return (
    <>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">1. Data controller</h2>
      <p><strong>MONKEYLAB ART S.R.L.</strong>, under the <strong>ERA Innovations</strong> brand, based in Piatra-Neamț, Romania. Contact: <a className="text-[var(--accent)] underline" href="mailto:hello@erainnovations.ro">hello@erainnovations.ro</a>.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">2. What we collect</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Data you send via the contact form (name, email, message).</li>
        <li>Anonymized technical data via <strong>Google Analytics</strong>.</li>
      </ul>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">3. Google Analytics</h2>
      <p>We use Google Analytics 4 to understand how the site is used. You can disable collection by installing the official <em>Google Analytics Opt-out</em> extension.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">4. How we use it</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>To reply to your messages and discuss potential collaborations.</li>
        <li>To improve the site and content.</li>
        <li>We never sell or share personal data for marketing.</li>
      </ul>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">5. Your GDPR rights</h2>
      <p>Access, rectify, delete or restrict your data at <a className="text-[var(--accent)] underline" href="mailto:hello@erainnovations.ro">hello@erainnovations.ro</a>.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">6. ANPC</h2>
      <p>For complaints contact the Romanian Consumer Protection Authority (<strong>ANPC</strong>) via ODR and ADR platforms.</p>
    </>
  );
}