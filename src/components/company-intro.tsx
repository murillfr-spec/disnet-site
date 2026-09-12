import Link from "next/link";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import type { Locale } from "@/lib/i18n";
import { Reveal } from "@/components/reveal";
import { RichText } from "@/components/rich-text";

export function CompanyIntro({ locale }: { locale: Locale }) {
  const { companyIntroCopy, ui } = getContent(locale);

  return (
    <section className="border-b border-border">
      <Reveal className="mx-auto max-w-3xl px-6 py-20">
        <span className="mb-3 flex h-1.5 w-12 rounded-full bg-accent" />
        <div className="space-y-4 text-muted-foreground">
          {companyIntroCopy.paragraphs.slice(1).map((p) => (
            <p key={p}>
              <RichText text={p} />
            </p>
          ))}
        </div>
        <Link
          href={localeHref(locale, "/empresa")}
          aria-label={ui.readMoreAboutCompany}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
        >
          {ui.readMore}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </Reveal>
    </section>
  );
}
