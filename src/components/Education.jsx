import { FiArrowUpRight } from "react-icons/fi";
import { SiAnthropic, SiCoursera, SiDatacamp } from "react-icons/si";
import { CERTIFICATIONS, EDUCATIONS } from "../constants";
import { Reveal, Section, SectionHeading } from "./ui";

const providerIcon = (provider) => {
  if (provider.includes("DataCamp")) return <SiDatacamp />;
  if (provider.includes("Anthropic")) return <SiAnthropic />;
  return <SiCoursera />;
};

const Education = () => (
  <Section id="education">
    <SectionHeading
      index="05"
      eyebrow="Education & certifications"
      title="Always *learning*."
      intro="A computer science foundation with a focus on data, plus certifications in data engineering, machine learning and agentic AI."
    />

    {/* degrees side by side */}
    <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
      {EDUCATIONS.map((edu, i) => (
        <Reveal key={edu.degree} delay={i * 0.08} className="h-full">
          <article className="panel panel-hover flex h-full flex-col p-6 sm:p-8 lg:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-lime">{edu.year}</p>
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">{edu.grade}</span>
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">{edu.degree}</h3>
            <p className="mt-2 text-base text-neutral-300 lg:text-lg">{edu.university}</p>
            <div className="mt-auto pt-6">
              <p className="eyebrow mb-3">Key modules</p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((c) => (
                  <span key={c} className="chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>

    {/* certifications in a row */}
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-3 lg:gap-5">
      {CERTIFICATIONS.map((c, i) => (
        <Reveal key={c.title} delay={i * 0.06} className={i === CERTIFICATIONS.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="panel panel-hover group flex h-full items-center gap-5 p-6 lg:p-7"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-white/10 bg-ink-700 text-2xl text-white transition-colors group-hover:border-lime/50 group-hover:text-lime">
              {providerIcon(c.provider)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="eyebrow block">Certification · {c.provider}</span>
              <span className="mt-1 block text-lg font-semibold text-white">{c.title}</span>
              <span className="mt-1 block text-xs text-neutral-400 sm:text-sm">{c.tags.join(" · ")}</span>
            </span>
            <FiArrowUpRight className="shrink-0 text-xl text-neutral-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Education;
