import { motion } from "framer-motion";
import { ArrowDownRight, Github, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data";

export default function Hero() {
  return (
    <section className="glass-panel relative overflow-hidden">
      <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute left-0 top-28 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-accent backdrop-blur">
            <Sparkles className="h-4 w-4" />
            Junior Full-Stack Developer
          </p>
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-semibold tracking-tight text-white sm:text-6xl"
            >
              {profile.name}
            </motion.h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              {profile.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Download CV
              <ArrowDownRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://github.com/maksattt09"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:border-accent hover:text-accent"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Profile
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="rounded-[2rem] border border-white/10 bg-surface p-8 shadow-soft"
        >
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5">
              <img
                src="/my-photo.png"
                alt="Maksadbek Yuldashev"
                className="h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/30 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                Hello, I’m Maksadbek
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-accent/75">
                About
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Modern web application development with emphasis on backend
                reliability, polished UI, and practical AI workflows.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Location
                </p>
                <p className="mt-3 flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 text-accent" />
                  {profile.location}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Role
                </p>
                <p className="mt-3 text-white">{profile.title}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
