---
title: "Offline App Documentation"
hide_title: true
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='level3_body'>

## Flight Commands

### take_off()

#### Block

<img src="/img/CDE/blockly_docu/senior/take_off.png" width="120px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">takeoff()</span>

#### Parameters
None

#### Description

This functions makes the drone take off. CoDrone EDU takes off at an average height of 1 meter off the ground. A takeoff block must be used before any other flight command or flight movement.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/take_off_hover_land.png" width="240px"/>  

<hr/>

### land()

#### Block

<img src="/img/CDE/blockly_docu/senior/land.png" width="120px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">land()</span>

#### Parameters
None

#### Description
This function makes the drone land by throttling down safely.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/take_off_hover_land.png" width="240px"/>  

<hr/>

### emergency_stop()

#### Block

<img src="/img/CDE/blockly_docu/senior/emergencystop.png" width="160px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">emergency_stop()</span>

#### Parameters
None

#### Description
Stops all commands to motors. The drone will stop flying immediately.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/emergency_stop_example.png" width="150px"/>  

<hr/>

### hover()

#### Block

<img src="/img/CDE/blockly_docu/senior/hover.png" width="150px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">hover()</span>

#### Parameters
**duration:** positive integer in seconds

#### Description
This function makes the drone hover in place for a duration in seconds.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/take_off_hover_land.png" width="240px"/>  

<hr/>

### move()

#### Block

<img src="/img/CDE/blockly_docu/senior/move.png" width="460px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">move()</span>

#### Parameters
**roll:** roll power percentage as an integer between -100 and +100   
**pitch:** pitch power percentage as an integer between -100 and +100   
**yaw:** yaw power percentage as an integer between -100 and +100   
**throttle:** throttle power percentage as an integer between -100 and +100   
**duration:** positive integer in seconds

#### Description
Moves the drone for a certain amount of time (in seconds) in a given direction determined by the flight parameters.

#### Returns
None

#### Example
In this example, roll and pitch are both set to positive 30% while yaw and throttle remain at 0%. CoDrone EDU will fly forward and to the right (diagonally) for 1 second at 30% speed.

<img src="/img/CDE/blockly_docu/senior/move-example.png" width="480px"/>  

<hr/>

### flip()

#### Block

<img src="/img/CDE/blockly_docu/senior/flip.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">flip()</span>

#### Parameters

<img src="/img/CDE/blockly_docu/senior/flip_params.png" width="180px"/>  

**direction:** backward, forward, right, left

#### Description
This functions makes the drone flip backward, forward, right, or left. Make sure your battery percentage is over 50% for the flip to execute.

#### Returns
None

#### Example
Add a hover or delay block after the flip if you need to stabilize before your next command. The drone takes 3-4 seconds after a flip before it can do another flight command.

<img src="/img/CDE/blockly_docu/senior/flip_example.png" width="500px"/>  

<hr/>

### turn_degree()

#### Block

<img src="/img/CDE/blockly_docu/senior/turn_degree.png" width="200px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">turn_degree()</span>

#### Parameters
**degrees:** integer from -180 to +180

#### Description
Turns right or left with absolute reference frame to drone's initial heading. Positive degrees turn to right and negative degrees turn to the left. When the drone pairs after powering on, the current heading will be set as 0 degrees.

<img src="/img/CDE/blockly_docu/senior/CDE_heading.jpg" width="300px"/>  

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/turn_degree_example.png" width="240px"/>  

<hr/>

### turn_left() / turn_right()

#### Block

<img src="/img/CDE/blockly_docu/senior/turn_degree.png" width="210px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">turn_left()</span>    
<br/>
<span className="light_gray">drone.</span><span className="dark_gray">turn_right()</span>

#### Parameters
**degrees:** positive integer from 0 to 180

#### Description
Turns right or left relative to the drone's current heading.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/turn_degree_example.png" width="240px"/>  

<hr/>

### avoid_wall()

#### Block

<img src="/img/CDE/blockly_docu/senior/avoid_wall.png" width="260px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">avoid_wall()</span>

#### Parameters
**timeout:** positive integer timeout duration in seconds   
**distance:** positive integer in centimeters

#### Description
CoDrone EDU will fly forward and stop when an obstacle is detected a given distance away (in centimeters). The block will run until the timeout (in seconds) is finished or the obstacle is found, whichever comes first. The default timeout is 10 seconds for an obstacle detected 20cm away.

#### Returns
None

#### Example
Place the drone on the floor a few feet away from a wall. When you run the code, the drone will fly forward until the wall is detected 30 centimeters away. The next block will immediately execute. In this case, the drone will land.

<img src="/img/CDE/blockly_docu/senior/avoid_wall_example.png" width="280px"/>  

<hr/>

## Flight Variables

### set_roll()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_roll.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_roll()</span>

#### Parameters
**power:** integer between -100 and 100

#### Description
This function sets the roll direction variable but will not send a move command. Negative values will move the drone to the left and positive values will move the drone to the right.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/set_roll_example.png" width="180px"/>  

<hr/>

### set_pitch()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_pitch.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_pitch()</span>

#### Parameters
**power:** integer between -100 and 100

#### Description
This function sets the pitch direction variable but will not send a move command. Negative values will move the drone backward and positive values will move the drone forward.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/set_pitch_example.png" width="180px"/>  

<hr/>

### set_yaw()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_yaw.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_yaw()</span>

