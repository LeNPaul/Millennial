---
layout: post
title: "PSPRadio still works great"
author: "Pierre L"
categories: apps
tags: [PSP,homebrew]
image: /assets/img/random/pspradio_hw.webp
---

This article isn't about the official Javascript radio plugins by Sony. PSPRadio is rather a genuine piece of homebrew goodness created by Rafael Cabezas. [Download it here](https://archive.org/details/pspradio-1.18.1400.7z).

As the last release from Raf came something like 14 years ago, don't expect the app to just work out of the box. The music streams that populate the default list are long gone. The Shoutcast database that powered PSPRadio still exists, but since it now requires an API key for access, just updating the URL in the XML file would do no good. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/pspradio-shoutcast.webp)

Luckily, Rafael had the foresight of adding support for standard Winamp playlists. The [Shoutcast website](https://directory.shoutcast.com/) still has thousands of those, and they can be freely and easily downloaded. 

Here's what a random `.pls` file looks like:

```
[playlist]
numberofentries=1
File1=http://62.141.38.36:8080/dance.mp3
Title1=(#1 - 6057/50) Dance Wave!
Length1=-1
Version=2
```

Once the .pls file has been downloaded (or created), save it under `PSP\GAME\PSPRadio1.18.1400\PlayLists`.

Start the app, and press Start to open the options menu. Connect to your Wi-Fi network, refresh the playlists, then save. 

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/pspradio-settings.webp)

Press triangle until you reach the playlist screen, then select your new stream. A bit of patience, and your radio stream will play just as well as it would have in the mid-2000s.

<video class="center" width="480" height="272" controls>
	<source type="video/mp4" src="https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/video/pspradio.mp4">
</video>
