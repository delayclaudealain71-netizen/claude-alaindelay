import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/constants";

interface SkillGroupProps {
  title: string;
  items: readonly string[];
  delay: number;
  inView: boolean;
}

function SkillGroup({ title, items, delay, inView }: SkillGroupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6"
    >
      <h3 className="font-display text-sm font-semibold text-primary mb-4 tracking-wider uppercase">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="skill-tag">{item}</span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Compétences & <span className="text-gradient">Outils</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <SkillGroup title="Comptabilité & Finance" items={SKILLS.comptabilite} delay={0.1} inView={inView} />
          <SkillGroup title="Logiciels & Outils" items={SKILLS.outils} delay={0.2} inView={inView} />
          <SkillGroup title="Intelligence Artificielle" items={SKILLS.ia} delay={0.3} inView={inView} />
          <SkillGroup title="Qualités Personnelles" items={SKILLS.softSkills} delay={0.4} inView={inView} />
        </div>
      </div>
    </section>
  );
}
