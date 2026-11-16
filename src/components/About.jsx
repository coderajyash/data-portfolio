import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import profilePic from "../assets/profilePic.jpeg";
import { ABOUT, ABOUT_FACTS, ABOUT_STAGES, PROFILE } from "../constants";
import { StatusDot } from "./ui";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

/*
 * Three data streams that braid together and leave as one lime line:
 * many messy sources in, one reliable output. Each stream carries a
 * slow pulse of light (CSS dash animation in index.css).
 */
const STREAMS = [
  { d: "M0 40 C 180 40, 300 170, 500 110 S 820 60, 1000 105", tone: "faint", delay: "0s" },
  { d: "M0 175 C 160 175, 330 40, 500 110 S 800 150, 1000 105", tone: "faint", delay: "-2.4s" },
  { d: "M0 110 C 200 110, 320 95, 500 110 S 780 110, 1000 105", tone: "lime", delay: "-1.2s" },
];

const Streams = () => (
  <svg viewBox="0 0 1000 210" preserveAspectRatio="none" className="h-24 w-full sm:h-32 lg:h-40" aria-hidden="true">
    {STREAMS.map((s, i) => (
      <g key={i}>
        <path
          d={s.d}
          fill="none"
          stroke={s.tone === "lime" ? "rgba(198,244,50,0.35)" : "rgba(255,255,255,0.12)"}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={s.d}
          pathLength="1000"
          fill="none"
          stroke={s.tone === "lime" ? "#C6F432" : "rgba(255,255,255,0.7)"}
          strokeWidth={s.tone === "lime" ? 2 : 1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className={`stream-pulse ${s.tone === "lime" ? "stream-glow" : ""}`}
          style={{ animationDelay: s.delay }}
        />
      </g>
    ))}
  </svg>
);

// The page opens here: the About section doubles as the landing screen.
const About = () => (
  <section id="about" className="noise relative flex min-h-[100svh] flex-col overflow-hidden">
    <span id="top" className="absolute top-0" aria-hidden="true" />

    {/* same lighting as the old landing: one soft glow, plus a low lime wash */}
    <div
      className="pointer-events-none absolute left-1/2 top-[38%] h-[28rem] w-[min(60rem,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.07] blur-[110px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(198,244,50,0.14),transparent_70%)]"
      aria-hidden="true"
    />

    <div className="relative mx-auto flex w-full max-w-[88rem] flex-1 flex-col justify-center px-4 pb-6 pt-28 sm:px-8 sm:pt-32 lg:px-12">
      {/* phone: stacked · desktop: text | photo */}
      <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <div>
          <motion.p {...fadeUp(0.05)} className="eyebrow mb-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            <span className="text-lime">01</span>
            <span>/ About</span>
          </motion.p>

          <motion.h1
            {...fadeUp(0.12)}
            className="text-[clamp(2.4rem,6.2vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-white"
          >
            {PROFILE.name}
            <span className="mt-2 block text-[0.55em] font-medium tracking-[-0.03em] text-lime">{PROFILE.role}</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="chip mt-6">
            <StatusDot /> {PROFILE.availability}
          </motion.p>

          <motion.div {...fadeUp(0.28)} className="mt-7 max-w-3xl space-y-4">
            {ABOUT.map((para) => (
              <p key={para.slice(0, 24)} className="text-base leading-relaxed text-neutral-300 sm:text-lg lg:text-[1.15rem] lg:leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.36)} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-lime">
              View projects <FiArrowRight />
            </a>
            <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Resume <FiArrowUpRight />
            </a>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.3)} className="w-full max-w-xs place-self-center sm:max-w-sm">
          <div className="panel relative overflow-hidden p-2 shadow-card">
            <img
              src={profilePic}
              alt={PROFILE.name}
              className="aspect-[4/5] w-full rounded-xl object-cover object-center grayscale-[30%] transition duration-500 hover:grayscale-0"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur">
              <div>
                <p className="text-base font-semibold text-white">{PROFILE.name}</p>
                <p className="eyebrow mt-0.5 !text-lime">{PROFILE.role}</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-lime shadow-glow" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* quick facts in one row */}
      <motion.dl
        {...fadeUp(0.45)}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5"
      >
        {ABOUT_FACTS.map((f) => (
          <div key={f.label} className="panel flex h-full flex-col px-6 py-5">
            <dt className="eyebrow">{f.label}</dt>
            <dd className="mt-1.5 text-base text-white lg:text-lg">{f.value}</dd>
          </div>
        ))}
      </motion.dl>
    </div>

    {/* data streams + stage labels */}
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.6 }} className="relative">
      <Streams />
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-4 pb-6 pt-3 sm:px-8 lg:px-12">
        {ABOUT_STAGES.map((stage, i) => (
          <span
            key={stage}
            className={`eyebrow flex items-center gap-2 ${i === ABOUT_STAGES.length - 1 ? "!text-lime" : ""} ${
              i > 0 && i < ABOUT_STAGES.length - 1 ? "hidden sm:flex" : ""
            }`}
          >
            <span className={`h-1 w-1 rounded-full ${i === ABOUT_STAGES.length - 1 ? "bg-lime" : "bg-neutral-500"}`} />
            {stage}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default About;
