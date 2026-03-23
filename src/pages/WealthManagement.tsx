import { 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  Users
} from "lucide-react";
import DomainPageLayout from "../components/DomainPageLayout";

export default function WealthManagement() {
  const pageData = {
    hero: {
      badge: "Wealth Precision",
      title: "Wealth Management <br/><span className=\"text-gradient\">Precision Testing.</span>",
      description: "Advanced validation for HNW portfolios, multi-asset risk profiling, and real-time investment tracking systems. Our laboratory environment ensures zero-error performance.",
      image: "/src/assets/images/unsplash-1551288049-bebda4e38f71.jpg"
    },
    competencies: [
      {
        title: "Portfolio Validation",
        desc: "Rigorous functional and regression testing for automated rebalancing, tax-loss harvesting, and multi-currency accounting. We simulate complex market scenarios.",
        icon: BarChart3,
        span: "wide" as const
      },
      {
        title: "Risk Profiling",
        desc: "Testing of sophisticated KYC/AML integration and investor appetite algorithms. Ensuring compliance with global fiduciary standards.",
        icon: ShieldCheck,
        span: "normal" as const
      },
      {
        title: "Investment Tracking",
        desc: "Real-time performance attribution and benchmarking accuracy. We validate data feeds from 50+ global exchanges.",
        icon: TrendingUp,
        span: "normal" as const
      },
      {
        title: "Strategic Lab Certification",
        desc: "Our Wealth Management testing suite is ISO 27001 compliant and designed for the most stringent banking environments.",
        icon: Zap,
        span: "wide" as const
      }
    ],
    pillars: {
      title: "The Digital Vault.",
      description: "Our Wealth Management approach is built on three core pillars of security and performance.",
      items: [
        {
          id: "01",
          title: "Zero-Trust Environment",
          desc: "Every data point in the portfolio journey is verified against secondary truth sources.",
          tags: ["SECURITY", "TRUST"]
        },
        {
          id: "02",
          title: "Low-Latency Benchmarking",
          desc: "Validation of sub-millisecond pricing updates for algorithmic trading modules.",
          tags: ["PERFORMANCE", "ALGO"]
        },
        {
          id: "03",
          title: "HNI Persona Testing",
          desc: "Dedicated UX testing frameworks tailored for high-net-worth client interaction patterns.",
          tags: ["UX", "HNI"]
        }
      ]
    },
    cta: {
      title: "Architect a <br/><span className=\"italic\">Precision</span> Solution.",
      description: "Our domain experts are ready to build a bespoke testing framework for your wealth management platform."
    }
  };

  return <DomainPageLayout {...pageData} />;
}

