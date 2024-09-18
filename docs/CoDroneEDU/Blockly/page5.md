---
title: "Blockly Changelog"
slug: Blockly-Changelog
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---


## CoDrone EDU Library Changelog

### Version 2.2.2
#### September 18, 2024

- Added a release version number to the menu to easily check for updates and improvements.
- Included a link to our Privacy Policy in the menu for quick access.
- Resolved an issue where clicking the emergency stop too quickly after running code could cause an error on the site.

<hr/>

### Version 2.2.1
#### September 4, 2024

- Fixed a bug where the console did not consistently print the correct number of outputs, ensuring reliable feedback during coding sessions.
- Improved user interface by changing when the start flag removal warning appears to a more noticeable modal window.
- Re-ordered RUN, LAND, STOP buttons on the Blockly interface to encourage using "Land" over "Stop" whenever possible.
- Updated default "count with" parameters in loops to start at 0 instead of 1
- Enabled "Open in Blockly" from documentation, automatically populating the workspace with an example from our our documentation site.

<hr/>

### Version 2.2.0
#### August 21, 2024

- Fixed a bug in "avoid_wall" where the drone would not fly forward when range sensor was below a threshold value.
- Improved the comments in Python code generation when blocks in the workspace are disabled.
- Improved the menu design for easier navigation
- Added the text "Get" in front of the variable block to distinguish it from the "Set" variable block.

<hr/>

### Version 2.1.9
#### August 1, 2024

- Improved UI to display all icons when opening the side tabs
- Fixed an issue where Blockly miscounted the number of 'start_flag' blocks, allowing users to drag more than one 'start_flag' block if the dragging event was too fast
- Added "List" blocks to enhance coding capabilities.
- Corrected a buzzer functionality issue 
- The console log now shows the version of the CoDrone JavaScript Library being used.
- Integrated the "start/stop" buzzer feature from Python into Blockly.
- Added the capability to download workspace code as a PNG file for easier sharing and documentation.
- Corrected the URL in the release notes menu option to point to the correct resource.
- Fixed an issue where incorrect URLs displayed Apache and OS version details.
- Resolved a problem where Blockly could load any URL after the default URL was accessed.
- Added a "Return to Docs" button for better navigation back to the documentation in the side tab
- Improved battery request messages in the console to reflect getting the drone state data instead

<hr/>

### Version 2.1.8
#### June 12, 2024

- Changed "color classifiers" to "color data sets"
- Resolved bug where not all labels were loaded from a colorset
- Disabled "code_is_running" block
- Resolved bug where right-click delete did not delete the generated code in the Python tab
- Implemented an alert when the user forgets to load a colorset
- Updated Japanese translations
- Enhanced "when start" feature that only allows one block at a time in the workspace
- Reset the "Run code" button interface when "land" is pressed

<hr/>

### Version 2.1.7
#### May 21, 2024

- Fixed bug causing crashes when color sensor returns "unknown"
- Enhanced takeoff command by adding checks for the drone flight state after takeoff
- Resolved bug where some blocks don't disable when using the "when start" block
- Implemented feature that only allows one "when start" block at a time
- Disabled the asynchronous "when keyboard press" block to improve stability
- Added multi-language support for the "How to Connect" popup
- Corrected drone model display issue in the connection window without needing a refresh

<hr/>

### Version 2.1.6
#### April 18, 2024

- Fixed bug with generated Python code for avoid_wall()
- New pop-up window When drone or controller disconnects from Blockly
- Updated wording from "Pair with Blockly" to "Connect to Blockly"
- Updated messaging for adding or loading a colorset with clearer instructions
- Added a notice for JROTC edition users to first calibrate their color sensor before adding a color set
- Back-end changes to ensure Blockly is checking for the latest versions
- "Open" menu option only allows .XML as options
- Back-end changes to improve timing logs

<hr/>

### Version 2.1.5
#### February 26, 2024
- Disabled battery requests during takeoff
- Implemented an error-logging system so users can report an error from the menu
- Implemented analytics
- Updated firmware notifications to match latest firmware releases
- Updated Korean-language translations

<hr/>

### Version 2.1.4
#### February 14, 2024
- Updated drone visuals to match CoDrone EDU (JROTC ed.) when connected     
- Temporarily disabled "Screen" category for JROTC ed.    
- Improvements to firmware notifications in the connection box

<hr/>

### Version 2.1.3
#### January 23, 2024
- Changed parameters on "flip" functions to match Python function parameters        
- Improved trim slider functionality        
- Updated pairing window to reflect messaging about AA batteries        
- Fixed Senior turn_degree() block      
- Fixed Senior get_pressure() block         
- Addressed backend errors to improve performance           
- Improved functionality of the drone LED feature in the connection window

<hr/>

### Version 2.1.2
#### December 21, 2023
- Added ability to change the drone LED color from the connection window        
- Created a new senior block for turn_left() and turn_right() Python functions      
- Added a link to the release notes in the Blockly menu     
- Corrected the generated RGB values for the Junior controller LED block        
- Updated missing blocks for Japanese-language Blockly      
- More small changes in Python generated code output and block parameters to reflect Python library

<hr/>

### Version 2.1.1
#### November 8, 2023
- Completed backend refactoring to update Blockly infrastructure. These changes will not affect your user experience, but they will help deliver a smoother update process in the future.       
- Renamed get_gyro() Senior blocks to get_angular_speed()       
- Small changes in the Python generated code output to reflect the latest library

<hr/>
