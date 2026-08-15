"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export function YoutubeEmbed({
  videoId,
  title,
  autoPlay = false,
}: {
  videoId: string;
  title: string;
  autoPlay?: boolean;
}) {
  const [playing, setPlaying] = useState(autoPlay);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
      <AnimatePresence initial={false} mode="wait">
        {playing ? (
          <motion.iframe
            key="player"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1${autoPlay ? "&mute=1" : ""}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <motion.button
            key="thumb"
            type="button"
            onClick={() => setPlaying(true)}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="group absolute inset-0 size-full"
            aria-label={`Reproducir video: ${title}`}
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/25 transition-colors duration-150 group-hover:bg-black/35" />
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", damping: 1, duration: 0.3 }}
              className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
