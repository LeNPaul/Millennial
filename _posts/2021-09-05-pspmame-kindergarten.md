---
layout: post
title: "What's remarkable about pspMAME?"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/pspmame-yt.webp
---

pspMAME is not a [Mame4All](https://psp-archive.github.io/emulators/PSP-Mame4All.html), Mame4Many or Mame4Few. In other words, it's not a stripped-down arcade emulator that shares some code with MAME. It *is* MAME 0.97 - the full Windows program from June 2005 - running on a PSP screen.

Even modern Chinese handhelds generally only have access to downsized versions, such as AdvanceMAME. But pspMAME is the real deal. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210904025815.webp)

Is that precisely why it runs so poorly, though? This MAME port is notorious for its slowdowns, even when emulating games from the early 80s. But the poor performance has little to do with the emulator, the PSP hardware or even the specific port. pspMAME has the potential to be one of the better arcade emulators on any handheld, and even just limited tweaks can make it significantly better.

### A bit of emulation history

TMK - the Japanese developer who created the port - released the first version in June 2005, and updated it regularly [until August](https://web.archive.org/web/20060622041454/http://geocities.yahoo.co.jp/dr/view?member=pspmame) of that same year. After that, nearly five years of radio silence followed. TMK came back to his emulator in 2010 for [two minor updates](http://tmk2000.blog41.fc2.com/blog-category-1.html) (for old times' sake, presumably) in February and March 2010. And that was it. The source code for version 0.5 is archived [here](https://github.com/pierrelouys/pspMAME-0.97-TMK), but it is effectively still stuck where it was in August 2005.

A Brit by the name of [MikeDX](https://www.dcemu.co.uk/vbulletin/threads/23072-I-m-working-with-TMK-s-pspMAME) picked up TMK's code in April 2006, but he gave up after [a single release](https://archive.org/details/mamepsp.-7z), having achieved nothing much in the process.

Takka - another Japanese coder, better known for his fork of gpSP - also released builds of pspMAME [on his website](https://web.archive.org/web/20100114022957/http://takka.tfact.net/blog/?p=1074). But despite claims to the contrary on western PSP websites, he did no work on the emulator - he simply recompiled TMK's code for newer firmware versions.

### Kindergarten devs

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/mame-kindergarteners.webp)

As it turns out, somebody did work on pspMAME a fair amount. But their work is pretty obscure, and it is only by chance that it wasn't completely and irretrievably lost. The PSP Development Kindergarten coding group ([ＰＳＰ開発幼稚園](https://ameblo.jp/pspdevblog/)) created custom builds of pspMAME for over a year, from late 2006 to October 2007. Rather than creating an emulator compatible with everything and optimized for nothing, they wisely decided to focus on specific arcade boards, like the [Namco System 1/2](https://archive.org/details/namcoNA.7z) or the [Taito Asuka](https://archive.org/details/taitoAX.7z). 

Yet for whatever reason, neither Japanese nor Western scene websites picked up on their releases - and their self-hosted files turned into 404 pages long ago. So most of their work is now lost, save a couple of builds and a single [repository backup](https://github.com/PSP-Archive/mame097) from November 2006. 

### Accidental preservationist

That would be the end of the pspMAME story, if not for Repuken2. The best that can be said about the guy is that he had more good intentions than coding skills. As he put it in the [release thread](https://www.dcemu.co.uk/vbulletin/threads/303785-new-mame-for-psp) back in 2010, he simply wanted the Simpsons game on his PSP, and got tired of waiting for others to do it.

By some miracle he found the source code of the PSP Development Kindergarten version of MAME, and proceeded to replace files, code blocks and more generally make a mess of the repo, until he unilaterally declared victory and retreated from the project after three releases. But he did share the source code of his work, after someone asked for it. It is this broken, heavily redacted fork of pspMAME that survives today.

### Picking up the pieces

Despite the sorry state of [the repo](https://github.com/PSP-Archive/pspMAME097-repuken2), this is still a full, real version of MAME we are dealing with. And because of that, there are lots of additional features already implemented in there, just waiting to be activated. Save states, for instance. The code was already there, but nobody had yet added the relevant options to the menu.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/pspmame-states.webp)

There are additional benefits as well. I don't know how, but the Kindergarten devs managed to squeeze quite a few extra FPS from TMK's emulator, without having to give up quality. 

Armed F: from 18 FPS to 30

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210831001020.webp)

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210904123956.webp)

Momoko: from 40 to 52

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210829220606.webp)

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210831215147.webp)

City Connection: from 40 to full speed (80 FPS if not limited)

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210830103004.webp)

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905063854.webp)

City Connection was the game that led me to fix the throttle option - one of the many that were broken in Repuken2's version.

Another benefit is the support for the extra memory on the PSP slim. For whatever reason, even TMK's 2010 recompile offers no support for the full 64 Mb. Adding it means that many more games can now launch.

Altered Beast

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905102016.webp)

Blandia

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905063224.webp)

Afterburner and Out Run will launch, but they are still too slow to be remotely playable.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905112102.webp)

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905111528.webp)

### Killing sound

A somewhat extreme solution to address laggy framerates is to replace the sound CPU with a dummy. The outcome of this measure depends entirely on the game.

Armed F and The Simpsons gain over 10 FPS

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905123307.webp)

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905132953.webp)

For Out Run, killing the sound CPUs barely moves the needle. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210905123903.webp)

Lead image: [4play1981](https://www.youtube.com/watch?v=LADs1XKm9NA) from YouTube.
