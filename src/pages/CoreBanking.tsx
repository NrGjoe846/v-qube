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


export default function CoreBanking() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface antialiased">
      {/* Main Content */}
      <main className="flex-1">
        {/* Dynamic Nav Breadcrumb */}
        <div className="container-max pt-32 pb-4 relative z-20">
          <nav className="flex items-center gap-2">
            <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-on-surface-variant/20" />
            <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors">Domains</Link>
            <ChevronRight className="w-3 h-3 text-on-surface-variant/20" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Core Banking</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="relative min-h-[70vh] flex items-center bg-surface-container-lowest">
          <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] pointer-events-none"
          ></motion.div>
          
          <div className="container-max relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-[0.2em] uppercase mb-8">
                Precision Testing for Global Banking
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight text-on-surface mb-8 leading-[1.05]">
                Core Banking <br/><span className="text-gradient">Testing Solutions.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12 font-medium max-w-2xl">
                Ensuring absolute precision, security, and performance for the heartbeat of your financial institution through specialized BFSI quality engineering.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="orange-gradient text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all group active:scale-95">
                  Explore Methodology
                  <ArrowRight className="w-5 h-5 inline-block ml-3 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Educational Section */}
        <section className="section-padding bg-surface">
          <div className="container-max">
            <div className="grid lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/20"
                >
                  <img 
                    className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-[2s]" 
                    alt="Core banking server center" 
                    src="/assets/images/data_center.png"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent mix-blend-overlay"></div>
                </motion.div>
              </div>
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight text-on-surface mb-10 leading-tight">What defines <span className="text-gradient">Core Banking?</span></h2>
                  <div className="space-y-8 text-lg text-on-surface-variant leading-relaxed font-medium opacity-80">
                    <p>
                      Core banking is the operational nucleus of a financial institution, managing the most critical transactions and data. It connects branches, digital channels, and payment systems into a single synchronized ledger.
                    </p>
                    <p>
                      Given its critical nature, any regression or vulnerability in core modules can result in catastrophic financial and reputational loss.
                    </p>
                  </div>
                  <div className="mt-16 grid grid-cols-2 gap-8">
                    <div className="glass-card p-10 rounded-[2.5rem] border-l-8 border-primary group">
                      <div className="text-5xl font-black text-primary mb-3 tracking-tighter group-hover:scale-105 transition-transform origin-left">99.9%</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">Uptime Benchmark</div>
                    </div>
                    <div className="glass-card p-10 rounded-[2.5rem] border-l-8 border-secondary group">
                      <div className="text-5xl font-black text-secondary mb-3 tracking-tighter group-hover:scale-105 transition-transform origin-left">Real-time</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">Ledger Accuracy</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Testing Features - Bento Grid */}
        <section className="section-padding bg-surface-container-low relative">
          <div className="absolute inset-0 opacity-10 bg-grid-orange"></div>
          <div className="container-max relative z-10">
            <div className="mb-24 text-center max-w-3xl mx-auto">
              <h2 className="text-5xl font-black tracking-tight text-on-surface mb-8 leading-tight">Strategic Testing Features</h2>
              <p className="text-on-surface-variant font-medium text-xl opacity-75 leading-relaxed">Precision-engineered tools and frameworks designed for the complexity of global banking architectures.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {/* Large Feature */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-2 glass-card p-14 rounded-[3.5rem] flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
              >
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-black mb-8 tracking-tight leading-tight">End-to-End <br/>Security Validation</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-12 text-lg font-medium opacity-80">We perform deep-layer penetration testing and protocol validation across the entire core infrastructure to prevent unauthorized access and data breaches.</p>
                </div>
                <div className="flex flex-wrap gap-4 pt-10 border-t border-outline-variant/10">
                  {["Encryption Check", "Auth Protocols", "Zero Trust"].map((tag) => (
                    <span key={tag} className="px-6 py-2.5 bg-white border border-outline-variant/20 rounded-full text-[10px] font-black text-primary uppercase tracking-[0.2em]">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* High-Velocity Throughput */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="orange-gradient text-white p-14 rounded-[3.5rem] flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-primary/30 active:scale-95 transition-all"
              >
                <div className="absolute inset-0 bg-grid-white/10 opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-10">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">High-Velocity Throughput</h3>
                  <p className="opacity-90 leading-relaxed font-medium text-lg">Simulating peak-hour transaction volumes to ensure the core remains responsive during flash market events.</p>
                </div>
              </motion.div>

              {/* Ledger Integrity */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-14 rounded-[3.5rem] hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-10 group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <Wallet className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">Ledger Integrity</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium opacity-80">Automated reconciliation testing ensuring every cent is accounted for across distributed branches.</p>
              </motion.div>

              {/* API Interoperability */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-card p-14 rounded-[3.5rem] hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                   <Cpu className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">API Inbound/Outbound</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium opacity-80">Validating third-party integrations and open banking endpoints for seamless external connectivity.</p>
              </motion.div>

              {/* Audit Compliance */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-card p-14 rounded-[3.5rem] hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">Audit Compliance</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium opacity-80">Generating exhaustive documentation required by regulatory bodies like RBI, FINRA, or GDPR.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialized Focus Areas */}
        <section className="section-padding bg-surface overflow-hidden">
          <div className="container-max">
            <div className="flex flex-col lg:flex-row gap-24">
              <div className="lg:w-1/3">
                <div className="sticky top-40">
                  <div className="w-20 h-2 orange-gradient rounded-full mb-8"></div>
                  <h2 className="text-5xl md:text-7xl font-black tracking-tight text-on-surface mb-10 leading-[1]">Specialized <br/>Focus Areas.</h2>
                  <p className="text-xl text-on-surface-variant mb-12 font-medium opacity-70 leading-relaxed">Our testing methodology is partitioned into five critical pillars to ensure 360-degree coverage of your core banking landscape.</p>
                  <div className="flex items-center gap-4 text-primary font-black uppercase text-xs tracking-widest">
                    <span className="w-12 h-[1px] bg-primary/30"></span>
                    Domain Mastery
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-10">
                {[
                  { id: "01", color: "primary", title: "Functional Testing", desc: "Validating core banking modules including Savings, Current Accounts, Loans, Deposits, and Fixed Deposits for business logic accuracy." },
                  { id: "02", color: "secondary", title: "Integration Testing", desc: "Ensuring seamless data flow between Core Banking, Mobile Apps, ATM Controllers, and SWIFT payment gateways." },
                  { id: "03", color: "blue-500", title: "Performance Engineering", desc: "Stress testing the central server to handle millions of concurrent transactions during month-end or festive peaks." },
                  { id: "04", color: "red-500", title: "Security & VAPT", desc: "Vulnerability Assessment and Penetration Testing specifically tuned for financial data protection and fraud prevention." },
                  { id: "05", color: "slate-900", title: "User Acceptance (UAT)", desc: "Testing from the banker's perspective to ensure the interface facilitates fast, error-free operations at the teller desk." }
                ].map((area, index) => (
                  <motion.div 
                    key={area.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className={`group glass-card p-12 rounded-[3.5rem] transition-all duration-500 hover:shadow-2xl border-l-[16px] border-${area.color}`}
                  >
                    <div className="flex justify-between items-start cursor-pointer">
                      <div className="flex items-center gap-10">
                        <span className={`text-6xl font-black text-on-surface/5 group-hover:text-${area.color}/10 transition-colors duration-500`}>{area.id}</span>
                        <div>
                          <h3 className="text-3xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">{area.title}</h3>
                          <p className="text-on-surface-variant text-lg font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                            {area.desc}
                          </p>
                        </div>
                      </div>
                      <PlusCircle className={`w-10 h-10 text-${area.color}/30 group-hover:text-${area.color} group-hover:rotate-90 transition-all duration-500 flex-shrink-0 mt-2`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing Matrix Table */}
        <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-grid-white"></div>
          <div className="container-max relative z-10">
            <div className="mb-24 text-center">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">Detailed Testing Matrix</h2>
              <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">Comprehensive breakdown of tests performed across core modules to ensure zero-defect deployments.</p>
            </div>
            <div className="overflow-x-auto glass-card border border-white/10 rounded-[4rem] bg-white/5 backdrop-blur-3xl shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-12 py-10 text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">Testing Type</th>
                    <th className="px-12 py-10 text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">Core Objectives</th>
                    <th className="px-12 py-10 text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">Audit Deliverable</th>
                    <th className="px-12 py-10 text-[10px] font-black uppercase tracking-[0.4em] text-primary/80">Criticality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { type: "Regression Testing", obj: "Validating existing features after core upgrades.", deliverable: "Stability Certificate", status: "Mission Critical", color: "primary" },
                    { type: "Data Migration", obj: "Integrity checks when moving legacy data.", deliverable: "Mapping Audit Report", status: "High Precision", color: "secondary" },
                    { type: "DR / Failover", obj: "Ensuring Disaster Recovery takes over.", deliverable: "RTO/RPO Validation", status: "Resilience", color: "blue-400" },
                    { type: "Globalization", obj: "Multi-currency and local compliance.", deliverable: "Localized Compliance", status: "Scalability", color: "emerald-400" }
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-white/[0.03] transition-colors">
                      <td className="px-12 py-10">
                        <span className="font-black text-2xl group-hover:text-primary transition-colors">{row.type}</span>
                      </td>
                      <td className="px-12 py-10 text-slate-400 font-medium group-hover:text-slate-200 transition-colors">{row.obj}</td>
                      <td className="px-12 py-10 text-sm font-black tracking-wide">{row.deliverable}</td>
                      <td className="px-12 py-10">
                        <span className={`px-5 py-2 bg-${row.color}/10 text-${row.color} text-[10px] font-black uppercase rounded-full tracking-widest border border-${row.color}/20`}>{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-surface">
          <div className="container-max">
            <div className="orange-gradient p-20 md:p-32 rounded-[5rem] text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-4xl mx-auto"
              >
                <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tight leading-[1]">Ready to Secure Your <br/>Core Banking?</h2>
                <p className="text-xl md:text-2xl text-white/80 mb-16 font-medium leading-relaxed">Partner with V Qube Enterprises to architect a precision-testing framework that grows with your institution.</p>
                <Link to="/contact" className="inline-flex items-center gap-4 bg-white text-primary px-14 py-6 rounded-[2rem] font-black text-xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/10">
                  Initiate Strategy Session
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

