# GenZip — Kế hoạch website genzip.net + prompt thiết kế UI/UX

> Lập 29/10/2026 dựa trên trạng thái code R1 (`STATUS.md`), mockup `assets/mockups/`, token màu `crates/genzip-ui/ui/theme.slint`, logo `assets/icons/genzip-*.png`, chính sách `assets/legal/`.
> Phần A: website cần có gì. Phần B: hệ thống nhận diện cho web. Phần C: prompt giao ChatGPT vẽ ảnh UI/UX.

---

## A. Kế hoạch nội dung website

### A.1 Mục tiêu

1. Giới thiệu GenZip: trình nén/giải nén **miễn phí** cho Windows 10/11, nhanh, an toàn, không quảng cáo, không thu thập dữ liệu.
2. Cho người dùng **tải về** đúng bản (Microsoft Store / bộ cài / portable) trong ≤ 2 cú click.
3. **Hướng dẫn sử dụng** đủ để người mới không cần hỏi.
4. Tạo lòng tin: engine 7-Zip chính thức, bảo mật, chính sách riêng tư rõ ràng, giấy phép bên thứ ba.
5. Kênh **ủng hộ tác giả** và liên hệ.

Người dùng mục tiêu: người dùng Windows phổ thông ở Việt Nam (đang quen WinRAR/7-Zip), sinh viên, dân văn phòng; phụ: người dùng kỹ thuật (dòng lệnh, portable).

### A.2 Sơ đồ trang (sitemap)

Đường dẫn dùng tiếng Anh cho cả hai ngôn ngữ; bản tiếng Anh thêm tiền tố `/en`.

```
genzip.net
├── /                Trang chủ (landing)
├── /features        Tính năng
├── /download        Tải về
├── /guide           Hướng dẫn sử dụng (docs, có mục lục trái)
│   ├── getting-started  Cài đặt & lần chạy đầu
│   ├── open-and-browse  Mở & xem tệp nén
│   ├── extract          Giải nén
│   ├── create           Tạo tệp nén
│   ├── passwords        Mật khẩu & mã hoá
│   ├── test             Kiểm tra tệp nén
│   ├── context-menu     Menu chuột phải & liên kết tệp
│   ├── settings         Cài đặt (8 trang)
│   ├── updates          Cập nhật
│   └── command-line     Dòng lệnh (CLI)
├── /faq             Hỏi đáp
├── /changelog       Lịch sử phiên bản (từ CHANGELOG.md)
├── /support         Ủng hộ tác giả
├── /contact         Liên hệ
├── /privacy         (từ PRIVACY.vi.md / .en.md)
├── /terms           (từ EULA.vi.md / .en.md)
└── /licenses        Giấy phép bên thứ ba (THIRD_PARTY_NOTICES.md)
```

Song ngữ **VI (mặc định) + EN**, nút chuyển ngôn ngữ ở header. Có chế độ sáng/tối theo hệ thống — giống app.

### A.3 Trang chủ — các khối từ trên xuống

