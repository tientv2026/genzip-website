// Thông tin sản phẩm dùng chung. Chỉ ghi đúng những gì app đã làm được (không bịa số liệu).

export const formats = {
  read: ['RAR4/RAR5', 'ZIP', '7z', 'TAR', 'GZ', 'BZ2', 'XZ', 'ZST', 'ISO', 'CAB', 'WIM', '.001'],
  create: ['ZIP', '7z', 'TAR'],
  /** Thêm/xoá/đổi tên trong tệp nén đang mở. */
  edit: ['ZIP', '7z', 'TAR'],
  /** Tự giải nén .exe tạo từ 7z. */
  sfx: '7z → .exe',
};

// Microsoft Store là kênh phát hành chính thức duy nhất cho người dùng (identity ThtD.GenZip, nhà phát hành "Dạ Trư").
// Công khai trên Store (Public audience) từ 4/11/2026. Để trống = nút hiện "Sắp có trên Microsoft Store".
export const storeId = '9PLW8MXQBT2Q';
export const storeUrl = `https://apps.microsoft.com/detail/${storeId}`;
export const publisher = 'Dạ Trư';

// Khớp crates/genzip-ui/src/support_info.rs trong repo app.
export const support = {
  website: 'https://genzip.net',
  email: 'info@tientv.com',
  paypal: 'https://paypal.me/tientv',
  bank: { name: 'ACB', bin: '970416', holder: 'TRUONG VIET TIEN', account: '168798149' },
  /** Mã VietQR tĩnh (NAPAS, không số tiền), sinh cùng thuật toán với app. */
  qr: '/qr/vietqr.svg',
};
