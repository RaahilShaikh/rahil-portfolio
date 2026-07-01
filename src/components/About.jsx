import { motion } from "framer-motion";
import { siteInfo } from "../data/siteInfo";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-10 max-w-2xl">
            {siteInfo.about.headline}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-5"
          >
            {siteInfo.about.paragraphs.map((p, i) => (
              <p key={i} className="text-text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-3 auto-rows-fr"
          >
            {siteInfo.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-3 text-center glow-on-hover"
              >
                <div className="font-display text-xl font-bold gradient-text mb-1 leading-none">
                  {stat.value}
                </div>
                <div className="text-text-dim text-[10px] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