| # | Khối | Nội dung |
|---|---|---|
| 1 | Header | Logo + "GenZip" · Tính năng · Hướng dẫn · Tải về · Hỏi đáp · Ủng hộ · VI/EN · nút sáng/tối · nút **Tải miễn phí** (primary) |
| 2 | Hero | Tiêu đề: **"Nén và giải nén nhanh, gọn, an toàn."** Phụ đề: "Trình nén miễn phí cho Windows 10/11, chạy trên engine 7-Zip chính thức. Mở RAR, ZIP, 7z, TAR… Không quảng cáo, không thu thập dữ liệu." Nút: **Tải từ Microsoft Store** · Tải bộ cài (.exe). Dòng nhỏ: "Windows 10/11 64-bit · Miễn phí". Bên phải: ảnh chụp cửa sổ chính (mockup 09) trong khung Windows 11, bóng mềm. |
| 3 | Dải định dạng | Badge: Đọc RAR4/RAR5 · ZIP · 7z · TAR · GZ · BZ2 · XZ · ZST · ISO · CAB · WIM · tệp chia phần .7z.001 / .part1.rar. Tạo: ZIP · 7z · TAR. |
| 4 | 3 lợi ích chính | **Nhanh** (engine 7-Zip, đa luồng, tạm dừng thật) · **An toàn** (chặn đường dẫn độc hại khi giải nén, engine chạy trong process riêng, mật khẩu không ghi xuống đĩa, giữ cảnh báo Mark-of-the-Web) · **Quen tay** (thao tác kiểu WinRAR, menu chuột phải Windows 11, kéo-thả) |
| 5 | Showcase từng tính năng | 4–5 hàng xen kẽ ảnh/chữ: Xem nội dung & lọc theo loại · Giải nén một chạm "Giải nén tại đây" · Tạo nén với preset · Mật khẩu AES-256 · Tiến trình có Tạm dừng/Chạy nền |
| 6 | Menu chuột phải | Ảnh minh hoạ menu chuột phải Explorer Win11 với submenu GenZip: Giải nén tại đây / Giải nén vào "Tên\" / Giải nén tới… / Thêm vào "Tên.zip" / Thêm vào "Tên.7z" / Thêm vào tệp nén… |
| 7 | Quyền riêng tư | Khối nhấn mạnh: "0 tài khoản · 0 quảng cáo · 0 telemetry". Link chính sách. |
| 8 | Giao diện sáng/tối | Ảnh hai cửa sổ cạnh nhau light + dark, 9 màu nhấn |
| 9 | So sánh nhanh (tuỳ chọn) | Bảng GenZip vs "trình nén thường": miễn phí, không quảng cáo, giao diện hiện đại, tiếng Việt, mở RAR. **Không nêu tên/chê đối thủ**, không dùng logo của họ. |
| 10 | CTA cuối | "Sẵn sàng thử GenZip?" + nút tải |
| 11 | Footer | Sản phẩm · Hướng dẫn · Hỗ trợ · Pháp lý (Điều khoản, Quyền riêng tư, Giấy phép) · "Engine nén: 7-Zip © Igor Pavlov, LGPL" · © Dạ Trư |

### A.4 Trang Tính năng (danh sách đầy đủ, bám đúng code hiện tại)

**Mở & xem**
- Mở ZIP, 7z, RAR4/RAR5 (kể cả header mã hoá), TAR, GZ, BZ2, XZ, ZST, ISO, CAB, WIM; tệp chia phần `.7z.001`, báo rõ khi thiếu phần.
- Màn Home: kéo-thả tệp, tệp gần đây, Tạo/Mở nhanh.
- Cửa sổ xem: thanh địa chỉ, Back/Forward/Up, tìm trong tệp nén, sidebar lọc theo loại (Thư mục, Tài liệu, Ảnh, Video, Âm thanh, Khác), ô thống kê (số thư mục/tệp, tỉ lệ nén dạng vòng %, trạng thái mã hoá), bảng nhiều cột sắp xếp được, chọn nhiều dòng.
- Thông tin tệp nén chi tiết.
- Xác nhận trước khi mở tệp có rủi ro (exe, script…) từ trong tệp nén.

**Giải nén**
- Giải nén tất cả / mục đã chọn / thư mục con; chọn thư mục đích có lịch sử; tạo thư mục theo tên tệp nén.
- Khi trùng tệp: Hỏi / Ghi đè / Bỏ qua / Tự đổi tên (hộp thoại xung đột có "áp dụng cho tất cả").
- Tuỳ chọn: giữ cấu trúc thư mục, mở thư mục đích sau khi xong, kiểm tra sau khi giải nén.
- "Giải nén tại đây" ra thư mục con cạnh tệp nén.
- An toàn: chặn path traversal/đường dẫn tuyệt đối/tên thiết bị Windows, lan truyền Mark-of-the-Web.

**Tạo nén**
- Định dạng ZIP / 7z / TAR (GenZip **không tạo RAR** — nói rõ).
- Mức nén, phương thức (Deflate, LZMA2…), kích thước từ điển, solid (7z), chia volume KB/MB/GB.
- Preset: Thông thường, Tối đa, Nhanh, Lưu trữ (không nén).
- Mật khẩu AES-256, mã hoá cả tên tệp (7z).
- Thêm/xoá mục trong tệp nén có sẵn.

