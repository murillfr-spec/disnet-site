import type { Metadata } from "next";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { MotionLink } from "@/components/motion-link";
import { buildAlternates } from "@/lib/seo";

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

const portalImages = {
  MyDLS: "/images/portal-mydls.png",
  B2B: "/images/portal-b2b.jpg",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { clientAreaCopy } = getContent(locale);
  return {
    title: `${clientAreaCopy.title} | Disnet`,
    description: clientAreaCopy.description,
    alternates: buildAlternates("/area-clientes", locale),
  };
}

export default async function AreaClientesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { clientAreaCopy, ui } = getContent(locale);

  return (
    <section>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <Reveal className="max-w-2xl">
          <h1 className="text-h1">{clientAreaCopy.title}</h1>
          <p className="mt-4 text-muted-foreground">{clientAreaCopy.description}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {clientAreaCopy.portals.map((portal, i) => (
            <Reveal
              key={portal.name}
              delay={i * 0.08}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-150 hover:border-accent"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={portalImages[portal.name as keyof typeof portalImages]}
                  alt={portal.description}
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h2 className="text-xl font-semibold text-accent">{portal.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{portal.description}</p>
                <MotionLink
                  href={portal.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.96 }}
                  transition={press}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                >
                  {ui.access}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-150 group-hover:translate-x-0.5">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </MotionLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
