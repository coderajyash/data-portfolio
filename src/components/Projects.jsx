import { useState } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { FEATURED_PROJECT, PROJECTS } from "../constants";
import { Reveal, Section, SectionHeading, StatusDot, Tag } from "./ui";

const Featured = () => {
  const p = FEATURED_PROJECT;
  return (
    <Reveal>
      <article className="panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="hero-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
                Featured · {p.category}
              </span>
              <span className="chip">
                <StatusDot /> {p.status}
              </span>
            </div>
            <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">{p.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-neutral-200">{p.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-300 lg:text-base">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-lime mt-8">
              View on GitHub <FiArrowUpRight />
            </a>
          </div>

          {/* architecture flow */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-4">Architecture</p>
            <ol className="relative space-y-3">
              {p.flow.map((step, i) => (
                <li key={step} className="relative flex items-center gap-4">
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border text-sm ${
                      i === p.flow.length - 1
                        ? "border-lime bg-lime text-ink"
                        : "border-white/15 bg-ink-700 text-lime"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="flex-1 rounded-xl border border-white/10 bg-ink-800/80 px-5 py-3.5 text-sm text-neutral-200 sm:text-base">
                    {step}
                  </span>
                  {i < p.flow.length - 1 && (
                    <span className="absolute left-6 top-12 h-3 w-px bg-lime/50" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-neutral-500 sm:text-sm">
              Orchestrated with GitHub Actions · deployed via Databricks Asset Bundles
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
};

const ProjectCard = ({ project, index }) => {
  const [open, setOpen] = useState(false);
  const visible = open ? project.points : project.points.slice(0, 3);
  const hasMore = project.points.length > 3;

  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <article className="panel panel-hover group flex h-full flex-col p-6 lg:p-8">
        <div className="flex items-start justify-between gap-4">
          <p className="eyebrow">{project.category}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 text-neutral-300 transition-all group-hover:border-lime group-hover:bg-lime group-hover:text-ink"
            >
              <FiArrowUpRight />
            </a>
          )}
        </div>
        <h3 className="mt-3 text-2xl font-semibold leading-snug text-white">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-lime">
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>
        <ul className="mt-4 space-y-2.5">
          {visible.map((pt) => (
            <li key={pt} className="flex gap-3 text-[0.95rem] leading-relaxed text-neutral-300 lg:text-base">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime" aria-hidden="true" />
              {pt}
            </li>
          ))}
        </ul>
        {hasMore && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="mt-3 flex items-center gap-1 self-start text-sm text-lime hover:underline"
            aria-expanded={open}
          >
            {open ? "Show less" : `+${project.points.length - 3} more`}
            <FiChevronDown className={`transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </article>
    </Reveal>
  );
};

const Projects = () => (
  <Section id="projects">
    <SectionHeading
      index="04"
      eyebrow="Projects"
      title="Things I've *built*."
      intro="Lakehouse pipelines and analytics up front, then my applied AI and machine learning projects."
    />
    <Featured />
    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:mt-5 lg:gap-5">
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </div>
  </Section>
);

export default Projects;
