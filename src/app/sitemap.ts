import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { locales, defaultLocale } from "@/lib/i18n";
import { localeHref } from "@/lib/href";
import { getContent } from "@/lib/content";

const staticPaths = [
  "/",
  "/empresa",
  "/servicios",
  "/blog",
  "/contacto",
  "/area-clientes",
  "/aviso-legal",
  "/politica-de-privacidad",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Los slugs de servicios y posts son iguales en los 4 idiomas.
  const { services, blogPosts } = getContent(defaultLocale);
  const dynamicPaths = [
    ...services.map((s) => `/servicios/${s.slug}`),
    ...blogPosts.map((p) => `/blog/${p.slug}`),
  ];

  const allPaths = [...staticPaths, ...dynamicPaths];

  return allPaths.flatMap((path) => {
    const languages = Object.fromEntries([
      ...locales.map((l) => [l, `${siteUrl}${localeHref(l, path)}`]),
      ["x-default", `${siteUrl}${localeHref(defaultLocale, path)}`],
    ]);

    return locales.map((locale) => ({
      url: `${siteUrl}${localeHref(locale, path)}`,
      lastModified: new Date(),
      alternates: { languages },
    }));
  });
}
