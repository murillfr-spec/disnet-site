// One-off script: adds `image`/`imageAlt` to the 15 most recent blog posts
// in each of the 4 content language files. Reuses real photos already
// present in /public/images (no fabricated images). Run once, then delete
// or keep for reference — not part of the build pipeline.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = path.join(__dirname, "..", "src", "lib", "content");

const IMAGES = {
  "hero-1": {
    path: "/images/hero-1.webp",
    alt: {
      es: "Nave logística de Disnet en Sabadell",
      en: "Disnet's logistics warehouse building in Sabadell",
      ca: "Nau logística de Disnet a Sabadell",
      fr: "Entrepôt logistique de Disnet à Sabadell",
    },
  },
  "hero-4-almacen": {
    path: "/images/hero-4-almacen.webp",
    alt: {
      es: "Pasillo de picking en el almacén de Disnet",
      en: "Picking aisle inside Disnet's warehouse",
      ca: "Passadís de picking al magatzem de Disnet",
      fr: "Allée de picking dans l'entrepôt de Disnet",
    },
  },
  "hero-5": {
    path: "/images/hero-5.webp",
    alt: {
      es: "Almacén de Disnet con carretillas elevadoras en movimiento",
      en: "Disnet's warehouse with forklifts in motion",
      ca: "Magatzem de Disnet amb carretilles elevadores en moviment",
      fr: "Entrepôt de Disnet avec des chariots élévateurs en mouvement",
    },
  },
  "svc-manipulacion": {
    path: "/images/svc-manipulacion.jpg",
    alt: {
      es: "Manipulación de mercancías en el almacén de Disnet",
      en: "Goods handling at Disnet's warehouse",
      ca: "Manipulació de mercaderies al magatzem de Disnet",
      fr: "Manutention de marchandises dans l'entrepôt de Disnet",
    },
  },
  "svc-ecommerce": {
    path: "/images/svc-ecommerce.jpg",
    alt: {
      es: "Preparación de pedidos de e-commerce en Disnet",
      en: "E-commerce order preparation at Disnet",
      ca: "Preparació de comandes d'e-commerce a Disnet",
      fr: "Préparation de commandes e-commerce chez Disnet",
    },
  },
  "svc-recepcion": {
    path: "/images/svc-recepcion.jpg",
    alt: {
      es: "Recepción de mercancías en el almacén de Disnet",
      en: "Goods receiving at Disnet's warehouse",
      ca: "Recepció de mercaderies al magatzem de Disnet",
      fr: "Réception de marchandises dans l'entrepôt de Disnet",
    },
  },
  "svc-inversa": {
    path: "/images/svc-inversa.jpg",
    alt: {
      es: "Gestión de logística inversa en Disnet",
      en: "Reverse logistics management at Disnet",
      ca: "Gestió de logística inversa a Disnet",
      fr: "Gestion de la logistique inverse chez Disnet",
    },
  },
  "svc-empaquetado": {
    path: "/images/svc-empaquetado.jpg",
    alt: {
      es: "Proceso de empaquetado en el almacén de Disnet",
      en: "Packaging process at Disnet's warehouse",
      ca: "Procés d'empaquetat al magatzem de Disnet",
      fr: "Processus d'emballage dans l'entrepôt de Disnet",
    },
  },
};

// slug -> image key, for the 15 most recent posts
const ASSIGNMENTS = {
  "empresa-logistica-4pl": "hero-1",
  "operador-logistico-barcelona": "hero-5",
  "operador-logistico-3pl-barcelona": "hero-4-almacen",
  "empresas-de-logistica-tecnologia-inteligencia-artificial": "hero-5",
  "operador-logistico-vs-logistica-propia": "hero-1",
  "preparacion-de-pedidos-cosas-que-debes-tener-en-cuenta-antes-de-contratar-este-servicio":
    "svc-manipulacion",
  "aspectos-clave-a-valorar-antes-de-contratar-un-servicio-de-fulfillment": "svc-ecommerce",
  "errores-que-perjudican-la-logistica-en-tu-e-commerce": "svc-ecommerce",
  "5-claves-del-sistema-3pl-que-debes-conocer-antes-de-contratarlo": "hero-4-almacen",
  "errores-comunes-en-la-recepcion-de-mercancias-y-como-evitarlos": "svc-recepcion",
  "5-consejos-imprescindibles-para-gestionar-la-logistica-en-tu-e-commerce": "svc-ecommerce",
  "logistica-inversa-optimizar-procesos-de-devolucion": "svc-inversa",
  "convierte-el-packaging-en-experiencia-de-marca": "svc-empaquetado",
  "despega-tu-startup-en-barcelona-logistica-escalable": "hero-1",
  "recepcion-eficiente-e-impacto-en-cadena-de-suministro": "svc-recepcion",
};

const LOCALES = ["es", "en", "ca", "fr"];

for (const locale of LOCALES) {
  const filePath = path.join(CONTENT_DIR, `${locale}.ts`);
  let content = fs.readFileSync(filePath, "utf-8");
  let count = 0;

  for (const [slug, imageKey] of Object.entries(ASSIGNMENTS)) {
    const image = IMAGES[imageKey];
    const marker = `slug: "${slug}",`;
    const idx = content.indexOf(marker);
    if (idx === -1) {
      console.error(`[${locale}] slug not found: ${slug}`);
      continue;
    }
    const insertAt = idx + marker.length;
    const altText = image.alt[locale].replace(/"/g, '\\"');
    const insertion = `\n    image: "${image.path}",\n    imageAlt: "${altText}",`;
    content = content.slice(0, insertAt) + insertion + content.slice(insertAt);
    count++;
  }

  fs.writeFileSync(filePath, content, "utf-8");
  console.log(`[${locale}] added image/imageAlt to ${count} posts`);
}
