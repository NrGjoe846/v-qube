import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { 
  Building2, 
  Shield, 
  TrendingUp, 
  CreditCard, 
  Wallet, 
  Activity, 
  Layers,
  LineChart,
  Database,
  Gavel,
  CheckCircle2,
  ArrowRight,
  Landmark,
  Banknote,
  FileText,
  Home,
  BarChart3,
  MapPin,
  Share2,
  Cpu,
  ShieldCheck
} from "lucide-react";

const sidebarItems = [
  { name: "Core Banking", icon: Building2, path: "/testing/core-banking" },
  { name: "Retail Banking", icon: Landmark, path: "/testing/retail-banking" },
  { name: "Islamic Banking", icon: Building2, path: "/testing/islamic-banking" },
  { name: "Treasury", icon: Banknote, path: "/testing/treasury" },
  { name: "Retail Loans", icon: Wallet, path: "/testing/retail-loans" },
  { name: "Corporate Banking", icon: Building2, path: "/testing/corporate-banking" },
  { name: "Investment Banking", icon: TrendingUp, path: "/testing/investment-banking" },
  { name: "Capital Markets", icon: TrendingUp, path: "/testing/capital-markets", active: true },
  { name: "Insurance Testing", icon: Shield, path: "/testing/insurance" },
  { name: "Wealth Management", icon: Activity, path: "/testing/wealth-management" },
  { name: "Asset Management", icon: Building2, path: "/testing/asset-management" },
  { name: "Cards & Payments", icon: CreditCard, path: "/testing/payments" },
  { name: "Trade Finance", icon: FileText, path: "/testing/trade-finance" },
  { name: "Mortgage Finance", icon: Home, path: "/testing/mortgage-finance" },
  { name: "Compliance & AML", icon: ShieldCheck, path: "/testing/risk-compliance" },
  { name: "Risk Management", icon: BarChart3, path: "/testing/risk-management" },
  { name: "Agent Banking", icon: MapPin, path: "/testing/agent-banking" },
  { name: "Digital Ecosystems", icon: Share2, path: "/testing/digital-ecosystems" },
  { name: "Bespoke Apps", icon: Cpu, path: "/testing/bespoke-apps" },
];

export default function CapitalMarkets() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content Area */}
      <main className="flex-1 p-8 md:p-16 lg:p-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <section className="max-w-5xl mb-24">
            <span className="inline-block bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
              Capital Markets Precision
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] text-on-surface mb-8">
              The Pristine<br/><span className="text-primary italic">Trading Vault</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed font-medium">
              High-integrity validation for institutional-grade trading infrastructure. We ensure zero-latency accuracy for market data feeds and flawless post-trade settlement architecture.
            </p>
          </section>

          {/* Bento Grid - Testing Specializations */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
            {/* Card 1: Trading Platform */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 group relative overflow-hidden bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <LineChart className="text-primary w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-on-surface">Trading Platform Validation</h3>
                </div>
                <span className="bg-primary-container text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">CORE MODULE</span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-on-surface-variant font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Order Management System (OMS)
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Latency Sensitivity Analysis
                  </li>
                  <li className="flex items-center gap-3 text-on-surface-variant font-medium">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Execution Algorithm Testing
                  </li>
                </ul>
                <div className="bg-surface-container-low dark:bg-slate-800/50 rounded-2xl p-4 overflow-hidden border border-slate-100 dark:border-white/5">
                  <img 
                    className="w-full h-40 object-cover rounded-xl shadow-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" 
                    src="https://images.unsplash.com/photo-1611974717484-22855fce4bd8?auto=format&fit=crop&q=80&w=800" 
                    alt="Trading dashboard visualization"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Market Data */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-primary text-white rounded-3xl p-10 cobalt-gradient flex flex-col justify-between shadow-xl shadow-primary/20"
            >
              <div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Database className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-4 tracking-tight">Market Data Feeds</h3>
                <p className="text-primary-fixed text-sm leading-relaxed opacity-90 font-medium">
                  Continuous validation of real-time exchange feeds, historical data integrity, and multi-asset ticker accuracy.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold border border-white/20 uppercase tracking-widest">FIX Protocol</span>
                <span className="bg-white/10 px-3 py-1.5 rounded-lg text-[10px] font-bold border border-white/20 uppercase tracking-widest">WebSocket</span>
              </div>
            </motion.div>

            {/* Card 3: Settlement */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-5 bg-surface-container-low dark:bg-slate-900 rounded-3xl p-10 flex flex-col justify-between border border-outline-variant/15 dark:border-slate-800 shadow-sm"
            >
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Operational Integrity</h4>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Post-Trade Settlement</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-medium">
                  Automated regression for clearing processes, reconciliation engines, and SWIFT messaging compliance.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed-dim border-2 border-white dark:border-slate-800 shadow-sm"></div>
                  <div className="w-10 h-10 rounded-full bg-primary-fixed-dim border-2 border-white dark:border-slate-800 shadow-sm"></div>
                  <div className="w-10 h-10 rounded-full bg-surface-container-high border-2 border-white dark:border-slate-800 shadow-sm"></div>
                </div>
                <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Used by Tier-1 Banks</span>
              </div>
            </motion.div>

            {/* Card 4: Compliance */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-10 shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-8 group"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 tracking-tight">Regulatory Conformance</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium">
                  MiFID II, EMIR, and Dodd-Frank reporting validation integrated into the CI/CD pipeline.
                </p>
                <button className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  View Compliance Framework
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <div className="hidden sm:flex w-32 h-32 bg-secondary-fixed rounded-2xl items-center justify-center shrink-0">
                <Gavel className="w-12 h-12 text-on-secondary-fixed" />
              </div>
            </motion.div>
          </div>

          {/* Precision Metric Section */}
          <section className="mb-24 py-20 border-y border-outline-variant/15 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-on-surface">Institutional Precision Metrics</h2>
              <p className="text-on-surface-variant text-lg font-medium leading-relaxed">
                Our lab simulates high-volatility scenarios to stress test your environment before the first bell rings.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full md:w-auto">
              <div className="text-center md:text-left">
                <div className="text-5xl font-black text-primary tracking-tighter mb-1">0.02ms</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-outline">Mean Latency</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-5xl font-black text-primary tracking-tighter mb-1">99.999%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-outline">Feed Uptime</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-5xl font-black text-primary tracking-tighter mb-1">100M+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-outline">Daily Msg Volume</div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
