// One-off script: renders public/images/og-image.png (1200x630) using the
// real Disnet logo and the site's actual brand palette (see globals.css).
// Not part of the build pipeline — run manually if the OG card needs
// regenerating.
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f4f4f4" />
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- subtle grid texture -->
  <g opacity="0.05" stroke="#2e2e2e" stroke-width="1">
    <line x1="0" y1="140" x2="1200" y2="140" />
    <line x1="0" y1="280" x2="1200" y2="280" />
    <line x1="0" y1="420" x2="1200" y2="420" />
    <line x1="0" y1="560" x2="1200" y2="560" />
  </g>

  <!-- accent bar -->
  <rect x="0" y="0" width="14" height="630" fill="#cc0000" />

  <!-- Headline -->
  <text x="90" y="368" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-weight="700" fill="#2e2e2e">
    Operador Logístico 3PL
  </text>
  <text x="90" y="426" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-weight="700" fill="#2e2e2e">
    en Barcelona
  </text>

  <!-- Supporting line -->
  <text x="90" y="478" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#777777">
    Más de 35 años de experiencia · Almacenaje, picking, packing,
  </text>
  <text x="90" y="510" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#777777">
    e-commerce, transporte y logística inversa
  </text>

  <!-- CTA badge -->
  <rect x="90" y="548" width="230" height="58" rx="29" fill="#1369cf" />
  <text x="205" y="585" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#ffffff" text-anchor="middle">
    disnet.es
  </text>
</svg>
`;

async function main() {
  const logo = await sharp(path.join(ROOT, "public/images/logo-disnet.jpg"))
    .resize({ width: 420 })
    .toBuffer();

  const base = sharp(Buffer.from(svg));

  await base
    .composite([{ input: logo, left: 90, top: 70 }])
    .png({ quality: 90 })
    .toFile(path.join(ROOT, "public/images/og-image.png"));

  console.log("[gen-og-image] wrote public/images/og-image.png");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
