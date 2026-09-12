"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useParams } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { Menu } from "@base-ui/react/menu";
import { getContent } from "@/lib/content";
import { localeHref } from "@/lib/href";
import type { Locale } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme-toggle";
import { MotionLink } from "@/components/motion-link";
import { LanguageSwitcher } from "@/components/language-switcher";

const press = { type: "spring", damping: 1, duration: 0.3 } as const;

export function Header() {
  const pathname = usePathname();
  const { locale } = useParams<{ locale: Locale }>();
  const { navLinks, services, company, ui } = getContent(locale);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const edgeOpacity = useTransform(scrollY, [0, 24], [0, 1]);

  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <motion.div
        aria-hidden
        style={{ opacity: edgeOpacity }}
        className="pointer-events-none absolute inset-x-0 top-full h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />
      <div className="mx-auto grid h-24 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6">
        <Link href={localeHref(locale, "/")} className="flex w-fit items-center gap-2 rounded-xl bg-white p-2.5 justify-self-start">
          <Image
            src="/images/logo-disnet.jpg"
            alt={company.name}
            width={1400}
            height={843}
            priority
            quality={100}
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.href === "/servicios" ? (
              <Menu.Root key={link.href}>
                <Menu.Trigger
                  nativeButton={false}
                  openOnHover
                  delay={80}
                  closeDelay={0}
                  render={<Link href={localeHref(locale, link.href)} />}
                  className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-150 hover:text-accent ${
                    pathname.startsWith(localeHref(locale, "/servicios")) ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Menu.Trigger>
                <Menu.Portal>
                  <Menu.Positioner sideOffset={8} align="center" className="outline-none">
                    <Menu.Popup className="grid w-[560px] origin-top grid-cols-2 gap-1 rounded-xl border border-border bg-card p-3 shadow-xl transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
                      {services.map((service) => (
                        <Menu.LinkItem
                          key={service.slug}
                          closeOnClick
                          render={<Link href={localeHref(locale, `/servicios/${service.slug}`)} />}
                          className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 outline-none transition-colors duration-150 data-[highlighted]:bg-muted data-[highlighted]:text-accent"
                        >
                          {service.name}
                        </Menu.LinkItem>
                      ))}
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.Root>
            ) : (
              <Link
                key={link.href}
                href={localeHref(locale, link.href)}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition-colors duration-150 hover:text-accent ${
                  pathname === localeHref(locale, link.href) ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <MotionLink
            href={localeHref(locale, "/contacto")}
            whileTap={{ scale: 0.95 }}
            transition={press}
            className="hidden rounded-full bg-accent-secondary px-4 py-2 text-sm font-medium text-accent-secondary-foreground md:inline-block"
          >
            {ui.headerContact}
          </MotionLink>
          <button
            type="button"
            aria-label={ui.headerOpenMenu}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full border border-border transition-transform duration-150 ease-out active:scale-90 md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={localeHref(locale, link.href)}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-semibold text-foreground transition-colors duration-150 hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <LanguageSwitcher />
              </div>
              <MotionLink
                href={localeHref(locale, "/contacto")}
                onClick={() => setMobileOpen(false)}
                whileTap={{ scale: 0.96 }}
                transition={press}
                className="mt-2 rounded-full bg-accent-secondary px-4 py-2 text-center text-sm font-medium text-accent-secondary-foreground"
              >
                {ui.headerContact}
              </MotionLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
