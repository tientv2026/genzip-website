// Chép tài liệu pháp lý, changelog, icon và ảnh chụp app thật từ repo GenZip sang website,
// để nội dung trên web luôn khớp với ứng dụng.
// Dùng: npm run sync            (mặc định repo app ở ../GenZip rust)
//       GENZIP_APP_DIR="D:\GenZip" npm run sync
import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const app = resolve(process.env.GENZIP_APP_DIR ?? join(root, '..', 'GenZip rust'));

if (!existsSync(join(app, 'Cargo.toml'))) {
  console.error(`Không thấy repo app tại: ${app}\nĐặt biến GENZIP_APP_DIR trỏ tới repo GenZip.`);
  process.exit(1);
}

const copied = [];
function copy(from, to) {
  const src = join(app, from);
  const dst = join(root, to);
  if (!existsSync(src)) {
    console.warn(`Bỏ qua (không có): ${from}`);
    return;
  }
  mkdirSync(dirname(dst), { recursive: true });
  cpSync(src, dst);
  copied.push(`${from} -> ${to}`);
}

// Markdown pháp lý: thêm frontmatter `title` lấy từ dòng `# ...` đầu tiên.
function copyMarkdown(from, to) {
  const src = join(app, from);
  if (!existsSync(src)) {
    console.warn(`Bỏ qua (không có): ${from}`);
    return;
  }
  const text = readFileSync(src, 'utf8').replace(/^\uFEFF/, '');
  const match = text.match(/^#\s+(.+)$/m);
  const title = match ? match[1].trim() : from;
  const body = match ? text.replace(match[0], '').trimStart() : text;
  const dst = join(root, to);
  mkdirSync(dirname(dst), { recursive: true });
  writeFileSync(dst, `---\ntitle: ${JSON.stringify(title)}\nsource: ${JSON.stringify(from)}\n---\n\n${body}`);
  copied.push(`${from} -> ${to}`);
}

for (const lang of ['vi', 'en']) {
  copyMarkdown(`assets/legal/EULA.${lang}.md`, `src/content/legal/${lang}/terms.md`);
  copyMarkdown(`assets/legal/PRIVACY.${lang}.md`, `src/content/legal/${lang}/privacy.md`);
}
copyMarkdown('CHANGELOG.md', 'src/content/legal/vi/changelog.md');
copyMarkdown('THIRD_PARTY_NOTICES.md', 'src/content/legal/en/licenses.md');

for (const size of [32, 64, 128, 256, 512]) {
  copy(`assets/icons/genzip-${size}.png`, `public/brand/genzip-${size}.png`);
}
copy('assets/icons/genzip.ico', 'public/favicon.ico');

// Ảnh chụp app thật (harness `genzip --screenshot`).
const shots = {
  'docs/evidence/m3/ui3': ['home'],
};
for (const [dir, names] of Object.entries(shots)) {
  for (const name of names) {
    for (const lang of ['vi', 'en']) {
      for (const theme of ['light', 'dark']) {
        copy(`${dir}/${name}_${lang}_${theme}.png`, `public/screenshots/${name}-${lang}-${theme}.png`);
      }
    }
  }
}
// Hộp thoại mới nhất: tên trên web -> ảnh <gốc>_<lang>_<theme>.png trong repo app.
const dialogs = {
  main: 'docs/evidence/preview-pane/main-preview-text',
  create: 'docs/evidence/ui-chg-005/create-window',
  extract: 'docs/evidence/fix-003/extract',
  'test-result': 'docs/evidence/fix-003/test-result',
  conflict: 'docs/evidence/fix-003/conflict',
  queue: 'docs/evidence/batch-queue/queue-window',
  'preview-image': 'docs/evidence/preview-pane/main-preview-image',
  'preview-text': 'docs/evidence/preview-pane/main-preview-text',
  support: 'docs/evidence/ui-chg-010c/support',
};
for (const lang of ['vi', 'en']) {
  for (const theme of ['light', 'dark']) {
    for (const [name, from] of Object.entries(dialogs)) {
      copy(`${from}_${lang}_${theme}.png`, `public/screenshots/${name}-${lang}-${theme}.png`);
    }
    copy(`docs/evidence/sfx/sfx_${lang}_${theme}_enabled.png`, `public/screenshots/sfx-${lang}-${theme}.png`);
  }
}

console.log(`Đã đồng bộ ${copied.length} tệp từ ${app}`);
