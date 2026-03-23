import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { 
  Mail, 
  Headset, 
  Globe, 
  Network, 
  Shield, 
  ArrowUpRight 
} from "lucide-react";

const testingAreas = [
  { name: "Core Banking", path: "/testing/core-banking" },
  { name: "Retail Banking", path: "/testing/retail-banking" },
  { name: "Islamic Banking", path: "/testing/islamic-banking" },
  { name: "Bespoke Apps", path: "/testing/bespoke-apps" },
  { name: "Treasury", path: "/testing/treasury" },
  { name: "Retail Loans", path: "/testing/retail-loans" },
  { name: "Insurance Testing", path: "/testing/insurance" },
  { name: "Corporate Banking", path: "/testing/corporate-banking" },
  { name: "Investment Banking", path: "/testing/investment-banking" },
  { name: "Capital Markets", path: "/testing/capital-markets" },
  { name: "Wealth Management", path: "/testing/wealth-management" },
  { name: "Data Warehouse", path: "/testing/data-warehouse" },
  { name: "Self-Service Banking", path: "/testing/self-service-banking" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 overflow-hidden relative font-body">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-primary opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 relative z-10">
        <div className="lg:col-span-3 space-y-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="V-Qube Logo" className="h-12 w-auto" />
            <span className="text-2xl font-black tracking-tighter text-white">V QUBE</span>
          </Link>
          <p className="text-slate-400 leading-relaxed text-sm font-medium">
            Next-generation quality engineering for the world's most critical financial infrastructures.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-700/50"><Globe className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-700/50"><Network className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-700/50"><Shield className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 opacity-50">Expertise</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link to="/services/software-testing" className="hover:text-primary transition-colors">Software Testing</Link></li>
            <li><Link to="/services/domain-support" className="hover:text-primary transition-colors">Domain Support</Link></li>
            <li><Link to="/services/support-dev-teams" className="hover:text-primary transition-colors">Dev Team Support</Link></li>
            <li><Link to="/services/support-users" className="hover:text-primary transition-colors">Training & Rollout</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 opacity-50">Testing Areas</h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-xs font-bold leading-tight">
            {testingAreas.map((area) => (
              <Link 
                key={area.name} 
                to={area.path} 
                className="hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <div className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></div>
                {area.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-10 opacity-50">Connect</h4>
          <ul className="space-y-6 text-sm font-medium">
            <li className="flex items-center gap-4 group">
              <a href="mailto:consult@vqube.com" className="flex items-center gap-4 w-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500"><Mail className="w-5 h-5" /></div>
                <span className="text-slate-400 group-hover:text-white transition-colors">consult@vqube.com</span>
              </a>
            </li>
            <li className="flex items-center gap-4 group">
              <a href="tel:+18008782372" className="flex items-center gap-4 w-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500"><Headset className="w-5 h-5" /></div>
                <span className="text-slate-400 group-hover:text-white transition-colors">+1 (800) V-QUBE-QA</span>
              </a>
            </li>
            <li className="pt-4">
              <Link to="/contact" className="block w-full text-center orange-gradient text-white py-4 rounded-xl font-black shadow-2xl shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
                Initiate Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-600">© 2026 V Qube Enterprises. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

        {/* Partnership Badge */}
        <div className="order-1 lg:order-2">
          <a
            href="https://unaitech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
          >
            <div className="flex flex-col items-start leading-none">
              <span className="text-[9px] uppercase tracking-[0.3em] text-slate-500 font-black group-hover:text-primary/70 transition-colors mb-1">
                Crafted By
              </span>
              <span className="text-xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform duration-500 origin-left">
                UNAI <span className="text-slate-200">TECH</span>
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
              <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
            </div>
            {/* Subtle animated glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-orange-500/50 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
