import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ShieldCheck, Zap, Target } from "lucide-react";

export default function DynamicPage() {
  const { category, subpage } = useParams();
  
  const title = (subpage || category || "Page")
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <Link to={subpage ? `/${category}` : "/"} className="inline-flex items-center gap-2 text-slate-500 hover:text-primary mb-12 font-bold transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to {category || "Home"}
        </Link>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                {title} <span className="text-primary">Testing</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                V Qube Enterprises provides specialized quality assurance and domain expertise for {title.toLowerCase()} systems, ensuring reliability, security, and compliance.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Comprehensive Functional Testing",
                "Security & Compliance Audits",
                "Performance & Scalability Analysis",
                "Regulatory Mandate Verification",
                "User Acceptance Testing (UAT)"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="inline-flex cobalt-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Request a Consultation
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&seed=${subpage}`} 
                alt={title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-3xl rounded-full -z-10"></div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
                <ShieldCheck className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Compliance</h4>
                <p className="text-sm text-slate-500">Adherence to global financial standards.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-xl">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Precision</h4>
                <p className="text-sm text-slate-500">Zero-tolerance for software errors.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
