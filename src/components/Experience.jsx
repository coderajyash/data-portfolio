import { FiAward } from "react-icons/fi";
import { EXPERIENCES } from "../constants";
import { Reveal, Section, SectionHeading, Tag } from "./ui";

const Experience = () => (
  <Section id="experience">
    <SectionHeading
      index="03"
      eyebrow="Experience"
      title="Where I've *shipped*."
      intro="Big data engineering at India's largest B2B marketplace, then reviewing AI-generated data analysis for leading AI labs."
    />

    <div className="space-y-4 lg:space-y-5">
      {EXPERIENCES.map((exp, i) => (
        <Reveal key={exp.company} delay={i * 0.05}>
          <article className="panel panel-hover grid gap-6 p-6 sm:p-8 lg:grid-cols-[20rem_1fr] lg:gap-12 lg:p-10">
            {/* left: who / when */}
            <div className="lg:border-r lg:border-white/[0.08] lg:pr-10">
              <p className="flex items-center gap-2 text-sm text-lime">
                <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-lime shadow-glow" : "bg-neutral-600"}`} />
                {exp.year}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white lg:text-[1.65rem]">{exp.role}</h3>
              <p className="mt-1 text-xl font-medium text-lime lg:text-2xl">{exp.company}</p>
              <p className="eyebrow mt-3">{exp.location}</p>
              {exp.highlight && (
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1.5 text-sm text-lime">
                  <FiAward /> {exp.highlight}
                </p>
              )}
            </div>

            {/* right: what */}
            <div className="flex flex-col">
              <ul className="gap-10 xl:columns-2">
                {exp.points.map((p) => (
                  <li
                    key={p}
                    className="mb-4 flex break-inside-avoid gap-3 text-base leading-relaxed text-neutral-200 lg:text-[1.05rem]"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Experience;
