import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Database, 
  Users, 
  Rocket, 
  ChevronRight, 
  ShieldAlert, 
  Activity, 
  Network, 
  Lock, 
  Server, 
  Cpu, 
  Globe, 
  CheckCircle2,
  ShieldEllipsis,
  Key,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";


export default function DomainSupport() {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-32 bg-white border-b border-slate-100">
          <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="flex items-center gap-2 mb-8">
                <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Services</Link>
                <ChevronRight className="w-3 h-3 text-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary">IT Domain Support</span>
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/20 text-primary text-[10px] font-black tracking-widest uppercase mb-8 border border-primary/30">
                  Enterprise Infrastructure
                </span>
                <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-8">
                  IT Domain Support for <span className="text-primary">Financial Institutions.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 font-medium">
                  Secure, compliant, and highly available domain infrastructure tailored for the rigorous demands of BFSI operations. Precision testing meets mission-critical administration.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-8 py-4 orange-gradient text-white rounded-xl font-black shadow-xl shadow-primary/25 hover:scale-105 transition-all">
                    Request Assessment
                  </Link>
                  <button className="px-8 py-4 bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-black hover:bg-slate-100 transition-all">
                    View Compliance Framework
                  </button>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-outline-variant/10 relative z-10">
                <div className="rounded-[2rem] overflow-hidden aspect-square">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/src/assets/images/unsplash-1558494949-ef010cbdcc51.jpg" 
                    alt="High-tech data center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
            </motion.div>
          </div>
        </section>

        {/* Trust Metrics */}
        <section className="bg-white border-b border-slate-100 py-16 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { val: "99.999%", label: "Uptime SLA" },
                { val: "200+", label: "BFSI Clients" },
                { val: "SOC2", label: "Type II Certified" },
                { val: "<15m", label: "Response Time" }
              ].map((metric, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-4xl font-black text-primary mb-2 tracking-tighter">{metric.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Bento Grid */}
        <section className="py-24 lg:py-32 bg-slate-50 px-8 md:px-16">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-20 text-center md:text-left"
            >
              <h2 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Precision Domain Operations</h2>
              <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Infrastructure Laboratory</h3>
              <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">Our laboratory-grade approach ensures your domain controllers and network assets are fortified against modern threats while maintaining regulatory alignment.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Security Compliance */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="md:col-span-8 bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-200 flex flex-col justify-between hover:shadow-xl transition-all group"
              >
                <div>
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-8 border border-blue-100">
                    <Lock className="text-primary w-8 h-8" />
                  </div>
                  <h4 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Security & Regulatory Compliance</h4>
                  <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-xl">
                    Real-time monitoring and automated auditing for GLBA, PCI-DSS, and GDPR. We manage your security tokens, encryption protocols, and certificate lifecycle with absolute precision.
                  </p>
                </div>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 bg-slate-100 text-slate-700 text-[10px] font-black rounded-full border border-slate-200 uppercase tracking-widest">Audit Ready</span>
                  <span className="px-4 py-1.5 bg-slate-100 text-slate-700 text-[10px] font-black rounded-full border border-slate-200 uppercase tracking-widest">Encrypted</span>
                </div>
              </motion.div>

              {/* Network Admin */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-primary text-white p-12 rounded-[2.5rem] flex flex-col justify-center shadow-2xl shadow-primary/20"
              >
                <Network className="w-12 h-12 text-white/80 mb-8" />
                <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight">Network Administration</h4>
                <p className="text-white/80 leading-relaxed">
                  Active Directory optimization and multi-site replication management for global financial hubs.
                </p>
              </motion.div>

              {/* Access Management */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:col-span-4 bg-white border border-slate-200 rounded-[2.5rem] p-12 flex flex-col justify-center shadow-sm"
              >
                <Key className="w-12 h-12 text-primary mb-8" />
                <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight text-slate-900">Access Management</h4>
                <p className="text-slate-500 leading-relaxed">
                  Granular RBAC and Zero-Trust identity verification protocols to secure mission-critical assets.
                </p>
              </motion.div>

              {/* 24/7 Monitoring */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-4 bg-white border border-slate-200 rounded-[2.5rem] p-12 flex flex-col justify-center relative overflow-hidden shadow-sm"
              >
                <div className="relative z-10">
                  <Activity className="w-12 h-12 text-primary mb-8" />
                  <h4 className="text-2xl font-black mb-4 tracking-tight leading-tight text-slate-900">24/7 Monitoring</h4>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ops Active</span>
                  </div>
                </div>
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none" 
                  src="/src/assets/images/unsplash-1551288049-bebda4e38f71.jpg" 
                  alt="Data visualization"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Disaster Recovery */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="md:col-span-8 bg-slate-900 text-white rounded-[2.5rem] p-12 flex items-center gap-12 overflow-hidden shadow-xl"
              >
                <div className="hidden sm:block w-1/3 aspect-square rounded-3xl overflow-hidden shadow-lg">
                  <img 
                    src="/src/assets/images/unsplash-1451187580459-43490279c0fa.jpg" 
                    alt="Digital globe" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-black mb-4 tracking-tight">Redundant Failover Systems</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Our "Vault Floor" architecture ensures sub-second failover between geographically dispersed domain controllers, maintaining transactional integrity at all times.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Deep-Dive */}
        <section className="px-8 md:px-16 py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tighter">The Infrastructure Vault</h2>
              <div className="space-y-10">
                {[
                  { icon: <Server />, title: "Managed Active Directory", desc: "Full lifecycle management of forest and domain structures, including complex trust relationships." },
                  { icon: <ShieldEllipsis />, title: "Group Policy Enforcement", desc: "Strict security hardening through centralized GPO management, ensuring consistent baseline across all endpoints." },
                  { icon: <Users />, title: "Privileged Access Management", desc: "Just-in-time (JIT) administrative privileges to minimize the attack surface of your domain." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0 border border-slate-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-2 tracking-tight uppercase tracking-widest">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, rotate: 2 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-slate-800 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Monitor :: v_qube_inf_v4</div>
              </div>
              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 bg-slate-800/50 rounded-xl flex justify-between items-center border border-slate-700/50">
                  <span className="text-slate-400">DC01_PROD_NY</span>
                  <span className="text-emerald-400 font-bold">STABLE</span>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl flex justify-between items-center border border-slate-700/50">
                  <span className="text-slate-400">DC02_DR_CH</span>
                  <span className="text-emerald-400 font-bold">STABLE</span>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-xl flex justify-between items-center border-l-4 border-primary">
                  <span className="text-slate-400">LDAP_AUTH_REQLOG</span>
                  <span className="text-primary font-bold">0.02ms</span>
                </div>
                <div className="pt-6 border-t border-slate-800">
                  <div className="h-24 w-full bg-slate-800/30 rounded-xl relative overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 40">
                      <motion.path 
                        d="M0 35 Q 20 10 40 30 T 100 5" 
                        fill="none" 
                        stroke="#0040df" 
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500 animate-pulse">Executing automated compliance sweep... 100% Secure.</p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-16 py-32 bg-white">
          <div className="orange-gradient p-16 md:p-24 rounded-[3rem] flex flex-col items-center text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-orange"></div>
            <h3 className="text-4xl md:text-6xl font-black mb-8 z-10 tracking-tighter">Ready to Fortify Your Domain?</h3>
            <p className="text-xl text-white/80 max-w-2xl mb-12 z-10 font-medium">Join the leading financial institutions that trust V Qube for mission-critical infrastructure administration.</p>
            <div className="flex flex-col sm:flex-row gap-6 z-10">
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl">
                Schedule a Consultation
              </Link>
              <button className="border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all">
                Download Service Brief
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

