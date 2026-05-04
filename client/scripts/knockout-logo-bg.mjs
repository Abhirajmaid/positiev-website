/**
 * Writes logo_2_transparent.png: removes near-black canvas from logo_2.png for dark UI.
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const input = path.join(root, 'public', 'logo_2.png');
const output = path.join(root, 'public', 'logo_2_transparent.png');

const BLACK_THRESH = 40; // RGB below this → transparent

const img = sharp(input);
const { data, info } = await img.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const px = Buffer.from(data);
const w = info.width;
const h = info.height;

for (let i = 0; i < px.length; i += 4) {
  const r = px[i];
  const g = px[i + 1];
  const b = px[i + 2];
  if (r < BLACK_THRESH && g < BLACK_THRESH && b < BLACK_THRESH) {
    px[i + 3] = 0;
  }
}

await sharp(px, { raw: { width: w, height: h, channels: 4 } })
  .png()
  .toFile(output);

console.log('Wrote', output);
