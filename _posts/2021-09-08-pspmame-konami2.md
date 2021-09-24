---
layout: post
title: "I recompiled pspMAME"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/pspmame-konami2.webp
---

Having recently found out about the work of the [PSP Development Kindergarten group](https://ameblo.jp/pspdevblog/), I decided to recompile one of the pspMAME builds from their code. Here are the results:

Asterix

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908140450.webp)

Sunset Riders

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908143645.webp)

Ninja Turtles

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908143032.webp)

Aliens

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908073612.webp)

Crime Fighters

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908091418.webp)

Almost nothing runs full speed, but the improvement is absolutely noticeable regardless. Akumajou Dracula (the arcade version of Castlevania) runs 20 FPS faster on the PSP Development Kindergarten code:

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908092310.webp)

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908073400.webp)

And at least on a PSP slim, a lot more games will now launch simply because this build has been compiled with the option to use the extra memory if it's there. The `sbrk_psp:overflow` message should pop up a lot less.

### Download

Get it here: [https://archive.org/details/pspMAME](https://archive.org/details/pspMAME)

### Romset

The PSP port of MAME is based on version 0.97. This is kind of a weird version, so finding the right romset for it can be a pain. The closest sets are AdvanceMAME (based on 0.106) and MAME 2003 (0.78) - the best option is to get either of those (or better yet, both) and let a program like RomCenter do the heavy lifting.

### Save states

This feature was already in the MAME code, but it hadn't been implemented for whatever reason. Now it's accessible from the in-game menu (default button: L). Press R after selecting save or load to confirm.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908051859.webp)

The save feature seems to depend heavily on whatever happens to be in memory when you select it. So if you try to restore a saved state before the game is fully loaded, glitchy things will happen.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908144202.webp)

Start the game first, load the state only afterwards, and things will work just fine.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908144233.webp)

### Variable frameskip

Some arcade games have absurdly long loading times at the beginning. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908142142.webp)

As a workaround, assign some hotkeys to change the frameskip in the menu (input (general) -> user interface). You can then skip through the various ROM/RAM checks, and decrease the frameskip again once the game starts.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/20210908051347.webp)
