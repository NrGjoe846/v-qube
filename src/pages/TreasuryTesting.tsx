import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
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
  Code2,
  Waves,
  Globe,
  Currency
} from "lucide-react";


export default function TreasuryTesting() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920" 
              alt="Treasury Management"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-24">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 mb-8">
                <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Home</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Testing Hub</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Treasury</span>
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-blue-400 text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/30">
                  <TrendingUp className="w-3 h-3 mr-2" /> Strategic Treasury Assurance
                </span>
                <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                  Precision testing for <span className="text-primary italic">high-velocity</span> liquidity.
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium mb-12">
                  V Qube Enterprises provides industrial-grade validation for treasury management systems, focusing on real-time FX risk, automated liquidity buffers, and global SWIFT standard adoption.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 bg-primary text-white rounded-xl font-black shadow-xl shadow-primary/25 hover:bg-blue-600 transition-all active:scale-95">
                    Explore Modules
                  </Link>
                  <Link to="/contact" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-xl font-black hover:bg-white/20 transition-all">
                    Technical Specs
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bento Grid - Core Competencies */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
              {/* FX Engine Card */}
              <div className="md:col-span-8 bg-slate-50 p-10 rounded-[3rem] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between border border-slate-100">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <ArrowLeftRight className="w-12 h-12 text-primary" />
                    <span className="text-[10px] font-bold py-1 px-3 bg-primary/10 text-primary rounded-full uppercase tracking-widest">CORE_MODULE_01</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">FX Risk & Derivative Validation</h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                    Comprehensive testing for spot, forward, and swap transaction engines. We simulate high-volatility market scenarios to ensure sub-millisecond pricing accuracy and risk exposure reporting.
                  </p>
                </div>
                <div className="flex gap-8 mt-8 border-t border-slate-200 pt-8">
                  <div>
                    <span className="block text-2xl font-black text-primary tracking-tighter">0.02ms</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Latency Threshold</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-primary tracking-tighter">45+</span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">Currencies Supported</span>
                  </div>
                </div>
              </div>

              {/* ISO 20022 Card */}
              <div className="md:col-span-4 orange-gradient p-10 rounded-[3rem] flex flex-col justify-end text-white relative overflow-hidden shadow-2xl shadow-primary/20 group">
                <div className="absolute top-8 right-8 opacity-20 transform scale-150 group-hover:scale-175 transition-transform duration-700">
                  <Globe className="w-[120px] h-[120px]" />
                </div>
                <h4 className="text-2xl font-black mb-4 tracking-tight">SWIFT ISO 20022</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-8 font-medium">
                  Transition assurance for structural messaging updates and cross-border payment rails.
                </p>
                <a className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group/link" href="#">
                  Protocol Spec 
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Liquidity Management */}
              <div className="md:col-span-4 bg-slate-50 p-10 rounded-[3rem] hover:bg-slate-100 transition-colors border border-slate-100 group">
                <Waves className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Liquidity Forecasting</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  Simulated stress-testing of cash positioning and intraday liquidity requirements for global operations.
                </p>
              </div>

              {/* Compliance Vault */}
              <div className="md:col-span-8 bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col sm:flex-row items-center gap-12 group">
                <div className="hidden sm:block flex-shrink-0 w-40 h-40 rounded-3xl bg-white shadow-sm overflow-hidden border border-slate-100">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400" 
                    alt="High-tech security" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Regulatory Reconciliation</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed font-medium">
                    Automatic mapping of treasury workflows against Basel III and Dodd-Frank compliance standards with real-time audit logs.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Basel III", "MiFID II", "EMIR"].map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white border border-slate-200 rounded-full text-[10px] font-black text-slate-600 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Detail Section */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                  The Testing <br/><span className="text-primary italic">Architecture.</span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                  Our proprietary "Vault Protocol" ensures every treasury function is isolated, stressed, and validated before integration.
                </p>
                <ul className="space-y-6">
                  {[
                    "Latency-Aware Sandbox",
                    "MT-to-MX Migration Paths",
                    "Real-time GRC Linkage"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Shadow Ledgers", desc: "We run parallel shadow ledgers during testing to capture minute discrepancies in settlement rounding and interest calculation." },
                  { title: "Messaging Integrity", desc: "Stress testing message queues for massive spikes in SWIFT gpi transactions to prevent bottlenecking." },
                  { title: "Automated Hedging", desc: "Validation of smart-hedging algorithms and trigger points based on live external market feeds." },
                  { title: "API Connectivity", desc: "End-to-end assurance for Open Banking APIs and direct host-to-host bank connections." }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                    <h5 className="font-black text-lg text-slate-900 mb-4 tracking-tight">{item.title}</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Standards Section */}
        <section className="px-8 md:px-16 py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/5 opacity-20"></div>
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-6 block">Global Standards</span>
                  <h2 className="text-4xl lg:text-6xl font-black tracking-tighter mb-8 leading-none">
                    ISO 20022 <span className="text-primary italic">Readiness.</span>
                  </h2>
                  <p className="text-slate-300 text-lg leading-relaxed mb-10 font-medium">
                    Validated for multi-currency settlement systems with 99.99% data integrity. We ensure your treasury systems are ready for the next generation of global financial messaging.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-primary text-white rounded-xl font-black hover:bg-blue-600 transition-all">
                      View Protocol Spec
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-black hover:bg-white/20 transition-all">
                      Migration Guide
                    </button>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-40 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                      <ShieldCheck className="w-12 h-12 text-primary" />
                    </div>
                    <div className="h-60 bg-primary/20 rounded-3xl border border-primary/30 flex items-center justify-center">
                      <Activity className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="h-60 bg-blue-500/20 rounded-3xl border border-blue-400/30 flex items-center justify-center">
                      <Zap className="w-16 h-16 text-blue-400" />
                    </div>
                    <div className="h-40 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