**Tiến trình & kết quả**
- % theo byte thật, tốc độ, thời gian còn lại; **Tạm dừng thật**, Chạy nền (tiến độ trên taskbar), Huỷ tức thì.
- Màn kết quả thành công / đã huỷ / kiểm tra, có nút Mở thư mục.

**Tích hợp Windows**
- Menu chuột phải Windows 10 & menu mới Windows 11; dạng gộp submenu hoặc phẳng.
- Liên kết định dạng tệp, mở bằng double-click, một phiên bản duy nhất (single-instance).
- Hỗ trợ DPI 100–200%, High Contrast, trình đọc màn hình.

**Cá nhân hoá**: Sáng/Tối/Theo hệ thống, 9 màu nhấn, chọn cột hiển thị, giới hạn lịch sử, tiếng Việt/Anh.

**Cập nhật**: bản Store cập nhật qua Microsoft Store; bản tải trực tiếp tự kiểm tra ≤ 1 lần/ngày (tắt được), manifest ký Ed25519, kênh Stable/Beta.

**Dòng lệnh**: `genzip <tệp>`, `genzip x`, `genzip e`, `genzip a [--quick zip|7z]`, `genzip t`, `genzip --version` (chi tiết `docs/CLI.md`).

**Sắp có (đánh nhãn "Sắp có", không vẽ như đã xong)**: macOS, Linux, hàng đợi nhiều tác vụ, xem trước tệp, tạo SFX.

### A.5 Trang Tải về

- 3 thẻ: **Microsoft Store** (khuyên dùng — tự cập nhật, Microsoft ký) · **Bộ cài .exe** (cài cho người dùng hiện tại, không cần quyền admin, `%LOCALAPPDATA%\Programs\GenZip`) · **Bản portable .zip** (chạy không cần cài, không đăng ký menu chuột phải).
- Mỗi thẻ: phiên bản, ngày, dung lượng, SHA-256 (nút sao chép), link ghi chú phát hành.
- Yêu cầu hệ thống: Windows 10/11 x64.
- Khối "Kiểm tra tệp tải về" (cách xem SHA-256 bằng `Get-FileHash`).
- Khối macOS/Linux: "Sắp có" + đăng ký nhận tin (tuỳ chọn, nếu làm thì phải thêm vào chính sách riêng tư).

### A.6 Trang Hướng dẫn — mỗi bài có ảnh chụp thật + các bước đánh số

| Bài | Nội dung chính |
|---|---|
| Bắt đầu | Cài từ Store/bộ cài, màn chấp nhận Điều khoản lần đầu, bật menu chuột phải trong Cài đặt → Tích hợp |
| Mở & xem | Double-click / kéo-thả / Mở; duyệt thư mục, tìm, lọc theo loại, sắp xếp cột, chọn nhiều mục (Ctrl/Shift) |
| Giải nén | 3 cách: nút Giải nén, chuột phải "Giải nén tại đây", kéo ra; giải thích chế độ ghi đè; kiểm tra sau khi giải nén |
| Tạo nén | Chọn tệp → Thêm; chọn định dạng (khi nào dùng ZIP, khi nào 7z); preset; chia volume |
| Mật khẩu | Tạo tệp có mật khẩu; mã hoá tên tệp; lưu ý ZIP + mật khẩu có dấu tiếng Việt → nên dùng 7z; GenZip không lưu mật khẩu |
| Kiểm tra | Nút Kiểm tra, đọc kết quả, khi nào báo lỗi CRC/thiếu phần |
| Menu chuột phải | Win11 vs Win10, chế độ gộp/phẳng, liên kết định dạng |
| Cài đặt | 8 trang: Chung, Giao diện, Tích hợp, Nén, Giải nén, Bảo mật, Cập nhật, Nâng cao |
| Cập nhật | Store vs bản tải trực tiếp; kênh Beta |
| Dòng lệnh | Bảng lệnh + ví dụ đường dẫn tiếng Việt |
| Phím tắt | (bổ sung khi chốt) |

### A.7 Hỏi đáp (gợi ý câu)

