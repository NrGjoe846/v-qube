import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Database, 
  Zap, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  ChevronRight, 
  BarChart3, 
  RefreshCw, 
  Search, 
  CheckCircle2,
  FileText,
  Activity,
  Server,
  Workflow
} from "lucide-react";

export default function DataWarehouse() {
  return (
    <div className="flex min-h-screen bg-surface font-body text-on-surface antialiased">
      {/* Main Content */}
      <main className="flex-1">
        {/* Dynamic Nav Breadcrumb */}
        <div className="absolute top-28 left-8 lg:left-16 z-20">
          <nav className="flex items-center gap-2">
            <Link to="/services" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Services</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <Link to="/testing" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary">Domains</Link>
            <ChevronRight className="w-3 h-3 text-slate-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Data Warehouse</span>
          </nav>
        </div>

        {/* Hero Section */}
        <header className="relative overflow-hidden bg-surface-container-low mx-4 mt-20 rounded-[3rem] border border-slate-200 shadow-sm mb-12 py-24 lg:py-32">
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
          </div>
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-on-surface mb-8 leading-[1]">
                Data Warehouse <br/><span className="text-primary italic">& ETL Validation.</span>
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12 font-medium">
                Strategic integrity for your enterprise intelligence. We validate the complex pipelines that transform raw data into high-stakes business decisions.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="bg-primary text-white px-8 py-4 rounded-xl font-black flex items-center gap-3 hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95 group">
                  Explore ETL Framework
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Educational Section */}
        <section className="px-8 md:px-16 py-24 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
                >
                  <img 
                    className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Data center infrastructure" 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                </motion.div>
              </div>
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl font-black tracking-tight text-on-surface mb-8">What is Data Warehouse Testing?</h2>
                  <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-medium">
                    <p>
                      Data Warehouse testing ensures that the information stored in your central repository is accurate, complete, and consistent. It validates the ETL (Extract, Transform, Load) processes that move data from source systems to the warehouse.
                    </p>
                    <p>
                      In the modern BFSI sector, data is the most valuable asset. Our testing methodology ensures that your regulatory reports, financial analytics, and strategic insights are built on a foundation of absolute truth.
                    </p>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-8">
                    <div className="bg-surface-container-low p-8 rounded-[2.5rem] border-l-8 border-primary shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-4xl font-black text-primary mb-2 tracking-tighter">Zero</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Data Loss Tolerance</div>
                    </div>
                    <div className="bg-surface-container-low p-8 rounded-[2.5rem] border-l-8 border-secondary shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-4xl font-black text-secondary mb-2 tracking-tighter">100%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant">Schema Alignment</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Testing Features - Bento Grid */}
        <section className="px-8 md:px-16 py-32 bg-surface-container-low mx-4 rounded-[4rem] border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-grid-primary"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-6">Strategic ETL Features</h2>
              <p className="text-on-surface-variant font-medium text-lg">Rigorous validation protocols for high-volume data movement and transformation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Data Integrity */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 flex flex-col justify-between group hover:shadow-2xl transition-all"
              >
                <div>
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-primary/10 font-black">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 tracking-tight">Source-to-Target Verification</h3>
                  <p className="text-on-surface-variant leading-relaxed mb-10 text-lg font-medium">We perform automated row counts and data profiling to ensure that every record extracted from source systems is correctly represented in the target warehouse after transformation.</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-100">
                  {["Row Consistency", "Field Mapping", "Data Profiling"].map((tag) => (
                    <span key={tag} className="px-5 py-2 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-black text-primary uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
              </motion.div>

              {/* High-Performance ETL */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary text-white p-12 rounded-[3.5rem] flex flex-col justify-between group relative overflow-hidden shadow-2xl shadow-primary/30"
              >
                <div className="absolute inset-0 bg-grid-white/10 opacity-20 group-hover:scale-110 transition-transform duration-1000"></div>
                <div className="relative z-10">
                  <Zap className="w-12 h-12 mb-8" />
                  <h3 className="text-3xl font-black mb-6 tracking-tight">Performance Benchmarking</h3>
                  <p className="opacity-90 leading-relaxed font-medium">Testing ETL load times against massive datasets to ensure your data windows meet business SLAs and reporting deadlines.</p>
                </div>
              </motion.div>

              {/* Metadata Validation */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group"
              >
                <Layers className="w-12 h-12 text-secondary mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Metadata Validation</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">Ensuring data dictionary consistency and schema versioning across multiple environments.</p>
              </motion.div>

              {/* Automated Regression */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group"
              >
                <RefreshCw className="w-12 h-12 text-blue-400 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Automated Regression</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">Continuous testing of data pipelines during system upgrades or source system changes.</p>
              </motion.div>

              {/* Data Security */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group"
              >
                <Search className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black mb-4 tracking-tight">Data Masking Check</h3>
                <p className="text-on-surface-variant leading-relaxed font-medium">Verifying that PII and sensitive financial data are correctly masked or encrypted within the warehouse.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialized Focus Areas */}
        <section className="px-8 md:px-16 py-32 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface mb-8 leading-[1]">Specialized Focus Areas.</h2>
                  <p className="text-xl text-on-surface-variant mb-12 font-medium">Our DWH testing strategy is partitioned into five critical pillars to ensure 360-degree data assurance.</p>
                  <div className="h-2 w-24 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-8">
                {[
                  { id: "01", color: "primary", title: "Data Completeness", desc: "Ensuring all expected data from source systems is loaded into the target and identifying any orphan records or missing segments." },
                  { id: "02", color: "secondary", title: "Data Transformation", desc: "Validating complex business logic and calculations applied during the ETL process, such as currency conversion or risk score calculation." },
                  { id: "03", color: "blue-400", title: "Data Quality", desc: "Checking for null values, duplicates, and invalid data formats that could contaminate analytical reports." },
                  { id: "04", color: "red-500", title: "Regression & Scalability", desc: "Verifying that the warehouse performance remains consistent as data volume grows from gigabytes to petabytes." },
                  { id: "05", color: "slate-900", title: "Incremental Load Testing", desc: "Testing the integrity of daily or hourly delta loads without affecting the existing historical data." }
                ].map((area, index) => (
                  <motion.div 
                    key={area.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border-l-[12px] border-${area.color}`}
                  >
                    <div className="flex justify-between items-center cursor-pointer">
                      <div className="flex items-center gap-8">
                        <span className={`text-5xl font-black text-slate-100 group-hover:text-${area.color}/10 transition-colors`}>{area.id}</span>
                        <h3 className="text-3xl font-black tracking-tight">{area.title}</h3>
                      </div>
                      <Workflow className={`w-8 h-8 text-${area.color} group-hover:rotate-180 transition-transform`} />
                    </div>
                    <div className="mt-8 pl-20 text-on-surface-variant text-lg font-medium leading-relaxed">
                      {area.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing Matrix Table */}
        <section className="px-4 md:px-16 py-32 bg-slate-900 text-white mx-4 rounded-[4rem] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-grid-white"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">DWH Testing Matrix</h2>
              <p className="text-slate-400 text-xl font-medium">Core validation phases for enterprise data systems.</p>
            </div>
            <div className="overflow-x-auto bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Testing Phase</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Key Focus</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Automation Strategy</th>
                    <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.3em] text-primary">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { phase: "Schema Validation", focus: "Table structure, keys, data types.", strategy: "Metadata Comparison", status: "Critical" },
                    { phase: "Load Verification", focus: "Source vs Target row counts.", strategy: "SQL Scripting", status: "Critical" },
                    { phase: "Transformation", focus: "Business logic and formulas.", strategy: "Unit Testing / Python", status: "High Priority" },
                    { phase: "BI Reporting", focus: "Report accuracy vs DWH data.", strategy: "Visual Regression", status: "High Priority" }
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="px-10 py-8 font-black text-xl">{row.phase}</td>
                      <td className="px-10 py-8 text-slate-400 font-medium">{row.focus}</td>
                      <td className="px-10 py-8 text-sm font-bold">{row.strategy}</td>
                      <td className="px-10 py-8">
                        <span className="px-4 py-1.5 bg-primary/20 text-primary text-[10px] font-black uppercase rounded-full tracking-widest border border-primary/20">{row.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 md:px-16 py-32 bg-white">
          <div className="orange-gradient p-16 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden shadow-2xl mx-auto max-w-7xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-orange"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1]">Ready to Secure Your Data Assets?</h2>
              <p className="text-xl text-white/80 mb-12 font-medium">Partner with V Qube Enterprises to build a robust, validated data warehouse for your financial institution.</p>
              <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black text-lg hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1 inline-block">
                Consult a Data Specialist
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

