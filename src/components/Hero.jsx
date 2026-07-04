import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteInfo } from "../data/siteInfo";

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-noise overflow-hidden pt-24"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-text-muted mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for freelance & full-time opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Flutter Developer
          <br />
          building <span className="gradient-text">mobile apps</span> &{" "}
          <span className="gradient-text">smart automations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-muted text-lg max-w-2xl mx-auto mb-4"
        >
          5+ years shipping production Flutter apps for iOS & Android, plus
          n8n workflow automation that saves businesses hours every week.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex items-center justify-center gap-2 text-text-dim text-sm mb-10"
        >
          <MapPin size={14} />
          {siteInfo.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-light text-white font-medium transition-all glow-on-hover"
          >
            View My Work
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <a
            href={siteInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass hover:bg-surface-hover text-text font-medium transition-all"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
