---
title: Đặt GenZip làm ứng dụng mặc định và dùng menu chuột phải trên Windows 11
description: Mở tệp ZIP, RAR, 7Z bằng GenZip khi nhấn đúp, và giải nén hoặc nén nhanh ngay từ menu chuột phải.
date: 2026-10-29
tags: [Hướng dẫn, Mẹo]
cover: /screenshots/home-vi-light.png
draft: false
---

Cài GenZip xong, bạn sẽ muốn hai thứ: nhấn đúp tệp nén là mở bằng GenZip, và chuột phải là có lệnh giải nén. Bài này hướng dẫn cả hai trên Windows 11.

## Vì sao GenZip không tự đặt làm mặc định?

Windows 10 và 11 **không cho ứng dụng tự đặt mình làm mặc định**; chỉ người dùng mới chọn được. Đây là cơ chế bảo vệ của Windows để phần mềm không "giành" tệp của bạn. Với bản Microsoft Store, liên kết tệp và menu chuột phải đã có sẵn trong gói cài, bạn chỉ cần chọn.

## Đặt GenZip mở tệp nén

**Cách nhanh, từng loại tệp:**

1. Chuột phải vào một tệp `.zip` (hoặc `.rar`, `.7z`…), chọn **Mở bằng** → **Chọn ứng dụng khác**.
2. Chọn **GenZip**, rồi bấm **Luôn luôn**.
3. Làm lại với các loại tệp khác bạn hay dùng.

**Cách đặt nhiều loại cùng lúc:**

1. Mở **Cài đặt** (Windows + I) → **Ứng dụng** → **Ứng dụng mặc định**.
2. Tìm **GenZip** trong danh sách và mở nó.
3. Với mỗi đuôi tệp (`.zip`, `.7z`, `.rar`, `.tar`, `.gz`, `.bz2`, `.xz`, `.zst`, `.iso`, `.cab`, `.wim`, `.001`), chọn GenZip.

Mẹo: không nhất thiết đặt tất cả. Ví dụ, nếu bạn muốn `.iso` vẫn mở bằng tính năng gắn đĩa của Windows, cứ để nguyên đuôi đó.

## Dùng menu chuột phải

Trên Windows 11, các lệnh GenZip hiện ngay ở menu chuột phải cấp đầu:

**Với tệp nén:**
- **Mở bằng GenZip**
- **Giải nén tệp…**: chọn nơi lưu và cách xử lý tệp trùng.
- **Giải nén tại đây**: ra ngay thư mục đang đứng.
- **Giải nén vào "<tên>\"**: tạo thư mục cùng tên với tệp nén, gọn gàng nhất.

**Với tệp và thư mục thường:**
- **Thêm vào tệp nén…**: mở hộp thoại Tạo file nén.
- **Thêm vào "<tên>.zip"** và **Thêm vào "<tên>.7z"**: nén luôn, không cần hỏi.

Trên menu cổ điển ("Hiện thêm tuỳ chọn"), các lệnh có tên như "Nén nhanh thành tệp ZIP/7Z" và "Giải nén vào thư mục cùng tên".

## Ra lệnh liên tiếp cũng không sao

Nếu bạn chuột phải giải nén vài tệp liên tục, GenZip không mở hàng loạt cửa sổ chạy cùng lúc mà **xếp vào hàng đợi** và làm lần lượt. Xem và sắp xếp hàng đợi ở **Công cụ → Hàng đợi tác vụ**.

Xem thêm: [Menu chuột phải và liên kết tệp](/guide/context-menu).
