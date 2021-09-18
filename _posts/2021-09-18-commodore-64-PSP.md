---
layout: post
title: "Commodore 64 on PSP"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/commodore64.webp
---

The Commodore 64 is another of those classic gaming devices that are probably more praised than played. For the uninitiated, it can be hard to understand the reasons of the Commodore's lasting fame. The games it features look precisely like what you would expect from any early 1980s home computer. 

Deserved or not, this fame did lead some developers to create portable C64 emulators for the PSP. They are PSPVice, Vice-PSP and c64psp.

The usual issue with home computers is emulating a keyboard with just the few buttons a PSP has to offer. Most Commodore games seem to work fine without keyboard inputs though, so the main annoyance here is dealing with the wonky game-loading process. No matter which emulator you choose, you will see a lot of seizure-inducing screens.

### Vice-PSP

[Vice-PSP](https://archive.org/details/pspvice_3.2.5.7z) is another emulation work by Akop Karapetyan. Like other Karapetyan works, it was kept alive in recent years by other developers - DelayedQuasar and rsn8887, in this case. The most recent version of this emulator was released in December 2019 - which by the standards of the PSP homebrew scene, might as well be yesterday.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/vicepsp-settings.webp)

Vice-PSP offers the most polished interface among the emulators on this list, reusing the excellent framework from Karapetyan. The scaling options are basic, but adequate: x1, horizontal stretch and vertical stretch. The real drawback of this emulator is the awful loading speed. It can be improved somewhat by disabling True Drive Emulation, but even then it remains quite bad. There is a setting to show activity indicators on screen - and good thing too, as too often the system feels dead frozen otherwise. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210918131532.webp)

The Commodore 64 is weak enough that most games run just fine even if the emulator runs at 222 Mhz.

### c64psp

Count the various forks and unofficial builds, and the PSP can boast over 200 emulators. The vast majority were only updated for a few weeks though, after which they were abandoned to themselves. [c64psp](https://archive.org/details/c64psp.7z) by Urchin is a case in point - version 0.3 was its last release, and it came out in time for Christmas 2005. Unlike the other two, c64psp is based on Frodo, rather than the Vice emulator.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210918125024.webp)

c64psp will only display games if placed in the `\PSP\C64ROMS` folder.

c64psp could have used some extra weeks of development - in its present state, it feels rather incomplete. Instead of a proper options menu, we are greeted with an image explaining controls and shortcuts. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210918124513.webp)

### PSPVice

[PSPVice](https://archive.org/details/pspvice.7z) by Christophe Kohler is probably the best of the emulators featured here. The speed is adequate, and the amount of control offered by its options is sufficient without proving overwhelming. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210918124047.webp)

The default scaling settings look quite terrible, but they can be easily changed in the settings.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210918124224.webp)

### Frodo core

The Frodo core is a fine example of RetroArch quality control. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210918125648.webp)

I got so bored of writing about RetroArch for PSP being broken and useless that I tested Frodo on two different builds before giving up - RetroArch 1.9.7 and 1.9.9. 

The outcome was the same - a black screen. 
