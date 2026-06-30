import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience, education } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-12">
            Where I've Worked
          </h2>
        </motion.div>

        <div className="relative pl-8 border-l border-border space-y-10 mb-16">
          {experience.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-bg border-2 border-primary flex items-center justify-center">
                <Briefcase size={10} className="text-primary-light" />
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-display text-lg font-bold">
                    {job.role}
                  </h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/15 text-primary-light">
                    {job.duration}
                  </span>
                </div>
                <p className="text-accent text-sm mb-1">{job.company}</p>
                <p className="text-text-dim text-xs mb-4">{job.location}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {job.description}
                </p>
                <ul className="space-y-1.5">
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-text-muted flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-text-muted text-sm font-medium mb-4 uppercase tracking-wide">
            Education
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div key={edu.id} className="glass rounded-2xl p-5 flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-text-muted text-xs mt-1">
                    {edu.institution}
                  </p>
                  {edu.focus && (
                    <p className="text-text-dim text-xs">{edu.focus}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
