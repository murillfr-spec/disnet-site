import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/href";

/** Builds self-referencing canonical + hreflang alternates for a given path across all locales. */
export function buildAlternates(path: string, locale: Locale): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${siteUrl}${localeHref(l, path)}`;
  }
  languages["x-default"] = `${siteUrl}${localeHref(defaultLocale, path)}`;

  return {
    canonical: `${siteUrl}${localeHref(locale, path)}`,
    languages,
  };
}
