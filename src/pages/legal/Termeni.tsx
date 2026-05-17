import { useEffect } from "react";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";

export default function Termeni() {
  const { lang } = useT();

  useEffect(() => {
    updateSEO({
      title: "Termeni și Condiții — ERA Innovations",
      description: "Termenii și condițiile de utilizare ale site-ului erainnovations.ro.",
      canonical: "/legal/termeni",
      ogUrl: "/legal/termeni",
      noIndex: true,
    });
  }, []);

  return (
    <article className="relative pt-36 pb-24">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container-page relative max-w-3xl">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-foreground)]">Legal</span>
        <h1 className="hero-display mt-4 text-4xl text-gradient md:text-5xl">
          {lang === "ro" ? "Termeni și Condiții" : "Terms and Conditions"}
        </h1>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          {lang === "ro" ? "Ultima actualizare: aprilie 2026" : "Last updated: April 2026"}
        </p>
        <div className="mt-10 space-y-6 text-[15px] leading-relaxed text-[var(--foreground)]/85">
          {lang === "ro" ? <TermenRO /> : <TermenEN />}
        </div>
      </div>
    </article>
  );
}

function TermenRO() {
  return (
    <>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">1. Date de identificare</h2>
      <p>Site-ul <strong>erainnovations.ro</strong> este operat de <strong>MONKEYLAB ART S.R.L.</strong>, sub brandul <strong>ERA Innovations</strong>, cu sediul în Piatra-Neamț, județul Neamț, România. Contact: <a className="text-[var(--accent)] underline" href="mailto:hello@erainnovations.ro">hello@erainnovations.ro</a>.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">2. Acceptarea termenilor</h2>
      <p>Prin accesarea și utilizarea acestui site, ești de acord cu termenii și condițiile de mai jos.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">3. Conținut</h2>
      <p>Toate textele, imaginile, codul-sursă, logo-urile și grafica de pe acest site sunt proprietatea ERA Innovations sau a partenerilor noștri și sunt protejate de legislația privind drepturile de autor.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">4. Servicii și oferte</h2>
      <p>Informațiile despre serviciile și platformele noastre au caracter informativ. Orice colaborare se desfășoară pe baza unui contract separat, semnat de ambele părți.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">5. Limitarea răspunderii</h2>
      <p>ERA Innovations nu este responsabilă pentru daune indirecte rezultate din utilizarea site-ului.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">6. Soluționarea disputelor</h2>
      <p>Eventualele dispute se vor soluționa pe cale amiabilă. În caz contrar, sunt competente instanțele române. Consumatorii se pot adresa <strong>ANPC</strong> prin platformele SOL și SAL.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">7. Modificări</h2>
      <p>Ne rezervăm dreptul de a actualiza acești termeni. Versiunea curentă este cea publicată pe această pagină.</p>
    </>
  );
}

function TermenEN() {
  return (
    <>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">1. Identification</h2>
      <p>The website <strong>erainnovations.ro</strong> is operated by <strong>MONKEYLAB ART S.R.L.</strong>, under the <strong>ERA Innovations</strong> brand, headquartered in Piatra-Neamț, Romania. Contact: <a className="text-[var(--accent)] underline" href="mailto:hello@erainnovations.ro">hello@erainnovations.ro</a>.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">2. Acceptance</h2>
      <p>By accessing and using this site, you agree to these terms.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">3. Content</h2>
      <p>All copy, images, source code, logos and graphics are owned by ERA Innovations or our partners and protected by copyright law.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">4. Services &amp; offers</h2>
      <p>Information about our services is informational. Any collaboration is based on a separate contract signed by both parties.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">5. Limitation of liability</h2>
      <p>ERA Innovations is not liable for indirect damages resulting from the use of the site.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">6. Disputes</h2>
      <p>Disputes will be resolved amicably. Otherwise, Romanian courts have jurisdiction. Consumers may turn to <strong>ANPC</strong> via ODR and ADR platforms.</p>
      <h2 className="text-xl font-semibold text-[var(--foreground)]">7. Changes</h2>
      <p>We reserve the right to update these terms. The current version is the one on this page.</p>
    </>
  );
}