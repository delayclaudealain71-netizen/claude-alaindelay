import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GraduationCap, Award, ChevronDown } from "lucide-react";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="education" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Formation</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Diplômes & <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => {
            const hasCompetences = edu.competences && edu.competences.length > 0;
            const isExpanded = expanded === i;

            const cardContent = (
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  {edu.mention ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs text-primary font-medium mb-1">{edu.period}</p>
                      <h3 className="font-display font-semibold text-foreground mb-1">{edu.title}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}{edu.location ? ` — ${edu.location}` : ""}</p>
                      {edu.mention && (
                        <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                          Mention : {edu.mention}
                        </span>
                      )}
                    </div>
                    {hasCompetences && (
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 mt-1 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  {hasCompetences && (
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-2">
                        {edu.competences!.map((comp, j) => (
                          <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                            {comp}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className={`glass-card p-6 hover:border-primary/30 transition-colors group ${hasCompetences ? "cursor-pointer" : ""}`}
                onClick={hasCompetences ? () => setExpanded(isExpanded ? null : i) : undefined}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
