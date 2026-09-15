import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { ContactSection } from "@/components/contact-section";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumb } from "@/components/breadcrumb";

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
    description: contactCopy.metaDescription ?? contactCopy.subtitle,
    path: "/contacto",
    locale,
  });
}

export default async function ContactoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { ui, navLinks } = getContent(locale);
  const homeLabel = navLinks.find((l) => l.href === "/")?.label ?? "Home";
  const breadcrumbItems = [
    { name: homeLabel, path: "/" },
    { name: ui.headerContact, path: "/contacto" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems, locale)} />
      <Breadcrumb items={breadcrumbItems} locale={locale} />
      <ContactSection locale={locale} headingLevel="h1" />
    </>
  );
}
