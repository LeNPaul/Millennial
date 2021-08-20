---
layout: post
title: "Revisiting Python on PSP"
author: "Pierre L"
categories: apps
tags: [PSP,homebrew]
image: /assets/img/random/pythonpsp.webp
---

As mentioned in an [earlier post](https://psp-archive.github.io/apps/python-PSP.html), I found a Python interpreter for PSP that supports some functions from the excellent OSLib-Mod library - you can download it [here](https://archive.org/details/stackless-oslib-mod-by-sakya-2009-08-07). Now, let's see what we can do with it.

Let's start by importing the modules we will be using:

```
import sys
import osl
import pspmp3
import time
```

First, let's get our program to play some background music. We can use the pspmp3 module for this:

```
import pspmp3

pspmp3.init(1)
pspmp3.load("theme.mp3")
pspmp3.play(1)
```

The `pspmp3` module is annoyingly fussy about the files it is fed. I had to try a few profiles before finding a working one (shown below):

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/profile-pspython.webp)

Next, sound effects. the `osl` module has a `Sound` class that will do for our purposes:

```
import osl

voice = osl.Sound("voice.wav")

while True:
    pad = osl.Controller()
    if pad.pressed_cross:
        voice.play()
```

Wav files are not as troublesome - converting a random audio file with Audacity worked right off the bat.

Loading an image is also pretty straightforward:

`mainImage = osl.Image("image1.png", osl.IN_RAM, osl.PF_8888)`

The complication is that in order to be refreshed at every frame, the image has to be inside a cycle:

```
skip = False
while not osl.mustQuit():
    if not skip:
        osl.startDrawing()
        mainImage.draw()
        osl.endDrawing()
    osl.endFrame()
    skip = osl.syncFrame()
```

Let's add some bare-bone interactivity - when X is pressed, a sound is played and the image changes:

```
pad = osl.Controller()
if pad.pressed_cross:
	osl.startDrawing()
	mainImage = osl.Image("image2.png", osl.IN_RAM, osl.PF_8888)
	mainImage.draw()
	osl.endDrawing()
	osl.endFrame()
	skip = osl.syncFrame()
	voice.play()
	time.sleep(2)
	mainImage = osl.Image("image1.png", osl.IN_RAM, osl.PF_8888)
```

All of the above also needs to be in a cycle, so that the interpreter constantly checks if a button has been pressed. 

Finally, let's add some code to exit gracefully when triangle is pressed:

```
if pad.pressed_triangle:
	osl.safeQuit()

osl.endGfx()
```

Put it all together, and this is what you end up with:

```
import sys
import osl
import pspmp3
import time

osl.initGfx()

mainImage = osl.Image("image1.png", osl.IN_RAM, osl.PF_8888)

pspmp3.init(1)
pspmp3.load("theme.mp3")
pspmp3.play(1)

voice = osl.Sound("voice.wav")

skip = False
while not osl.mustQuit():
    if not skip:
        fpsCount = str(osl.getFPS())
        osl.startDrawing()
        mainImage.draw()
        osl.endDrawing()
    osl.endFrame()
    skip = osl.syncFrame()

    pad = osl.Controller()
    if pad.pressed_cross:
        osl.startDrawing()
        mainImage = osl.Image("image2.png", osl.IN_RAM, osl.PF_8888)
        mainImage.draw()
        osl.endDrawing()
        osl.endFrame()
        skip = osl.syncFrame()
        voice.play()
        time.sleep(2)
        mainImage = osl.Image("image1.png", osl.IN_RAM, osl.PF_8888)
    if pad.pressed_triangle:
        osl.safeQuit()

osl.endGfx()
```
