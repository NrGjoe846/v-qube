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
    <div className="bg-surface antialiased">
      {/* Hero Header */}
      <section className="relative pt-40 pb-20 bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
        <div className="container-max relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              Strategic Excellence
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-on-surface mb-10 tracking-tight leading-[1]">
              Our <span className="text-gradient">Services.</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-2xl mx-auto leading-relaxed opacity-70">
              We provide end-to-end quality assurance and domain support tailored specifically for the financial sector.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-max">
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.path}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -10 }}
                className="group relative p-12 bg-white rounded-[4rem] border border-outline-variant/10 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 glass-card"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-on-surface mb-6 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed mb-10 font-medium opacity-70 group-hover:opacity-100 transition-opacity">{service.desc}</p>
                <Link to={service.path} className="inline-flex items-center gap-4 font-black text-primary hover:gap-6 transition-all uppercase text-xs tracking-widest">
                  Explore Domain <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <div className="mt-40">
            <div className="orange-gradient p-16 md:p-32 rounded-[5rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-4xl"
              >
                <h3 className="text-5xl md:text-8xl font-black mb-12 tracking-tight leading-[1]">Ready to Scale <br/>Your Quality?</h3>
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-16 font-medium leading-relaxed">Join the world's leading financial institutions in deploying flawless software at intercept-ready speed.</p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Link to="/contact" className="bg-white text-primary px-14 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-black/10">
                    Initiate Consultation
                  </Link>
                  <Link to="/contact" className="border-2 border-white/30 text-white px-14 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all">
                    Request Strategy
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

