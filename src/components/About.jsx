import profilePic from "../assets/profilePic.jpeg";
import { ABOUT, ABOUT_FACTS, PROFILE } from "../constants";
import { Reveal, Section, SectionHeading } from "./ui";

const About = () => (
  <Section id="about">
    <SectionHeading
      index="01"
      eyebrow="About"
      title="Engineer first, *data* always."
      intro="I turn messy, high-volume data into clean tables and dashboards teams can rely on, and I use AI to take the repetitive work out of the process."
    />

    {/* phone: stacked · tablet: photo + text · desktop: photo | text | facts */}
    <div className="grid gap-6 md:grid-cols-[16rem_1fr] lg:gap-8 xl:grid-cols-[19rem_1fr_20rem]">
      <Reveal>
        <div className="panel relative mx-auto h-full max-w-xs overflow-hidden p-2 md:max-w-none">
          <img
            src={profilePic}
            alt={PROFILE.name}
            loading="lazy"
            className="aspect-[4/5] h-full w-full rounded-xl object-cover grayscale-[30%] transition duration-500 hover:grayscale-0"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/10 bg-ink/80 px-4 py-3 backdrop-blur">
            <p className="text-base font-semibold text-white">{PROFILE.name}</p>
            <p className="eyebrow mt-0.5 !text-lime">{PROFILE.role}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="panel flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
        {ABOUT.map((para) => (
          <p key={para.slice(0, 24)} className="text-lg leading-relaxed text-neutral-200 lg:text-xl lg:leading-relaxed">
            {para}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.16} className="md:col-span-2 xl:col-span-1">
        <dl className="grid h-full gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-1">
          {ABOUT_FACTS.map((f) => (
            <div key={f.label} className="flex flex-col justify-center bg-ink-800 px-6 py-5">
              <dt className="eyebrow">{f.label}</dt>
              <dd className="mt-1.5 text-base text-white lg:text-lg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  </Section>
);

export default About;
