import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Shield, 
  Zap, 
  Wallet, 
  Cpu, 
  FileText, 
  ArrowRight, 
  ChevronRight, 
  PlusCircle,
  Landmark,
  Building2,
  TrendingUp,
  CreditCard,
  Gavel,
  Layers,
  CheckCircle2,
  Banknote,
  Activity,
  Coins,
  Home,
  ShieldCheck,
  BarChart3,
  MapPin,
  Share2
} from "lucide-react";

const testingDomains = [
  { name: "Core Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/core-banking", active: true },
  { name: "Retail Banking", icon: <Landmark className="w-5 h-5" />, path: "/testing/retail-banking" },
  { name: "Islamic Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/islamic-banking" },
  { name: "Treasury", icon: <Banknote className="w-5 h-5" />, path: "/testing/treasury" },
  { name: "Retail Loans", icon: <Wallet className="w-5 h-5" />, path: "/testing/retail-loans" },
  { name: "Corporate Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/corporate-banking" },
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

export default function CoreBanking() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface antialiased">
      {/* Sidebar - Consistent with other testing domains */}
      <aside className="hidden lg:flex flex-col w-72 fixed left-0 top-20 bottom-0 bg-slate-50 border-r border-slate-200 overflow-y-auto z-30">
        <div className="p-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Financial Domains</h3>
          <p className="text-primary font-bold text-sm">Pristine Lab Standards</p>
        </div>
        <nav className="flex flex-col px-4 pb-8">
          <Link
            to="/testing"
            className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all group mb-4"
          >
            <Layers className="w-5 h-5 text-slate-400 group-hover:text-primary" />
            <span className="text-[10px] uppercase font-black tracking-widest">Testing Hub</span>
          </Link>
          <div className="h-px bg-slate-200 mb-4 mx-4" />
          {testingDomains.map((domain) => {
            const isActive = domain.active;
            return (
              <Link
                key={domain.name}
                to={domain.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? "bg-white text-primary shadow-md font-bold" 
                    : "text-slate-500 hover:bg-slate-100 hover:pl-6"
                }`}
              >
                <span className={isActive ? "text-primary" : "text-slate-400 group-hover:text-primary"}>
                  {domain.icon}
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest">{domain.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72">
        {/* Dynamic Nav Breadcrumb */}
        <div className="absolute top-28 left-8 lg:left-80 z-20">
          <nav className="flex items-center gap-2">
            <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Domains</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Core Banking</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-surface-container-low mx-4 mt-20 rounded-[3rem] border border-slate-200 shadow-sm mb-12 py-24 lg:py-32">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[1]">
                Core Banking <br/><span className="text-primary italic">Testing Services.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12 font-medium">
                Ensuring absolute precision, security, and performance for the heartbeat of your financial institution through specialized BFSI quality engineering.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-black flex items-center gap-3 hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 group">
                  Explore Methodology
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Educational Section */}
        <section className="px-8 md:px-16 py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img 
                    className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Core banking server center" 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                </motion.div>
              </div>
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-black tracking-tight text-on-surface mb-8">What is Core Banking?</h2>
                  <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-medium">
                    <p>
                      Core banking is the operational nucleus of a financial institution, managing the most critical transactions and data. It connects branches, digital channels, and payment systems into a single synchronized ledger.
                    </p>
                    <p>
                      In the "Pristine Laboratory" of modern finance, even a millisecond of lag or a minor data mismatch can lead to systemic risks. V Qube's testing protocol treats every transaction as a mission-critical event.
                    </p>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-8">
                    <div className="bg-surface-container-low p-8 rounded-[2.5rem] border-l-8 border-primary shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-4xl font-black text-primary mb-2 tracking-tighter">99.9%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Uptime Target</div>
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-[2.5rem] border-l-8 border-secondary shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-4xl font-black text-secondary mb-2 tracking-tighter">Real-time</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Sync Accuracy</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Testing Features - Bento Grid */}
        <section className="px-8 md:px-16 py-32 bg-surface-container-low mx-4 rounded-[4rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-grid-primary"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-6">Strategic Testing Features</h2>
              <p className="text-on-surface-variant font-medium text-lg">Precision-engineered tools and frameworks designed for the complexity of global banking architectures.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Large Feature */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-2xl transition-all"
              >
                <div>
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10 font-black">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">End-to-End Security Validation</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-10 text-lg font-medium">We perform deep-layer penetration testing and protocol validation across the entire core infrastructure to prevent unauthorized access and data breaches.</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-100">
                  {["Encryption Check", "Auth Protocols", "Zero Trust"].map((tag) => (
                    <span key={tag} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black text-primary uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* High-Velocity Throughput */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary text-white p-12 rounded-[3.5rem] flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-primary/30"
              >
                <div className="absolute inset-0 bg-grid-white/10 opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <Zap className="w-12 h-12 mb-8" />
                  <h3 className="text-3xl font-black mb-6 tracking-tight">High-Velocity Throughput</h3>
                  <p className="opacity-90 leading-relaxed font-medium">Simulating peak-hour transaction volumes to ensure the core remains responsive during flash market events.</p>
                </div>
              </motion.div>

              {/* Ledger Integrity */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group"
              >
                <Wallet className="w-12 h-12 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Ledger Integrity</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">Automated reconciliation testing ensuring every cent is accounted for across distributed branches.</p>
              </motion.div>

              {/* API Interoperability */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group"
              >
                <Cpu className="w-12 h-12 text-blue-400 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">API Interoperability</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">Validating third-party integrations and open banking endpoints for seamless external connectivity.</p>
              </motion.div>

              {/* Audit Compliance */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group"
              >
                <FileText className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Audit Compliance</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">Generating exhaustive documentation required by regulatory bodies like RBI, FINRA, or GDPR.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialized Focus Areas */}
        <section className="px-8 md:px-16 py-32 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface mb-8 leading-[1]">Specialized Focus Areas.</h2>
                  <p className="text-xl text-on-surface-variant mb-12 font-medium">Our testing methodology is partitioned into five critical pillars to ensure 360-degree coverage.</p>
                  <div className="h-2 w-24 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-8">
                {[
                  { id: "01", color: "primary", title: "Functional Testing", desc: "Validating core banking modules including Savings, Current Accounts, Loans, Deposits, and Fixed Deposits for business logic accuracy." },
                  { id: "02", color: "secondary", title: "Integration Testing", desc: "Ensuring seamless data flow between Core Banking, Mobile Apps, ATM Controllers, and SWIFT payment gateways." },
                  { id: "03", color: "blue-400", title: "Performance Engineering", desc: "Stress testing the central server to handle millions of concurrent transactions during month-end or festive peaks." },
                  { id: "04", color: "red-500", title: "Security & VAPT", desc: "Vulnerability Assessment and Penetration Testing specifically tuned for financial data protection and fraud prevention." },
                  { id: "05", color: "slate-900", title: "User Acceptance (UAT)", desc: "Testing from the banker's perspective to ensure the interface facilitates fast, error-free operations at the teller desk." }
                ].map((area, index) => (
                  <motion.div 
                    key={area.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border-l-[12px] border-${area.color}`}
                  >
                    <div className="flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-8">
                        <span className={`text-5xl font-black text-slate-100 group-hover:text-${area.color}/10 transition-colors`}>{area.id}</span>
                        <h3 className="text-3xl font-black tracking-tight">{area.title}</h3>
                      </div>
                      <PlusCircle className={`w-8 h-8 text-${area.color} group-hover:rotate-90 transition-transform`} />
                    </div>
                    <div className="mt-8 pl-20 text-on-surface-variant text-lg font-medium leading-relaxed">
                      {area.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing Matrix Table */}
        <section className="px-4 md:px-16 py-32 bg-slate-900 text-white mx-4 rounded-[4rem] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-grid-white"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Detailed Testing Matrix</h2>
              <p className="text-slate-400 text-xl font-medium">Comprehensive breakdown of tests performed across core modules.</p>
            </div>
            <div className="overflow-x-auto bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Testing Type</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Objectives</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Deliverable</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Criticality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { type: "Regression Testing", obj: "Validating existing features after core upgrades.", deliverable: "Stability Certificate", status: "Mission Critical" },
                    { type: "Data Migration", obj: "Integrity checks when moving legacy data.", deliverable: "Mapping Audit Report", status: "High Precision" },
                    { type: "DR / Failover", obj: "Ensuring Disaster Recovery takes over.", deliverable: "RTO/RPO Validation", status: "Resilience" },
                    { type: "Globalization", obj: "Multi-currency and local compliance.", deliverable: "Localized Compliance", status: "Scalability" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8 font-black text-xl">{row.type}</td>
                      <td className="px-10 py-8 text-slate-400 font-medium">{row.obj}</td>
                      <td className="px-10 py-8 text-sm font-bold">{row.deliverable}</td>
                      <td className="px-10 py-8">
                        <span className="px-4 py-1.5 bg-primary/20 text-primary text-[10px] font-black uppercase rounded-full tracking-widest border border-primary/20">{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-16 py-32 bg-white">
          <div className="cobalt-gradient p-16 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl mx-auto max-w-7xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-teal"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">Ready to Start Core Banking Testing?</h2>
              <p className="text-xl text-white/80 mb-12 font-medium">Partner with V Qube Enterprises to secure your financial future with world-class quality engineering.</p>
              <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                Contact V Qube
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
