---
title: Chia nhỏ tệp nén để gửi email, chép USB hay đĩa
description: Tệp quá lớn để gửi hoặc chép? Chia thành nhiều phần 100 MB, 700 MB hoặc 4 GB và ghép lại khi giải nén.
date: 2026-10-29
tags: [Hướng dẫn, Mẹo]
draft: false
---

Gửi một thư mục 3 GB qua email là không thể, chép một tệp 6 GB vào USB định dạng FAT32 cũng báo lỗi. Cách đơn giản là **chia tệp nén thành nhiều phần nhỏ**.

## Chia phần khi tạo tệp nén

Trong hộp thoại **Tạo file nén**, cột **Thiết lập nén** có ô **Chia phần**:

| Lựa chọn | Hợp với |
|---|---|
| **100 MB** | Gửi qua email hoặc dịch vụ giới hạn dung lượng mỗi tệp. |
| **700 MB** | Kích thước quen thuộc của đĩa CD, hoặc chia đều để tải lên từng phần. |
| **4 GB (FAT32)** | USB hay thẻ nhớ định dạng FAT32, vốn không chứa được tệp lớn hơn 4 GB. |
| **Tuỳ chỉnh** | Nhập con số bất kỳ, đơn vị MB hoặc GB. |

GenZip tạo ra các tệp nối tiếp nhau như `Du-an.7z.001`, `Du-an.7z.002`, `Du-an.7z.003`…

Lưu ý: tệp tự giải nén `.exe` không chia phần được. Nếu cần chia, hãy để định dạng 7Z hoặc ZIP thường.

## Ghép lại khi giải nén

Người nhận không cần ghép tay:

1. Để **tất cả các phần trong cùng một thư mục**, giữ nguyên tên.
2. Mở **phần đầu tiên** (`.001`) bằng GenZip.
3. Giải nén như bình thường; GenZip tự đọc các phần tiếp theo.

Nếu thiếu một phần hoặc một phần tải về bị hỏng, việc giải nén sẽ báo lỗi. Hãy dùng nút **Kiểm tra** để biết chắc trước khi xoá các phần gốc.

## Mẹo

- **Nén trước, chia sau là một bước.** Bạn chọn chia phần ngay trong hộp thoại tạo nén, không cần công cụ cắt tệp riêng.
- **Chọn 7Z để tổng dung lượng nhỏ hơn**, nhờ đó số phần cũng ít hơn. Nếu người nhận không có trình mở 7Z, dùng ZIP.
- **Đặt mật khẩu vẫn được** khi chia phần: mật khẩu áp dụng cho cả bộ.

Xem thêm: [Hướng dẫn tạo tệp nén](/guide/create).
