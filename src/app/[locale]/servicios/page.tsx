import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { CtaBanner } from "@/components/cta-banner";
import { ServiceCard } from "@/components/service-card";
import { Reveal } from "@/components/reveal";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { ui } = getContent(locale);
  return {
    title: ui.servicesPageTitle,
    description: ui.servicesPageDescription,
    alternates: buildAlternates("/servicios", locale),
  };
}

export default async function ServiciosPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { services, ui } = getContent(locale);

  return (
    <>
      <section className="border-b border-border">
        <Reveal className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-h1">{ui.servicesOffered}</h1>
          <p className="mt-5 text-muted-foreground">{ui.servicesOfferedIntro}</p>
        </Reveal>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 0.06}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
