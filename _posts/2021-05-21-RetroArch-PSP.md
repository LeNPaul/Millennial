---
layout: post
title: "RetroArch on PSP: making the best of it"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/gottado.jpg
---

Everyone loves to hate on RetroArch. Being part of the 'everyone', I wholeheartedly share the sentiment. The emulator is a classic case of a jack of all trades and master of continuously crashing piece of software. 

Nonetheless, as time goes on, the chimera made in Libretro becomes harder to ignore. The very first version of RetroArch for PSP, released in late 2014, had seven cores. The current one has [forty-eight](https://buildbot.libretro.com/nightly/playstation/psp/latest/). Given that the Libretro Team still support platforms like the GameCube and the PlayStation 2, it seems safe to assume that they won't drop support for the venerable Sony handheld any time soon.

Sooner or later, RetroArch will be the best emulator on PSP *for any platform*. Time is on their side. For now though, the developers seem satisfied to let it compile and release it into the wild. More or less the developing equivalent of setting free an unwanted puppy on a busy highway before heading for the summer holidays. 

### What's good?

Enough complaining. Let's try and find the bright side of RetroArch - if there is one. 

First though, let's change the aspect ratio of the RetroArch menu to something suitable for a PSP, before the grainy, poorly scaled letters hurt your eyes even more. From the main menu, select Settings -> User Interface -> Appearance. The aspect ratio of a PSP screen (480x272) would be best approximated by a 16:9 ratio - but if you pick that one, bad things will happen. So let's settle for 16:10. 

The same menu has an option to add shadow effects to the fonts, an advisable choice to improve readability further.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-16-10.jpg)

That's better. 

To most accurately determine which cores are trash we will need an FPS counter - which RetroArch helpfully provides. From Settings, select On-Screen Display -> On-Screen Notifications -> Notification Visibility and finally, Display Framerate. Changing the Update Interval setting to 60 will make sure we won't have to wait too long to get confirmation of the inevitable slowdowns that some cores will throw at us.

Memory Usage would be another nice stat to have on screen, but it doesn't work, so don't bother with it. 

### SNES Test

Now let's throw some games at the cores. Not just the random Super Mario World - let's pick them carefully. The harder to emulate the games, the better they will identify weak cores.

Snes9X 2005 Plus struggles already at the introduction of Mario RPG. We can try and help it out - holding Start for a few seconds, the RetroArch menu will appear. Under Options, let's set the frame skip to Manual, and Reduce Slowdown to Max.

It barely makes a difference. All the help in the world won't make the game hit even the 30 FPS mark. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-SNES-1.png)

Let's see if the regular Snes9X 2005 fares any better with Donkey Kong Country 3.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-SNES-2.png)

Eh, barely. And while the PSP is a weak device, it can do better than this. As shown below, a native emulator like [s9xTYLme Mod](https://archive.org/details/s9xTYLme_mod.7z) can hover at around 30 FPS even in the 3D cutscenes of StarFox 2.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/s9xTYLme-Mod.png)

### Game Boy

For the Game Boy, we already know that RetroArch is a solid choice for playing Shantae. But what about any other game? As I test, I boot the Gambatte core with Army Men for GameBoy Color and at the start screen it reaches... 13 FPS?

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-Gameboy.png)

I've seen enough for this system. Moving on... 

### GBA

DK King of Swing is a game I never heard of, but according to random folks on the internet it is hard to emulate - so it will do for our purpose. There's no glitching on either emulator, but gpSP is noticeably faster than mGBA. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-GBA-1.png)

mGBA also performs very disappointingly with Metroid Fusion. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-GBA-2.png)

### Arcade

For Mame 2003 and Mame 2003 Plus there won't be any need to find a hard-to-emulate game. Ever a late 1980s game like AfterBurner will crash. And Burn.

### Atari Lynx

Finally we found something RetroArch PSP can emulate well. The Libretro emulator will play games from this early-90s handheld console at 60 frames per second.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-Lynx.png)

The problem is that I - like most people - don't really care about the Atari Lynx. This exemplifies a broader problem about RetroArch PSP: it is the best emulator only for a number of incredibly obscure and forgotten consoles. 

Take the BK-0010. While the children of the USSR might get teary-eyed at the sole mention of the home computer, it is safe to assume that anyone born on the right side of the Iron Curtain won't care about this device. I can't even think of a game to test it with.

### Sega Megadrive

It plays full speed - which is nice. Except everything comes in a bloody red filter. No amount of changes in the settings make any difference.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/RetroArch-Megadrive.png)

That's enough of RetroArch for now. 

### To sum it up

In short, RetroArch PSP is only worth using in two cases:

- for ancient, easily emulated systems, where downloading a separate emulator isn't an option;
- as a last resort, for games that are not emulated correctly by any native emulator on PSP (see [Shantae](https://psp-archive.github.io/emulators/gameboy-emulation.html)). 

In most other cases, even old native emulators that haven't been maintained in over a decade will offer better performance than the latest, newest RetroArch build. If you have an alternative, don't bother with RetroArch.
