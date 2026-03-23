import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Shield, 
  FileText, 
  AlertCircle, 
  Calculator, 
  ArrowRight, 
  Smartphone, 
  CheckCircle2,
  Landmark,
  Building2,
  TrendingUp,
  CreditCard,
  Gavel,
  Layers,
  ChevronRight,
  Wallet,
  Banknote,
  Cpu,
  Activity,
  Coins,
  Home,
  ShieldCheck,
  BarChart3,
  MapPin,
  Share2
} from "lucide-react";


export default function InsuranceTesting() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface antialiased">
      {/* Main Content */}
      <main className="flex-1">
        {/* Dynamic Nav Breadcrumb */}
        <div className="absolute top-28 left-8 lg:left-16 z-20">
          <nav className="flex items-center gap-2">
            <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Domains</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Insurance</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface-container-low mx-4 mt-20 rounded-[3rem] border border-slate-200 shadow-sm mb-12">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-grid-orange opacity-5 rotate-12 scale-150"></div>
             <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-24 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/10">
                  Specialized Testing
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
                  Specialized <br/>Insurance <span className="text-primary italic">Testing.</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium mb-12">
                  Deploying surgical precision across the insurance value chain. From policy legacy migrations to real-time actuarial validation, we ensure your digital vault remains unbreachable.
                </p>
                <div className="flex gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-black shadow-xl shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                    Audit My Stack
                  </Link>
                  <button className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-black hover:bg-slate-50 transition-all">
                    View Framework Report
                  </button>
                </div>
              </motion.div>
            </div>
            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75 translate-x-12 translate-y-12"></div>
                <img 
                  alt="Modern financial workspace" 
                  className="w-full h-auto rounded-[2.5rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white" 
                  src="/src/assets/images/unsplash-1556742502-ec7c0e9f34b1.jpg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid: Core Domains */}
        <section className="px-8 md:px-16 py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Core Domains</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Policy Administration */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 bg-white p-12 rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Policy Administration</h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-xl mb-12 font-medium">
                    End-to-end validation of lifecycle management from quoting and binding to renewal and endorsements. Our automated scripts simulate multi-state compliance and complex riders with 99.9% accuracy.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
                    <div>
                      <p className="text-4xl font-black text-primary mb-1 tracking-tighter">40%</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Effort Reduction</p>
                    </div>
                    <div>
                      <p className="text-4xl font-black text-primary mb-1 tracking-tighter">100%</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Regulatory Coverage</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Claims Management */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-slate-50 p-10 rounded-[3rem] border border-slate-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 text-slate-900 shadow-sm group-hover:scale-110 transition-transform border border-slate-100">
                    <AlertCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Claims Management</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Validation of adjudication engines, FNOL workflows, and fraud detection integrations.
                  </p>
                </div>
                <button className="inline-flex items-center mt-12 text-primary font-black text-[10px] uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
                  Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Actuarial Validation */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-4 orange-gradient text-white p-10 rounded-[3rem] shadow-2xl shadow-primary/20 flex flex-col justify-between relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-grid-white/5 opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4 tracking-tight">Actuarial Validation</h3>
                  <p className="text-blue-100 leading-relaxed font-medium mb-8">
                    Regression testing for complex pricing models and rating engines. We verify the math before it meets the market.
                  </p>
                </div>
                <div className="relative z-10">
                  <Calculator className="w-16 h-16 opacity-20" />
                </div>
              </motion.div>

              {/* Omnichannel Testing */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-8 bg-surface-container-low p-10 rounded-[3rem] flex items-center gap-12 border border-slate-200 relative overflow-hidden group"
              >
                <div className="flex-1 relative z-10">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Omnichannel Testing</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Seamless agent portal and customer mobile app synchronization testing for consistent policy views across all touchpoints.
                  </p>
                </div>
                <div className="hidden sm:block relative z-10 shrink-0">
                  <div className="w-48 h-48 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 rotate-3 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                    <img 
                      alt="Sync Visualization" 
                      className="w-full h-full object-cover grayscale opacity-60" 
                      src="/src/assets/images/unsplash-1512941937669-90a1b58e7e9c.jpg"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Laboratory Protocol */}
        <section className="px-8 md:px-16 py-32 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-grid-white"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <span className="text-primary font-black tracking-[0.4em] uppercase text-[10px]">Our Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black mt-8 tracking-tighter">Atmospheric Depth & Precision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                {
                  id: "01",
                  title: "Discovery Archive",
                  desc: "Mapping every legacy endpoint and API dependency to create a digital twin of your insurance ecosystem."
                },
                {
                  id: "02",
                  title: "Surgical Execution",
                  desc: "Automated stress-testing of rating algorithms with million-row datasets to ensure mathematical integrity."
                },
                {
                  id: "03",
                  title: "Vault Verification",
                  desc: "Continuous compliance monitoring against State filings and GDPR/HIPAA standards in real-time."
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pt-12 group"
                >
                  <div className="text-9xl font-black text-white/5 absolute top-0 left-0 -translate-x-4 -z-10 transition-all group-hover:text-primary/10">
                    {step.id}
                  </div>
                  <h4 className="text-2xl font-black mb-6 tracking-tight">{step.title}</h4>
                  <p className="text-slate-400 text-lg leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-16 py-32 bg-white">
          <div className="orange-gradient p-16 md:p-24 rounded-[4rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-[0px_32px_128px_rgba(0,64,223,0.3)] mx-auto max-w-7xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-orange"></div>
            <div className="relative z-10 max-w-3xl">
              <h3 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">Architect a Precision Framework.</h3>
              <p className="text-xl text-white/80 mb-12 font-medium">Our domain experts are ready to audit your insurance stack and deploy a surgical testing engine.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1">
                  Consult an Expert
                </Link>
                <Link to="/testing" className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                  Browse Lab Hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

