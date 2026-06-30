import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Shield, Smartphone } from "lucide-react";
import { FaApple, FaGooglePlay, FaGithub } from "react-icons/fa";
import { projects, projectCategories } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 px-6 bg-bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Projects
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Apps I've Built & Shipped
          </h2>
          <p className="text-text-muted max-w-2xl mb-4">
            A mix of personal builds and professional engagements. For
            client-confidential work, names are withheld per NDA but the
            technical scope and my role are shown.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "glass text-text-muted hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl overflow-hidden glow-on-hover flex flex-col"
              >
                <div className="h-44 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} app screenshot`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Smartphone size={36} className="text-text-dim" />
                  )}
                  {project.confidential && (
                    <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-bg/80 text-xs text-text-muted">
                      <Shield size={12} />
                      Client Project
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-primary-light mb-3">
                    {project.role}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-surface text-text-dim text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border">
                    {project.playstoreUrl && (
                      <a
                        href={project.playstoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on Google Play Store"
                        className="text-text-muted hover:text-accent transition-colors"
                      >
                        <FaGooglePlay size={17} />
                      </a>
                    )}
                    {project.appstoreUrl && (
                      <a
                        href={project.appstoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View on Apple App Store"
                        className="text-text-muted hover:text-accent transition-colors"
                      >
                        <FaApple size={19} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source on GitHub"
                        className="text-text-muted hover:text-accent transition-colors"
                      >
                        <FaGithub size={17} />
                      </a>
                    )}
                    {!project.playstoreUrl &&
                      !project.appstoreUrl &&
                      !project.githubUrl && (
                        <span className="text-text-dim text-xs flex items-center gap-1">
                          <ExternalLink size={13} />
                          Private engagement
                        </span>
                      )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
