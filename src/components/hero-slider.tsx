"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const slides = [
  { src: "/images/hero-1.webp", alt: "Instalaciones de Disnet, operador logístico en Barcelona" },
  { src: "/images/hero-5.webp", alt: "Almacén de Disnet en operación" },
  { src: "/images/hero-4-almacen.webp", alt: "Estanterías de almacenaje de Disnet" },
  { src: "/images/hero-2.webp", alt: "Placas solares en las instalaciones de Disnet" },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-foreground">
      {slides.map((slide, i) => (
        <motion.div
          key={slide.src}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1.06 : 1 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: 6, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
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