- GenZip có miễn phí không? Có quảng cáo không? → Miễn phí, không quảng cáo.
- Có tạo được tệp RAR không? → Không (RAR là định dạng độc quyền); đọc/giải nén RAR được.
- GenZip có gửi dữ liệu của tôi đi không? → Không.
- Vì sao Windows SmartScreen cảnh báo? → (tuỳ cách ký bản .exe; khuyên dùng Store).
- Quên mật khẩu tệp nén thì sao? → Không khôi phục được; GenZip không phá mật khẩu.
- Có dùng chung với WinRAR/7-Zip được không? → Được; GenZip chỉ ghi liên kết dưới tài khoản hiện tại.
- Gỡ cài đặt có sạch không? → Có, gỡ menu chuột phải và liên kết.
- Khi nào có macOS/Linux? → Đang làm.

### A.8 Nguyên tắc nội dung (bám luật dự án)

- **Không bịa số liệu**: không "1 triệu lượt tải", không "nhanh hơn X%", không đánh giá/testimonial giả. Chỉ đưa benchmark khi có số đo thật (`crates/genzip-bench`).
- Không dùng tên/logo WinRAR, 7-Zip để quảng bá kiểu "thay thế X"; chỉ ghi công 7-Zip ở phần engine/giấy phép (bắt buộc theo LGPL).
- Ảnh trên web là **ảnh chụp app thật** (`genzip --screenshot`, `tools/capture_all.ps1`) — ảnh ChatGPT chỉ dùng làm concept bố cục, khi làm web thật thay bằng ảnh chụp.
- Chữ nhẹ như app: thân 400, tiêu đề 600; không dùng chữ quá đậm.

### A.9 Kỹ thuật đề xuất

- Static site (Astro hoặc 11ty) + Markdown cho phần Hướng dẫn, build ra HTML tĩnh, host GitHub Pages / Cloudflare Pages (repo công khai riêng chứa file cài — xem STATUS mục 6).
- i18n theo thư mục `/vi`, `/en`; nội dung pháp lý sinh trực tiếp từ `assets/legal/*.md` để không lệch app.
- Không cookie theo dõi ⇒ không cần banner cookie. Nếu muốn đếm lượt, dùng analytics không cookie và cập nhật chính sách.
- SEO: title/description VI+EN, Open Graph image (ảnh hero), `SoftwareApplication` schema.
- Lighthouse ≥ 95, ảnh WebP/AVIF, responsive 360px → 1440px.

---

## B. Nhận diện cho web (lấy từ app)

| Token | Light | Dark | Nguồn |
|---|---|---|---|
| Primary (xanh Windows) | `#1673E6` | `#1673E6` (hover sáng hơn) | `theme.slint` |
| Nền trang (canvas) | `#FAFBFD` gần trắng | `#141B26` | `theme.slint` |
| Bề mặt thẻ (surface) | `#FFFFFF` | `#1D2938` | `theme.slint` |
| Viền | `#D9E1EC` | `#46566D` | `theme.slint` |
| Chữ | `#111936` | `#F0F4FA` | `theme.slint` |
| Chữ phụ | `#5B6577` | `#BECCDF` | `theme.slint` |
| Thành công / Cảnh báo / Lỗi | `#238A4B` / `#B76A00` / `#C83A42` | như light | `theme.slint` |
| Màu thương hiệu (từ logo) | hồng magenta `#E0168C` → tím `#7A2BD6`, cam da `#C8772E`, vàng khoá `#F2B21B` | | logo |

- Logo: tập hồ sơ màu hồng-tím có các lớp xanh lá/xanh dương phía sau, đai da nâu vắt ngang, khoá kéo vàng — phong cách 3D bóng.
- Cách dùng màu: giao diện web chủ đạo **xanh `#1673E6` + trắng/xám nhạt** (giống app, chuyên nghiệp); gradient hồng→tím của logo chỉ dùng làm điểm nhấn (nền mờ sau ảnh hero, viền badge, CTA cuối), không phủ toàn trang.
- Font: **Segoe UI Variable** (đúng chất Windows) — fallback web: Inter. Tiêu đề 600, thân 400.
- Bo góc 8–12px, bóng mềm, nhiều khoảng trắng, icon nét kiểu Fluent.

---

