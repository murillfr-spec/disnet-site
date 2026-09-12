import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { ContactSection } from "@/components/contact-section";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { contactCopy, ui } = getContent(locale);
  return buildMetadata({
    title: ui.contactPageTitle,
    description: contactCopy.subtitle,
    path: "/contacto",
    locale,
  });
}

export default async function ContactoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  return <ContactSection locale={locale} headingLevel="h1" />;
}
