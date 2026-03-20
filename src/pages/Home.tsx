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
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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
        <section className="relative min-h-[80vh] flex items-center justify-center py-20 bg-surface-container-lowest">
          <div className="absolute inset-0 bg-grid-teal opacity-60"></div>
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
                Where Financial Software Meets <span className="text-primary">Flawless Quality</span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mb-12">
                V Qube Enterprises delivers specialized testing for Banking, Financial Services & Insurance — safeguarding every transaction, every compliance mandate, and every customer touchpoint.
              </p>
              <div className="flex flex-wrap gap-4">
              <Link to="/testing/retail-banking" className="cobalt-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all">
                  Explore Testing Areas
                </Link>
                <button className="bg-surface-container-high text-on-secondary-container px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-colors">
                  Talk to an Expert
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-5 flex flex-col gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-xl shadow-[0_12px_32px_rgba(25,28,30,0.04)] border border-outline-variant/15 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>
                <p className="text-4xl font-extrabold text-primary mb-2">$300K+</p>
                <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Cost per hour of banking downtime</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-[0_12px_32px_rgba(25,28,30,0.04)] border border-outline-variant/15 md:ml-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-error/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-error/10 transition-colors"></div>
                <p className="text-4xl font-extrabold text-error mb-2">$152M</p>
                <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Avg annual loss from disruptions</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-[0_12px_32px_rgba(25,28,30,0.04)] border border-outline-variant/15 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[100px] -mr-8 -mt-8 group-hover:bg-secondary/10 transition-colors"></div>
                <p className="text-4xl font-extrabold text-secondary mb-2">50-70%</p>
                <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant font-bold">Reduction in test time via AI</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Compliance Badges Strip */}
        <section className="py-12 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-wrap justify-center gap-8 md:justify-between items-center">
            <span className="text-on-surface-variant font-bold text-sm tracking-widest uppercase opacity-60">Global Compliance Standards:</span>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <ShieldCheck className="w-4 h-4" />, text: "PCI-DSS Compliant" },
                { icon: <ShieldAlert className="w-4 h-4" />, text: "DORA 2025 Ready" },
                { icon: <FileCheck className="w-4 h-4" />, text: "AML / KYC Tested" },
                { icon: <CheckCircle2 className="w-4 h-4" />, text: "ISO 27001 Aligned" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                  {badge.icon} {badge.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BFSI Testing Significance */}
        <section className="py-32 bg-surface">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16">
            <div className="mb-20">
              <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">BFSI Testing — The Significance</h2>
              <div className="w-24 h-1.5 cobalt-gradient rounded-full"></div>
            </div>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                { icon: <TrendingDown />, title: "Financial Impact of 'One Hour'", desc: "Critical systems failure can cost $1M+ per hour in operational losses and customer churn.", value: "$1M+/hr", color: "primary" },
                { icon: <Gavel />, title: "Regulatory & Compliance Shield", desc: "Non-compliance penalties average $22M annually for global financial institutions.", value: "$22M/yr", color: "error", offset: true },
                { icon: <Building2 />, title: "Domain-First Methodology", desc: "Generic QA misses nuanced BFSI logic. Our domain-first approach ensures functional integrity.", value: "Domain-First", color: "secondary" },
                { icon: <Rocket />, title: "The Automation ROI", desc: "Accelerate release cycles while maintaining ironclad security through AI-driven automation.", value: "$2.2M saved", color: "tertiary", offset: true }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className={`bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:shadow-2xl transition-all group ${card.offset ? 'lg:translate-y-8' : ''}`}
                >
                  <div className={`w-12 h-12 bg-${card.color}/10 text-${card.color} rounded-lg flex items-center justify-center mb-6 group-hover:bg-${card.color} group-hover:text-white transition-colors`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">{card.desc}</p>
                  <div className={`text-${card.color} font-bold text-lg`}>{card.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testing Areas Overview */}
        <section id="testing-areas" className="py-32 bg-surface-container-low">
          <div className="max-w-[1440px] mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="font-headline text-4xl font-extrabold text-on-surface mb-4">14 Specialist BFSI Testing Domains</h2>
                <p className="text-on-surface-variant max-w-xl">Comprehensive coverage across the entire financial services ecosystem, from legacy core banking to emerging fintech.</p>
              </div>
              <Link to="/testing/retail-banking" className="text-primary font-bold flex items-center gap-2 group">
                View All Domains <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
              {/* Retail Banking */}
              <Link to="/testing/retail-banking" className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 relative overflow-hidden flex flex-col justify-end group cursor-pointer border border-white/40 shadow-sm">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" 
                  src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern clean banking"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                <div className="relative z-10">
                  <LayoutDashboard className="text-primary mb-4 w-8 h-8" />
                  <h4 className="text-2xl font-bold text-on-surface">Retail Banking</h4>
                  <p className="text-sm text-on-surface-variant mt-2">End-to-end testing of retail financial systems and infrastructure.</p>
                </div>
              </Link>
              {/* Wealth Management */}
              <div className="bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between group cursor-pointer shadow-xl shadow-primary/20">
                <LayoutDashboard className="w-8 h-8" />
                <div>
                  <h4 className="text-xl font-bold">Wealth Management</h4>
                  <p className="text-xs text-on-primary/80 mt-2">Portfolio management and algorithmic trading QA.</p>
                </div>
              </div>
              {/* Insurance */}
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between hover:bg-white hover:shadow-md transition-all cursor-pointer">
                <Shield className="text-secondary w-8 h-8" />
                <div>
                  <h4 className="text-xl font-bold text-on-surface">Insurance Tech</h4>
                  <p className="text-xs text-on-surface-variant mt-2">Claims processing and policy lifecycle automation.</p>
                </div>
              </div>
              {/* Retail Loans */}
              <Link to="/testing/retail-loans" className="bg-white rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between group cursor-pointer">
                <Smartphone className="text-primary w-8 h-8" />
                <div>
                  <h4 className="text-xl font-bold text-on-surface">Retail Loans</h4>
                  <p className="text-xs text-on-surface-variant mt-2">Omni-channel personal and vehicle loan testing.</p>
                </div>
              </Link>
              {/* Payments */}
              <div className="md:col-span-2 bg-surface-container-highest rounded-xl p-8 relative overflow-hidden flex items-center justify-between group cursor-pointer">
                <div className="max-w-[60%]">
                  <h4 className="text-2xl font-bold text-on-surface">Global Payments</h4>
                  <p className="text-sm text-on-surface-variant mt-2">SWIFT, SEPA, and Real-Time Payment network validation across borders.</p>
                </div>
                <CreditCard className="w-16 h-16 text-on-surface/10 group-hover:scale-125 transition-transform duration-500" />
              </div>
              {/* Regulatory */}
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 flex flex-col justify-between group cursor-pointer shadow-sm">
                <ShieldCheck className="text-error w-8 h-8" />
                <div>
                  <h4 className="text-xl font-bold text-on-surface">Regulatory Compliance</h4>
                  <p className="text-xs text-on-surface-variant mt-2">DORA, GDPR, and localized regulatory audit prep.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="font-headline text-5xl font-extrabold text-on-surface mb-8 leading-tight">Ready to Secure Your <span className="text-primary">BFSI Future?</span></h2>
                <p className="text-lg text-on-surface-variant mb-12">Connect with our domain experts to architect a precision-testing framework tailored to your compliance and scale requirements.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Expert Consultation</p>
                      <p className="text-on-surface-variant">solutions@vqube.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg text-secondary">
                      <Headset className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Direct Support</p>
                      <p className="text-on-surface-variant">+1 (800) V-QUBE-BFSI</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div 
                className="bg-white p-10 rounded-2xl shadow-[0_32px_64px_rgba(25,28,30,0.06)] border border-outline-variant/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="John Doe" type="text"/>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="john@bank.com" type="email"/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Service Interest</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                      <option>Retail Banking Testing</option>
                      <option>Regulatory Compliance Audit</option>
                      <option>Security & Penetration Testing</option>
                      <option>Insurance Tech QA</option>
                      <option>Automation Migration</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">How can we help?</label>
                    <textarea className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Briefly describe your testing needs..." rows={4}></textarea>
                  </div>
                  <button className="w-full cobalt-gradient text-on-primary py-4 rounded-lg font-bold text-lg shadow-lg hover:translate-y-[-2px] transition-all" type="submit">
                    Request a Strategy Session
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
    </>
  );
}
