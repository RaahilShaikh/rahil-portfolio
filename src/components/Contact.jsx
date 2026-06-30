import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { siteInfo } from "../data/siteInfo";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: This currently just simulates submission.
    // To make this functional, connect it to Formspree, EmailJS,
    // or a simple backend endpoint — ask Claude to wire this up
    // once you choose a free form service.
    setSent(true);
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
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            {sent ? (
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
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none text-sm transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary outline-none text-sm transition-colors"
                />
                <textarea
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
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-medium transition-colors"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
