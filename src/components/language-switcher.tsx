"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { getContent } from "@/lib/content";
import { localeHref, stripLocalePrefix } from "@/lib/href";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { FlagES, FlagGB, FlagFR, FlagCA } from "@/components/flag-icons";

const flagByLocale: Record<Locale, (props: { className?: string }) => React.JSX.Element> = {
  es: FlagES,
  en: FlagGB,
  ca: FlagCA,
  fr: FlagFR,
};

const uiKeyByLocale: Record<Locale, "changeToSpanish" | "changeToEnglish" | "changeToCatalan" | "changeToFrench"> = {
  es: "changeToSpanish",
  en: "changeToEnglish",
  ca: "changeToCatalan",
  fr: "changeToFrench",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const { locale } = useParams<{ locale: Locale }>();
  const { ui } = getContent(locale);
  const basePath = stripLocalePrefix(pathname, locale);

  return (
    <div className="flex items-center gap-1.5">
      {locales.map((l) => {
        const Flag = flagByLocale[l];
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localeHref(l, basePath)}
            aria-label={ui[uiKeyByLocale[l]]}
            aria-current={active ? "true" : undefined}
            title={localeNames[l]}
            className={`flex size-8 items-center justify-center rounded-full border transition-all duration-150 ${
              active
                ? "border-accent ring-2 ring-accent/30"
                : "border-transparent opacity-60 hover:border-border hover:opacity-100"
            }`}
          >
            <Flag className="rounded-[2px]" />
          </Link>
        );
      })}
    </div>
  );
}
