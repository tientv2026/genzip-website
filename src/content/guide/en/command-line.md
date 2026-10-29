---
title: Command line
description: Call GenZip from PowerShell, scripts or shortcuts.
order: 10
---

## Commands

| Command | Action |
|---|---|
| `genzip` | Open Home |
| `genzip <archive>` | Open an archive |
| `genzip x <archive> [--to <dir>]` | Open the Extract dialog with the destination filled in |
| `genzip e <archive>` | Extract into a subfolder next to the archive |
| `genzip a <source>...` | Open the Create dialog with these sources |
| `genzip a --quick zip <source>...` | Quick add to ZIP |
| `genzip a --quick 7z <source>...` | Quick add to 7z |
| `genzip t <archive>` | Test an archive |
| `genzip --version` | Print the version |

## Examples

```powershell
genzip x "D:\Docs\Backup.7z" --to "D:\Restore"
genzip a --quick 7z "D:\Docs" "D:\Photos"
```

<div class="callout"><strong>Tip</strong>Put paths containing spaces or Vietnamese characters in double quotes.</div>
