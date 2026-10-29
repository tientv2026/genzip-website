---
title: Create an archive
description: Compress to ZIP, 7z or TAR, use presets and split volumes.
order: 4
---

## Quick add

Right-click files or folders in Explorer and choose **Add to "&lt;name&gt;.zip"** or **Add to "&lt;name&gt;.7z"**.

## The Create archive dialog

From Home, choose **Create archive…**, or use the **Add to archive…** right-click command. The dialog is a single page with two settings columns.

1. Enter the **File name** and choose an extension in the adjacent box: `.zip`, `.7z`, `.tar` or `.exe` for a self-extracting archive made from 7Z.
2. Choose **Save to**, using **Browse…** to select a folder.
3. Select one of the three format cards: **ZIP**, **7Z**, **TAR**.
4. Choose a **Preset**: **Balanced**, **Maximum compression**, **Fast** or **Store**.
5. Adjust the two columns below if needed, then click **Create archive**. Click **Cancel** to close the dialog.

The defaults are ZIP, compression level 5, Deflate, no splitting and no encryption.

## Compression settings column

- **Compression level**: **Store** or 1–9; **Normal** is 5 and **Maximum** is 9.
- **Method**: ZIP offers Deflate/Store; 7Z offers LZMA2/LZMA/Store; TAR uses Store.
- **Dictionary**: adjust for the compression method.
- **Split to volumes**: **No split**, **100 MB**, **700 MB**, **4 GB FAT32**, or **Custom** with a number and MB/GB units.
- **Solid compression**: for 7Z.
- **Self-extracting (.exe)**: for 7Z without split volumes, using the official 7-Zip SFX module.

## Security column

- **Encryption**: ZIP supports ZipCrypto or AES-256; 7Z supports AES-256.
- Enter the **Password** and **Confirm password**; use the eye buttons or **Show password** to check them.
- **Hide file names (7Z)**: protects the file name list in a 7Z archive.

## Comment and verification

**Comment** opens a separate comment editor, available only for a single-file ZIP archive without split volumes.

Enable **Verify after compressing** to test the newly created archive using the same password.

## Follow progress

After compression starts, the progress window offers **Run in background**, **Pause/Resume** and **Cancel**. **Run in background** minimizes the window and shows the percentage on the taskbar icon. This button is in the progress window.

<div class="callout callout-note"><strong>RAR format</strong>GenZip reads and extracts RAR/RAR5; use ZIP, 7Z or TAR when creating an archive.</div>
