import type { Metadata } from "next";
import { empresaCopy, jobsCopy } from "@/lib/content";
import { JobForm } from "@/components/job-form";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { YoutubeEmbed } from "@/components/youtube-embed";

export const metadata: Metadata = {
  title: "Empresa | Disnet",
  description: empresaCopy.intro[0],
};

export default function EmpresaPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Reveal>
            <h1 className="text-h1">{empresaCopy.title}</h1>
            <div className="mt-6 space-y-4 text-muted-foreground">
              {empresaCopy.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto max-w-6xl px-6">
          <YoutubeEmbed videoId="m9ItuwMbI8Y" title="Disnet Logística Barcelona" />
        </Reveal>

        <div className="mx-auto max-w-4xl px-6 pb-20">
          <Reveal delay={0.15} className="mt-14 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Misión</h2>
              <p className="mt-3 text-sm leading-relaxed">{empresaCopy.mission}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Visión</h2>
              <p className="mt-3 text-sm leading-relaxed">{empresaCopy.vision}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-accent">Valores</h2>
              <p className="mt-3 text-sm leading-relaxed">{empresaCopy.values}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="trabaja-con-nosotros" className="scroll-mt-24 border-b border-border bg-muted/40">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">{jobsCopy.title}</h2>
            <p className="mt-3 text-muted-foreground">{jobsCopy.description}</p>
            <div className="mt-10 rounded-2xl border border-border bg-card p-8">
              <JobForm />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
