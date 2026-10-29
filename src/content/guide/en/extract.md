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
3. Choose the **Destination** — recent folders are remembered.
4. Choose what to do with existing files: **Ask**, **Overwrite**, **Skip** or **Auto-rename**.
5. Click **Extract**.

![Extract dialog](/screenshots/extract-en-light.png)

## More options

- **Open destination folder when done**.
- **Verify after extraction** — runs an integrity test right after.

## Safety

GenZip blocks entries with dangerous paths (`..\`, absolute paths, Windows device names), so an archive can never write outside the destination. Files downloaded from the Internet keep their Mark-of-the-Web, so Windows still warns you.
