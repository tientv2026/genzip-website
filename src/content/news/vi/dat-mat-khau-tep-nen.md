---
title: Đặt mật khẩu cho tệp nén sao cho thật sự an toàn
description: ZipCrypto hay AES-256, có nên ẩn tên tệp, và vài sai lầm hay gặp khi gửi tệp nén có mật khẩu.
date: 2026-10-29
tags: [Bảo mật, Hướng dẫn]
draft: false
---

Đặt mật khẩu cho tệp nén là cách đơn giản để gửi tài liệu riêng tư. Nhưng "có mật khẩu" chưa chắc đã an toàn, tuỳ bạn chọn kiểu mã hoá nào và gửi mật khẩu ra sao.

## Đặt mật khẩu trong GenZip

Trong hộp thoại **Tạo file nén**, nhìn sang cột **Bảo mật** bên phải:

1. Nhập **Mật khẩu** và **Nhập lại**. Bấm biểu tượng con mắt hoặc tick **Hiện mật khẩu** để kiểm tra mình gõ đúng.
2. Khi đã có mật khẩu, ô **Mã hoá** mới được bật. Chọn kiểu mã hoá (xem bên dưới).
3. Với 7Z, tick thêm **Ẩn tên tệp (7Z)** nếu không muốn người khác thấy danh sách tệp bên trong.
4. Nên bật **Xác minh sau khi nén**: GenZip kiểm tra lại tệp vừa tạo bằng chính mật khẩu đó, để chắc chắn bạn mở lại được.

## ZipCrypto hay AES-256?

Với ZIP, GenZip cho chọn **ZipCrypto** hoặc **AES-256**. Với 7Z, mã hoá luôn là **AES-256**.

- **AES-256** là chuẩn mã hoá mạnh, hãy dùng nó cho mọi thứ quan trọng.
- **ZipCrypto** là kiểu mã hoá cũ của ZIP, đã được biết là yếu. Chỉ nên dùng khi người nhận bắt buộc phải mở bằng một công cụ cũ không hỗ trợ AES. Đừng dùng ZipCrypto cho dữ liệu nhạy cảm.

## Tên tệp có bị lộ không?

Đây là điều nhiều người không để ý:

- **ZIP có mật khẩu vẫn hiện tên tệp.** Ai mở tệp cũng thấy danh sách như `Hop-dong-2026.pdf`, `Bang-luong.xlsx`, chỉ không đọc được nội dung.
- **7Z với Ẩn tên tệp** mã hoá luôn cả danh sách tệp. Không có mật khẩu thì không biết bên trong có gì.

Nếu chỉ tên tệp thôi cũng đã là thông tin nhạy cảm, hãy dùng **7Z + AES-256 + Ẩn tên tệp**.

## Những sai lầm hay gặp

- **Gửi mật khẩu cùng email với tệp.** Ai đọc được email là mở được tệp. Hãy gửi mật khẩu qua kênh khác: tin nhắn, cuộc gọi.
- **Mật khẩu quá ngắn.** Mã hoá mạnh đến đâu cũng không cứu được mật khẩu kiểu `123456`. Nên dùng một cụm từ dài, dễ nhớ với bạn nhưng khó đoán.
- **Quên mật khẩu.** Không ai, kể cả GenZip, lấy lại được dữ liệu khi mất mật khẩu AES-256. Hãy lưu mật khẩu ở nơi an toàn, ví dụ trình quản lý mật khẩu.

Xem thêm: [Hướng dẫn mật khẩu và mã hoá](/guide/passwords).
