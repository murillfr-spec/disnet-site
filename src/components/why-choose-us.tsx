"use client";

import { whyChooseUs, quotes, barcelonaCopy } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { WhyChooseShowcase } from "@/components/why-choose-showcase";
import { RichText } from "@/components/rich-text";

export function WhyChooseUs() {
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

            <div className="mt-10 rounded-2xl border border-border bg-card p-6">
              <h3 className="text-h3">{barcelonaCopy.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <RichText text={barcelonaCopy.paragraphs[0]} />
              </p>
              <p className="mt-4 text-sm font-medium text-accent">{barcelonaCopy.highlight}</p>
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
