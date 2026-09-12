import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";
import { locales, defaultLocale, localeIntlTag, type Locale } from "@/lib/i18n";
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

const OG_IMAGE = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Disnet — Operador Logístico 3PL en Barcelona",
};

/**
 * Builds the full page metadata (title, description, canonical/hreflang,
 * Open Graph and Twitter Card) from a single source of truth so every page
 * always ships consistent og:title/og:description/og:image instead of
 * relying on Facebook/LinkedIn/WhatsApp's own (unreliable) fallback scraping.
 */
export function buildMetadata({
  title,
  description,
  path,
  locale,
}: {
  title: string;
  description: string;
  path: string;
  locale: Locale;
}): Metadata {
  const url = `${siteUrl}${localeHref(locale, path)}`;

  return {
    title,
    description,
    alternates: buildAlternates(path, locale),
    openGraph: {
      title,
      description,
      url,
      siteName: "Disnet",
      images: [OG_IMAGE],
      locale: localeIntlTag[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
