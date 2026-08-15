import { defaultLocale, type Locale } from "@/lib/i18n";

export function localeHref(locale: Locale, path: string): string {
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export function stripLocalePrefix(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) return pathname;
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname;
}
