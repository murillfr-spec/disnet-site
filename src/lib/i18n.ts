export const locales = ["es", "en", "ca", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const localeNames: Record<Locale, string> = {
  es: "Castellano",
  en: "English",
  ca: "Català",
  fr: "Français",
};

export const localeIntlTag: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  ca: "ca-ES",
  fr: "fr-FR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
