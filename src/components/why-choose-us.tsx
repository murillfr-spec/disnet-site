"use client";

import { useParams } from "next/navigation";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { WhyChooseShowcase } from "@/components/why-choose-showcase";
import { RichText } from "@/components/rich-text";

export function WhyChooseUs() {
  const { locale } = useParams<{ locale: Locale }>();
  const { whyChooseUs, quotes } = getContent(locale);

  return (
    <section className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <h2 className="text-h2">{whyChooseUs.title}</h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              {whyChooseUs.intro.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <WhyChooseShowcase />
          </Reveal>
        </div>

        <Reveal className="mt-16 grid gap-6 border-t border-border pt-12 sm:grid-cols-2">
          {quotes.map((quote) => (
            <blockquote key={quote.author} className="text-lg font-medium leading-snug text-balance">
              “{quote.text}”
              <footer className="mt-3 text-sm font-normal text-muted-foreground">— {quote.author}</footer>
            </blockquote>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
