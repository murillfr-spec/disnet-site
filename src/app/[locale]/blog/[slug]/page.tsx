import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { CtaBanner } from "@/components/cta-banner";
import { RichText } from "@/components/rich-text";

export function generateStaticParams() {
  const { blogPosts } = getContent("es");
  return locales.flatMap((locale) => blogPosts.map((post) => ({ locale, slug: post.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { blogPosts } = getContent(locale);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Disnet`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { blogPosts, ui } = getContent(locale);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Link href={localeHref(locale, "/blog")} className="text-sm text-muted-foreground transition-colors duration-150 hover:text-accent">
            {ui.backToBlog}
          </Link>
          <Reveal>
            <p className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">{post.date}</p>
            <h1 className="text-h1 mt-3">{post.title}</h1>

            <div className="mt-8 space-y-5 text-muted-foreground">
              {post.body.map((block, i) =>
                "heading" in block ? (
                  <h2 key={i} className="text-h3 pt-3 text-foreground">
                    {block.heading}
                  </h2>
                ) : (
                  <p key={i} className="leading-relaxed">
                    <RichText text={block.text} />
                  </p>
                )
              )}
            </div>
          </Reveal>
        </div>
      </article>

      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {ui.moreArticles}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={localeHref(locale, `/blog/${p.slug}`)}
                className="group rounded-2xl border border-border bg-card p-5 transition-colors duration-150 hover:border-accent"
              >
                <p className="text-xs uppercase tracking-wide text-muted-foreground">{p.date}</p>
                <h3 className="mt-2 text-sm font-semibold leading-snug transition-colors duration-150 group-hover:text-accent">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </>
  );
}
