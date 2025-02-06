---
title: "Blockly Changelog"
slug: Blockly-Changelog
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---


## CoDrone EDU Blockly Changelog
<!-- 
### Version 3.0.0
#### January 9, 2025
**Improvements** :arrow_up:
- The sensor dashboard now always displays the predicted color based on the default calibration even when using a custom dataset
- The “clear console” button dynamically adjusts its position when the side tabs open so it remains visible
- Enhanced performance for better user experience and improved program responsiveness

<hr/>
 -->
 
### Version 2.2.5
#### December 18, 2024
  
**New Features** :sparkles:
- Updated Python generated code for controller screen functions to reflect latest Python library changes (v2.0)
- Implemented custom 404 page
  
**Improvements** :arrow_up:
- Improved firmware detection and messaging in the connection window when offline

**Bug Fixes** :bug:
- Fixed error in elevation conversion from meters (m) to kilometers (km)
- Corrected Python-generated code for Junior Turn block

<hr/>

### Version 2.2.4
#### November 7, 2024

**New Features** :sparkles:
- Updated block names and generated code to match the latest Python library (v2.0)

**Improvements** :arrow_up:
- Improved UI and messaging when drone battery is removed while Blockly is connected

**Bug Fixes** :bug:
- Fixed bug when opening get_color() Senior block example

<hr/>

### Version 2.2.3
#### October 10, 2024
**New Features** :sparkles:
- Added the ability to open Blockly code as a Python program in Python for Robolink
- Updated tab colors to be consistent with category selection
- Updated Python auto-generated code to match current library version

**Improvements** :arrow_up:
- Adjusted menu sizing for smaller screens

**Bug Fixes** :bug:
- Resolved uncaught errors
- Corrected issue where the “disable block” function was not working properly.

<hr/>

### Version 2.2.2
#### September 18, 2024
**New Features** :sparkles:
- Added a release version number to the menu to easily check for updates and improvements.
- Included a link to our Privacy Policy in the menu for quick access.

**Bug Fixes** :bug:
- Resolved an issue where clicking the emergency stop too quickly after running code could cause an error on the site.

<hr/>

### Version 2.2.1
#### September 4, 2024
**New Features** :sparkles:
- Updated default "count with" parameters in loops to start at 0 instead of 1
- Enabled "Open in Blockly" from documentation, automatically populating the workspace with an example from our our documentation site.

**Improvements** :arrow_up:
- Improved user interface by changing when the start flag removal warning appears to a more noticeable modal window.
- Re-ordered RUN, LAND, STOP buttons on the Blockly interface to encourage using "Land" over "Stop" whenever possible.

**Bug Fixes** :bug:
- Fixed a bug where the console did not consistently print the correct number of outputs, ensuring reliable feedback during coding sessions.

<hr/>

### Version 2.2.0
#### August 21, 2024
**New Features** :sparkles:
- Added the text "Get" in front of the variable block to distinguish it from the "Set" variable block.

**Improvements** :arrow_up:
- Improved the comments in Python code generation when blocks in the workspace are disabled.
- Improved the menu design for easier navigation

**Bug Fixes** :bug:
- Fixed a bug in "avoid_wall" where the drone would not fly forward when range sensor was below a threshold value.

<hr/>

### Version 2.1.9
#### August 1, 2024
**New Features** :sparkles:
- Added "List" blocks to enhance coding capabilities.
- The console log now shows the version of the CoDrone JavaScript Library being used.
- Integrated the "start/stop" buzzer feature from Python into Blockly.
- Added the capability to download workspace code as a PNG file for easier sharing and documentation.
- Added a "Return to Docs" button for better navigation back to the documentation in the side tab

**Improvements** :arrow_up:
- Improved UI to display all icons when opening the side tabs
- Improved battery request messages in the console to reflect getting the drone state data instead

**Bug Fixes** :bug:
- Fixed an issue where Blockly miscounted the number of 'start_flag' blocks, allowing users to drag more than one 'start_flag' block if the dragging event was too fast
- Corrected a buzzer functionality issue 
- Corrected the URL in the release notes menu option to point to the correct resource.
- Fixed an issue where incorrect URLs displayed Apache and OS version details.
- Resolved a problem where Blockly could load any URL after the default URL was accessed.