## C. Prompt giao ChatGPT (tạo ảnh UI/UX)

**Cách dùng:**
1. Mở ChatGPT (chế độ tạo ảnh). **Đính kèm** `assets/icons/genzip-512.png` (logo) và `assets/mockups/09_archive_view_reference.png` (ảnh app) để nó bám đúng logo và giao diện.
2. Dán **Prompt 0** trước (bối cảnh chung), sau đó lần lượt Prompt 1 → 7, mỗi lần một ảnh.
3. Prompt viết bằng tiếng Anh vì mô hình ảnh vẽ chữ tiếng Anh chính xác hơn; tiếng Việt có dấu hay bị méo chữ. Muốn bản tiếng Việt thì dùng Prompt 8 sau khi đã ưng bố cục.
4. Nếu ảnh có chữ sai, nhắn: *"Keep the exact same layout, only fix the text to: …"*.

### Prompt 0 — Bối cảnh chung (dán đầu tiên)

```
You are a senior product designer. I'm building the marketing website for "GenZip",
a free file compression / extraction app for Windows 10/11. I will ask you for several
website UI mockup images, one at a time. Keep ONE consistent design system across all of them.

About the product:
- GenZip is a modern archive manager for Windows built in Rust with the official 7-Zip engine.
- Opens RAR4/RAR5, ZIP, 7z, TAR, GZ, BZ2, XZ, ZST, ISO, CAB, WIM and split archives (.7z.001).
- Creates ZIP, 7z and TAR (it does NOT create RAR).
- AES-256 password protection, file-name encryption for 7z, split volumes, presets.
- Safe extraction (blocks malicious paths), engine runs in a separate process,
  passwords never written to disk.
- Real pause/resume, background mode with taskbar progress, instant cancel.
- Windows 11 right-click menu ("Extract here", "Add to archive.zip"), drag & drop,
  light/dark mode, 9 accent colors, Vietnamese and English.
- Privacy: no account, no ads, no telemetry. Free.

Brand & design system (follow strictly):
- Logo: the attached icon — a glossy 3D magenta-to-purple file folder with green and blue
  layers behind it, a brown leather strap across it and a gold zipper pull. Use it as-is,
  never redraw it differently.
- Primary color: Windows blue #1673E6. Text #111936, secondary text #5B6577,
  page background #FAFBFD, cards #FFFFFF, borders #D9E1EC.
  Dark theme: background #141B26, cards #1D2938, borders #46566D, text #F0F4FA.
- Brand accent: subtle magenta→purple gradient (#E0168C → #7A2BD6) used sparingly
  (glow behind hero screenshot, small badges, final CTA band). Blue stays dominant.
- Typography: Segoe UI Variable / Inter. Headings semibold (600), body regular (400).
  Light, clean, never heavy or bold-everywhere.
- Style: Windows 11 Fluent-inspired, professional, calm, lots of white space,
  8–12px rounded corners, soft shadows, thin line icons. Feels like a trustworthy
  desktop utility (think Microsoft PowerToys / Linear / Raycast level of polish),
  not a flashy crypto or gaming site.
- App screenshots inside the page must look like the attached GenZip window:
  Windows 11 frame, toolbar with colorful icons (Add, Extract, Test, View, Delete,
  Search, Info, Settings), address bar, left sidebar (Home, Recent files,
  System integration, Contents filters), archive header with stat tiles,
  file table with a dark-blue selected row.
- No fake statistics, no fake download counts, no fake testimonials,
  no competitor logos.

Reply "Ready" and wait for my first page request.
```

### Prompt 1 — Trang chủ (desktop, full page)

