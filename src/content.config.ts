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

export const collections = { guide, legal };
