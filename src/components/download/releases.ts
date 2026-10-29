import type { Lang } from '../../i18n/ui';

export function formatReleaseDate(date: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

/** So sánh SemVer, gồm cả thứ tự bản thử nghiệm (không cần thư viện ngoài). */
export function compareVersions(a: string, b: string): number {
  const [aCore, aPre] = a.split('+')[0].split(/-(.*)/);
  const [bCore, bPre] = b.split('+')[0].split(/-(.*)/);
  const aParts = aCore.split('.').map(Number);
  const bParts = bCore.split('.').map(Number);
  for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
    const difference = (aParts[i] ?? 0) - (bParts[i] ?? 0);
    if (difference) return difference;
  }
  if (aPre === bPre) return 0;
  if (!aPre) return 1;
  if (!bPre) return -1;
  const aIds = aPre.split('.');
  const bIds = bPre.split('.');
  for (let i = 0; i < Math.max(aIds.length, bIds.length); i++) {
    if (aIds[i] === undefined) return -1;
    if (bIds[i] === undefined) return 1;
    if (aIds[i] === bIds[i]) continue;
    const aNumeric = /^\d+$/.test(aIds[i]);
    const bNumeric = /^\d+$/.test(bIds[i]);
    if (aNumeric && bNumeric) return Number(aIds[i]) - Number(bIds[i]);
    if (aNumeric !== bNumeric) return aNumeric ? -1 : 1;
    return aIds[i] < bIds[i] ? -1 : 1;
  }
  return 0;
}
