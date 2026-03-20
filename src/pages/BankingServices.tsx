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
  PiggyBank,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Lock,
  Zap,
  Search,
  Settings,
  Code2,
  Waves,
  Globe,
  Currency,
  Calculator
} from "lucide-react";

const testingDomains = [
  { name: "Core Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/core-banking" },
  { name: "Retail Banking", icon: <Landmark className="w-5 h-5" />, path: "/testing/retail-banking" },
  { name: "Islamic Banking", icon: <Building2 className="w-5 h-5" />, path: "/testing/islamic-banking" },
  { name: "Treasury", icon: <Banknote className="w-5 h-5" />, path: "/testing/treasury" },
  { name: "Retail Loans", icon: <Wallet className="w-5 h-5" />, path: "/testing/retail-loans" },
  { name: "Corporate Banking", icon: <Building className="w-5 h-5" />, path: "/testing/corporate-banking" },
  { name: "Investment Banking", icon: <TrendingUp className="w-5 h-5" />, path: "/testing/investment-banking" },
  { name: "Capital Markets", icon: <TrendingUp className="w-5 h-5" />, path: "/testing/capital-markets" },
  { name: "Insurance Testing", icon: <Shield className="w-5 h-5" />, path: "/testing/insurance" },
  { name: "Wealth Management", icon: <Activity className="w-5 h-5" />, path: "/testing/wealth-management" },
  { name: "Asset Management", icon: <Coins className="w-5 h-5" />, path: "/testing/asset-management" },
  { name: "Cards & Payments", icon: <CreditCard className="w-5 h-5" />, path: "/testing/payments" },
  { name: "Trade Finance", icon: <FileText className="w-5 h-5" />, path: "/testing/trade-finance" },
  { name: "Mortgage Finance", icon: <Home className="w-5 h-5" />, path: "/testing/mortgage-finance" },
  { name: "Compliance & AML", icon: <ShieldCheck className="w-5 h-5" />, path: "/testing/risk-compliance" },
  { name: "Risk Management", icon: <BarChart3 className="w-5 h-5" />, path: "/testing/risk-management" },
  { name: "Agent Banking", icon: <MapPin className="w-5 h-5" />, path: "/testing/agent-banking" },
  { name: "Digital Ecosystems", icon: <Share2 className="w-5 h-5" />, path: "/testing/digital-ecosystems" },
  { name: "Bespoke Apps", icon: <Cpu className="w-5 h-5" />, path: "/testing/bespoke-apps" },
];

export default function BankingServices() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-20 pt-32">
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
              Laboratory Module 01-A
            </motion.span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-on-surface mb-6 leading-tight">
              Retail Banking <br />
              <span className="text-primary italic">Testing Lab</span>
            </h1>
            <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
              Precision-grade auditing for the core of consumer finance. From high-frequency transactions to complex deposit compounding, our validation suite ensures architectural integrity at every ledger entry.
            </p>
          </header>

          {/* Bento Grid: Specialized Testing */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
            {/* Savings Accounts */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-8 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <PiggyBank className="w-48 h-48" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Savings Accounts Protocol</h3>
                <p className="text-on-surface-variant mb-8 max-w-md">
                  Validation of interest accruals, tier-based pricing, and sweep-in/out logic for high-volume retail accounts.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-primary font-bold block text-xl">99.99%</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Accuracy Bench</span>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <span className="text-primary font-bold block text-xl">600+</span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Edge Cases</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Recurring Deposits */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-4 bg-primary text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <Repeat className="w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold mb-2">Recurring Deposits</h3>
                <p className="text-blue-100 text-sm">
                  Systematic auditing of installment schedules, maturity calculations, and penalty logic.
                </p>
              </div>
              <button className="mt-8 bg-white/10 hover:bg-white/20 py-3 rounded-xl text-sm font-bold transition-all border border-white/20">
                Run Simulation
              </button>
            </motion.div>

            {/* Fixed Deposits */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-5 bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <Banknote className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Fixed Deposits</h3>
              <p className="text-on-surface-variant text-sm mb-6">
                Verification of compounding frequencies, premature withdrawal penalties, and TDS calculations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-xs font-medium text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Compounding Logic Audit
                </li>
                <li className="flex items-center gap-2 text-xs font-medium text-on-surface">
                  <CheckCircle2 className="w-4 h-4 text-primary" /> Premature Closure Penalty
                </li>
              </ul>
            </motion.div>

            {/* Accuracy Validation Suite */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="md:col-span-7 bg-slate-50 p-8 rounded-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold">Accuracy Validation Suite</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold">Real-time Verification Matrix</p>
                </div>
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-10 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter">Interest Calculation</p>
                      <p className="text-sm text-on-surface-variant">Daily Accrual Verification</p>
                    </div>
                  </div>
                  <span className="text-primary font-mono font-bold">VERIFIED</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-10 bg-blue-300 rounded-full"></div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter">Tax Compliance</p>
                      <p className="text-sm text-on-surface-variant">TDS/Withholding Audit</p>
                    </div>
                  </div>
                  <span className="text-primary font-mono font-bold">VERIFIED</span>
                </div>
              </div>
            </motion.div>
          </section>

          {/* The Precision Manifesto */}
          <section className="mb-20">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-8">The Precision <br />Manifesto</h2>
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold">01</div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Zero-Variance Policy</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">We treat every penny as a mission-critical data point. No rounding errors, no exceptions.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 text-on-surface flex items-center justify-center font-bold">02</div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Automated Regression</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Continuous testing of core banking patches to ensure legacy stability.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 text-on-surface flex items-center justify-center font-bold">03</div>
                    <div>
                      <h4 className="font-bold mb-2 text-lg">Regulatory Mapping</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">Real-time alignment with central bank mandates and local compliance laws.</p>
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
                        <div className="flex-1 bg-primary/20 h-1/3 rounded-t-lg"></div>
                        <div className="flex-1 bg-primary/40 h-2/3 rounded-t-lg"></div>
                        <div className="flex-1 bg-primary h-full rounded-t-lg"></div>
                        <div className="flex-1 bg-primary/60 h-1/2 rounded-t-lg"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">LAB STATUS: ACTIVE</span>
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">PRISTINE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Assurance Matrix */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Domain Assurance Matrix</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: <Terminal />, title: "Functional", desc: "Verification of business logic & account rules." },
                { icon: <Share2 />, title: "Integration", desc: "API and middleware connectivity testing." },
                { icon: <Gauge />, title: "Performance", desc: "Load stress under peak banking hours." },
                { icon: <ShieldCheck />, title: "Security", desc: "Penetration testing & data encryption." },
                { icon: <Users />, title: "UAT", desc: "User acceptance & real-world validation." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center border border-slate-200 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10">
                    {item.icon}
                  </div>
                  <h5 className="font-black text-slate-900 mb-3 text-[10px] uppercase tracking-widest">{item.title}</h5>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-20">
            <div className="bg-primary p-12 md:p-20 rounded-[3rem] text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to audit your core?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">Deploy our specialized retail banking laboratory for your next implementation or migration.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all">
                  Book Lab Session
                </Link>
                <Link to="/testing" className="bg-primary-dark text-white border border-white/20 px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all">
                  View Domains
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}

