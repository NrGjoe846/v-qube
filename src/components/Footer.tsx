import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  Mail,
  Headset,
  Instagram,
  Linkedin
} from "lucide-react";

const XIcon = ({ size = 20, color = "currentColor", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);



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
    <footer className="bg-slate-900 text-slate-300 pt-10 pb-8 overflow-hidden relative font-body">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-primary opacity-50"></div>

      <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-16 relative z-10 w-full">
        <div className="lg:col-span-3 space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="V-Qube Logo" className="h-12 w-auto" />
            <span className="text-2xl font-black tracking-tighter text-white">V QUBE</span>
          </Link>
          <p className="text-slate-400 leading-relaxed text-sm font-medium">
            Next-generation quality engineering for the world's most critical financial infrastructures.
          </p>
          <div className="flex gap-4">
            <Link
              to="/404"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-700/50"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              to="/404"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-700/50"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              to="/404"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-700/50"
            >
              <XIcon size={20} />
            </Link>
            <Link
              to="/404"
              className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-slate-700/50"
            >
              <img src="/whatsapp.png" alt="WhatsApp" className="w-5 h-5 object-contain brightness-0 invert" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 opacity-50">Expertise</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link to="/services/software-testing" className="hover:text-primary transition-colors">Software Testing</Link></li>
            <li><Link to="/services/domain-support" className="hover:text-primary transition-colors">Domain Support</Link></li>
            <li><Link to="/services/support-dev-teams" className="hover:text-primary transition-colors">Dev Team Support</Link></li>
            <li><Link to="/services/support-users" className="hover:text-primary transition-colors">Training & Rollout</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 opacity-50">Testing Areas</h4>
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
          <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-5 opacity-50">Connect</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-4 group">
              <a href="mailto:consult@vqubeenterprises.com" className="flex items-center gap-4 w-full">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500"><Mail className="w-5 h-5" /></div>
                <span className="text-slate-400 group-hover:text-white transition-colors">consult@vqubeenterprises.com</span>
              </a>
            </li>
            <li className="flex items-center gap-4 group">
              <a href="tel:+18008782372" className="flex items-center gap-4 w-full">
                <div className="w-16 h-16 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500"><Headset className="w-5 h-5" /></div>
                <span className="text-slate-400 group-hover:text-white transition-colors">+91 70108 52807</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-max mt-8 pt-6 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 w-full">
        <div className="flex flex-col gap-4">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-slate-600">© 2026 V Qube Enterprises. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>

          </div>
        </div>


      </div>
    </footer >
  );
}
