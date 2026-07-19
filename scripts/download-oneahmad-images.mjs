/**
 * Downloads Unsplash images for ONE AHMAD hero, editorial banners, and new products.
 * Uses public images.unsplash.com URLs only — no API key.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

const TARGETS = [
  { file: "hero/hero-1.jpg", photo: "photo-1618221195710-dd95b93b4493", width: 1920 },
  { file: "hero/hero-2.jpg", photo: "photo-1550009158-9ebf69173e03", width: 1920 },
  { file: "hero/hero-3.jpg", photo: "photo-1616486338812-3dadae4b4ace", width: 1920 },
  { file: "hero/hero-4.jpg", photo: "photo-1600210492486-724fe5c67fb0", width: 1920 },
  { file: "banners/collection-1.jpg", photo: "photo-1586023492125-27b2c045efd7", width: 1600 },
  { file: "banners/collection-2.jpg", photo: "photo-1519389950473-47ba0277781c", width: 1600 },
  { file: "banners/collection-3.jpg", photo: "photo-1540555700478-4be289fbecef", width: 1600 },
  { file: "banners/collection-4.jpg", photo: "photo-1490481651871-ab68de25d43d", width: 1600 },
  { file: "banners/about.jpg", photo: "photo-1600585154340-be6161a56a0c", width: 1600 },
  { file: "banners/featured.jpg", photo: "photo-1600607687939-ce8a6c25118c", width: 1600 },
  { file: "products/ceramic-table-lamp-1.jpg", photo: "photo-1507473885765-e6ed057f782c", width: 1000 },
  { file: "products/ceramic-table-lamp-2.jpg", photo: "photo-1513506003901-1e6a229e2d15", width: 1000 },
  { file: "products/smart-humidifier-1.jpg", photo: "photo-1585771724684-38269d6639fd", width: 1000 },
  { file: "products/smart-humidifier-2.jpg", photo: "photo-1558618666-fcd25c85cd64", width: 1000 },
  { file: "products/linen-throw-blanket-1.jpg", photo: "photo-1584100936595-c0654b55a2e2", width: 1000 },
  { file: "products/linen-throw-blanket-2.jpg", photo: "photo-1631049307264-da0ec9d70304", width: 1000 },
  { file: "products/marble-serving-board-1.jpg", photo: "photo-1606313564200-e75d5e30476c", width: 1000 },
  { file: "products/marble-serving-board-2.jpg", photo: "photo-1578662996442-48f60103fc96", width: 1000 },
  { file: "products/brass-desk-organizer-1.jpg", photo: "photo-1487017159836-4e23ece2e4cf", width: 1000 },
  { file: "products/brass-desk-organizer-2.jpg", photo: "photo-1497366216548-37526070297c", width: 1000 },
  { file: "products/silk-pillowcase-set-1.jpg", photo: "photo-1631679706909-1844bbd07221", width: 1000 },
  { file: "products/silk-pillowcase-set-2.jpg", photo: "photo-1522771739844-6a9f6d5f14af", width: 1000 },
  { file: "products/matte-water-bottle-1.jpg", photo: "photo-1602143407151-7111542cc6b4", width: 1000 },
  { file: "products/matte-water-bottle-2.jpg", photo: "photo-1523362628745-0d3690666b1d", width: 1000 },
  { file: "products/sculptural-candle-set-1.jpg", photo: "photo-1603006905004-ce0179ad0000", width: 1000 },
  { file: "products/sculptural-candle-set-2.jpg", photo: "photo-1600880292203-757bb62b4baf", width: 1000 },
  { file: "products/woven-storage-baskets-1.jpg", photo: "photo-1595428774223-ef52624120d2", width: 1000 },
  { file: "products/woven-storage-baskets-2.jpg", photo: "photo-1616046220798-a54599dc2a2c", width: 1000 },
  { file: "products/minimal-wall-clock-1.jpg", photo: "photo-1509042239860-f550ce710b93", width: 1000 },
  { file: "products/minimal-wall-clock-2.jpg", photo: "photo-1563861826100-9cb868fdbe1c", width: 1000 },
  { file: "products/oak-phone-stand-1.jpg", photo: "photo-1512499617640-c74ae3a79d37", width: 1000 },
  { file: "products/oak-phone-stand-2.jpg", photo: "photo-1586953208448-b95a79798f07", width: 1000 },
  { file: "products/amber-glass-diffuser-1.jpg", photo: "photo-1608571423902-eed4a5bb9379", width: 1000 },
  { file: "products/amber-glass-diffuser-2.jpg", photo: "photo-1556228578-8c89e6adf883", width: 1000 },
];

const FALLBACK_POOL = [
  "photo-1618221195710-dd95b93b4493",
  "photo-1550009158-9ebf69173e03",
  "photo-1616486338812-3dadae4b4ace",
  "photo-1600210492486-724fe5c67fb0",
  "photo-1586023492125-27b2c045efd7",
  "photo-1519389950473-47ba0277781c",
  "photo-1540555700478-4be289fbecef",
  "photo-1490481651871-ab68de25d43d",
  "photo-1600585154340-be6161a56a0c",
  "photo-1600607687939-ce8a6c25118c",
  "photo-1507473885765-e6ed057f782c",
  "photo-1513506003901-1e6a229e2d15",
  "photo-1585771724684-38269d6639fd",
  "photo-1558618666-fcd25c85cd64",
  "photo-1584100936595-c0654b55a2e2",
  "photo-1631049307264-da0ec9d70304",
  "photo-1606313564200-e75d5e30476c",
  "photo-1578662996442-48f60103fc96",
  "photo-1487017159836-4e23ece2e4cf",
  "photo-1497366216548-37526070297c",
  "photo-1631679706909-1844bbd07221",
  "photo-1522771739844-6a9f6d5f14af",
  "photo-1602143407151-7111542cc6b4",
  "photo-1523362628745-0d3690666b1d",
  "photo-1600880292203-757bb62b4baf",
  "photo-1595428774223-ef52624120d2",
  "photo-1616046220798-a54599dc2a2c",
  "photo-1509042239860-f550ce710b93",
  "photo-1563861826100-9cb868fdbe1c",
  "photo-1512499617640-c74ae3a79d37",
  "photo-1586953208448-b95a79798f07",
  "photo-1608571423902-eed4a5bb9379",
  "photo-1556228578-8c89e6adf883",
  "photo-1600566753086-00f18fb6b3ea",
  "photo-1600585154526-990dced4db0d",
  "photo-1493666438817-866a91353ca9",
  "photo-1567538096630-e0c55bd125f6",
  "photo-1615529328331-f8917597711f",
  "photo-1556228453-efd6c1ff04f6",
  "photo-1616627502968-858f7b39f574",
  "photo-1556912173-3bb406ef7e77",
  "photo-1570172619644-df0cb7bf0a08",
  "photo-1519823551278-64ae032d27e0",
  "photo-1615873964743-90a0b759fc5e",
  "photo-1595514537822-8e284785127e",
];

function unsplashUrl(photoId, width) {
  return `https://images.unsplash.com/${photoId}?fm=jpg&q=85&w=${width}&auto=format&fit=crop`;
}

async function download(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "OneAhmadCommerce/1.0 (image-gen)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) throw new Error("File too small");
  return buf;
}

async function main() {
  const used = new Set();
  let success = 0;
  let failed = 0;

  for (const target of TARGETS) {
    const dest = path.join(PUBLIC, target.file);
    fs.mkdirSync(path.dirname(dest), { recursive: true });

    const candidates = [target.photo, ...FALLBACK_POOL.filter((p) => p !== target.photo)];
    let saved = false;

    for (const photoId of candidates) {
      if (used.has(photoId)) continue;
      try {
        const buf = await download(unsplashUrl(photoId, target.width));
        fs.writeFileSync(dest, buf);
        used.add(photoId);
        saved = true;
        success++;
        console.log(`✓ ${target.file} ← ${photoId}`);
        break;
      } catch (err) {
        console.warn(`  retry ${target.file} (${photoId}): ${err.message}`);
      }
    }

    if (!saved) {
      failed++;
      console.error(`✗ failed: ${target.file}`);
    }
  }

  console.log(`\nDone: ${success} downloaded, ${failed} failed`);
  if (failed > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
