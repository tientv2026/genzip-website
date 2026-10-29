// Thông tin sản phẩm dùng chung. Chỉ ghi đúng những gì app đã làm được (không bịa số liệu).

export const formats = {
  read: ['RAR4/RAR5', 'ZIP', '7z', 'TAR', 'GZ', 'BZ2', 'XZ', 'ZST', 'ISO', 'CAB', 'WIM', '.7z.001'],
  create: ['ZIP', '7z', 'TAR'],
};

// Microsoft Store là kênh phát hành chính thức duy nhất cho người dùng (identity ThtD.GenZip, nhà phát hành "Dạ Trư").
// Bản beta đang ở chế độ Private audience. Để trống = nút hiện "Sắp có trên Microsoft Store".
// Khi Store duyệt: điền dạng 'https://apps.microsoft.com/detail/<ProductID>'.
export const storeUrl = '';
export const publisher = 'Dạ Trư';

// Khớp crates/genzip-ui/src/support_info.rs trong repo app.
export const support = {
  website: 'https://genzip.net',
  email: 'info@tientv.com',
  paypal: 'https://paypal.me/tientv',
  bank: { name: 'ACB', holder: 'TRUONG VIET TIEN', account: '168798149' },
};
