---
title: Tạo tệp nén
description: Nén tệp thành ZIP, 7z hoặc TAR, dùng cấu hình có sẵn và chia phần.
order: 4
---

## Nén nhanh

Chuột phải vào tệp hoặc thư mục trong Explorer, chọn **Thêm vào "&lt;tên&gt;.zip"** hoặc **Thêm vào "&lt;tên&gt;.7z"**.

## Hộp thoại Tạo file nén

Từ Trang chủ, chọn **Tạo file nén…**, hoặc dùng lệnh chuột phải **Thêm vào tệp nén…**. Hộp thoại nằm trên một trang, với hai cột thiết lập.

1. Nhập **Tên file** và chọn đuôi trong ô bên cạnh: `.zip`, `.7z`, `.tar` hoặc `.exe` cho tệp tự giải nén từ 7Z.
2. Chọn **Lưu tại**, dùng **Duyệt…** để chọn thư mục.
3. Chọn một trong ba thẻ định dạng **ZIP**, **7Z**, **TAR**.
4. Chọn **Cấu hình**: **Cân bằng**, **Nén tối đa**, **Nhanh** hoặc **Lưu trữ**.
5. Điều chỉnh hai cột bên dưới nếu cần, rồi bấm **Tạo file nén**. Bấm **Huỷ** để đóng hộp thoại.

Mặc định là ZIP, mức nén 5, Deflate, không chia phần và không mã hoá.

## Cột Thiết lập nén

- **Mức nén**: **Lưu trữ** hoặc 1–9; **Bình thường** là 5, **Tối đa** là 9.
- **Phương pháp**: ZIP có Deflate/Store; 7Z có LZMA2/LZMA/Store; TAR dùng Store.
- **Từ điển**: điều chỉnh theo phương pháp nén.
- **Chia phần**: **Không chia**, **100 MB**, **700 MB**, **4 GB FAT32** hoặc **Tuỳ chỉnh** với một số và đơn vị MB/GB.
- **Nén solid**: dành cho 7Z.
- **Tự giải nén (.exe)**: chỉ dành cho 7Z không chia phần, dùng module SFX chính thức của 7-Zip.

## Cột Bảo mật

- **Mã hoá**: ZIP hỗ trợ ZipCrypto hoặc AES-256; 7Z hỗ trợ AES-256.
- Nhập **Mật khẩu** và **Nhập lại** để xác nhận; dùng nút mắt hoặc **Hiện mật khẩu** để xem lại.
- **Ẩn tên tệp (7Z)**: bảo vệ cả danh sách tên tệp trong tệp 7Z.

## Ghi chú và xác minh

**Ghi chú** mở cửa sổ soạn ghi chú, chỉ dùng cho ZIP một tệp, không chia phần.

Bật **Xác minh sau khi nén** để kiểm tra lại tệp nén vừa tạo bằng cùng mật khẩu.

## Theo dõi tiến trình

Sau khi bắt đầu nén, cửa sổ tiến trình có các nút **Chạy nền**, **Tạm dừng/Tiếp tục** và **Huỷ**. **Chạy nền** thu nhỏ cửa sổ và hiển thị phần trăm trên biểu tượng taskbar. Nút này nằm trong cửa sổ tiến trình.

<div class="callout callout-note"><strong>Định dạng RAR</strong>GenZip đọc và giải nén RAR/RAR5; khi tạo tệp nén, dùng ZIP, 7Z hoặc TAR.</div>
