import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CompanyIntro } from "@/components/company-intro";
import { BarcelonaSection } from "@/components/barcelona-section";
import { Stats } from "@/components/stats";
import { ServicesScrollList } from "@/components/services-scroll-list";
import { WhyChooseUs } from "@/components/why-choose-us";
import { SiteFaq } from "@/components/site-faq";
import { ContactSection } from "@/components/contact-section";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  return { alternates: buildAlternates("/", locale) };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";

  return (
    <>
      <Hero />
      <CompanyIntro locale={locale} />
      <BarcelonaSection locale={locale} />
      <Stats />
      <ServicesScrollList />
      <WhyChooseUs />
      <SiteFaq locale={locale} />
      <ContactSection locale={locale} />
    </>
  );
}
