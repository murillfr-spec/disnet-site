import type { Locale } from "@/lib/i18n";
import es from "./es";
import en from "./en";
import ca from "./ca";
import fr from "./fr";

export * from "./types";

const bundles = { es, en, ca, fr };

export function getContent(locale: Locale) {
  return bundles[locale];
}
