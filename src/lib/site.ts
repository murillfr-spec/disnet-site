// El dominio definitivo (disnet.es) ya está comprado pero el DNS aún no
// apunta a Vercel, así que este fallback sigue siendo el de la preview hasta
// el día del cambio de dominio. Ese día: pon NEXT_PUBLIC_SITE_URL=
// https://disnet.es en Vercel (o cambia este valor por defecto) y quita el
// noindex de robots.ts.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://disnet-site.vercel.app";
