---
layout: post
title: "Game Boy emulation on PSP: the Shantae challenge"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/shantae-gbc.webp
---

One of the most frequent questions about homebrews on PSP is which emulator offers the best performance for a given system. Providing an answer is tricky: the limited specs of the first Sony handheld mean that developers have to cut corners to emulate even the simplest systems. Depending on the specific optimizations, some games will work best on one emulator, while others on a different one.

Still, it is possible to generalize without testing an entire romset. For the Game Boy, Shantae is often used as a litmus test, as it is rather difficult to emulate. It was released as the GameBoy Advance was hitting the shelves, and it is one of the more technically impressive games in the GameBoy library.

Let's see, then, how the GameBoy emulators on PSP perform with Shantae.

### GeMP (Homer's RIN)

[GeMP](https://archive.org/details/ge-mp.-7z) is a fork of Mirakichi's RIN emulator, created by a guy calling himself Homer. Our Homer loves anime girl butts like the other Homer loves donuts, so if that offends you, I'd suggest moving on to the next emulator.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-GeMP.webp)

The start screen is already pretty glitchy. The emulator will not boot if it's not placed under PSP/GAME directly, so don't move it in a subfolder.

### PSP-gnuboy

The [PSP-gnuboy](https://archive.org/details/pspgnuboy_rls.7z) emulator by HamsterBert only saw one release, back in 2006. The screen renders correctly, but the emulation is slow. And there's no sound.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-PSP-gnuboy.webp)

### MasterBoy

[MasterBoy](https://archive.org/details/masterboy.-7z), the multisystem emulator by Brunni, plagiarized multiple times by lamos trying to claim his work for themselves, doesn't perform too well with the game about the half-genie girl.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-MasterBoy.webp)

### PlutoBoy

[PlutoBoy](https://archive.org/details/plutoboy.-7z) is the only emulator on the list still under active development. There are no visible glitches, but the emulation is painfully slow, and lacks sound altogether. The game is inexplicably stretched to fill the screen, with no setting available to change it to its natural ratio. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-PlutoBoy.webp)

### RetroArch

I'm no fan of RetroArch - at least not of the PSP build. But when it comes to GameBoy emulation, the Gambatte core offers fast and accurate rendering. Unlike Gnuboy, it also has sound. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-Gambatte.webp)

### RIN

The grandaddy of emulators of PSP, released nearly 16 years ago, shows his age by taking a nap and refusing to boot at all. eLoader didn't wake it up, either.

### PSP RIN Rewind Mod

[PSP RIN](https://archive.org/details/rin-1-32-rm.-7z), a slightly modified version of the original RIN, seems to have confused the Shantae start screen with Pokemon's Glitch City.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-PSPRIN.webp)

### SpiceBoy

[SpiceBoy](https://archive.org/details/spice-boy.-7z) is the GameBoy emulator created by the late Arguru, better known in the homebrew scene as the author of Super Mario Mini. It renders correctly - but again, stretches the screen to a 3:2 ratio, with no option to use another one. The addition of very visible scanlines is also a pretty dubious choice. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-SpiceBoy.webp)

## The verdict: a victory for Team RetroArch

As it stands, the Gambatte core on RetroArch offers the best GameBoy emulation experience on PSP. It is also a rather unique case of RetroArch being in any way useful on a PSP. 

Needless to say, I hope the trend will continue. If the Libretro devs decided to give some love to the old PSP, it would change the whole emulation scene on the device for the better.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/GBemus-family.webp)

Family tree of GameBoy emulators on PSP.

### UPDATE: e[mulator]

I'm updating the post because I'd forgotten about the oddly named [e-mulator](https://archive.org/details/emulator_082f.7z), a multisystem emulator that also supports GameBoy games. In all fairness it seems to be forgotten by everyone - perhaps even the T. Kawamorita who created it. Unfortunately, despite a promising performance at the start screen, this emulator turns glitchy at the very next screen. RetroArch still reigns supreme - like it or not.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/Shantae-e-mulator.webp)

### Download

<p class="download-btn">
    <a href="https://archive.org/details/retro-arch-1.9.0.7z">
	<img border="0" alt="Download the homebrew" src="/assets/img/icon0/Retroarch.webp" width="130" height="70">
	Download RetroArch
	</a>
</p>
