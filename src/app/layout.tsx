import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppToaster } from "@/components/app-toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Disnet | Operador Logístico 3PL en Barcelona",
  description:
    "Disnet es un operador logístico 3PL en Barcelona con más de 35 años de experiencia: recepción, almacenaje, picking, packing, e-commerce, transporte y logística inversa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
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
