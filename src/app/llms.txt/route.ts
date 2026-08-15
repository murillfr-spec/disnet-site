import { getContent } from "@/lib/content";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const { company, services, blogPosts } = getContent("es");

  const lines: string[] = [
    `# ${company.name}`,
    "",
    `> ${company.legalName} es un operador logístico 3PL (third-party logistics) con base en Sabadell (Vallès Occidental, Barcelona), España, activo desde ${company.since}. Ofrece servicios de externalización logística: recepción, manipulación, almacenaje, preparación de pedidos, empaquetado, e-commerce/fulfillment (incluye integración con Shopify y WooCommerce), transporte y logística inversa.`,
    "",
    `Teléfono: ${company.phone} · Email: ${company.email}`,
    `Dirección: ${company.address}`,
    "",
    "El sitio está disponible en español (por defecto, sin prefijo), inglés (/en), catalán (/ca) y francés (/fr).",
    "",
    "## Servicios",
    ...services.map((s) => `- [${s.name}](${siteUrl}/servicios/${s.slug}): ${s.headline}`),
    "",
    "## Empresa",
    `- [Sobre Disnet](${siteUrl}/empresa)`,
    `- [Contacto](${siteUrl}/contacto)`,
    `- [Área clientes](${siteUrl}/area-clientes)`,
    "",
    "## Blog",
    ...blogPosts.map((p) => `- [${p.title}](${siteUrl}/blog/${p.slug})`),
    "",
    `Sitemap completo (incluye las 4 versiones de idioma de cada página): ${siteUrl}/sitemap.xml`,
  ];

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
