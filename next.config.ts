import type { NextConfig } from "next";

// Mapa de redirecciones 301 desde las URLs del WordPress antiguo (disnet.es)
// hacia sus equivalentes en la web nueva. Se activa el día que el dominio
// apunte a este proyecto de Vercel, para no perder el posicionamiento ni los
// backlinks acumulados por la web anterior. Las URLs sin equivalente directo
// (posts de blog antiguos sin réplica, landing pages puntuales) redirigen a
// la página nueva más relacionada por temática.
const legacyRedirects = [
  // --- Páginas principales (ES) ---
  { source: "/empresa/", destination: "/empresa" },
  { source: "/servicios/", destination: "/servicios" },
  { source: "/blog/", destination: "/blog" },
  { source: "/aviso-legal/", destination: "/aviso-legal" },
  { source: "/politica-de-privacidad/", destination: "/politica-de-privacidad" },
  { source: "/area-clientes-disnet/", destination: "/area-clientes" },
  { source: "/area-privada/", destination: "/area-clientes" },
  { source: "/contacto-disnet-barcelona/", destination: "/contacto" },
  { source: "/como-lo-hacemos/", destination: "/empresa" },
  { source: "/porque-escoger-disnet/", destination: "/empresa" },
  { source: "/video-grid-gallery/", destination: "/empresa" },
  { source: "/video-gallery/", destination: "/empresa" },
  { source: "/test/", destination: "/" },

  // --- Servicios (ES) ---
  { source: "/servicios/almacenaje/", destination: "/servicios/almacenaje" },
  { source: "/servicios/e-commerce/", destination: "/servicios/e-commerce" },
  { source: "/servicios/empaqueado-packing/", destination: "/servicios/empaqueado-packing" },
  { source: "/servicios/Empaqueado-packing/", destination: "/servicios/empaqueado-packing" },
  { source: "/servicios/logistica-inversa/", destination: "/servicios/logistica-inversa" },
  { source: "/servicios/manipulacion-de-mercancias/", destination: "/servicios/manipulacion-de-mercancias" },
  { source: "/servicios/preparacion-de-pedidos/", destination: "/servicios/preparacion-de-pedidos" },
  { source: "/servicios/recepcion-de-mercancias/", destination: "/servicios/recepcion-de-mercancias" },
  { source: "/servicios/transporte-de-mercancias/", destination: "/servicios/transporte-de-mercancias" },

  // --- Landing pages puntuales sin equivalente exacto -> servicio/página más relacionada ---
  { source: "/almacenaje-barcelona/", destination: "/servicios/almacenaje" },
  { source: "/almacen-para-ecommerce/", destination: "/servicios/e-commerce" },
  { source: "/gestion-pedidos-e-commerce/", destination: "/servicios/e-commerce" },
  { source: "/operador-logistico-ecommerce/", destination: "/servicios/e-commerce" },
  { source: "/fulfillment-barcelona/", destination: "/servicios" },
  { source: "/barcelona-logistica/", destination: "/empresa" },
  { source: "/empresas-logistica-barcelona/", destination: "/empresa" },
  { source: "/sistema-3pl/", destination: "/empresa" },

  // --- Posts de blog con réplica exacta en la web nueva (ES) ---
  {
    source: "/aspectos-clave-a-valorar-antes-de-contratar-un-servicio-de-fulfillment/",
    destination: "/blog/aspectos-clave-a-valorar-antes-de-contratar-un-servicio-de-fulfillment",
  },
  {
    source: "/empresas-de-logistica-tecnologia-inteligencia-artificial/",
    destination: "/blog/empresas-de-logistica-tecnologia-inteligencia-artificial",
  },
  {
    source: "/errores-que-perjudican-la-logistica-en-tu-e-commerce/",
    destination: "/blog/errores-que-perjudican-la-logistica-en-tu-e-commerce",
  },
  {
    source: "/operador-logistico-3pl-barcelona/",
    destination: "/blog/operador-logistico-3pl-barcelona",
  },
  {
    source: "/operador-logistico-barcelona/",
    destination: "/blog/operador-logistico-barcelona",
  },
  {
    source: "/operador-logistico-vs-logistica-propia/",
    destination: "/blog/operador-logistico-vs-logistica-propia",
  },
  {
    source:
      "/preparacion-de-pedidos-cosas-que-debes-tener-en-cuenta-antes-de-contratar-este-servicio/",
    destination:
      "/blog/preparacion-de-pedidos-cosas-que-debes-tener-en-cuenta-antes-de-contratar-este-servicio",
  },

  // --- Posts de blog antiguos sin réplica en la web nueva -> índice del blog ---
  ...[
    "importancia-contar-almacen-logistico-ecommerce",
    "ventajas-optimizar-logistica-e-commerce",
    "funciones-principales-logistica",
    "funciones-operador-logistico",
    "proceso-expedicion-paquetes",
    "significado-picking-y-packing",
    "que-es-un-operador-logistico-3pl",
    "ventajas-sistema-3pl",
    "optimizar-gestion-pedidos-ecommerce",
    "logistica-ventaja-competitiva",
    "logistica-ecommerce",
    "fulfillment-ecommerce",
    "quick-commerce-barcelona",
    "empresa-transporte-paqueteria",
    "logistica-4pl",
    "servicio-de-picking-barcelona",
    "trazabilidad-en-tiempo-real",
    "shopify",
    "disnet-forjando-lideres-logisticos",
    "gestionar-operaciones-de-ecommerce-en-temporada-alta",
    "inteligencia-artificial-en-logistica",
    "sistemas-de-almacenamiento-en-logistica-barcelona",
    "grupaje-de-mercancias-en-barcelona",
    "desafios-de-la-logistica-en-verano",
    "logistica-inversa-e-commerce",
    "logistica-integral-barcelona",
    "tendencias-logistica-ecommerce-2",
    "logistica-4-0-barcelona",
    "mensajeria-en-barcelona-servicio-logistico-eficiente",
    "logistica-textil-barcelona",
    "logistica-pymes-barcelona",
    "recepcion-eficiente-e-impacto-en-cadena-de-suministro",
    "despega-tu-startup-en-barcelona-logistica-escalable",
    "convierte-el-packaging-en-experiencia-de-marca",
    "recepcion-expedicion-mercancias",
    "logistica-inversa-optimizar-procesos-de-devolucion",
    "almacen-logistico-en-barcelona",
    "partner-logistico-barcelona",
    "logistica-en-la-experiencia-de-compra-navidena",
    "smart-packaging",
    "5-consejos-imprescindibles-para-gestionar-la-logistica-en-tu-e-commerce",
    "errores-comunes-en-la-recepcion-de-mercancias-y-como-evitarlos",
    "5-claves-del-sistema-3pl-que-debes-conocer-antes-de-contratarlo",
    "empresa-logistica-4pl",
  ].map((slug) => ({ source: `/${slug}/`, destination: "/blog" })),

  // --- Archivos de categoría del blog antiguo -> índice del blog ---
  { source: "/category/actualidad/", destination: "/blog" },
  { source: "/category/servicios/", destination: "/blog" },
  { source: "/category/sin-categorizar/", destination: "/blog" },

  // --- Català (/ca/) ---
  { source: "/ca/", destination: "/ca" },
  { source: "/ca/empresa/", destination: "/ca/empresa" },
  { source: "/ca/serveis/", destination: "/ca/servicios" },
  { source: "/ca/serveis/recepcio-de-mercaderies/", destination: "/ca/servicios/recepcion-de-mercancias" },
  { source: "/ca/serveis/preparacio-de-comandes/", destination: "/ca/servicios/preparacion-de-pedidos" },
  { source: "/ca/serveis/empaqueado-packing/", destination: "/ca/servicios/empaqueado-packing" },
  { source: "/ca/serveis/manipulacio-de-mercaderies/", destination: "/ca/servicios/manipulacion-de-mercancias" },
  { source: "/ca/serveis/emmagatzematge/", destination: "/ca/servicios/almacenaje" },
  { source: "/ca/serveis/e-commerce/", destination: "/ca/servicios/e-commerce" },
  { source: "/ca/serveis/transport-de-mercaderies/", destination: "/ca/servicios/transporte-de-mercancias" },
  { source: "/ca/serveis/logistica-inversa/", destination: "/ca/servicios/logistica-inversa" },
  { source: "/ca/contacte/", destination: "/ca/contacto" },
  { source: "/ca/per-que-escollir-disnet/", destination: "/ca/empresa" },
  { source: "/ca/proteccio-de-dades/", destination: "/ca/politica-de-privacidad" },
  { source: "/ca/area-privada/", destination: "/ca/area-clientes" },
  { source: "/ca/video-grid-gallery/", destination: "/ca/empresa" },
  { source: "/ca/video-gallery/", destination: "/ca/empresa" },
  { source: "/ca/disnet-com-ho-fem/", destination: "/ca/empresa" },
  { source: "/ca/blog/", destination: "/ca/blog" },

  // --- English (/en/) ---
  { source: "/en/", destination: "/en" },
  { source: "/en/company/", destination: "/en/empresa" },
  { source: "/en/services/", destination: "/en/servicios" },
  { source: "/en/services/merchandise-reception/", destination: "/en/servicios/recepcion-de-mercancias" },
  { source: "/en/services/handling-of-goods/", destination: "/en/servicios/manipulacion-de-mercancias" },
  { source: "/en/services/storage/", destination: "/en/servicios/almacenaje" },
  { source: "/en/services/preparation-of-orders/", destination: "/en/servicios/preparacion-de-pedidos" },
  { source: "/en/services/packing-packing/", destination: "/en/servicios/empaqueado-packing" },
  { source: "/en/services/e-commerce/", destination: "/en/servicios/e-commerce" },
  { source: "/en/services/merchandise-transports/", destination: "/en/servicios/transporte-de-mercancias" },
  { source: "/en/services/reverse-logistics/", destination: "/en/servicios/logistica-inversa" },
  { source: "/en/contact/", destination: "/en/contacto" },
  { source: "/en/why-choose-disnet/", destination: "/en/empresa" },
  { source: "/en/data-protection/", destination: "/en/politica-de-privacidad" },
  { source: "/en/private-area/", destination: "/en/area-clientes" },
  { source: "/en/video-grid-gallery/", destination: "/en/empresa" },
  { source: "/en/video-gallery/", destination: "/en/empresa" },
  { source: "/en/disnet-how-we-do-it/", destination: "/en/empresa" },
  { source: "/en/gracias/", destination: "/en/contacto" },
  { source: "/en/blog/", destination: "/en/blog" },

  // --- Français (/fr/) ---
  { source: "/fr/", destination: "/fr" },
  { source: "/fr/entreprise/", destination: "/fr/empresa" },
  { source: "/fr/prestations-de-service/", destination: "/fr/servicios" },
  {
    source: "/fr/prestations-de-service/manutention-de-marchandises/",
    destination: "/fr/servicios/manipulacion-de-mercancias",
  },
  {
    source: "/fr/prestations-de-service/espace-de-rangement/",
    destination: "/fr/servicios/almacenaje",
  },
  {
    source: "/fr/prestations-de-service/reception-de-marchandise/",
    destination: "/fr/servicios/recepcion-de-mercancias",
  },
  {
    source: "/fr/prestations-de-service/preparation-des-commandes/",
    destination: "/fr/servicios/preparacion-de-pedidos",
  },
  {
    source: "/fr/prestations-de-service/emballage-emballage/",
    destination: "/fr/servicios/empaqueado-packing",
  },
  {
    source: "/fr/prestations-de-service/commerce-electronique/",
    destination: "/fr/servicios/e-commerce",
  },
  {
    source: "/fr/prestations-de-service/transport-de-marchandises/",
    destination: "/fr/servicios/transporte-de-mercancias",
  },
  {
    source: "/fr/prestations-de-service/logistique-inverse/",
    destination: "/fr/servicios/logistica-inversa",
  },
  { source: "/fr/contacter/", destination: "/fr/contacto" },
  { source: "/fr/pourquoi-choisir-disnet/", destination: "/fr/empresa" },
  { source: "/fr/protection-de-donnees/", destination: "/fr/politica-de-privacidad" },
  { source: "/fr/zone-privee/", destination: "/fr/area-clientes" },
  { source: "/fr/galerie-video/", destination: "/fr/empresa" },
  { source: "/fr/galerie-de-grille-video/", destination: "/fr/empresa" },
  { source: "/fr/disnet-comment-nous-le-faisons/", destination: "/fr/empresa" },
  { source: "/fr/blog/", destination: "/fr/blog" },
].map((r) => ({ ...r, permanent: true }));

const nextConfig: NextConfig = {
  // Las URLs heredadas de WordPress siempre llevan barra final; el redirect
  // automático de barra final de Next.js interceptaría esas peticiones antes
  // de que se evalúen las reglas de legacyRedirects. Se desactiva para que
  // esas reglas (con barra final explícita en el "source") sean las que manden.
  skipTrailingSlashRedirect: true,
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  redirects() {
    return legacyRedirects;
  },
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            // Report-Only: solo registra violaciones, no bloquea nada todavía.
            key: "Content-Security-Policy-Report-Only",
            value:
              "default-src 'self'; img-src 'self' data: https://img.youtube.com; frame-src https://www.youtube-nocookie.com; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
