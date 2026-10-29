---
title: Passwords and encryption
description: Protect archives with AES-256 and encrypt file names.
order: 5
---

## Set a password

1. In the Create dialog, enter the **Password** and confirm it.
2. Choose the **Encryption method** (AES-256).
3. With 7z, choose to encrypt **content and file names** so nobody can even see the file list.

Use the eye icon or **Show password** to check what you typed.

## Open a protected archive

GenZip asks for the password when needed and lets you retry if it is wrong.

## Good to know

- GenZip **never** stores passwords on disk or in logs.
- A forgotten password **cannot be recovered by GenZip** — GenZip does not crack passwords.
- For passwords with Vietnamese accents, use **7z**. ZIP does not handle accented characters in passwords well.
