"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { useInView, animate } from "motion/react";
import { getContent } from "@/lib/content";
import { localeIntlTag, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

function Counter({ value, locale }: { value: number; locale: Locale }) {
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
      {display.toLocaleString(localeIntlTag[locale])}
      {display === value ? "+" : ""}
    </span>
  );
}

export function Stats() {
  const { locale } = useParams<{ locale: Locale }>();
  const { stats } = getContent(locale);

  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 sm:grid-cols-3">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className="flex flex-col items-center border-border text-center sm:border-l sm:first:border-l-0"
          >
            <div
              className={`text-4xl font-semibold tracking-tight md:text-5xl ${
                i % 2 === 0 ? "text-accent" : "text-accent-secondary"
              }`}
            >
              <Counter value={stat.value} locale={locale} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
