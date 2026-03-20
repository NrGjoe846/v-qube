import { motion } from "motion/react";
import { 
  Landmark, 
  Shield, 
  TrendingUp, 
  CreditCard, 
  Wallet, 
  Activity, 
  Network, 
  ArrowLeftRight, 
  User, 
  Briefcase, 
  Gavel, 
  RefreshCw, 
  Layers,
  ChevronRight,
  CheckCircle2,
  Users,
  Building2,
  Scale,
  BookOpen,
  ShieldCheck,
  Banknote,
  Building,
  Coins,
  FileText,
  Home,
  BarChart3,
  MapPin,
  Share2,
  Cpu
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const testingDomains = [
  { name: "Core Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/core-banking" },
  { name: "Retail Banking", icon: <Landmark className="w-5 h-5" />, path: "/testing/retail-banking" },
  { name: "Islamic Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/islamic-banking" },
  { name: "Treasury", icon: <Banknote className="w-5 h-5" />, path: "/testing/treasury" },
  { name: "Retail Loans", icon: <Wallet className="w-5 h-5" />, path: "/testing/retail-loans" },
  { name: "Corporate Banking", icon: <Building className="w-5 h-5" />, path: "/testing/corporate-banking" },
  { name: "Investment Banking", icon: <TrendingUp className="w-5 h-5" />, path: "/testing/investment-banking" },
  { name: "Capital Markets", icon: <TrendingUp className="w-5 h-5" />, path: "/testing/capital-markets" },
  { name: "Insurance Testing", icon: <Shield className="w-5 h-5" />, path: "/testing/insurance" },
  { name: "Wealth Management", icon: <Activity className="w-5 h-5" />, path: "/testing/wealth-management" },
  { name: "Asset Management", icon: <Coins className="w-5 h-5" />, path: "/testing/asset-management" },
  { name: "Cards & Payments", icon: <CreditCard className="w-5 h-5" />, path: "/testing/payments" },
  { name: "Trade Finance", icon: <FileText className="w-5 h-5" />, path: "/testing/trade-finance" },
  { name: "Mortgage Finance", icon: <Home className="w-5 h-5" />, path: "/testing/mortgage-finance" },
  { name: "Compliance & AML", icon: <ShieldCheck className="w-5 h-5" />, path: "/testing/risk-compliance" },
  { name: "Risk Management", icon: <BarChart3 className="w-5 h-5" />, path: "/testing/risk-management" },
  { name: "Agent Banking", icon: <MapPin className="w-5 h-5" />, path: "/testing/agent-banking" },
  { name: "Digital Ecosystems", icon: <Share2 className="w-5 h-5" />, path: "/testing/digital-ecosystems" },
  { name: "Bespoke Apps", icon: <Cpu className="w-5 h-5" />, path: "/testing/bespoke-apps" },
];

export default function IslamicBankingTesting() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=1920" 
              alt="Islamic Architecture Precision"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-24">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 mb-8">
                <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Services</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Domains</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Islamic Banking</span>
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/30">
                  Shariah-Compliant Assurance
                </span>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.1] mb-8">
                  Shariah-Compliant <br/><span className="text-primary italic">Precision Testing.</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium mb-12">
                  End-to-end quality assurance for Islamic financial ecosystems. We validate the intricate logic of Murabaha financing, Ijarah leasing, and Shariah governance frameworks with surgical precision.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-primary text-white rounded-xl font-black shadow-xl shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                    Request Lab Access
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-black hover:bg-white/20 transition-all">
                    Technical Specs
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Pillars - Bento Style */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Domain Expertise</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">Shariah-Compliant Frameworks</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Murabaha & Ijarah Logic */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[5rem] transition-transform group-hover:scale-110"></div>
                <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 border border-primary/10">
                  <Scale className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Murabaha & Ijarah Validation</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                  Verifying complex profit-sharing calculations, asset acquisition workflows, and title transfer sequences. Our testing engine ensures zero-error execution of cost-plus financing and lease-to-own agreements.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    "Asset Costing Logic",
                    "Installment Amortization",
                    "Late Payment Charity Calc",
                    "Ownership Sequencing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Takaful Ecosystems */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-primary p-10 rounded-[2.5rem] text-white flex flex-col justify-between shadow-xl shadow-primary/20"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 border border-white/20">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">Takaful Ecosystems</h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8 font-medium">
                    Testing mutual insurance frameworks, including Waqf models and surplus distribution algorithms for participant pools.
                  </p>
                </div>
                <button className="bg-white text-primary px-8 py-4 rounded-xl font-black text-sm self-start hover:bg-slate-50 transition-all active:scale-95 shadow-lg">
                  Explore Module
                </button>
              </motion.div>

              {/* Shariah Governance */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-12 bg-slate-50 p-1 rounded-[2.5rem] border border-slate-200"
              >
                <div className="bg-white p-10 md:p-16 rounded-[2.4rem] flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-200">
                      <Gavel className="w-3 h-3" />
                      Regulatory Alignment
                    </div>
                    <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Shariah Governance Modules</h3>
                    <p className="text-slate-600 text-lg leading-relaxed font-medium">
                      Automated audit trails for Shariah Supervisory Board (SSB) approvals. We integrate compliance checks directly into the transaction lifecycle to prevent non-halal income leaks.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {["AAOIFI Standards", "IFSB Compliance", "Fatwa Registry"].map((tag, i) => (
                        <span key={i} className="bg-slate-100 px-6 py-2.5 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full lg:w-96 aspect-square rounded-[2.5rem] bg-slate-100 relative overflow-hidden shrink-0 shadow-2xl">
                    <img 
                      alt="Governance Precision" 
                      className="w-full h-full object-cover" 
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Methodology</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">The Pristine Validation Workflow</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  step: "01",
                  title: "Product Structuring",
                  desc: "Mapping contract logic to technical parameters for Mudarabah, Musharakah, and Istisna transactions.",
                  icon: <BookOpen className="w-8 h-8" />
                },
                {
                  step: "02",
                  title: "Logic Integrity Checks",
                  desc: "Running 5,000+ edge-case scenarios to ensure profit distributions never touch Riba-sensitive variables.",
                  icon: <RefreshCw className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Governance Reporting",
                  desc: "Finalizing validation with detailed Shariah Audit logs ready for board review and certification.",
                  icon: <ShieldCheck className="w-8 h-8" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="text-8xl font-black text-white/5 absolute -top-12 -left-8 transition-all group-hover:text-primary/10 group-hover:-top-16">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-8 border border-primary/30">
                    {item.icon}
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-16 py-32 bg-white">
          <div className="cobalt-gradient p-16 md:p-24 rounded-[3rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-teal"></div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 z-10 tracking-tighter">Secure Your Shariah Framework</h3>
            <p className="text-xl text-white/80 max-w-2xl mb-12 z-10 font-medium">Deploy our dedicated Islamic Banking testing laboratory for your next implementation or audit cycle.</p>
            <div className="flex flex-col sm:flex-row gap-6 z-10">
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
                Request a Consultation
              </Link>
              <Link to="/testing" className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                View All Domains
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
