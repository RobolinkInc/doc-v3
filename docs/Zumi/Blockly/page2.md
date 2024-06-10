---
title: "Junior Block Documentation"
slug: Junior-Block-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---


<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

## Driving

### forward

#### Block

<img src="/img/Zumi/blockly_docu/junior/forward.png" width="240spx" height="90px"/>  

#### Parameters

**seconds**: A float value for the duration of the movement. <br /> 
**speed**: An integer (0 - 100) for the speed of the movement.

#### Description
Moves Zumi forward for the given duration and speed


#### Returns
None

#### Example

<img src="/img/Zumi/blockly_docu/junior/forward_example.png" width="240px" height="300px"/>  

<hr/>

### reverse

#### Block
<img src="/img/Zumi/blockly_docu/junior/reverse.png" width="240spx" height="90px"/>

#### Parameters

**seconds**: A float value for the duration of the movement. <br /> 
**speed**: An integer (0 - 100) for the speed of the movement.

#### Description

Moves Zumi backwards for the given duration and speed

#### Returns

None

#### Example
<img src="/img/Zumi/blockly_docu/junior/reverse_example.png" width="240px" height="300px"/>

<hr/>

### turn left

#### Block

<img src="/img/Zumi/blockly_docu/junior/turn_left.png" width="240px" height="90px"/>

#### Description

Turns Zumi to the left a number of specified degrees.

#### Parameters

**degrees**: An integer in degrees <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/turn_left_example.png" width="280px" height="260px"/>

<hr/>

### turn right

#### Block

<img src="/img/Zumi/blockly_docu/junior/turn_right.png" width="240px" height="90px"/>

#### Description

Turns Zumi to the right a number of specified degrees.

#### Parameters

**degrees**: An integer in degrees. <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/turn_right_example.png"  width="280px" height="260px"/>

<hr/>

### stop

#### Block

<img src="/img/Zumi/blockly_docu/junior/stop.png" width="240px" height="90px"/>

#### Description

Stops Zumi's motors when running indefinite move commands such as the Senior forward_step() block.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/stop_example.png"  width="280px" height="260px"/>

<hr/>

### left u turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/left_u_turn.png" width="240px" height="90px"/>

#### Description

Makes Zumi perform a left "U-turn". As the speed increases, the turn radius gets larger.

#### Parameters

**speed**: An integer (0 - 100)

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/left_u_turn_example.png" width="240px"/>

<hr/>

### right u turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/right-u-turn.png" width="240px" height="90px"/>

#### Description

Makes Zumi perform a right "U-turn". As the speed increases, the turn radius gets larger.

#### Parameters

**speed**: An integer (0 - 100)

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/right_u_turn_example.png" width="240px"/>

<hr/>

### parallel park

#### Block

<img src="/img/Zumi/blockly_docu/junior/parallel_park.png" width="240px" height="90px"/>

#### Description

Drives Zumi in reverse into a parallel park.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/parallel_park_example.png" width="260px" height="160px"/>

<hr/>

### calibrate gyro

#### Block

<img src="/img/Zumi/blockly_docu/junior/calibrate_gyro.png" width="240px" height="90px"/>

#### Description

Recalibrates Zumi's gyroscope. Use when the gyroscope returns values with high error due to drift. During recalibration, Zumi should be stationary on a flat surface.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/calibrate_gyro.png" width="240px" height="90px"/>
