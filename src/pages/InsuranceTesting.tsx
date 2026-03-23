import { 
  Shield, 
  FileText, 
  AlertCircle, 
  Calculator, 
} from "lucide-react";
import DomainPageLayout from "../components/DomainPageLayout";

export default function InsuranceTesting() {
  const pageData = {
    hero: {
      badge: "Specialized Testing",
      title: "Insurance <br/><span className=\"text-gradient\">Quality Assurance.</span>",
      description: "Deploying surgical precision across the insurance value chain. From policy legacy migrations to real-time actuarial validation.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80"
    },
    competencies: [
      {
        title: "Policy Administration",
        desc: "End-to-end validation of lifecycle management from quoting and binding to renewal and endorsements. Our automated scripts simulate multi-state compliance.",
        icon: FileText,
        span: "wide" as const
      },
      {
        title: "Claims Management",
        desc: "Validation of adjudication engines, FNOL workflows, and fraud detection integrations. Ensuring transparent and fast claim settlements.",
        icon: AlertCircle,
        span: "normal" as const
      },
      {
        title: "Actuarial Validation",
        desc: "Regression testing for complex pricing models and rating engines. We verify the math before it meets the market.",
        icon: Calculator,
        span: "normal" as const
      },
      {
        title: "Digital Vault Security",
        desc: "Deploying high-trust security protocols to ensure policy holder data remains unbreachable across all digital touchpoints.",
        icon: Shield,
        span: "wide" as const
      }
    ],
    pillars: {
      title: "Laboratory Protocol.",
      description: "Our insurance testing methodology is built on atmospheric depth and surgical precision.",
      items: [
        {
          id: "01",
          title: "Discovery Archive",
          desc: "Mapping every legacy endpoint and API dependency to create a digital twin of your insurance ecosystem.",
          tags: ["MAPPING", "DEPS"]
        },
        {
          id: "02",
          title: "Surgical Execution",
          desc: "Automated stress-testing of rating algorithms with million-row datasets to ensure mathematical integrity.",
          tags: ["STRESS", "MATH"]
        },
        {
          id: "03",
          title: "Vault Verification",
          desc: "Continuous compliance monitoring against State filings and GDPR/HIPAA standards in real-time.",
          tags: ["COMPLIANCE", "REALTIME"]
        }
      ]
    },
    cta: {
      title: "Architect a <br/><span className=\"italic\">Precision</span> Engine.",
      description: "Our domain experts are ready to audit your insurance stack and deploy a surgical testing engine."
    }
  };

  return <DomainPageLayout {...pageData} />;
}

