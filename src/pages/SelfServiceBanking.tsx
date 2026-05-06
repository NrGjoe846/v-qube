import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Smartphone,
  Monitor,
  Laptop,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  ChevronRight,
  Database,
  RefreshCw,
  Eye,
  CreditCard,
  Building2,
  Landmark,
  Shield,
  Wallet,
  Cpu,
  TrendingUp,
  FileText,
  Home,
  BarChart3,
  MapPin,
  Share2,
  Layers,
  Banknote,
  Coins
} from "lucide-react";

const testingAreas = [
  { name: "Core Banking", path: "/testing/core-banking" },
  { name: "Retail Banking", path: "/testing/retail-banking" },
  { name: "Islamic Banking", path: "/testing/islamic-banking" },
  { name: "Treasury", path: "/testing/treasury" },
  { name: "Retail Loans", path: "/testing/retail-loans" },
  { name: "Corporate Banking", path: "/testing/corporate-banking" },
  { name: "Investment Banking", path: "/testing/investment-banking" },
  { name: "Capital Markets", path: "/testing/capital-markets" },
  { name: "Insurance Testing", path: "/testing/insurance" },
  { name: "Wealth Management", path: "/testing/wealth-management" },
  { name: "Asset Management", path: "/testing/asset-management" },
  { name: "Cards & Payments", path: "/testing/payments" },
  { name: "Trade Finance", path: "/testing/trade-finance" },
  { name: "Mortgage Finance", path: "/testing/mortgage-finance" },
  { name: "Compliance & AML", path: "/testing/risk-compliance" },
  { name: "Risk Management", path: "/testing/risk-management" },
  { name: "Agent Banking", path: "/testing/agent-banking" },
  { name: "Digital Ecosystems", path: "/testing/digital-ecosystems" },
  { name: "Bespoke Apps", path: "/testing/bespoke-apps" },
  { name: "Data Warehouse", path: "/testing/data-warehouse" },
];

