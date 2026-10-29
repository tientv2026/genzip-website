// Số đo tốc độ thật từ repo app: docs/PERF_REVIEW.md (`cargo xtask bench --runs 3 --check`).
// Không tự sửa số. Khi phiên app gửi bảng mới, thay `measured`, `rows` (và `machine` nếu đổi máy).

export interface BenchRow {
  /** Khoá thao tác: extract | test | create. */
  op: 'extract' | 'test' | 'create';
  /** Bộ dữ liệu: big = 1 tệp 512 MiB, small = 20 000 tệp nhỏ. */
  data: 'big' | 'small';
  format: 'zip' | '7z';
  /** Thời gian, giây (trung vị 3 lần). */
  sevenZip: number;
  genzip: number;
}

export const benchmark = {
  measured: '2026-10-29',
  version: '0.9.0-beta.1',
  engine: '7-Zip 26.05',
  runs: 3,
  machine: {
    cpu: 'Intel Xeon E5-2680 v4 (14 nhân / 28 luồng)',
    cpuEn: 'Intel Xeon E5-2680 v4 (14 cores / 28 threads)',
    ram: '64 GB',
    disk: 'SSD SATA TEAM T253512GB',
    os: 'Windows 11 Pro (build 26200)',
  },
  rows: [
    { op: 'extract', data: 'big', format: 'zip', sevenZip: 2.77, genzip: 2.83 },
    { op: 'extract', data: 'small', format: 'zip', sevenZip: 15.71, genzip: 17.07 },
    { op: 'test', data: 'big', format: 'zip', sevenZip: 2.43, genzip: 2.67 },
    { op: 'test', data: 'small', format: 'zip', sevenZip: 1.4, genzip: 1.61 },
    { op: 'extract', data: 'big', format: '7z', sevenZip: 2.53, genzip: 2.69 },
    { op: 'extract', data: 'small', format: '7z', sevenZip: 14.71, genzip: 16.88 },
    { op: 'test', data: 'big', format: '7z', sevenZip: 2.3, genzip: 2.44 },
    { op: 'test', data: 'small', format: '7z', sevenZip: 1.34, genzip: 1.38 },
    { op: 'create', data: 'big', format: 'zip', sevenZip: 27.53, genzip: 28.75 },
    { op: 'create', data: 'small', format: 'zip', sevenZip: 2.43, genzip: 2.4 },
    { op: 'create', data: 'small', format: '7z', sevenZip: 51.48, genzip: 51.67 },
  ] satisfies BenchRow[],
};
