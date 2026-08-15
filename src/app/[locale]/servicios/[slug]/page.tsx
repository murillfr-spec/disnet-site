import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { CtaBanner } from "@/components/cta-banner";
import { MotionLink } from "@/components/motion-link";
import { serviceIconBySlug } from "@/components/service-icons";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";
import { buildAlternates } from "@/lib/seo";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

const serviceImageBySlug: Record<string, string> = {
  "recepcion-de-mercancias": "/images/svc-recepcion.jpg",
  "manipulacion-de-mercancias": "/images/svc-manipulacion.jpg",
  almacenaje: "/images/hero-4-almacen.webp",
  "preparacion-de-pedidos": "/images/hero-5.webp",
  "empaqueado-packing": "/images/svc-empaquetado.jpg",
  "e-commerce": "/images/svc-ecommerce.jpg",
  "transporte-de-mercancias": "/images/svc-transporte.jpg",
  "logistica-inversa": "/images/svc-inversa.jpg",
};

export function generateStaticParams() {
  const { services } = getContent("es");
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { services } = getContent(locale);
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | Disnet`,
    description: service.headline,
    alternates: buildAlternates(`/servicios/${slug}`, locale),
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { services, ui, navLinks } = getContent(locale);
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);
  const Icon = serviceIconBySlug[service.slug];
  const image = serviceImageBySlug[service.slug];
  const servicesLabel = navLinks.find((l) => l.href === "/servicios")?.label ?? "Servicios";
  const homeLabel = navLinks.find((l) => l.href === "/")?.label ?? "Home";

  return (
    <>
      <JsonLd data={serviceSchema(service, locale)} />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: homeLabel, path: "/" },
            { name: servicesLabel, path: "/servicios" },
            { name: service.name, path: `/servicios/${slug}` },
          ],
          locale
        )}
      />
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link href={localeHref(locale, "/servicios")} className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent">
            {ui.backToServices}
          </Link>
          <Reveal>
            <span className="mt-6 flex size-14 items-center justify-center rounded-full border border-border text-accent">
              <Icon className="size-7" />
            </span>
            <h1 className="text-h1 mt-4">{service.name}</h1>
            <p className="mt-4 text-lg text-accent">{service.headline}</p>
            {service.subheadline && (
              <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {service.subheadline}
              </p>
            )}

            {image && (
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl">
                <Image src={image} alt={service.name} fill sizes="(min-width: 768px) 672px, 100vw" className="object-cover" />
              </div>
            )}

            <div className="mt-8 space-y-4 text-muted-foreground">
              {service.intro.map((p) => (
                <p key={p}>
                  <RichText text={p} />
                </p>
              ))}
            </div>

            {service.list && (
              <ul className="mt-6 space-y-3">
                {service.list.map((li) => (
                  <li key={li} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    {li}
                  </li>
                ))}
              </ul>
            )}

            {service.extra && (
              <div className="mt-6 space-y-4 text-muted-foreground">
                {service.extra.map((p) => (
                  <p key={p}>
                    <RichText text={p} />
                  </p>
                ))}
              </div>
            )}

            <MotionLink
              href={localeHref(locale, "/contacto")}
              whileTap={{ scale: 0.96 }}
              transition={press}
              className="mt-10 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
            >
              {ui.requestQuote}
            </MotionLink>
          </Reveal>
        </div>
      </section>

      {service.sections && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-16">
            {service.sections.map((sec, i) => (
              <Reveal key={sec.heading} delay={i * 0.05} className={i > 0 ? "mt-10" : undefined}>
                <h2 className="text-h3">{sec.heading}</h2>
                <div className="mt-3 space-y-4 text-muted-foreground">
                  {sec.paragraphs.map((p) => (
                    <p key={p}>
                      <RichText text={p} />
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {service.benefits && (
        <section className="border-b border-border bg-muted/40">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <Reveal>
              {service.benefitsTitle && <h2 className="text-h2">{service.benefitsTitle}</h2>}
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((b, i) => (
                <Reveal key={b.title} delay={(i % 3) * 0.06} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-semibold text-accent">{b.title}</h3>
                  {b.description && (
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
                  )}
                  {b.points && (
                    <ul className="mt-2 space-y-2">
                      {b.points.map((pt) => (
                        <li key={pt} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.audience && (
        <section className="border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <Reveal>
              {service.audienceTitle && <h2 className="text-h3">{service.audienceTitle}</h2>}
              <ul className="mt-5 space-y-3">
                {service.audience.map((a) => (
                  <li key={a} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {service.ctaLabel && (
        <section className="border-b border-border bg-muted/40">
          <div className="mx-auto max-w-3xl px-6 py-14 text-center">
            <MotionLink
              href={localeHref(locale, "/contacto")}
              whileTap={{ scale: 0.96 }}
              transition={press}
              className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground"
            >
              {service.ctaLabel}
            </MotionLink>
          </div>
        </section>
      )}

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {ui.otherServices}
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {otherServices.map((s) => (
              <MotionLink
                key={s.slug}
                href={localeHref(locale, `/servicios/${s.slug}`)}
                whileTap={{ scale: 0.95 }}
                transition={press}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                {s.name}
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
