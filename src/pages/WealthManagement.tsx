import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  Activity, 
  ChevronRight,
  PieChart,
  Shield,
  Zap,
  CheckCircle2,
  LineChart,
  Users,
  Building2,
  ArrowRightCircle,
  Award
} from "lucide-react";

export default function WealthManagement() {
  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface antialiased">
      {/* Main Content */}
      <main className="flex-1">
        {/* Dynamic Nav Breadcrumb */}
        <div className="absolute top-28 left-8 lg:left-16 z-20">
          <nav className="flex items-center gap-2">
            <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Domains</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Wealth Management</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="relative pt-40 pb-20 px-8 lg:px-16 overflow-hidden bg-surface-bright">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Specialized Domain Module
              </span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9] decoration-primary transition-all">
                Wealth Management <br/><span className="text-primary italic">Precision Testing.</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-2xl font-medium mb-12">
                Advanced validation for HNW portfolios, multi-asset risk profiling, and real-time investment tracking systems. Our laboratory environment ensures zero-error performance in high-stakes financial environments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="orange-gradient text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95 flex items-center gap-3">
                  Consult an Expert
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          </div>
          {/* Background Decorative Element */}
          <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 rounded-[10rem]"></div>
        </header>

        {/* Bento Grid: Core Solutions */}
        <section className="py-24 px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
              {/* Large Focus Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 bg-slate-50 rounded-[3rem] p-12 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:scale-110 transition-transform duration-500">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">Portfolio Management Validation</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-10 text-lg font-medium max-w-xl">
                    Rigorous functional and regression testing for automated rebalancing, tax-loss harvesting, and multi-currency accounting. We simulate complex market scenarios to ensure accuracy.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {["Multi-Asset", "Rebalancing Engine", "Dividend Tracking"].map((tag) => (
                      <span key={tag} className="px-5 py-2 bg-white text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-slate-200">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              </motion.div>

              {/* Side Card 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-primary text-white rounded-[3rem] p-10 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-10">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Risk Profiling</h3>
                  <p className="text-blue-50 text-sm leading-relaxed font-medium">
                    Testing of sophisticated KYC/AML integration and investor appetite algorithms. Ensuring compliance with global fiduciary standards.
                  </p>
                </div>
                <Link to="/contact" className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] hover:gap-4 transition-all">
                  Request Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Side Card 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-4 bg-slate-900 text-white rounded-[3rem] p-10 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-10">
                    <TrendingUp className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Investment Tracking</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    Real-time performance attribution and benchmarking accuracy. We validate data feeds from 50+ global exchanges.
                  </p>
                </div>
              </motion.div>

              {/* Long Banner Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-8 orange-gradient rounded-[3rem] p-12 text-white relative overflow-hidden flex items-center shadow-2xl shadow-primary/20"
              >
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 w-full">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-black mb-4 tracking-tight">Strategic Lab Certification</h3>
                    <p className="text-blue-100 text-lg font-medium opacity-90">Our Wealth Management testing suite is ISO 27001 compliant and designed for the most stringent banking environments.</p>
                  </div>
                  <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg whitespace-nowrap shadow-xl hover:scale-110 transition-transform active:scale-95">
                    Download Whitepaper
                  </button>
                </div>
                <Award className="absolute -right-10 -bottom-10 w-64 h-64 text-white opacity-10 pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Asymmetric Detail Section */}
        <section className="py-32 px-8 lg:px-16 bg-slate-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-white p-4 rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden group">
                <img 
                  alt="High density financial data visualization" 
                  className="w-full h-[500px] object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  src="/src/assets/images/unsplash-1551288049-bebda4e38f71.jpg"
                />
              </div>
            </motion.div>
            <div className="w-full lg:w-1/2 space-y-12">
              <h2 className="text-5xl font-black tracking-tighter leading-tight">The Digital Vault <br/><span className="text-primary italic">Approach.</span></h2>
              <div className="space-y-10">
                {[
                  { icon: <ShieldCheck />, title: "Zero-Trust Environment", desc: "Every data point in the portfolio journey is verified against secondary truth sources." },
                  { icon: <Zap />, title: "Low-Latency Benchmarking", desc: "Validation of sub-millisecond pricing updates for algorithmic trading modules." },
                  { icon: <Users />, title: "HNI Persona Testing", desc: "Dedicated UX testing frameworks tailored for high-net-worth client interaction patterns." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 max-w-7xl mx-auto px-8 mb-24">
          <div className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[1.1]">Architect a Precision Solution.</h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 font-medium">
                Our domain experts are ready to build a bespoke testing framework for your wealth management platform.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1">
                  Request a Consultation
                </Link>
                <Link to="/services" className="border-2 border-white/10 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/5 transition-all">
                  View Components
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

