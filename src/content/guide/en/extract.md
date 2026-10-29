---
title: Extract files
description: Extract everything or just the selection, handle existing files.
order: 3
---

## Extract from Explorer

Right-click an archive and choose:

- **Extract here**: extract at the archive's location.
- **Extract to "&lt;name&gt;\\"**: extract into a folder named after the archive.
- **Extract files…**: open the dialog to choose a destination and modes.

## Using the Extract dialog

1. Open the archive. Select items if you only need some of them; GenZip extracts the selected items when there is a selection.
2. Click **Extract** on the toolbar.
3. Choose the **Destination**: enter a path, use **Browse…**, destination history or the folder tree (This PC, Desktop, Documents, Downloads…). Use **New folder** if needed.
4. Choose the **Update mode** and **Overwrite mode** described below.
5. Click **Extract**. Enter the password when the **Password** dialog appears.

<figure>
  <img class="shot-light" src="/screenshots/extract-en-light.png" alt="Extract dialog with destination, update mode and overwrite mode" width="720" height="512" loading="lazy" decoding="async" />
  <img class="shot-dark" src="/screenshots/extract-en-dark.png" alt="Extract dialog with destination, update mode and overwrite mode" width="720" height="512" loading="lazy" decoding="async" />
  <figcaption>Choose the destination, update mode and handling of existing files.</figcaption>
</figure>

## Update mode

- **Extract and replace files**.
- **Extract and update files**: extract only newer or new files.
- **Freshen existing files only**.

## Overwrite mode

- **Ask before overwrite**.
- **Overwrite without prompt**.
- **Skip existing files**.
- **Rename automatically**.

## More options

- **Keep broken files**.
- **Open destination folder after extraction**.
- **Save settings** to save your choices.

## When files already exist

With **Ask before overwrite**, the **File already exists** dialog offers **Replace**, **Skip**, **Keep both**, **Rename…**, **Stop** and an option to apply the choice to all files.

## Safety and progress

GenZip blocks dangerous paths such as `../` and device names, applies limits on entry count, expansion ratio, size and depth during extraction, and preserves Mark of the Web.

The progress window offers **Run in background**, **Pause/Resume** and **Cancel**.
