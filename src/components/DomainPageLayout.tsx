import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronRight,
  PlusCircle,
  ArrowUpRight
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Competency {
  title: string;
  desc: string;
  icon: LucideIcon;
  span?: "normal" | "wide";
  color?: "primary" | "secondary" | "accent";
}

interface Pillar {
  id: string;
  title: string;
  desc: string;
  tags: string[];
}

interface DomainPageLayoutProps {
  hero: {
    badge: string;
    title: string;
    description: string;
    image: string;
  };
  competencies: Competency[];
  pillars: {
    title: string;
    description: string;
    items: Pillar[];
  };
  cta: {
    title: string;
    description: string;
  };
}

export default function DomainPageLayout({ hero, competencies, pillars, cta }: DomainPageLayoutProps) {
  return (
    <div className="bg-surface antialiased">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 bg-grid-orange opacity-40"></div>
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary rounded-full blur-[180px]"
          ></motion.div>
        </div>

        <div className="container-max relative z-10 w-full pt-20">
          <div className="max-w-5xl">
            <nav className="flex items-center gap-2 mb-10">
              <Link to="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/40 hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-on-surface/20" />
              <Link to="/testing" className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface/40 hover:text-primary transition-colors">Testing Hub</Link>
              <ChevronRight className="w-3 h-3 text-on-surface/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{hero.badge}</span>
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-10">
                {hero.badge}
              </div>
              <h1 className="text-6xl md:text-9xl font-black text-on-surface tracking-tighter leading-[0.9] mb-10"
                dangerouslySetInnerHTML={{ __html: hero.title }}>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed max-w-3xl font-medium opacity-80 mb-16">
                {hero.description}
              </p>
              <div className="flex flex-wrap gap-6">
                <Link to="/contact?type=audit" className="px-14 py-6 bg-primary text-white rounded-2xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Request Audit Framework
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competencies Bento Grid */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {competencies.map((comp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`${comp.span === 'wide' ? 'md:col-span-8' : 'md:col-span-4'} 
                  group relative overflow-hidden p-12 rounded-[4rem] border border-outline-variant/10 shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-all duration-500 glass-card`}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg shadow-primary/5">
                      <comp.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black mb-6 tracking-tight text-on-surface group-hover:text-primary transition-colors">{comp.title}</h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                      {comp.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-padding bg-surface-container-low overflow-hidden">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-24 mb-20">
            <div className="lg:w-1/3">
              <div className="sticky top-40">
                <div className="w-20 h-2 orange-gradient rounded-full mb-8"></div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tight text-on-surface mb-10 leading-[1]">{pillars.title}</h2>
                <p className="text-xl text-on-surface-variant mb-12 font-medium opacity-70 leading-relaxed">{pillars.description}</p>
                <div className="flex items-center gap-4 text-primary font-black uppercase text-xs tracking-widest">
                  <span className="w-12 h-[1px] bg-primary/30"></span>
                  Methodology
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-10">
              {pillars.items.map((pillar, index) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`group glass-card p-12 rounded-[4rem] transition-all duration-500 hover:shadow-2xl border-l-[16px] border-primary/20 hover:border-primary`}
                >
                  <div className="flex justify-between items-start cursor-pointer">
                    <div className="flex items-center gap-10">
                      <span className={`text-6xl font-black text-on-surface/5 group-hover:text-primary/10 transition-colors duration-500`}>{pillar.id}</span>
                      <div>
                        <h3 className="text-3xl font-black tracking-tight mb-4 group-hover:text-primary transition-colors">{pillar.title}</h3>
                        <p className="text-on-surface-variant text-lg font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                          {pillar.desc}
                        </p>
                        <div className="flex gap-3 mt-8">
                          {pillar.tags.map(tag => (
                            <span key={tag} className="px-5 py-2 bg-primary/5 text-primary text-[10px] font-black rounded-full uppercase tracking-widest border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className={`w-10 h-10 text-on-surface/10 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 flex-shrink-0 mt-2`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="orange-gradient p-20 md:p-32 rounded-[5rem] text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-grid-white"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-[7rem] font-black mb-12 tracking-tight leading-[1]" dangerouslySetInnerHTML={{ __html: cta.title }}></h2>
              <p className="text-xl md:text-2xl text-white/80 mb-16 font-medium leading-relaxed">{cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <Link to="/contact?type=consultation" className="inline-flex items-center gap-4 bg-white text-primary px-14 py-6 rounded-2xl font-black text-xl hover:bg-slate-50 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-black/10">
                  Initiate Consultation
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
