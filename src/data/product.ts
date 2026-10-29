// Thông tin sản phẩm dùng chung. Chỉ ghi đúng những gì app đã làm được (không bịa số liệu).

export const formats = {
  read: ['RAR4/RAR5', 'ZIP', '7z', 'TAR', 'GZ', 'BZ2', 'XZ', 'ZST', 'ISO', 'CAB', 'WIM', '.7z.001'],
  create: ['ZIP', '7z', 'TAR'],
};

// TODO(chủ dự án): thay bằng link Store thật khi có Product ID từ Partner Center.
export const storeUrl = 'https://apps.microsoft.com/';

// TODO(chủ dự án): điền khi phát hành 1.0 (repo công khai chứa file cài).
export const release = {
  version: '1.0.0',
  date: '',
  installer: { url: '', size: '', sha256: '' },
  portable: { url: '', size: '', sha256: '' },
};

// Khớp crates/genzip-ui/src/support_info.rs trong repo app.
export const support = {
  website: 'https://genzip.net',
  email: 'info@tientv.com',
  paypal: 'https://paypal.me/tientv',
  bank: { name: 'ACB', holder: 'TRUONG VIET TIEN', account: '168798149' },
};
