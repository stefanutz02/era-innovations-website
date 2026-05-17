import { useEffect } from "react";
import { BarChart3, Receipt, Building, Calculator } from "lucide-react";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { updateSEO } from "@/lib/seo";

export default function EraFinance() {
  useEffect(() => {
    updateSEO({
      title: "ERA Finance — Software financiar pentru antreprenori | ERA Innovations",
      description: "ERA Finance: cifre clare, rapoarte simple, integrare cu SPV. Pentru antreprenori, companii și contabili.",
      canonical: "/inovatii/era-finance",
      ogUrl: "/inovatii/era-finance",
    });
  }, []);

  return (
    <ComingSoonPage
      eyebrow="No. 4 / 2026 · ERA Finance"
      name="ERA Finance"
      tagline={{ ro: "Cifrele firmei tale, fără jargon contabil.", en: "Your company's numbers, without accounting jargon." }}
      intro={{
        ro: "ERA Finance este software-ul financiar pentru antreprenori și echipe mici care vor să înțeleagă unde le pleacă banii. Integrare cu SPV și e-Factura. Toate la zi cu legislația din România. Construit împreună cu contabili.",
        en: "ERA Finance is finance software for founders and small teams who actually want to understand where their money goes. SPV and e-Factura integrations. All up-to-date with Romanian regulations. Built alongside accountants.",
      }}
      audience={{ ro: "antreprenori care vor claritate, nu rapoarte", en: "founders who want clarity, not reports" }}
      accent="#9080e0"
      accentGlow="rgba(144,128,224,0.45)"
      eta={{ ro: "Q4 2026", en: "Q4 2026" }}
      features={[
        { icon: BarChart3, title: { ro: "Cash-flow în timp real", en: "Real-time cash flow" }, body: { ro: "Vezi banii care intră și care ies — fără să suni contabilul. Grafic clar, nu Excel.", en: "See money in and money out — without calling your accountant. Clear chart, not Excel." } },
        { icon: Receipt, title: { ro: "e-Factura, fără durere", en: "e-Factura, painless" }, body: { ro: "Emitere și primire e-Factura direct din platformă. SPV conectat o singură dată.", en: "Issue and receive e-Factura straight from the platform. SPV connected once." } },
        { icon: Building, title: { ro: "Multi-firmă", en: "Multi-company" }, body: { ro: "Mai multe SRL-uri / PFA în același cont. Comparație, consolidare, claritate.", en: "Multiple SRLs / PFAs in the same account. Comparison, consolidation, clarity." } },
        { icon: Calculator, title: { ro: "Rapoarte pentru contabil", en: "Reports for your accountant" }, body: { ro: "Export-uri standard, format prietenos cu programele contabile uzuale.", en: "Standard exports, friendly with the usual accounting suites." } },
      ]}
    />
  );
}