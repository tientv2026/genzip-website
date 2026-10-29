import type { APIRoute } from 'astro';
import { getLatestRelease, releases } from '../data/releases';

export const prerender = true;

// Thông tin công khai cho người đọc/công cụ; không phải feed cập nhật của ứng dụng.
export const GET: APIRoute = () => new Response(JSON.stringify({
  latest: {
    stable: getLatestRelease('stable') ?? null,
    beta: getLatestRelease('beta') ?? null,
  },
  releases,
}), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
