import type { Lang } from '../../i18n/ui';
import type { NewsEntry } from './content';

function xml(value: string) {
  const entities: Record<string, string> = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
  };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export function newsRss(posts: NewsEntry[], site: URL, lang: Lang) {
  const c = {
    vi: { title: 'Tin tức & cập nhật — GenZip', description: 'Thông báo, cập nhật sản phẩm và những chia sẻ từ GenZip.' },
    en: { title: 'News & updates — GenZip', description: 'Announcements, product updates and stories from GenZip.' },
  }[lang];
  const path = lang === 'vi' ? '/news' : '/en/news';
  const link = new URL(path, site).href;
  const feed = new URL(`${path}/rss.xml`, site).href;
  const items = posts
    .filter((entry) => entry.id.startsWith(`${lang}/`) && !entry.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id))
    .map((entry) => {
      const slug = entry.id.slice(entry.id.indexOf('/') + 1);
      const url = xml(new URL(`${path}/${encodeURIComponent(slug)}`, site).href);
      return `    <item>
      <title>${xml(entry.data.title)}</title>
      <description>${xml(entry.data.description)}</description>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${entry.data.date.toUTCString()}</pubDate>
${entry.data.tags.map((tag) => `      <category>${xml(tag)}</category>`).join('\n')}
    </item>`;
    }).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(c.title)}</title>
    <link>${xml(link)}</link>
    <description>${xml(c.description)}</description>
    <language>${lang}</language>
    <atom:link href="${xml(feed)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;
}
