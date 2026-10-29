---
title: Passwords and encryption
description: Protect archives with AES-256 and encrypt file names.
order: 5
---

## Set a password when creating an archive

In the **Security** column of the **Create archive** dialog:

1. Choose **Encryption**: ZIP offers ZipCrypto or AES-256; 7Z offers AES-256.
2. Enter the **Password** and **Confirm password**.
3. For 7Z, enable **Hide file names (7Z)** to protect the file name list as well.

Use the eye buttons or **Show password** to check your input. TAR has no encryption option.

## Open a protected archive

GenZip displays the **Password** dialog when a password is needed to process an archive.

## Verify after compressing

Enable **Verify after compressing** in the creation dialog to test the new archive using the same password.
