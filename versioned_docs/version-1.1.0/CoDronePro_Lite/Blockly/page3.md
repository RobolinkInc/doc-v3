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
version 1.1.27
</div>


## Flight Commands

### take off

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/takeoff.png" width="130px" height="60px"/>

#### Description

This function makes the CoDrone take off from the ground.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/takeoff_hover_land_example.png" width="300px" height="210px"/>

<hr/>

### land

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/land.png" width="110px" height="60px"/>

#### Description

This function slowly lands the CoDrone.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/takeoff_hover_land_example.png" width="300px" height="210px"/>

<hr/>

### emergency stop

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/emergencystop.png" width="200px" height="60px"/>

#### Description

Stops all commands to motors. The CoDrone will stop flying immediately.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/emergencystop_example.png" width="290px" height="140px"/>

<hr/>

### go [direction] for [duration] seconds

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/go.png" width="370px" height="90px"/>

#### Description

CoDrone moves to a given direction for a given duration, in seconds.

#### Parameters

<img src="/img/CDPL/blockly_docu/junior/flight_commands/go_params.png" width="370px" height="210px"/>

**direction:** the direction of flight<br/>
**duration:** the duration of flight, in seconds

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/go_example.png" width="370px" height="190px"/>

<hr/>

### go [direction] for [duration] seconds at [power]% power

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/go_power.png" width="500px" height="90px"/>

#### Description

CoDrone moves to a given direction for a given duration, in seconds, at a given power.

#### Parameters

<img src="/img/CDPL/blockly_docu/junior/flight_commands/go_power_params.png" width="510px" height="190px"/>

**direction:** the direction of flight<br/>
**duration:** the duration of flight, in seconds<br/>
**power:** the power/speed of the flight

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/go_power_example.png" width="500px" height="180px"/>

<hr/>

### turn [direction] for [duration] seconds at [power]% power

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/turn_power.png" width="520px" height="90px"/>

#### Description

Turns the CoDrone to a given direction for a given duration, in seconds, at a given power/speed.

#### Parameters

<img src="/img/CDPL/blockly_docu/junior/flight_commands/turn_power_params.png" width="520px" height="120px"/>

**direction:** the direction of turn<br/>
**duration:** the duration of turn, in seconds<br/>
**power:** the power/speed of the turn

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/turn_power_example.png" width="520px" height="180px"/>

<hr/>

### turn 180 degrees

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/turn_180.png" width="235px" height="70px"/>

#### Description

Turns around the CoDrone 180 degrees 

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/turn_180_example.png" width="240px" height="200px"/>

<hr/>

### hover for [duration] seconds

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_commands/hover.png" width="290px" height="90px"/>

#### Description

Makes the CoDrone hover for a given duration in seconds.

#### Parameters

**duration:** the time the CoDrone should hover

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_commands/takeoff_hover_land_example.png" width="290px" height="200px"/>

<hr className="section_hr"/>

## Flight Sequences

### fly in a square

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/square.png" width="220px" height="70px"/>

#### Description

CoDrone flies in a square pattern.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/square_example.png" width="220px" height="190px"/>

<hr/>

### fly in a circle

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/circle.png" width="220px" height="70px"/>

#### Description

CoDrone flies in a circle pattern.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/circle_example.png" width="220px" height="205px"/>

<hr/>

### fly in a spiral

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/spiral.png" width="220px" height="70px"/>

#### Description

CoDrone flies in a spiral pattern.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/spiral_example.png" width="220px" height="205px"/>

<hr/>

### hop forward

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/hop.png" width="220px" height="70px"/>

#### Description

CoDrone flies in a forward hop pattern

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/hop_example.png" width="320px" height="300px"/>

<hr/>

### sway

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/sway.png" width="140px" height="70px"/>

#### Description

CoDrone flies in a swaying pattern.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/sway_example.png" width="320px" height="300px"/>

<hr/>

### zigzag

#### Block

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/zigzag.png" width="150px" height="70px"/>

#### Description

CoDrone flies in a zigzag pattern.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/flight_sequences/zigzag_example.png" width="320px" height="300px"/>

<hr className="section_hr"/>

## Status Checkers

### is code running?

#### Block

<img src="/img/CDPL/blockly_docu/junior/status_checkers/is_code_running.png" width="200px" height="50px"/>

#### Description

Returns a True value while your code is running. Use this block instead of "while True" when you want to run a "forever" loop. Use the "Stop" button in Blockly to stop the program.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/status_checkers/is_code_running_example.png" width="570px" height="130px"/>

<hr className="section_hr"/>

## Sensors

### get height from ground

#### Block

<img src="/img/CDPL/blockly_docu/junior/sensors/get_height.png" width="340px" height="70px"/>

