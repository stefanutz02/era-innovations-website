import { useEffect } from "react";
import { GraduationCap, ClipboardList, BookOpen, MessageCircle } from "lucide-react";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { updateSEO } from "@/lib/seo";

export default function EraEducation() {
  useEffect(() => {
    updateSEO({
      title: "ERA Education — Sistem digital pentru școli | ERA Innovations",
      description: "ERA Education: notare, teste, caiete electronice și comunicare profesori-elevi-părinți într-o singură platformă.",
      canonical: "/inovatii/era-education",
      ogUrl: "/inovatii/era-education",
    });
  }, []);

  return (
    <ComingSoonPage
      eyebrow="NO. 2 / 2026 · ERA Education"
      name="ERA Education"
      tagline={{ ro: "Școala, fără mormane de hârtie.", en: "School, without piles of paper." }}
      intro={{
        ro: "ERA Education este sistemul complet pentru școli: catalog electronic, teste online, caiete digitale, comunicare directă profesor-elev-părinte. Construit ca să simplifice viața profesorilor, nu să le mai dea o sarcină în plus.",
        en: "ERA Education is the all-in-one school platform: digital gradebook, online tests, digital notebooks, direct teacher-student-parent communication. Built to simplify teachers' lives, not to add another task.",
      }}
      audience={{ ro: "școli care vor să iasă din 1995", en: "schools ready to leave 1995" }}
      accent="#60c8a0"
      accentGlow="rgba(96,200,160,0.45)"
      eta={{ ro: "An școlar 2026-2027", en: "School year 2026-2027" }}
      features={[
        { icon: ClipboardList, title: { ro: "Catalog & evaluări", en: "Gradebook & assessments" }, body: { ro: "Note, absențe, medii — calculate corect și transparent. Fără caiet de hârtie.", en: "Grades, absences, averages — computed correctly and transparently. No paper logbook." } },
        { icon: BookOpen, title: { ro: "Caiete digitale", en: "Digital notebooks" }, body: { ro: "Materiale, teme, fișe de lucru. Tot ce ține de o materie, într-un singur loc.", en: "Materials, homework, worksheets. Everything for a subject, in one place." } },
        { icon: GraduationCap, title: { ro: "Teste online", en: "Online tests" }, body: { ro: "Teste cu corecție automată, planificate, anti-fraudă. Profesorul recuperează ore.", en: "Auto-graded, scheduled, anti-cheating tests. Teachers get hours back." } },
        { icon: MessageCircle, title: { ro: "Părinți în buclă", en: "Parents in the loop" }, body: { ro: "Notificări reale despre note, absențe, ședințe. Fără Whatsapp-uri pierdute.", en: "Real notifications about grades, absences, meetings. No more lost WhatsApps." } },
      ]}
    />
  );
}