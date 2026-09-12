import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppToaster } from "@/components/app-toaster";
import { CookieBanner } from "@/components/cookie-banner";
import { locales, isLocale, localeIntlTag, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import { getContent } from "@/lib/content";
import { organizationSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";

const OG_IMAGE = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "Disnet — Operador Logístico 3PL en Barcelona",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataByLocale: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Disnet | Operador Logístico 3PL en Barcelona",
    description:
      "Disnet es un operador logístico 3PL en Barcelona con más de 35 años de experiencia: recepción, almacenaje, picking, packing, e-commerce, transporte y logística inversa.",
  },
  en: {
    title: "Disnet | 3PL Logistics Operator in Barcelona",
    description:
      "Disnet is a 3PL logistics operator in Barcelona with over 35 years of experience: goods receipt, storage, picking, packing, e-commerce, transport and reverse logistics.",
  },
  ca: {
    title: "Disnet | Operador Logístic 3PL a Barcelona",
    description:
      "Disnet és un operador logístic 3PL a Barcelona amb més de 35 anys d'experiència: recepció, emmagatzematge, picking, packing, e-commerce, transport i logística inversa.",
  },
  fr: {
    title: "Disnet | Opérateur Logistique 3PL à Barcelone",
    description:
      "Disnet est un opérateur logistique 3PL à Barcelone avec plus de 35 ans d'expérience : réception, stockage, picking, packing, e-commerce, transport et logistique inverse.",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Ver robots.ts: mientras se sirva desde el dominio temporal de Vercel,
// también se marca noindex a nivel de página (el disallow de robots.txt no
// garantiza por sí solo que una URL enlazada externamente no se indexe).
const isTemporaryPreviewDomain = siteUrl.includes("vercel.app");

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { title, description } = metadataByLocale[locale];
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Disnet",
      images: [OG_IMAGE],
      locale: localeIntlTag[locale],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(isTemporaryPreviewDomain && {
      robots: { index: false, follow: false },
    }),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = isLocale(rawLocale) ? rawLocale : "es";
  const { company } = getContent(locale);

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={organizationSchema(company)} />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AppToaster />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
