import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe } from "lucide-react";
import { LANGUAGES } from "@/lib/constants";

export default function Languages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Communication</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Langues <span className="text-gradient">Parlées</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {LANGUAGES.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.15 }}
              className="glass-card p-6 flex flex-col items-center text-center gap-4"
            >
              {/* Circular progress */}
              <div className="relative w-28 h-28">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="6"
                  />
                  <motion.circle
                    cx="50" cy="50" r="42"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 42}
                    initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                    animate={inView ? { strokeDashoffset: 2 * Math.PI * 42 * (1 - lang.percent / 100) } : {}}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{lang.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
