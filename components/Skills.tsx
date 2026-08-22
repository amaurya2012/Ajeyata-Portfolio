import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-widest text-teal">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
          Instruments of Creation.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              className="reveal rounded-2xl border border-line bg-surface/60 p-7 transition-colors hover:border-lime/40"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-lime">
                0{i + 1}
              </p>
              <h3 className="mt-2 font-display text-lg font-medium text-paper">
                {group.label}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted"
                  >
                    <span className="h-1 w-1 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
