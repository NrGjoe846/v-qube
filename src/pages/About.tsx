import { motion } from "motion/react";
import { ShieldCheck, Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
            We Are <span className="text-primary">V Qube</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A specialized testing powerhouse dedicated to the Banking, Financial Services, and Insurance sectors. 
            We bridge the gap between complex financial software and flawless user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              To empower financial institutions with the confidence that their software is robust, secure, and compliant. 
              We believe that in the world of finance, there is no room for error.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Integrity</h4>
                <p className="text-sm text-slate-500">Unwavering commitment to quality.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Expertise</h4>
                <p className="text-sm text-slate-500">Deep domain knowledge.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Team working" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">Why Choose V Qube?</h2>
              <div className="space-y-6">
                {[
                  { title: "Domain Mastery", desc: "We don't just test software; we understand the banking business." },
                  { title: "Global Standards", desc: "Adherence to ISO 27001, PCI-DSS, and local regulatory mandates." },
                  { title: "Agile Integration", desc: "Seamlessly working within your development lifecycle." },
                  { title: "Bespoke Solutions", desc: "Custom testing strategies tailored to your unique architecture." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
                  <span className="text-4xl font-black text-primary mb-2">15+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Years Experience</span>
                </div>
                <div className="h-64 rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
                  <span className="text-4xl font-black text-primary mb-2">500+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Projects Delivered</span>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-64 rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
                  <span className="text-4xl font-black text-primary mb-2">50+</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Clients</span>
                </div>
                <div className="h-48 rounded-2xl bg-white/5 border border-white/10 p-8 flex flex-col justify-end">
                  <span className="text-4xl font-black text-primary mb-2">99%</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
