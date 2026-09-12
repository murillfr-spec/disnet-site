import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

// Vercel/Next.js treats any request whose last path segment contains a dot
// as a "static file" lookup. When that lookup misses, it falls through to a
// generic prerendered /500 page instead of a proper 404 — confirmed by
// testing /nonexistent-file.{xyz,css,js,json,png}, all of which return 500.
// This matters because the site migrated from WordPress: any stale backlink
// or cached Google result pointing at an old theme asset (a .css, .js, or
// image file that no longer exists) now surfaces as a server error instead
// of a normal, harmless 404.
//
// Fix: intercept dotted-looking paths in the proxy (which always runs
// before Next's static-file resolution, per the framework's own documented
// execution order) and return a real 404 for anything that isn't an actual
// file we serve. The allowlist below is the exact, complete list of dotted
// paths this site serves — every file physically present in /public, plus
// the framework-generated metadata/icon routes (favicon.ico, icon.png,
// apple-icon.png, robots.txt, sitemap.xml, llms.txt). Update it if a file
// is added to /public or a new src/app icon/metadata convention file.
const ALLOWED_STATIC_PATHS = new Set([
  "/favicon.ico",
  "/icon.png",
  "/apple-icon.png",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/file.svg",
  "/globe.svg",
  "/next.svg",
  "/vercel.svg",
  "/window.svg",
  "/images/hero-1.webp",
  "/images/hero-2.webp",
  "/images/hero-4-almacen.webp",
  "/images/hero-5.webp",
  "/images/logo-disnet.jpg",
  "/images/portal-mydls.png",
  "/images/svc-ecommerce.jpg",
  "/images/svc-empaquetado.jpg",
  "/images/svc-inversa.jpg",
  "/images/svc-manipulacion.jpg",
  "/images/svc-recepcion.jpg",
  "/images/svc-transporte.jpg",
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lastSegment = pathname.slice(pathname.lastIndexOf("/") + 1);
  const looksLikeFile = lastSegment.includes(".");

  // Dotted-looking paths are always static-file lookups, never locale
  // routes — resolve them here (real file vs. 404) and never pass them
  // through the locale-prefix rewrite below.
  if (looksLikeFile) {
    if (!ALLOWED_STATIC_PATHS.has(pathname)) {
      return new NextResponse("Not Found", { status: 404 });
    }
    return NextResponse.next();
  }

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocalePrefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

// Excludes _next/static, _next/image and api/* — those are handled by
// Next.js/Vercel internally and must never be intercepted here.
export const config = {
  matcher: ["/((?!_next/static|_next/image|api/).*)"],
};
