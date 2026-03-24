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
    <div className="bg-surface antialiased">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover mix-blend-overlay grayscale opacity-30" 
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80" 
            alt="Testing Laboratory"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[180px]"
          ></motion.div>
        </div>

        <div className="container-max relative z-10 w-full pt-20">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-2 mb-10">
              <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/40 hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-on-surface/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Testing Hub</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10">
                Global QA Standards
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-on-surface tracking-tighter leading-[0.9] mb-10">
                Testing <br/><span className="text-gradient">Domains.</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl font-medium opacity-80 mb-16">
                Surgical precision across the entire financial services ecosystem. Explore our specialized testing laboratories designed for mission-critical assurance.
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#domains" className="px-14 py-6 bg-primary text-white rounded-2xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Browse Domains
                </a>
                <Link to="/contact" className="px-14 py-6 glass-button rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                  Consult an Expert
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-surface-container-lowest border-y border-outline-variant/10 py-20">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { val: "14+", label: "Testing Domains" },
              { val: "5000+", label: "Test Scenarios" },
              { val: "99.99%", label: "Accuracy Rate" },
              { val: "24/7", label: "Expert Support" }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left group">
                <div className="text-5xl font-black text-primary mb-3 tracking-tighter group-hover:scale-110 transition-transform origin-left">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section id="domains" className="section-padding bg-surface">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <div className="w-16 h-1.5 orange-gradient rounded-full mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-black text-on-surface mb-8 tracking-tight leading-[1]">Specialized <br/>Laboratories.</h2>
            <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed font-medium opacity-60">Our testing hub is organized into specialized domain laboratories, each equipped with bespoke tools and expert personnel.</p>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {testingAreas.map((area, i) => (
              <motion.div
                key={area.path}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -10 }}
                className="group p-12 bg-white rounded-[4rem] border border-outline-variant/10 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 glass-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                    <area.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-on-surface mb-6 tracking-tight group-hover:text-primary transition-colors">{area.name}</h3>
                  <p className="text-on-surface-variant text-lg leading-relaxed mb-12 font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                    {area.desc}
                  </p>
                </div>
                <Link 
                  to={area.path} 
                  className="inline-flex items-center gap-4 font-black text-xs uppercase tracking-widest text-primary group-hover:gap-6 transition-all"
                >
                  Enter Laboratory <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="orange-gradient p-16 md:p-32 rounded-[5rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-4xl"
            >
              <h3 className="text-5xl md:text-8xl font-black mb-12 z-10 tracking-tight leading-[1]">Need a Custom <br/>QA Strategy?</h3>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-16 z-10 font-medium leading-relaxed">Our domain experts are ready to architect a precision-testing framework tailored to your unique requirements.</p>
              <div className="flex flex-col sm:flex-row gap-8 z-10">
                <Link to="/contact" className="bg-white text-primary px-14 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-black/10">
                  Request Consultation
                </Link>
                <Link to="/services" className="border-2 border-white/30 text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


