import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { RichText } from "@/components/rich-text";
import { buildAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { empresaCopy } = getContent(locale);
  return {
    title: `${empresaCopy.title} | Disnet`,
    description: empresaCopy.intro[0],
    alternates: buildAlternates("/empresa", locale),
  };
}

export default async function EmpresaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { empresaCopy, ui } = getContent(locale);

  return (
    <>
      <section className="border-b border-border">
        <Reveal className="mx-auto max-w-6xl px-6 pt-20">
          <YoutubeEmbed videoId="m9ItuwMbI8Y" title="Disnet Logística Barcelona" autoPlay />
        </Reveal>

        <div className="mx-auto max-w-4xl px-6">
          <Reveal delay={0.1} className="mt-14">
            <h1 className="text-h1">{empresaCopy.title}</h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {empresaCopy.intro.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-14 grid gap-6 pb-20 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">{ui.missionLabel}</h2>
              <p className="mt-3 text-sm leading-relaxed">{empresaCopy.mission}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">{ui.visionLabel}</h2>
              <p className="mt-3 text-sm leading-relaxed">{empresaCopy.vision}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">{ui.valuesLabel}</h2>
              <p className="mt-3 text-sm leading-relaxed">{empresaCopy.values}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
