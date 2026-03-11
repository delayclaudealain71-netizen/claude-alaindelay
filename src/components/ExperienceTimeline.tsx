import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, ChevronDown } from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";

export default function ExperienceTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Parcours</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Expérience <span className="text-gradient">Professionnelle</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <button
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  className="w-full glass-card p-6 text-left group hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs text-primary font-medium mb-1">{exp.period}</p>
                      <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}{exp.location ? ` — ${exp.location}` : ""}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform shrink-0 mt-1 ${
                        expanded === i ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="mt-4 space-y-2">
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="text-sm text-secondary-foreground flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
