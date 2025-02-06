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

version 2.2.5 ([Changelog](/docs/CoDroneEDU/Blockly/Blockly-Changelog))

</div>

## Flight Commands

### takeoff()

#### Block

<img src="/img/CDE/blockly_docu/senior/take_off.png" width="90px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">takeoff()</span>

#### Description

This functions makes the drone take off. CoDrone EDU takes off at an average height of 80 centimeters off the ground. A takeoff block must be used before any other flight command or flight movement. **NOTE:** The takeoff height cannot be modified.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('takeoff_land_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/takeoff_land_example.png" width="90x"/>  

<hr/>

### land()

#### Block

<img src="/img/CDE/blockly_docu/senior/land.png" width="70px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">land()</span>

#### Description
This function makes the drone land by throttling down safely.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('takeoff_land_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/takeoff_land_example.png" width="90px"/>  

<hr/>

### emergency_stop()

#### Block

<img src="/img/CDE/blockly_docu/senior/emergencystop.png" width="160px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">emergency_stop()</span>

#### Description
Stops all commands to motors. The drone will stop flying immediately.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('emergency_stop_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/emergency_stop_example.png" width="150px"/>  

<hr/>

### hover()

#### Block

<img src="/img/CDE/blockly_docu/senior/hover.png" width="150px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">hover()</span>

#### Description
This function makes the drone hover in place for a duration in seconds.

#### Parameters
***integer* duration:** the duration of the hover in seconds

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('hover_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/hover_example.png" width="180px"/>  

<hr/>

### move()

#### Block

<img src="/img/CDE/blockly_docu/senior/move.png" width="460px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">move()</span>

#### Description
Moves the drone for a certain amount of time (in seconds) in a given direction determined by the flight parameters.

#### Parameters
***integer* roll:** roll power percentage as an integer between -100 and +100   
***integer* pitch:** pitch power percentage as an integer between -100 and +100   
***integer* yaw:** yaw power percentage as an integer between -100 and +100   
***integer* throttle:** throttle power percentage as an integer between -100 and +100   
***integer* duration:** duration of the hover, in seconds

#### Returns
None

#### Example

In this example, the drone will move for 2 seconds with the roll and pitch set to 30%. Then, the drone will move for another 2 seconds with the roll and pitch set to -30%.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('move-example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/move-example1.png" width="480px"/>
<br/>
<br/>
In the example below, the drone will move for 3 seconds with the yaw and throttle set to 50% and 25%. Then, the drone will move for another 3 seconds with the yaw and throttle set to -50% and -25%.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('move-example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/move-example2.png" width="480px"/> 

<hr/>

### flip()

#### Block

<img src="/img/CDE/blockly_docu/senior/flip.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">flip()</span>

#### Description
This functions makes the drone flip back, front, right, or left. Make sure your battery percentage is over 50% for the flip to execute.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/flip_params.png" width="180px"/>  

**direction:** back, front, right, left

#### Returns
None

#### Example

Add a hover or delay block after the flip if you need to stabilize before your next command. The drone takes 3-4 seconds after a flip before it can do another flight command. Not adding a delay after a flip can cause following blocks to not be performed.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('flip_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/flip_example.png" width="500px"/>
<br/>
<br/>

In this example below, after take off, the drone should flip forward and backward **(flips might not be executed since a flip needs a wait/sleep block)**. 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('flip_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/flip_example2.png" width="180px"/>  

<hr/>

### turn_degree()

#### Block

<img src="/img/CDE/blockly_docu/senior/turn_degree.png" width="200px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">turn_degree()</span>

#### Description
Turns right or left with absolute reference frame to drone's initial heading. Input positive degrees to turn left and negative degrees to turn right. When the drone pairs to the controller after powering on, the current heading will be set as 0 degrees.

#### Parameters
***integer* degrees:** angle of the turn between -180 and +180

<img src="/img/CDE/blockly_docu/senior/CDE_heading.jpg" width="300px"/>  

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('turn_degree_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/turn_degree_example.png" width="240px"/>  

<hr/>

### turn_left() / turn_right()

#### Block

<img src="/img/CDE/blockly_docu/senior/turn_direction_degree.PNG" width="210px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">turn_left()</span>    
<br/>
<span className="light_gray">drone.</span><span className="dark_gray">turn_right()</span>

#### Description
Turns right or left relative to the drone's current heading.

#### Parameters
***integer* degrees:** angle of the turn between 0 and 180

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('turn_direction_degree_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/turn_direction_degree_example.PNG" width="240px"/>  

<hr/>

### avoid_wall()

#### Block

<img src="/img/CDE/blockly_docu/senior/avoid_wall.png" width="260px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">avoid_wall()</span>

#### Description
CoDrone EDU will fly forward and stop when an obstacle is detected a given distance away (in centimeters). The block will run until the timeout (in seconds) is finished or the obstacle is found, whichever comes first. The default timeout is 10 seconds for an obstacle detected 20cm away.

#### Parameters
***integer* timeout:** the timeout duration in seconds   
***integer* distance:** the distance, in centimeters, at which the CoDrone EDU will stop to avoid obstacle

#### Returns
None

#### Example
Place the drone on the floor a few feet away from a wall. When you run the code, the drone will fly forward until the wall is detected 20 centimeters away. The next block will immediately execute. In this case, the drone will land.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('avoid_wall_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/avoid_wall_example.png" width="280px"/>  

<hr className="section_hr"/>

## Flight Variables

### set_roll()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_roll.png" width="140px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_roll()</span>

#### Description
This function sets the roll direction variable but will not send a move command. Negative values will move the drone to the left and positive values will move the drone to the right.

#### Parameters
***integer* power:** the power/speed of the drone between -100 and 100

#### Returns
None

#### Example

In this example, after taking off, the drone sets its roll variable at 20% for rightward movement and then sets its roll variable at -20% for leftward movement. This will not make the drone move yet.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_roll_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_roll_example2.png" width="180px"/>
<br/>
<br/>
In this example, after taking off, the drone sets its roll variable at 30% for rightward movement and moves for 2 seconds. And then the drone sets its roll variable at -30% for leftward movement and moves for 2 seconds.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_roll_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_roll_example1.png" width="180px"/>  

<hr/>

### set_pitch()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_pitch.png" width="160px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_pitch()</span>

#### Description
This function sets the pitch direction variable but will not send a move command. Negative values will move the drone backward and positive values will move the drone forward.

#### Parameters
***integer* power:** the power/speed of the drone between -100 and 100

#### Returns
None

#### Example

In this example, after taking off, the drone sets its pitch variable at 20% for forward movement and then sets its pitch variable at -20% for backward movement. This will not make the drone move yet.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_pitch_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_pitch_example2.png" width="180px"/>
<br/>
<br/>
In this example, after taking off, the drone sets its pitch variable at 30% for forward movement and moves for 2 seconds. And then the drone sets its pitch variable at -30% for backward movement and moves for 2 seconds.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_pitch_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_pitch_example1.png" width="180px"/> 

<hr/>

### set_yaw()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_yaw.png" width="140px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_yaw()</span>

#### Description
This function sets the yaw direction variable but will not send a move command. Negative values will turn the drone to the right and positive values will turn the drone to the left.

#### Parameters
***integer* power:** the power/speed of the drone between -100 and 100

#### Returns
None

#### Example

In this example, after taking off, the drone sets its yaw variable at 20% for left turns and then sets its yaw variable at -20% for right turns. This will not make the drone move yet.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_yaw_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_yaw_example2.png" width="180px"/>
<br/>
<br/>
In this example, after taking off, the drone sets its yaw variable at 30% for left turns and moves for 2 seconds. And then the drone sets its yaw variable at -30% for right turns and moves for 2 seconds. 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_yaw_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_yaw_example1.png" width="180px"/>  

<hr/>

### set_throttle()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_throttle.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_throttle()</span>

#### Description
This function sets the throttle direction variable but will not send a move command. Negative values will move the drone downward and positive values will move the drone upward.

#### Parameters
***integer* power:** the power/speed of the drone between -100 and 100

#### Returns
None

#### Example

In this example, after taking off, the drone sets its throttle variable at 20% for upward movement and then sets its throttle variable at -20% for downward movement. This will not make the drone move yet.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_throttle_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_throttle_example2.png" width="180px"/>
<br/>
<br/>
In this example, after taking off, the drone sets its throttle variable at 30% for upward movement and moves for 2 seconds. And then the drone sets its throttle variable at -30% for downward movement and moves for 2 seconds.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_throttle_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_throttle_example1.png" width="180px"/>    

<hr/>

### move()

#### Block

<img src="/img/CDE/blockly_docu/senior/move_no_params.png" width="80px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">move()</span>

#### Description
Moves CoDrone EDU in the direction set by the flight variables with the smallest duration possible (about 0.01 seconds). Since it has no specified duration, it is often used inside of a loop to check sensors simultaneously.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('move_no_params_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/move_no_params_example.png" width="160px"/>  

<hr/>

### move([duration])

#### Block

<img src="/img/CDE/blockly_docu/senior/move_with_params.png" width="160px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">move()</span>

#### Description
Moves CoDrone EDU for a duration in seconds in the direction set by the flight variables.

#### Parameters
***integer* duration:** the duration of the movement in seconds

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('move_with_params_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/move_with_params_example.png" width="200px"/>  

<hr/>

### set_trim()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_trim.png" width="240px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_trim()</span>

#### Description
Sets the trim values to adjust for any drifting while CoDrone EDU is flying. Set the trim values in the opposite direction of drift. For example, if the drone is drifting to the right, set roll to a negative value.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/set_trim_params.png" width="280px"/>  

***integer* roll:** the trim value to adjust for roll drifting, between -100 and 100    
***integer* pitch:** the trim value to adjust for pitch drifting, between -100 and 100

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_trim_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_trim_example.png" width="280px"/>  

<hr/>

### get_trim()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_trim.png" width="120px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_trim()</span>

#### Description
Returns the current trim values. Combine with a print statement to see the results printed to the console.

#### Parameters
None

#### Returns
***integer* roll:** the trim value for the roll movement, between -100 and 100    
***integer* pitch:** the trim value for the pitch movement, between -100 and 100

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_trim_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_trim_example.png" width="280px"/>  

<hr/>

### reset_trim()

#### Block

<img src="/img/CDE/blockly_docu/senior/reset_trim.png" width="120px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">reset_trim()</span>

#### Description
Resets the trim values to (0,0).

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('reset_trim_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/reset_trim_example.png" width="280px"/>  

<hr className="section_hr"/>

## Lights

### set_drone_LED()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_drone_led.png" width="450px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_drone_LED()</span>

#### Description
Sets the color of CoDrone EDU's LED. Colors are set by using its RGB (red, green, blue) equivalent values.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/set_drone_led_params.png" width="500px"/> 

***integer* red:** pixel value for the color red between 0 and 255   
***integer* green:** pixel value for the color green between 0 and 255   
***integer* blue:** pixel value for the color blue between 0 and 255    
***integer* brightness:** brightness of the drone LED between 0 and 255    

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_drone_led_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_drone_led_example.png" width="500px"/>  

<hr/>

### drone_LED_off()

#### Block

<img src="/img/CDE/blockly_docu/senior/drone_led_off.png" width="150px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">drone_LED_off()</span>

#### Description
Turns off CoDrone EDU's LED.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('drone_led_off_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/drone_led_off_example.png" width="480px"/>  

<hr/>

### set_controller_LED()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_controller_led.png" width="450px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_controller_LED()</span>

#### Description
Sets the color of CoDrone EDU's controller LED. Colors are set by using its RGB (red, green, blue) equivalent values.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/set_controller_led_params.png" width="500px"/> 

***integer* red:** pixel value for the color red between 0 and 255   
***integer* green:** pixel value for the color green between 0 and 255   
***integer* blue:** pixel value for the color blue between 0 and 255    
***integer* brightness:** brightness of the controller LED between 0 and 255      

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_controller_led_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/set_controller_led_example.png" width="500px"/>  

<hr/>

### controller_LED_off()

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_led_off.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_LED_off()</span>

#### Description
Turns off the CoDrone EDU's controller LED.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_led_off_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_led_off_example.png" width="480px"/>  

<hr className="section_hr"/>

## Sensors

### get_range()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_range.png" width="250px"/>  

#### Code

*front*: <span className="light_gray">drone.</span><span className="dark_gray">get_front_range()</span><br/>
*bottom*: <span className="light_gray">drone.</span><span className="dark_gray">get_bottom_range()</span>

#### Description
Returns the calculated distance from either the front or bottom infrared (IR) range sensor to the surface. The sensor range is up to 1.5m.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_range_params1.png" width="250px"/>

<br/>

<img src="/img/CDE/blockly_docu/senior/get_range_params2.png" width="250px"/>

**type:** front, bottom   
**unit:** cm, mm, in, m

#### Returns
***float* distance:** float value in the units selected

#### Example

In this example, after takeoff, the drone has its throttle set at 20% power, moving upward. Before entering the loop, it checks if the drone has already reached the maximum bottom range (set as 100), measured in centimeters. If not, it will continuously fly upward until the current bottom range is more than the max bottom range.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_range_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_range_example1.png" width="450px"/>
<br/>
<br/>
In this example below, run the program, manually point the drone to a wall, and then move it aroun until the drone is less than 70 cm away from a wall. Click the Stop button if you want to stop running the program.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_range_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_range_example2.png" width="450px"/>  

<hr/>

### get_angle()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_angle.png" width="180px"/>  

#### Code

*x*: <span className="light_gray">drone.</span><span className="dark_gray">get_angle_x()</span><br/>
*y*: <span className="light_gray">drone.</span><span className="dark_gray">get_angle_y()</span><br/>
*z*: <span className="light_gray">drone.</span><span className="dark_gray">get_angle_z()</span>

#### Description
This function returns the current gyroscope angle measurement for either the x (roll),y (pitch), or z (yaw) axis.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_angle_params.png" width="200px"/>  

**axis:** x, y, z

<img src="/img/CDE/blockly_docu/senior/xyz.jpg" width="350px"/>  

#### Returns
***integer* angle:** gyroscope angle measurement for the given axis, in degrees

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_angle_ex_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_angle_ex.png" width="420px"/>  

<hr/>

### get_angular_speed()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_angular_speed.png" width="240px"/>  

#### Code

*x*: <span className="light_gray">drone.</span><span className="dark_gray">get_angular_speed_x()</span><br/>
*y*: <span className="light_gray">drone.</span><span className="dark_gray">get_angular_speed_y()</span><br/>
*z*: <span className="light_gray">drone.</span><span className="dark_gray">get_angular_speed_z()</span>

#### Description
This function returns the current angular velocity in degrees per second for either the x (roll),y (pitch), or z (yaw) axis.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_angular_speed_params.png" width="280px"/>  

**type:** x, y, z

<img src="/img/CDE/blockly_docu/senior/xyz.jpg" width="350px"/> 

#### Returns
***integer* angular velocity:** the angular velocity of the drone, in degrees per second

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_angular_speed_ex_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_angular_speed_ex.png" width="480px"/>  

<hr/>

### get_accel()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_accel.png" width="190px"/>  

#### Code

*x*: <span className="light_gray">drone.</span><span className="dark_gray">get_accel_x()</span><br/>
*y*: <span className="light_gray">drone.</span><span className="dark_gray">get_accel_y()</span><br/>
*z*: <span className="light_gray">drone.</span><span className="dark_gray">get_accel_z()</span>

#### Description
This function returns the current acceleration on either the x, y, or z axis in units of $m/s^2*10$.    
**Note:** *1g* = $9.8m/s^2$

<img src="/img/CDE/blockly_docu/senior/xyz.jpg" width="350px"/> 

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_accel_params.png" width="210px"/> 

**type:** x, y, z

#### Returns
***integer* acceleration:** positive or negative acceleration of the drone, in $m/s^2*10$

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_accel_ex_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_accel_ex.png" width="400px"/> 

<hr/>

### get_pos()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_pos.png" width="230px"/>  

#### Code

*x*: <span className="light_gray">drone.</span><span className="dark_gray">get_pos_x()</span><br/>
*y*: <span className="light_gray">drone.</span><span className="dark_gray">get_pos_y()</span><br/>
*z*: <span className="light_gray">drone.</span><span className="dark_gray">get_pos_z()</span>

#### Description
Returns the current estimated position of the CoDrone EDU using the optical flow sensor.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_pos_params1.png" width="230px"/>  

<br/>

<img src="/img/CDE/blockly_docu/senior/get_pos_params2.png" width="250px"/>  

**axis:** x, y, z   
**unit:** mm, cm, in, m

<img src="/img/CDE/blockly_docu/senior/topdown_xy.png" width="350px"/> 

<br/>

<img src="/img/CDE/blockly_docu/senior/xyz.jpg" width="350px"/> 

#### Returns
***float* position:** x,y, or z value in units selected

#### Example

In this example, after takeoff, the console prints the x-y-z coordinates of the drone's position, in centimeters. Then, prints the x-y-z coordinates again after moving for 2 seconds.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_pos_ex1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_pos_ex1.png" width="450px"/>
<br/>
<br/>
In this example, after takeoff, the console prints the x-y-z coordinates of the drone's position, in inches. Prints x-coordinate of the drone after moving right. Prints y-coordinate of the drone after moving forward. Prints z-coordinate of the drone after flying higher.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_pos_ex2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_pos_ex2.png" width="450px"/>  

<hr/>

### get_battery()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_battery.png" width="120px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_battery()</span>

#### Description
This function returns the current battery percentage of the drone battery.

#### Parameters
None

#### Returns
***integer* battery percentage:** the battery percentage from 0 to 100

#### Example
In this example, the program will check the drone's battery before takeoff and after landing.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_battery_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_battery_example1.png" width="160px"/>
<br/>
<br/>
In the example below, the program will check the drone's battery before takeoff and after the front flip. The difference of battery percentage will be larger in this example than the previous one.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_battery_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_battery_example2.png" width="160px"/> 

<hr/>

### get_height()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_height.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_height()</span>

#### Description
Returns the calculated distance from the bottom infrared (IR) range sensor to the surface. The sensor range is up to 1.5m. This is another name for the get_range("bottom") function.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_height_params.png" width="200px"/>  

**units:** cm, in, mm, m

#### Returns
***float* height:** float height value in the units selected

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_height_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_height_example.png" width="450px"/>  

<hr/>

### get_pressure()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_pressure.png" width="200px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_pressure()</span>

#### Description
This function returns barometer data in either pascals or millibars.    
**Note:** 1 mbar = 100 Pa

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_pressure_params.png" width="220px"/>  

**unit:** pascal or millibar

#### Returns
***float* pressure:** float value in either Pa or mbar

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_pressure_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_pressure_example.png" width="280px"/>  

<hr/>

### get_drone_temperature()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_drone_temperature.png" width="300px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_drone_temperature()</span>

#### Description
This block returns the current temperature of the drone in either Celsius or Fahrenheit.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_drone_temperature_params.png" width="300px"/>  

**unit:** Fahrenheit, Celsius, Kelvin

#### Returns
***float* temperature:** float value in degrees

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_drone_temperature_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_drone_temperature_example.png" width="380px"/>  

<hr/>

### get_elevation()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_elevation.png" width="220px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_elevation()</span>

#### Description
Returns the estimated elevation data from the CoDrone EDU's barometer.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_elevation_parameters.png" width="250px"/>  

**unit:** m (meter), km (kilometer), ft (feet), mi (miles).

#### Returns
***float* elevation:** float elevation value in units selected

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_elevation_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_elevation_example.png" width="260px"/>  

<hr/>

### get_color()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_color.png" width="210px"/>  

#### Code

*front*: <span className="light_gray">drone.</span><span className="dark_gray">get_front_color()</span><br/>
*back*: <span className="light_gray">drone.</span><span className="dark_gray">get_back_color()</span>

#### Description
This functions reads the color data from either of the two bottom color sensors and returns one of the 8 pre-calibrated colors (provided in the color cards). The drone must be flat on a surface (not flying) for the color sensor to activate.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_color_params.png" width="230px"/>

**type:** front, back

#### Returns
**color:** detected color as a string (Red, Green, Yellow, Blue, Cyan, Magenta, Black, White, Unknown)

#### Example

In this example, if the drone's front color detector detects the color green, the drone's LED will light up green; otherwise, the drone's LED will turn off.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_color_data_ex1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_color_data_ex1.png" width="500px"/>
<br/>
<br/>
In the example below, place the drone under two different colored surfaces, so that the back and front sensor detector aren't detecting the same surface. The program will output different colors for the back and front sensor.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_color_data_ex2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_color_data_ex2.png" width="500px"/>  

<hr/>

### get_hsvl()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_hsvl.png" width="250px"/>  

#### Code

(*front, hue*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[1]</span><br/>
(*front, saturation*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[2]</span><br/>
(*front, value*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[3]</span><br/>
(*front, lightness*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[4]</span><br/>
(*back, hue*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[5]</span><br/>
(*back, saturation*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[6]</span><br/>
(*back, value*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[7]</span><br/>
(*back, lightness*): <span className="light_gray">drone.</span><span className="dark_gray">get_color_data()[8]</span><br/>

#### Description
Returns the HSVL (hue, saturation, value, lightness) data from either of the CoDrone EDU's bottom color sensors. The drone must be flat on a surface (not flying) for the color sensor to activate.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_hsvl_params1.png" width="250px"/>  

<br/>

<img src="/img/CDE/blockly_docu/senior/get_hsvl_params2.png" width="270x"/>  

**type:** front, back   
**unit:** hue, saturation, value, lightness

#### Returns
hsvl value from sensor

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_hsvl_ex_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_hsvl_ex.png" width="500px"/>  

<hr/>

### get_state_data()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_state_data.png" width="280x"/>  

#### Code

*modeFlight*: <span className="light_gray">drone.</span><span className="dark_gray">get_flight_state()</span> <br/>
*modeMovement*: <span className="light_gray">drone.</span><span className="dark_gray">get_movement_state()</span>

#### Description
Returns the current state of the CoDrone EDU.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_state_data_params.png" width="280px"/>  

**unit:** modeFlight, modeMovement

#### Returns
**state:** name of flight/movement state

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_state_data_ex_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/get_state_data_ex.png" width="320px"/>  

<hr/>

### reset_gyro()

#### Block

<img src="/img/CDE/blockly_docu/senior/reset_gyro.png" width="160px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">reset_gyro()</span>

#### Description
Resets the gyroscope angles to 0. Make sure the drone is on a flat surface when running this block.

#### Parameters
None

#### Returns
None

#### Example
To use this example file turn the drone manually with your hand and watch the Z angle change. Then, place the drone on a flat surface before the reset. You will see that the Z angle is reset to 0.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('reset_gyro_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/reset_gyro_example.png" width="280px"/>  

<hr className="section_hr"/>


## Sounds

### drone_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/drone_buzzer.PNG" width="500px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">drone_buzzer()</span>

#### Description
Plays a note for a duration in milliseconds using the CoDrone EDU drone buzzer.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/drone_buzzer_params.PNG" width="500px"/>  

**note:** note range from C3 to B7, Mute, Fin   
***integer* duration:** the duration of note played in milliseconds

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('drone_buzzer_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/drone_buzzer_example.PNG" width="500px"/>

<hr/>

### controller_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_buzzer.PNG" width="500px"/>   

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_buzzer()</span>

#### Description
Plays a note for a duration in milliseconds using the CoDrone EDU controller buzzer.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_buzzer_params.PNG" width="500px"/> 

**note:** note range from C3 to B7, Mute, Fin   
***integer* duration:** the duration of note played in milliseconds

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_buzzer_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_buzzer_example.PNG" width="500px"/>  

<hr/>

### drone_buzzer_hertz()

#### Block

<img src="/img/CDE/blockly_docu/senior/drone_buzzer_hertz.PNG" width="500px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">drone_buzzer()</span>

#### Description
Plays a sound frequency for a duration in milliseconds using the CoDrone EDU drone buzzer.

#### Parameters
***integer* hertz:** the frequency of the buzzer, in Hertz    
***integer* duration:** the duration of the buzzer played, in milliseconds

#### Returns
None

#### Example

In this example, the drone will be buzzing a different frequency for half a second each.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('drone_hertz_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/drone_hertz_example.png" width="500px"/>
<br/>
<br/>

In the example below, a list variable ``test_list`` is created ``[450,500,650,800,700]``. The loop iterates through the list using the "length of" block as the stop parameter of the loop block. The ``frequency`` variable is set a value from ``test_list`` at position "i" (the loop's index variable). Depending on which conditional statement ``frequency`` satisfies, the drone will buzz a specific frequency.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('drone_hertz_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/drone_hertz_example2.png" width="600px"/>


<hr/>

### controller_buzzer_hertz()

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_buzzer_hertz.PNG" width="500px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_buzzer()</span>

#### Description
Plays a sound frequency for a duration in milliseconds using the CoDrone EDU controller buzzer.

#### Parameters
***integer* hertz:** the frequency of the buzzer, in Hertz    
***integer* duration:** the duration of the buzzer played, in milliseconds

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_hertz_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>


<img src="/img/CDE/blockly_docu/senior/controller_hertz_example.png" width="500px"/>

<hr/>

### start_drone_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/start_drone_buzzer.png" width="300px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">start_drone_buzzer()</span>

#### Description
Plays a note on the CoDrone until it is programmed to be stopped with ``stop_drone_buzzer()``.

#### Parameters
<img src="/img/CDE/blockly_docu/senior/start_drone_buzzer_params.png" width="300px"/>

**Note:** note played on the drone

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('start_stop_drone_buzzer_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/start_stop_drone_buzzer_example.png" width="300px"/> 

<hr/>

### stop_drone_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/stop_drone_buzzer.png" width="200px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">stop_drone_buzzer()</span>

#### Description
Stops note played from the drone.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('start_stop_drone_buzzer_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/start_stop_drone_buzzer_example.png" width="300px"/>

<hr/>

### start_controller_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/start_controller_buzzer.png" width="350px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">start_controller_buzzer()</span>

#### Description
Plays a note on the controller until it is programmed to be stopped with ``stop_controller_buzzer()``.

#### Parameters
<img src="/img/CDE/blockly_docu/senior/start_controller_buzzer_params.png" width="350px"/>

**Note:** note played on the controller

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('start_stop_controller_buzzer_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/start_stop_controller_buzzer_example.png" width="350px"/> 

<hr/>

### stop_controller_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/stop_controller_buzzer.png" width="250px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">stop_controller_buzzer()</span>

#### Description
Stops note played from the controller.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('start_stop_controller_buzzer_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/start_stop_controller_buzzer_example.png" width="350px"/>

<hr className="section_hr"/>

## Colors

### load_color_data()

#### Block

<img src="/img/CDE/blockly_docu/senior/load_color_data.png" width="300px"/>

#### Code
<span className="light_gray">drone.</span><span className="dark_gray">load_color_data()</span>

#### Description

Loads color data onto CoDrone EDU. The string inside the parameter is the name of your color set (name is made by the user when creating the color set). ``predict_colors()`` block uses this color set to predict colors. To learn how to create a color set, visit our lesson on <a href="https://learn.robolink.com/lesson/3-8-color-sensor-cde-blockly/" target="_blank">Color Sensors</a>.

#### Parameters

None

#### Returns

None

#### Example

To make this example work, your color set must be loaded into your Blockly workspace and code using the "load_color_data" block. The "predict_color" block will make a prediction of the color detected and return that color based on the color set that was loaded. Place the drone on different colored surfaces (red, yellow, or blue) to make the drone play a different note.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('colors_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/colors_example.png" width="550px"/>

<hr/>

### predict_color()

#### Block

<img src="/img/CDE/blockly_docu/senior/predict_color.png" width="250px"/>

#### Code
*front*: <span className="light_gray">drone.</span><span className="dark_gray">predict_colors(drone.get_color_data())[0]</span><br/><br/>
*back*: <span className="light_gray">drone.</span><span className="dark_gray">predict_colors(drone.get_color_data())[1]</span><br/>

#### Description

Predicts what color the color sensors are currently seeing (front or back).

#### Parameters

**sensor:** the front or back sensor

#### Returns

***string* predicted color:** The color that's predicted based off of what the front or back sensor detects.

#### Example
To make this example work, your color set must be loaded into your Blockly workspace and code using the "load_color_data" block. The "predict_color" block will make a prediction of the color detected and return that color based on the color set that was loaded. Place the drone on different colored surfaces (red, yellow, or blue) to make the drone play a different note.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('colors_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/colors_example.png" width="550px"/>

<hr className="section_hr"/>

## Screen

### controller_create_canvas()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_create_canvas.png" width="300px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_create_canvas()</span>

#### Description
Creates a canvas for drawing on the controller. This block is required for the other "controller_draw" blocks to work and must be placed before the other "controller_draw" blocks.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_create_canvas_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_create_canvas_example.png" width="600px"/>

<hr/>

### controller_draw_canvas()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_draw_canvas.png" width="300px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_draw_canvas()</span>

#### Description
Draws custom canvas onto the controller screen. This block is placed after placing the desired "controller_draw" blocks for the canvas (created by "controller_create_canvas").

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_draw_canvas_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_draw_canvas_example.png" width="450px"/>

<hr/>

### controller_draw_line()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_draw_line.png" width="450px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_draw_line()</span>

#### Description

```python
(x1,y1) \
         \
          \
           \ (x2,y2)
```
Draws a line between points (x1, y1) and (x2, y2) on canvas created by controller_create_canvas().

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_line_params.png" width="450px"/>

***integer* x1:** point 1 x coordinate    
***integer* y1:** point 1 y coordinate    
***integer* x2:** point 2 x coordinate    
***integer* y2:** point 2 y coordinate    

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_draw_line_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_draw_line_example.png" width="450px"/>

<hr/>

### controller_draw_string()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_draw_string.png" width="450px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_draw_string()</span>

#### Description
Draws a string from the given x_start, x_end and y positions on canvas created by controller_create_canvas(). The string can be aligned along the x_start and x_end positions

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_string_params.png" width="450px"/>

***integer* xStart:** starting x position   
***integer* yStart:** starting y position   
**text:** any string input

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_draw_string_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_draw_string_example.png" width="450px"/>

<hr/>

### controller_draw_rectangle()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_draw_rectangle.png" width="550px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_draw_rectangle()</span>

#### Description

```python
 width
(x,y)|---------------|
     |               | height
     |_______________|
```

Draws a rectangle on canvas created by controller_create_canvas(), starting from point (x,y) and extends to given height and width

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_rectangle_params.png" width="550px"/>

***integer* xStart:** top left corner x coordinate    
***integer* yStart:** top left corner y coordinate    
***integer* width:** width of rectangle   
***integer* height:** height of rectangle   
***boolean* flagFill:** optional parameter to fill in the rectangle or not. default value is False    

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_draw_rectangle_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_draw_rectangle_example.png" width="550px"/>

<hr/>

### controller_draw_square()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_draw_square.png" width="500px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_draw_square()</span>

#### Description
```python
width
(x,y)|------|
     |      | width
     |______|
```
Draws a square on canvas created by controller_create_canvas(), starting from point (x,y) and will extend to the given width

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_square_params.png" width="500px"/>

***integer* xStart:** top left corner x coordinate    
***integer* yStart:** top left corner y coordinate    
***integer* width:** width of square    
***boolean* flagFill:** optional parameter to fill in the square or not. default value is False   

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_draw_square_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_draw_square_example.png" width="500px"/>

<hr/>

### controller_draw_point()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_draw_point.png" width="350px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_draw_point()</span>

#### Description
Draws a point on canvas created by controller_create_canvas(), at point (x, y).

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_point_params.png" width="350px"/>

***integer* x:** x coordinate   
***integer* y:** y coordinate

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_draw_point_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_draw_point_example.png" width="350px"/>

<hr/>

### controller_clear_screen()

:::warning

This function is currently unavailable for CoDrone EDU (JROTC ed.).

:::

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_clear_screen.png" width="220px"/>

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_clear_screen()</span>

#### Description
Clears the CoDrone EDU controller screen.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_clear_screen_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/senior/controller_clear_screen_example.png" width="600px"/>

<hr className="section_hr"/>

## Lists

### create empty list

#### Block

<img src="/img/CDE/blockly_docu/junior/create_empty_list.png" width="180px"/> 

#### Description

Creates an empty list (a list with no items).

#### Parameters

None

#### Returns

***list*:** An empty list ``[]``

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_empty_list_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_empty_list_example.png" width="360px"/> 

<hr/>

### create list with

#### Block

<img src="/img/CDE/blockly_docu/junior/create_list_with.png" width="200px"/> 

#### Description

Creates a list based on given values attached to the "create list with" block. The list could contain values with different data types: strings, integers, floats.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/create_list_with_params.png" width="260px"/>
Clicking on the gear icon will give you the option to manually add or reduce the number of items.

#### Returns

***list*:** A list with values attached onto the "create list with" block

#### Example
In this example, a list variable was created with a value of the same data type. The ``test_list`` variable is assigned the value of ``[2.5,3.5,1]``

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_list_with_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_list_with_example1.png" width="420px"/><br/>

In this example, a list variable was created with a value of different data types. The ``test_list`` variable is assigned the value of ``[2,True,"Hello"]``

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_list_with_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_list_with_example2.png" width="490px"/> 

<hr/>

### create list with item [item] repeated [number] times

#### Block

<img src="/img/CDE/blockly_docu/junior/create_list_repeated.png" width="410px"/> 

#### Description

Creates a list with a given value repeated a given number of times by the user. The both parameters could contain an operation like "1+1", as long as it returns a value&mdash;integer or float. The first parameter can be a string value as well.

#### Parameters

***integer/float/string***&nbsp;&nbsp;**value repeated:** value that will be repeated in the list<br/>
***integer*&nbsp;&nbsp;repeats:** the number of times the given value will be in the list. 

#### Returns

***list*:** A list containing the given value repeated a given number of times.

#### Example

In this example, instead of simply putting a number block, the first parameter contains an operation block that will return a number, which is 2. The second parameter contains a number block of 3. Printing test_list will result in ``[2,2,2]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_list_repeated_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_list_repeated_example.png" width="800px"/> 

<hr/>

### length of

#### Block

<img src="/img/CDE/blockly_docu/junior/length.png" width="120px"/> 

#### Description

Returns the length of the list, which is the number of items that are inside the list.

#### Parameters

None

#### Returns

***int* length:** The length (number of items in the list) of the list.

#### Example

After creating the list ``[1,2,3]`` and assigning it to the variable ``test_list``, the console will print the length of ``test_list``, which is ``3`` (three items in the list). 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('length_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/length_example.png" width="400px"/> 

<hr/>

### [list] is empty

#### Block

<img src="/img/CDE/blockly_docu/junior/is_empty.png" width="140px"/> 

#### Description

Returns a boolean value indicating if the list is empty or not (if the list has no items or not).

#### Parameters

***list* list variable:** a variable that's a list

#### Returns

***boolean*&nbsp;&nbsp;is empty:** ``True`` if there are items in the list. Otherwise, returns ``False`` 

#### Example
In this example, ``test_list`` block is attached to the "create empty list" block. The console prints ``test_list``, which is ``[]``. Then, the console prints the length of ``test_list``, which is 0. Finally, the console prints whether or not ``test_list`` is empty, which is ``True``. These 3 printing statements are ways to verify if the list is indeed empty or not. "is empty" is useful when applying if-statements to it.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('is_empty_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/is_empty_example1.png" width="340px"/><br/>

In this example, the console prints whether or not ``test_list`` is empty, which is ``False``. ``test_list`` indeed is not empty since there are items in it.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('is_empty_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/is_empty_example2.png" width="400px"/> 

<hr/>

### in list [list] find [occurrence] occurrence of item [item] 

#### Block

<img src="/img/CDE/blockly_docu/junior/find_occurrence.png" width="440px"/> 

#### Description

Retuns the index (position) of the first/last occurrence of the given item in the given list variable.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/find_occurrence_params.png" width="440px"/>

***list* list variable:** a variable that is a list<br/>
**occurrence:** the first or last occurrence of the item<br/>
***integer/float/string***&nbsp;&nbsp;**item:** value of the item

#### Returns

***integer* index:** The position of the item in the list

#### Example

In this example, the ``test_list`` variable is assigned the value of ``[1,2,3]``. The console prints ``2`` as the first occurrence of the item "2" in ``test_list`` since it is the second item in ``test_list``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('find_occurrence_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/find_occurrence_example.png" width="580px"/>

<hr/>

### in list [list] get/remove [occurrence]

#### Block

<img src="/img/CDE/blockly_docu/junior/get_remove.png" width="290px"/> 

#### Description

If choosing the "get" option, it returns the value of the item in a given position of the list. If choosing the "remove" option, it removes the item in a given position of the list. If choosing the "get and remove" option, it returns the value of the item and removes the item in a given position of the list.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/get_remove_params1.png" width="290px"/><br/>
<img src="/img/CDE/blockly_docu/junior/get_remove_params2.png" width="300px"/>

***list*&nbsp;&nbsp;list variable:** A variable that is a list<br/>
**command:** option to whether to get, get and remove, or remove an item from the list<br/>
**position:** The position of the item. **(Some options require an integer input like the "#" and "# from end").**

#### Returns

***integer/float/string*&nbsp;&nbsp;item:** If choosing "get" or "get and remove", the value of the item is returned. If choosing "remove", returns ``None``

#### Example
In this example, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. For the first and third print statements, ``undefined`` is printed since the position numbers are out of range (the positions don't exist) in ``test_list``. ``5`` and ``3`` are printed for the second and fourth print statements, respectively, since ``5`` is in position #2 and ``3`` is in position #4. 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_remove_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/get_remove_example1.png" width="470px"/>
<br/>
<br/>

In the example below, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. Then, in order, the items at position #4, position #3, and position #2 are removed from ``test_list``. The console prints ``test_list``, which outputs ``[100]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_remove_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/get_remove_example2.png" width="430px"/>
<br/>
<br/>

In the example below, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. Then, in order, the items at positiong #4, position #3, and position #2 are printed on the console and removed from ``test_list``. The console prints ``test_list``, which outputs ``[100]``. **NOTE:** "get and removed" option makes the block capable to be attached to a variable block as well.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_remove_example3_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/get_remove_example3.png" width="550px"/> 

<hr/>

### in list [list] set/insert [occurence] as [value]

#### Block

<img src="/img/CDE/blockly_docu/junior/set_insert.png" width="340px"/> 

#### Description

If choosing the "set" option, the block will set an existing item at a given position to a given value. If choosing the "insert at" option, the block insert/add a new item a given value into a given position in the list.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/set_insert_params1.png" width="340px"/><br/>
<img src="/img/CDE/blockly_docu/junior/set_insert_params2.png" width="340px"/>

***list*: list variable:** a variable that is a list that you'll be modifying<br/>
**command:** option to whether set an existing item to a value or insert a new item into the list.<br/>
**position:** The position of the item. **(Some options require an integer input like the "#" and "# from end").**<br/>
***integer/float/string* value:** The value that the updated or new item will be. 

#### Returns

None

#### Example

In this example, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. On the next block, the item at position #1 (``100``) be a set with a new value given by the **value** parameter. The new value is equal to the current value of the item at position #1 (represented by the "get" block inside) subtracted by 1 (``99``). Finally, printing ``test_list`` will result this output: ``[99,5,2,3]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_insert_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/set_insert_example1.png" width="880px"/>
<br/>
<br/>

In this example, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. On the next block, a new item will be inserted/at position #5 with a value given by the **value** parameter. The new item's value is equal to the value of the item at position #1 (represented by the "get" block inside) subtracted by 1 (``99``). Finally, printing ``test_list`` will result this output: ``[100,5,2,3,99]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_insert_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/set_insert_example2.png" width="880px"/>

<hr/>

### in list [list] get sub-list from [position1] to [position2] 

#### Block

<img src="/img/CDE/blockly_docu/junior/sublist.png" width="480px"/> 

#### Description

Returns a list that is sub-list of a given list from a given starting position to a given ending position. It does not modify the given list.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/sublist_params1.png" width="480px"/> 
<img src="/img/CDE/blockly_docu/junior/sublist_params2.png" width="500px"/>

***list* list variable:** a variable that is a list<br/>
**starting position:** The position on the list where the sub-list will start at. **(Some options require an integer input like the "#" and "# from end").**<br/>
**ending position:** The position on the list where the sub-list will end at. **(Some options require an integer input like the "#" and "# from end").**<br/>

#### Returns

***list* sub-list:** The sub-list from the given list

#### Example

In this example, the list variable ``test_list`` is created with a value of ``[23,2,100,5,4,3]``. The list variable ``new_list`` is created with a value of ``[23,2,100,5]``. This is because the "get sub-list" block gets a portion of ``test_list`` from position #1 (``23``) to position #4 (``5``). 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sublist_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sublist_example.png" width="800px"/> 

<hr/>

### sort numeric/alphabetic ascending/descending

#### Block

<img src="/img/CDE/blockly_docu/junior/sort.png" width="300px"/> 

#### Description

Returns sorted list based on numerical/alphaetical order and ascending/descending order. This could be attached to a "print" block or a "set variable" block.<br/><br/>
**NOTE:** alphabetical ordering, in programming, is done using the strings' letters' <a href="https://www.geeksforgeeks.org/ascii-table/" target="_blank">ASCII codes</a>. The uppercase alphabet (A-Z) has ASCII values between 65 and 90, and the lowercase alphabet (a-z) has ASCII values between 97 and 122. This means lowercase alphabet has higher ASCII values than the uppercase alphabet. 

#### Parameters

<img src="/img/CDE/blockly_docu/junior/sort_params1.png" width="300px"/><br/>
<img src="/img/CDE/blockly_docu/junior/sort_params2.png" width="300px"/>

**order type:** The way the list is sorted, by alphabetical or numerical order <br/>
**order:** ascending (A-z or smallest to biggest) or descending (z-A or biggest to smallest)

#### Returns

***list* sorted list:** a sorted list

#### Example

In this example, a list variable ``test_list`` is created with a value of ``[5,2,3]``. The console prints the output of the sorted list from ``test_list`` in ascending, numerical order ``[2,3,5]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sort_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sort_example1.png" width="500px"/>
<br/>
<br/>

In the example below, a list variable ``test_list`` is created with a value of ``["Zebra","apple","Mouse"]``. The console prints the sorted list from ``test_list`` in descending alphabetical order, which is ``["apple", "Zebra", "Mouse"]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sort_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sort_example2.png" width="500px"/>
<br/>
<br/>

In the example below, a list variable ``test_list`` is created with a value of ``["Zebra","apple","Mouse"]``. The console prints the sorted list from ``test_list`` in descending alphabetical order (ignoring case), which is ``["Zebra", "Mouse", "apple"]``. Ignoring case essentially reads the uppercase letters as lowercase letters, so a lowercase "z" has a greater ASCII value than a lowercase "m" (and lowercase "m" greater than lowercase "a").

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sort_example3_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sort_example3.png" width="600px"/>

<hr/>

### make [list from text/text from list] [text/list] with delimiter [value]

#### Block

<img src="/img/CDE/blockly_docu/junior/delimiter.png" width="400px"/> 

#### Description

If choosing the "list from text" option, the block internally splits the given text into parts based on the given delimiter and returns a list. For example, the string ``"12!23!5!"`` with a delimiter of ``"!"`` will be converted to ``[12,23,5]``. If choosing the "text from list" option, the block internally joins the given list's items based on the given delimiter and returns a string. For example, the list ``[12,3,5]`` with a delimiter of ``"--"`` will be converted to ``"12--3--5"``.<br/>

#### Parameters

<img src="/img/CDE/blockly_docu/junior/delimiter_params1.png" width="400px"/> 

***string/list* string/list variable:** the variable, which is a list or text, that will be converted into a string or list.<br/>
***string* delimiter:** a string of characters that will join a list's items or split the text's contents.

#### Returns

***string/list* converted string or list:** a list (or string) that is the result of the conversion of the given string (or list) with the given delimiter.

#### Example
In this example, the string ``"14,2,1"`` will be converted into a list with the ``","`` delimiter. The list variable ``test_list`` will be set to this conversion. The console will print ``test_list``, which is ``[14,2,1]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('delimiter_example1_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/delimiter_example1.png" width="700px"/>

In this example, the list variable ``test_list`` will have value of ``[23,2,100]``. The string variable ``test_string`` will have the value of ``"23--2--100"`` since it's set to the value of the converted list of ``test_list`` with the ``--`` delimiter.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('delimiter_example2_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/delimiter_example2.png" width="700px"/>

<hr/>

### reverse [list]

#### Block

<img src="/img/CDE/blockly_docu/junior/reverse_list.png" width="140px"/> 

#### Description

Returns a list with the reversed order of the given list.

#### Parameters

***list* list variable:** the list variable that will its order reversed

#### Returns

***list* reversed list:** a reversed list of the given list

#### Example

In this example, the list variable ``test_list`` has a value of ``[23,2,100,5,4,3]``. Then, the list variable ``new_list`` is set to the value of a reversed list of ``test_list``. The console will print ``[3,4,5,100,2,23]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('reverse_list_example_senior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/reverse_list_example.png" width="450px"/>
