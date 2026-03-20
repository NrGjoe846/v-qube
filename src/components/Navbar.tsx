import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  { name: "Software Testing", path: "/services/software-testing" },
  { name: "Domain Support", path: "/services/domain-support" },
  { name: "Support Development Teams", path: "/services/support-dev-teams" },
  { name: "Support Users / Training & Rollout", path: "/services/support-users" },
];

const testingAreas = [
  { name: "Core Banking", path: "/testing/core-banking" },
  { name: "Retail Banking", path: "/testing/retail-banking" },
  { name: "Self-Service Banking", path: "/testing/self-service-banking" },
  { name: "Treasury", path: "/testing/treasury" },
  { name: "Retail Loans", path: "/testing/retail-loans" },
  { name: "Corporate Banking", path: "/testing/corporate-banking" },
  { name: "Wealth Management", path: "/testing/wealth-management" },
  { name: "Investment Banking", path: "/testing/investment-banking" },
  { name: "Capital Markets", path: "/testing/capital-markets" },
  { name: "Insurance", path: "/testing/insurance" },
  { name: "Data Warehouse", path: "/testing/data-warehouse" },
  { name: "Islamic Banking", path: "/testing/islamic-banking" },
  { name: "Bespoke Apps", path: "/testing/bespoke-apps" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
          <span className="text-primary">V</span> Qube Enterprises
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="font-semibold text-sm text-slate-600 hover:text-primary transition-colors">HOME</Link>
          
          <div className="relative group">
            <button className="font-semibold text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-1">
              SERVICES <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 border border-slate-100">
              <Link to="/services" className="block px-4 py-2 text-sm font-bold text-slate-900 hover:bg-slate-50">All Services</Link>
              <div className="h-px bg-slate-100 my-2 mx-4" />
              {services.map((s) => (
                <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative group">
            <button className="font-semibold text-sm text-slate-600 hover:text-primary transition-colors flex items-center gap-1">
              TESTING AREAS <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-72 bg-white shadow-2xl rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 border border-slate-100 max-h-[80vh] overflow-y-auto">
              <Link to="/testing" className="block px-4 py-2 text-sm font-bold text-slate-900 hover:bg-slate-50">Testing Hub</Link>
              <div className="h-px bg-slate-100 my-2 mx-4" />
              {testingAreas.map((t) => (
                <Link key={t.path} to={t.path} className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary transition-colors">
                  {t.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className="font-semibold text-sm text-slate-600 hover:text-primary transition-colors">ABOUT US</Link>
          <Link to="/contact" className="orange-gradient text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
            CONSULTATION
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <Link to="/" className="font-bold text-lg text-slate-900">HOME</Link>
              
              <div className="flex flex-col gap-3">
                <p className="text-xs font-black text-slate-400 tracking-widest uppercase">Services</p>
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="text-slate-600 hover:text-primary">{s.name}</Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-black text-slate-400 tracking-widest uppercase">Testing Areas</p>
                <div className="grid grid-cols-1 gap-3">
                  {testingAreas.map((t) => (
                    <Link key={t.path} to={t.path} className="text-slate-600 hover:text-primary">{t.name}</Link>
                  ))}
                </div>
              </div>

              <Link to="/about" className="font-bold text-lg text-slate-900">ABOUT US</Link>
              <Link to="/contact" className="orange-gradient text-white px-6 py-4 rounded-xl font-bold text-center shadow-xl shadow-primary/20">
                GET A CONSULTATION
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

