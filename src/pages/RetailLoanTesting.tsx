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
  Currency,
  Calculator,
  Car,
  UserPlus
} from "lucide-react";

const testingDomains = [
  { name: "Retail Banking", icon: <Landmark className="w-5 h-5" />, path: "/testing/retail-banking" },
  { name: "Islamic Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/islamic-banking" },
  { name: "Bespoke Apps", icon: <Cpu className="w-5 h-5" />, path: "/testing/bespoke-apps" },
  { name: "Treasury", icon: <Banknote className="w-5 h-5" />, path: "/testing/treasury" },
  { name: "Retail Loans", icon: <Wallet className="w-5 h-5" />, path: "/testing/retail-loans" },
  { name: "Takaful Insurance", icon: <Shield className="w-5 h-5" />, path: "/testing/insurance" },
  { name: "Corporate Banking", icon: <Building className="w-5 h-5" />, path: "/testing/corporate-banking" },
  { name: "Wealth Management", icon: <Activity className="w-5 h-5" />, path: "/testing/wealth-management" },
  { name: "Asset Management", icon: <Coins className="w-5 h-5" />, path: "/testing/asset-management" },
  { name: "Cards & Payments", icon: <CreditCard className="w-5 h-5" />, path: "/testing/payments" },
  { name: "Trade Finance", icon: <FileText className="w-5 h-5" />, path: "/testing/trade-finance" },
  { name: "Mortgage Finance", icon: <Home className="w-5 h-5" />, path: "/testing/mortgage-finance" },
  { name: "Compliance & AML", icon: <ShieldCheck className="w-5 h-5" />, path: "/testing/risk-compliance" },
  { name: "Risk Management", icon: <BarChart3 className="w-5 h-5" />, path: "/testing/risk-management" },
  { name: "Agent Banking", icon: <MapPin className="w-5 h-5" />, path: "/testing/agent-banking" },
  { name: "Digital Ecosystems", icon: <Share2 className="w-5 h-5" />, path: "/testing/digital-ecosystems" },
];

export default function RetailLoanTesting() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar - Hidden on mobile, visible on LG */}
      <aside className="hidden lg:flex flex-col w-72 fixed left-0 top-20 bottom-0 bg-slate-50 border-r border-slate-200 overflow-y-auto z-30">
        <div className="p-8">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Financial Domains</h3>
          <p className="text-primary font-bold text-sm">Pristine Lab Standards</p>
        </div>
        <nav className="flex flex-col px-4 pb-8">
          <Link
            to="/testing"
            className="flex items-center gap-4 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-100 transition-all group mb-4"
          >
            <Layers className="w-5 h-5 text-slate-400 group-hover:text-primary" />
            <span className="text-[10px] uppercase font-black tracking-widest">Testing Hub</span>
          </Link>
          <div className="h-px bg-slate-200 mb-4 mx-4" />
          {testingDomains.map((domain) => {
            const isActive = location.pathname === domain.path;
            return (
              <Link
                key={domain.name}
                to={domain.path}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? "bg-white text-primary shadow-md font-bold" 
                    : "text-slate-500 hover:bg-slate-100 hover:pl-6"
                }`}
              >
                <span className={isActive ? "text-primary" : "text-slate-400 group-hover:text-primary"}>
                  {domain.icon}
                </span>
                <span className="text-[10px] uppercase font-black tracking-widest">{domain.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 p-8 lg:p-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <header className="mb-16">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-[0.1em] mb-4"
            >
              Laboratory Module 04-B
            </motion.span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-tight">
              Retail Loan <br />
              <span className="text-primary italic">Validation Framework</span>
            </h1>
            <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
              Systematic auditing of personal, home, and vehicle loan lifecycles. Our automated verification engine ensures amortization accuracy and regulatory adherence across every jurisdiction.
            </p>
          </header>

          {/* Bento Grid: Loan Type Specialized Testing */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
            {/* Home Loans */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Home className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Home Loan Architecture</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">
                  Comprehensive validation of fixed vs. floating rate structures, tax calculation logic, and escrow account balancing for multi-decade instruments.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-primary font-bold block text-xl">99.9%</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Precision Index</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-primary font-bold block text-xl">450+</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Test Scenarios</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Loans */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-primary text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <UserPlus className="w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold mb-2">Personal Loans</h3>
                <p className="text-blue-100 text-sm">
                  Micro-validation for unsecured credit, handling rapid disbursal logic and delinquency triggers.
                </p>
              </div>
              <button className="mt-8 bg-white/10 hover:bg-white/20 py-3 rounded-xl text-sm font-bold transition-all border border-white/20">
                Analyze Logic
              </button>
            </motion.div>

            {/* Vehicle Loans */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-5 bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <Car className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Vehicle Financing</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Asset-backed testing with collateral depreciation curves and insurance integration verification.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs font-medium text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Repo Protocol Audit
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Dealer Kickback Logic
                </li>
              </ul>
            </motion.div>

            {/* Amortization Module */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-7 bg-slate-50 p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold">Amortization Engine</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Real-time Calculation Matrix</p>
                </div>
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-10 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter">Principal Component</p>
                      <p className="text-sm text-on-surface-variant">Scheduled Repayment Analysis</p>
                    </div>
                  </div>
                  <span className="text-primary font-mono font-bold">PASS</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-10 bg-blue-300 rounded-full"></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter">Interest Accuracy</p>
                      <p className="text-sm text-on-surface-variant">Day-count Convention Check</p>
                    </div>
                  </div>
                  <span className="text-primary font-mono font-bold">PASS</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Detailed Testing Workflow */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8">Precision-Grade <br />Verification Cycle</h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold">01</div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Ingestion Layer</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Mapping disparate loan formats into the Pristine Laboratory unified data schema.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 text-on-surface flex items-center justify-center font-bold">02</div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Shadow Amortization</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Running parallel calculations to detect penny-variance in core banking legacy systems.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 text-on-surface flex items-center justify-center font-bold">03</div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Stress Sensitivity</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Simulating rate hikes and prepayment shocks to verify system resilience.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-square rounded-3xl bg-slate-50 overflow-hidden relative border border-slate-200 p-12">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="h-full w-full rounded-2xl bg-white shadow-2xl p-8 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="h-4 w-3/4 bg-slate-100 rounded-full"></div>
                      <div className="h-4 w-1/2 bg-slate-100 rounded-full"></div>
                      <div className="h-40 w-full bg-slate-50 rounded-2xl flex items-end p-6 gap-3">
                        <div className="flex-1 bg-primary/20 h-1/2 rounded-t-lg"></div>
                        <div className="flex-1 bg-primary/40 h-3/4 rounded-t-lg"></div>
                        <div className="flex-1 bg-primary h-full rounded-t-lg"></div>
                        <div className="flex-1 bg-primary/60 h-2/3 rounded-t-lg"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">STATUS: CALIBRATED</span>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">SYSTEM READY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
