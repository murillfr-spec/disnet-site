import { siteUrl } from "@/lib/site";
import { localeHref } from "@/lib/href";
import type { Locale } from "@/lib/i18n";
import type { Content, BlogPost, Service } from "@/lib/content";

const organizationId = `${siteUrl}/#organization`;

export function organizationSchema(company: Content["company"]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": organizationId,
    name: company.name,
    legalName: company.legalName,
    description: company.tagline,
    url: siteUrl,
    logo: `${siteUrl}/images/logo-disnet.jpg`,
    image: `${siteUrl}/images/logo-disnet.jpg`,
    telephone: company.phoneHref.replace("tel:", ""),
    email: company.email,
    foundingDate: String(company.since),
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Pla del Fonollar, 15 (Polígon Riu Sec)",
      postalCode: "08205",
      addressLocality: "Sabadell",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
  };
}

export function serviceSchema(service: Service, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.headline,
    provider: { "@id": organizationId },
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
    url: `${siteUrl}${localeHref(locale, `/servicios/${service.slug}`)}`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${localeHref(locale, item.path)}`,
    })),
  };
}

export function blogPostingSchema(post: BlogPost, locale: Locale, dateISO: string) {
  const url = `${siteUrl}${localeHref(locale, `/blog/${post.slug}`)}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: dateISO,
    dateModified: dateISO,
    author: { "@type": "Organization", name: "Disnet", "@id": organizationId },
    publisher: { "@id": organizationId },
    mainEntityOfPage: url,
    url,
  };
}

/** Extracts FAQ-shaped {heading ending in "?", followed by text} pairs from a blog post body. */
export function extractFaqItems(post: BlogPost): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = [];
  for (let i = 0; i < post.body.length - 1; i++) {
    const block = post.body[i];
    const next = post.body[i + 1];
    if ("heading" in block && block.heading.trim().endsWith("?") && "text" in next) {
      items.push({ question: block.heading, answer: next.text });
    }
  }
  return items;
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\*\*/g, ""),
      },
    })),
  };
}
