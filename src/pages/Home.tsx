/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  ShieldAlert, 
  FileCheck, 
  CheckCircle2, 
  TrendingDown, 
  Gavel, 
  Building2, 
  Rocket, 
  Mail, 
  Headset, 
  Send,
  LayoutDashboard,
  Smartphone,
  CreditCard,
  Shield,
  Globe,
  Network
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 bg-surface-container-lowest">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary rounded-full blur-[150px] pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-secondary rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-16 grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black tracking-[0.2em] uppercase mb-8"
            >
              <ShieldCheck className="w-4 h-4" /> Trusted BFSI Testing Partner
            </motion.div>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.05] mb-8">
              Where Financial Systems Meet <span className="text-gradient">Flawless Quality</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-12 font-medium">
              V Qube Enterprises provides precision-engineered testing for Banking, Financial Services & Insurance — ensuring every transaction is secure and every customer experience is seamless.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link to="/testing/retail-banking" className="orange-gradient text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 hover:shadow-primary/50 transition-all active:scale-95">
                Explore Domains
              </Link>
              <Link to="/contact" className="bg-white text-on-surface border border-outline-variant/30 px-10 py-5 rounded-2xl font-black text-lg hover:bg-surface-container-low transition-all shadow-xl shadow-slate-200/50 active:scale-95">
                Consult an Expert
              </Link>
            </div>
            
            {/* Trusted By / Compliance Icons */}
            <div className="mt-20 pt-10 border-t border-outline-variant/10 flex flex-wrap gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="flex items-center gap-2 text-sm font-black tracking-widest uppercase"><ShieldCheck className="w-5 h-5" /> PCI-DSS</div>
               <div className="flex items-center gap-2 text-sm font-black tracking-widest uppercase"><ShieldAlert className="w-5 h-5" /> DORA 2025</div>
               <div className="flex items-center gap-2 text-sm font-black tracking-widest uppercase"><FileCheck className="w-5 h-5" /> AML/KYC</div>
               <div className="flex items-center gap-2 text-sm font-black tracking-widest uppercase"><CheckCircle2 className="w-5 h-5" /> ISO 27001</div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {[
              { label: "Cost of Banking Downtime", value: "$300K+", sub: "Per Hour", color: "primary", icon: <TrendingDown className="w-6 h-6" /> },
              { label: "Avg Annual Loss from Disruptions", value: "$152M", sub: "For Institutions", color: "error", icon: <ShieldAlert className="w-6 h-6" /> },
              { label: "Test Time Reduction via AI", value: "50-70%", sub: "Efficiency Gain", color: "secondary", icon: <Rocket className="w-6 h-6" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02, x: i % 2 === 0 ? 10 : -10 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${stat.color}/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-${stat.color}/10 transition-all duration-500`}></div>
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <p className={`text-4xl font-black text-${stat.color} mb-1 tracking-tighter`}>{stat.value}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60">{stat.label}</p>
                  </div>
                  <div className={`p-3 rounded-2xl bg-${stat.color}/10 text-${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                   <div className={`h-1 cursor-pointer w-full bg-${stat.color}/10 rounded-full overflow-hidden`}>
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: "70%" }} 
                        className={`h-full bg-${stat.color}`}
                      />
                   </div>
                   <span className="text-[10px] font-bold opacity-40">{stat.sub}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

        {/* Compliance Badges Strip */}
        <section className="py-10 bg-surface-container-low border-y border-outline-variant/10">
          <div className="container-max flex flex-wrap justify-center gap-8 md:justify-between items-center">
            <span className="text-on-surface-variant font-black text-[10px] tracking-[0.3em] uppercase opacity-40">Global Compliance Standards</span>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, text: "PCI-DSS Compliant" },
                { icon: <ShieldAlert className="w-4 h-4" />, text: "DORA 2025 Ready" },
                { icon: <FileCheck className="w-4 h-4" />, text: "AML / KYC Tested" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "ISO 27001 Aligned" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white text-on-surface-variant px-5 py-2.5 rounded-full text-xs font-black shadow-sm border border-outline-variant/20 hover:border-primary/30 transition-colors">
                  <span className="text-primary">{badge.icon}</span> {badge.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BFSI Testing Significance */}
        <section className="section-padding bg-surface">
          <div className="container-max">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">BFSI Testing — The Significance</h2>
              <div className="w-24 h-2 orange-gradient rounded-full"></div>
            </div>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: <TrendingDown />, title: "Financial Impact", desc: "Critical systems failure can cost $1M+ per hour in operational losses and customer churn.", value: "$1M+/hr", color: "primary" },
                { icon: <Gavel />, title: "Regulatory Shield", desc: "Non-compliance penalties average $22M annually for global financial institutions.", value: "$22M/yr", color: "error", offset: true },
                { icon: <Building2 />, title: "Domain Mastery", desc: "Generic QA misses nuanced BFSI logic. Our domain-first approach ensures functional integrity.", value: "Domain-First", color: "secondary" },
                { icon: <Rocket />, title: "Automation ROI", desc: "Accelerate release cycles while maintaining ironclad security through AI-driven automation.", value: "$2.2M saved", color: "tertiary", offset: true }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  whileHover={{ y: -10 }}
                  className={`glass-card p-10 rounded-3xl border border-outline-variant/10 transition-all group ${card.offset ? 'lg:translate-y-8' : ''}`}
                >
                  <div className={`w-14 h-14 bg-${card.color}/10 text-${card.color} rounded-2xl flex items-center justify-center mb-8 group-hover:bg-${card.color} group-hover:text-white transition-all duration-500`}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4">{card.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity">{card.desc}</p>
                  <div className={`text-${card.color} font-black text-lg tracking-tight`}>{card.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testing Areas Overview */}
        <section id="testing-areas" className="section-padding bg-surface-container-low">
          <div className="container-max">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface mb-6">14 Specialist BFSI Testing Domains</h2>
                <p className="text-on-surface-variant max-w-xl text-lg font-medium">Comprehensive coverage across the entire financial services ecosystem, from legacy core banking to emerging fintech.</p>
              </div>
              <Link to="/testing/retail-banking" className="text-primary font-black flex items-center gap-3 group text-lg bg-white px-8 py-4 rounded-2xl shadow-xl shadow-slate-200 hover:shadow-primary/20 transition-all active:scale-95">
                View All Domains <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-[280px]">
              {/* Retail Banking */}
              <Link to="/testing/retail-banking" className="md:col-span-2 bg-surface-container-lowest rounded-3xl p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-[2s] pointer-events-none" 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
                  alt="Modern clean banking"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <LayoutDashboard className="w-7 h-7" />
                  </div>
                  <h4 className="text-3xl font-black text-on-surface">Retail Banking</h4>
                  <p className="text-sm text-on-surface-variant mt-3 font-medium opacity-70">End-to-end testing of retail financial systems and infrastructure.</p>
                </div>
              </Link>
              {/* Wealth Management */}
              <Link to="/testing/wealth-management" className="bg-primary text-on-primary rounded-3xl p-10 flex flex-col justify-between group cursor-pointer shadow-2xl shadow-primary/30 hover:scale-[1.03] transition-all duration-500">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                   <LayoutDashboard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-black">Wealth Management</h4>
                  <p className="text-xs text-on-primary/70 mt-3 font-bold uppercase tracking-wider">Portfolio & Algorithmic QA</p>
                </div>
              </Link>
              {/* Insurance */}
              <Link to="/testing/insurance" className="glass-card rounded-3xl p-10 flex flex-col justify-between hover:bg-white hover:shadow-2xl transition-all cursor-pointer group">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-on-surface">Insurance Tech</h4>
                  <p className="text-xs text-on-surface-variant/60 mt-3 font-bold uppercase tracking-wider">Claims & Policy Lifecycle</p>
                </div>
              </Link>
              {/* Retail Loans */}
              <Link to="/testing/retail-loans" className="bg-white rounded-3xl p-10 border border-outline-variant/10 flex flex-col justify-between group cursor-pointer hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                   <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-on-surface">Retail Loans</h4>
                  <p className="text-xs text-on-surface-variant/60 mt-3 font-bold uppercase tracking-wider">Omni-channel QA</p>
                </div>
              </Link>
              {/* Payments */}
              <Link to="/testing" className="md:col-span-2 bg-surface-container-highest rounded-3xl p-10 relative overflow-hidden flex items-center justify-between group cursor-pointer hover:bg-white hover:shadow-2xl transition-all duration-500 border border-outline-variant/10">
                <div className="max-w-[70%] relative z-10">
                  <h4 className="text-3xl font-black text-on-surface">Global Payments</h4>
                  <p className="text-sm text-on-surface-variant mt-4 font-medium opacity-70">SWIFT, SEPA, and Real-Time Payment network validation across borders.</p>
                </div>
                <CreditCard className="w-24 h-24 text-primary/5 group-hover:text-primary/10 group-hover:scale-125 transition-all duration-700" />
              </Link>
              {/* Regulatory */}
              <Link to="/testing" className="glass-card rounded-3xl p-10 flex flex-col justify-between group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="w-12 h-12 bg-error/10 text-error rounded-2xl flex items-center justify-center group-hover:bg-error group-hover:text-white transition-all duration-500">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-on-surface uppercase tracking-tight leading-none">Regulatory</h4>
                  <p className="text-xs text-on-surface-variant/60 mt-3 font-bold uppercase tracking-wider leading-relaxed">DORA, GDPR Audit Prep</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-surface-container-lowest relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-6xl font-black text-on-surface mb-8 leading-[1.1]">Ready to Secure Your <span className="text-gradient">BFSI Future?</span></h2>
                  <p className="text-xl text-on-surface-variant mb-12 font-medium leading-relaxed">Connect with our domain experts to architect a precision-testing framework tailored to your compliance and scale requirements.</p>
                </motion.div>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">Expert Consultation</p>
                      <p className="text-xl font-bold text-on-surface">solutions@vqube.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                      <Headset className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-secondary mb-1">Direct Support</p>
                      <p className="text-xl font-bold text-on-surface">+1 (800) V-QUBE-BFSI</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="glass-card p-12 rounded-[40px] shadow-2xl shadow-primary/5"
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Full Name</label>
                      <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all outline-none font-bold" placeholder="John Doe" type="text"/>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Email Address</label>
                      <input className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all outline-none font-bold" placeholder="john@bank.com" type="email"/>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">Service Interest</label>
                    <select className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all outline-none appearance-none font-bold">
                      <option>Retail Banking Testing</option>
                      <option>Regulatory Compliance Audit</option>
                      <option>Security & Penetration Testing</option>
                      <option>Insurance Tech QA</option>
                      <option>Automation Migration</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant/60 ml-1">How can we help?</label>
                    <textarea className="w-full bg-surface-container-low border border-outline-variant/20 rounded-2xl p-5 focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all outline-none font-bold" placeholder="Briefly describe your testing needs..." rows={4}></textarea>
                  </div>
                  <button className="w-full orange-gradient text-white py-6 rounded-2xl font-black text-xl shadow-2xl shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all" type="submit">
                    Initiate Consultation
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
    </>
  );
}


