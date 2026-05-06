import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ChevronRight,
  Globe,
  Building2,
  Lock,
  MessageSquare
} from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  // Map URL type params to service options
  useEffect(() => {
    const type = searchParams.get("type");
    const typeMap: Record<string, string> = {
      audit: "Compliance Audit",
      consultation: "QA Automation Lab",
      "case-study": "Compliance Audit",
      deck: "QA Automation Lab",
      framework: "Compliance Audit",
      brief: "QA Automation Lab",
      assessment: "Compliance Audit",
      specs: "DevOps Integration",
      protocol: "DevOps Integration",
      iso20022: "DevOps Integration",
      migration: "DevOps Integration",
      docs: "QA Automation Lab",
    };
    if (type && typeMap[type]) {
      setSelectedService(typeMap[type]);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    const subject = `Technical Inquiry: ${data.service} for ${data.domain}`;
    const body = `
Initialize Inquiry Request
-------------------------
Name: ${data.name}
Organization: ${data.organization}
Work Email: ${data.email}
Contact Protocol: ${data.phone}
Service Vector: ${data.service}
Target Domain: ${data.domain}

Technical Brief:
${data.description}
-------------------------
End of Request
    `.trim();

    window.location.href = `mailto:consult@vqubeenterprises.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-surface font-body text-on-surface antialiased tech-grid min-h-screen pt-32 pb-20 selection:bg-primary-fixed selection:text-on-primary-fixed">
      <div className="container-max w-full">
        {/* Hero & Contact Split Section */}
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* Content Side */}
          <div className="lg:w-1/2 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-8 border border-primary/10">
                <ShieldCheck className="w-3 h-3" />
                Global Availability 24/7
              </div>
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[0.9]">
                Connect with the <br/>
                <span className="text-primary italic">BFSI QA Architects.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-lg mb-12 font-medium">
                Enter the digital vault for specialized quality assurance consultation. Our technical environment is engineered for the highest compliance standards in financial services.
              </p>

              {/* Trust Quote */}
              <div className="relative pl-8 mb-16 border-l-4 border-primary">
                <p className="text-xl italic font-bold text-slate-900 leading-relaxed">
                  "Precision is the only currency we accept in the vault."
                </p>
                <span className="block mt-4 text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">— Chief Auditor, V Qube Team</span>
              </div>

              {/* Information Panel (Bento-lite) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-8 rounded-[2rem] bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                  <MapPin className="text-primary w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 text-slate-400">India Node</h4>
                  <p className="text-slate-900 font-bold text-sm leading-relaxed">Chennai,<br/>Tamil Nadu</p>
                </div>
                <a href="mailto:consult@vqubeenterprises.com" className="p-8 rounded-[2rem] bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all group block">
                  <Mail className="text-primary w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 text-slate-400">Secure Channel</h4>
                  <p className="text-slate-900 font-bold text-sm">consult@vqubeenterprises.com</p>
                </a>
                <a href="tel:+917010852807" className="p-8 rounded-[2rem] bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all group block">
                  <Phone className="text-primary w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 text-slate-400">Direct Link</h4>
                  <p className="text-slate-900 font-bold text-sm">+91 70108 52807</p>
                </a>
                <div className="p-8 rounded-[2rem] bg-primary text-white shadow-2xl shadow-primary/30 flex flex-col justify-between">
                  <div>
                    <Lock className="text-white w-8 h-8 mb-6" />
                    <h4 className="font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-60">Service SLA</h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white/60" />
                    <p className="text-sm font-black italic">24-hour response promise</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 lg:p-16 rounded-[4rem] bg-white shadow-2xl border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
              <div className="mb-12">
                <h2 className="text-4xl font-black tracking-tighter text-on-surface mb-4">Request Technical Briefing</h2>
                <p className="text-slate-500 font-medium text-lg">Initialize an encrypted consultation request below.</p>
              </div>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-100 p-12 rounded-[3rem] text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-black text-emerald-900 mb-4">Inquiry Initialized</h3>
                  <p className="text-emerald-700 font-medium leading-relaxed">
                    Encryption sequence complete. Our BFSI architects will contact you within 24 hours via your secure work email.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Identity Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Organization</label>
                      <input 
                        type="text" 
                        name="organization"
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Work Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Contact Protocol</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Service Vector</label>
                      <select 
                        name="service" 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold appearance-none bg-no-repeat bg-[right_1.5rem_center] cursor-pointer"
                        required
                      >
                        <option value="" disabled>Select an option</option>
                        <option>Compliance Audit</option>
                        <option>QA Automation Lab</option>
                        <option>Security Simulation</option>
                        <option>DevOps Integration</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Target Domain</label>
                      <select name="domain" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold appearance-none bg-no-repeat bg-[right_1.5rem_center] cursor-pointer" required defaultValue="">
                        <option value="" disabled>Select an option</option>
                        <option>Banking & Retail</option>
                        <option>Insurance Systems</option>
                        <option>Capital Markets</option>
                        <option>Fintech Core</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Technical Brief Description</label>
                    <textarea 
                      name="description"
                      required
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-bold placeholder:text-slate-300 resize-none" 
                      rows={4}
                    ></textarea>
                  </div>
                  <button className="w-full py-6 px-10 rounded-2xl orange-gradient text-white font-black text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 active:scale-[0.98] transition-all flex items-center justify-center gap-4 group" type="submit">
                    Initialize Inquiry
                    <Rocket className="w-6 h-6 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] transition-transform" />
                  </button>
                </form>
              )}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex justify-center"
            >
              <img 
                className="w-full h-48 object-cover rounded-[3rem] opacity-40 mix-blend-multiply grayscale border border-slate-100" 
                alt="Digital security patterns" 
                src="/assets/images/cybersecurity.png"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

