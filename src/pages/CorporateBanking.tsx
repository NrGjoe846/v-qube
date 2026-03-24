import { 
  Wallet, 
  ShieldCheck, 
  Gavel, 
  ArrowLeftRight,
} from "lucide-react";
import DomainPageLayout from "../components/DomainPageLayout";

export default function CorporateBanking() {
  const pageData = {
    hero: {
      badge: "Domain Excellence",
      title: "Corporate Banking <br/><span className=\"text-gradient\">Quality Assurance.</span>",
      description: "Strategic validation for high-stakes institutional finance. From multi-currency liquidity to complex trade finance ecosystems.",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
    },
    competencies: [
      {
        title: "Cash & Liquidity",
        desc: "Ensuring real-time visibility and control over global cash positions. We test swept balances, interest calculations, and automated pooling structures across 40+ jurisdictions.",
        icon: Wallet,
        span: "wide" as const
      },
      {
        title: "Zero-Failure Mandate",
        desc: "Our high-trust validation framework ensures 99.999% uptime for institutional portals and backend systems.",
        icon: ShieldCheck,
        span: "normal" as const
      },
      {
        title: "RegTech Compliance",
        desc: "Automated KYC/AML validation and regulatory reporting accuracy for MiFID II, Dodd-Frank, and local standards.",
        icon: Gavel,
        span: "normal" as const
      },
      {
        title: "Trade Finance Systems",
        desc: "Testing Letters of Credit, Guarantees, and Supply Chain Financing modules. Our specialized lab validates complex document workflows.",
        icon: ArrowLeftRight,
        span: "wide" as const
      }
    ],
    pillars: {
      title: "Validation Pillars.",
      description: "Our technical validation methodology is built on the rigorous standards of the V Qube philosophy.",
      items: [
        {
          id: "01",
          title: "API Security Hardening",
          desc: "Validating OAuth 2.0 flows and payload encryption for open banking integration.",
          tags: ["SECURITY", "CORE"]
        },
        {
          id: "02",
          title: "ISO 20022 Migration",
          desc: "Ensuring message integrity and data mapping during the global payment standard transition.",
          tags: ["PAYMENTS", "MIGRATION"]
        },
        {
          id: "03",
          title: "High-Volume Stress",
          desc: "Pushing institutional portals to their limits with synthetic load generation of 10k+ concurrent sessions.",
          tags: ["PERFORMANCE", "SCALABILITY"]
        }
      ]
    },
    cta: {
      title: "Secure Your Corporate <br/>Infrastructure <span className=\"italic\">Today.</span>",
      description: "Partner with the industry leader in high-trust financial software testing. Our experts are ready to audit your next-gen banking platform."
    }
  };

  return <DomainPageLayout {...pageData} />;
}


