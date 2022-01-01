---
layout: post
title: "Vectrex games? On my PSP?"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/vectrex.webp
---

The Vectrex might seem like a hard system to emulate, given its quirky vector graphics and the resulting peculiarity compared to other game consoles of the era. But even the GP32 - a handheld older than the PSP - is reportedly [capable of emulating it](https://pdroms.de/miscellaneous/vecx-gp-v1-vectrex-emulator-for-gp32), so perhaps replicating its phosphor monitor is easier than it looks.

The PSP scene offers two options to emulate the Vectrex: PSP VecX and PSPVE. Both are based on an emulator created for Windows computers by Valavan Manohararajah.

### PSP VecX

The origins of [PSP VecX](https://archive.org/details/pspvecx.7z) are a bit murky. Created by a coder known as Samstag, its original release was announced on scene websites in December 2005. The readme file included in the package is strictly functional, sticking to installation instructions, with none of the usual scene greetz or reported affiliations. Even Samstag's name is only known thanks to the credits appearing on scene websites.

At least the first release did include a readme. A later update, to version 1.51, carries no documentation at all. And while the original release weighs in at an austere 130 kb, the updated version abounds in unnecessary assets, such as external fonts and MP3 background music. Were they really created by the same developer?

PSP VecX has a pre-set (and very limited) list of games to choose from, but the selection only changes the name of the ROM file being loaded, and the overlay. There is nothing to prevent you from renaming the game of your choice to say, `Armor_Attack.bin` and playing it regardless. Still, this is a completely unnecessary annoyance.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20220101180305.webp)

The emulator has some similarly narrow and specific expectations when it comes to ROM names. If you want to play Armor Attack, you'd better have a ROM named `Armor_Attack.bin` in the ROMs folder. Pointing the emulator in the direction of the file just isn't an option.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20220101180441.webp)

This crude approach to emulation also reflects on the settings and options available: there are none. And once the games start there is no sound, either.

The developer did pay some attention to the visual presentation of the games. On a bigger screen, the bezels might have added a suitable retro touch. On a PSP though, their main effect is to squish the already tiny vector images even further.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20220101180731.webp)

Pausing the game is possible, but will introduce a blinking effect to the already seizure-friendly graphics of the Vectrex.

### PSPVE

[PSPVE](https://archive.org/details/pspve-v1.0.2-fw3x.7z) is a work of Ludovic Jacomme, aka ZX-81. If you own a PSP and use it for emulation, this name will be familiar to you. Jacomme crafted dozens of emulators for the PSP in the late 2000s, including this one, for the Vectrex.

This is a more carefully developed emulator, relying on the user interface shared by all Jacomme applications to offer features such as a ROM selection menu. There are also a few options to adjust the screen rotation, or display the frame rate. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/PSPVE-interface.webp)

There are plenty of errors in the rendering of vectors in both emulators, which will inevitably detract from the experience. Text, in particular, is unreadable in nearly every instance. Good thing the Vectrex does not have many visual novels in its library.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20220101180036.webp)

The portrait-style display of the Vectrex is a poor fit for PSP controls, and while PSPVE has an option to rotate the screen, the resulting image is too small to be properly visible.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20220101175409.webp)

PSPVE is definitely the better emulator - though to be fair, PSP VecX didn't put up much of a fight. The only feature available on PSP VecX but not on PSPVE is support for overlays - not nearly sufficient to justify all the other trade-offs.

Ultimately, neither emulator is particularly enjoyable to use. Perhaps some day, a Vectrex core will be added to the PSP version of RetroArch. Until then though, the old vector-based console is best emulated on other devices.
