import { BadgeCheck, ExternalLink } from "lucide-react";
import { certifications, type Certification } from "@/lib/data";

const gradients = [
  "from-violet/50 via-violet/10 to-ink",
  "from-teal/50 via-teal/10 to-ink",
  "from-lime/40 via-lime/10 to-ink",
  "from-teal/40 via-violet/15 to-ink",
  "from-violet/40 via-lime/10 to-ink",
];

function gradientFor(issuer: string) {
  let hash = 0;
  for (let i = 0; i < issuer.length; i++) hash = issuer.charCodeAt(i) + ((hash << 5) - hash);
  return gradients[Math.abs(hash) % gradients.length];
}

function initials(issuer: string) {
  const words = issuer.replace(/[&.]/g, "").split(" ").filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

function CertCard({ cert }: { cert: Certification }) {
  const Wrapper = cert.url ? "a" : "div";
  const wrapperProps = cert.url
    ? { href: cert.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-lime/40 hover:shadow-xl hover:shadow-black/30"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {cert.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cert.image}
            alt={`${cert.title} certificate`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradientFor(
              cert.issuer
            )}`}
          >
            <span className="font-display text-3xl font-semibold tracking-wide text-paper/80">
              {initials(cert.issuer)}
            </span>
          </div>
        )}
        <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 backdrop-blur">
          <BadgeCheck size={14} className="text-lime" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-teal">
          {cert.issuer}
        </p>
        <p className="text-sm font-medium leading-snug text-paper">
          {cert.title}
        </p>
        {cert.url && (
          <span className="mt-auto flex items-center gap-1 pt-2 font-mono text-[11px] text-muted transition-colors group-hover:text-lime">
            View Certificate
            <ExternalLink size={11} />
          </span>
        )}
      </div>
    </Wrapper>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-teal">
              Certifications
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium text-paper sm:text-4xl">
              Always Learning, Always Evolving.
            </h2>
          </div>
          <p className="font-mono text-sm text-muted">
            {certifications.length} CERTIFICATIONS EARNED
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <div key={cert.title} style={{ animationDelay: `${i * 0.03}s` }} className="reveal">
              <CertCard cert={cert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}