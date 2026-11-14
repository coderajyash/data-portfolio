import { motion } from "framer-motion";

// Renders text where *word* is highlighted in lime, e.g. "*Reliable* insight out."
export const Accent = ({ text, className = "" }) => {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i} className="not-italic text-lime">
            {part.slice(1, -1)}
          </em>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

export const Reveal = ({ children, delay = 0, className = "", y = 24 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ index, eyebrow, title, intro }) => (
  <Reveal className="mb-10 grid gap-5 border-b border-white/[0.08] pb-8 sm:mb-12 lg:grid-cols-2 lg:items-end lg:gap-16 lg:pb-10">
    <div>
      <p className="eyebrow mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
        <span className="text-lime">{index}</span>
        <span>/ {eyebrow}</span>
      </p>
      <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
        <Accent text={title} />
      </h2>
    </div>
    {intro && (
      <p className="max-w-xl text-lg leading-relaxed text-neutral-300 lg:justify-self-end lg:text-xl">{intro}</p>
    )}
  </Reveal>
);

export const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`relative py-16 sm:py-20 lg:py-24 ${className}`}>
    <div className="mx-auto w-full max-w-[88rem] px-4 sm:px-8 lg:px-12">{children}</div>
  </section>
);

export const Tag = ({ children }) => <span className="chip">{children}</span>;

export const StatusDot = ({ className = "" }) => (
  <span className={`relative inline-flex h-2 w-2 ${className}`}>
    <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-lime" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
  </span>
);
