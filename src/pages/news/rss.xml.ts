import type { APIRoute } from 'astro';
import { getNews } from '../../components/news/content';
import { newsRss } from '../../components/news/rss';

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('Configure Astro.site to generate the news RSS feed.');
  return new Response(newsRss(await getNews('vi', false), site, 'vi'), {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
