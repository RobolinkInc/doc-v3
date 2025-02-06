---
title: "Blockly Changelog"
slug: Blockly-Changelog
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

## CoDrone Mini Library Changelog

### Version 2.0.5
#### November 8, 2023

- Completed backend refactoring to update Blockly infrastructure. These changes will not affect your user experience, but they will help deliver a smoother update process in the future.

### Version 1.1.3
#### Aug 14, 2018

New Function:
- pair() : Updated to a new function for pairing with the CoDrone. Pair will pair with the nearest, then save your drone info to your project folder and use the next time you pair with no parameters.
- calibrate() : you can reset and calibrate drone programmatically.
- move() function updated. It can take 4 parameters move(roll,pitch,yaw,throttle) to move indefinitely

### Version 1.1.2
#### May 21, 2018

- Print port name and drone name at the start of the program.
- Solve setAllRGB() function error (couldn't change the colors when repeated it too fast).

### Version 1.1.1
#### Mar 28, 2018

- Change the Mode name
- Change the default value in flight command
- Add some error messages for debugging mode

### Version 1.1.0
#### Mar 16, 2018

- Remove "time." in protocol.py
- Add legacy functions
- Fix functions about degrees.

### Version 0.2
#### Dec 16, 2017

- The first CoDrone library release for the Python Package Index