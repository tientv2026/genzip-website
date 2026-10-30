"""Sinh ảnh đại diện cho các bài tin (VI/EN, nhiều tỉ lệ), cùng kiểu với make-store-beta-cover.py.

Chạy: py scripts/make-news-covers.py [slug ...]   (không truyền slug = làm tất cả)
Ảnh ra ở public/news/<slug>/{lang}-{og.jpg,16x9.webp,thumb.webp,4x3.webp,1x1.webp}.
"""
import os, sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
FONTS = r"C:/Windows/Fonts"
ICON = os.path.join(PUBLIC, "brand", "genzip-512.png")

# Vùng tô viền trên ảnh hộp thoại Tạo file nén (toạ độ ảnh gốc 680×510, VI và EN cùng bố cục).
SPLIT = (8, 290, 366, 326)
SECURITY = (384, 160, 670, 366)
SFX = (8, 382, 172, 410)

POSTS = {
    "chia-nho-tep-nen": {
        "shot": "/screenshots/create-{lang}-light.png",
        "mark": SPLIT,
        "vi": {"head": "Chia nhỏ|tệp nén", "sub": "Gửi email, chép USB, ghi đĩa", "chip": "100 MB · 700 MB · 4 GB"},
        "en": {"head": "Split|archives", "sub": "For email, USB drives and discs", "chip": "100 MB · 700 MB · 4 GB"},
    },
    "dat-mat-khau-tep-nen": {
        "shot": "/screenshots/create-{lang}-light.png",
        "mark": SECURITY,
        "vi": {"head": "Đặt mật khẩu|cho tệp nén", "sub": "ZipCrypto hay AES-256?", "chip": "Mã hoá AES-256"},
        "en": {"head": "Password-|protecting|archives", "sub": "ZipCrypto or AES-256?", "chip": "AES-256 encryption"},
    },
    "tao-tep-tu-giai-nen": {
        "shot": "/screenshots/create-{lang}-light.png",
        "mark": SFX,
        "vi": {"head": "Tệp tự giải nén|.exe", "sub": "Khi nào nên dùng, khi nào không", "chip": "Tạo từ 7Z"},
        "en": {"head": "Self-extracting|.exe archives", "sub": "When to use them and when not to", "chip": "Made from 7Z"},
    },
    "ra-doi": {
        "shot": "/news/ra-doi/menu-tep-nen.webp",
        "mark": (461, 427, 733, 662),
        "vi": {"head": "Vì sao|GenZip ra đời", "sub": "Giữ thói quen cũ, bỏ nỗi lo bản quyền", "chip": "Miễn phí · Không quảng cáo"},
        "en": {"head": "Why we|built GenZip", "sub": "Keep your habits, drop the licence worry", "chip": "Free · No ads"},
    },
}
INK = (27, 21, 48)
MUTED = (88, 80, 120)
ACCENT = (22, 115, 230)


def font(name, size):
    return ImageFont.truetype(os.path.join(FONTS, name), size)


def background(w, h):
    top, bottom = (250, 248, 255), (228, 222, 250)
    im = Image.new("RGB", (w, h))
    d = ImageDraw.Draw(im)
    for y in range(h):
        t = y / max(1, h - 1)
        d.line([(0, y), (w, y)], fill=tuple(round(a + (b - a) * t) for a, b in zip(top, bottom)))
    return im


def wrap(draw, text, f, width):
    lines, cur = [], ""
    for word in text.split("|"):
        # Từ kết thúc bằng "-" (Password-) nối liền khi cùng dòng.
        trial = (cur + word) if cur.endswith("-") else (cur + " " + word).strip()
        if draw.textlength(trial, font=f) <= width or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    lines.append(cur)
    return lines


def rounded(im, r):
    mask = Image.new("L", im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, im.width - 1, im.height - 1], r, fill=255)
    out = im.convert("RGBA")
    out.putalpha(mask)
    return out


def marked(shot, box):
    """Tô viền màu nhấn quanh phần bài viết nói tới."""
    im = shot.copy()
    d = ImageDraw.Draw(im)
    pad = 4
    d.rounded_rectangle([box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad], 8, outline=ACCENT, width=4)
    return im


def fit(shot, max_w, max_h):
    k = min(max_w / shot.width, max_h / shot.height)
    return shot.resize((round(shot.width * k), round(shot.height * k)), Image.LANCZOS)


