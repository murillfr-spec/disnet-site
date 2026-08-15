"use client";

import { useState, useSyncExternalStore } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import type { Locale } from "@/lib/i18n";

const STORAGE_KEY = "disnet-cookie-consent";

type Consent = { technical: true; marketing: boolean };

function subscribe() {
  return () => {};
}
function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY);
}
function getServerSnapshot() {
  return "pending";
}

export function CookieBanner() {
  const { locale } = useParams<{ locale: Locale }>();
  const { cookieConsent } = getContent(locale);
  const storedConsent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);
  const [marketing, setMarketing] = useState(true);

  const visible = !dismissed && storedConsent === null;

  function save(consent: Consent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setDismissed(true);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-card/95 backdrop-blur-lg"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {cookieConsent.message}{" "}
              <Link
                href={localeHref(locale, "/politica-de-privacidad")}
                className="font-medium text-accent underline underline-offset-2"
              >
                {cookieConsent.moreInfo}
              </Link>
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:shrink-0">
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input type="checkbox" checked disabled className="accent-[var(--color-accent)]" />
                {cookieConsent.technical}
              </label>
              <label className="flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="accent-[var(--color-accent)]"
                />
                {cookieConsent.marketing}
              </label>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => save({ technical: true, marketing: false })}
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors duration-150 hover:border-accent hover:text-accent"
                >
                  {cookieConsent.reject}
                </button>
                <button
                  type="button"
                  onClick={() => save({ technical: true, marketing })}
                  className="rounded-full bg-accent px-4 py-2 text-xs font-medium text-accent-foreground"
                >
                  {cookieConsent.accept}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
