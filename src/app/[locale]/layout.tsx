import type { Metadata } from "next";
import Script from "next/script";
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
      "Disnet, operador logístico 3PL en Barcelona con más de 35 años de experiencia: recepción, almacenaje, picking, packing, e-commerce, transporte y logística inversa.",
  },
  en: {
    title: "Disnet | 3PL Logistics Operator in Barcelona",
    description:
      "Disnet, a 3PL logistics operator in Barcelona with over 35 years of experience: goods receipt, storage, picking, packing, e-commerce, transport, reverse logistics.",
  },
  ca: {
    title: "Disnet | Operador Logístic 3PL a Barcelona",
    description:
      "Disnet, operador logístic 3PL a Barcelona amb més de 35 anys d'experiència: recepció, emmagatzematge, picking, packing, e-commerce, transport i logística inversa.",
  },
  fr: {
    title: "Disnet | Opérateur Logistique 3PL à Barcelone",
    description:
      "Disnet, opérateur logistique 3PL à Barcelone avec plus de 35 ans d'expérience : réception, stockage, picking, packing, e-commerce, transport et logistique inverse.",
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
    verification: {
      google: "JLPuFEXNzS_0lufqs6Mw5-HLLz0IpJ6yv3WZKQ_acDU",
      other: {
        "msvalidate.01": "6632F16CDAB48B7A6C795832D80C2D9C",
      },
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
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M7T4CL9K');`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7T4CL9K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
