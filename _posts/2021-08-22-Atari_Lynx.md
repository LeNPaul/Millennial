---
layout: post
title: "Emulating the Lynx on PSP"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/lynx.webp
---

The Lynx might have more PSP emulators than games: PLynx, Handy-PSP (twice), an e[mulator] core, two RetroArch cores.

This abundance is probably because the Lynx is an emulator coder's dream: the thing runs games so slowly, that running games at 60 FPS or at 10 barely makes a difference.

### Handy-PSP by Exceed

[Handy-PSP](https://archive.org/details/handy-psp-001.7z) is Exceed's port of the Handy emulator - and a rare instance of an emulator for PSP with bezels. Not a particularly good-looking bezel, but it can be turned on and off at the press of a button. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210822100235.webp)

The emulation is far from being full speed, but as mentioned above, you'd barely notice even if it was running at 10 FPS. The really iffy thing about Handy-PSP is the only available scaling option - the 2x upscaling leaves you with huge pixels even on the modest screen of a PSP.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210822100037.webp)

### PLynx

[PLynx](https://archive.org/details/plynx-v-09.7z) offers more control - for instance, by actually providing an options menu. The scaling options here available are x1, x2 and full screen. All are more convincing than anything the two Handy-PSPs have to offer. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210822100820.webp)

Emulation speed is, again, not much of a factor for this console.

### Handy PSP by Akop Karapetyan

[Handy PSP](https://archive.org/details/handypsp.7z) is a rare misfire in Karapetyan's line of emulators. No matter which video setting is chosen, games end up looking all too blurry to be enjoyable. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210822101340.webp)

### e[mulator]

[e[mulator]](https://archive.org/details/emulator_082f.7z) by T. Kawamorita can emulate a bunch of low-powered consoles - the Lynx among them. Support for the Lynx, though, can be described as experimental at best. Games will load, but play surprisingly glitchy and slow.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210822110431.webp)

### RetroArch cores

Both the Beetle and the Handy cores refused to work on RetroArch 1.9.7. The games load, but the FPS count remains stuck at zero. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210822102454.webp)

The BIOS was the same I used for the other emulators. At least the Handy core used to work on earlier RetroArch builds, so I'm not sure what's causing this. The Lynx used to be one of a handful of systems RetroArch could emulate well, so I hope this will be fixed at some point.
