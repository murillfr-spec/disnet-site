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
  const { legalNoticeCopy, ui } = getContent(locale);
  return {
    title: `${ui.legalNoticePageTitle} | Disnet`,
    description: legalNoticeCopy.title,
    alternates: buildAlternates("/aviso-legal", locale),
  };
}

export default async function AvisoLegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { legalNoticeCopy, ui } = getContent(locale);
  return <LegalPage copy={legalNoticeCopy} lastUpdatedLabel={ui.lastUpdatedLabel} />;
}
