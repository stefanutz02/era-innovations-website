import { useEffect } from "react";
import { Home, Users, FileSignature, TrendingUp } from "lucide-react";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { updateSEO } from "@/lib/seo";

export default function EraRealEstate() {
  useEffect(() => {
    updateSEO({
      title: "ERA Real Estate — CRM pentru agenții imobiliare | ERA Innovations",
      description: "ERA Real Estate: CRM dedicat agențiilor imobiliare din România. Listări, leads, contracte, agenți — într-o singură platformă.",
      canonical: "/inovatii/era-real-estate",
      ogUrl: "/inovatii/era-real-estate",
    });
  }, []);

  return (
    <ComingSoonPage
      eyebrow="Nr. 3 / 2026 · ERA Real Estate"
      name="ERA Real Estate"
      tagline={{ ro: "CRM-ul gândit pentru piața din România.", en: "The CRM built for the Romanian market." }}
      intro={{
        ro: "ERA Real Estate este CRM-ul dedicat agențiilor imobiliare. Listări sincronizate pe portaluri, leads urmărite end-to-end, contracte digitale, dashboard pentru agenți. Construit cu agenți reali, nu copiat după soluții americane.",
        en: "ERA Real Estate is the CRM made for real estate agencies. Listings synced across portals, end-to-end lead tracking, digital contracts, agent dashboard. Built with real agents — not copied from American software.",
      }}
      audience={{ ro: "agenții care vor să crească, nu să administreze", en: "agencies that want to grow, not just manage" }}
      accent="#d4a060"
      accentGlow="rgba(212,160,96,0.45)"
      eta={{ ro: "Q4 2026", en: "Q4 2026" }}
      features={[
        { icon: Home, title: { ro: "Listări inteligente", en: "Smart listings" }, body: { ro: "Adaugi o dată, publici peste tot: site propriu, OLX, Storia, imobiliare.ro.", en: "Add once, publish everywhere: your own site, OLX, Storia, imobiliare.ro." } },
        { icon: Users, title: { ro: "Leads urmărite end-to-end", en: "End-to-end lead tracking" }, body: { ro: "De la primul telefon până la semnare. Fără ca un client să cadă printre crăpături.", en: "From first call to signature. No client slips through the cracks." } },
        { icon: FileSignature, title: { ro: "Contracte digitale", en: "Digital contracts" }, body: { ro: "Generare, semnare electronică, arhivă. Conform legislației RO, nu un PDF generic.", en: "Generation, e-signature, archive. Compliant with RO law, not a generic PDF." } },
        { icon: TrendingUp, title: { ro: "Dashboard pentru agenți", en: "Agent dashboard" }, body: { ro: "Comisioane, target-uri, performanță — clar pentru fiecare agent și pentru manager.", en: "Commissions, targets, performance — clear for each agent and the manager." } },
      ]}
    />
  );
}