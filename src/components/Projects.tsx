import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="glass-panel" id="projects">
      <SectionHeading title="Featured Projects" subtitle="Real-World Work" />
      <div className="grid gap-6 xl:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className={`group rounded-[2rem] border border-white/10 bg-surface p-8 transition hover:-translate-y-1 hover:border-accent/30 hover:bg-white/5`}
          >
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${project.accent}`}
            >
              {project.tags[0]}
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:text-white"
            >
              Explore details
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
