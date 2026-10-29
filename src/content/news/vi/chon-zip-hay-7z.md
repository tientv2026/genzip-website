---
title: Nén ZIP hay 7Z? Chọn định dạng và cấu hình cho đúng việc
description: ZIP mở được ở mọi nơi, 7Z nén nhỏ hơn, TAR giữ nguyên tệp. Cách chọn định dạng và cấu hình nén phù hợp trong GenZip.
date: 2026-10-29
tags: [Hướng dẫn, Mẹo]
cover: /screenshots/create-vi-light.png
draft: false
---

Khi bấm **Tạo file nén**, câu hỏi đầu tiên là chọn ZIP, 7Z hay TAR. Không có định dạng "tốt nhất", chỉ có định dạng hợp với việc bạn đang làm.

## Ba định dạng, ba mục đích

**ZIP: gửi cho người khác.** ZIP mở được trên hầu hết máy tính và điện thoại mà không cần cài thêm gì. Nếu không chắc người nhận dùng phần mềm gì, hãy chọn ZIP. Đây cũng là định dạng mặc định của GenZip.

**7Z: nén nhỏ nhất.** 7Z dùng phương pháp LZMA2, thường cho tệp nhỏ hơn ZIP rõ rệt, nhất là với tài liệu, mã nguồn, dữ liệu văn bản. Hợp để lưu trữ lâu dài hoặc gửi tệp lớn. Người nhận cần một trình nén hỗ trợ 7Z.

**TAR: gom tệp, không nén.** TAR chỉ gói nhiều tệp thành một, không giảm dung lượng. Hữu ích khi làm việc với hệ thống Linux hoặc khi bạn chỉ cần một tệp duy nhất.

## Cấu hình có sẵn

Bên cạnh ô định dạng là **Cấu hình**, giúp bạn khỏi phải chỉnh từng thông số:

| Cấu hình | Dùng khi |
|---|---|
| **Cân bằng** | Hầu hết trường hợp: tốc độ và dung lượng vừa phải. |
| **Nén tối đa** | Muốn tệp nhỏ nhất, chấp nhận chờ lâu hơn. |
| **Nhanh** | Cần xong ngay, ví dụ nén thư mục lớn để chép sang máy khác. |
| **Lưu trữ** | Chỉ gói tệp, không nén (ảnh JPG, video, tệp đã nén sẵn thì nén thêm cũng không nhỏ đi). |

Muốn chỉnh sâu hơn, cột **Thiết lập nén** cho phép chọn mức nén (Lưu trữ, 1–9; Bình thường là 5, Tối đa là 9), phương pháp (ZIP: Deflate; 7Z: LZMA2 hoặc LZMA), từ điển và **Nén solid** cho 7Z.

## Vài mẹo nhỏ

- **Ảnh, video, nhạc gần như không nhỏ đi** khi nén vì chúng đã được nén sẵn. Với các tệp này, chọn **Lưu trữ** hoặc **Nhanh** để đỡ mất thời gian.
- **Nén solid** (7Z) gom các tệp lại để nén chung, thường nhỏ hơn khi có nhiều tệp giống nhau. Đổi lại, lấy ra một tệp lẻ có thể lâu hơn.
- Bật **Xác minh sau khi nén** ở góc dưới hộp thoại nếu bạn sắp xoá tệp gốc: GenZip sẽ kiểm tra lại tệp nén vừa tạo.
- Cần nén thật nhanh? Chuột phải vào thư mục và chọn **Thêm vào "<tên>.zip"** hoặc **Thêm vào "<tên>.7z"**, không cần mở hộp thoại.

Xem thêm: [Hướng dẫn tạo tệp nén](/guide/create).
