---
title: Mở tệp nén tải từ mạng sao cho an toàn
description: Tệp nén là cách phổ biến để phát tán mã độc. Những gì GenZip tự bảo vệ cho bạn và vài thói quen nên có.
date: 2026-10-29
tags: [Bảo mật, Mẹo]
cover: /screenshots/test-result-vi-light.png
draft: false
---

Tệp nén đính kèm email hay tải từ mạng là một trong những cách phổ biến nhất để phát tán mã độc. Bản thân việc mở tệp nén để xem danh sách thì không nguy hiểm; rủi ro nằm ở **tệp bên trong** và **nơi chúng được giải nén ra**. GenZip có sẵn vài lớp bảo vệ, phần còn lại là thói quen của bạn.

## GenZip tự bảo vệ những gì

**Chặn đường dẫn nguy hiểm.** Một tệp nén có thể được làm ra để chứa tên như `../../Windows/...`, nhằm ghi tệp ra ngoài thư mục bạn chọn. GenZip chặn các đường dẫn kiểu này, cùng với các tên thiết bị đặc biệt của Windows (như `CON`, `NUL`).

**Giới hạn "bom nén".** Có những tệp nén chỉ vài KB nhưng khi giải ra thành hàng trăm GB, làm đầy ổ đĩa. GenZip đặt giới hạn an toàn về số mục, tỉ lệ nở, dung lượng và độ sâu thư mục khi giải nén.

**Giữ Mark of the Web.** Khi bạn giải nén một tệp tải từ Internet, Windows vẫn biết các tệp bên trong đến từ mạng, nên SmartScreen và Office tiếp tục cảnh báo như bình thường.

**Hỏi trước khi mở tệp có thể chạy mã.** Nếu bạn nhấn đúp một tệp `.exe`, `.js`, `.html`… ngay trong tệp nén, GenZip sẽ hỏi lại trước khi mở.

## Thói quen nên có

- **Xem trước khi giải nén.** Mở tệp nén để xem danh sách. Một "hoá đơn" mà bên trong là `hoadon.pdf.exe` hay `.js` thì gần như chắc chắn là lừa đảo. Ảnh và văn bản có thể xem ngay bằng **F3** mà không cần giải nén.
- **Kiểm tra trước khi dùng.** Nút **Kiểm tra** trên thanh công cụ đọc lại toàn bộ tệp nén và báo lỗi nếu tệp hỏng hoặc tải thiếu. Bạn có thể **Xuất báo cáo** dạng `.txt`.
- **Cẩn thận với tệp có mật khẩu từ người lạ.** Kẻ xấu hay đặt mật khẩu cho tệp nén để phần mềm diệt virus không quét được bên trong. Nếu không chờ tệp đó, đừng mở.
- **Đừng tắt cảnh báo của Windows** chỉ vì muốn mở tệp nhanh.

## Tải GenZip ở đâu cho an toàn?

Chính GenZip cũng có thể bị giả mạo. GenZip **chỉ phát hành qua Microsoft Store**, không có bộ cài tải tự do. Trang nào mời bạn tải "GenZip.exe" đều không phải của chúng tôi.

Xem thêm: [Kiểm tra tệp nén](/guide/test) và [Câu hỏi thường gặp](/faq).
