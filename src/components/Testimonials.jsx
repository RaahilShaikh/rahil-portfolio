import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
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
    <div className="glass rounded-2xl p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-0.5">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
          ))}
        </div>
        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${platform.bg}`}>
          {Icon && <Icon size={11} className={platform.color} />}
          <span className={`text-[10px] font-medium ${platform.color}`}>
            {platform.label}
          </span>
        </div>
      </div>
      <Quote size={20} className="text-primary/25 mb-3" />
      <p className="text-text-muted text-sm leading-relaxed flex-1 mb-5">
        {t.text}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white shrink-0">
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

const AUTO_INTERVAL = 5000;

const getCardsVisible = () =>
  typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(getCardsVisible);
  const timerRef = useRef(null);

  const total = testimonials.length;
  const maxIndex = total - cardsVisible;

  const next = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const prev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    const onResize = () => {
      setCardsVisible(getCardsVisible());
      setCurrent(0);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (paused) {
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [paused, maxIndex]);

  const handleManualNav = (fn) => {
    clearInterval(timerRef.current);
    fn();
    if (!paused) {
      timerRef.current = setInterval(next, AUTO_INTERVAL);
    }
  };

  if (!testimonials.length) return null;

  const cardWidth = `calc(${100 / cardsVisible}% - ${
    (24 * (cardsVisible - 1)) / cardsVisible
  }px)`;

  return (
    <section
      id="testimonials"
      className="py-28 bg-bg-secondary/40 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6">
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

        {/* Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(-${current} * (${cardWidth} + 24px))`,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="shrink-0"
                style={{ width: cardWidth }}
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-3">
            <button
              onClick={() => handleManualNav(prev)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-text transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleManualNav(next)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-text transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleManualNav(() => setCurrent(i))}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-border hover:bg-text-dim"
                }`}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-text-dim text-sm">
            {current + 1} – {Math.min(current + cardsVisible, total)} /{" "}
            {total}
          </p>
        </div>
      </div>
    </section>
  );
}