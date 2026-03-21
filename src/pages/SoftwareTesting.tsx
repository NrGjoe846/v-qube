import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  Gauge,
  FileText,
  Search,
  Cpu,
  ChevronRight,
  Database,
  Rocket,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


export default function SoftwareTesting() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 bg-white border-b border-slate-100">
          <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="flex items-center gap-2 mb-8">
                <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Services</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Software Testing</span>
              </nav>
              <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                Software Testing <br />Services for <span className="text-primary">Banking.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-12 font-medium">
                Zero-compromise quality assurance for high-stakes financial ecosystems. We deliver precision-engineered testing that ensures security, scalability, and seamless user experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="orange-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
                  Consult with Experts
                </Link>
                <button className="bg-surface-container-high text-on-secondary-container px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors">
                  View Case Studies
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-outline-variant/10 relative z-10">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/3]">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" 
                    alt="Banking interface testing"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-2xl">
                  <p className="text-5xl font-black mb-1">99.9%</p>
                  <p className="text-xs uppercase tracking-widest font-bold opacity-80">Uptime Assurance</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
            </motion.div>
          </div>
        </section>

      {/* Metric Cards Grid */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: <ShieldCheck className="w-8 h-8" />, title: "ISO 27001", desc: "Certified security standards for global financial data protection." },
              { icon: <Zap className="w-8 h-8" />, title: "40% Faster", desc: "Reduction in time-to-market using our proprietary automation frameworks." },
              { icon: <BarChart3 className="w-8 h-8" />, title: "500+ Nodes", desc: "Simultaneous load testing capability for enterprise-scale banking apps." },
              { icon: <Users className="w-8 h-8" />, title: "Expert Led", desc: "Dedicated domain experts with 15+ years in BFSI testing." }
            ].map((metric, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-primary hover:translate-y-[-4px] transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{metric.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{metric.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Testing Services - Bento Grid Style */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter text-slate-900 mb-6">
                Comprehensive Banking QA Suite
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We provide a full-spectrum testing laboratory designed specifically for the complexities of modern fintech and legacy core banking systems.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Functional Testing */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 group relative overflow-hidden bg-slate-50 rounded-[2.5rem] p-12 flex flex-col justify-between transition-all hover:bg-primary/5 border border-slate-100"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase">Core Delivery</span>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tight">Functional Testing</h3>
                </div>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-12">
                  Comprehensive validation of complex banking workflows, including cross-border transactions, multi-currency accounting, and regulatory compliance paths (KYC/AML).
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {[
                    { label: "Regression", sub: "Automated daily smoke tests" },
                    { label: "UAT", sub: "End-user journey mapping" },
                    { label: "API Testing", sub: "REST/SOAP validation" }
                  ].map((tag, i) => (
                    <div key={i} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100">
                      <p className="text-sm font-black text-primary mb-1">{tag.label}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{tag.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-[-10%] right-[-5%] w-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-full h-full text-primary" />
              </div>
            </motion.div>

            {/* Performance Testing */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-primary rounded-[2.5rem] p-12 flex flex-col justify-between text-white shadow-2xl shadow-primary/20"
            >
              <div>
                <Gauge className="w-12 h-12 mb-8 text-white/80" />
                <h3 className="text-3xl font-black mb-6 tracking-tight">Performance & Scalability</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  Simulating peak-load scenarios like Black Friday or month-end processing to ensure your system never skips a beat.
                </p>
              </div>
              <ul className="space-y-4">
                {["Stress & Load Testing", "Endurance Analysis", "Spiking Scenarios"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="w-5 h-5 text-white/40" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Security Testing */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 bg-slate-50 rounded-[2.5rem] p-12 flex flex-col justify-between border border-slate-100 hover:border-primary/20 transition-all"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-900 mb-8">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Security & Penetration</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                  Vulnerability assessments focusing on OWASP Top 10, data encryption at rest/transit, and multi-factor authentication integrity.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["VAPT", "COMPLIANCE", "THREAT MODELING"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white rounded-full text-[10px] font-black text-slate-400 border border-slate-100 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Automation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-7 bg-white rounded-[2.5rem] p-12 flex flex-col justify-between border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Test Automation</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                    Shift-left testing with integrated CI/CD pipelines. We leverage AI-driven test maintenance to reduce script breakage and increase coverage.
                  </p>
                  <button className="text-primary font-black text-sm flex items-center gap-2 group">
                    Explore Frameworks 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                <div className="w-full lg:w-48 aspect-square bg-slate-50 rounded-3xl overflow-hidden relative border border-slate-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-20 h-20 text-primary/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="orange-gradient rounded-[3rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-grid-orange opacity-10"></div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="font-headline text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                Ready to secure your banking infrastructure?
              </h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed">
                Join 50+ financial institutions that trust V Qube for their mission-critical testing. Schedule a technical audit with our BFSI specialists today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all text-center">
                  Book a Technical Audit
                </Link>
                <button className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                  Download Service Deck
                </button>
              </div>
            </div>
            <div className="absolute top-1/2 right-[-10%] -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-5%] opacity-10 hidden lg:block">
              <ShieldCheck className="w-96 h-96 text-white" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  );
}

