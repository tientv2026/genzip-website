import { defineConfig } from 'astro/config';

// Tiếng Việt là mặc định (không tiền tố); tiếng Anh ở /en/.
export default defineConfig({
  site: 'https://genzip.net',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
