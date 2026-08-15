"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "motion/react";
import Image from "next/image";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

const slideSrcs = ["/images/hero-1.webp", "/images/hero-5.webp", "/images/hero-4-almacen.webp", "/images/hero-2.webp"];

export function HeroSlider() {
  const { locale } = useParams<{ locale: Locale }>();
  const { heroSlideAlts } = getContent(locale);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slideSrcs.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-foreground">
      {slideSrcs.map((src, i) => (
        <motion.div
          key={src}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1.06 : 1 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={heroSlideAlts[i]}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
}
