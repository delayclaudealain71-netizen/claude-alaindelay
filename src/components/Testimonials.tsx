import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">
            Références
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Ce qu'on dit de <span className="text-gradient">moi</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card p-8 relative group hover:border-primary/30 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />

              <blockquote className="text-sm leading-relaxed text-muted-foreground mb-6 italic">
                "{t.quote}"
              </blockquote>

              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground">
                  {t.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.role} — {t.company}
                </p>
                <p className="text-xs text-primary/60 mt-1">{t.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
