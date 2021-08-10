---
layout: post
title: "Why all early homebrews had this icon"
author: "Pierre L"
categories: apps
tags: [PSP,homebrew]
image: /assets/img/random/ICON0-animegirlbutt.webp
---

The PSP equivalent of the Windows executable, I learn today, is the `.elf` file format (Executable and Linkable Format).

But a PSP won't run them directly. To do that, they need to be sandwiched into the ubiquitous EBOOT.PBP format used by all PSP applications - homebrews or otherwise.

The creation of a software that would take an `.elf` file as input and spit out a PBP file was an indispensable first step towards the creation of homemade applications.

In May 2005, a Windows program was created to do just that. The developer was a guy who called himself... [loser](https://www.neowin.net/forum/topic/316262-let-the-homebrew-coding-begin-elf-to-pbp/)?

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/elf2pbp-20050504.webp)

To test the application, I grabbed a random `.elf` (a tech demo, as it happens) and fed it to the elf2pbp program loser created 16 years ago. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/elf2pbp-exe.webp)

The outcome: the program takes the original `.elf` file - unchanged, but renamed to `data.psp` - and adds a `PARAM.SFO` which encloses some basic metadata.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/elf2pbp-result.webp)

Oh, and adds the icon.

So unless the 2005-era homebrew coder went through the trouble of removing the icon (or adding his own), the app was all but guaranteed to be distributed carrying the now well-known anime girl.

Modern iterations of the PSP toolchain still include an elf2pbp application, but the mandatory default icon has long since been removed. We don't know what loser thinks of that.
