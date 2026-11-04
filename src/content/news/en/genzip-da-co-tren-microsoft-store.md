---
title: GenZip is now on Microsoft Store
description: The free archive manager for Windows 10/11 is now public on Microsoft Store. Anyone can install it in one click.
date: 2026-11-04
tags: [Announcement]
cover: /news/store-public/en-16x9.webp
coverAlt: The GenZip icon, the words "GenZip is now on Microsoft Store" and the GenZip Home screen
images:
  og: /news/store-public/en-og.jpg
  thumb: /news/store-public/en-thumb.webp
  standard: /news/store-public/en-4x3.webp
  square: /news/store-public/en-1x1.webp
draft: false
pinned: true
---

**GenZip is now on Microsoft Store.** Starting today, anyone on Windows 10 or 11 can find and install GenZip for free, with no sign-up or invitation. The current release is **0.9.3 beta**.

<p class="store-links">
  <a class="btn btn-primary" href="ms-windows-store://pdp/?productid=9PLW8MXQBT2Q">Open GenZip in Microsoft Store</a>
  <a class="btn btn-outline" href="https://apps.microsoft.com/detail/9PLW8MXQBT2Q">View on the Microsoft Store website</a>
</p>

Or open the Microsoft Store app, search for **"GenZip"** and select **Get**.

## What is GenZip?

GenZip is an archive manager for Windows, built for the things you do every day: open a downloaded file, pull out a few files, compress a folder to send. It has a clean interface in **English and Vietnamese**, in light or dark mode to match Windows.

Compression and extraction are handled by the **official 7-Zip engine**, so speed and compatibility are on par with 7-Zip. If you are curious why we built it, read [Why we built GenZip](/en/news/vi-sao-genzip-ra-doi).

<figure>
  <img src="/screenshots/main-en-light.png" alt="The GenZip window with an archive open, showing the toolbar, file list and preview pane" width="1100" height="680" loading="lazy" decoding="async" />
  <figcaption>Double-click an archive and see what's inside straight away.</figcaption>
</figure>

## What you can do

### Open almost any archive

ZIP, **RAR/RAR5**, 7Z, TAR, GZ, BZ2, XZ, ZST, ISO, CAB, WIM and `.001` multi-volume files. Browse the folders inside, search for files, then extract everything or just what you need.

### Extract straight from the right-click menu

GenZip commands sit in the **top-level Windows 11 right-click menu**: Extract Here, Extract to a folder with the same name, or compress quickly to `.zip` / `.7z`. No need to open the app.

<figure class="narrow">
  <img src="/news/ra-doi/menu-tep-nen.webp" alt="Windows 11 right-click menu on a ZIP file with the GenZip commands" width="750" height="670" loading="lazy" decoding="async" />
  <figcaption>GenZip commands in the Windows 11 right-click menu.</figcaption>
</figure>

### Create archives your way

Create **ZIP, 7Z or TAR** archives with built-in profiles (General, Maximum compression, Fast, Store). When you need to, you can:

- **Set an AES-256 password**, and also hide file names with 7Z. See [Password-protecting archives](/en/news/dat-mat-khau-tep-nen).
- **Split** into parts for email or USB drives. See [Split archives](/en/news/chia-nho-tep-nen).
- **Create a self-extracting `.exe`** for recipients without an archiver. See [Self-extracting archives](/en/news/tao-tep-tu-giai-nen).

<figure class="narrow">
  <img src="/screenshots/create-en-light.png" alt="The Create archive dialog with format, profile, split and password options" width="680" height="508" loading="lazy" decoding="async" />
  <figcaption>All compression options in a single dialog.</figcaption>
</figure>

### Preview without extracting

Select an image or text file inside an archive and press **F3** to view it right away. Handy when you just want to check that it is the file you need.

<figure>
  <img src="/screenshots/preview-image-en-light.png" alt="GenZip previewing an image inside an archive" width="1100" height="680" loading="lazy" decoding="async" />
  <figcaption>Preview images right inside the archive.</figcaption>
</figure>

### Edit open archives

With ZIP, 7Z and TAR you can **add, delete and rename** files inside the archive, or drag files onto the window. No extracting and recompressing.

### Get more done without waiting

- **Task queue:** issue several commands in a row and GenZip works through them one by one.
- **Real pause**, background mode, and progress on the taskbar.
- Open or extract another file while a compression job is running.

### Test files before you use them

The **Test** button reads the whole archive and tells you if it is damaged or incomplete. You can export the result as a `.txt` report.

## Safe by default

- Blocks dangerous paths that would write files outside the folder you chose.
- Limits "zip bombs", tiny files that expand to fill your drive.
- Keeps Windows' warnings for files downloaded from the internet.
- Asks before opening files that can run code directly from an archive.

Details in [How to open downloaded archives safely](/en/news/mo-tep-nen-an-toan).

## Free and private

GenZip is **free**, with **no ads**, **no account** and **no data collection**. The Microsoft Store build never connects to the network by itself; installs, updates and uninstalls are handled by the Store. The publisher on the Store is **Dạ Trư**.

Requirements: **Windows 10 version 1809 or later, or Windows 11, 64-bit (x64)**.

## What's new in 0.9.3

Compared with the first beta, 0.9.3 fixes a batch of issues reported by testers: the right-click menu follows the language you choose, you can keep working while compressing, the password prompt no longer appears twice, and the taskbar displays correctly. The full list is in the [Release notes](/en/changelog).

## Feedback

GenZip is still in beta. If you run into a bug or want a feature, email **[info@tientv.com](mailto:info@tientv.com)**. If you find GenZip useful, the best way to support it is to **rate it on Microsoft Store** and tell your friends.

GenZip is **released only through Microsoft Store**. Any site offering a "GenZip.exe" download is not ours.

See also: [Features](/en/features) · [User guide](/en/guide) · [Speed](/en/benchmark)
