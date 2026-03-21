import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  FlaskConical, 
  Gavel, 
  Lightbulb, 
  Verified, 
  Lock, 
  Globe,
  SquareTerminal,
  Network,
  ChevronRight,
  ShieldAlert,
  Shield,
  Briefcase,
  History,
  TrendingUp,
  Award,
  Users
} from "lucide-react";

const timeline = [
  { year: "2012", title: "Foundation in Core Banking", desc: "Established as a specialized consultancy for legacy system migration and validation." },
  { year: "2016", title: "BFSI Hub Expansion", desc: "Launched dedicated offshore testing centers focused on international payment protocols." },
  { year: "2020", title: "Automation Integration", desc: "Developed proprietary frameworks for automated regulatory compliance reporting." },
  { year: "2024", title: "AI-Driven Quality", desc: "Pioneering generative AI for synthetic data generation and predictive risk modeling." }
];

const leaders = [
  { 
    name: "James T. Qube", 
    role: "Managing Director", 
    desc: "25 years of experience in strategic financial transformation and large-scale infrastructure deployment.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Dr. Elena Rostova", 
    role: "Head of QA", 
    desc: "Pioneer in automated compliance verification and mathematical proof-of-security frameworks.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "Marcus Vane", 
    role: "CTO", 
    desc: "Architect of the Vault-Propel framework, specializing in AI-accelerated regression suites.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function About() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 pt-20">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          <img 
            alt="Architectural background" 
            className="w-full h-full object-cover mix-blend-overlay grayscale" 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <label className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-8 block">Strategic QA Center</label>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-on-surface tracking-tighter leading-[0.85] mb-8 md:mb-12">
              The Architects of <br/><span className="text-primary italic">BFSI Quality.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-on-surface-variant leading-relaxed max-w-2xl font-medium">
              V Qube Enterprises engineering next-generation testing frameworks for the world's most critical financial infrastructures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-10 leading-tight">Empowering Financial Innovation through <span className="text-primary italic">Absolute Precision.</span></h2>
              <div className="space-y-6 md:space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                <p>We operate on the principle that in the high-stakes world of BFSI, there is no margin for error. Our mission is to provide the surgical clarity needed to secure digital assets and ensure operational resilience.</p>
                <p>By blending deep domain expertise in core banking with cutting-edge AI-driven validation, we transform quality assurance from a final check into a strategic advantage.</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border-l-8 border-primary shadow-xl shadow-slate-200">
                <ShieldCheck className="text-primary mb-8 w-16 h-16" />
                <h3 className="text-2xl font-black mb-6 tracking-tight">Our Commitment</h3>
                <p className="text-xs text-slate-400 leading-relaxed uppercase tracking-[0.2em] font-black">Zero-Latency Trust. Continuous Compliance. Architectural Rigor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-24">
            <label className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-primary mb-4 block">Our Journey</label>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">Legacy of Innovation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pt-12 border-t border-slate-200 group"
              >
                <div className="absolute -top-2 left-0 w-4 h-4 bg-primary rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                <span className="text-2xl font-black text-primary mb-6 block tracking-tighter">{item.year}</span>
                <h4 className="text-xl font-black mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars (Bento Grid) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 bg-slate-50 p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] hover:bg-slate-100 transition-all border border-slate-100 group shadow-sm hover:shadow-2xl"
            >
              <Shield className="text-primary w-16 h-16 mb-12 group-hover:scale-110 transition-transform" />
              <h3 className="text-4xl font-black mb-8 tracking-tighter">Trust</h3>
              <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">The bedrock of our relationship with global financial institutions. We operate as an extension of your security perimeter, ensuring total data sovereignty.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-primary p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] text-white shadow-2xl shadow-primary/30 flex flex-col justify-between"
            >
              <div>
                <FlaskConical className="text-white w-16 h-16 mb-12" />
                <h3 className="text-4xl font-black mb-8 tracking-tighter">Precision</h3>
                <p className="text-base md:text-lg text-blue-50 font-medium opacity-80 leading-relaxed">Surgical accuracy in every script, every test case, and every automated flow. We leave no room for ambiguity.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-900 p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] text-white flex flex-col justify-between"
            >
              <div>
                <Gavel className="text-blue-500 w-16 h-16 mb-12" />
                <h3 className="text-4xl font-black mb-8 tracking-tighter text-white">Compliance</h3>
                <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed">Beyond checking boxes. We integrate regulatory requirements into the very DNA of our testing lifecycle.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 bg-slate-50 p-8 md:p-12 lg:p-16 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] hover:bg-slate-100 transition-all border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-16"
            >
              <div className="flex-1">
                <Lightbulb className="text-primary w-16 h-16 mb-12" />
                <h3 className="text-4xl font-black mb-8 tracking-tighter">Innovation</h3>
                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">Continuously evolving our methodologies to match the speed of fintech disruption. From DLT to Open Banking.</p>
              </div>
              <div className="shrink-0 w-full md:w-80 h-64 rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border-4 border-white">
                <img 
                  alt="Innovation" 
                  className="w-full h-full object-cover" 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-24">
            <label className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-slate-400 mb-4 block">The Visionaries</label>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">Laboratory Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-white rounded-[3.5rem] mb-10 overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 border-4 border-transparent group-hover:border-primary/20">
                  <img 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                    src={leader.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h4 className="text-3xl font-black mb-2 tracking-tight">{leader.name}</h4>
                <p className="text-primary font-black text-[10px] tracking-[0.3em] uppercase mb-6">{leader.role}</p>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-12 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            {[
              { icon: <Award />, label: "ISO 27001", sub: "CERTIFIED" },
              { icon: <Lock />, label: "SOC2 TYPE II", sub: "COMPLIANT" },
              { icon: <ShieldAlert />, label: "PCI-DSS", sub: "VALIDATED" },
              { icon: <Globe />, label: "GDPR", sub: "FRAMEWORK" },
              { icon: <TrendingUp />, label: "OWASP", sub: "STANDARDS" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-primary">{item.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-widest leading-tight">
                  {item.label}<br/>{item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white px-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="orange-gradient rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-[0px_32px_128px_rgba(0,64,223,0.3)]">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1] mb-8 md:mb-12 max-w-4xl mx-auto tracking-tighter italic">Secure your digital future with the laboratory of BFSI testing.</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
                <Link to="/contact" className="bg-white text-primary px-8 md:px-12 py-4 md:py-6 rounded-2xl font-black text-base md:text-lg hover:scale-105 transition-all shadow-2xl inline-block w-full sm:w-auto">Initiate Consultation</Link>
                <button className="border-2 border-white/30 text-white px-8 md:px-12 py-4 md:py-6 rounded-2xl font-black text-base md:text-lg hover:bg-white/10 transition-all w-full sm:w-auto">Download Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

