import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";

export function ContactSection({
  locale,
  headingLevel = "h2",
}: {
  locale: Locale;
  headingLevel?: "h1" | "h2";
}) {
  const { company, contactCopy, ui } = getContent(locale);
  const Heading = headingLevel;
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <Heading className={headingLevel === "h1" ? "text-h1" : "text-h2"}>{contactCopy.title}</Heading>
          <p className="mt-4 text-muted-foreground">{contactCopy.subtitle}</p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-semibold">{ui.addressLabel}</dt>
              <dd className="mt-1 text-muted-foreground">{company.address}</dd>
            </div>
            <div>
              <dt className="font-semibold">{ui.phoneLabel}</dt>
              <dd className="mt-1">
                <a href={company.phoneHref} className="text-muted-foreground transition-colors duration-150 hover:text-accent">
                  {company.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold">{ui.emailLabel}</dt>
              <dd className="mt-1">
                <a href={`mailto:${company.email}`} className="text-muted-foreground transition-colors duration-150 hover:text-accent">
                  {company.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl border border-border bg-card p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
