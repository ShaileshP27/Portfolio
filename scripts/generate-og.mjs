// Generates public/og.png (1200x630) — the social share card.
// Run from the project root: node make-og.mjs
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'E:/work/projects/portfolio/Portfolio';
const W = 1200;
const H = 630;

// Portrait, rounded + sized for the right-hand side.
const PW = 300;
const PH = 380;
const PX = 800;
const PY = 125;

const portrait = await sharp(join(ROOT, 'src/assets/shailesh.jpg'))
  .resize(PW, PH, { fit: 'cover', position: 'attention' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${PW}" height="${PH}"><rect width="${PW}" height="${PH}" rx="28" ry="28" fill="#fff"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const bg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#05070d"/>
      <stop offset="0.55" stop-color="#0a0f1c"/>
      <stop offset="1" stop-color="#111a2c"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="1" stop-color="#8b5cf6"/>
    </linearGradient>
    <radialGradient id="glowA" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#06b6d4" stop-opacity="0.34"/>
      <stop offset="1" stop-color="#06b6d4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#8b5cf6" stop-opacity="0.30"/>
      <stop offset="1" stop-color="#8b5cf6" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M56 0H0V56" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <circle cx="180" cy="80" r="330" fill="url(#glowA)"/>
  <circle cx="1030" cy="560" r="300" fill="url(#glowB)"/>

  <!-- accent rail -->
  <rect x="0" y="0" width="10" height="${H}" fill="url(#accent)"/>

  <!-- initials badge -->
  <rect x="80" y="86" width="62" height="62" rx="15" fill="url(#accent)"/>
  <text x="111" y="127" font-family="Segoe UI, Arial, sans-serif" font-size="27" font-weight="800"
        fill="#05070d" text-anchor="middle">SP</text>

  <text x="160" y="127" font-family="Segoe UI, Arial, sans-serif" font-size="21" font-weight="600"
        fill="#9aa8c2">Portfolio</text>

  <text x="80" y="268" font-family="Segoe UI, Arial, sans-serif" font-size="70" font-weight="800"
        fill="#eaf0fb">Shailesh Patil</text>

  <text x="80" y="330" font-family="Consolas, monospace" font-size="27" font-weight="500"
        fill="#22d3ee">Full Stack Developer · 10 years</text>

  <text x="80" y="404" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#9aa8c2">
    Multi-tenant SaaS platforms — Laravel APIs,
  </text>
  <text x="80" y="442" font-family="Segoe UI, Arial, sans-serif" font-size="25" fill="#9aa8c2">
    Next.js frontends, shipped on AWS.
  </text>

  <!-- stack chips -->
  <g font-family="Consolas, monospace" font-size="18" fill="#9aa8c2">
    <rect x="80"  y="494" width="106" height="40" rx="20" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="133" y="520" text-anchor="middle">Laravel</text>
    <rect x="198" y="494" width="110" height="40" rx="20" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="253" y="520" text-anchor="middle">Next.js</text>
    <rect x="320" y="494" width="132" height="40" rx="20" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="386" y="520" text-anchor="middle">TypeScript</text>
    <rect x="464" y="494" width="132" height="40" rx="20" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.12"/>
    <text x="530" y="520" text-anchor="middle">PostgreSQL</text>
  </g>

  <!-- portrait frame -->
  <rect x="${PX - 8}" y="${PY - 8}" width="${PW + 16}" height="${PH + 16}" rx="34"
        fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.16"/>
</svg>`;

await sharp(Buffer.from(bg))
  .composite([{ input: portrait, top: PY, left: PX }])
  .png({ quality: 92 })
  .toFile(join(ROOT, 'public/og.png'));

const stat = (await import('node:fs')).statSync(join(ROOT, 'public/og.png'));
console.log(`og.png written — ${(stat.size / 1024).toFixed(1)} kB`);
