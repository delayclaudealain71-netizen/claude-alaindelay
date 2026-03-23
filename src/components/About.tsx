import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Linkedin } from "lucide-react";
import { PERSONAL } from "@/lib/constants";
import profilePhoto from "@/assets/photo_cv_claude-alain.png";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "8+", label: "Ans d'expérience" },
    { value: "100%", label: "Engagement" },
    { value: "3", label: "Diplômes" },
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">À propos</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Profil <span className="text-gradient">Professionnel</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            <img
              src={profilePhoto}
              alt="Claude-Alain Delay"
              className="w-48 h-48 mx-auto md:mx-0 rounded-2xl border border-border object-cover object-top"
            />
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" /> {PERSONAL.location}
              </div>
              <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 space-y-8"
          >
            <p className="text-lg leading-relaxed text-secondary-foreground">{PERSONAL.bio}</p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card p-5 text-center"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
