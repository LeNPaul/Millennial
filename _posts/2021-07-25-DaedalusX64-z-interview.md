---
layout: post
title: "Dev interview: Z2442 on DaedalusX64"
author: "Pierre L"
categories: emulators
tags: [PSP,homebrew]
image: /assets/img/random/DaedalusX-ME.jpg
---

[DaedalusX64](https://github.com/DaedalusX64/daedalus) is the current incarnation of the Nintendo 64 emulator started by StrmnNrmn. Its first PSP release came out in May 2006 and to this day, its GitHub page still sees regular commits. Z2442 is the man behind many of them. We asked him about the project and its future.

#### A bit about yourself - how long have you been involved with the project, when did you return to it and why?

Z2442: I got my first PSP in or around 2005-ish and played the hell out of it. Then one day a friend told me to check [psp-hacks](https://web.archive.org/web/20060101025842/http://www.psp-hacks.com/) and I was hooked. I've been around here and there with Daedalus since 2009. Wally and Salvy even longer than that! 

#### The last Daedalus release was in October 2019, what's been going on since?

Z2442: Yeah.. a ton of stuff has happened since then. We helped Rinnie with the Vita port, reworked our makefile structure to use cmake (Wally), we fixed OS X, Linux, Windows, took a long break because life and last, hours upon hours of trying to make the async audio work properly. I feel as if get that working is our only path to full-speed on the the PSP. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/MK64-1.jpg)
![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/MK64-2.jpg)

#### The latest big news is the ME implementation - how does it differ from the previous one? What's new?

Z2442: Okay, this might get a little bit technical but previously version's 1.1.8 async worked as a hybrid of the main system CPU and ME (Re4thewin gets credit for the idea). That approach works but is sort of a hack that works by lucky timing. 

The two types of jobs/ tasks that need to be done are Samples and HLE. The old approach would start a job on the ME and do jobs on the main CPU until the ME freed up. we end up running super fast with the down side being instability and sound glitches. 

Phew! Now that is out of the way our new approach is better and kind of weird. We have a series of arrays that act as queues for the sound plugin (xiro idea for arrays over my queues). They are processed by the ME in the order they came in. 

This, aside from being really weird from an emulation standpoint, lets us do great things. We get even more speed since the main CPU never needs to do any of the sound work.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/M64-1.jpg)
![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/M64-2.jpg)

#### What's the end game with Daedalus PSP? How would a final version look for you?

Z2442: Daedalus as a emulator will keep advancing beyond the PSP. Even recently seeing ports to the PS2 and we brought back the Windows port! A final version for me would see at least full-speed Zelda OOT. My all time top game! 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/OOT-2.jpg)
![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/OOT-3.jpg)

#### Any features you'd like to see implemented - not necessarily by yourself? net play, bezels, N64 controller mod for the serial port?

Z2442: That's awesome you ask about N64 controller of serial, I was actually thinking of trying that! Moto and I mused my teensy for another project though so I never did. I'd like to see 240p AV out on the slims for CRTs.

#### Do you let your kids play Daedalus? What they think of it?

Z2442: I do! My older one was testing Zelda Majora's Mask for me just few days ago. Yell for me if the sound cuts out lol. 

#### Any game that doesn't run on Daedalus right that you'd like to see fixed?

Z2442: Turok runs like hot trash! That was a childhood favorite of mine. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/Turok.jpg)

#### 1.1.9 when?

Z2442: Whenever I finish async? No really, soon I hope. I feel like we are closer than ever before to making it right. 

#### Biggest achievement on the PSP scene in the last 5 years?

Z2442: The biggest achievement I have seen for the PSP is the unbricker the late model PSPs 2000-3000s!

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/Conker-1.jpg)
