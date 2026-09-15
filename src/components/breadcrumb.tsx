import Link from "next/link";
import { localeHref } from "@/lib/href";
import type { Locale } from "@/lib/i18n";

interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Visible breadcrumb trail matching the BreadcrumbList JSON-LD built by breadcrumbSchema() in @/lib/schema — keep the two in sync. */
export function Breadcrumb({ items, locale }: { items: BreadcrumbItem[]; locale: Locale }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto flex max-w-3xl flex-wrap items-center gap-1.5 px-6 pt-8 text-xs text-muted-foreground">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.path} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {isLast ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={localeHref(locale, item.path)} className="transition-colors duration-150 hover:text-accent">
                {item.name}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
