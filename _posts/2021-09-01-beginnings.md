---
layout: post
title: "Beginnings"
author: "Pierre L"
categories: apps
tags: [PSP,homebrew]
image: /assets/img/random/psp-hacks-helloworld-large.webp
---

Now that the [PS2dev forums](https://forums.ps2dev.org) have been brought back to life, it is much easier to find information about the early days of the PSP homebrew scene. 

With a little effort, I managed to track down the [original release post](https://forums.ps2dev.org/viewtopic.php?f=14&t=1570) for nem's Hello World app. I'll gather all of nem's posts about his release below:

<pre>
Post by nem » Thu May 05, 2005 5:00 pm
Greeting fellows. It's Hello World for PSP.
http://anon.ug.to/sec/index.html

    Hello World, PSP!

    Runs only on PSP 1.00.
    Place EBOOT.PBP at directory PSP\GAME\HELLOPSP\ of Memory Stick, and
    you will find HELLO WORLD at GAME -> MEMORY STICK of XMB.
    To shutdown, hold up power switch several seconds, or remove battery.
    All scratch code, compiled by ps2dev toolchain.
</pre>


<pre>
Post by nem » Sat May 07, 2005 1:54 am 
Thanks for you all :)
Discussions and infos in this forum enabled me to make Hello World.

There are some inquiries about source code. Here you are:
http://anon.ug.to/sec/pub/hellopsp_src_Rel1.zip

To build the code, I used ps2dev toolchain for PS2. There is no devtool for PSP yet.
PS2 and PSP both uses MIPS cpu and there's some machine code compatibility. You can not use some PSP and/or C code features with PS2 devtool, but for testing it is enough.
A lot of things to do.
</pre>

<pre>
Post by nem » Sat May 07, 2005 3:35 pm

    Orion_ wrote:
    I can't understand how work the call to kernel function.
    does the numbers in startup.s are the address of the functions in kernel/memory ?
    how did you find them and what was their parameters ?

I dumped the firmware of PSP by electrical means. Peel off the memory chip from PSP mainboard, connect wires to the chip, find which ball is what, and dumped. In the dumped firmware, there are executables. They are mostly encrypted but there does exist unencrypted executables, by which I learned how dynamic link is done.

Another key stayed in 'PBP Exploit Success... but only on 1.0 psp :(' thread. The posts in the thread brought to me inspiration and valuable information. I want to express my best thanks to them all. Unless they point out that ELF file can be executed, it would take more time.

Importing system call seems to be done by loader of PSP system as follows:

- Module or system call group is choosed by ascii string 'module' of STUB_START
- Systemcall is specified by 32bit ID, 'funcid' of STUB_FUNC, and loader searchs from the list
- Loader patches nop in .text.stub to syscall
</pre>

The deluge of homebrews began as soon as the source code was released. Orion's [PSPlasma](https://archive.org/details/eloa-00700-00000) and [Mario Demo](https://archive.org/details/v2marioEBOOT.7z) by skippy911 were some of the first.

I even managed to find a neat little video of PSPlasma - recorded on 7 May 2005, according to the EXIF metadata:

<video class="center" width="480" height="272" controls>
	<source type="video/mp4" src="https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/video/M4v10006_recompile.mp4">
</video>

As for nem's Hello World, it is available on the [PSP collection](https://archive.org/details/hellopsp_R1.7z) of the Internet Archive.
