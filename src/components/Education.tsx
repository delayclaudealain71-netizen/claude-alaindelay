import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  {edu.mention ? <Award className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                </div>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
