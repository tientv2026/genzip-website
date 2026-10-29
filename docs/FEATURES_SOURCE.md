# Tính năng GenZip 0.9.0-beta.1 (bản Microsoft Store) — nguồn duy nhất cho website

Lấy từ mã nguồn app ngày 29/10/2026 (phiên app gửi). Website chỉ được nói những gì có ở đây.
Ảnh chụp thật của app: `public/screenshots/<tên>-<vi|en>-<light|dark>.png` (component `Screenshot`),
tên: main, home, create, extract, test-result, conflict, queue, preview-image, preview-text, support, sfx.
Mockup thiết kế của app (tham khảo bố cục): `mockups/`.

## 1. Tạo file nén (một trang 2 cột, không có bước/tab)
- Hàng trên: Tên file (+ ô chọn đuôi .zip/.7z/.tar/.exe), Lưu tại + Duyệt…, Định dạng: 3 thẻ ZIP / 7Z / TAR, Cấu hình (preset): Cân bằng / Nén tối đa / Nhanh / Lưu trữ.
- Cột "Thiết lập nén": Mức nén (Lưu trữ, 1–9; Bình thường = 5, Tối đa = 9), Phương pháp (ZIP: Deflate/Store; 7Z: LZMA2/LZMA/Store; TAR: Store), Từ điển, Chia phần (Không chia / 100 MB / 700 MB / 4 GB FAT32 / Tuỳ chỉnh + số + MB/GB), Nén solid (7Z), Tự giải nén (.exe) (chỉ 7Z, không chia phần — module SFX chính thức của 7-Zip).
- Cột "Bảo mật": Mã hoá (ZIP: ZipCrypto hoặc AES-256; 7Z: AES-256), Mật khẩu + Nhập lại (nút mắt), Hiện mật khẩu, Ẩn tên tệp (7Z).
- Ghi chú: mở cửa sổ con soạn ghi chú; chỉ cho ZIP một tệp.
- Chân: Xác minh sau khi nén (kiểm tra lại archive vừa tạo bằng cùng mật khẩu), Huỷ, Tạo file nén.
- Mặc định: ZIP, mức 5, Deflate, không chia, không mã hoá.
- KHÔNG có "Chạy nền" trong hộp thoại Tạo nén (Chạy nền là nút trong cửa sổ tiến trình). KHÔNG có "Encrypt file names" kiểu checkbox riêng ngoài "Ẩn tên tệp (7Z)".

## 2. Giải nén
Thư mục đích + Duyệt… + lịch sử đích + cây thư mục (This PC, Desktop, Documents, Downloads…) + Thư mục mới.
Chế độ cập nhật: Giải nén và thay thế / Giải nén và cập nhật (chỉ tệp mới hơn hoặc mới) / Chỉ làm mới tệp đã có.
Chế độ ghi đè: Hỏi trước / Ghi đè không hỏi / Bỏ qua tệp đã có / Tự đổi tên.
Giữ tệp hỏng; Mở thư mục đích sau khi giải nén; Lưu thiết lập. Giải nén mục đang chọn khi có lựa chọn. Hộp thoại Mật khẩu khi cần.

## 3. Màn chính
- Trang chủ: thả tệp/nhấn để chọn, Tạo file nén…, Mở file nén…, Tệp gần đây.
- Thanh công cụ: Thêm, Giải nén, Kiểm tra, Xem, Xoá, Đổi tên…, Tìm kiếm, Thông tin, Cấu hình.
- Menu: Tệp, Lệnh, Công cụ (Hàng đợi tác vụ, Mở thư mục log), Ưa thích (Thêm vào ưa thích, danh sách, Sắp xếp ưa thích…), Tuỳ chọn (Cài đặt…, Ngôn ngữ, Giao diện Hệ thống/Sáng/Tối), Trợ giúp (Giới thiệu, Ủng hộ tác giả).
- Thanh đường dẫn trong archive + ô Tìm trong file nén. Đầu trang archive: tên, định dạng, dung lượng nén/gốc, số thư mục/tệp; thẻ Chú thích (khi có), Nén %, Mã hoá.
- Sidebar: Truy cập nhanh, File nén đang mở, lọc theo loại (Tất cả, Thư mục, Tài liệu, Hình ảnh, Video, Âm thanh, Khác).
- Cột: Tên, Kích thước, Đã nén, Loại, Ngày sửa đổi (+ tuỳ chọn Ratio, CRC32).
- Khung xem trước (F3): ảnh ≤ 20 MB, văn bản 64 KB đầu; loại khác hiện thẻ thông tin.
- Sửa tệp nén đang mở (ZIP/7Z/TAR): Thêm tệp/thư mục, kéo thả vào cửa sổ (có xác nhận), Xoá (Delete), Đổi tên (F2); dữ liệu cũ không nén lại; huỷ/lỗi giữ nguyên tệp gốc.
- Mở tệp trong archive bằng ứng dụng mặc định; tệp có thể chạy mã (html, exe, js…) hỏi xác nhận trước khi mở.

