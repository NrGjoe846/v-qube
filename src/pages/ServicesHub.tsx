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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
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
        </div>
      </div>
    </div>
  );
}
