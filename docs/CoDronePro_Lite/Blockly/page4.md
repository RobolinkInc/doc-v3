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
version 1.1.27
</div>

## Flight Commands

### takeoff()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_commands/takeoff.png"/>

#### Description

This function makes the CoDrone take off from the ground.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_commands/takeoff_hover_land_example.png"/>

<hr/>

### land()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_commands/land.png"/>

#### Description

This function lands the CoDrone slowly.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_commands/takeoff_hover_land_example.png"/>

<hr/>

### emergency_stop()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_commands/emergencystop.png"/>

#### Description

Stops all commands to motors. The CoDrone will stop flying immediately.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_commands/emergencystop_example.png"/>

<hr/>

### move([duration] sec, [roll]%, [pitch]%, [yaw]%, [throttle]%)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_commands/move.png"/>

#### Description

Moves CoDrone based on the given roll, pitch, yaw, and throttle power for a given duration, in seconds.

#### Parameters

**duration:** time of movement/flight<br/>
**roll:** the power for the roll movement (-100 - 100)<br/>
**pitch:** the power for the pitch movement (-100 - 100)<br/>
**yaw:** the power for the yaw movement (-100 - 100)<br/>
**throttle:** the power for the throttle (-100 - 100)<br/>

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_commands/move_example.png"/>

<hr/>

### turn([direction], [duration] seconds, [power]%)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_commands/turn.png"/>

#### Description

Turns the CoDrone to a given direction for a given duration, in seconds, at a given power/speed.

#### Parameters

<img src="/img/CDPL/blockly_docu/senior/flight_commands/turn_params.png"/>

**direction:** the direction of the turn<br/>
**duration:** the duration of the turn<br/>
**power:** the power/speed of the turn<br/>

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_commands/turn_example.png"/>

<hr/>

### hover([duration] sec)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_commands/hover.png"/>

#### Description

Makes the CoDrone hover for a given duration, in seconds.

#### Parameters

**duration:** duration of the hover

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_commands/takeoff_hover_land_example.png"/>

<hr className="section_hr"/>

## Flight Variables

### set_roll([power]%)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_roll.png" width="220px"/>

#### Description

This function sets the roll direction variable but will not move the CoDrone. Negative values will move the drone to the left and positive values will move the drone to the right.

#### Parameters

**power:** integer between -100 and 100

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_roll_example.png"/>

<hr/>

### set_pitch([power]%)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_pitch.png"/>

#### Description

This function sets the pitch direction variable but will not move the CoDrone. Negative values will move the drone to the backward and positive values will move the drone to the forward.

#### Parameters

**power:** integer between -100 and 100

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_pitch_example.png"/>

<hr/>

### set_yaw([power]%)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_yaw.png"/>

#### Description

This function sets the yaw direction variable but will not rotate the CoDrone. Negative values will rotate the drone to the left and positive values will rotate the drone to the right.

#### Parameters

**power:** integer between -100 and 100

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_yaw_example.png"/>

<hr/>

### set_throttle([power]%)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_throttle.png"/>

#### Description

This function sets the throttle direction variable but will not move the CoDrone. Negative values will move the drone to the down and positive values will move the drone up.

#### Parameters

**power:** integer between -100 and 100

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/set_throttle_example.png"/>

<hr/>

### move([duration] sec)

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/move_sec.png"/>

#### Description

Moves the CoDrone for a given duration based on the flight variable blocks preceding this block.

#### Parameters

**duration:** the time of the movement

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/move_sec_example.png"/>

<hr/>

### move()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/move.png"/>

#### Description

Moves the CoDrone indefinitely based on the flight variable blocks preceding this block.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/move_example.png"/>

<hr/>

### get_roll()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_roll.png"/>

#### Description

Returns the current value for the roll flight variable.

#### Parameters

None

#### Returns

**roll:** the power of the roll (-100 - 100)

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_roll_example.png"/>

<hr/>

### get_pitch()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_pitch.png"/>

#### Description

Returns the current value for the pitch flight variable.

#### Parameters

None

#### Returns

**pitch:** the power of the pitch (-100 - 100)

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_pitch_example.png"/>

<hr/>

### get_yaw()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_yaw.png"/>

#### Description

Returns the current value for the yaw flight variable.

#### Parameters

None

#### Returns

**yaw:** the power of the yaw (-100 - 100)

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_yaw_example.png"/>

<hr/>

### get_throttle()

#### Block

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_throttle.png"/>

#### Description

Returns the current value for the throttle flight variable.

#### Parameters

None

#### Returns

**throttle:** the power of the throttle (-100 - 100)

#### Example

<img src="/img/CDPL/blockly_docu/senior/flight_variables/get_throttle_example.png"/>

<hr className="section_hr"/>

## Status Checkers

### is_code_running()

#### Block

<img src="/img/CDPL/blockly_docu/senior/status_checkers/is_code_running.png"/>

#### Description

Returns a True value while your code is running. Use this block instead of "while True" when you want to run a "forever" loop. Use the "Stop" button in Blockly to stop the program.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/status_checkers/is_code_running_example.png"/>

<hr className="section_hr"/>

## Lights

### arm_color([red], [green], [blue], [brightness] brightness)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/armcolor_brightness.png"/>

#### Description

Sets the LED color of CoDrone's arms using RGB values and their brightness with value from 1 - 100.

#### Parameters