## 4. Thao tác
- Một khung tiến trình cho mọi thao tác: tiến độ tổng + tệp hiện tại, đã xử lý, n/N tệp, đã chạy, tốc độ, còn lại, Tiết kiệm khi nén. Nút Chạy nền (thu nhỏ, % trên icon taskbar), Tạm dừng/Tiếp tục (dừng thật trong engine), Huỷ.
- Hàng đợi tác vụ: ra lệnh khi đang bận ⇒ xếp hàng chạy lần lượt (cửa sổ Hàng đợi: huỷ, huỷ tất cả, xoá mục xong, lên/xuống).
- Tệp đã tồn tại: Thay thế / Bỏ qua / Giữ cả hai / Đổi tên… / Dừng, áp dụng cho tất cả.
- Kết quả: thành công / một phần / lỗi / đã dừng, có số liệu, Chi tiết lỗi, Sao chép chi tiết, Mở thư mục.
- Kiểm tra toàn vẹn: Tổng số tệp / Đã kiểm tra / Hoàn thành / Lỗi / Bỏ qua / Thời gian, Xuất báo cáo… (.txt), Xem chi tiết.
- Thông tin tệp nén: dung lượng gốc/sau nén, số tệp/thư mục, mã hoá, % tiết kiệm, Sao chép thông tin.
- Bảo vệ: chặn đường dẫn nguy hiểm (../, tên thiết bị), giới hạn giải nén (số mục, tỉ lệ nở, dung lượng, độ sâu), giữ Mark of the Web.

## 5. Cài đặt (cửa sổ riêng)
- Chung: ngôn ngữ, lịch sử tệp gần đây + số mục, xoá lịch sử, kiểu xem danh sách, cột hiển thị.
- Tích hợp: bản Store ghi "Windows quản lý cho bản Microsoft Store" — liên kết tệp và menu chuột phải có sẵn trong gói; người dùng chọn GenZip trong Ứng dụng mặc định của Windows (Windows không cho app tự đặt mặc định). Định dạng liên kết: .zip .7z .rar .tar .gz .bz2 .xz .zst .iso .cab .wim .001.
- Nén: định dạng, mức 0–9, phương pháp mặc định.
- Giải nén: đích (cạnh archive / thư mục cố định / hỏi), xử lý tệp đã có, mở thư mục sau khi giải nén.
- Bảo mật: giữ Mark of the Web, giới hạn an toàn.
- Giao diện: Hệ thống/Sáng/Tối, màu nhấn, kiểu icon.
- Cập nhật: bản Store chỉ hiện "Cập nhật do Microsoft Store cung cấp" (không có kênh/kiểm tra).
- Nâng cao: số luồng, thư mục tạm, mức log, 7z.dll tuỳ chỉnh theo LGPL.
- Menu chuột phải (Windows 11 cấp một): Mở bằng GenZip, Giải nén tệp…, Giải nén tại đây, Giải nén vào "<tên>\", Thêm vào tệp nén…, Thêm vào "<tên>.zip", Thêm vào "<tên>.7z". Menu cổ điển ghi "Nén nhanh thành tệp ZIP/7Z", "Giải nén vào thư mục cùng tên".

## 6. CLI
Có dòng lệnh cơ bản, chủ yếu phục vụ menu chuột phải. Web chỉ nói tối đa một dòng "hỗ trợ dòng lệnh cơ bản".

## 7. Định dạng
- Tạo: ZIP, 7Z, TAR (+ .exe tự giải nén từ 7Z). Không bao giờ tạo RAR.
- Đọc/giải nén: mọi định dạng lõi 7-Zip 26.05 hỗ trợ, gồm ZIP, 7Z, RAR/RAR5, TAR, GZ, BZ2, XZ, ZST, ISO, CAB, WIM, tệp chia phần .001/.zip.001, và .exe tự giải nén 7Z.
- Sửa (thêm/xoá/đổi tên): ZIP, 7Z, TAR.
- Mã hoá: ZIP ZipCrypto/AES-256; 7Z AES-256 + ẩn tên tệp.

## 8. Chưa có trong 0.9.0 (chỉ được ghi "Sắp có")
macOS, Linux, Mức dùng bộ nhớ (Tiết kiệm/Cân bằng/Tối đa — tận dụng RAM đọc trước), Benchmark trong app, sửa chữa archive hỏng, bản tải tự do.
