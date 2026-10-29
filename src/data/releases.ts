// Danh sách phiên bản đã/sắp phát hành — nguồn duy nhất cho trang Tải về, Lịch sử phiên bản, trang chủ.
// Ghi chú phát hành (có gì mới) nằm ở src/content/releases/{vi,en}/<version>.md.
// Khi phát hành: thêm một mục lên ĐẦU mảng, điền date + downloads, viết ghi chú VI/EN, commit, push.
//
// Lưu ý: app tự cập nhật qua feed Velopack có chữ ký (docs/UPDATE_MECHANISM.md ở repo app),
// KHÔNG đọc file này. Website chỉ hiển thị thông tin và link tải.

export type Channel = 'stable' | 'beta';

export interface DownloadFile {
  url: string;
  /** Hiển thị cho người đọc, ví dụ "12.4 MB". */
  size: string;
  sha256: string;
}

export interface Release {
  version: string;
  /** ISO yyyy-mm-dd; để trống = chưa phát hành (hiện "Sắp phát hành"). */
  date?: string;
  channel: Channel;
  downloads?: {
    installer?: DownloadFile;
    portable?: DownloadFile;
  };
}

export const releases: Release[] = [
  {
    version: '1.0.0',
    channel: 'stable',
  },
];

export function isReleased(r: Release): boolean {
  return Boolean(r.date);
}

/** Bản mới nhất đã phát hành của kênh; undefined nếu chưa có. */
export function getLatestRelease(channel: Channel = 'stable'): Release | undefined {
  return releases.filter((r) => r.channel === channel && isReleased(r)).sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))[0];
}

/** Bản sắp tới hoặc mới nhất — dùng khi chưa có bản nào phát hành để vẫn hiện số phiên bản. */
export function getCurrentRelease(channel: Channel = 'stable'): Release {
  return getLatestRelease(channel) ?? releases.find((r) => r.channel === channel) ?? releases[0];
}
