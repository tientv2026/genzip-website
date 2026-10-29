import { getCollection, type CollectionEntry } from 'astro:content';
import { localePath, type Lang } from '../../i18n/ui';

export type NewsEntry = CollectionEntry<'news'>;

export async function getNews(lang: Lang, includeDrafts = import.meta.env.DEV) {
  const posts = await getCollection('news', (entry) =>
    entry.id.startsWith(`${lang}/`) && (includeDrafts || !entry.data.draft),
  );
  return posts.sort((a, b) =>
    b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id),
  );
}

export function newsSlug(entry: NewsEntry) {
  return entry.id.slice(entry.id.indexOf('/') + 1);
}

export function newsPath(entry: NewsEntry, lang: Lang) {
  return localePath(`/news/${newsSlug(entry)}`, lang);
}

export function formatNewsDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}
