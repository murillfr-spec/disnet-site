import type { LegalPageCopy } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function LegalPage({ copy, lastUpdatedLabel }: { copy: LegalPageCopy; lastUpdatedLabel: string }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h1 className="text-h1">{copy.title}</h1>
          <div className="mt-8 space-y-4 text-muted-foreground">
            {copy.body.map((block, i) => {
              if ("heading" in block) {
                return (
                  <h2 key={i} className="text-h3 pt-3 text-foreground">
                    {block.heading}
                  </h2>
                );
              }
              if ("list" in block) {
                return (
                  <ul key={i} className="space-y-3">
                    {block.list.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-sm leading-relaxed">
                  {block.text}
                </p>
              );
            })}
          </div>
          <p className="mt-10 text-xs text-muted-foreground/80">
            {lastUpdatedLabel}: {copy.lastUpdated}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
