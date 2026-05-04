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
    img: "/assets/images/team_member_1.png"
  },
  { 
    name: "Dr. Elena Rostova", 
    role: "Head of QA", 
    desc: "Pioneer in automated compliance verification and mathematical proof-of-security frameworks.",
    img: "/assets/images/tech_workspace.png"
  },
  { 
    name: "Marcus Vane", 
    role: "CTO", 
    desc: "Architect of the Vault-Propel framework, specializing in AI-accelerated regression suites.",
    img: "/assets/images/office_skyscrapers.png"
  }
];

export default function About() {
  return (
    <div className="bg-surface font-body text-on-surface antialiased">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[180px]"
          ></motion.div>
          <img 
            alt="Architectural background" 
            className="w-full h-full object-cover mix-blend-overlay grayscale" 
            src="/assets/images/office_skyscrapers.png"
          />
        </div>
        <div className="container-max relative z-10 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-[0.2em] uppercase mb-10">
              The Architects of BFSI Quality
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-on-surface tracking-tighter leading-[0.9] mb-12">
              Engineering <br/><span className="text-gradient">Absolute Trust.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl font-medium opacity-80">
              V Qube Enterprises designs next-generation testing frameworks for the world's most critical financial infrastructures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-12 leading-[1.1]">Empowering Financial Innovation through <span className="text-gradient">Absolute Precision.</span></h2>
              <div className="space-y-10 text-xl text-on-surface-variant leading-relaxed font-medium opacity-80">
                <p>We operate on the principle that in the high-stakes world of BFSI, there is no margin for error. Our mission is to provide the surgical clarity needed to secure digital assets and ensure operational resilience.</p>
                <p>By blending deep domain expertise in core banking with cutting-edge AI-driven validation, we transform quality assurance from a final check into a strategic advantage.</p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass-card p-12 md:p-16 rounded-[4rem] border-l-[16px] border-primary shadow-2xl shadow-primary/5">
                <ShieldCheck className="text-primary mb-10 w-20 h-20" />
                <h3 className="text-3xl font-black mb-8 tracking-tight">Our Commitment</h3>
                <p className="text-[10px] text-on-surface-variant/60 leading-relaxed uppercase tracking-[0.3em] font-black">Zero-Latency Trust. <br/>Continuous Compliance. <br/>Architectural Rigor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Timeline */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-max w-full">
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
      <section className="section-padding bg-surface-container-low">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 glass-card p-12 md:p-16 rounded-[4rem] group shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-12 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-5xl font-black mb-10 tracking-tight">Trust</h3>
              <p className="text-xl text-on-surface-variant font-medium leading-relaxed max-w-2xl opacity-75 group-hover:opacity-100 transition-opacity">The bedrock of our relationship with global financial institutions. We operate as an extension of your security perimeter, ensuring total data sovereignty.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="orange-gradient p-12 md:p-16 rounded-[4rem] text-white shadow-2xl shadow-primary/20 flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-white opacity-10 group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <FlaskConical className="text-white w-16 h-16 mb-12" />
                <h3 className="text-4xl font-black mb-8 tracking-tight">Precision</h3>
                <p className="text-lg text-white/80 font-medium leading-relaxed">Surgical accuracy in every script, every test case, and every automated flow. We leave no room for ambiguity.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-slate-900 p-12 md:p-16 rounded-[4rem] text-white flex flex-col justify-between group overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-white opacity-5 group-hover:scale-110 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <Gavel className="text-primary w-16 h-16 mb-12" />
                <h3 className="text-4xl font-black mb-8 tracking-tight">Compliance</h3>
                <p className="text-lg text-slate-400 font-medium leading-relaxed">Beyond checking boxes. We integrate regulatory requirements into the very DNA of our testing lifecycle.</p>
              </div>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 glass-card p-12 md:p-16 rounded-[4rem] flex flex-col md:flex-row items-center gap-12 group transition-all duration-500"
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black mb-8 tracking-tight">Innovation</h3>
                <p className="text-xl text-on-surface-variant font-medium leading-relaxed opacity-75">Continuously evolving our methodologies to match the speed of fintech disruption. From DLT to Open Banking.</p>
              </div>
              <div className="shrink-0 w-full md:w-96 h-80 rounded-[4rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[2s] shadow-2xl border-2 border-white/20">
                <img 
                  alt="Innovation" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[3s]" 
                  src="/assets/images/cybersecurity.png"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      {false && (
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="text-center mb-24">
            <div className="w-16 h-1.5 orange-gradient rounded-full mx-auto mb-8"></div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">Laboratory Leadership</h2>
            <p className="text-on-surface-variant font-medium text-xl opacity-60">Architecting the future of financial quality assurance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -15 }}
                className="group"
              >
                <div className="aspect-[4/5] bg-surface-container-low rounded-[4rem] mb-10 overflow-hidden relative shadow-xl group-hover:shadow-2xl transition-all duration-700 border-2 border-white/20">
                  <img 
                    alt={leader.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s] scale-110 group-hover:scale-100" 
                    src={leader.img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <h4 className="text-3xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors">{leader.name}</h4>
                <p className="text-primary font-black text-xs tracking-[0.3em] uppercase mb-8">{leader.role}</p>
                <p className="text-on-surface-variant text-lg leading-relaxed font-medium opacity-70">{leader.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Trust Bar */}
      <section className="py-20 bg-surface-container-lowest border-y border-outline-variant/10">
        <div className="container-max">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-12 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
            {[
              { icon: <Award />, label: "ISO 27001", sub: "CERTIFIED" },
              { icon: <Lock />, label: "SOC2 TYPE II", sub: "COMPLIANT" },
              { icon: <ShieldAlert />, label: "PCI-DSS", sub: "VALIDATED" },
              { icon: <Globe />, label: "GDPR", sub: "FRAMEWORK" },
              { icon: <TrendingUp />, label: "OWASP", sub: "STANDARDS" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="text-primary scale-125">{item.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] leading-tight text-on-surface">
                  {item.label}<br/><span className="opacity-50">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="orange-gradient rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-5xl md:text-8xl font-black text-white leading-[1] mb-12 tracking-tight">Secure your digital future with the laboratory of <span className="italic">BFSI testing.</span></h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <Link to="/contact" className="bg-white text-primary px-14 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-black/10 inline-block w-full sm:w-auto">Initiate Consultation</Link>
                <Link to="/contact" className="border-2 border-white/30 text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all w-full sm:w-auto inline-block text-center">Request Portfolio</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

