import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-colors hover:border-lime/40"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {project.image && (
        <div className="relative aspect-[16/9] w-full max-h-48 overflow-hidden border-b border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between p-7">
        <div>
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-teal">
              {project.tag}
            </span>
            {project.linkUrl ? (
              <a
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.linkLabel} for ${project.title}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-lime group-hover:text-lime"
              >
                {project.linkType === "live" ? (
                  <ArrowUpRight size={16} />
                ) : (
                  <Github size={16} />
                )}
              </a>
            ) : (
              <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted/50">
                Private
              </span>
            )}
          </div>

          <h3 className="mt-5 font-display text-xl font-medium text-paper">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full bg-ink px-3 py-1 font-mono text-[10px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">
          MANIFESTED WORK
        </p>
        <h2 className="mt-3 font-display text-2xl font-medium text-paper">
          Crafted &amp; Curated with Passion.
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard project={p} index={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  );
}