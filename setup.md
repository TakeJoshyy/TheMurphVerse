# MurphVerse Setup Page

Welcome, this page is going to help you get up and running ! It is separated into two sections first you have never played in an emulator before. Second you have setup something like kaizo before.

> [!NOTE]
> I will assume during this guide that you are on windows.

[Section One](#section-one) | [Bizhawk](#bizhawk) | [Java](#java) | [IronMon Tracker](#ironmon-tracker)

[Section Two](#section-two) | [Bundle](#bundle) | [Normal or Natdex](#normal-or-natdex) | [Patching](#patching) | [Profile](#profile)

[TroubleShooting](#troubleshooting)

---
# Section One
---

## Bizhawk

> [!NOTE]
> To keep everything in one place consider making a folder to put everything in e.g "C:\Users\"{user}"\Documents\Emulator"

To start with we are going to download the emulator [found here](https://github.com/TASEmulators/BizHawk/releases) you are going to download the file that ends in **win-x64.zip** we will then processed to unzip the file, make sure to move out of downloads and avoid the one drive location. The file path should look something like "C:\Users\"{user}"\Documents\Emulator" this will make its own folder called BizHawk inside the BizHawk folder you will see EmuHawk that will be the emulator we are using!

To help for later when you open Emu you will be asked to pick a profile I suggest "Longplays" click okay. Now at the top click tools then lua console, inside the lua console click settings then tick the option "Autoload with EmuHawk" this will allow for the tracker to autoload on boot up rather than having to open the lua console on each start.

## Java

The java download can be [found here](https://www.java.com/en/download/manual.jsp) we want to download the "Windows Offline(64-bit)" run the setup and we are sorted.

This is used for the randomization process !

## IronMon Tracker

The tracker can be [found here](https://github.com/besteon/Ironmon-Tracker/releases) scroll down to Assets , download the "UpdateOrInstall.lua" then go to  "C:\Users\"{user}"\Documents\Emulator" make a folder e.g Tracker inside the Tracker folder place in the .lua you have installed.

Open Emu in the lua console click script at the top then Open Script navigate to the .lua you should see a message "Would you like to download" click yes. After it installed restart Emu you can now delete the Update script, and replace it with the "Ironmon-Tracker.lua" which will be found in the Tracker folder you made. Restart Emu in the lua console you should see its now waiting for a Rom to be loaded.

To make it easier for you in the lua console click File then "Save Session As" name it as you like then go to File "Recent Sessions" and tick the "Autoload Session" you should not need to touch the lua console after this and you can just minimize it on launch.

---
# Section Two
---

## Bundle

The MurphVerse bundle can be [found here](https://github.com/TakeJoshyy/TheMurphVerse/releases) this contains every rnqs and patch you will need for any game mode.

Those following from section one unzip into "C:\Users\"{user}"\Documents\Emulator"

## Normal Or Natdex

Both FireRed and Emerald have Natdex options, Natdex means that there are over 1000 pokemon compared to what the normal base game has.

If you choose the normal route you will need to download [this](https://github.com/something-smart/ironmon-randomizer) for later as this contains a .jar you will need.

> [!TIP]
> Normal option means that you will be use the .ips patch.
> Natdex you will be using the .bps file and will also have to setup the Natdex v1.1.2 extension.

### Extensions

The Natdex extension can be [found here](https://github.com/CyanSMP64/NatdexExtension/releases/download/v1.1.2/NatdexExtension_v1.1.2.zip) unzip then you need to move the Natdex lua and folder into the tracker extensions folder.

Those following from section one your file path would look something like this "C:\Users\"{user}"\Documents\Emulator\Tracker\extensions" inside that folder you should have one folder "Natdex" two text files "How to use.txt" "CodeExtensionTemplate.lua.txt" and one lua "NatDexExtension.lua".

You will then want to open Emu go load your base ROM go into the "tracker -> Extensions -> Install a new extension" it should then auto detect the 1.1.2 Natdex

> [!WARNING]  
> Do not update from 1.1.2 Natdex as it will break functionality.

## Patching

The patching site can be [found here](https://www.marcrobledo.com/RomPatcher.js/) rom at the top then either a .isp or .bps at the bottom, you should only ever patch your game once unless you know what you are doing.

> [!TIP]  
> If it states mismatch error it means that you have a 1.0 ROM not a 1.1 Rom that is required.

## Profile

The finale step, open the tracker settings, click "New Runs" go to "Profiles" then click "Add New". Using the "..." to navigate;

- The top - you will provided with your patched rom.
- The middle - Jar will either be 1) The Natdex .jar found at "\Tracker\extensions\natdex" 2) The ironmon randomizer jar you downloaded [from here](#normal-or-natdex)
- The bottom - will be found in the bundle folder you got from [here](#bundle)

---
# TroubleShooting
---

Come to the [discord](https://discord.gg/c4Bzm3Ezpx) we are happy to help !
