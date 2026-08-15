import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppToaster } from "@/components/app-toaster";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadataByLocale: Record<Locale, Metadata> = {
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(siteUrl),
    ...metadataByLocale[isLocale(locale) ? locale : "es"],
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

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <AppToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
