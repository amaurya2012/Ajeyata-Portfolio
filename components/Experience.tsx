import { Briefcase, ExternalLink, BadgeCheck } from "lucide-react";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">
          Experience
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
          Real-World, Real Impact.
        </h2>

        <div className="mt-14 space-y-6">
          {experience.map((exp) => (
            <div
              key={exp.role}
              className="reveal group relative overflow-hidden rounded-2xl border border-line bg-surface/60 transition-colors hover:border-lime/40 sm:flex"
            >
              {exp.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-auto sm:w-72 sm:shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={exp.image}
                    alt={`${exp.role} certificate`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col justify-center gap-3 p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink text-lime">
                    <Briefcase size={16} />
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-teal">
                    {exp.duration}
                  </span>
                </div>

                <h3 className="font-display text-xl font-medium text-paper sm:text-2xl">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">
                  {exp.provider}
                </p>
                <p className="max-w-xl text-sm leading-relaxed text-muted">
                  {exp.description}
                </p>

                {exp.image && (
                    <a
                    href={exp.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] text-muted transition-colors hover:border-lime/50 hover:text-lime"
                  >
                    <BadgeCheck size={13} />
                    View Certificate
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}