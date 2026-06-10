import SectionHeading from "./SectionHeading";
import { contacts } from "../data";
import { Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="glass-panel" id="contact">
      <SectionHeading
        title="Contact & Connect"
        subtitle="Let's build together"
      />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-surface p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-accent/80">
            Reach out
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-white">
            I&apos;m available for junior roles and freelance collaborations.
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Send a message for new web solutions, startups, and AI-assisted
            products. I respond quickly and enjoy turning ideas into polished
            applications.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${contacts.email}`}
              className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm transition hover:border-accent hover:text-accent"
            >
              <Mail className="h-5 w-5" />
              {contacts.email}
            </a>
            <a
              href={contacts.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 text-sm transition hover:border-accent hover:text-accent"
            >
              <Github className="h-5 w-5" />
              GitHub Profile
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            Messages
          </p>
          <form className="mt-8 space-y-4">
            <label className="block text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
              />
            </label>
            <label className="block text-sm text-slate-300">
              Message
              <textarea
                rows={5}
                placeholder="Tell me about your project"
                className="mt-3 w-full rounded-3xl border border-white/10 bg-bg/60 px-4 py-3 text-sm text-white outline-none transition focus:border-accent"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
