---
layout: post
title: "Fixing problematic homebrews"
author: "Pierre L"
categories: apps
tags: [PSP,homebrew]
image: /assets/img/random/eloader.webp
---

The vast majority of old homebrews that do not work on the PRO custom firmware can be played quite easily - just use the [LME firmware](https://archive.org/details/release_660lme.7z) and [leda plugin](https://github.com/PSP-Archive/leda/releases) instead. Some apps and games will still refuse to boot, however. Can anything be done to rescue them?

The [eLoader](https://archive.org/details/eLoader.7z) can be a powerful tool in this regard. In its default configuration, it is essential to launch homebrews such as [Callisto](https://archive.org/details/callisto.7z) and Realtech VR's [No Gravity](https://archive.org/details/nogravitypspdemo.7z). Its most interesting feature, however, is the support for custom configuration files. 

Open `loader1000.cfg` in any text editor, and a large battery of options will appear:

```
[global]
# menu : which menu file to load
menu=ms0:/PSP/GAME/eLoader/emenu--.pbp

# Allow soft reset of PSP by holding LTrig+RTrig+START?
softreset=Y

# Return to the loader menu after soft reset, or go to the XMB?
resettoloader=Y

# Save and restore stack frame either side of running menu?
savestack=Y

# Clear RAM before the loader exits?
clearRAMonExit=N

# Emenu Wallpaper - new for eLoader 0.99
menuBackground=ms0:/PSP/GAME/eLoader/emenu_1000.png


###############################################################################
# Default loader behaviour                                                    #
#                                                                             #
# These can all be overridden on a per-EBOOT basis in later sections          #
###############################################################################

[defaults]
# Show confirmation menu before running EBOOT? [Y/N]
confirm=N

# Clear screen before running EBOOT? [Y/N]
clearscreen=Y

# Clear most of the screen before running EBOOT? (Terra Incognita) [Y/N]
specialclearscreen=N

# Pass startup parameters to EBOOT? [Y/N]
passparameters=Y

# Mandatory install folder for EBOOT [full pathname, must include final '/']
# mandatorypath= not specified in defaults

# Mandatory extra data folder
# mandatorydatapath= not specified in defaults

# Ignore fixed path strings found in EBOOT? [Y/N]
ignorefixedpath=N

# Process non-essential ELF sections? [Y/N]
readsections=Y

# Call .init section? [Y/N]
callinit=N

# Set GP value from REGINFO section if present? [Y/N]
gpfromreginfo=Y

# Set GP value from MODULEINFO if present? [Y/N]
gpfrommodinfo=Y

# Warn before automatically patching kernel apps? [Y/N]
patchkernelwarning=N

# Clear BSS + TEXT segments
initbssfull=Y

# Clear just BSS segment
initbsspartial=N

# Initial load to different area in RAM
loadhigh=N

# Fake unknown NIDs to always return 'success'
unknownNIDsAlwaysSucceed=Y

# Reset wifi libraries before starting wifi homebrew?
resetwifi=N

# CPU clock speed to use (note that if this is set as a default, then the
# user can't control it using the menu).  333 is the maximum.
# clockspeed=222

# Bus clock speed to use (111 is the system default.  166 is the maximum).
busSpeed=111

# Hold HOME to exit?  (Regardless of this setting, you can always use L+R+START)
# This interferes with some programs, and is unsupported by others.
# If you see strange key behaviour, turn it off.
exitButtonIsHome=N

# Call application's exit callback before exit?
callExitCallback=N

# Prevent the screen from automatically dimming?
doPowerTicks=Y

#*****************************************************************************/
#* Items below are new in 0.96                                               */
#*****************************************************************************/
# Use cautious memory manager?
limitedMemoryManager=N

# Limits thread stack size : this is the maximum size in bytes that will be
# reserved per thread.  Requests for stack sizes larger than this will be
# reduced to this size.  0 turns off stack size limits.
limitStacks=0

# Delete main thread when it exits?
deleteMainThreadOnExit=Y

# Clear RAM after running menu?
clearRAMaftermenu=Y

# Kill system threads?  (Might give better stability)
killThreads=N

#*****************************************************************************/
#* Items below are new in 0.97                                               */
#*****************************************************************************/
# Warn user with fatal error if wifi libs couldn't be loaded
disableWifiWarning=Y

# Relocate EBOOT to a specific address?  (normally off, used to refine "loadhigh")
# The format is relocateCodeTo=0x12345678.
# Valid addresses will probably range from 0x08800000 to 0x09000000
relocateCodeTo=0
```

A Windows app makes it possible to get a signature for each EBOOT, so that the custom settings can be added to the file.

![Screenshot](https://github.com/PSP-Archive/PSP-Archive.github.io/raw/gh-pages/assets/img/random/eboot_signature.webp)

A full online guide to the eLoader is available [here](https://web.archive.org/web/20100409001236/http://www.noobz.eu/misc/readme_eloader1000.html).
