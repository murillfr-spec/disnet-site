"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";
import { stats } from "@/lib/content";
import { Reveal } from "@/components/reveal";

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("es-ES")}
      {display === value ? "+" : ""}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className="flex flex-col items-center border-border text-center sm:border-l sm:first:border-l-0"
          >
            <div className="text-4xl font-semibold tracking-tight text-accent md:text-5xl">
              <Counter value={stat.value} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
