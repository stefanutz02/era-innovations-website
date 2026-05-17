import { useEffect } from "react";
import { Users, FolderKanban, FileCheck2, MessagesSquare } from "lucide-react";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { updateSEO } from "@/lib/seo";

export default function EraCloud() {
  useEffect(() => {
    updateSEO({
      title: "ERA Cloud — Management intern pentru echipe | ERA Innovations",
      description: "ERA Cloud: platforma internă unde echipa, proiectele, documentele și procesele stau într-un singur loc. În dezvoltare.",
      canonical: "/inovatii/era-cloud",
      ogUrl: "/inovatii/era-cloud",
    });
  }, []);

  return (
    <ComingSoonPage
      eyebrow="Nr. 1 / 2026 · ERA Cloud"
      name="ERA Cloud"
      tagline={{ ro: "Toată firma ta — într-un singur loc.", en: "Your whole company — in one place." }}
      intro={{
        ro: "ERA Cloud este platforma internă a companiei tale: oameni, proiecte, documente, procese și comunicare interdepartamentală — fără să mai jonglezi între 7 unelte. Construită ca să înlocuiască ce nu funcționează, nu ca să adauge un tab în plus.",
        en: "ERA Cloud is your company's internal platform: people, projects, documents, processes and cross-team communication — without juggling 7 different tools. Built to replace what doesn't work, not to add another tab.",
      }}
      audience={{ ro: "echipe care vor disciplină, nu haos", en: "teams that want discipline, not chaos" }}
      accent="#7dd3d8"
      accentGlow="rgba(125,211,216,0.45)"
      eta={{ ro: "Q4 2026", en: "Q4 2026" }}
      features={[
        { icon: FolderKanban, title: { ro: "Proiecte cu metodă", en: "Projects with method" }, body: { ro: "Sprint-uri, milestones, dependențe — fără ca cineva să se piardă pe drum.", en: "Sprints, milestones, dependencies — without anyone getting lost." } },
        { icon: Users, title: { ro: "Oameni & roluri", en: "People & roles" }, body: { ro: "Angajați, departamente, permisiuni clare. Cine ce vede, cine ce poate.", en: "Employees, departments, clear permissions. Who sees what, who can do what." } },
        { icon: FileCheck2, title: { ro: "Documente vii", en: "Living docs" }, body: { ro: "Contracte, proceduri, decizii — versionate, semnate digital, ușor de găsit.", en: "Contracts, procedures, decisions — versioned, e-signed, easy to find." } },
        { icon: MessagesSquare, title: { ro: "Comunicare cu context", en: "Communication with context" }, body: { ro: "Discuții legate de un task sau document. Nu un alt Slack peste alte 3.", en: "Discussions tied to a task or document. Not another Slack on top of 3." } },
      ]}
    />
  );
}