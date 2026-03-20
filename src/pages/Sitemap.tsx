import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FileText, Map as MapIcon, ChevronRight } from "lucide-react";

const sitemapData = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Contact / Consultation", path: "/contact" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-of-service" },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Services Hub", path: "/services" },
      { name: "Software Testing", path: "/services/software-testing" },
      { name: "Domain Support", path: "/services/domain-support" },
      { name: "Support Development Teams", path: "/services/support-dev-teams" },
      { name: "Support Users / Training & Rollout", path: "/services/support-users" },
    ]
  },
  {
    title: "Testing Areas",
    links: [
      { name: "Testing Areas Hub", path: "/testing" },
      { name: "Core Banking Testing", path: "/testing/core-banking" },
      { name: "Retail Banking Testing", path: "/testing/retail-banking" },
      { name: "Islamic Banking Testing", path: "/testing/islamic-banking" },
      { name: "Treasury Testing", path: "/testing/treasury" },
      { name: "Retail Loans Testing", path: "/testing/retail-loans" },
      { name: "Corporate Banking Testing", path: "/testing/corporate-banking" },
      { name: "Investment Banking Testing", path: "/testing/investment-banking" },
      { name: "Capital Markets Testing", path: "/testing/capital-markets" },
      { name: "Insurance Testing", path: "/testing/insurance" },
      { name: "Wealth Management Testing", path: "/testing/wealth-management" },
      { name: "Asset Management Testing", path: "/testing/asset-management" },
      { name: "Cards & Payments Testing", path: "/testing/payments" },
      { name: "Trade Finance Testing", path: "/testing/trade-finance" },
      { name: "Mortgage Finance Testing", path: "/testing/mortgage-finance" },
      { name: "Compliance & AML Testing", path: "/testing/risk-compliance" },
      { name: "Risk Management Testing", path: "/testing/risk-management" },
      { name: "Agent Banking Testing", path: "/testing/agent-banking" },
      { name: "Digital Ecosystems Testing", path: "/testing/digital-ecosystems" },
      { name: "Self-Service Banking Testing", path: "/testing/self-service-banking" },
      { name: "Wealth Management Testing", path: "/testing/wealth-management" },
      { name: "Data Warehouse Testing", path: "/testing/data-warehouse" },
      { name: "Bespoke Applications Testing", path: "/testing/bespoke-apps" },
    ]
  }
];

export default function Sitemap() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-6 mb-16">
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary">
              <MapIcon className="w-10 h-10" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                XML <span className="text-primary">Sitemap</span>
              </h1>
              <p className="text-xl text-slate-500 font-bold tracking-tight">Full site structure and navigation map.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sitemapData.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
              >
                <div className="flex items-center gap-4 mb-8">
                  <FileText className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{section.title}</h3>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="flex items-center gap-2 text-slate-600 hover:text-primary font-bold transition-all group">
                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

