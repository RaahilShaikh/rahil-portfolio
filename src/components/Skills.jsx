import { motion } from "framer-motion";
import { skills, expertiseTags } from "../data/skills";

const categories = [
  { key: "mobile", label: "Mobile Development" },
  { key: "backend", label: "Backend & Integrations" },
  { key: "automation", label: "Automation" },
  { key: "tools", label: "Tools & Practices" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Skills & Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Tools I Use To Build Great Products
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          {categories.map((cat) => {
            const items = skills.filter((s) => s.category === cat.key);
            if (!items.length) return null;
            return (
              <div key={cat.key}>
                <h3 className="text-text-muted text-sm font-medium mb-4 uppercase tracking-wide">
                  {cat.label}
                </h3>
                <div className="space-y-4">
                  {items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-text">{skill.name}</span>
                        <span className="text-text-dim">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-surface rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-text-muted text-sm font-medium mb-4 uppercase tracking-wide">
            Core Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {expertiseTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full glass text-sm text-text-muted hover:text-text hover:border-primary/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
