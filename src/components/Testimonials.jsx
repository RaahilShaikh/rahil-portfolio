import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { testimonials } from "../data/testimonials";

const platformConfig = {
  upwork: {
    icon: SiUpwork,
    label: "Upwork · Verified",
    color: "text-[#14a800]",
    bg: "bg-[#14a800]/10",
  },
  linkedin: {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "text-[#0077b5]",
    bg: "bg-[#0077b5]/10",
  },
  private: {
    icon: null,
    label: "Private Client",
    color: "text-text-muted",
    bg: "bg-surface",
  },
};

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
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
            What People Say
          </h2>
          <p className="text-text-muted mb-12">
            Reviews from Upwork clients, LinkedIn recommendations, and
            private client feedback.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => {
            const platform = platformConfig[t.platform];
            const Icon = platform.icon;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-7 glow-on-hover flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={13}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${platform.bg}`}
                  >
                    {Icon && <Icon size={12} className={platform.color} />}
                    <span className={`text-xs font-medium ${platform.color}`}>
                      {platform.label}
                    </span>
                  </div>
                </div>

                <Quote size={20} className="text-primary/30 mb-3" />
                <p className="text-text-muted leading-relaxed mb-6 flex-1 text-sm">
                  {t.text}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-white shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-text-dim text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}