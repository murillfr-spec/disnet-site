import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { buildAlternates } from "@/lib/seo";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { privacyPolicyCopy, ui } = getContent(locale);
  return {
    title: `${ui.privacyPolicyPageTitle} | Disnet`,
    description: privacyPolicyCopy.title,
    alternates: buildAlternates("/politica-de-privacidad", locale),
  };
}

export default async function PoliticaDePrivacidadPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { privacyPolicyCopy, ui } = getContent(locale);
  return <LegalPage copy={privacyPolicyCopy} lastUpdatedLabel={ui.lastUpdatedLabel} />;
}
