import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Linkedin } from "lucide-react";
import { PERSONAL } from "@/lib/constants";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate with backend
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Prenons <span className="text-gradient">Contact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary-foreground leading-relaxed">
              Disponible immédiatement pour un nouveau défi professionnel. N'hésitez pas à me contacter pour discuter de vos besoins en comptabilité.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                { icon: Phone, label: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
                { icon: MapPin, label: PERSONAL.location },
                { icon: Linkedin, label: "LinkedIn", href: PERSONAL.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="p-2 rounded-lg bg-primary/10"><Icon className="w-4 h-4 text-primary" /></div>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 space-y-5"
          >
            {(["name", "email"] as const).map((field) => (
              <div key={field}>
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
                  {field === "name" ? "Nom" : "Email"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  required
                  value={formState[field]}
                  onChange={(e) => setFormState((s) => ({ ...s, [field]: e.target.value }))}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                  placeholder={field === "name" ? "Votre nom" : "votre@email.com"}
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              {sent ? "Envoyé !" : "Envoyer"} <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
