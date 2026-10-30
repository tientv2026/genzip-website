# Cách viết và đăng tin tức GenZip

## 1. Tạo bài viết cho hai ngôn ngữ

Tạo hai tệp Markdown:

- Tiếng Việt: `src/content/news/vi/<slug>.md`
- Tiếng Anh: `src/content/news/en/<slug>.md`

Dùng cùng một slug cho hai bản dịch để nút đổi ngôn ngữ mở đúng bài tương ứng. Slug nên viết thường, không dấu, nối từ bằng dấu gạch ngang, ví dụ `cap-nhat-genzip`. Không tạo thư mục con trong thư mục ngôn ngữ.

## 2. Điền thông tin đầu bài

Ví dụ bản tiếng Việt (thay nội dung và ngày trước khi đăng):

```markdown
---
title: Tin tức từ GenZip
description: Một câu ngắn giới thiệu nội dung bài viết.
date: 2026-10-29
tags: [Thông báo, Cập nhật]
cover: /news/cap-nhat-genzip.png
draft: true
---

Nội dung mở đầu bài viết.

## Tiêu đề mục

Viết nội dung bằng Markdown và chỉ nêu thông tin đã được xác nhận.

![Mô tả nội dung ảnh](/news/chi-tiet-genzip.png)
```

Các trường:

| Trường | Ý nghĩa |
| --- | --- |
| `title` | Bắt buộc. Tiêu đề bài viết theo ngôn ngữ của tệp. |
| `description` | Bắt buộc. Mô tả ngắn cho thẻ bài viết, trang bài và RSS. |
| `date` | Bắt buộc. Ngày theo dạng `YYYY-MM-DD`; danh sách sắp xếp mới nhất trước. |
| `tags` | Danh sách chủ đề; có thể dùng `[]` hoặc bỏ qua. Viết bằng ngôn ngữ tương ứng và giữ cách viết nhất quán để bộ lọc gom đúng chủ đề. |
| `cover` | Không bắt buộc. Đường dẫn ảnh bắt đầu từ `/news/`; bỏ cả dòng nếu chưa có ảnh. Tiêu đề bài được dùng làm văn bản thay thế của ảnh bìa. |
| `coverAlt` | Không bắt buộc. Văn bản thay thế cho ảnh bìa và ảnh chia sẻ; mặc định là tiêu đề bài. |
| `images` | Không bắt buộc. Ảnh đại diện thêm: `og` (1200×630, dùng cho Facebook/Zalo/X), `thumb` (16:9, ví dụ 800×450, cho danh sách tin), `standard` (4:3) và `square` (1:1) cho dữ liệu schema.org. Thiếu ảnh nào thì dùng `cover`. Kích thước ảnh được đọc tự động lúc build. Ví dụ đầy đủ: bài `genzip-beta-qua-kiem-duyet-store`, ảnh sinh bằng `scripts/make-store-beta-cover.py`. |
| `pinned` | `true` để ghim bài lên đầu danh sách (mặc định `false`). |
| `draft` | `true` để giữ bản nháp, `false` để xuất bản. Mặc định là `false` nếu bỏ qua, vì vậy nên ghi rõ trường này. |

Nếu tiêu đề hoặc mô tả có ký tự đặc biệt của YAML như dấu `:`, hãy đặt giá trị trong dấu nháy. Bản tiếng Anh có cùng các trường, nội dung và chủ đề được dịch đầy đủ.

## 3. Thêm ảnh

Lưu ảnh trong `public/news/`, ví dụ `public/news/cap-nhat-genzip.png`; dùng đường dẫn `/news/cap-nhat-genzip.png` trong bài. Không ghi `public/` vào URL. Dùng ảnh trong dự án, không nhúng ảnh, font hoặc script từ CDN ngoài. Tối ưu dung lượng ảnh trước khi thêm và viết văn bản thay thế mô tả rõ nội dung cho ảnh trong thân bài.

## 4. Xem trước

Chạy:

```sh
npm run dev
```

Mở địa chỉ local do Astro in ra và kiểm tra:

- `/news` và `/en/news`: danh sách, ngày, chủ đề và bộ lọc.
- `/news/<slug>` và `/en/news/<slug>`: nội dung, ảnh, liên kết đổi ngôn ngữ.
- Giao diện sáng/tối, màn hình hẹp và điều hướng bằng bàn phím.

Bài `draft: true` chỉ hiện khi chạy dev và có nhãn “Bản nháp” / “Draft”. Bản production loại bản nháp khỏi danh sách, trang bài và bài viết liên quan. RSS luôn chỉ chứa bài đã xuất bản, kể cả khi chạy dev. Nếu chưa có bài xuất bản, danh sách production hiện thông báo trống cùng liên kết lịch sử phiên bản.

## 5. Xuất bản

Đặt `draft: false` ở cả hai bản dịch, kiểm tra nội dung và chạy:

```sh
npm run build
npm run preview
```

Kiểm tra lại các trang và RSS `/news/rss.xml`, `/en/news/rss.xml`. RSS tự tạo từ tiêu đề, mô tả, ngày và chủ đề của bài đã xuất bản; không cần sửa XML bằng tay. Ngày trong tương lai không tự hẹn giờ xuất bản: cờ `draft` quyết định trạng thái.

Sau khi kiểm tra xong, commit các tệp Markdown và ảnh rồi push lên nhánh xuất bản theo quy trình của dự án. Không cần chạy `npm run sync` để đăng tin; lệnh đó dành cho nội dung đồng bộ từ ứng dụng.
