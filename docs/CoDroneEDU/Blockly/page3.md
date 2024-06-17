---
title: "Junior Block Documentation"
slug: Junior-Block-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---


<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

<div className='change_version'>
version 2.1.8 ([Changelog](/docs/CoDroneEDU/Blockly/Blockly-Changelog))
</div>

## Flight Commands

### take off

#### Block

<img src="/img/CDE/blockly_docu/junior/takeoff.png" width="120px"/>  

#### Parameters
None

#### Description
This functions makes the drone take off. CoDrone EDU takes off at an average height of 1 meter off the ground. A takeoff block must be used before any other flight command or flight movement.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/takeoff_hover_land_example.png" width="240px"/>  

<hr/>

### land

#### Block

<img src="/img/CDE/blockly_docu/junior/land.PNG" width="90px"/>  

#### Parameters
None

#### Description
This function makes the drone land by throttling down safely.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/takeoff_hover_land_example.png" width="240px"/>  

<hr/>

### emergency stop

#### Block

<img src="/img/CDE/blockly_docu/junior/emergencystop.png" width="180px"/>  

#### Parameters
None

#### Description
This function stops all motors immediately. Use with caution to avoid damaging your drone.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/emergencystop_example.png" width="240px"/>  

<hr/>

### hover for [seconds] seconds

#### Block

<img src="/img/CDE/blockly_docu/junior/hover.png" width="220px"/>  

#### Parameters
**duration:** positive integer in seconds

#### Description
This function makes the drone hover in place for a given duration in seconds.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/takeoff_hover_land_example.png" width="240px"/>  

<hr/>

### go [direction] for [seconds] seconds at [power] % power

#### Block

<img src="/img/CDE/blockly_docu/junior/go_for_seconds_at_power.png" width="480px"/>  

#### Parameters

<img src="/img/CDE/blockly_docu/junior/go_at_power_params.png" width="480px"/> 

**direction:** forward, backward, up, down, left, right     
**duration:** positive integer in seconds       
**power:** positive integer between 0 and 100

#### Description
This function flies the drone in a direction for a given duration and a power percentage.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/go_at_power_example.png" width="420px"/>  

<hr/>

### turn [direction] [degrees] degrees

#### Block

<img src="/img/CDE/blockly_docu/junior/turn_to.png" width="240px"/>  

#### Parameters

<img src="/img/CDE/blockly_docu/junior/turn_to_params.png" width="240px"/>  

**direction:** left, right      
**degrees:** integer from -180 to +180

#### Description
Turns CoDrone EDU to the left or to the right a given number of degrees.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/turn_to_example.png" width="240px"/>  

<hr/>

### turn [direction] for [seconds] seconds at [power]% power

#### Block

<img src="/img/CDE/blockly_docu/junior/turn_direction_seconds_power.png" width="450px"/>  

#### Parameters
**direction:** left, right      
**duration:** positive integer in seconds       
**power:** integer between 0 and 100

#### Description
Turns CoDrone EDU to the left or to the right for a duration in seconds at a percentange of power.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/turn_direction_seconds_power_example.png" width="450px"/>  

<hr className="section_hr"/>

## Flight Sequences

### flip [direction]

#### Block

<img src="/img/CDE/blockly_docu/junior/flip.png" width="180px"/>  

#### Parameters

<img src="/img/CDE/blockly_docu/junior/flip_params.png" width="200px"/>  

**direction:** back, front, right, left

#### Description
This functions makes the drone flip back, front, right, or left. Make sure your battery percentage is over 50% for the flip to execute.

#### Returns
None

#### Example
Add a hover or delay block after the flip if you need to stabilize before your next command. The drone takes 3-4 seconds after a flip before it can do another flight command.

<img src="/img/CDE/blockly_docu/junior/flip_example.png" width="500px"/>  

<hr className="section_hr"/>

## Status Checkers

### code is running

#### Block

<img src="/img/CDE/blockly_docu/junior/code_is_running.png" width="150px"/>  

#### Parameters
None

#### Description
Returns a True value while your code is running. Use this block instead of "while True" when you want to run a "forever" loop. Use the "Stop" button in Blockly to stop the program.

#### Returns
**boolean:** returns true if program is running, false if user presses "Stop"

#### Example
This example cycles the colors from red, green, blue forever. Pressing the "Stop" will interrupt the while loop and stop the program.

<img src="/img/CDE/blockly_docu/junior/code_is_running_example.png" width="500px"/>  

<hr className="section_hr"/>

## Lights

### set drone LED color to [color], with a brightness of [brightness]

#### Block

<img src="/img/CDE/blockly_docu/junior/set_drone_led.png" width="450px"/>  

#### Parameters

<img src="/img/CDE/blockly_docu/junior/set_drone_led_params.png" width="450px"/>  

**color:** select a color from the color palette        
**brightness:** positive integer between 0 and 255

#### Description
Sets the color and brightness of the CoDrone EDU drone LED.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/set_drone_led_example.png" width="500px"/>  

<hr/>

### turn drone LED off

#### Block

<img src="/img/CDE/blockly_docu/junior/drone_led_off.png" width="180px"/>  

#### Parameters
None

#### Description
Turns off the CoDrone EDU drone LED.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/drone_led_off_example.png" width="480px"/>  

<hr/>

### set controller LED to [color], with a brightness of [brightness]

#### Block

<img src="/img/CDE/blockly_docu/junior/set_controller_led.png" width="475px"/>  

#### Parameters

<img src="/img/CDE/blockly_docu/junior/set_controller_LED_params.png" width="475px"/>  

**color:** select a color from the color palette        
**brightness:** positive integer between 0 and 255

#### Description
Sets the color and brightness of the CoDrone EDU controller LED.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/set_controller_LED_example.png" width="500px"/>  

<hr/>

### turn controller LED off

#### Block

<img src="/img/CDE/blockly_docu/junior/controller_led_off.png" width="220px"/>  

#### Parameters
None

#### Description
Turns off the CoDrone EDU controller LED.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/controller_led_off_example.png" width="480px"/>  

<hr className="section_hr"/>

## Sound

### play this note [note] for [duration] seconds on drone

#### Block

<img src="/img/CDE/blockly_docu/junior/play_note_drone.png" width="430px"/>  

#### Parameters

<img src="/img/CDE/blockly_docu/junior/play_note_drone_params.png" width="430px"/>  

**note:** note range from C3 to B7, Mute, Fin       
**duration:** positive integer in seconds

#### Description
Plays a note for a duration in seconds using the CoDrone EDU drone buzzer.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/play_note_drone_example.png" width="430px"/>  

<hr/>

### play this note [note] for [duration] seconds on controller

#### Block

<img src="/img/CDE/blockly_docu/junior/play_note_controller.png" width="450px"/>  

#### Parameters

<img src="/img/CDE/blockly_docu/junior/play_note_controller_params.png" width="450px"/>  

**note:** note range from C3 to B7, Mute, Fin       
**duration:** positive integer in seconds

#### Description
Plays a note for a duration in seconds using the CoDrone EDU controller buzzer.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/junior/play_note_controller_example.png" width="450px"/>  

<hr/>
