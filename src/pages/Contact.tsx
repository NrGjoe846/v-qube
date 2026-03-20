import { motion } from "motion/react";
import { Mail, Headset, Send, MapPin, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                Let's Build <span className="text-primary">Quality</span> Together
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Ready to elevate your software's reliability? Our experts are standing by to discuss your project.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                  <p className="text-slate-500">consult@vqube.com</p>
                </div>
              </div>

              <div className="flex gap-6 items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Headset className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                  <p className="text-slate-500">+1 (800) V-QUBE-QA</p>
                </div>
              </div>

              <div className="flex gap-6 items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-primary transition-all">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                  <p className="text-slate-500">123 Financial District, Suite 500, NY</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -z-10"></div>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 tracking-tight">Request a Consultation</h2>
            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 tracking-widest uppercase">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-slate-400 tracking-widest uppercase">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 tracking-widest uppercase">Service Interest</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-all">
                  <option>Software Testing</option>
                  <option>Domain Support</option>
                  <option>Support Development Teams</option>
                  <option>Training & Rollout</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-400 tracking-widest uppercase">Message</label>
                <textarea className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-primary transition-all min-h-[150px]" placeholder="Tell us about your project..."></textarea>
              </div>
              <button className="w-full cobalt-gradient text-white py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
