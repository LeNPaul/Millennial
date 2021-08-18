---
layout: post
title: "NeoGeo Pocket on PSP"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/neogeopocket.webp
---

Seeking to cleanse my memory stick after loading it with Wonderswan games, I decided to test out emulators for another Japanese handheld - a better one, this time. 

The NeoGeo Pocket and the Wonderswan might have been both designed in Japan, and they were both released at the turn of the century. But that's really all they have in common. The NeoGeo Pocket game library offers arcade ports, rather than anime games.

So what options do we have for emulating this device on PSP?

The NeoGeo Pocket gets not one, but two emulators from Akop Karapetyan - one of the masters of emulation on PSP. The offering is complemented by two additional emulators, ngPsp by Nexis2600 (later known as PSmonkey), and T. Kawamorita's e[mulator] for PSP.

### Race! PSP

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818171123.webp)

Karapetyan's [Race](https://archive.org/details/race-2.16-1.0.7z) is the best option on this list. It is not without drawbacks, and even at 333 Mhz it doesn't quite reach full speed. But to be worth recommending it just needs to be better than the competition, and Race clears this (admittedly low) bar.

A [modded version](https://archive.org/details/race.-7z) created by "theelf" adds support for overlays and some extra scaling options (2x software scaling). 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818193101.webp)

The drawback is that it drops support for all non-zipped ROMs, so I would recommend sticking to the original.

The [Japanese build](https://archive.org/details/race-jp.-7z) isn't just about the language of the emulator's interface, it's for the BIOS. All games launched by this version will be displayed in Japanese, too.

### ngPsp

While the other emulators on the list can load ROMs from any path, [ngPsp](https://archive.org/details/ngpsp.7z_202101) requires them to be in the `Roms` folder - the selection menu won't even open otherwise.

Once it starts, emulation is slow and crash-prone. Changing the scaling options in particular seems to trigger plenty of crashes.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818191941.webp)

None of this is surprising, as ngPsp is the oldest emulator on this list - it was last updated in September 2005.

### e[mulator] for PSP

The multi-system [e[mulator]](https://archive.org/details/emulator_082f.7z) by T. Kawamorita is pretty erratic when it comes to emulating the NeoGeo Pocket. The frame rate is all over the place, ranging from lows of 40 to highs of 60. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818171445.webp)

There isn't much to choose from in the settings, either. I see no scenario where it would be a better solution than Race.

### NeoPop PSP 

[NeoPop PSP](https://archive.org/details/neopoppsp.7z) is another emulator with no support for unzipped games. Karapetyan probably stopped updating it because Race was more promising, and its speed reflects that. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818193530.webp)

While NeoPop PSP exists, Race can be thought of as having superseded it in any practical use.

### RetroArch: Race core

The Race core on RetroArch 1.9.7 seems promising at first. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818172338.webp)

60 FPS would be great, considering that even the Game Boy cores struggle to reach full speed on RetroArch with most games. And indeed, press any button and this happens:

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818172451.webp)

The PSP did not freeze - you can still press the Home button and exit normally. But RetroArch is dead, and there's no reviving it without a reboot. This occurred with two separate games I tested.

### RetroArch: Beetle NeoPop core

The Beetle NeoPop core works, but expect frame rates in the mid-20s at best.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210818184843.webp)
