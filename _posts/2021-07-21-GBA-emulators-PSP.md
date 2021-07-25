---
layout: post
title: "The GameBoy Advance on PSP"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/GBA-PSP.png
---

If there is a system the PSP can emulate well, it is the GameBoy Advance. The screen ratio is similar, they are both handhelds, and there are no extra buttons to emulate. The PSP overall serves GBA games pretty decently. Let's see who we have to thank for this.

## Based on VisualBoyAdvance

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/VisualBoyAdvance.1.7.2.png)

If you grew up in the early 2000s, and your parents weren't easily moved by your whiny appeals to buy you a GBA, odds are you're familiar with VisualBoyAdvance. The best GameBoy Advance emulator of the day was ported to PSP numerous times - with disappointing results. 

[VBA for PSP](https://archive.org/details/vbapsp.7z) was likely the first one, coming out in mid-2005. It was nothing more than a proof of concept, having no menu and no settings. Changing the game requires renaming the ROM every time. The creator is known as "499氏", probably indicating that the original release was the 499th post on some Japanese image board, according to the naming customs of the day.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/PSPGBA-PochiStyle.png)

[PSPGBA](https://archive.org/details/pspgba-v-1.2.7z) was a worthier - and later - attempt, created by some guy calling himself "psp298". He stopped working on the emulator in October 2005. Slasher picked up where the original developer left, releasing a single further update in June 2006. Slasher's version seems to be incredibly buggy though - no idea if it's because of the passing of time (and firmware upgrades), or if it was this bad to begin with.

The unimaginatively named [GBA emulator for PSP](https://archive.org/details/pspgba.-7z) by Miemt11 also seems to be a further development of psp298's port.

Ludovic Jacomme, the Frenchman who single-handedly ported 20 different systems to PSP, also tried his luck with the little Nintendo handheld. The resulting emulator, [PSPVBA](https://archive.org/details/pspvba.7z), is the best of the VisualBoy-based emulators. And yet, even Jacomme's emulator wasn't good enough. For all his talents, the French developer mostly ported systems from the 8-bit era. Emulating something like a GameBoy Advance on a hardware as limited as the PSP requires a completely novel approach.

## Based on gpSP

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/gpsp-release.PNG)

Enter Gilead Kutnick - aka Exophase. In August 2006 he released, quite out of the blue, the first build of his [gpSP](https://archive.org/details/gpsp09.7z), already in an advanced stage of development. Overnight, countless GBA games became suddenly playable on PSP. Development on the earlier VisualBoy-based emulators was abandoned just as suddenly. All later GBA emulators on PSP are based on gpSP, in one form or another.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/gpSP-09.jpg)

The first fork of gpSP was also the most controversial. [Unofficial gpSP Kai](https://archive.org/details/gp-sp-kai-v-3.4-test-4-b-230fat.-7z) was born when the Japanese developer Takka decided to fork Exophase's project. At first he did so without releasing the modified source code, in clear violation of the GPL licence. Exophase did not take very kindly to this, complaining quite loudly about the situation. Though Takka ultimately did release his source code, the damage was already done. Some PSP websites outright refused to carry Takka's version. PSP users, predictably, didn't care, and kept downloading it from whoever would host it. The Kai version became the dominant one, Exophase abandoned the PSP development scene altogether, while Takka kept releasing updates for another three years. The Russian developer ErikPshat, among others, continued to release tweaks for this build in the following years - most recently in 2017.

After Takka, a number of other forks emerged from Japan: [gpSP-J](https://archive.org/details/gpSP-J.7z) and [gpSP-mod](https://archive.org/details/gpSPmod20090720.7z). It can be difficult to tell them apart. Bar some minor cosmetic changes, they look the same, and perform the about same, too. 

A somewhat more substantial development came only in 2013, in the shape of [TempGBA](https://archive.org/details/temp-gba.-7z_202102). Another work of that most prolific author, "anonymous Japanese developer", it was put together by mixing the code of gpSP and Nebuleon's TempGBA for Nintendo DS (itself derived from gpSP). The outcome itself is rather mixed. To this day, one can see regular debates on whether gpSP or TempGBA is the superior solution for GameBoy Advance emulation. I have even seen some skilled developers claim that the last meaningful improvement was back in December 2006, when Exophase released the last official build.

[TempGBA4PSP-Mod](https://archive.org/details/temp-gba-4-psp-mod.-7z) is the last iteration of this fork, being last updated in 2016 by Phoe-nix.

Header credit: http://pspdeasb.qp.land.to/