def paste_shot(canvas, s, x, y, radius):
    s = rounded(s, radius)
    pad = 40
    shadow = Image.new("RGBA", (s.width + pad * 2, s.height + pad * 2), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle([pad, pad + 10, pad + s.width, pad + s.height + 10], radius, fill=(60, 40, 120, 70))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    canvas.alpha_composite(shadow, (x - pad, y - pad))
    border = Image.new("RGBA", (s.width + 2, s.height + 2), (0, 0, 0, 0))
    ImageDraw.Draw(border).rounded_rectangle([0, 0, s.width + 1, s.height + 1], radius + 1, fill=(200, 192, 230, 255))
    canvas.alpha_composite(border, (x - 1, y - 1))
    canvas.alpha_composite(s, (x, y))


def chip(draw, x, y, text, f):
    tw = draw.textlength(text, font=f)
    h = round(f.size * 1.9)
    draw.rounded_rectangle([x, y, x + tw + f.size * 1.6, y + h], h // 2, fill=(255, 255, 255), outline=(210, 202, 240))
    draw.text((x + f.size * 0.8, y + h / 2), text, font=f, fill=ACCENT, anchor="lm")
    return h


def text_block(draw, canvas, icon, t, x, y, width, scale):
    ic = icon.resize((round(120 * scale),) * 2, Image.LANCZOS)
    canvas.alpha_composite(ic, (x - round(8 * scale), y))
    y += ic.height + round(18 * scale)
    fh = font("seguisb.ttf", round(60 * scale))
    for line in wrap(draw, t["head"], fh, width):
        draw.text((x, y), line, font=fh, fill=INK)
        y += round(fh.size * 1.22)
    y += round(14 * scale)
    fs = font("segoeui.ttf", round(28 * scale))
    draw.text((x, y), t["sub"], font=fs, fill=MUTED)
    y += round(fs.size * 1.3) + round(22 * scale)
    y += chip(draw, x, y, t["chip"], font("seguisb.ttf", round(22 * scale)))
    return y


def make(post, lang, w, h, layout):
    t = post[lang]
    icon = Image.open(ICON).convert("RGBA")
    shot = Image.open(os.path.join(PUBLIC, post["shot"].format(lang=lang).lstrip("/"))).convert("RGB")
    shot = marked(shot, post["mark"])
    canvas = background(w, h).convert("RGBA")
    draw = ImageDraw.Draw(canvas)
    if layout == "side":
        scale = h / 630
        margin = round(64 * scale)
        text_w = round(w * 0.40)
        probe = Image.new("RGBA", (w, h))
        end = text_block(ImageDraw.Draw(probe), probe, icon, t, 0, 0, text_w, scale)
        text_block(draw, canvas, icon, t, margin, (h - end) // 2, text_w, scale)
        sx = margin + text_w + round(36 * scale)
        s = fit(shot, w - sx - round(48 * scale), h - round(96 * scale))
        paste_shot(canvas, s, sx + (w - sx - round(48 * scale) - s.width) // 2, (h - s.height) // 2, round(14 * scale))
    else:
        scale = w / 1200
        margin = round(80 * scale)
        y = text_block(draw, canvas, icon, t, margin, margin, w - margin * 2, scale)
        sy = y + round(48 * scale)
        s = fit(shot, w - margin * 2, h - sy - margin)
        paste_shot(canvas, s, (w - s.width) // 2, sy, round(16 * scale))
    return canvas.convert("RGB")


def save(im, out, name, fmt, **kw):
    path = os.path.join(out, name)
    im.save(path, fmt, **kw)
    print(f"{name} {im.size[0]}x{im.size[1]} {os.path.getsize(path) // 1024} KB")


for slug in sys.argv[1:] or POSTS:
    post = POSTS[slug]
    out = os.path.join(PUBLIC, "news", slug)
    os.makedirs(out, exist_ok=True)
    print(f"== {slug}")
    for lang in ("vi", "en"):
        save(make(post, lang, 1200, 630, "side"), out, f"{lang}-og.jpg", "JPEG", quality=88, optimize=True, progressive=True)
        wide = make(post, lang, 1280, 720, "side")
        save(wide, out, f"{lang}-16x9.webp", "WEBP", quality=86, method=6)
        save(wide.resize((800, 450), Image.LANCZOS), out, f"{lang}-thumb.webp", "WEBP", quality=86, method=6)
        save(make(post, lang, 1200, 900, "stack"), out, f"{lang}-4x3.webp", "WEBP", quality=86, method=6)
        save(make(post, lang, 1200, 1200, "stack"), out, f"{lang}-1x1.webp", "WEBP", quality=86, method=6)
