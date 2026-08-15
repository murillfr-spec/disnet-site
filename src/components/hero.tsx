"use client";

import { useParams } from "next/navigation";
import { motion, type Variants } from "motion/react";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import type { Locale } from "@/lib/i18n";
import { MotionLink } from "@/components/motion-link";
import { HeroSlider } from "@/components/hero-slider";
import { RichText } from "@/components/rich-text";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
} satisfies Variants;

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

export function Hero() {
  const { locale } = useParams<{ locale: Locale }>();
  const { heroCopy, company, ui } = getContent(locale);

  return (
    <section className="relative isolate flex min-h-[36rem] items-center overflow-hidden md:min-h-[44rem]">
      <HeroSlider />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col items-start px-6 py-24"
      >
        <motion.span
          variants={item}
          className="text-eyebrow rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-white backdrop-blur-sm"
        >
          {heroCopy.eyebrow} · Desde {company.since}
        </motion.span>

        <motion.h1 variants={item} className="text-display mt-6 max-w-2xl text-balance text-white">
          {heroCopy.title}
        </motion.h1>

        <motion.p variants={item} className="text-body-lg mt-6 max-w-xl text-white/85">
          <RichText text={heroCopy.paragraphs[0]} />
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
          <MotionLink
            href={localeHref(locale, "/contacto")}
            whileTap={{ scale: 0.96 }}
            transition={press}
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
          >
            {ui.heroCtaContact}
          </MotionLink>
          <MotionLink
            href={localeHref(locale, "/empresa")}
            whileTap={{ scale: 0.96 }}
            transition={press}
            className="group inline-flex items-center gap-2 rounded-full bg-accent-secondary px-6 py-3 text-sm font-medium text-accent-secondary-foreground"
          >
            {ui.heroCtaVisit}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-150 group-hover:translate-x-0.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </MotionLink>
          <MotionLink
            href={localeHref(locale, "/servicios")}
            whileTap={{ scale: 0.96 }}
            transition={press}
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
          >
            {ui.heroCtaServices}
          </MotionLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
