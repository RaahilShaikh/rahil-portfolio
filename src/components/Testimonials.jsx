import { useRef } from "react";
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

function TestimonialCard({ t }) {
  const platform = platformConfig[t.platform];
  const Icon = platform.icon;
  return (
    <div className="glass rounded-2xl p-6 flex flex-col w-[340px] shrink-0 mx-3">
      <div className="flex items-center justify-between mb-3">
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${platform.bg}`}>
          {Icon && <Icon size={11} className={platform.color} />}
          <span className={`text-[10px] font-medium ${platform.color}`}>
            {platform.label}
          </span>
        </div>
      </div>
      <Quote size={18} className="text-primary/30 mb-2" />
      <p className="text-text-muted text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
        {t.text}
      </p>
      <div className="flex items-center gap-3 pt-3 border-t border-border">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium leading-tight">{t.name}</p>
          <p className="text-text-dim text-[11px]">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex ${reverse ? "animate-marquee-reverse" : "animate-marquee"} hover:[animation-play-state:paused]`}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  if (!testimonials.length) return null;

  const half = Math.ceil(testimonials.length / 2);
  const row1 = testimonials.slice(0, half);
  const row2 = testimonials.slice(half);

  return (
    <section id="testimonials" className="py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
            What People Say
          </h2>
          <p className="text-text-muted">
            Reviews from Upwork clients, LinkedIn recommendations, and private
            client feedback.
          </p>
        </motion.div>
      </div>

      <div className="space-y-4">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>
    </section>
  );
}