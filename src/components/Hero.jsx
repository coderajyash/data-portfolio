import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { HERO, HERO_STAGES, PROFILE } from "../constants";
import { Accent, StatusDot } from "./ui";

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
  <svg
    viewBox="0 0 1000 210"
    preserveAspectRatio="none"
    className="h-36 w-full sm:h-48 lg:h-56"
    aria-hidden="true"
  >
    {STREAMS.map((s, i) => (
      <g key={i}>
        {/* the track */}
        <path
          d={s.d}
          fill="none"
          stroke={s.tone === "lime" ? "rgba(198,244,50,0.35)" : "rgba(255,255,255,0.12)"}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        {/* the travelling pulse */}
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

const Hero = () => (
  <section id="top" className="noise relative flex min-h-[100svh] flex-col overflow-hidden">
    {/* one soft light source, low and centred */}
    <div
      className="pointer-events-none absolute left-1/2 top-[38%] h-[28rem] w-[min(60rem,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[0.07] blur-[110px]"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(198,244,50,0.14),transparent_70%)]"
      aria-hidden="true"
    />

    {/* copy */}
    <div className="relative mx-auto flex w-full max-w-[88rem] flex-1 flex-col items-center justify-center px-4 pb-8 pt-28 text-center sm:px-8 sm:pt-32 lg:px-12">
      <motion.p {...fadeUp(0.05)} className="chip mb-8">
        <StatusDot /> {PROFILE.availability}
      </motion.p>

      <motion.h1
        {...fadeUp(0.15)}
        className="text-[clamp(2.6rem,8vw,6.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white"
      >
        <Accent text={HERO.headlineTop} />
        <br />
        <Accent text={HERO.headlineBottom} />
      </motion.h1>

      <motion.p
        {...fadeUp(0.3)}
        className="mt-7 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base"
      >
        {HERO.subline}
      </motion.p>

      <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <a href="#projects" className="btn-lime">
          View projects <FiArrowRight />
        </a>
        <a href={PROFILE.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          Resume <FiArrowUpRight />
        </a>
      </motion.div>
    </div>

    {/* data streams + stage labels */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.6 }}
      className="relative"
    >
      <Streams />
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between px-4 pb-6 pt-3 sm:px-8 lg:px-12">
        {HERO_STAGES.map((stage, i) => (
          <span
            key={stage}
            className={`eyebrow flex items-center gap-2 ${
              i === HERO_STAGES.length - 1 ? "!text-lime" : ""
            } ${i > 0 && i < HERO_STAGES.length - 1 ? "hidden sm:flex" : ""}`}
          >
            <span className={`h-1 w-1 rounded-full ${i === HERO_STAGES.length - 1 ? "bg-lime" : "bg-neutral-500"}`} />
            {stage}
          </span>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Hero;