#### Parameters
**power:** integer between -100 and 100

#### Description
This function sets the yaw direction variable but will not send a move command. Negative values will turn the drone to the right and positive values will turn the drone to the left.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/set_yaw_example.png" width="180px"/>  

<hr/>

### set_throttle()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_throttle.png" width="240px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_throttle()</span>

#### Parameters
**power:** integer between -100 and 100

#### Description
This function sets the throttle direction variable but will not send a move command. Negative values will move the drone downward and positive values will move the drone upward.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/set_throttle_example.png" width="240px"/>  

<hr/>

### move()

#### Block

<img src="/img/CDE/blockly_docu/senior/move_no_params.png" width="80px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">move()</span>

#### Parameters
None

#### Description
Moves CoDrone EDU in the direction set by the flight variables with the smallest duration possible (about 0.01 seconds). Since it has no specified duration, it is often used inside of a loop to check sensors simultaneously.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/move_no_params_example.png" width="400px"/>  

<hr/>

### move(duration)

#### Block

<img src="/img/CDE/blockly_docu/senior/move_with_params.png" width="160px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">move()</span>

#### Parameters
**duration:** positive integer in seconds

#### Description
Moves CoDrone EDU for a duration in seconds in the direction set by the flight variables.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/move_with_params_example.png" width="200px"/>  

<hr/>

### set_trim()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_trim.png" width="240px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_trim()</span>

#### Parameters

<img src="/img/CDE/blockly_docu/senior/set_trim_params.png" width="280px"/>  

**roll:** integer between -100 and 100    
**pitch:** integer between -100 and 100

#### Description
Sets the trim values to adjust for any drifting while CoDrone EDU is flying. Set the trim values in the opposite direction of drift. For example, if the drone is drifting to the right, set roll to a negative value.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/set_trim_example.png" width="280px"/>  

<hr/>

### get_trim()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_trim.png" width="120px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_trim()</span>

#### Parameters
**roll:** integer between -100 and 100    
**pitch:** integer between -100 and 100

#### Description
Returns the current trim values. Combine with a print statement to see the results printed to the console.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/get_trim_example.png" width="280px"/>  

<hr/>

### reset_trim()

#### Block

<img src="/img/CDE/blockly_docu/senior/reset_trim.png" width="120px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">reset_trim()</span>

#### Parameters
None

#### Description
Resets the trim values to (0,0).

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/reset_trim_example.png" width="280px"/>  

<hr/>

## Status Checkers

### code_is_running()

#### Block

<img src="/img/CDE/blockly_docu/senior/code_is_running.png" width="160px"/>  


#### Parameters
None

#### Description
Returns a True value while your code is running. Use this block instead of "while True" when you want to run a "forever" loop. Use the "Stop" button in Blockly to stop the program.    
**Note:** There is no Python equivalent code_is_running() function. Use a while True loop in Python.

#### Returns
**Boolean:** returns true if program is running, false if user presses "Stop"

#### Example

<img src="/img/CDE/blockly_docu/senior/code_is_running_example.png" width="500px"/>  

<hr/>

## Lights

### set_drone_LED()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_drone_led.png" width="450px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_drone_LED()</span>

#### Parameters

<img src="/img/CDE/blockly_docu/senior/set_drone_led_params.png" width="500px"/> 

**red:** positive integer between 0 and 255   
**green:** positive integer between 0 and 255   
**blue:** positive integer between 0 and 255    
**brightness:** positive between 0 and 255    

#### Description
Sets the color of CoDrone EDU's LED. Colors are set by using its RGB (red, green, blue) equivalent values.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/set_drone_led_example.png" width="500px"/>  

<hr/>

### drone_LED_off()

#### Block

<img src="/img/CDE/blockly_docu/senior/drone_led_off.png" width="150px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">drone_LED_off()</span>

#### Parameters
None

#### Description
Turns off CoDrone EDU's LED.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/drone_led_off_example.png" width="480px"/>  

<hr/>

### set_controller_LED()

#### Block

<img src="/img/CDE/blockly_docu/senior/set_controller_led.png" width="450px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">set_controller_LED()</span>

#### Parameters

<img src="/img/CDE/blockly_docu/senior/set_controller_led_params.png" width="500px"/> 

**red:** positive integer between 0 and 255   
**green:** positive integer between 0 and 255   
**blue:** positive integer between 0 and 255    
**brightness:** positive integer between 0 and 255    

#### Description
Sets the color of CoDrone EDU's controller LED. Colors are set by using its RGB (red, green, blue) equivalent values.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/set_controller_led_example.png" width="500px"/>  

<hr/>

### controller_LED_off()

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_led_off.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_LED_off()</span>

#### Parameters
None

#### Description
Turns off the CoDrone EDU's controller LED.

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/controller_led_off_example.png" width="480px"/>  

<hr/>

## Sensors
### get_range()
### get_angle()
### get_angular_speed()
### get_accel()
### get_pos()
### get_battery()
### get_height()
### get_pressure()
### get_temperature()
### get_elevation()
### get_color()
### get_hsvl()
### get_state_data()
### reset_sensor()


## Sound
### drone_buzzer()
### controller_buzzer()
### drone_buzzer_hertz()
### controller_buzzer_hertz()

## Screen
### controller_draw_line()
### controller_draw_string()
### controller_draw_rectangle()
### controller_draw_square()
### controller_draw_point()
### controller_draw_image()
### controller_clear_screen()


</div>