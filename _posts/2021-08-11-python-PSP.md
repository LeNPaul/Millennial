---
layout: post
title: "Using Python on PSP"
author: "Pierre L"
categories: apps
tags: [PSP,homebrew]
image: /assets/img/random/psp-python.webp
---

If you can't code, you probably still know a little Python. If you got a degree in statistics, data science, or more generally made a bad decision during career orientation day, the language should have rubbed on you a little. 

But straight to the point - can you use what you learned to ace your actuarial science test for something useful in life? Why yes, the Python interpreters for PSP come to the rescue.

All interpreters below work the same - create a file named `script.py`, put it in the same folder as the interpreter contained in the EBOOT, and run it. Seems easy enough.

### My PSP is not your goddamn printer

Except the Python interpreters for PSP are rather wacky. `print()`, for instance, will output nothing to screen. It does work, but it outputs to the debug console of PPSSPP - which is not terribly helpful. 

A greater annoyance is that traceback works the same way: write `print(yomama)` without defining `yomama` first, and the error is duly logged into the console, while the interpreter prints out a black screen and exits, leaving you none the wiser about the causes of `yomama`'s absence. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/emu-debugconsole.webp)

### Python-PSP by Fraca7

The first one, the original. Released in 2005 by Jérôme Laheurte (Fraca7), [Python-PSP](https://archive.org/details/pythonpsp.7z) is capable of some impressive stuff. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/python-graph-demo.webp)

Or rather was capable. The `gu` function it calls in this demo seems to be absent in the last version of the interpreter. Leaving that aside, let's see what sort of Python we're dealing with here:

```
import sys

textFile = open("version.txt", mode='w')
textFile.writelines(sys.version)
textFile.close()
```

The output:

```
2.4.3 (#0, Jun 29 2008, 12:34:52) 
[GCC 4.1.0 (PSPDEV 20060507)]
```

How do you get the interpreter to print that to screen, then? Fraca7's [defunct website](https://web.archive.org/web/20080512073608/http://python-psp.net/trac) has a tutorial of sorts, and this is what it suggests:

```
import psp2d, sys

scr = psp2d.Screen()
fnt = psp2d.Font('font.png')
img = psp2d.Image(480, 272)
img.clear(psp2d.Color(0, 0, 0))
fnt.drawText(img, 0, 0, sys.version)
scr.blit(img)
scr.swap()

while True:
    pad = psp2d.Controller()
    if pad.circle:
        break
```

So much for the simplicity of Python. The full, interactive [tutorial](https://archive.org/details/pythonpsp-tutorial) requires about a hundred lines of code.

### Stackless Python PSP (OSLib) by Carlos Eduardo

The Paulista Carlos picked up on Jérôme's project, and [PSP Stackless Python](https://archive.org/details/pspstacklesspython.7z) was the outcome. Stackless is really a fork of Python proper, but the differences between any Python interpreter for PSP and your modern everyday Python are too great for that to make much of a difference. 

Acid_Snake from the [Wololo.net forums](https://wololo.net/talk/viewtopic.php?f=5&t=13112&sid=fb5dcf9b13d13e98e027988741b1b5ee) wrote a bunch of tutorials for this fork back in 2012, which are still some of the most up-to-date tutorials out there.

The `sys.version`:

```
2.5.2 Stackless 3.1b3 060516 (python-2.51:55047, Jul  1 2008, 10:48:50) 
[GCC 4.1.0 (PSPDEV 20060507)]
```

Printing to screen is just as convoluted as the ordinary Python above, and also requires loading an external font.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/stackless-ver.webp)

### Python-PSP (OSLib) by Fraca7

This is the one that got me curious about Python on PSP. It's [a fork](https://archive.org/details/oslib-samples) of the original Python-PSP, with added support for Brunni's OSLib library, which is ubiquitous in PSP homebrew projects anywhere.

Output of calling `sys.version`:

```
2.4.3 (#0, Mar 18 2007, 11:38:26) 
[GCC 4.0.2 (PSPDEV 20051022)]
```

OSLib support means we can now print to screen with just this code:

```
import osl, sys

osl.initGfx()
osl.printxy(0, 0, sys.version )
osl.syncFrame()

while True:
    pad = osl.Controller()
    if pad.pressed_circle:
        break
```

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/python-oslib-01.webp)

And even get a traceback on screen:

```
import osl, sys, traceback

try:
    print(yomama)
except:
    osl.initGfx()
    osl.printxy(0, 0, traceback.format_exc())
    osl.syncFrame()
    while True:
        pad = osl.Controller()
        if pad.pressed_circle:
            break
```

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/python-oslib-02.webp)

Jérôme and Carlos must have had their reasons to drop the OSLib version in favour of the other one. But from this limited overview, it seems like the wrong choice.

### StacklessPython OSLib MOD by Sakya

An update to report on a last-minute discovery: the homebrew coder Sakya (creator of LightMP3 and the Homebrew Sorter) put together Carlos Eduardo's Stackless Python with the OSLib MOD library. This fork of the interpreter was compiled in August 2009, over a year after any previously known version. I have now archived it [here](https://archive.org/details/stackless-oslib-mod-by-sakya-2009-08-07). 

There is no documentation available, but it seems promising. Reusing the code from Fraca7's OSLib fork managed to print text to screen right away.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/python-sakya.webp)
