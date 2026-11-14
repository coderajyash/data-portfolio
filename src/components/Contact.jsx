import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { CONTACT, PROFILE } from "../constants";
import { Accent, Reveal, Section } from "./ui";

const Contact = () => (
  <>
    <Section id="contact" className="pb-10">
      <Reveal>
        <div className="panel noise relative overflow-hidden px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-streaks pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative">
            <p className="eyebrow mb-5 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              <span className="text-lime">06</span> / Contact
            </p>
            <h2 className="text-[clamp(2.1rem,6vw,4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
              <Accent text="Let's build pipelines" />
              <br />
              <Accent text="you can *trust*." />
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-neutral-300 sm:text-base">
              Hiring for a data or analytics engineering role? I'd love to hear about the problems your team is solving.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a href={`mailto:${CONTACT.email}`} className="btn-lime">
                <FiMail /> {CONTACT.email}
              </a>
              <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Download resume <FiArrowUpRight />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <FiMapPin className="text-lime" /> {CONTACT.location}
              </span>
              {CONTACT.numbers.map((n) => (
                <a key={n} href={`tel:${n.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-lime">
                  <FiPhone className="text-lime" /> {n}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>

    <footer className="mx-auto flex w-full max-w-[88rem] flex-col items-center justify-between gap-4 px-4 pb-10 pt-4 sm:flex-row sm:px-8 lg:px-12">
      <p className="text-xs text-neutral-600">
        © {new Date().getFullYear()} {PROFILE.name} · Built with React & Tailwind
      </p>
      <div className="flex items-center gap-2">
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-lime hover:text-lime"
        >
          <FaGithub />
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 transition-colors hover:border-lime hover:text-lime"
        >
          <FaLinkedin />
        </a>
        <a
          href="#top"
          className="ml-2 rounded-full border border-white/10 px-3 py-2 text-xs text-neutral-400 transition-colors hover:border-lime hover:text-lime"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  </>
);

export default Contact;
