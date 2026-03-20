import { motion } from "motion/react";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  ShieldCheck, 
  Zap, 
  Target, 
  Wallet, 
  Gavel, 
  ArrowLeftRight, 
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Smartphone,
  TrendingUp,
  Shield,
  CreditCard,
  Activity,
  Network,
  User,
  Gavel as GavelIcon,
  Coins,
  Layers,
  Building,
  Landmark,
  Banknote,
  FileText,
  Home,
  BarChart3,
  MapPin,
  Share2,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";

const sidebarItems = [
  { name: "Core Banking", icon: Building2, path: "/testing/core-banking" },
  { name: "Retail Banking", icon: Landmark, path: "/testing/retail-banking" },
  { name: "Islamic Banking", icon: Building2, path: "/testing/islamic-banking" },
  { name: "Treasury", icon: Banknote, path: "/testing/treasury" },
  { name: "Retail Loans", icon: Wallet, path: "/testing/retail-loans" },
  { name: "Corporate Banking", icon: Building, path: "/testing/corporate-banking", active: true },
  { name: "Investment Banking", icon: TrendingUp, path: "/testing/investment-banking" },
  { name: "Capital Markets", icon: TrendingUp, path: "/testing/capital-markets" },
  { name: "Insurance Testing", icon: Shield, path: "/testing/insurance" },
  { name: "Wealth Management", icon: Activity, path: "/testing/wealth-management" },
  { name: "Asset Management", icon: Coins, path: "/testing/asset-management" },
  { name: "Cards & Payments", icon: CreditCard, path: "/testing/payments" },
  { name: "Trade Finance", icon: FileText, path: "/testing/trade-finance" },
  { name: "Mortgage Finance", icon: Home, path: "/testing/mortgage-finance" },
  { name: "Compliance & AML", icon: ShieldCheck, path: "/testing/risk-compliance" },
  { name: "Risk Management", icon: BarChart3, path: "/testing/risk-management" },
  { name: "Agent Banking", icon: MapPin, path: "/testing/agent-banking" },
  { name: "Digital Ecosystems", icon: Share2, path: "/testing/digital-ecosystems" },
  { name: "Bespoke Apps", icon: Cpu, path: "/testing/bespoke-apps" },
];

export default function CorporateBanking() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-16 lg:p-20">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
              Domain Excellence
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
              Corporate Banking <br/>
              <span className="text-primary">Quality Assurance</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10 font-medium">
              Pristine validation for high-stakes institutional finance. From multi-currency liquidity to complex trade finance ecosystems.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="cobalt-gradient text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Request Audit Framework
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid - Core Competencies */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Wallet className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900">Cash & Liquidity Management</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                Ensuring real-time visibility and control over global cash positions. We test swept balances, interest calculations, and automated pooling structures across 40+ jurisdictions.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-primary text-white p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-primary/20"
          >
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Zero-Failure <br/>Mandate</h3>
            </div>
            <p className="text-white/60 text-[10px] uppercase tracking-[0.2em] font-black">99.999% Assurance Rate</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Gavel className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">RegTech & Compliance</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Automated KYC/AML validation and regulatory reporting accuracy for MiFID II, Dodd-Frank, and local standards.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-slate-50 p-1 rounded-3xl"
          >
            <div className="bg-white h-full w-full rounded-[1.4rem] p-10 flex flex-col md:flex-row gap-10 items-center shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <ArrowLeftRight className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">Trade Finance Ecosystems</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Testing Letters of Credit, Guarantees, and Supply Chain Financing modules. Our pristine lab validates complex document workflows and digital signatures.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <img 
                  alt="Financial document analysis" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Vertical Data List (The Pristine Lab Approach) */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">Precision Testing Pillars</h2>
              <p className="text-slate-600 max-w-xl font-medium">Our technical validation methodology is built on the rigorous standards of the Digital Vault philosophy.</p>
            </div>
            <div className="flex gap-4">
              <button className="p-4 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all">
                <ChevronLeft className="w-6 h-6 text-slate-600" />
              </button>
              <button className="p-4 rounded-full border border-slate-200 hover:bg-white hover:shadow-md transition-all">
                <ChevronRight className="w-6 h-6 text-slate-600" />
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            {[
              {
                id: "01",
                title: "API Security Hardening",
                desc: "Validating OAuth 2.0 flows and payload encryption for open banking integration.",
                tags: ["SECURITY", "CORE"]
              },
              {
                id: "02",
                title: "ISO 20022 Migration Testing",
                desc: "Ensuring message integrity and data mapping during the global payment standard transition.",
                tags: ["PAYMENTS", "MIGRATION"]
              },
              {
                id: "03",
                title: "High-Volume Stress Simulation",
                desc: "Pushing institutional portals to their limits with synthetic load generation of 10k+ concurrent sessions.",
                tags: ["PERFORMANCE", "SCALABILITY"]
              }
            ].map((pillar) => (
              <motion.div 
                key={pillar.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-white hover:bg-slate-50 transition-all border border-slate-100 hover:border-primary/20 hover:shadow-xl"
              >
                <span className="text-5xl font-black text-slate-100 group-hover:text-primary/10 transition-colors">{pillar.id}</span>
                <div className="flex-1">
                  <h4 className="text-xl font-black mb-1 text-slate-900">{pillar.title}</h4>
                  <p className="text-slate-500 text-sm font-medium">{pillar.desc}</p>
                </div>
                <div className="hidden md:flex gap-2">
                  {pillar.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black rounded-full uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Secure your corporate banking infrastructure today.
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
              Partner with the industry leader in high-trust financial software testing. Our experts are ready to audit your next-gen banking platform.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/40">
                Schedule a Consultation
              </Link>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-colors">
                Technical Whitepaper
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        </section>
      </main>
    </div>
  );
}
