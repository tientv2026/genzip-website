# GenZip website (genzip.net)

Website giới thiệu, tải về và hướng dẫn sử dụng GenZip. Site tĩnh **Astro**, song ngữ VI (mặc định) + EN, sáng/tối theo hệ thống, màu lấy từ app.

Tách riêng khỏi repo app (`GenZip rust`) để: repo app giữ Private, web công khai; CI của app không chạy khi sửa web; `node_modules` không vào repo app.

## Chạy

```powershell
npm install
npm run sync      # chép EULA, Privacy, CHANGELOG, giấy phép, icon, ảnh chụp app từ ..\GenZip rust
npm run dev       # http://localhost:4321
npm run build     # xuất ra dist/
```

Repo app ở chỗ khác: `$env:GENZIP_APP_DIR = "D:\GenZip"; npm run sync`.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `src/views/` | Nội dung từng trang (VI + EN trong cùng file) |
| `src/pages/`, `src/pages/en/` | Route — chỉ gọi view tương ứng |
| `src/content/guide/{vi,en}/` | Bài hướng dẫn (Markdown, `order` để sắp xếp) |
| `src/content/legal/` | **Sinh bởi `npm run sync`** — không sửa tay, sửa ở repo app |
| `src/data/product.ts` | Định dạng hỗ trợ, link Store, thông tin phát hành, ủng hộ |
| `src/i18n/ui.ts` | Chuỗi dùng chung (menu, footer…) |
| `src/styles/global.css` | Token màu (khớp `crates/genzip-ui/ui/theme.slint`) |
| `public/screenshots/` | Ảnh chụp app thật — **sinh bởi `npm run sync`** |
| `docs/WEBSITE_PLAN.md` | Kế hoạch nội dung + prompt thiết kế cho ChatGPT |

## Khi phát hành phiên bản mới

1. Ở repo app: cập nhật `CHANGELOG.md`, chụp lại ảnh (`tools/capture_all.ps1`) nếu UI đổi.
2. Ở đây: `npm run sync`, điền `release` trong `src/data/product.ts` (link, dung lượng, SHA-256), commit, push.

## Còn chờ chủ dự án

- Link Microsoft Store thật (`storeUrl`).
- Link file cài .exe / .zip và SHA-256 khi phát hành 1.0.
- Chọn nơi host (GitHub Pages / Cloudflare Pages) và trỏ tên miền genzip.net.

## Nguyên tắc nội dung

Chỉ ghi những gì app đã làm được; không bịa số liệu, lượt tải hay đánh giá; không dùng tên/logo trình nén khác để quảng bá. Ghi công 7-Zip (LGPL) ở footer và trang Giấy phép.
