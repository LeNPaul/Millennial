---
layout: post
title: "Getting the PSP back online: the first TLS app"
author: "Pierre L"
categories: apps
tags: [PSP,homebrew]
image: /assets/img/random/SSL3.webp
---

The PSP, along with its contemporary competitor the Nintendo DS, was part of the first generation of handhelds capable of going online. It is ironic, then, that one of the PSP's flagship features has been almost completely lost over the years.

The PSP is stuck with SSL 3.0, a security protocol dating back from 1996. It was nearly a decade old when the console was first released, and it has since aged like unrefrigerated cream cheese. A major security hole was discovered in this protocol back in 2015, leading to SSL 3.0 being deprecated by all major websites in a matter of weeks.

Some sources report that the 6.61 firmware upgrade did include support for the less antiquated TLS 1.0 protocol. I could find no confirmation of this in the official documentation. The end effect is no different regardless: the PSP can only get online by connecting to a carefully set-up server, effectively shutting it out of most of the web.

Paul Sajna - sajattack on the PSP Homebrew Discord server - decided it was time to do something about it. Piggybacking on the PSP port of the Rust language he co-authored, he built the first ever demo of a PSP establishing a connection over TLS 1.3, the most up-to-date iteration of the HTTP security protocols.

### How did you end up owning a PSP, and why did you decide to write code for a 16 year old Japanese game console?

Paul: I probably got it for Christmas or my birthday when I was young... I don't remember exactly which. Once I found out about the Pandora battery, my Dad and I took it to some random electronics repairman in my hometown and told him which pin to cut for the service mode, and the rest is history. 

I got big into playing homebrew, but was too young at the time to do any dev of my own. Fast forward to a couple years ago, I found out there was a UMD made of my favourite movie ([Iain Softley's Hackers](https://www.imdb.com/title/tt0113243/)), and bought it on eBay. But I didn't have my original PSP anymore, so I got one from my friend Dave who used to be a commercial software developer for the system in its heyday.  

Once I got it, I remembered all the homebrew I loved, and I'm a more capable developer now, so I dove in. Rust is the programming language I like to develop in most, and I've ported it to some embedded platforms in the past, so sofa and I created rust-psp together.

### What does TLS Test do that isn't possible with say, the stock browser?

Paul: Anyone who has used the stock browser in the modern era will know it's impossible to connect to 90+% of websites. This is because the PSP has an outdated version of the security protocols protecting the modern web. So the difference with TLS Test is it uses TLS 1.3, which is the latest version from 2018. 

This means that once the underlying library, drogue-tls, is fully finished, the PSP will be able to connect to any modern web page or API. Rendering web pages is a whole 'nother mountain of work though. But it would be great for making some API calls to various web services as it stands now, and building apps around the response.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/snaps/TSL-Test.webp)

### How did you achieve it? I assume it was a bit harder than finding the TLS library and typing `make`?

Paul: It was pretty simple actually. I used a Rust library (crate) called drogue-tls, which did all the heavy lifting. I implemented a basic socket library already for the Rust standard library port, and all drogue-tls needs is a socket to read to and write from. 

So I essentially copy-pasted my old code and modified it a bit, and had it up and running in probably under 2 hours.

### So the difference from [an earlier effort from] December 2020 is that you could rely on a pure Rust implementation already available?

Paul: Yeah, the old version used mbedtls, a C library, which had to be cross-compiled with llvm/clang, and gave me a mysterious error when I tried to use it.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/tls-original-202012.webp)

### The test prints the content of example.com to screen - what else could be achieved without radically changing the source code? Could it say, save an image from the website to ms0:/pictures?

Paul: I suppose it could save an image with the right code implemented around the TLS library. My example is just text because that was easiest. But there are lots of modern web services built upon APIs which just exchange JSON text. Many of those will open up to PSP developers now, and more will come as drogue-tls becomes more feature-complete.

### Are there any TLS-powered projects that you'd want to see run on a PSP some day?

Paul: I've thought about doing a Spotify client, there's a library for it in Rust, librespot, but it would be better to wait until the rust-psp std is finished. I joked to you earlier about the [Pokemon API](https://pokeapi.co/), there are countless other APIs that could be accessed fairly easily with just this much work done (and DNS, which is easy to add). I'd probably do something absurd like a telnet BBS over TLS.

### Any projects that are possible, even though you wouldn't personally find them interesting? You often hear people asking for Discord on PSP for instance.

Paul: [https://apilist.fun/api/fortnite-api](https://apilist.fun/api/fortnite-api) - the world is your oyster.

Oh, I just thought of a cool idea: I use a site called discogs to track my vinyl records. They have a good RESTful API.


*You can find the TLS Test binary in the [PSP Homebrew Library](https://archive.org/details/tls-test) and the source code in [sajattack's Rust repo](https://github.com/sajattack/rust-psp/tree/tls/examples/tls-test).*
