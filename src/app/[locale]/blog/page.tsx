import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import { isLocale, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumb } from "@/components/breadcrumb";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { ui } = getContent(locale);
  return buildMetadata({
    title: ui.blogPageMetaTitle ?? `${ui.blogPageTitle} | Disnet`,
    description: ui.blogPageDescription,
    path: "/blog",
    locale,
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { blogPosts, ui, navLinks } = getContent(locale);
  const homeLabel = navLinks.find((l) => l.href === "/")?.label ?? "Home";
  const blogLabel = navLinks.find((l) => l.href === "/blog")?.label ?? "Blog";
  const breadcrumbItems = [
    { name: homeLabel, path: "/" },
    { name: blogLabel, path: "/blog" },
  ];

  return (
    <section>
      <JsonLd data={breadcrumbSchema(breadcrumbItems, locale)} />
      <Breadcrumb items={breadcrumbItems} locale={locale} />
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h1 className="text-h1">{ui.blogPageTitle}</h1>
          <p className="mt-4 text-muted-foreground">{ui.blogPageDescription}</p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 4) * 0.06}>
              <Link href={localeHref(locale, `/blog/${post.slug}`)} className="group flex gap-5 border-b border-border pb-8 last:border-b-0">
                {post.image && (
                  <div className="relative hidden aspect-[4/3] w-40 shrink-0 overflow-hidden rounded-xl sm:block">
                    <Image src={post.image} alt={post.imageAlt ?? post.title} fill sizes="160px" className="object-cover" />
                  </div>
                )}
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{post.date}</p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug transition-colors duration-150 group-hover:text-accent">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {ui.readArticle}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-150 group-hover:translate-x-0.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
