import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';

const site = 'https://genzip.net';

// Sinh sitemap.xml sau khi build, không cần thêm thư viện. Mỗi trang kèm bản ngôn ngữ kia nếu có.
function sitemap() {
  return {
    name: 'genzip-sitemap',
    hooks: {
      'astro:build:done': async ({ pages, dir }) => {
        const paths = pages
          .map(({ pathname }) => '/' + pathname.replace(/^\/|\/$/g, ''))
          .map((p) => (p === '/' ? '/' : p + '/'))
          .filter((p) => !/^\/(en\/)?404\/$/.test(p))
          .sort();
        const set = new Set(paths);
        const twin = (p) => (p.startsWith('/en/') ? p.slice(3) : p === '/en/' ? '/' : '/en' + p);
        const alt = (p) => {
          const other = p === '/en/' ? '/' : twin(p);
          if (!set.has(other)) return '';
          const [vi, en] = p.startsWith('/en/') ? [other, p] : [p, other];
          return `\n    <xhtml:link rel="alternate" hreflang="vi" href="${site}${vi}"/>` +
            `\n    <xhtml:link rel="alternate" hreflang="en" href="${site}${en}"/>`;
        };
        const body = paths.map((p) => `  <url>\n    <loc>${site}${p}</loc>${alt(p)}\n  </url>`).join('\n');
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;
        await writeFile(new URL('sitemap.xml', dir), xml);
      },
    },
  };
}

// Tiếng Việt là mặc định (không tiền tố); tiếng Anh ở /en/.
export default defineConfig({
  site,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
});
