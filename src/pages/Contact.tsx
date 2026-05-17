// src/pages/Contact.tsx
import { useEffect, useState } from "react";
import { Mail, MapPin, ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useT } from "@/lib/i18n";
import { updateSEO } from "@/lib/seo";
import { sendContactMessage } from "@/lib/api";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t, lang } = useT();

  useEffect(() => {
    updateSEO({
      title: "Contact — ERA Innovations — Software custom, web & mobile România",
      description:
        "Scrie-ne la hello@erainnovations.ro. Răspundem în mai puțin de 24h. Software custom, web, mobile și SaaS — pentru afaceri din România și internațional.",
      canonical: "/contact",
      ogUrl: "/contact",
    });
  }, []);

  return (
    <>
      <PageHero eyebrow={t("nav.contact")} title={t("contact.hero.title")} subtitle={t("contact.hero.sub")} />

      <section className="container-page pt-16 pb-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <a
              href="mailto:hello@erainnovations.ro"
              className="group flex items-start gap-4 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/40 p-6 transition-colors hover:bg-[var(--surface)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--foreground)]/5">
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">Email</div>
                <div className="mt-1 text-base font-medium">hello@erainnovations.ro</div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[var(--muted-foreground)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--foreground)]" />
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/40 p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--foreground)]/5">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">Studio</div>
                <div className="mt-1 text-base font-medium">Piatra-Neamț, România</div>
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                  {lang === "ro"
                    ? "Lucrăm remote cu clienți din toată țara și din afara ei."
                    : "We work remotely with clients across Romania and beyond."}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/40 p-6">
              <div className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
                {lang === "ro" ? "Resurse" : "Resources"}
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span>{lang === "ro" ? "Oferta noastră" : "Our offer"}</span>
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">web</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{lang === "ro" ? "Studii de caz" : "Case studies"}</span>
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">web</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>{lang === "ro" ? "Prezentare ERA Innovations" : "ERA Innovations deck"}</span>
                  <span className="font-mono text-xs text-[var(--muted-foreground)]">pdf</span>
                </li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const { lang } = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const labels = {
    title: lang === "ro" ? "Hai să vorbim" : "Let's talk",
    sub: lang === "ro" ? "Răspundem în mai puțin de 24h." : "We respond in under 24h.",
    name: lang === "ro" ? "Nume" : "Name",
    email: "Email",
    company: lang === "ro" ? "Companie" : "Company",
    project: lang === "ro" ? "Despre proiect" : "About the project",
    namePlaceholder: lang === "ro" ? "Ion Popescu" : "Jane Doe",
    emailPlaceholder: lang === "ro" ? "ion@firma.ro" : "you@company.com",
    companyPlaceholder: lang === "ro" ? "Firma SRL" : "Acme Inc.",
    projectPlaceholder:
      lang === "ro"
        ? "Spune-ne pe scurt ce vrei să construiești..."
        : "Tell us briefly what you want to build...",
    send: lang === "ro" ? "Trimite mesajul" : "Send message",
    sending: lang === "ro" ? "Se trimite..." : "Sending...",
    successTitle: lang === "ro" ? "Mesaj trimis." : "Message sent.",
    successBody:
      lang === "ro"
        ? "Mulțumim. Revenim în mai puțin de 24h."
        : "Thanks. We'll get back within 24h.",
    errorTitle: lang === "ro" ? "Ceva nu a mers" : "Something went wrong",
    errorFallback:
      lang === "ro"
        ? "Te rugăm să încerci din nou sau scrie-ne direct la hello@erainnovations.ro."
        : "Please try again or email us at hello@erainnovations.ro.",
    another: lang === "ro" ? "Trimite alt mesaj" : "Send another message",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setErrorMsg(null);

    try {
      await sendContactMessage({
        name: name.trim(),
        email: email.trim(),
        company: company.trim() || undefined,
        message: message.trim(),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : labels.errorFallback);
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/40 p-8">
        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{labels.successTitle}</h3>
          <p className="mt-2 text-sm text-[var(--muted-foreground)]">{labels.successBody}</p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm text-[var(--accent)] hover:underline"
        >
          {labels.another}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-[var(--hairline)] bg-[var(--surface)]/40 p-8"
    >
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{labels.title}</h3>
        <p className="mt-1 text-sm text-[var(--muted-foreground)]">{labels.sub}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={labels.name}
          name="name"
          value={name}
          onChange={setName}
          placeholder={labels.namePlaceholder}
          required
        />
        <Field
          label={labels.email}
          name="email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder={labels.emailPlaceholder}
          required
        />
      </div>

      <Field
        label={labels.company}
        name="company"
        value={company}
        onChange={setCompany}
        placeholder={labels.companyPlaceholder}
      />

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
          {labels.project}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={labels.projectPlaceholder}
          className="mt-2 w-full resize-none rounded-lg border border-[var(--hairline)] px-3 py-2.5 text-sm focus:border-[var(--accent)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]/40"
          style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-3 rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-200">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <div className="font-medium">{labels.errorTitle}</div>
            <div className="text-red-200/80">{errorMsg || labels.errorFallback}</div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 text-sm font-medium text-[var(--background)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> {labels.sending}
          </>
        ) : (
          <>
            {labels.send} <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-[var(--muted-foreground)]">
        {label}
        {required && <span className="ml-1 text-[var(--accent)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 h-10 w-full rounded-lg border border-[var(--hairline)] px-3 text-sm focus:border-[var(--accent)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]/40"
        style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}
      />
    </div>
  );
}
