---
title: "Tệp tự giải nén .exe: khi nào nên dùng, khi nào không"
description: Tệp .exe tự giải nén giúp người nhận mở được dù không cài trình nén. Cách tạo bằng GenZip và những điều cần cân nhắc.
date: 2026-10-29
tags: [Hướng dẫn]
cover: /news/tao-tep-tu-giai-nen/vi-16x9.webp
coverAlt: Biểu tượng GenZip, dòng chữ "Tệp tự giải nén .exe" và hộp thoại Tạo file nén với ô Tự giải nén được khoanh
images:
  og: /news/tao-tep-tu-giai-nen/vi-og.jpg
  thumb: /news/tao-tep-tu-giai-nen/vi-thumb.webp
  standard: /news/tao-tep-tu-giai-nen/vi-4x3.webp
  square: /news/tao-tep-tu-giai-nen/vi-1x1.webp
draft: false
---

Bạn cần gửi một bộ tài liệu cho người không rành máy tính, và không chắc họ có trình mở 7Z. Một **tệp tự giải nén** (SFX) là tệp `.exe` chứa sẵn dữ liệu nén: người nhận chỉ cần chạy nó, chọn thư mục, và tệp được giải ra.

## Tạo tệp tự giải nén trong GenZip

1. Mở **Tạo file nén**, chọn định dạng **7Z**.
2. Trong cột **Thiết lập nén**, tick **Tự giải nén (.exe)**. Đuôi tệp đổi thành `.exe`.
3. Chọn cấu hình, đặt mật khẩu nếu cần, rồi bấm **Tạo file nén**.

GenZip ghép dữ liệu 7Z với **module tự giải nén chính thức của 7-Zip**, không dùng module tự viết hay sửa đổi.

Giới hạn: chỉ áp dụng cho **7Z** và **không chia phần** được.

## Khi nào nên dùng

- Người nhận dùng Windows và có thể không có trình mở 7Z.
- Phát tài liệu nội bộ cho nhiều người, muốn họ chỉ bấm một lần.
- Muốn có tỉ lệ nén tốt của 7Z mà vẫn dễ mở.

## Khi nào không nên

- **Gửi cho người lạ hoặc qua email.** Nhiều dịch vụ email chặn tệp `.exe`, và người nhận cẩn thận sẽ (đúng ra là nên) ngại chạy một tệp `.exe` không rõ nguồn. Gửi `.zip` hoặc `.7z` thường thân thiện hơn.
- **Người nhận dùng macOS, Linux hoặc điện thoại.** Tệp `.exe` chỉ chạy trên Windows.
- **Khi bạn không cần.** Nếu người nhận đã có trình nén, một tệp `.7z` là đủ.

## Một lời nhắc về an toàn

Tự giải nén là chương trình chạy được, vì vậy hãy đối xử với tệp `.exe` tự giải nén bạn **nhận** như mọi tệp `.exe` khác: chỉ chạy khi biết rõ người gửi.

Xem thêm: [Toàn bộ tuỳ chọn tạo nén](/features).
