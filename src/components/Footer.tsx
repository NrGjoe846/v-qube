import { Link } from "react-router-dom";
import { Mail, Headset, Send, Globe, Network, Shield, CreditCard, Smartphone, LayoutDashboard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="space-y-8">
          <Link to="/" className="text-3xl font-black tracking-tighter text-white flex items-center gap-1">
            <span className="text-primary">V</span> Qube
          </Link>
          <p className="text-slate-400 leading-relaxed text-sm">
            Specialized testing for Banking, Financial Services & Insurance. 
            Safeguarding every transaction, mandate, and customer touchpoint.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Globe className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Network className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Shield className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 tracking-tight">Services</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/services/software-testing" className="hover:text-primary transition-colors">Software Testing</Link></li>
            <li><Link to="/services/domain-support" className="hover:text-primary transition-colors">Domain Support</Link></li>
            <li><Link to="/services/support-dev-teams" className="hover:text-primary transition-colors">Support Development Teams</Link></li>
            <li><Link to="/services/support-users" className="hover:text-primary transition-colors">Training & Rollout</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 tracking-tight">Testing Hub</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/testing/retail-banking" className="hover:text-primary transition-colors">Retail Banking</Link></li>
            <li><Link to="/testing/wealth-management" className="hover:text-primary transition-colors">Wealth Management</Link></li>
            <li><Link to="/testing/insurance" className="hover:text-primary transition-colors">Insurance Testing</Link></li>
            <li><Link to="/testing" className="text-primary font-bold hover:underline">View All Areas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 tracking-tight">Contact Us</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Mail className="w-5 h-5" /></div>
              <span>consult@vqube.com</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Headset className="w-5 h-5" /></div>
              <span>+1 (800) V-QUBE-QA</span>
            </li>
            <li className="pt-4">
              <Link to="/contact" className="block w-full text-center cobalt-gradient text-white py-3 rounded-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Get Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-24 pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-medium text-slate-500 tracking-widest uppercase">
        <p>© 2026 V Qube Enterprises. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