**red:** Pixel value for the color red<br/>
**green:** Pixel value for the color green<br/>
**blue:** Pixel value for the color blue<br/>
**brightness:** brightness of the LED color

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/armcolor_brightness_example.png"/>

<hr/>

### eye_color([red], [green], [blue], [brightness] brightness)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/eyecolor_brightness.png"/>

#### Description

Sets the LED color of CoDrone's eyes using RGB values and their brightness with value from 1 - 100.

#### Parameters

**red:** Pixel value for the color red<br/>
**green:** Pixel value for the color green<br/>
**blue:** Pixel value for the color blue<br/>
**brightness:** brightness of the LED color

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/eyecolor_brightness_example.png"/>

<hr/>

### arm_default_color([red], [green], [blue], [brightness] brightness)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/arm_default_color.png"/>

#### Description

Sets the default LED color of CoDrone's arms using RGB values and their brightness with value from 1 - 100, so it will remain that color even after powering off and back on.

#### Parameters

**red:** Pixel value for the color red<br/>
**green:** Pixel value for the color green<br/>
**blue:** Pixel value for the color blue<br/>
**brightness:** brightness of the LED color

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/arm_default_color_example.png"/>

<hr/>

### eye_default_color([red], [green], [blue], [brightness] brightness)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/eye_default_color.png"/>

#### Description

Sets the default LED color of CoDrone's eyes using RGB values and their brightness with value from 1 - 100, so it will remain that color even after powering off and back on.

#### Parameters

**red:** Pixel value for the color red<br/>
**green:** Pixel value for the color green<br/>
**blue:** Pixel value for the color blue<br/>
**brightness:** brightness of the LED color

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/eye_default_color_example.png"/>

<hr/>

### arm_pattern([red], [green], [blue], [pattern], [speed] speed)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/arm_pattern.png"/>

#### Description

Sets the LED color of CoDrone's arms using RGB values with a given pattern at a given speed

#### Parameters

<img src="/img/CDPL/blockly_docu/senior/lights/arm_pattern_params.png"/>

**red:** pixel value for the color red<br/>
**green:** pixel value for the color green<br/>
**blue:** pixel value for the color blue<br/>
**pattern:** lighting pattern of the LEDs<br/>
**speed:** speed of the lighting pattern

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/arm_pattern_example.png"/>

<hr/>

### eye_pattern([red], [green], [blue], [pattern], [speed] speed)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/eye_pattern.png"/>

#### Description

Sets the LED color of CoDrone's eyes using RGB values with a given pattern at a given speed

#### Parameters

<img src="/img/CDPL/blockly_docu/senior/lights/eye_pattern_params.png"/>

**red:** pixel value for the color red<br/>
**green:** pixel value for the color green<br/>
**blue:** pixel value for the color blue<br/>
**pattern:** lighting pattern of the LEDs<br/>
**speed:** speed of the lighting pattern

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/eye_pattern_example.png"/>

<hr/>

### default_eye_pattern([red], [green], [blue], [pattern], [speed] speed)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/default_eye_pattern.png"/>

#### Description

Sets default LED color of CoDrone's eyes using RGB values with a given pattern at a given speed, which means the lights will remain in that color and pattern when powered off and back on.

#### Parameters

<img src="/img/CDPL/blockly_docu/senior/lights/default_eye_pattern_params.png"/>

**red:** pixel value for the color red<br/>
**green:** pixel value for the color green<br/>
**blue:** pixel value for the color blue<br/>
**pattern:** lighting pattern of the LEDs<br/>
**speed:** speed of the lighting pattern

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/default_eye_pattern_example.png"/>

<hr/>

### default_arm_pattern([red], [green], [blue], [pattern], [speed] speed)

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/default_arm_pattern.png"/>

#### Description

Sets default LED color of CoDrone's arms using RGB values with a given pattern at a given speed, which means the lights will remain in that color and pattern when powered off and back on.

#### Parameters

<img src="/img/CDPL/blockly_docu/senior/lights/default_arm_pattern_params.png"/>

**red:** pixel value for the color red<br/>
**green:** pixel value for the color green<br/>
**blue:** pixel value for the color blue<br/>
**pattern:** lighting pattern of the LEDs<br/>
**speed:** speed of the lighting pattern

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/default_arm_pattern_example.png"/>

<hr/>

### arm_strobe()

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/arm_strobe.png"/>

#### Description

CoDrone turns on strobing effect for arm lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/arm_strobe_example.png"/>

<hr/>

### eye_strobe()

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/eye_strobe.png"/>

#### Description

CoDrone turns on strobing effect for eye lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/eye_strobe_example.png"/>

<hr/>

### arm_default_strobe()

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/arm_default_strobe.png"/>

#### Description

Sets a default strobing effect for arm lights, which will still be in effect after it's turned off and on.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/arm_default_strobe_example.png"/>

<hr/>

### eye_default_strobe()

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/eye_default_strobe.png"/>

#### Description

Sets a default strobing effect for eye lights, which will still be in effect after it's turned off and on.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/eye_default_strobe_example.png"/>

<hr/>

### arm_off()

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/arm_off.png"/>

#### Description

Turns off all arm lights off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/arm_off_example.png"/>

<hr/>

### eye_off()

#### Block

<img src="/img/CDPL/blockly_docu/senior/lights/eye_off.png"/>

#### Description

Turns off all eye lights off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDPL/blockly_docu/senior/lights/eye_off_example.png"/>