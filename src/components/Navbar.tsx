import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 5, scale: 0.95 }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={logo} alt="V-Qube Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
          <span className="text-xl font-black tracking-tighter text-slate-900 group-hover:text-primary transition-colors duration-300">V Qube Enterprises</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "HOME", path: "/" },
            { name: "ABOUT US", path: "/about" }
          ].map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`relative font-bold text-[11px] tracking-widest transition-colors ${
                location.pathname === link.path ? "text-primary" : "text-slate-600 hover:text-primary"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`font-bold text-[11px] tracking-widest flex items-center gap-1 transition-colors ${
              activeDropdown === 'services' || location.pathname.startsWith('/services') ? 'text-primary' : 'text-slate-600 hover:text-primary'
            }`}>
              SERVICES <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl py-3 mt-2 border border-slate-100 overflow-hidden"
                >
                  <Link to="/services" className="block px-6 py-2.5 text-xs font-black text-slate-950 hover:bg-primary/5 hover:text-primary transition-all">All Services</Link>
                  <div className="h-px bg-slate-100 my-2 mx-6" />
                  {services.map((s) => (
                    <Link key={s.path} to={s.path} className="block px-6 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-primary/5 hover:text-primary transition-all">
                      {s.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('testing')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className={`font-bold text-[11px] tracking-widest flex items-center gap-1 transition-colors ${
              activeDropdown === 'testing' || location.pathname.startsWith('/testing') ? 'text-primary' : 'text-slate-600 hover:text-primary'
            }`}>
              TESTING AREAS <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === 'testing' ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {activeDropdown === 'testing' && (
                <motion.div 
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl py-3 mt-2 border border-slate-100 max-h-[70vh] overflow-y-auto"
                >
                  <Link to="/testing" className="block px-6 py-2.5 text-xs font-black text-slate-950 hover:bg-primary/5 hover:text-primary transition-all">Testing Hub</Link>
                  <div className="h-px bg-slate-100 my-2 mx-6" />
                  {testingAreas.map((t) => (
                    <Link key={t.path} to={t.path} className="block px-6 py-2.5 text-[11px] font-bold text-slate-600 hover:bg-primary/5 hover:text-primary transition-all">
                      {t.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="orange-gradient text-white px-7 py-3 rounded-xl font-black text-[10px] tracking-widest shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              CONSULTATION
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 border border-slate-200" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-10 flex flex-col gap-8">
              <motion.div variants={itemVariants}>
                <Link to="/" className="font-black text-2xl text-slate-900">HOME</Link>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                <p className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">Services</p>
                <div className="grid grid-cols-1 gap-2">
                  {services.map((s) => (
                    <Link key={s.path} to={s.path} className="text-sm font-bold text-slate-600 hover:text-primary">{s.name}</Link>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-4">
                <p className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">Testing Areas</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {testingAreas.map((t) => (
                    <Link key={t.path} to={t.path} className="text-xs font-bold text-slate-600 hover:text-primary">{t.name}</Link>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link to="/about" className="font-black text-2xl text-slate-900">ABOUT US</Link>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Link to="/contact" className="orange-gradient text-white px-6 py-5 rounded-[2rem] font-black text-center shadow-2xl shadow-primary/30 block tracking-widest">
                  GET A CONSULTATION
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

