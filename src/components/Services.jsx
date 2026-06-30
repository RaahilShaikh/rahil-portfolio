import { motion } from "framer-motion";
import { Smartphone, Workflow, Wrench, Check } from "lucide-react";
import { services } from "../data/services";

const icons = { Smartphone, Workflow, Wrench };

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
            How I Can Help Your Business
          </h2>
          <p className="text-text-muted max-w-2xl mb-12">
            Available for freelance projects — from building a new app from
            scratch to automating your workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || Smartphone;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-7 glow-on-hover flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary-light" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mt-auto">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <Check
                        size={16}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
