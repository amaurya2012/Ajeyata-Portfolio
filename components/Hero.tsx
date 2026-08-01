"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import NodeNetwork from "./NodeNetwork";
import { profile } from "@/lib/data";

function useTypewriter(words: string[], typingSpeed = 55, pause = 1600) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        typingSpeed / 1.6
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 md:px-10"
    >
      {/* Ambient glow blobs */}
      <div className="glow-blob absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet/25" />
      <div
        className="glow-blob absolute right-0 top-1/3 h-80 w-80 rounded-full bg-teal/20"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="glow-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-lime/10"
        style={{ animationDelay: "-11s" }}
      />

      <NodeNetwork />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 md:grid-cols-[1.2fr_0.8fr]">
        {/* Left: copy */}
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" />
            Open to {profile.openTo.join(" · ")}
          </p>

          <h1 className="font-display text-4xl font-medium leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-lime via-teal to-violet bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-5 h-8 font-mono text-lg text-muted sm:text-xl">
            <span className="text-teal">&gt;</span> {typed}
            <span className="ml-0.5 animate-pulse text-lime">_</span>
          </div>

          <p className="mt-6 max-w-lg text-balance text-sm leading-relaxed text-muted sm:text-base">
            {profile.status}. I build AI-driven and full-stack applications —
            from intelligent agents to data-visualization tools — and I&apos;m
            always looking for the next interesting problem to solve.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-lime px-6 py-3 font-mono text-xs font-medium uppercase tracking-widest text-ink transition-transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-teal hover:text-teal"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-lime"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-lime"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:mauryaajeyata2005@gmail.com`}
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-lime"
            >
              <Mail size={25} />
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="reveal flex justify-center md:justify-end" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-gradient-to-br from-lime/30 via-teal/20 to-violet/30 blur-2xl" />
              <div className="h-52 w-52 overflow-hidden rounded-full border border-line sm:h-64 sm:w-64">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.jpeg"
                  alt="Ajeyata Maurya"
                  className="h-full w-full object-cover"
                />
              </div>
            <div className="absolute -bottom-2 -right-2 rounded-full border border-line bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-teal shadow-lg shadow-black/40">
              DS &apos;28
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