```
Create a full-length desktop website mockup (1440px wide, tall scrolling page,
shown as one image) for the GenZip homepage, light theme.

Sections from top to bottom:
1. Sticky header: GenZip logo + wordmark "GenZip" on the left; nav "Features",
   "Guide", "Download", "FAQ", "Support"; on the right a "VI | EN" switch,
   a sun/moon theme toggle and a blue primary button "Download free".
2. Hero (two columns): left — headline "Compress and extract. Fast, clean, safe.",
   subheadline "A free archive manager for Windows 10/11, powered by the official
   7-Zip engine. Opens RAR, ZIP, 7z, TAR and more. No ads. No tracking.",
   primary button "Get it from Microsoft Store" (with Store icon), secondary
   outline button "Download installer (.exe)", small caption
   "Windows 10/11 · 64-bit · Free". Right — a large realistic screenshot of the
   GenZip main window in a Windows 11 frame, floating with a soft shadow and a
   faint magenta-purple glow behind it.
3. A row of format chips: "Opens: RAR · ZIP · 7z · TAR · GZ · XZ · ZST · ISO · CAB"
   and "Creates: ZIP · 7z · TAR".
4. Three benefit cards with line icons: "Fast" (7-Zip engine, multi-threaded,
   real pause), "Safe" (blocks malicious paths, isolated engine, passwords never
   saved), "Familiar" (right-click menu, drag & drop, Windows 11 look).
5. Alternating feature rows (image left/text right, then swapped):
   "Browse any archive" (file table + content filters),
   "Extract in one click" (Windows 11 right-click menu with a GenZip submenu),
   "Create ZIP or 7z with presets" (Create Archive dialog),
   "Protect with AES-256" (password fields with eye icon),
   "Pause for real" (progress window with Pause / Background / Cancel).
6. Privacy band: three big numerals "0 accounts · 0 ads · 0 tracking" with a
   link "Read the privacy policy".
7. Light & dark: two GenZip windows side by side (light and dark) with a row of
   9 accent color dots.
8. Final CTA band with subtle magenta→purple gradient: "Ready to try GenZip?"
   + white button "Download free".
9. Footer with 4 columns (Product, Guide, Support, Legal), note
   "Compression engine: 7-Zip © Igor Pavlov, GNU LGPL" and "© 2026 GenZip".

Keep generous spacing, precise alignment on a 12-column grid, crisp readable text.
```

### Prompt 2 — Trang chủ dark mode

```
Same homepage, same layout and content, but in the dark theme of the design system
(background #141B26, cards #1D2938, text #F0F4FA, primary #1673E6).
The app screenshots inside the page should also be the dark version of GenZip.
The magenta-purple glow is a bit stronger but still subtle.
```

### Prompt 3 — Trang Tính năng

```
Create a desktop mockup (1440px) of the GenZip "Features" page, light theme.
Header same as homepage. Page title "Everything you need to handle archives",
short intro line. Left: sticky in-page nav (Open & browse, Extract, Create,
Security, Progress, Windows integration, Personalize, Updates, Command line).
Right: grouped feature sections, each with a section heading, a small app
screenshot or UI crop, and a 2-column checklist of features with blue check icons.
Include a small "Coming soon" section with grey pill badges:
"macOS", "Linux", "Batch queue", "File preview".
Include a clear note card: "GenZip reads RAR but does not create RAR files."
```

### Prompt 4 — Trang Tải về

```
Create a desktop mockup (1440px) of the GenZip "Download" page, light theme.
Title "Download GenZip", subtitle "Free for Windows 10 and 11 (64-bit)".
Three download cards side by side:
1. "Microsoft Store" — badge "Recommended", text "Automatic updates, signed by
   Microsoft", primary button "Open in Microsoft Store".
2. "Installer (.exe)" — "Installs for the current user, no admin rights needed",
   version line "Version 1.0.0 · size placeholder", button "Download .exe".
3. "Portable (.zip)" — "Run without installing. No right-click menu.",
   button "Download .zip".
Each card shows a SHA-256 field (monospace, truncated) with a copy icon.
Below: "System requirements" box, "Verify your download" box with a PowerShell
code snippet `Get-FileHash .\GenZip-Setup.exe`, and a "What's new in 1.0" release
notes list. At the bottom a muted card "macOS and Linux — coming soon".
```

### Prompt 5 — Trang Hướng dẫn sử dụng (docs)

