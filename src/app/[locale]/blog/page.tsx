import type { Metadata } from "next";
import Link from "next/link";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import { isLocale, type Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { ui } = getContent(locale);
  return {
    title: `${ui.blogPageTitle} | Disnet`,
    description: ui.blogPageDescription,
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { blogPosts, ui } = getContent(locale);

  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Reveal>
          <h1 className="text-h1">{ui.blogPageTitle}</h1>
          <p className="mt-4 text-muted-foreground">{ui.blogPageDescription}</p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={Math.min(i, 4) * 0.06}>
              <Link href={localeHref(locale, `/blog/${post.slug}`)} className="group block border-b border-border pb-8 last:border-b-0">
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
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
