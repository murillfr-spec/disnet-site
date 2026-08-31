import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Mientras el dominio definitivo (disnet.es) no esté configurado en
// NEXT_PUBLIC_SITE_URL, esta preview de Vercel no debe indexarse: ya existe
// una web real y activa en disnet.es, y no queremos que Google indexe la URL
// temporal como si fuera el sitio definitivo. En cuanto se apunte el dominio
// y se actualice NEXT_PUBLIC_SITE_URL, este bloqueo se retira solo.
const isTemporaryPreviewDomain = siteUrl.includes("vercel.app");

export default function robots(): MetadataRoute.Robots {
  if (isTemporaryPreviewDomain) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
