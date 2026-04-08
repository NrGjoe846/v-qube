import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container-max w-full text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-12"
        >
          <div className="relative inline-block">
            <h1 className="text-[12rem] md:text-[20rem] font-black text-slate-100 leading-none tracking-tighter">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="w-24 h-24 text-primary opacity-20" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Page <span className="text-primary">Not Found</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We couldn't find the page you were looking for. It might have been moved, deleted, or never existed in the first place.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="inline-flex items-center gap-3 orange-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              <ArrowLeft className="w-5 h-5" /> Back to Home
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors">
              Contact Support
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

