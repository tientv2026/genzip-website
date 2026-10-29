---
title: Updates
description: How to update the Microsoft Store and direct-download builds.
order: 9
---

## Microsoft Store build

The Microsoft Store updates GenZip. In this build, GenZip itself does not connect to the network.

## Direct-download build

- With automatic checks on, GenZip checks **at most once a day**.
- The request carries no machine ID, user name or current version.
- The release manifest is **signed with Ed25519**; anything with a bad signature is rejected.
- Click **Check now** in **Settings… → Updates** to check manually.
- The **Beta** channel gets test builds earlier.