<hr/>

### Version 2.1.8
#### June 12, 2024
**New Features** :sparkles:
- Implemented an alert when the user forgets to load a colorset
- Updated Japanese translations
- Reset the "Run code" button interface when "land" is pressed

**Improvements** :arrow_up:
- Changed "color classifiers" to "color data sets"
- Disabled "code_is_running" block
- Enhanced "when start" feature that only allows one block at a time in the workspace

**Bug Fixes** :bug:
- Resolved bug where not all labels were loaded from a colorset
- Resolved bug where right-click delete did not delete the generated code in the Python tab

<hr/>

### Version 2.1.7
#### May 21, 2024

**New Features** :sparkles:
- Enhanced takeoff command by adding checks for the drone flight state after takeoff
- Implemented feature that only allows one "when start" block at a time
- Added multi-language support for the "How to Connect" popup

**Improvements** :arrow_up:
- Disabled the asynchronous "when keyboard press" block to improve stability

**Bug Fixes** :bug:
- Fixed bug causing crashes when color sensor returns "unknown"
- Resolved bug where some blocks don't disable when using the "when start" block
- Corrected drone model display issue in the connection window without needing a refresh

<hr/>

### Version 2.1.6
#### April 18, 2024

**New Features** :sparkles:
- New pop-up window when drone or controller disconnects from Blockly
- Added a notice for JROTC edition users to first calibrate their color sensor before adding a color set
- Back-end changes to ensure Blockly is checking for the latest versions

**Improvements** :arrow_up:
- Updated wording from "Pair with Blockly" to "Connect to Blockly"
- Updated messaging for adding or loading a colorset with clearer instructions
- Back-end changes to improve timing logs
- "Open" menu option only allows .XML as options

**Bug Fixes** :bug:
- Fixed bug with generated Python code for avoid_wall()

<hr/>

### Version 2.1.5
#### February 26, 2024

**New Features** :sparkles:
- Implemented an error-logging system so users can report an error from the menu
- Implemented analytics

**Improvements** :arrow_up:
- Updated firmware notifications to match latest firmware releases
- Updated Korean-language translations

**Bug Fixes** :bug:
- Disabled battery requests during takeoff

<hr/>

### Version 2.1.4
#### February 14, 2024

**Improvements** :arrow_up:
- Updated drone visuals to match CoDrone EDU (JROTC ed.) when connected
- Temporarily disabled "Screen" category for JROTC ed.    
- Improvements to firmware notifications in the connection box

<hr/>

### Version 2.1.3
#### January 23, 2024

**New Features** :sparkles:
- Updated pairing window to reflect messaging about AA batteries

**Improvements** :arrow_up:
- Changed parameters on "flip" functions to match Python function parameters
- Improved trim slider functionality
- Improved functionality of the drone LED feature in the connection window

**Bug Fixes** :bug:
- Fixed Senior turn_degree() block      
- Fixed Senior get_pressure() block         
- Addressed backend errors to improve performance           

<hr/>

### Version 2.1.2
#### December 21, 2023
**New Features** :sparkles:
- Added ability to change the drone LED color from the connection window  
- Created a new senior block for turn_left() and turn_right() Python functions
- Added a link to the release notes in the Blockly menu

**Improvements** :arrow_up:
- More small changes in Python generated code output and block parameters to reflect Python library

**Bug Fixes** :bug:       
- Corrected the generated RGB values for the Junior controller LED block
- Updated missing blocks for Japanese-language Blockly


<hr/>

### Version 2.1.1
#### November 8, 2023

**Improvements** :arrow_up:
- Renamed get_gyro() Senior blocks to get_angular_speed()
- Completed backend refactoring to update Blockly infrastructure. These changes will not affect your user experience, but they will help deliver a smoother update process in the future.
- Small changes in the Python generated code output to reflect the latest library

<hr/>
