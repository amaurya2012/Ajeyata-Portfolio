import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="reveal group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/60 p-7 transition-colors hover:border-lime/40"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-teal">
            {project.tag}
          </span>
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
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-widest text-violet">
            MANIFESTED WORK
          </p>
          <h2 className="mt-3 font-display text-2xl font-medium text-paper">
            Crafted & Curated with Passion.
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
