import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";
import { siteInfo } from "../data/siteInfo";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mwvdnoee";

const platformCards = [
  {
    key: "upwork",
    label: "Upwork",
    icon: SiUpwork,
    color: "text-[#14a800]",
    bg: "bg-[#14a800]/15",
  },
  {
    key: "fiverr",
    label: "Fiverr",
    icon: SiFiverr,
    color: "text-[#1dbf73]",
    bg: "bg-[#1dbf73]/15",
  },
];

const socialIcons = [
  { key: "linkedin", icon: FaLinkedinIn, label: "LinkedIn" },
  { key: "github", icon: FaGithub, label: "GitHub" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Have a project in mind or a role you think I'd be a great fit
            for? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary-light" />
              </div>
              <div>
                <p className="text-xs text-text-dim">Email</p>
                <p className="text-sm">{siteInfo.email}</p>
              </div>
            </div>
            <div className="glass rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-dim">Location</p>
                <p className="text-sm">{siteInfo.location}</p>
              </div>
            </div>

            {platformCards.map(({ key, label, icon: Icon, color, bg }) => {
              const url = siteInfo.social[key];
              if (!url) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-5 flex items-center gap-4 glow-on-hover"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}
                  >
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <p className="text-xs text-text-dim">Hire me on</p>
                    <p className="text-sm">{label}</p>
                  </div>
                </a>
              );
            })}

            <div className="flex items-center gap-3 pt-2">
              {socialIcons.map(({ key, icon: Icon, label }) => {
                const url = siteInfo.social[key];
                if (!url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-muted hover:text-accent transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle size={36} className="text-accent mb-3" />
                <p className="font-medium">Message received!</p>
                <p className="text-text-muted text-sm mt-1">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none text-sm transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none text-sm transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none text-sm resize-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light disabled:opacity-60 text-white font-medium transition-colors"
                >
                  {status === "sending" ? (
                    <>
                      Sending...
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <p className="text-red-400 text-xs text-center">
                    Something went wrong. Please try again or email me
                    directly.
                  </p>
                )}
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
