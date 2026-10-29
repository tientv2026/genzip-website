---
title: Extract files
description: Extract everything or just the selection, handle existing files.
order: 3
---

## The fastest way

Right-click an archive in Explorer → **GenZip → Extract here**. GenZip creates a subfolder named after the archive and extracts into it.

## Using the Extract dialog

1. Open the archive and (optionally) select the items you need.
2. Click **Extract** on the toolbar.
3. Choose the **Destination** — recent folders are remembered. Enable extraction into a folder named after the archive if you want a separate subfolder.
4. Choose what to do with existing files: **Ask**, **Overwrite**, **Skip** or **Auto-rename**.
5. Click **Extract**.

<figure>
  <img class="shot-light" src="/screenshots/extract-en-light.png" alt="Extract dialog with the destination folder and file handling options" width="1100" height="680" loading="lazy" decoding="async" />
  <img class="shot-dark" src="/screenshots/extract-en-dark.png" alt="Extract dialog with the destination folder and file handling options" width="1100" height="680" loading="lazy" decoding="async" />
  <figcaption>Choose where to save files and how to handle existing files before extracting.</figcaption>
</figure>

## More options

- **Open destination folder when done**.
- **Verify after extraction** — runs an integrity test right after.

## When files already exist

With **Ask** selected, GenZip shows a dialog for each existing file. You can overwrite it, skip it or keep both files by automatically adding a number to the new file name. You can also apply your choice to all files.

## Safety

GenZip blocks entries with dangerous paths (`..\`, absolute paths, Windows device names) to prevent archives from writing outside the destination. Files downloaded from the Internet keep their Mark-of-the-Web, so Windows still warns you when opening them.
