import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Bài hướng dẫn: src/content/guide/<lang>/<slug>.md
const guide = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guide' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number(),
  }),
});

// Pháp lý + changelog: sinh bởi `npm run sync` từ repo app, không sửa tay.
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    source: z.string().optional(),
  }),
});

// Ghi chú phát hành: src/content/releases/<lang>/<version>.md (id: "vi/0.9.0-beta.1").
// Số phiên bản, ngày, link tải nằm ở src/data/releases.ts.
const releases = defineCollection({
  // Giữ nguyên tên tệp làm id (mặc định Astro bỏ dấu chấm: "0.9.0-beta.1" -> "090-beta1").
  loader: glob({ pattern: '**/*.md', base: './src/content/releases', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    /** Một câu tóm tắt hiện trên thẻ phiên bản. */
    summary: z.string(),
  }),
});

// Tin tức / blog: src/content/news/<lang>/<slug>.md (id: "vi/ra-mat-genzip").
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    /** Ảnh bìa trong public/, ví dụ "/news/ra-mat.png". */
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guide, legal, releases, news };
