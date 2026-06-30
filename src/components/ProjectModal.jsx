import { motion, AnimatePresence } from "framer-motion";
import { X, Shield, Smartphone } from "lucide-react";
import { FaApple, FaGooglePlay, FaGithub } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
          >
            <div className="h-52 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative rounded-t-3xl overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} app screenshot`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <Smartphone size={44} className="text-text-dim" />
              )}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg/80 flex items-center justify-center text-text hover:bg-bg transition-colors"
              >
                <X size={18} />
              </button>
              {project.confidential && (
                <span className="absolute top-4 left-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-bg/80 text-xs text-text-muted">
                  <Shield size={12} />
                  Client Project
                </span>
              )}
            </div>

            <div className="p-7">
              <h3 className="font-display text-2xl font-bold mb-1">
                {project.title}
              </h3>
              <p className="text-primary-light text-sm mb-5">
                {project.role}
              </p>

              <p className="text-text-muted leading-relaxed mb-6">
                {project.description}
              </p>

              {project.confidential && (
                <p className="text-text-dim text-xs mb-6 border-l-2 border-border pl-3">
                  This project was developed during a professional
                  engagement. Specific client details are withheld per
                  confidentiality agreements.
                </p>
              )}

              <div className="mb-6">
                <p className="text-xs text-text-dim uppercase tracking-wide mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-surface text-text-muted text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-border">
                {project.playstoreUrl && (
                  <a
                    href={project.playstoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:text-accent transition-colors"
                  >
                    <FaGooglePlay size={15} /> Play Store
                  </a>
                )}
                {project.appstoreUrl && (
                  <a
                    href={project.appstoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:text-accent transition-colors"
                  >
                    <FaApple size={16} /> App Store
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm hover:text-accent transition-colors"
                  >
                    <FaGithub size={16} /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
