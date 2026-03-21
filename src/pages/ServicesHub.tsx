import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Database, Users, Rocket, FileCheck, CheckCircle2 } from "lucide-react";

const services = [
  { 
    title: "Software Testing", 
    path: "/services/software-testing",
    icon: ShieldCheck,
    desc: "Comprehensive QA strategies for complex financial ecosystems."
  },
  { 
    title: "Domain Support", 
    path: "/services/domain-support",
    icon: Database,
    desc: "Deep expertise in banking, insurance, and capital markets."
  },
  { 
    title: "Support Development Teams", 
    path: "/services/support-dev-teams",
    icon: Users,
    desc: "Seamless integration with your dev lifecycle for faster releases."
  },
  { 
    title: "Training & Rollout", 
    path: "/services/support-users",
    icon: Rocket,
    desc: "Ensuring smooth transitions and user adoption for new systems."
  },
];

export default function ServicesHub() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end quality assurance and domain support tailored specifically for the financial sector.
          </p>
        </motion.div>

        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.path}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
              <Link to={service.path} className="inline-flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <section className="mt-32">
          <div className="orange-gradient p-16 md:p-24 rounded-[3rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-orange"></div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 z-10 tracking-tighter">Ready to Scale Your Quality?</h3>
            <p className="text-xl text-white/80 max-w-2xl mb-12 z-10 font-medium">Join the world's leading financial institutions in deploying flawless software at intercept-ready speed.</p>
            <div className="flex flex-col sm:flex-row gap-6 z-10">
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
                Initiate Consultation
              </Link>
              <Link to="/contact" className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                Request Technical Briefing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

