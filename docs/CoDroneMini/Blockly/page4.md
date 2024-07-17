---
title: "Senior Block Documentation"
slug: Senior-Block-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

<div className='change_version'>
version 2.0.5 ([Changelog](/docs/CoDroneMini/Blockly/Blockly-Changelog))
</div>

## Flight Commands

### take off

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/takeoff.png"/>

#### Description

Makes the drone take off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/takeoff_example.png"/>

<hr/>

### land

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/land.png"/>

#### Description

Makes the drone land.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/land_example.png"/>

<hr/>

### emergency stop

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/emergency_stop.png"/>

#### Description

Stops all commands to motors. The drone will stop flying immediately.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/emergency_stop_example.png"/>

<hr/>

### move([duration] seconds, [roll] %, [pitch] %, [yaw] %, [throttle] %)

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/move.png"/>

#### Description

Moves the drone for a certain amount of time (in seconds) in a given direction determined by the flight parameters.

#### Parameters

***integer* duration:** the duration of the movement, in seconds<br/>
***integer* roll:** roll power percentage between -100 and +100<br/> 
***integer* pitch:** pitch power percentage between -100 and +100<br/> 
***integer* yaw:** yaw power percentage between -100 and +100<br/> 
***integer* throttle:** throttle power percentage between -100 and +100<br/> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/move_example.png"/>

<hr/>

### turn([direction] , [duration] seconds, [power] %)

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/turn.png"/>

#### Description

Turns CoDrone Mini left or right for a duration in seconds and at a power percentage from 0 to 100% speed.

#### Parameters

<img src="/img/CDM/blockly_docu/senior/flight_commands/turn_params.png"/>

**direction:** left, right <br /> 
***integer* duration:** the duration of turn in seconds <br />
***integer* power:** the power of the turn from 0 to 100 <br />

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/turn_example.png"/>

<hr/>

### hover([seconds] sec)

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/hover.png"/>

#### Description

This function makes the drone hover for a duration in seconds.

#### Parameters

***integer* duration**: the duration of the hovering in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/hover_example.png"/>

<hr className="section_hr"/>

## Flight Variables

### set_roll()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_roll.png"/>

#### Description

This function sets the roll direction variable but will not send a move command. Negative values will move the drone to the left and positive values will move the drone to the right.
<img src="/img/CDM/blockly_docu/senior/flight_variables/cdm_roll.png" width="286px" height="240px"/>

#### Parameters

***integer* power:** the power of the roll movement between -100 and 100 <br/>

#### Returns

None

#### Exmaple

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_roll_example.png"/>

<hr/>

### set_pitch()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_pitch.png"/>

#### Description

This function sets the pitch direction variable but will not send a move command. Negative values will move the drone backward and positive values will move the drone forward.
<img src="/img/CDM/blockly_docu/senior/flight_variables/cdm_pitch.png" width="286px" height="240px"/>

#### Parameters

***integer* power:** the power of the pitch movement between -100 and 100 <br/>

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_pitch_example.png"/>

<hr/>

### set_yaw()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_yaw.png"/>

#### Description

This function sets the yaw direction variable but will not send a move command. Negative values will turn the drone to the right and positive values will turn the drone to the left.
<img src="/img/CDM/blockly_docu/senior/flight_variables/cdm_yaw.png" width="286px" height="240px"/>

#### Parameters

***integer* power:** the power of the yaw movement between -100 and 100 <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_yaw_example.png"/>

<hr/>

### set_throttle()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_throttle.png"/>

#### Description

This function sets the throttle direction variable but will not send a move command. Negative values will move the drone downward and positive values will move the drone upward.
<img src="/img/CDM/blockly_docu/senior/flight_variables/cdm_throttle.png" width="286px" height="240px"/>

#### Parameters

***integer* power:** the power of the throttle movement between -100 and 100 <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_throttle_example.png"/>

<hr/>

### move(duration)

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/move_seconds.png"/>

#### Description

Moves CoDrone Mini for a duration in seconds in the direction set by the flight variables. 

#### Parameters

***integer* duration:** the duration of movement in seconds <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/move_seconds_example.png"/>

<hr/>

### move()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/move.png"/>

#### Description

Moves CoDrone Mini in the direction set by the flight variables with the smallest duration possible (about 0.01 seconds). Since it has no specified duration, it is often used inside of a loop to check sensors simultaneously.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/move_example.png" width="340px" height="360px"/>

<hr/>

