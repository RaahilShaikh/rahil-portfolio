import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="py-28 px-6 bg-bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-12">
            What People Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 glow-on-hover"
            >
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-text-muted leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-text-dim text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
