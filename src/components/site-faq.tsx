import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import { faqPageSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

export function SiteFaq({ locale }: { locale: Locale }) {
  const { siteFaq } = getContent(locale);

  return (
    <section className="border-b border-border bg-muted/40">
      <JsonLd data={faqPageSchema(siteFaq.items)} />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h2 className="text-h2">{siteFaq.title}</h2>
          <div className="mt-8 space-y-6">
            {siteFaq.items.map((item) => (
              <div key={item.question}>
                <h3 className="font-semibold">{item.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <RichText text={item.answer} />
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