### set_trim()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_trim.png"/>

#### Description

Sets the trim values to adjust for any drifting while CoDrone Mini is flying. Set the trim values in the opposite direction of drift. For example, if the drone is drifting to the right, set roll to a negative value. 

#### Parameters

***integer* roll:** the power of the roll movement between -100 and 100 <br /> 
***integer* pitch:** the power of the pitch movement between -100 and 100 <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/set_trim_example.png"/>

<hr/>

### get_trim()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_trim.png"/>

#### Description

Returns the current trim values. Combine with a print statement to see the results printed to the console.

#### Parameters

None

#### Returns

***integer* roll:** the power of the roll movement between -100 and 100 <br /> 
***integer* pitch:** the power of the pitch movement between -100 and 100 <br />

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_trim_example.png"/>

<hr/>

### reset_trim()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/reset_trim.png"/>

#### Description

Resets the trim values to (0,0).

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/reset_trim_example.png" width="240px" height="360px"/>

<hr/>

### get_roll()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_roll.png"/>

#### Description

Returns the current value for the roll flight variable.

#### Parameters

None

#### Returns

***integer* roll:** the power of the roll movement between -100 and 100 <br /> 

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_roll_example.png"/>

<hr/>

### get_pitch()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_pitch.png"/>

#### Description

Returns the current value for the pitch flight variable.

#### Parameters

None

#### Returns

***integer* pitch:** the power of the pitch movement between -100 and 100 <br /> 

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_pitch_example.png"/>

<hr/>

### get_yaw()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_yaw.png"/>

#### Description

Returns the current value for the yaw flight variable.

#### Parameters

None

#### Returns

***integer* yaw:** the power of the yaw movement between -100 and 100 <br />

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_yaw_example.png"/>

<hr/>

### get_throttle()

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_throttle.png"/>

#### Description

Returns the current value for the throttle flight variable.

#### Parameters

None

#### Returns

***integer* throttle:** the power of the throttle movement between -100 and 100 <br />

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_variables/get_throttle_example.png"/>

<hr className="section_hr"/>

## Status Checkers

### code_is_running()

#### Block

<img src="/img/CDM/blockly_docu/senior/status_checkers/code_is_running.png"/>

#### Description

Returns a True value while your code is running. Use this block instead of "while True" when you want to run a "forever" loop. Use the "Stop" button in Blockly to stop the program.

#### Parameters

None

#### Returns

***boolean* running:** Returns True if program is running, False if user presses "Stop"

#### Example

<img src="/img/CDM/blockly_docu/senior/status_checkers/code_is_running_example.png"/>

<hr className="section_hr"/>

## Sensors

### get_angle()

#### Block

<img src="/img/CDM/blockly_docu/senior/sensors/get_angle.png"/>

#### Description

This function returns the **roll, pitch, and yaw angles** from the gyroscope. The 0 angle is set when pairing.

#### Parameters

<img src="/img/CDM/blockly_docu/senior/sensors/get_angle_params.png"/>

**axis:** select roll, pitch or yaw

#### Returns

***integer* angle:** angle, in degrees, from the starting position

#### Example
For this example, manually turn your drone by hand to see the yaw angle change.
<img src="/img/CDM/blockly_docu/senior/sensors/get_angle_example.png"/>

<hr/>

### get_angle()

#### Block

<img src="/img/CDM/blockly_docu/senior/sensors/get_battery_percentage.png"/>

#### Description

This function returns the current battery percentage of the drone battery.

#### Parameters

None

#### Returns

***integer* percentage:** the battery percentage from 0 to 100

#### Example

<img src="/img/CDM/blockly_docu/senior/sensors/get_battery_percentage_example.png"/>

<hr/>

### get_drone_temp()

#### Block

<img src="/img/CDM/blockly_docu/senior/sensors/get_drone_temp.png"/>

#### Description

This block returns the current temperature of the drone in either Celsius or Fahrenheit.

#### Parameters

<img src="/img/CDM/blockly_docu/senior/sensors/get_drone_temp_params.png"/>

#### Returns

***float* temperature:** Temperature of the drone, either Celsius or Fahrenheit

#### Example

<img src="/img/CDM/blockly_docu/senior/sensors/get_drone_temp_example.png"/>

<hr/>

### get_height()

#### Block

<img src="/img/CDM/blockly_docu/senior/sensors/get_height.png"/>

#### Description