export default function SelfServiceBanking() {
  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface antialiased">
      {/* Main Content */}
      <main className="flex-1">
        {/* Breadcrumb Nav */}
        <div className="container-max pt-32 pb-4 relative z-20">
          <nav className="flex items-center gap-2">
            <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-3 h-3 text-on-surface-variant/20" />
            <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant/40 hover:text-primary transition-colors">Domains</Link>
            <ChevronRight className="w-3 h-3 text-on-surface-variant/20" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Self-Service Banking</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="relative min-h-[70vh] flex items-center bg-surface-container-lowest">
          <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] pointer-events-none"
          ></motion.div>

          <div className="container-max relative z-10 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-[0.2em] uppercase mb-8">
                Strategic QA Center
              </div>
              <h1 className="text-3xl md:text-8xl font-black tracking-tight text-on-surface mb-8 leading-[1.05]">
                Self-Service Banking <br /><span className="text-gradient">Testing Solutions.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12 font-medium max-w-2xl">
                Engineering flawless user journeys across the digital frontier. Our specialized BFSI testing framework ensures absolute security and zero-latency performance for your critical self-service channels.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact" className="orange-gradient text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 transition-all group active:scale-95 flex items-center gap-3">
                  Secure Your Digital Channels
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Educational Section */}
        <section className="py-32 bg-surface-container-low">
          <div className="container-max w-full">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="md:w-1/3 sticky top-32">
                <h2 className="text-4xl font-black tracking-tight mb-8">Digital Evolution in BFSI</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed font-medium">
                  Modern banking has transcended brick-and-mortar. Today, the strategic approach to testing ensures that every digital touchpoint—from the hardware of an ATM to the cloud-native mobile app—operates as a high-security digital vault.
                </p>
                <div className="h-2 w-20 bg-primary rounded-full mt-10"></div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Database />, title: "Zero-Trust Protocol", desc: "Implementing validation cycles that assume every data entry point is a potential vulnerability, ensuring multi-layer verification." },
                  { icon: <Share2 />, title: "Omnichannel Continuity", desc: "Testing the seamless hand-off between mobile apps and physical kiosks without session loss or security breaches." },
                  { icon: <RefreshCw />, title: "Latency Management", desc: "Performance benchmarks focusing on sub-second transaction processing for real-time internet banking portals." },
                  { icon: <Eye />, title: "Precision Monitoring", desc: "Real-time dashboards that provide visibility into testing status and identified compliance gaps." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-black mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Testing Areas - Bento Grid */}
        <section className="py-32 bg-white">
          <div className="container-max w-full">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Omni-Channel Excellence</h2>
              <p className="text-on-surface-variant text-xl font-medium">Specialized testing domains designed for the unique hardware and software requirements of global financial services.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ATM Testing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-slate-50 rounded-[3.5rem] p-12 flex flex-col justify-between group overflow-hidden relative border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="relative z-10">
                  <span className="text-primary font-black tracking-widest uppercase text-[10px] mb-4 block">Physical Frontier</span>
                  <h3 className="text-4xl font-black mt-2 mb-8 tracking-tight">ATM & Kiosk Hardware</h3>
                  <ul className="space-y-6 max-w-md">
                    {[
                      "EMV Chip & Pin Validation",
                      "Currency Dispensing Calibration",
                      "Offline Mode Persistence"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 text-slate-700 font-bold text-sm">
                        <CheckCircle2 className="text-primary w-5 h-5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-700"></div>
                <Monitor className="absolute bottom-12 right-12 w-32 h-32 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-500 text-primary" />
              </motion.div>

              {/* Mobile Apps */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary rounded-[3.5rem] p-12 flex flex-col justify-between text-white shadow-2xl shadow-primary/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-grid-white/10 opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <span className="text-blue-100 font-bold tracking-widest uppercase text-[10px] block mb-4">Mobile Native</span>
                  <h3 className="text-4xl font-black mt-2 mb-6 tracking-tight">Banking Apps</h3>
                  <p className="text-blue-50 leading-relaxed font-medium mb-8">Deep-dive functional testing across 100+ device configurations, focusing on biometric auth and push notifications.</p>
                </div>
                <div className="flex justify-end relative z-10">
                  <div className="w-20 h-20 rounded-[2rem] bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <Smartphone className="text-white w-10 h-10" />
                  </div>
                </div>
              </motion.div>

              {/* Internet Banking */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-900 text-white rounded-[3.5rem] p-12 flex flex-col justify-between group overflow-hidden relative"
              >
                <div className="relative z-10">
                  <span className="text-primary font-bold tracking-widest uppercase text-[10px] block mb-4">Web Presence</span>
                  <h3 className="text-3xl font-black mt-2 mb-6 tracking-tight">Internet Portals</h3>
                  <p className="text-slate-400 leading-relaxed font-medium mb-10 text-sm">Browser compatibility, high-load transaction stress testing, and seamless dashboard responsiveness.</p>
                </div>
                <div className="flex gap-3 relative z-10">
                  <span className="px-5 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">W3C Compliance</span>
                  <span className="px-5 py-2 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Cross-Browser</span>
                </div>
              </motion.div>

              {/* Compliance Focus */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 orange-gradient rounded-[3.5rem] p-12 flex flex-col md:flex-row gap-12 items-center text-white overflow-hidden relative shadow-2xl shadow-primary/20"
              >
                <div className="flex-1 z-10">
                  <span className="text-blue-200 font-bold tracking-widest uppercase text-[10px] block mb-4">Strict Governance</span>
                  <h3 className="text-4xl font-black mt-2 mb-8 tracking-tight">PCI-DSS & Security Compliance</h3>
                  <p className="text-blue-50 mb-10 leading-relaxed font-medium text-lg">Our testing protocols are mapped directly to PCI-DSS, GDPR, and ISO 27001 standards to ensure every line of code meets global financial security mandates.</p>
                  <button className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.2em] group">
                    Explore Compliance Framework
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                <div className="flex-shrink-0 w-64 h-64 bg-white/10 rounded-full flex items-center justify-center border border-white/10 relative z-10">
                  <ShieldCheck className="text-white w-32 h-32 opacity-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-32 bg-surface">
          <div className="container-max w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 items-center">
              {[
                { val: "500M+", label: "Transactions Verified" },
                { val: "120+", label: "Global Banks Served" },
                { val: "Zero", label: "Critical Leaks Reported" },
                { val: "40%", label: "Faster Go-to-Market" }
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-5xl md:text-6xl font-black text-primary mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 container-max w-full mb-24">
          <div className="orange-gradient rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-[0px_32px_128px_rgba(0,64,223,0.3)] mx-auto">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-orange"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-10 leading-[1.1]">Ready to Secure Your Digital Channels?</h2>
              <p className="text-xl text-blue-50 max-w-2xl mx-auto mb-16 font-medium opacity-90">
                Join the world's leading financial institutions in delivering a pristine, secure, and rapid self-service banking experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1 block sm:inline-block">
                  Start Your Free Audit
                </Link>
                <Link to="/contact" className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all block sm:inline-block">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

