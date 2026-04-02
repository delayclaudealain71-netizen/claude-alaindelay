import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, PERSONAL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        id="progress-bar"
        className="fixed top-0 left-0 h-0.5 z-[60] transition-all"
        style={{ width: `${progress}%` }}
      />
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          <button onClick={() => scrollTo("#hero")} className="font-display font-bold text-lg tracking-tight">
            <span className="text-gradient">CA</span>
            <span className="text-foreground">D</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === href.slice(1) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden text-foreground">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setMobileOpen(false)} className="absolute top-5 right-6 text-foreground">
              <X className="w-6 h-6" />
            </button>
            {NAV_ITEMS.map(({ label, href }, i) => (
              <motion.button
                key={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(href)}
                className="font-display text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              >
                {label}
              </motion.button>
            ))}
            <a href="/CV_Delay_Claude-Alain.pdf" download className="btn-primary mt-4">
              <Download className="w-4 h-4" /> Télécharger CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