```
Create a desktop mockup (1440px) of the GenZip user guide page, light theme,
documentation layout like modern product docs.
Left sidebar navigation tree: Getting started, Open & browse, Extract files,
Create an archive, Passwords & encryption, Test an archive, Right-click menu,
Settings, Updates, Command line. Current page "Extract files" highlighted with
a blue left bar. Top: search box "Search the guide…".
Main column: breadcrumb, H1 "Extract files", intro paragraph, then numbered steps
with large step numbers: 1 "Open the archive", 2 "Click Extract",
3 "Choose a destination", 4 "Choose what to do with existing files",
5 "Click Extract". Between steps, screenshots of the GenZip Extract dialog
with blue numbered callout markers pointing at UI elements. A blue "Tip" callout
("Right-click an archive and choose Extract here for one-click extraction") and
an amber "Note" callout. Right rail: "On this page" table of contents.
Bottom: "Previous / Next" navigation cards and "Was this page helpful? Yes / No".
```

### Prompt 6 — Trang Hỏi đáp + Ủng hộ

```
Create a desktop mockup (1440px), light theme, with two stacked sections:
A) FAQ page: title "Frequently asked questions", search field, accordion list
   with the first item expanded. Questions: "Is GenZip really free?",
   "Can GenZip create RAR files?", "Does GenZip collect my data?",
   "I forgot my archive password — can GenZip recover it?",
   "Can I use GenZip alongside other archivers?", "When will macOS and Linux arrive?".
B) Support the author: friendly card with the GenZip logo, short text
   "GenZip is free and ad-free. If it helps you, you can support its development.",
   two options side by side: "Bank transfer (VietQR)" with a QR code placeholder,
   and "PayPal" button; plus a "Contact" row with email and website icons.
   Warm but still professional, no begging tone.
```

### Prompt 7 — Responsive mobile

```
Create a mobile mockup set (three iPhone-size screens, 390px wide each, side by side
on a neutral background) of the GenZip website, light theme:
1. Homepage hero: compact header with logo + hamburger, headline, subheadline,
   full-width "Download free" button, app screenshot below.
2. Opened hamburger menu as a full-screen sheet with nav items, VI/EN switch,
   theme toggle.
3. User guide page: collapsible "Guide menu" dropdown at top, numbered steps,
   screenshot, Tip callout.
Note on screen 1 a small notice "GenZip is a Windows app — open this page on your
PC to download", with a "Send link to my email" ghost button.
```

### Prompt 8 — Phiên bản tiếng Việt (sau khi chốt bố cục)

```
Keep exactly the same layout and design as the previous image, but translate all
visible text to Vietnamese with correct diacritics. Use these texts:
- Nav: "Tính năng", "Hướng dẫn", "Tải về", "Hỏi đáp", "Ủng hộ"; button "Tải miễn phí"
- Headline: "Nén và giải nén nhanh, gọn, an toàn."
- Subheadline: "Trình nén miễn phí cho Windows 10/11, chạy trên engine 7-Zip chính thức.
  Mở RAR, ZIP, 7z, TAR… Không quảng cáo, không thu thập dữ liệu."
- Buttons: "Tải từ Microsoft Store", "Tải bộ cài (.exe)"
- Benefits: "Nhanh", "An toàn", "Quen tay"
- Privacy band: "0 tài khoản · 0 quảng cáo · 0 theo dõi"
- Final CTA: "Sẵn sàng dùng thử GenZip?"
Render Vietnamese diacritics clearly (ă, â, đ, ê, ô, ơ, ư and tone marks).
```

### Prompt 9 (tuỳ chọn) — Bảng design system cho dev

```
Create a single "design system sheet" image for the GenZip website: logo usage
(on light, on dark, minimum size), color palette swatches with hex codes
(light and dark), typography scale (H1 48, H2 32, H3 24, body 16, small 14 —
semibold headings, regular body), buttons (primary, secondary outline, ghost,
disabled), format chips, feature card, callouts (Tip blue, Note amber,
Warning red), code block, accordion item, navigation header. Clean grid layout,
labeled like a Figma style guide.
```

---

## D. Việc tiếp theo

1. Chủ dự án chạy prompt, chọn concept ưng ý.
2. Chụp bộ ảnh app thật cho web (light/dark, VI/EN) bằng `tools/capture_all.ps1`.
3. Chốt nơi host file cài (STATUS mục 6) và thông tin ủng hộ (STATUS mục 8).
4. Dựng site tĩnh theo A.9; nội dung Hướng dẫn viết từ A.6.
