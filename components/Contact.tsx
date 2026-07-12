import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  {
    label: "Gmail",
    value: "mauryaajeyata2005@gmail.com",
    href: `mailto:mauryaajeyata2005@gmail.com`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "ajeyata-maurya",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "amaurya2012",
    href: profile.github,
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/60 px-6 py-16 text-center sm:px-16">
          <div className="glow-blob absolute -left-20 -top-20 h-72 w-72 rounded-full bg-lime/10" />
          <div
            className="glow-blob absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet/15"
            style={{ animationDelay: "-8s" }}
          />

          <p className="relative font-mono text-xs uppercase tracking-widest text-teal">
            Contact
          </p>
          <h2 className="relative mx-auto mt-4 max-w-2xl font-display text-3xl font-medium text-paper sm:text-5xl">
            Let&apos;s build something worth shipping.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-sm text-muted sm:text-base">
            Open to internships, collaborations, and learning opportunities.
            If there&apos;s a problem worth solving, I&apos;d love to hear
            about it.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.label === "Email" ? undefined : "_blank"}
                rel={l.label === "Email" ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-3 rounded-full border border-line bg-ink px-5 py-3 transition-colors hover:border-lime/50"
              >
                <l.icon size={16} className="text-lime" />
                <span className="font-mono text-xs text-muted group-hover:text-paper">
                  {l.value}
                </span>
                <ArrowUpRight
                  size={14}
                  className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
