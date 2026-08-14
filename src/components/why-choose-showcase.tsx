"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { whyChooseUs } from "@/lib/content";

const DURATION = 4500;

export function WhyChooseShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);

  const advance = () => {
    setActive((i) => (i + 1) % whyChooseUs.points.length);
    setTick((t) => t + 1);
  };

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(advance, DURATION);
    return () => clearTimeout(id);
  }, [active, paused, tick]);

  const select = (i: number) => {
    setActive(i);
    setTick((t) => t + 1);
  };

  const point = whyChooseUs.points[active];

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="overflow-hidden rounded-3xl border border-border bg-card"
    >
      <div className="flex gap-1 p-2">
        {whyChooseUs.points.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => select(i)}
            aria-label={p.title}
            className="group relative h-1.5 flex-1 overflow-hidden rounded-full bg-muted"
          >
            {i === active && !paused && (
              <motion.span
                key={tick}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: DURATION / 1000, ease: "linear" }}
                className="absolute inset-y-0 left-0 rounded-full bg-accent"
              />
            )}
            {i === active && paused && <span className="absolute inset-y-0 left-0 w-full rounded-full bg-accent" />}
            {i < active && <span className="absolute inset-y-0 left-0 w-full rounded-full bg-accent/40" />}
          </button>
        ))}
      </div>

      <div className="relative min-h-[14rem] p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="text-eyebrow text-accent">0{active + 1}</span>
            <h3 className="text-h3 mt-2">{point.title}</h3>
            <p className="mt-3 max-w-md text-muted-foreground">{point.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex divide-x divide-border border-t border-border">
        {whyChooseUs.points.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => select(i)}
            className={`flex-1 px-3 py-3 text-center text-xs font-medium transition-colors duration-150 ${
              i === active ? "text-accent" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>
    </div>
  );
}