#### Description

This function returns the current height of the drone from the object directly below its IR sensor.

#### Parameters

None

#### Returns

**height:** The current height above the object directly below the drone’s IR height sensor as an int (mm).

#### Example

<img src="/img/CDPL/blockly_docu/junior/sensors/get_height_example.png" width="650px" height="320px"/>

<hr/>

### get battery percentage

#### Block

<img src="/img/CDPL/blockly_docu/junior/sensors/get_battery_percentage.png" width="330px" height="70px"/>

#### Description

This function returns the current battery percentage of the CoDrone, from 0 to 100.

#### Parameters

None

#### Returns

**percentage:** The battery’s percentage as an integer from 0 - 100.

#### Example

<img src="/img/CDPL/blockly_docu/junior/sensors/get_battery_percentage_example.png" width="650px" height="360px"/>

<hr/>

### get gyro data

#### Block

<img src="/img/CDPL/blockly_docu/junior/sensors/get_gyro_angles.png" width="250px" height="70px"/>

#### Description

This function gets the data from the gyrometer sensor to determine the roll, pitch, and yaw as angles.

#### Parameters

None

#### Returns

Returns a list of angles: roll, pitch, and yaw, respectively

#### Example

<img src="/img/CDPL/blockly_docu/junior/sensors/get_gyro_angles_example.png" width="700px" height="360px"/>

<hr className="section_hr"/>

## Lights

### set arm color to [color], with a brightness of [brightness]

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/set_armcolor_brightness.png" width="610px" height="110px"/>

#### Description

CoDrone lights its arms with the given color at a given brightness.

#### Parameters

<img src="/img/CDPL/blockly_docu/junior/lights/set_armcolor_brightness_params.png" width="610px" height="240px"/>

**color:** The color of the arms' LEDs<br/>
**brightness:** The brightness of the arms' LEDs

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/set_armcolor_brightness_example.png" width="815px" height="220px"/>

<hr/>

### set arm color to [color], and pattern to [pattern], with a speed of [speed]

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/set_armcolor_pattern_speed.png" width="870px" height="80px"/>

#### Description

CoDrone lights its arms with the given color and given light pattern at a given speed.

#### Parameters

<img src="/img/CDPL/blockly_docu/junior/lights/set_armcolor_pattern_speed_params.png"/>

**color:** The color of the arms' LEDs<br/>
**pattern:** The lighting pattern of the arms' LEDs<br/>
**speed:** The speed of the lighting pattern 

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/set_armcolor_pattern_speed_example.png"/>

<hr/>

### set eye color to [color], with a brightness of [brightness]

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/set_eyecolor_brightness.png" width="610px" height="110px"/>

#### Description

CoDrone lights its eyes with the given color at a given brightness.

#### Parameters

<img src="/img/CDPL/blockly_docu/junior/lights/set_eyecolor_brightness_params.png" width="610px" height="240px"/>

**color:** The color of the arms' LEDs<br/>
**brightness:** The brightness of the arms' LEDs

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/set_eyecolor_brightness_example.png" width="815px" height="220px"/>

<hr/>

### set eye color to [color], and pattern to [pattern], with a speed of [speed]

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/set_eyecolor_pattern_speed.png"/>

#### Description

CoDrone lights its eyes with the given color and given light pattern at a given speed.

#### Parameters

<img src="/img/CDPL/blockly_docu/junior/lights/set_eyecolor_pattern_speed_params.png"/>


**color:** The color of the eyes' LEDs<br/>
**pattern:** The lighting pattern of the eyes' LEDs<br/>
**speed:** The speed of the lighting pattern

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/set_eyecolor_pattern_speed_example.png"/>

<hr/>

### strobe eye lights

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/strobe_eyelights.png" width="260px" height="80px"/>

#### Description

CoDrone turns on strobing effect for eye lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/strobe_eyelights_example.png" width="340px" height="260px"/>

<hr/>

### strobe arm lights

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/strobe_armlights.png" width="260px" height="80px"/>

#### Description

CoDrone turns on strobing effect for arm lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/strobe_armlights_example.png" width="340px" height="260px"/>

<hr/>

### turn eyes off

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/turn_eyes_off.png" width="230px" height="80px"/>

#### Description

CoDrone's eye lights turn off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/turn_eyes_off_example.png" width="630px" height="280px"/>

<hr/>

### turn arms off

#### Block

<img src="/img/CDPL/blockly_docu/junior/lights/turn_arms_off.png" width="230px" height="80px"/>

#### Description

CoDrone's arm lights turn off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/junior/lights/turn_arms_off_example.png" width="630px" height="280px"/>