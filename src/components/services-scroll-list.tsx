"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/lib/content";
import { serviceIconBySlug } from "@/components/service-icons";
import { Reveal } from "@/components/reveal";

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

function ServiceRow({ service, index }: { service: (typeof services)[number]; index: number }) {
  const Icon = serviceIconBySlug[service.slug];
  const n = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.div whileHover="hover" whileTap={{ scale: 0.99 }} transition={press}>
        <Link
          href={`/servicios/${service.slug}`}
          className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-7 sm:gap-8 sm:py-9"
        >
          <span className="text-h2 text-border tabular-nums transition-colors duration-300 group-hover:text-accent/30">
            {n}
          </span>

          <div>
            <div className="flex items-center gap-3">
              <motion.span
                variants={{ hover: { rotate: -10, scale: 1.1 } }}
                transition={press}
                className="hidden size-9 shrink-0 items-center justify-center rounded-lg border border-border text-accent sm:flex"
              >
                <Icon className="size-4" />
              </motion.span>
              <h3 className="text-h3 sm:text-2xl">{service.name}</h3>
            </div>
            <p className="mt-1.5 max-w-md text-sm text-muted-foreground sm:text-base">{service.headline}</p>
            <motion.span
              variants={{ hover: { scaleX: 1 } }}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformOrigin: "left" }}
              className="mt-4 block h-px w-full max-w-md bg-accent sm:hidden"
            />
          </div>

          <motion.span
            variants={{ hover: { x: 6 } }}
            transition={press}
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </motion.span>
        </Link>
      </motion.div>
      {index < services.length - 1 && <div className="h-px w-full bg-border" />}
    </motion.div>
  );
}

export function ServicesScrollList() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-h2">Servicios que ofrecemos</h2>
          <p className="mt-4 text-muted-foreground">
            En Disnet, además de los servicios estándar, atendemos cualquier necesidad de logística de
            nuestros clientes con el objetivo de que no tengan que ocuparse, si así lo desean, de ningún
            aspecto relacionado con la distribución física de sus productos.
          </p>
        </Reveal>

        <div className="mt-6 border-t border-border">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