This function returns the current estimated **height** of the drone from the surface at the moment of pairing. This is calculated by the barometer (air pressure sensor).

#### Parameters

None

#### Returns

***float* height:** the height of the drone in centimeters

#### Example

<img src="/img/CDM/blockly_docu/senior/sensors/get_height_example.png"/>

<hr/>

### get_pressure()

#### Block

<img src="/img/CDM/blockly_docu/senior/sensors/get_pressure.png"/>

#### Description

This function returns barometer data in Pascals. <br /> 
**Note:** 1atm = 101325 Pa

#### Parameters

None

#### Returns

***float* pressure:** the pressure measured from barometer in Pascals

#### Example

<img src="/img/CDM/blockly_docu/senior/sensors/get_pressure_example.png"/>

<hr/>

### reset_sensor()

#### Block

<img src="/img/CDM/blockly_docu/senior/sensors/reset_sensor.png"/>

#### Description

Resets the gyroscope angles to 0. The drone will flash while the gyroscope is recalibrating. Do not handle or move the drone during calibration.

#### Parameters

None

#### Returns

None

#### Example

Rotate the drone with your hand on a flat surface. See the angles change by observing the printed values in the console. Stop moving the drone when the screen prints "resetting". After resetting, the gyroscope angles will return to 0.
<img src="/img/CDM/blockly_docu/senior/sensors/reset_sensor_example.png" width="240px" height="420px"/>

<hr className="section_hr"/>

## Lights

### LED_color()

#### Block

<img src="/img/CDM/blockly_docu/senior/lights/LEDcolor.png"/>

#### Description

Sets the color of CoDrone Mini's LED. Colors are set by using its RGB (red, green, blue) equivalent values.

#### Parameters

***integer* red:** the pixel value for the color red between 0 and 255 <br /> 
***integer* green:** the pixel value for the color green between 0 and 255 <br /> 
***integer* blue:** the pixel value for the color blue between 0 and 255 <br /> 
***integer* brightness:** the brightness of the LEDs between 0 and 255 <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/lights/LEDcolor_example.png"/>

<hr/>

### LED_color(r,g,b,brightness)

#### Block

<img src="/img/CDM/blockly_docu/senior/lights/LEDcolor_pattern.png" width="500px" height="125px"/>

#### Description

Sets the color of CoDrone Mini's LED blinking pattern. "Blink" flashes the LED on and off and an interval determined by the speed parameter. "Double blink" flashes the LED twice before pausing at the interval determined by the speed parameter. 

#### Parameters
<img src="/img/CDM/blockly_docu/senior/lights/LEDcolor_pattern_params.png" width="500px"/>
***integer* red:** the pixel value for the color red between 0 and 255 <br /> 
***integer* green:** the pixel value for the color green between 0 and 255 <br /> 
***integer* blue:** the pixel value for the color blue between 0 and 255 <br /> 
**pattern:** blink or double blink <br />
***integer* speed:** the speed of the lighting pattern from 1 to 10 <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/lights/LEDcolor_pattern_example.png" width="540px" height="380px"/>

<hr/>

### turn_off_LED()

#### Block

<img src="/img/CDM/blockly_docu/senior/lights/LEDoff.png"/>

#### Description

Turns off CoDrone Mini's LED.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/lights/LEDoff_example.png"/>

<hr/>

### reset_LED()

#### Block

<img src="/img/CDM/blockly_docu/senior/lights/resetLED.png"/>

#### Description

Reset's the Codrone mini's LED to its default state (solid red LED).

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/lights/resetLED_example.png"/>

<hr className="section_hr"/>

## Sound

### play_note(note, [duration] seconds)

#### Block

<img src="/img/CDM/blockly_docu/senior/sound/play_note.png"/>

#### Description

Plays a note for a specified amount of time using the controller buzzer.

#### Parameters

<img src="/img/CDM/blockly_docu/senior/sound/play_note_params.png"/>

**note:** note from C3 to B7<br />
***integer* duration:** the duration of the buzzer note, in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/sound/play_note_example.png"/>

<hr/>

### play_note([frequency] Hertz, [duration] seconds)

#### Block

<img src="/img/CDM/blockly_docu/senior/sound/play_note_hertz.png"/>

#### Description

Plays a note at a particular frequency for a specified amount of time using the controller buzzer.

#### Parameters

***integer* frequency:** The note's frequency in Hertz<br />
***integer* duration:** the duration of the note played in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/sound/play_note_hertz_example.png"/>