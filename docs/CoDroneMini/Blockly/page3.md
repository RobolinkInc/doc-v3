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
version 2.0.5 ([Changelog](/docs/CoDroneMini/Blockly/Blockly-Changelog))
</div>

## Flight Commands

### take off

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_commands/takeoff.png"/>

#### Description

This functions makes the drone take off. CoDrone Mini takes off at around 3-4 ft off the ground.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_commands/takeoff_example.png"/>

<hr/>

### land

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_commands/land.png"/>

#### Description

This function makes the drone land by throttling down safely.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_commands/land_example.png"/>

<hr/>

### emergency stop

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_commands/emergencystop.png"/>

#### Description

Stops all commands to motors. The drone will stop flying immediately.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_commands/emergencystop_example.png" />

<hr/>

### go [direction] for [duration] seconds

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_commands/go.png"/>

#### Description

Moves the drone in a direction for a given duration.

#### Parameters

<img src="/img/CDM/blockly_docu/junior/flight_commands/go_params.png"/>

**direction:** forward, backward, up, down, left, right <br /> 
***integer* duration:** the duration of movement in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_commands/go_example.png"/>

<hr/>

### go [direction] for [duration] seconds at [power] % power

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_commands/go_power.png"/>

#### Description

Moves the drone in a direction for a given duration and power percentage.

#### Parameters

<img src="/img/CDM/blockly_docu/junior/flight_commands/go_power_params.png" width="460px"/>

**direction:** forward, backward, up, down, left, right <br />
***integer* power:** the power/speed of the drone between 0 and 100 <br /> 
***integer* duration:** the duration of the move in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_commands/go_power_example.png"/>

<hr/>

### turn [direction] for [duration] seconds at [power] power

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_commands/turn.png"/>

#### Description

Turns the CoDrone Mini in a given direction for the given duration at the given power percentage.

#### Parameters

<img src="/img/CDM/blockly_docu/junior/flight_commands/turn_params.png"/>

**direction:** the direction of the movement (left, right) <br /> 
***integer* power:** the power/speed of the drone between 0 and 100 <br /> 
***integer* duration:** the duration of the turn in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_commands/turn_example.png"/>

<hr/>

### hover for [duration] seconds

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_commands/hover.png"/>

#### Description

This function makes the drone hover for a given amount of time.

#### Parameters

***integer* duration:** the duration of the hover in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_commands/hover_example.png"/>

<hr className="section_hr"/>

## Flight Sequences

### flip left

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipleft.png"/>

#### Description

Makes the drone flip to the left.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipleft_example.png"/>

<hr/>

### flip right

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipright.png"/>

#### Description

Makes the drone flip to the right.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipright_example.png"/>

<hr/>

### flip backward

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipbackward.png"/>

#### Description

Makes the drone flip backward.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipbackward_example.png"/>

<hr/>

### flip forward

#### Block

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipforward.png"/>

#### Description

Makes the drone flip forward.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/flight_sequences/flipforward_example.png"/>

<hr className="section_hr"/>

## Status Checkers

### code is running

#### Block

<img src="/img/CDM/blockly_docu/junior/status_checkers/codeisrunning.png"/>

#### Description

Returns a True value while your code is running. Use this block instead of "while True" when you want to run a "forever" loop. Use the "Stop" button in Blockly to stop the program.

#### Parameters

None

#### Returns

***boolean* running:** returns True if program is running, False if user presses "Stop"

#### Example

<img src="/img/CDM/blockly_docu/junior/status_checkers/codeisrunning_example.png"/>

<hr className="section_hr"/>

## Lights

### set drone LED color to [color], with a brightness of [brightness]

#### Block

<img src="/img/CDM/blockly_docu/junior/lights/LEDcolor.png"/>

#### Description

Sets the color of CoDrone Mini's LED.

#### Parameters

<img src="/img/CDM/blockly_docu/junior/lights/LEDcolor_params.png"/>

**color:** select a color from the color palette <br />
***integer* brightness:** brightness of the LED between 0 and 255 <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/lights/LEDcolor_example.png"/>

<hr/>

### set drone LED color to [color], and pattern to [pattern] with a speed of [speed]

#### Block

<img src="/img/CDM/blockly_docu/junior/lights/LEDcolor_pattern.png" width="600px" height="150px"/>

#### Description

Sets the color of CoDrone Mini's LED blinking pattern. "Blink" flashes the LED on and off and an interval determined by the speed parameter. "Double blink" flashes the LED twice before pausing at the interval determined by the speed parameter. 

#### Parameters

<img src="/img/CDM/blockly_docu/junior/lights/LEDcolor_pattern_params.png" width="650px" height="360px"/>

**color:** select a color from the color palette <br />
**pattern:** blink or double blink <br />
***integer* speed:** the speed of the lighting pattern from 1 to 10 <br /> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/lights/LEDcolor_pattern_example.png" width="600px" height="340px"/>

<hr/>

### turn LED off

#### Block

<img src="/img/CDM/blockly_docu/junior/lights/LEDoff.png"/>

#### Description

Turns off CoDrone Mini's LED.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/lights/LEDoff_example.png"/>

<hr/>

### reset LED

#### Block

<img src="/img/CDM/blockly_docu/junior/lights/resetLED.png"/>

#### Description

Reset's the Codrone Mini's LED back to the default red LED.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/lights/resetLED_example.png"/>

<hr className="section_hr"/>

## Sound

### play this note [note] for [duration] seconds

#### Block

<img src="/img/CDM/blockly_docu/junior/sound/playnote.png"/>

#### Description

Plays a note for a specified amount of time using the buzzer on the CoDrone Mini controller.

#### Parameters

<img src="/img/CDM/blockly_docu/junior/sound/playnote_params.png"/>

**note:** a note from C3 to B7 <br />
***integer* duration:** the duration of the note played, in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/junior/sound/playnote_example.png" width="360px" height="300px"/>