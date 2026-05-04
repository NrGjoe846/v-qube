import { motion } from "motion/react";
import { 
  Landmark, 
  Shield, 
  TrendingUp, 
  CreditCard, 
  Wallet, 
  Activity, 
  Network, 
  ArrowLeftRight, 
  User, 
  Briefcase, 
  Gavel, 
  RefreshCw, 
  Layers,
  ChevronRight,
  Terminal,
  Share2,
  Gauge,
  ShieldCheck,
  Users,
  Building2,
  Banknote,
  Building,
  Coins,
  FileText,
  Home,
  BarChart3,
  MapPin,
  Cpu,
  Zap,
  Lock,
  Search,
  CheckCircle2,
  Settings,
  Code2
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";


export default function BespokeAppsTesting() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-surface-container-lowest">
          <div className="absolute inset-0 bg-grid-orange opacity-40"></div>

          <div className="container-max w-full relative z-10 py-24">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 mb-8">
                <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 hover:text-primary">Home</Link>
                <ChevronRight className="w-3 h-3 text-on-surface/20" />
                <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-on-surface/40 hover:text-primary">Testing Hub</Link>
                <ChevronRight className="w-3 h-3 text-on-surface/20" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Bespoke Apps</span>
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/30">
                  <CheckCircle2 className="w-3 h-3 mr-2" /> Precision QA Laboratory
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-on-surface tracking-tighter leading-[0.9] mb-8">
                  Bespoke <span className="text-gradient italic">Applications</span> Testing.
                </h1>
                <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium opacity-80 mb-12">
                  Custom-engineered testing frameworks for unique BFSI ecosystems. We validate the complex logic of fintech startups and the rigid integration requirements of enterprise banking.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-black shadow-xl shadow-primary/25 hover:scale-105 transition-all active:scale-95">
                    Start Lab Audit
                  </Link>
                  <Link to="/contact" className="px-8 py-4 glass-card text-on-surface border border-outline-variant/20 rounded-xl font-black hover:bg-primary/5 transition-all">
                    Technical Specs
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-white">
          <div className="container-max w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2 bg-slate-50 p-12 rounded-[3rem] border border-slate-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Custom Banking Ecosystems</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-xl">
                  Our laboratory environment mirrors your unique legacy-to-cloud architecture, ensuring zero-day stability for proprietary internal systems that standard tools can't touch.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Settings className="w-6 h-6" />
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest text-slate-700">Logic Validation</span>
                  </div>
                  <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Network className="w-6 h-6" />
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest text-slate-700">Protocol Analysis</span>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-12 rounded-[3rem] text-white orange-gradient flex flex-col justify-between shadow-2xl shadow-primary/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid-white/5 opacity-20"></div>
                <Zap className="w-12 h-12 mb-8 group-hover:scale-110 transition-transform duration-500" fill="currentColor" />
                <div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight">Agile Fintech Startups</h3>
                  <p className="text-blue-100 text-sm leading-relaxed font-medium">
                    Rapid-release cycles without compromising security. We integrate directly into your CI/CD pipeline for instant validation of disruptive financial products.
                  </p>
                </div>
              </div>
            </div>

            {/* 4-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <Share2 />, title: "API Integrity", desc: "Seamless handshake validation for complex multi-vendor integrations." },
                { icon: <Lock />, title: "Deep Security", desc: "Penetration testing at the code-level for custom proprietary logic." },
                { icon: <Gauge />, title: "Stress Profiling", desc: "Finding the breaking point of your unique financial algorithms." },
                { icon: <Terminal />, title: "Edge Cases", desc: "Anticipating human and system errors before they occur in production." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h4 className="font-black text-sm uppercase tracking-widest text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-slate-50">
          <div className="container-max w-full">
            <div className="bg-white p-12 lg:p-24 rounded-[4rem] border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-blue-400 to-primary"></div>
              <div className="flex-1">
                <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Seamless API <span className="text-primary italic">Integrations.</span></h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                  In the modern banking era, no application is an island. We specialize in testing the invisible bridges—APIs, microservices, and webhooks—that connect your bespoke app to the global financial grid.
                </p>
                <Link to="/contact" className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary transition-all shadow-xl">
                  Explore Integration Matrix
                </Link>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-3xl animate-pulse"></div>
                <img 
                  className="relative z-10 w-full rounded-[3rem] shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 border-4 border-white" 
                  src="/assets/images/trading_metrics.png" 
                  alt="Data visualization"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lab Standards Section */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-white">
          <div className="container-max w-full">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="flex-1 grid grid-cols-2 gap-4">
                <img className="rounded-3xl shadow-lg" src="/assets/images/network_connectivity.png" alt="Server Room" referrerPolicy="no-referrer" />
                <img className="rounded-3xl shadow-lg mt-8" src="/assets/images/code_software.png" alt="Dashboard" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block">Laboratory Protocols</span>
                <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight">Rigorous Verification Standards</h2>
                <div className="space-y-8">
                  {[
                    { title: "Logic Traceability", desc: "Every custom algorithm is mapped to business requirements for 100% coverage." },
                    { title: "Protocol Fuzzing", desc: "Testing proprietary communication protocols against unexpected data inputs." },
                    { title: "Regression Automation", desc: "Bespoke test suites that evolve alongside your custom codebase." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-primary font-black">
                        0{i + 1}
                      </div>
                      <div>
                        <h4 className="font-black text-lg text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


