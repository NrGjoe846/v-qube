import { motion } from "motion/react";
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  ShieldCheck, 
  Zap, 
  Target, 
  Wallet, 
  Gavel, 
  ArrowLeftRight, 
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Smartphone,
  TrendingUp,
  Shield,
  CreditCard,
  Activity,
  Network,
  User,
  Gavel as GavelIcon,
  Coins,
  Layers,
  Building,
  Handshake,
  FileText,
  Database,
  Clock,
  Landmark,
  Banknote,
  Home,
  BarChart3,
  MapPin,
  Share2,
  Cpu
} from "lucide-react";
import { Link } from "react-router-dom";

const sidebarItems = [
  { name: "Core Banking", icon: Building2, path: "/testing/core-banking" },
  { name: "Retail Banking", icon: Landmark, path: "/testing/retail-banking" },
  { name: "Islamic Banking", icon: Building2, path: "/testing/islamic-banking" },
  { name: "Treasury", icon: Banknote, path: "/testing/treasury" },
  { name: "Retail Loans", icon: Wallet, path: "/testing/retail-loans" },
  { name: "Corporate Banking", icon: Building, path: "/testing/corporate-banking" },
  { name: "Investment Banking", icon: TrendingUp, path: "/testing/investment-banking", active: true },
  { name: "Capital Markets", icon: TrendingUp, path: "/testing/capital-markets" },
  { name: "Insurance Testing", icon: Shield, path: "/testing/insurance" },
  { name: "Wealth Management", icon: Activity, path: "/testing/wealth-management" },
  { name: "Asset Management", icon: Coins, path: "/testing/asset-management" },
  { name: "Cards & Payments", icon: CreditCard, path: "/testing/payments" },
  { name: "Trade Finance", icon: FileText, path: "/testing/trade-finance" },
  { name: "Mortgage Finance", icon: Home, path: "/testing/mortgage-finance" },
  { name: "Compliance & AML", icon: ShieldCheck, path: "/testing/risk-compliance" },
  { name: "Risk Management", icon: BarChart3, path: "/testing/risk-management" },
  { name: "Agent Banking", icon: MapPin, path: "/testing/agent-banking" },
  { name: "Digital Ecosystems", icon: Share2, path: "/testing/digital-ecosystems" },
  { name: "Bespoke Apps", icon: Cpu, path: "/testing/bespoke-apps" },
];

export default function InvestmentBanking() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-16 lg:p-20">
        {/* Hero Section */}
        <section className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase bg-primary/10 text-primary rounded-full">
              Investment Banking Suite
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
              High-Trust Validation for <br/>
              <span className="text-primary italic">Global Capital.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-10 font-medium">
              Precision-engineered testing frameworks for M&A advisory, underwriting logic, and high-frequency market data integration.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="cobalt-gradient text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                Explore Methodology
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all shadow-sm">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </section>

        {/* Bento Grid - Core Competencies */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 group relative overflow-hidden bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Handshake className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900">M&A Advisory & Valuation Logic</h3>
              <p className="text-slate-600 text-lg leading-relaxed max-w-md font-medium">
                Testing multi-scenario discounted cash flow models and complex merger consequences with 99.99% numerical precision.
              </p>
              <div className="flex gap-3 mt-8">
                <span className="bg-slate-100 px-3 py-1.5 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">DCF Models</span>
                <span className="bg-slate-100 px-3 py-1.5 rounded-full text-[10px] font-black text-slate-500 uppercase tracking-widest">LBO Analysis</span>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-primary text-white p-10 rounded-3xl flex flex-col justify-between shadow-xl shadow-primary/20"
          >
            <div>
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black mb-4 tracking-tight">Underwriting <br/>Logic</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Securitization and issuance workflow validation.
              </p>
            </div>
            <div className="pt-6">
              <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                <div className="bg-white h-full w-3/4"></div>
              </div>
              <span className="text-[10px] uppercase font-black mt-2 inline-block">Compliance Verified</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Database className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">Market Data Integration</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              Real-time feed testing for Bloomberg, Reuters, and proprietary exchanges.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-slate-50 p-1 rounded-3xl"
          >
            <div className="bg-white h-full w-full rounded-[1.4rem] p-10 flex flex-col md:flex-row gap-10 items-center shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex-1">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Activity className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">Stress Testing & Risk Mitigation</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Simulating extreme market volatility to ensure platform stability during \"Black Swan\" events.
                </p>
              </div>
              <div className="w-full md:w-1/3 aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <img 
                  alt="Financial data visualization" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  src="https://images.unsplash.com/photo-1611974717484-22855fce4bd8?auto=format&fit=crop&q=80&w=800"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Methodology Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-4">The Pristine Approach</h2>
              <h3 className="text-4xl font-black tracking-tight mb-6 text-slate-900">A Laboratory for High-Finance Resilience.</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our BFSI testing lab replicates production environments with forensic accuracy. We don't just test code; we validate financial integrity and regulatory alignment.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 text-slate-900">SEC/FINRA Alignment</h4>
                  <p className="text-sm text-slate-500 font-medium">Automated checks for jurisdictional compliance and reporting accuracy.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-1 text-slate-900">Latency Sensitivity</h4>
                  <p className="text-sm text-slate-500 font-medium">Nanosecond-level performance benchmarking for electronic trading desks.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-1 rounded-3xl">
            <div className="bg-white rounded-[1.4rem] p-8 shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-black text-slate-900">Validation Pipeline</h4>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Equity Issuance Logic", status: "COMPLETE", icon: CheckCircle2, active: true },
                  { title: "Syndicate Desk Sync", status: "COMPLETE", icon: CheckCircle2, active: true },
                  { title: "Regulatory Reporting Hub", status: "IN PROGRESS", icon: Clock, active: false }
                ].map((item, i) => (
                  <div key={i} className={`p-4 rounded-xl border-l-4 flex justify-between items-center ${item.active ? "bg-primary/5 border-primary" : "bg-slate-50 border-slate-300"}`}>
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-4 h-4 ${item.active ? "text-primary" : "text-slate-400"}`} />
                      <span className={`text-sm font-bold ${item.active ? "text-slate-900" : "text-slate-500"}`}>{item.title}</span>
                    </div>
                    <span className={`text-[10px] font-black tracking-widest ${item.active ? "text-primary" : "text-slate-400"}`}>{item.status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <img 
                  className="w-full h-48 object-cover rounded-xl mb-6 grayscale brightness-110" 
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800" 
                  alt="Financial metrics"
                  referrerPolicy="no-referrer"
                />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live testing metrics from our Frankfurt-based Lab Node.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Secure your investment banking infrastructure today.
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
              Partner with the industry leader in high-trust financial software testing. Our experts are ready to audit your next-gen banking platform.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl shadow-primary/40">
                Schedule a Consultation
              </Link>
              <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-colors">
                Technical Whitepaper
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
        </section>
      </main>
    </div>
  );
}
