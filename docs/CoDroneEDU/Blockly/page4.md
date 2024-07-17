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
version 2.1.8 ([Changelog](/docs/CoDroneEDU/Blockly/Blockly-Changelog))
</div>

## Flight Commands

### takeoff()

#### Block

<img src="/img/CDE/blockly_docu/senior/take_off.png" width="90px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">takeoff()</span>

#### Description

This functions makes the drone take off. CoDrone EDU takes off at an average height of 1 meter off the ground. A takeoff block must be used before any other flight command or flight movement.

#### Parameters
None

#### Returns
None

#### Example

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
In this example, roll and pitch are both set to positive 30% while yaw and throttle remain at 0%. CoDrone EDU will fly forward and to the right (diagonally) for 1 second at 30% speed.

<img src="/img/CDE/blockly_docu/senior/move-example.png" width="480px"/>  

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
Add a hover or delay block after the flip if you need to stabilize before your next command. The drone takes 3-4 seconds after a flip before it can do another flight command.

<img src="/img/CDE/blockly_docu/senior/flip_example.png" width="500px"/>  

<hr/>

### turn_degree()

#### Block

<img src="/img/CDE/blockly_docu/senior/turn_degree.png" width="200px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">turn_degree()</span>

#### Description
Turns right or left with absolute reference frame to drone's initial heading. Positive degrees turn to right and negative degrees turn to the left. When the drone pairs after powering on, the current heading will be set as 0 degrees.

#### Parameters
***integer* degrees:** angle of the turn between -180 and +180

<img src="/img/CDE/blockly_docu/senior/CDE_heading.jpg" width="300px"/>  

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/turn_degree_example.png" width="240px"/>  

<hr/>

### turn_left() / turn_right()

#### Block

<img src="/img/CDE/blockly_docu/senior/turn_direction_degree.png" width="210px"/>  

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

<img src="/img/CDE/blockly_docu/senior/turn_direction_degree_example.png" width="240px"/>  

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
Place the drone on the floor a few feet away from a wall. When you run the code, the drone will fly forward until the wall is detected 30 centimeters away. The next block will immediately execute. In this case, the drone will land.

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

<img src="/img/CDE/blockly_docu/senior/set_roll_example.png" width="180px"/>  

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

<img src="/img/CDE/blockly_docu/senior/set_pitch_example.png" width="180px"/>  

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

<img src="/img/CDE/blockly_docu/senior/set_yaw_example.png" width="180px"/>  

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

<img src="/img/CDE/blockly_docu/senior/set_throttle_example.png" width="180px"/>  

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

<img src="/img/CDE/blockly_docu/senior/move_no_params_example.png" width="160px"/>  

<hr/>

### move(duration)

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

<img src="/img/CDE/blockly_docu/senior/controller_led_off_example.png" width="480px"/>  

<hr className="section_hr"/>

## Sensors

### get_range()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_range.png" width="250px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_range()</span>

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

<img src="/img/CDE/blockly_docu/senior/get_range_example.png" width="450px"/>  

<hr/>

### get_angle()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_angle.png" width="180px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_angle()</span>

#### Description
This function returns the current gyroscope angle measurement for either the x (roll),y (pitch),or z (yaw) axis.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_angle_params.png" width="200px"/>  

**axis:** x, y, z

<img src="/img/CDE/blockly_docu/senior/xyz.jpg" width="350px"/>  

#### Returns
***integer* angle:** gyroscope angle measurement for the given axis, in degrees

#### Example

<img src="/img/CDE/blockly_docu/senior/get_angle_ex.png" width="420px"/>  

<hr/>

### get_angular_speed()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_angular_speed.png" width="240px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_angular_speed()</span>

#### Description
This function returns the current angular velocity in degrees per second for either the x (roll),y (pitch), or z (yaw) axis.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_angular_speed_params.png" width="280px"/>  

**type:** x, y, z

<img src="/img/CDE/blockly_docu/senior/xyz.jpg" width="350px"/> 

#### Returns
***integer* angular velocity:** the angular velocity of the drone, in degrees per second

#### Example

<img src="/img/CDE/blockly_docu/senior/get_angular_speed_ex.png" width="480px"/>  

<hr/>

### get_accel()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_accel.png" width="190px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_accel()</span>

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

<img src="/img/CDE/blockly_docu/senior/get_accel_ex.png" width="400px"/> 

<hr/>

### get_pos()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_pos.png" width="230px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_pos()</span>

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
***float* position:** float x,y, or z value in units selected

#### Example

<img src="/img/CDE/blockly_docu/senior/get_pos_ex.png" width="450px"/>  

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

<img src="/img/CDE/blockly_docu/senior/get_battery_example.png" width="160px"/>  

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
***flaot* height:** float height value in the units selected

#### Example

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

<img src="/img/CDE/blockly_docu/senior/get_pressure_example.png" width="280px"/>  

<hr/>

### get_temperature()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_temperature.png" width="300px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_temperature()</span>

#### Description
This block returns the current temperature of the drone in either Celsius or Fahrenheit.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_temperature_params.png" width="300px"/>  

**unit:** Fahrenheit, Celsius, Kelvin

#### Returns
***float* temperature:** float value in degrees

#### Example

<img src="/img/CDE/blockly_docu/senior/get_temperature_example.png" width="380px"/>  

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

<img src="/img/CDE/blockly_docu/senior/get_elevation_example.png" width="260px"/>  

