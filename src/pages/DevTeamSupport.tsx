import { motion } from "motion/react";
import { 
  Terminal, 
  Search, 
  BrainCircuit, 
  ArrowRight, 
  CheckCircle2, 
  Cpu,
  Zap,
  Users,
  ShieldCheck,
  Activity,
  GraduationCap,
  Network,
  ChevronRight,
  ShieldAlert,
  Code2,
  Bug,
  LineChart,
  Layers,
  Rocket,
  Database
} from "lucide-react";
import { Link } from "react-router-dom";


export default function DevTeamSupport() {
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
                <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Services</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Dev Team Support</span>
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/30">
                  Engineering Excellence
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                  Dev Team <span className="text-primary">QA Support.</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mb-12">
                  Surgical QA integration that empowers engineers to ship rock-solid BFSI software at peak velocity. We bridge the gap between code and compliance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 orange-gradient text-white rounded-xl font-black shadow-xl shadow-primary/25 hover:scale-105 transition-all">
                    Request Integration Plan
                  </Link>
                  <button className="px-8 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-black hover:bg-slate-100 transition-all">
                    QA Methodology
                  </button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-outline-variant/10 relative z-10">
                <div className="rounded-[2rem] overflow-hidden aspect-square">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
                    alt="Development Team Support"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Core Philosophy */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-surface">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Strategic Alignment</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Bridging the Gap Between Code & Compliance</h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-medium">
                <p>Modern banking software demands more than just "passing tests." It requires architectural resilience and logical integrity that standard QA often misses. Our Dev Team Support service embeds domain-expert QA leads directly into your development lifecycle.</p>
                <p>We treat your codebase as a high-security digital vault. By performing surgical unit test reviews and requirement audits, we ensure that every line of code adheres to the most stringent BFSI standards before it ever reaches a staging environment.</p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/10">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Code-Level QA</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/10">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Risk Mitigation</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-square group border border-slate-100">
                <img 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
                  alt="Dev Team Support"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Reliability Index</p>
                      <p className="text-2xl font-black text-primary">99.98%</p>
                    </div>
                    <Activity className="text-primary w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Bento Grid */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Support Ecosystem</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">Specialized QA Solutions</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Unit Test Reviews */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-8 bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Terminal className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Unit Test Reviews</h4>
                  <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-2xl font-medium">
                    Move beyond simple code coverage. Our experts perform surgical reviews of your unit testing suites to ensure logical integrity, edge-case coverage, and resilient mock architectures specifically for complex banking workflows.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Boundary Analysis</span>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Mock Integrity</span>
                  </div>
                </div>
              </motion.div>

              {/* Requirement Clarification */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-primary text-white p-12 rounded-[2.5rem] flex flex-col justify-between shadow-2xl shadow-primary/20"
              >
                <div>
                  <Search className="w-12 h-12 text-white/80 mb-8" />
                  <h4 className="text-2xl font-black mb-6 tracking-tight leading-tight">Requirement Clarification</h4>
                  <p className="text-white/80 leading-relaxed mb-8 font-medium">
                    Elimination of ambiguity at the source. We translate complex BFSI business logic into actionable, testable technical requirements.
                  </p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 className="w-5 h-5 text-white/40" /> Ambiguity Audit
                  </li>
                  <li className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest">
                    <CheckCircle2 className="w-5 h-5 text-white/40" /> Traceability Mapping
                  </li>
                </ul>
              </motion.div>

              {/* Knowledge Transfer */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-12 lg:col-span-6 bg-white p-12 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 border border-primary/10">
                    <BrainCircuit className="w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 tracking-tight mb-6">Continuous Knowledge Transfer</h4>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    We don't just test; we educate. Our integrated QA specialists embed with your dev teams to foster a culture of quality, sharing testing patterns and security best practices.
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shrink-0 border border-slate-100">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h5 className="text-lg font-black text-slate-900 mb-2 tracking-tight uppercase tracking-widest">Weekly Deep-Dives</h5>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">Structured sessions on emerging BFSI vulnerabilities and testing strategies.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shrink-0 border border-slate-100">
                      <Network className="w-7 h-7" />
                    </div>
                    <div>
                      <h5 className="text-lg font-black text-slate-900 mb-2 tracking-tight uppercase tracking-widest">Shared Pattern Library</h5>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">A living document of reusable test scenarios and architectural patterns.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visual Accent Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden lg:block lg:col-span-6 rounded-[2.5rem] overflow-hidden shadow-inner bg-slate-200 relative border border-slate-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Advanced Analytics" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-8 rounded-full border border-white/30">
                    <Cpu className="w-16 h-16 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ROI Metrics */}
        <section className="px-8 md:px-16 py-24 bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-black text-slate-900 mb-16 text-center tracking-tight">Assurance Objectives</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
              {[
                { val: "-40%", label: "Defect Leakage" },
                { val: "+25%", label: "Sprint Velocity" },
                { val: "100%", label: "Test Traceability" },
                { val: "Zero", label: "Critical Escapes" }
              ].map((obj, i) => (
                <div key={i} className="p-12 bg-white text-center">
                  <div className="text-5xl font-black text-primary mb-3 tracking-tighter">{obj.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{obj.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Protocol */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Deployment</h2>
              <h3 className="text-4xl font-black text-slate-900 tracking-tight">The Integration Protocol</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
              {[
                { step: "01", title: "Discovery", desc: "Mapping existing workflows and friction points." },
                { step: "02", title: "Embedding", desc: "QA leads join your daily scrums and planning." },
                { step: "03", title: "Optimization", desc: "Refining unit tests and requirement docs." },
                { step: "04", title: "Scale", desc: "Self-sustaining quality culture established." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 text-primary font-black text-2xl shadow-xl relative z-10">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-16 py-32 bg-white">
          <div className="orange-gradient p-16 md:p-24 rounded-[3rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-orange"></div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 z-10 tracking-tighter">Ready to Fortify Your Pipeline?</h3>
            <p className="text-xl text-white/80 max-w-2xl mb-12 z-10 font-medium">Join over 40+ financial institutions leveraging V Qube's specialized QA support services.</p>
            <div className="flex flex-col sm:flex-row gap-6 z-10">
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
                Schedule a Workshop
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

