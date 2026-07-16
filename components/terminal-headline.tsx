"use client";

import { useEffect, useState } from "react";

export default function TerminalHeadline({
  lines,
  typingSpeed = 40,
  deletingSpeed = 20,
  pauseDuration = 2000,
}: {
  lines: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}) {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const current = lines[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length - 1)),
          deletingSpeed
        );
      } else {
        setLineIndex((prev) => (prev + 1) % lines.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, lineIndex, lines, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-muted">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <span className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">about-me.sh</span>
      </div>

      <div className="p-6 sm:p-8">
        <p className="min-h-[3.5em] font-mono text-lg leading-relaxed text-foreground sm:min-h-[2.5em] sm:text-2xl">
          <span className="text-emerald-400">$ </span>
          {displayed}
          <span className="ml-0.5 inline-block h-[1em] w-[2px] -translate-y-0.5 animate-pulse bg-foreground align-middle" />
        </p>
      </div>
    </div>
  );
}