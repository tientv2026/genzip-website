import { readFileSync } from 'node:fs';
import { join } from 'node:path';

export interface SizedImage {
  src: string;
  width: number;
  height: number;
}

const cache = new Map<string, SizedImage>();

/** Đọc kích thước ảnh trong public/ lúc build (PNG, JPEG, WebP) để ghi width/height và meta OG. */
export function publicImage(src: string): SizedImage {
  const hit = cache.get(src);
  if (hit) return hit;
  const buf = readFileSync(join(process.cwd(), 'public', src));
  const size = readSize(buf);
  if (!size) throw new Error(`Không đọc được kích thước ảnh ${src}`);
  const image = { src, ...size };
  cache.set(src, image);
  return image;
}

function readSize(b: Buffer): { width: number; height: number } | undefined {
  // PNG: IHDR ngay sau chữ ký 8 byte.
  if (b.readUInt32BE(0) === 0x89504e47) return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  // JPEG: tìm marker SOF0–SOF15 (trừ DHT/JPG/DAC).
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const marker = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
      }
      i += 2 + len;
    }
    return undefined;
  }
  // WebP: RIFF....WEBP rồi VP8 / VP8L / VP8X.
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = b.toString('ascii', 12, 16);
    if (chunk === 'VP8 ') return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === 'VP8L') {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (chunk === 'VP8X') return { width: b.readUIntLE(24, 3) + 1, height: b.readUIntLE(27, 3) + 1 };
  }
  return undefined;
}
