---
title: Dòng lệnh
description: Gọi GenZip từ PowerShell, script hoặc lối tắt.
order: 10
---

| Lệnh | Tác dụng |
|---|---|
| `genzip` | Mở Home |
| `genzip <tệp nén>` | Mở tệp nén |
| `genzip x <tệp nén> [--to <thư mục>]` | Mở hộp thoại Giải nén, điền sẵn thư mục đích |
| `genzip e <tệp nén>` | Giải nén vào thư mục con cạnh tệp nén |
| `genzip a <nguồn>...` | Mở hộp thoại Tạo nén với các nguồn đã điền |
| `genzip a --quick zip <nguồn>...` | Nén nhanh thành ZIP |
| `genzip a --quick 7z <nguồn>...` | Nén nhanh thành 7z |
| `genzip t <tệp nén>` | Kiểm tra tệp nén |
| `genzip --version` | In phiên bản |

## Ví dụ

```powershell
genzip x "D:\Tài liệu\Bản sao.7z" --to "D:\Khôi phục"
genzip a --quick 7z "D:\Tài liệu" "D:\Ảnh"
```

Đường dẫn có dấu cách hoặc tiếng Việt cần đặt trong dấu ngoặc kép.
