"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import type { Locale } from "@/lib/i18n";

export function Footer() {
  const { locale } = useParams<{ locale: Locale }>();
  const { company, navLinks, services, ui } = getContent(locale);

  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <Link href={localeHref(locale, "/")} className="inline-flex items-center gap-2 rounded-xl bg-white p-2.5">
            <Image src="/images/logo-disnet.jpg" alt={company.name} width={1400} height={843} quality={100} className="h-16 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-footer-muted">
            {company.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-footer-foreground">{ui.footerNavigation}</h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={localeHref(locale, link.href)} className="text-sm text-footer-muted transition-colors duration-150 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-footer-foreground">{ui.footerServices}</h3>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={localeHref(locale, `/servicios/${service.slug}`)}
                  className="text-sm text-footer-muted transition-colors duration-150 hover:text-accent"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-footer-foreground">{ui.footerContact}</h3>
          <ul className="mt-4 space-y-2 text-sm text-footer-muted">
            <li>{company.address}</li>
            <li>
              <a href={company.phoneHref} className="transition-colors duration-150 hover:text-accent">
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="transition-colors duration-150 hover:text-accent">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-footer-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-footer-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}. {ui.footerRights}
          </p>
          <div className="flex gap-4">
            <Link href={localeHref(locale, "/aviso-legal")} className="transition-colors duration-150 hover:text-accent">
              {ui.footerLegalNotice}
            </Link>
            <Link href={localeHref(locale, "/politica-de-privacidad")} className="transition-colors duration-150 hover:text-accent">
              {ui.footerPrivacyPolicy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
