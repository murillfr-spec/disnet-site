"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useMotionTemplate, useSpring, type MotionValue } from "motion/react";
import type { Service } from "@/lib/content";
import { serviceIconBySlug } from "@/components/service-icons";

const spotlightSpring = { stiffness: 200, damping: 25 };

function useSpotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, spotlightSpring);
  const sy = useSpring(y, spotlightSpring);
  return { x, y, sx, sy };
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { x, y, sx, sy } = useSpotlight();
  const Icon = serviceIconBySlug[service.slug];

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", damping: 1, duration: 0.3 }}
    >
      <Link
        ref={ref}
        href={`/servicios/${service.slug}`}
        onMouseMove={handleMouseMove}
        className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors duration-150 hover:border-accent"
      >
        <Spotlight x={sx} y={sy} />

        <div className="relative">
          <span className="text-eyebrow text-muted-foreground/60">0{index + 1}</span>
          <motion.span
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", damping: 1, duration: 0.3 }}
            className="mt-3 flex size-11 items-center justify-center rounded-xl border border-border bg-muted text-accent transition-colors duration-150 group-hover:border-accent"
          >
            <Icon className="size-5" />
          </motion.span>
          <h2 className="text-h3 mt-4">{service.name}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{service.headline}</p>
        </div>
        <span className="relative mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-150 group-hover:text-accent">
          Saber más
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-150 group-hover:translate-x-0.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

function Spotlight({ x, y }: { x: MotionValue<number>; y: MotionValue<number> }) {
  const background = useMotionTemplate`radial-gradient(180px circle at ${x}px ${y}px, color-mix(in srgb, var(--color-accent) 12%, transparent), transparent 70%)`;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background }}
    />
  );
}
