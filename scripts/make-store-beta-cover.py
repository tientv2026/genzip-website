"""Sinh ảnh đại diện bài "GenZip beta qua kiểm duyệt Microsoft Store" (VI/EN, nhiều tỉ lệ).

Chạy: py -I scripts/make-store-beta-cover.py public/news/store-beta  (cần Pillow, font Segoe UI, repo app ở S:/GenZip rust)
"""
import os, sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

APP = r"S:/GenZip rust"
OUT = sys.argv[1]
FONTS = r"C:/Windows/Fonts"
os.makedirs(OUT, exist_ok=True)

TEXT = {
    "vi": {
        "head": "GenZip beta|đã qua kiểm duyệt|Microsoft Store",
        "sub": "Bản beta riêng tư · 30/10/2026",
        "chip": "Miễn phí · Không quảng cáo",
    },
    "en": {
        "head": "GenZip beta|passed|Microsoft Store|certification",
        "sub": "Private beta · October 30, 2026",
        "chip": "Free · No ads",
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
        trial = (cur + " " + word).strip()
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


def paste_shot(canvas, shot, x, y, width, radius):
    s = shot.resize((width, round(shot.height * width / shot.width)), Image.LANCZOS)
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
    fh = font("seguisb.ttf", round(54 * scale))
    for line in wrap(draw, t["head"], fh, width):
        draw.text((x, y), line, font=fh, fill=INK)
        y += round(fh.size * 1.22)
    y += round(14 * scale)
    fs = font("segoeui.ttf", round(28 * scale))
    draw.text((x, y), t["sub"], font=fs, fill=MUTED)
    y += round(fs.size * 1.3) + round(22 * scale)
    y += chip(draw, x, y, t["chip"], font("seguisb.ttf", round(22 * scale)))
    return y


def make(lang, w, h, layout):
    t = TEXT[lang]
    icon = Image.open(f"{APP}/assets/icons/genzip-512.png").convert("RGBA")
    shot = Image.open(f"{APP}/docs/store/screens/{lang}_main-10k.png").convert("RGB")
    canvas = background(w, h).convert("RGBA")
    draw = ImageDraw.Draw(canvas)
    if layout == "side":
        scale = h / 630
        margin = round(64 * scale)
        text_w = round(w * 0.43)
        # đo khối chữ để căn giữa theo chiều dọc
        probe = Image.new("RGBA", (w, h))
        end = text_block(ImageDraw.Draw(probe), probe, icon, t, 0, 0, text_w, scale)
        text_block(draw, canvas, icon, t, margin, (h - end) // 2, text_w, scale)
        sx = margin + text_w + round(40 * scale)
        sw = round(w * 0.62)
        sh = round(shot.height * sw / shot.width)
        paste_shot(canvas, shot, sx, (h - sh) // 2, sw, round(14 * scale))
    else:
        scale = w / 1200
        margin = round(80 * scale)
        y = text_block(draw, canvas, icon, t, margin, margin, w - margin * 2, scale)
        sy = y + round(56 * scale)
        sw = round(w * 0.96)
        paste_shot(canvas, shot, margin, sy, sw, round(16 * scale))
    return canvas.convert("RGB")


def save(im, name, fmt, **kw):
    path = os.path.join(OUT, name)
    im.save(path, fmt, **kw)
    print(f"{name} {im.size[0]}x{im.size[1]} {os.path.getsize(path) // 1024} KB")


for lang in ("vi", "en"):
    og = make(lang, 1200, 630, "side")
    save(og, f"{lang}-og.jpg", "JPEG", quality=88, optimize=True, progressive=True)
    wide = make(lang, 1280, 720, "side")
    save(wide, f"{lang}-16x9.webp", "WEBP", quality=86, method=6)
    save(wide.resize((800, 450), Image.LANCZOS), f"{lang}-thumb.webp", "WEBP", quality=86, method=6)
    save(make(lang, 1200, 900, "stack"), f"{lang}-4x3.webp", "WEBP", quality=86, method=6)
    save(make(lang, 1200, 1200, "stack"), f"{lang}-1x1.webp", "WEBP", quality=86, method=6)
