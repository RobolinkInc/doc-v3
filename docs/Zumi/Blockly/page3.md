---
title: "Senior Block Documentation"
slug: Senior-Block-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>


## Driving

### forward step

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/forward_step.png" width="340px" height="100px"/>  

#### Description
Takes one drive "step" forward in the direction of the angle heading. This block must be used in a loop to observe any movement. Use the stop block at the end of the for loop to stop Zumi.

#### Parameters
**speed**: An integer from 0 to 127<br/> 
**angle**: An integer in degrees (0 degrees is defined when the Zumi object is created)

#### Returns
None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/forward_step_example.png" width="350px" height="210px"/>  

<hr/>

### reverse step

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/reverse_step.png" width="240px"/>

#### Description

Takes one drive "step" backward in the direction of the angle heading. This block must be used in a loop to observe any movement. Use the stop block at the end of the for loop to stop Zumi.

#### Parameters

**speed**: An integer from 0 to 127<br/> 
**angle**: An integer in degrees (0 degrees is defined when the Zumi object is created)

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/reverse_step_example.png" width="240px"/>

<hr/>

### move to coordinate

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/move_to_coordinate.png" width="240px"/>

#### Description

Drives Zumi to an (x,y) position from the origin. The origin (0,0) is defined at Zumi object creation. To reset the origin, use the ```reset_coordinate()``` block. This method uses a best fit linear approximation of the distance traveled over time. Zumi will only keep update her coordinates when driving with this block. Using any other drive command will not keep track of her location.

#### Parameters

<img src="/img/Zumi/blockly_docu/senior/driving/move_to_coordinate_params.png" width="240px"/>

**x**: A float value for the x coordinate <br /> 
**y**: A float value for the y coordinate <br /> 
**unit**: Units of the coordinates, centimeters or inches

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/move_to_coordinate_example.png" width="240px"/>

<hr/>

### reset coordinate

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/reset_coordinate_example.png" width="240px"/>

#### Description

Resets Zumi's coordinates to (0,0). The origin will be reference point when using the ```move_to_coordinate()``` block.

#### Parameters

None

#### Returns

None

#### Example
In this example, Zumi moves 5 inches in the x-direction. After resetting the coordinates Zumi will move another 5 inches in the x-direction since the origin has been reset.
<img src="/img/Zumi/blockly_docu/senior/driving/reset_coordinate_example.png" width="240px"/>

<hr/>

### line follow gyro

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/line_follow_gyro.png" width="240px"/>

#### Description

Uses the bottom IR sensors so that Zumi can execute a line following program for the duration of the timeout. If the bottom IR sensors detect a black line, Zumi will continue to drive forward. If one of the sensors detects white, Zumi will turn left or right to stay on the line. If both sensors detect white, Zumi will automatically stop, regardless of the timeout.The speed is capped to 80.

#### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Float value timeout in seconds <br /> 
**angle_adj**: Integer number of degrees Zumi will turn if one IR sensor detects white.<br/>
**left_IR**: Integer threshold of the bottom left IR sensor. <br /> 
**right_IR**: Integer threshold of the bottom right IR sensor. <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/line_follow_gyro_example.png" width="240px"/>

<hr/>

### funnel align

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/funnel_align.png" width="240px"/>

#### Description

Uses the bottom IR sensors so that Zumi can align to the funnel piece on the competition field for the duration of the timeout (Click [here](https://learn.robolink.com/wp-content/uploads/2021/06/current_funnel.pdf) for a PDF version of the funnel piece).

#### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Float timeout value in seconds<br /> 
**angle_adj**: Integer number of degrees Zumi will turn if one IR sensor detects white.

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/funnel_align_example.png" width="240px"/>

<hr/>

### forward avoid collision

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/forward_avoid_collision.png" width="240px"/>

#### Description

Drives Zumi forward until an object is detected or the timeout runs out, whicever comes first. An object is considered detected if either of the front IR sensor values goes below the threshold.

#### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Float value timeout in seconds <br /> 
**angle**: Integer heading in degrees (Default to None which is Zumi's current heading)
**IR_thresh**: Integer threshold of front IR sensors. <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/forward_avoid_collision.png" width="240px"/>

<hr/>

### reverse avoid collision

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/reverse_avoid_collision.png" width="240px"/>


#### Description

Drives Zumi in reverse until an object is detected or the timeout runs out, whicever comes first. An object is considered detected if either of the backIR sensor values goes below the threshold.

#### Parameters

**speed**: Positive integer value for speed between 0 and 80 <br /> 
**duration**: Float value timeout in seconds  <br /> 
**angle**: Integer heading in degrees (Default to None which is Zumi's current heading)
**IR_thresh**: Integer threshold of front IR sensors. <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/reverse_avoid_collision.png" width="240px"/>

<hr/>

### set pid

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/set_PID.png" width="240px"/>

#### Description

Sets the proportional, integral and derivative terms in a PID control system. These parameters help Zumi drive straight and make accurate turns. The default values are recommended, but can be adjusted to see how the control system works.

Proportional: the output is proportional to the error
Integral: compensates for the sums of the error over time
Derivative: compensates for sudden changes in the error

#### Parameters

**P**: float value for proportional control <br/>
**I**: float value for integral control <br/>
**D**: float value for derivative control <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/set_PID.png" width="240px"/>

<hr/>

### set speed prediction

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/set_speed_prediction.png" width="240px"/>

#### Description

Manually sets the line of best fit parameters that are used with ```move_to_coordinate()```. This block overrides any speed prediction values that were automatically set with the ```speed_calibration()``` block.

#### Parameters

**speed**: Integer speed from 0 to 100 used for calibrating distance traveled

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/set_speed_prediction.png" width="240px"/>

<hr/>

### reset pid error

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/reset_PID_error.png" width="240px"/>

#### Description

Resets the sum of the gyro error and integral error that accumulated over. Reset the PID error after using ```forward_step()``` to drive more accurately. This does not reset the P, I, and D values of the Zumi PID control. To set those parameters use ```set_PID()```.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/reset_PID_error.png" width="240px"/>

<hr/>

### speed calibration

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/speed_calibration.png" width="240px"/>

#### Description

This function is designed to be used with the calibration sheet (Click [here](https://learn.robolink.com/wp-content/uploads/2021/06/calibration.pdf) for a PDF version). Zumi will drive over 5 horizontal white lines that are 2 centimeters wide. The slope and y_intercept will be generated for the best fit line of the speed prediction. These values will be saved to the Zumi as a text file.

Run this block to calibrate for ```move_to_coordinate()```.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/speed_calibration.png" width="240px"/>

<hr/>

### drive over markers

#### Block

<img src="/img/Zumi/blockly_docu/senior/driving/drive_over_markers.png" width="240px"/>

#### Description

This function was designed for the [Zumitown Mat](https://www.robolink.com/products/zumitown-mat). Zumi will drive over the specified number of alternating black and white horizontal lines at least 2 centimeters wide. Zumi will stop when the number of markers have been crossed or if the timeout ends, whichever is first. (Avoid making the speed very high, zumi will most likely overshoot since it has a lot of speed)

#### Parameters

**markers**: An integer number of road markers to drive over<br />
**speed**: Positive integer value between 0 and 80<br />
**IR_threshold**: An integer IR threshold value 0-255 for the bottom left IR sensors to detect black or white.<br />
**time_out**: A float value for the timeout in seconds<br />

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/senior/driving/drive_over_markers.png" width="240px"/>