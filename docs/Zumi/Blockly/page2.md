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

<img src="/img/Zumi/blockly_docu/junior/driving/forward.png" width="240px" height="90px"/>  

#### Parameters

**seconds**: A float value for the duration of the movement. <br /> 
**speed**: An integer (0 - 100) for the speed of the movement.

#### Description
Moves Zumi forward for the given duration and speed


#### Returns
None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/forward_example.png" width="240px" height="300px"/>  

<hr/>

### reverse

#### Block
<img src="/img/Zumi/blockly_docu/junior/driving/reverse.png" width="240px" height="90px"/>

#### Parameters

**seconds**: A float value for the duration of the movement. <br /> 
**speed**: An integer (0 - 100) for the speed of the movement.

#### Description

Moves Zumi backwards for the given duration and speed

#### Returns

None

#### Example
<img src="/img/Zumi/blockly_docu/junior/driving/reverse_example.png" width="240px" height="300px"/>

<hr/>

### turn left

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/turn_left.png" width="240px" height="90px"/>

#### Description

Turns Zumi to the left a number of specified degrees.

#### Parameters

**degrees**: An integer in degrees <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/turn_left_example.png" width="340px" height="260px"/>

<hr/>

### turn right

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/turn_right.png" width="240px" height="90px"/>

#### Description

Turns Zumi to the right a number of specified degrees.

#### Parameters

**degrees**: An integer in degrees. <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/turn_right_example.png"  width="340px" height="260px"/>

<hr/>

### stop

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/stop.png" width="170px" height="100px"/>

#### Description

Stops Zumi's motors when running indefinite move commands such as the Senior forward_step() block.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/stop_example.png"  width="340px" height="260px"/>

<hr/>

### left u turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/left_u_turn.png" width="240px" height="90px"/>

#### Description

Makes Zumi perform a left "U-turn". As the speed increases, the turn radius gets larger.

#### Parameters

**speed**: An integer (0 - 100)

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/left_u_turn_example.png" width="240px"/>

<hr/>

### right u turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/right-u-turn.png" width="240px" height="90px"/>

#### Description

Makes Zumi perform a right "U-turn". As the speed increases, the turn radius gets larger.

#### Parameters

**speed**: An integer (0 - 100)

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/right_u_turn_example.png" width="240px"/>

<hr/>

### parallel park

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/parallel_park.png" width="240px" height="90px"/>

#### Description

Drives Zumi in reverse into a parallel park.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/parallel_park_example.png" width="260px" height="160px"/>

<hr/>

### calibrate gyro

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/calibrate_gyro.png" width="240px" height="90px"/>

#### Description

Recalibrates Zumi's gyroscope. Use when the gyroscope returns values with high error due to drift. During recalibration, Zumi should be stationary on a flat surface.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/calibrate_gyro.png" width="240px" height="90px"/>

<hr/>

## Shapes

### triangle

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/triangle.png" width="240px"/>

#### Description

Drives Zumi in the shape of a triangle using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/triangle_params.png" width="240px"/>

**left**: Makes a triangle with left turns <br /> 
**right**: Makes a triangle with right turns <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/triangle_example.png" width="280px" height="150px"/>

<hr/>

### square

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/square.png" width="240px"/>

#### Description

Drives Zumi in the shape of a square using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/square_params.png" width="240px"/>

**left**: Makes a square with left turns. <br/>
**right**: Makes a square with right turns. <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/square_example.png" width="280px" height="150px"/>

<hr/>

### rectangle

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/rectangle.png" width="240px"/>

#### Description

Drives Zumi in the shape of a rectangle using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/rectangle_params.png" width="240px"/>

**left**: Makes a rectangle with left turns. <br/>
**right**: Makes a rectangle with right turns. <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/rectangle_example.png" width="280px" height="150px"/>

<hr/>

### circle

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/circle.png" width="240px"/>

#### Description

Drives Zumi in the shape of a circle using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/circle_params.png" width="240px"/>

**left**: Makes a circle turning to the left. <br/> 
**right**: Makes a circle turning to the right. <br/> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/circle_example.png" width="280px" height="150px"/>

<hr/>

### figure 8

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/figure8.png" width="170px" height="100px"/>

#### Description

Drives Zumi in the shape of a figure 8. Zumi does a full circle to the right, and then a full circle to the left.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/figure8_example.png" width="260px" height="150px"/>

<hr/>

### j turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/jturn.png" width="170px" height="100px"/>

#### Description

Drives Zumi in the shape of a J turn. Zumi will start by driving forward

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/jturn_example.png" width="260px" height="150px"/>