<hr/>

### get_color()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_color.png" width="210px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_color()</span>

#### Description
This functions reads the color data from either of the two bottom color sensors and returns one of the 8 pre-calibrated colors (provided in the color cards). The drone must be flat on a surface (not flying) for the color sensor to activate.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_color_params.png" width="230px"/>

**type:** front, back

#### Returns
**color:** detected color as a string (Red, Green, Yellow, Blue, Cyan, Magenta, Black, White, Unknown)

#### Example

<img src="/img/CDE/blockly_docu/senior/get_color_data_ex.png" width="500px"/>  

<hr/>

### get_hsvl()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_hsvl.png" width="250px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_hsvl()</span>

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

<img src="/img/CDE/blockly_docu/senior/get_hsvl_ex.png" width="500px"/>  

<hr/>

### get_state_data()

#### Block

<img src="/img/CDE/blockly_docu/senior/get_state_data.png" width="280x"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">get_state_data()</span>

#### Description
Returns the current state of the CoDrone EDU.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/get_state_data_params.png" width="280px"/>  

**unit:** modeFlight, modeMovement

#### Returns
**state:** name of flight/movement state

#### Example

<img src="/img/CDE/blockly_docu/senior/get_state_data_ex.png" width="320px"/>  

<hr/>

### reset_sensor()

#### Block

<img src="/img/CDE/blockly_docu/senior/reset_sensor.png" width="160px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">reset_sensor()</span>

#### Description
Resets the Gyroscope angles to 0. Make sure the drone is on a flat surface when running this block.

#### Parameters
None

#### Returns
None

#### Example
To use this example file turn the drone manually with your hand and watch the Z angle change. Stop moving the drone during the reset. You will see that the Z angle is reset to 0.

<img src="/img/CDE/blockly_docu/senior/reset_sensor_ex.png" width="280px"/>  

<hr className="section_hr"/>


## Sound

### drone_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/drone_buzzer.png" width="500px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">buzzer()</span>

#### Description
Plays a note for a duration in milliseconds using the CoDrone EDU drone buzzer.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/drone_buzzer_params.png" width="500px"/>  

**note:** note range from C3 to B7, Mute, Fin   
***integer* duration:** the duration of note played in milliseconds

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/drone_buzzer_example.png" width="500px"/>  

<hr/>

### controller_buzzer()

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_buzzer.png" width="500px"/>   

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_buzzer()</span>

#### Description
Plays a note for a duration in milliseconds using the CoDrone EDU controller buzzer.

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_buzzer_params.png" width="500px"/> 

**note:** note range from C3 to B7, Mute, Fin   
***integer* duration:** the duration of note played in milliseconds

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/controller_buzzer_example.png" width="500px"/>  

<hr/>

### drone_buzzer_hertz()

#### Block

<img src="/img/CDE/blockly_docu/senior/drone_buzzer_hertz.png" width="500px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">drone_buzzer_hertz()</span>

#### Description
Plays a sound frequency for a duration in milliseconds using the CoDrone EDU drone buzzer.

#### Parameters
***integer* hertz:** the frequency of the buzzer, in Hertz    
***integer* duration:** the duration of the buzzer played, in milliseconds

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/drone_hertz_example.png" width="500px"/>  

<hr/>

### controller_buzzer_hertz()

#### Block

<img src="/img/CDE/blockly_docu/senior/controller_buzzer_hertz.png" width="500px"/>  

#### Code

<span className="light_gray">drone.</span><span className="dark_gray">controller_buzzer_hertz()</span>

#### Description
Plays a sound frequency for a duration in milliseconds using the CoDrone EDU controller buzzer.

#### Parameters
***integer* hertz:** the frequency of the buzzer, in Hertz    
***integer* duration:** the duration of the buzzer played, in milliseconds

#### Returns
None

#### Example

<img src="/img/CDE/blockly_docu/senior/controller_hertz_example.png" width="500px"/>  

<hr className="section_hr"/>

## Screen

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
Draws a line between points (x1, y1) and (x2, y2)

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_line_params.png" width="450px"/>

***integer* x1:** point 1 x coordinate    
***integer* y1:** point 1 y coordinate    
***integer* x2:** point 2 x coordinate    
***integer* y2:** point 2 y coordinate    

#### Returns
None

#### Example

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
Draws a string from the given x_start, x_end and y positions. The string can be aligned along the x_start and x_end positions

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_string_params.png" width="450px"/>

***integer* xStart:** starting x position   
***integer* yStart:** starting y position   
**text:** any string input

#### Returns
None

#### Example

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

Draws a rectangle onto the controller screen starting from point (x,y) and extends to given height and width

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
Draws a square on the controller screen starting from point (x,y) and will extend to the given width

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_square_params.png" width="500px"/>

***integer* xStart:** top left corner x coordinate    
***integer* yStart:** top left corner y coordinate    
***integer* width:** width of square    
***boolean* flagFill:** optional parameter to fill in the square or not. default value is False   

#### Returns
None

#### Example

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
Draws a point on the CoDrone EDU LED screen at point (x, y).

#### Parameters

<img src="/img/CDE/blockly_docu/senior/controller_draw_point_params.png" width="350px"/>

***integer* x:** x coordinate   
***integer* y:** y coordinate

#### Returns
None

#### Example

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

<img src="/img/CDE/blockly_docu/senior/controller_clear_screen_example.png" width="600px"/>

<hr/>

