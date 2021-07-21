---
layout: post
title: "Emulating the NES on PSP"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/NES-PSP.png
---

Are 16 emulators too many for a single system? If you're a PSP owner, that's how many choices you have to emulate the NES.

They are not really 16 different emulators, though. Most of them have been forked, at different times, from a common project. Here we will group them according to their bloodlines. 

## Based on FCE Ultra

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/icon0/FCEUltra.PNG)

[FCEU-PSP](https://archive.org/details/fceu-psp.7z) is the work of the Brazilian (I think) coder, bootsector. If you have to pick only one emulator from this list, I see no reason not to go with this one. 

HamsterBert ported three emulators for three separate systems, all in March 2006. [PSPFceUltra](https://archive.org/details/pspfceultra_rls_2.7z) was one of them. Less gloriously, he shared the source code for none - GPL licence be damned. Just like the other two emulators, PSPFceUltra stopped being updated during the same month it was first released.

Takka released four further updates for FCEU-PSP, choosing to name his builds [FCEUltra for PSP](https://archive.org/details/fceultra-j.-7z).

## Based on NesterJ

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/icon0/NesterJ_icon01_tg.png)

NesterJ is the most prolific of the lot. If you ever played a random NES emulator on PSP, odds are it was based on this emulator.

The granddaddy of them all was simply named [NesterJ for PSP](https://archive.org/details/nester-j-v-1-20beta-2.7z). Created by the Japanese coder ruka, it was the first NES emulator for the system. It has a convoluted history, even by the standards of PSP emulation. Ruka released version 1.20 in 2006, before putting the project on hiatus for four years. To date, it is the only NES emulator with support for Net Play. 

In 2010, when the PSP was already in its waning days, ruka returned to the project he fathered. He did so by publishing version.. 1.13? No Net Play to be found in this build. 

Davex created rewind mods for seemingly as many PSP emulators as he could. His efforts gave us [NesterJ Plus RM](https://archive.org/details/nester-p.-7z_202106).

Another NesterJ version with rewind is [NesterJ RX Mod](https://archive.org/details/nester-j-112-rx-mod-20160324.7z), created by "フェニックス" (no worries, the interface is in English). Released in March 2016, it is also the most up-to-date emulator on this list.

[NesterJ AoEX](https://archive.org/details/nintendo-nester-j-ao-ex-r-3.7z) by ShimaFlareX is also pretty up-to-date - by PSP standards. The last release (R3) came out only nine years ago. This is also the most commonly shared build on English-language websites.

Chinese speakers can resort to [NesterJ 非官方中文](https://archive.org/details/nester-p.-7z), though the language is set to English by default, and needs to be first changed in the settings.

Another China-centric fork is [NesterJ PSP for CN](https://archive.org/details/nester-j-0.3cn.-7z). Its main selling point is mappers that can support the many bootleg Chinese games that came out for this system.

[Unofficial NesterJ](https://archive.org/details/uo_nj2.7z) is a very early fork of the original NesterJ. Created by T. Kawamorita (aka "e"), it was later developed as a core of the multi-system emulator, [e[mulator] for PSP](https://archive.org/details/emulator_082f.7z).

[NesterJ 3D](https://archive.org/details/nester-j-3-d-a.-7z) is a curious beast. Its only reason to exist is to support the handful of 3D games (glasses, not polygons) that were created for the system. I don't have the name of the developer for this one - if you're out there, come and claim your place in history.

## Based on InfoNES

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/icon0/NES_icon01_tg.png)

The list of InfoNES-based emulators is the shortest. It seems that this emulator offered few advantages over the other two, as development of all builds was abandoned by late 2005.

[Famicontest](https://archive.org/details/famicontest031.7z) is the work of Binboukamisami. Apparently, it was also his only work for PSP. 

TMK, better remembered for his PSPMAME ports, also ported [InfoNES](https://archive.org/details/info-nes-r-03.7z) 0.95 to PSP.

The simply-named [NES for PSP](https://archive.org/details/nes-05.7z), created by REi, is also based on InfoNES. Sadly, the last build from June 2005 does not boot at all on modern PSP firmwares.

## Unknown parentage

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/icon0/icon0_missing.png)

[Little John NES](https://archive.org/details/lj-nes-psp.7z) is the most bizarre on the list. It was ported by Tinnus from a Palm OS emulator, and was only intended as a proof of concept. Being just a test, it is really bare-bone: no menu, no settings. The original emulator is itself less accurate than either NesterJ or FCEUltra. I'm guessing the point of the port was to just show a Palm OS to PSP port could be done. In which case - mission accomplished.

Header credit: http://pspdeasb.qp.land.to/