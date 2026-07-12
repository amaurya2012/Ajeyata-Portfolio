import { about } from "@/lib/data";

const stats = [
  { value: "4+", label: "Projects Shipped" },
  { value: "17", label: "Certifications" },
  { value: "2028", label: "Expected Graduation" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
              Analytically Driven, Code Focused.
            </h2>
          </div>
        </div>

        <div className="grid gap-14 md:grid-cols-[1fr_0.7fr]">
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="reveal text-sm leading-relaxed text-muted sm:text-base"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 self-start md:grid-cols-1">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-line bg-surface/60 p-5 text-center md:text-left"
              >
                <p className="font-display text-3xl font-semibold text-lime">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
