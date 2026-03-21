import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Building2, 
  CreditCard, 
  Smartphone, 
  LayoutDashboard, 
  Shield, 
  Globe, 
  Network, 
  Database, 
  Lock, 
  Zap, 
  Activity, 
  Users, 
  Briefcase,
  Wallet,
  ChevronRight,
  ShieldCheck,
  Rocket,
  Layers,
  Landmark,
  Banknote,
  Building,
  Coins,
  FileText,
  Home,
  BarChart3,
  MapPin,
  Share2,
  Cpu,
  TrendingUp
} from "lucide-react";


const testingAreas = [
  { name: "Core Banking", path: "/testing/core-banking", icon: Building2, desc: "Mission-critical operational nucleus and centralized ledger validation." },
  { name: "Retail Banking", path: "/testing/retail-banking", icon: Landmark, desc: "Omni-channel mobile and web experience testing." },
  { name: "Islamic Banking", path: "/testing/islamic-banking", icon: Building2, desc: "Shariah-compliant Murabaha, Ijarah, and Takaful verification." },
  { name: "Bespoke Apps", path: "/testing/bespoke-apps", icon: Cpu, desc: "Custom-engineered testing frameworks for unique BFSI ecosystems." },
  { name: "Treasury", path: "/testing/treasury", icon: Banknote, desc: "FX risk, automated liquidity buffers, and SWIFT ISO 20022 adoption." },
  { name: "Retail Loans", path: "/testing/retail-loans", icon: Wallet, desc: "Systematic auditing of personal, home, and vehicle loan lifecycles." },
  { name: "Insurance Testing", path: "/testing/insurance", icon: Shield, desc: "Policy administration, claims management, and actuarial validation." },
  { name: "Corporate Banking", path: "/testing/corporate-banking", icon: Building, desc: "Trade finance and commercial lending system audits." },
  { name: "Investment Banking", path: "/testing/investment-banking", icon: TrendingUp, desc: "M&A advisory, underwriting logic, and market data integration." },
  { name: "Capital Markets", path: "/testing/capital-markets", icon: TrendingUp, desc: "Institutional-grade trading infrastructure and market data validation." },
  { name: "Self-Service Banking", path: "/testing/self-service-banking", icon: Smartphone, desc: "Specialized validation for ATM, Mobile, and Internet banking channels." },
  { name: "Wealth Management", path: "/testing/wealth-management", icon: Activity, desc: "Portfolio management and robo-advisory testing." },
  { name: "Data Warehouse", path: "/testing/data-warehouse", icon: Database, desc: "Strategic integrity for your enterprise intelligence and ETL validation." },
];

export default function TestingHub() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920" 
              alt="Testing Laboratory"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-24">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 mb-8">
                <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Home</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Testing Hub</span>
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/30">
                  Global QA Standards
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                  Testing <span className="text-primary">Domains.</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium mb-12">
                  Surgical precision across the entire financial services ecosystem. Explore our specialized testing laboratories designed for mission-critical assurance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#domains" className="px-8 py-4 bg-primary text-white rounded-xl font-black shadow-xl shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                    Browse Domains
                  </a>
                  <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-black hover:bg-white/20 transition-all">
                    Consult an Expert
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="bg-white border-b border-slate-100 py-16 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { val: "14+", label: "Testing Domains" },
                { val: "5000+", label: "Test Scenarios" },
                { val: "99.99%", label: "Accuracy Rate" },
                { val: "24/7", label: "Expert Support" }
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-4xl font-black text-primary mb-2 tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section id="domains" className="px-8 md:px-16 py-24 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Specialized Laboratories</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Assurance Ecosystem</h3>
              <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">Our testing hub is organized into specialized domain laboratories, each equipped with bespoke tools and expert personnel.</p>
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testingAreas.map((area, i) => (
                <motion.div
                  key={area.path}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 }
                  }}
                  className="group p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all flex flex-col justify-between min-h-[340px]"
                >
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10">
                      <area.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{area.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                      {area.desc}
                    </p>
                  </div>
                  <Link 
                    to={area.path} 
                    className="inline-flex items-center gap-3 font-black text-[10px] uppercase tracking-widest text-primary group-hover:gap-5 transition-all"
                  >
                    Explore Domain <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-16 py-32 bg-white">
          <div className="orange-gradient p-16 md:p-24 rounded-[3rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-orange"></div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 z-10 tracking-tighter">Need a Custom QA Strategy?</h3>
            <p className="text-xl text-white/80 max-w-2xl mb-12 z-10 font-medium">Our domain experts are ready to architect a precision-testing framework tailored to your unique requirements.</p>
            <div className="flex flex-col sm:flex-row gap-6 z-10">
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
                Request a Consultation
              </Link>
              <Link to="/services" className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

