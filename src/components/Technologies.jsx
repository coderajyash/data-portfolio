import { motion } from "framer-motion";
import { SKILL_GROUPS } from "../constants";
import { Section, SectionHeading, Tag } from "./ui";

// Mini medallion diagram shown inside the featured skills card
const Medallion = () => (
  <div className="mt-6 flex flex-wrap items-center gap-2 text-xs sm:text-sm">
    {[
      { name: "Sources", cls: "border-white/15 text-neutral-300" },
      { name: "Bronze", cls: "border-[#cd7f32]/60 text-[#e0a46a]" },
      { name: "Silver", cls: "border-neutral-400/60 text-neutral-200" },
      { name: "Gold", cls: "border-[#e6c34a]/60 text-[#f1d66b]" },
      { name: "BI", cls: "border-lime/60 text-lime" },
    ].map((step, i, arr) => (
      <span key={step.name} className="flex items-center gap-2">
        <span className={`rounded-lg border bg-white/[0.03] px-3.5 py-2 ${step.cls}`}>{step.name}</span>
        {i < arr.length - 1 && <span className="text-neutral-600">→</span>}
      </span>
    ))}
  </div>
);

const Technologies = () => (
  <Section id="skills">
    <SectionHeading
      index="02"
      eyebrow="Toolkit"
      title="Built for the *whole* pipeline."
      intro="From ingestion to the dashboard: the data and analytics engineering stack I use day to day, plus the AI and ML I use to automate around it."
    />

    <div className="grid gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-4">
      {SKILL_GROUPS.map((group, i) => (
        <motion.article
          key={group.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
          className={`panel panel-hover group relative flex min-h-[15rem] flex-col overflow-hidden p-6 sm:p-7 lg:min-h-[17rem] lg:p-8 ${
            group.featured ? "sm:col-span-2" : ""
          }`}
        >
          {group.featured && (
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime/20 blur-3xl"
              aria-hidden="true"
            />
          )}
          <div className="relative flex flex-1 flex-col">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white lg:text-2xl">{group.title}</h3>
              <span className="text-sm text-neutral-600 transition-colors group-hover:text-lime">
                0{i + 1}
              </span>
            </div>
            <p className="mt-2 text-base text-neutral-400">{group.blurb}</p>
            {group.featured && <Medallion />}
            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {group.skills.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
);

export default Technologies;
