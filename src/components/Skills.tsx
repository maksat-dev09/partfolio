import SectionHeading from "./SectionHeading";
import { skills } from "../data";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="glass-panel" id="skills">
      <SectionHeading title="Skills & Expertise" subtitle="Technical Stack" />
      <div className="grid gap-8 xl:grid-cols-2">
        {skills.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
            className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-8"
          >
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="space-y-5">
              {group.items.map((skill) => (
                <div key={skill.label} className="space-y-3">
                  <div className="flex items-center justify-between gap-4 text-sm text-slate-300">
                    <span>{skill.label}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-accent via-primary to-white"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
