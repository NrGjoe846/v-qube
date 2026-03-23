import { motion } from "motion/react";
import { 
  BookOpen, 
  Headset, 
  Rocket, 
  Video, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Layout,
  Users,
  Target,
  BarChart3,
  ChevronRight,
  Database,
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


export default function UserTraining() {
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
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Training & Rollout</span>
              </nav>
              <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                User Training & <br />Rollout <span className="text-primary">Support.</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-12 font-medium">
                Bridge the gap between technical deployment and operational excellence. Our precision-engineered rollout strategies ensure seamless adoption across BFSI ecosystems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="orange-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:scale-105 transition-transform">
                  Request Rollout Plan
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
                <div className="rounded-[2rem] overflow-hidden aspect-square">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/src/assets/images/unsplash-1524178232363-1fb2b075b655.jpg" 
                    alt="Training Workshop"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </section>

      {/* Core Pillars: Bento Grid */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black font-headline text-slate-900 mb-6 tracking-tighter">
              Precision Readiness Modules
            </h2>
            <div className="w-24 h-2 bg-primary rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Manuals */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-8 bg-white p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-between group"
            >
              <div>
                <BookOpen className="w-12 h-12 text-primary mb-8" />
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Comprehensive User Manuals</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                  Beyond simple instructions. We produce high-fidelity documentation featuring visual workflows, interactive logic maps, and BFSI-specific regulatory compliance context.
                </p>
              </div>
              <div className="mt-12 flex items-center text-primary font-black group-hover:gap-6 transition-all gap-3 cursor-pointer">
                Explore Documentation Framework <ArrowRight className="w-6 h-6" />
              </div>
            </motion.div>

            {/* Pulse Support */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-primary text-white p-12 rounded-[2.5rem] flex flex-col justify-between shadow-2xl shadow-primary/20"
            >
              <div>
                <Headset className="w-12 h-12 text-white/80 mb-8" />
                <h3 className="text-3xl font-black mb-6 tracking-tight">24/7 Support Desk</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Real-time incident resolution and Tier 1-3 help desk services integrated directly into your rollout timeline.
                </p>
              </div>
              <div className="mt-12">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs uppercase font-black tracking-widest">Global Live Support</span>
                </div>
              </div>
            </motion.div>

            {/* Rollout Strategy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 bg-slate-50 p-10 rounded-[2rem] hover:bg-slate-100 transition-colors group border border-slate-100"
            >
              <Rocket className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Rollout Command</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">On-site and remote coordination of multi-region software deployments for financial institutions.</p>
            </motion.div>

            {/* Visual Learning */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-4 bg-white p-10 rounded-[2rem] shadow-lg border border-slate-100 group"
            >
              <Video className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Video Micro-Learning</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Bite-sized visual modules designed for the modern employee, ensuring high retention and rapid mastery.</p>
            </motion.div>

            {/* Compliance */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-4 bg-slate-50 p-10 rounded-[2rem] group border border-slate-100"
            >
              <ShieldCheck className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">Compliance Audits</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Validation of user proficiency to meet strict regulatory and internal security training requirements.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 -rotate-3 rounded-[3rem]"></div>
                <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                  <img 
                    src="/src/assets/images/unsplash-1460925895917-afdab827c52f.jpg" 
                    alt="Analytics Dashboard" 
                    className="w-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 tracking-tighter">The "Strategic Training" Methodology</h2>
              <div className="space-y-10">
                {[
                  { title: "Needs Analysis", desc: "We map existing workflows against new system capabilities to identify critical knowledge gaps.", icon: <Target className="w-6 h-6" /> },
                  { title: "Content Engineering", desc: "Developing tailored manuals and support scripts that reflect your unique operational environment.", icon: <Layout className="w-6 h-6" /> },
                  { title: "Phased Execution", desc: "From pilot groups to global rollouts, we provide dedicated support at every milestone.", icon: <BarChart3 className="w-6 h-6" /> }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight">{step.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Availability Chips */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-16 tracking-tight">Service Availability</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "On-Site Training Support",
              "Remote Help Desk (Tier 1-3)",
              "LMS Integration Services",
              "User Acceptance Testing (UAT) Support"
            ].map((chip, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-slate-900 font-black text-sm shadow-md border border-slate-100"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary mr-4"></div>
                {chip}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 text-center">
          <div className="bg-primary rounded-[3rem] p-16 md:p-24 shadow-2xl shadow-primary/30 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-orange opacity-10"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">Ready for a Flawless Rollout?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Ensure your users are empowered from Day 1. Partner with V Qube for end-to-end training and support services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all text-center">
                Talk to a Rollout Specialist
              </Link>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                Download Capabilities Deck
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent -z-0"></div>
      </section>
      </main>
    </div>
  );
}

