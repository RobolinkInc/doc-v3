---
title: "Function Documentation"
slug: Function-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

<div className='change_version'>
version 1.1.3 ([Changelog](/docs/CoDroneMini/Python/Python-Changelog))
</div>

## Connection

### pair()

#### Description
This function connects your controller with the program. You can set debug equal to True if you want to see helpful print statements that can help you debug your code. We recommend setting this to True to check if commands are being skipped. You can also set the specific USB port name.

#### Syntax
```pair()```  <br/>
```pair(port_name)``` <br/>
```pair(debug=False)``` <br/>
```pair(debug=False, port_name)```

#### Parameters
***string* port_name:** the port name or number.<br/>
***boolean* debug:** Defaults to False. True to see helpful print statements for debugging

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini


drone = CoDrone_mini.CoDrone()
drone.pair()   # pair automatically, may not always work
# drone.pair(debug=True) # sets the debug statements to True
# drone.pair(port_name = 'COM3')    # pair with a specific port

drone.takeoff()
drone.hover(3)
drone.land()
drone.close()
```
<hr className="section_hr"/>

## Flight Commands (Start/Stop)

### emergency_stop()

#### Description
This function immediately stops all commands and motors, so the drone will stop flying immediately. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and emergency stop, it is recommended to run a ```hover()``` or ```time.sleep()``` in between the ```takeoff()``` and ```emergency_stop()```, because the CoDrone Mini might miss the emergency_stop() command.

#### Syntax
```emergency_stop()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()
drone.hover(3) #Recommended to have a hover() or time.sleep(1) before landing
drone.emergency_stop()
drone.close()
```
<hr/>

### headless_off()

#### Description
This function turns off headless mode. In this mode, the drone is keeping track of which direction it's facing and will fly relative to which direction it is facing. Remember that the "front" is denoted by the red line on the shell.

#### Syntax
```headless_off()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.headless_on() # Run the code once, then switch to headless_off() and run again to see the difference.

drone.takeoff()
drone.set_yaw(20)
drone.move(1)
drone.set_yaw(0)
drone.set_pitch(40)
drone.move(1)

drone.land()
drone.close()
```
<hr/>

### headless_on()

#### Description
This function turns on headless mode, meaning that no matter in which direction the drone is facing, it will fly in the directions relative to you. This is ideal for long range drones.

#### Syntax
```headless_on()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.headless_on() # Run the code once, then switch to headless_off() and run again to see the difference.

drone.takeoff()
drone.set_yaw(20)
drone.move(1)
drone.set_yaw(0)
drone.set_pitch(40)
drone.move(1)

drone.land()
drone.close()
```
<hr/>

### land()

#### Description
This function makes the drone stop all commands, hover, and make a soft landing where it is. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and immediately land, it is recommended to run a ```hover()``` or ```time.sleep()``` in between the ```takeoff()``` and ```land()```, because the CoDrone Mini will often miss the land command otherwise.

#### Syntax
```land()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()
drone.hover(3) # include a hover() or time.sleep() to prevent land() from skipping
drone.land()
drone.close()
```
<hr/>

### reset_sensor()

#### Description
This function will reset the gyro angles back to zero for roll, pitch, and yaw. NOTE: If you're resetting right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```,  otherwise the take off might be skipped.

#### Syntax
```reset_sensor()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()
print("Before ", drone.get_angle())
drone.takeoff()
drone.set_yaw(50)
drone.move(1)
drone.land()
print("After ",drone.get_angle())
drone.reset_sensor() 
print("Reset ", drone.get_angle())
drone.close()
```
<hr/>

### reset_trim()

#### Description
You can reset the roll and pitch trim of the drone in case your drone is drifting. This function will reset the roll and pitch trim values back to zero. NOTE: If you're resetting the trim right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```, otherwise the take off might be skipped.

#### Syntax
```reset_trim()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.set_trim(5,0)
print(drone.get_trim())
drone.takeoff()
drone.hover(3)
drone.land()
drone.reset_trim() 
print(drone.get_trim())
drone.close()
```
<hr/>

### set_trim()

#### Description
You can set the **roll** and **pitch** trim of the drone in case your drone is drifting. For example, if the drone is drifting to its right, you may want to set the roll to a small negative value. This trim will remain saved, even after powering off until you've changed the trim either programmatically, or done a reset with the remote. **NOTE:** If you're setting the trim right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```, otherwise the takeoff commmand might be skipped.

#### Syntax
```set_trim(roll, pitch)```

#### Parameters
***integer* roll:** the power of the roll, which is from -100 to 100<br />
***integer* pitch:** the power of the pitch, which is from -100 to 100<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.set_trim(-1, 0) # example: drone is drifting right, so trim to roll left a little bit

time.sleep(1)       # Add a time.sleep(1) before takeoff if you're planning to set the trim before takeoff
drone.takeoff()
drone.hover(3)
drone.land()
drone.close()
```
<hr/>

### takeoff()

#### Description
This function makes the drone takeoff and hover.<br />
The drone will always hover for 3 seconds in order to stabilize before it executes the next command.<br />
If it receives no command for 8 seconds, it will automatically land.

#### Syntax
```takeoff()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()
	
drone.hover(3)
drone.land()
drone.close()
```
<hr className="section_hr"/>

## Flight Commands (Movement)

### flip()

#### Description
This function makes the drone do a flip in one of four directions: **forward**, **backward**, **left**, or **right**. It's recommended that you wait a few seconds in between successive flips, otherwise the sequence may not appear as expected.

#### Syntax
```flip(direction)```

#### Parameters
**enum Direction:** Direction.FORWARD, Direction.BACKWARD, Direction.LEFT, Direction.RIGHT

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time
from CoDrone_mini import Direction

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.takeoff()
drone.flip(Direction.FORWARD)	
time.sleep(3) # recommended wait time between flips
drone.flip(Direction.LEFT)	
drone.land()
drone.close()
```
<hr/>

### fly_sequence()

#### Description
This function makes the drone fly in a pre-determined shape. The options are **square**, **spiral**, **triangle**, **hop**, **sway**, and **zigzag**. It's recommended that you **make sure the drone is trimmed and hovering stably** before running a sequence, otherwise the sequence may not appear as expected.

#### Syntax
```fly_sequence(sequence)```

#### Parameters
***enum* Sequence:** SQUARE, SPIRAL, TRIANGLE, HOP, SWAY, ZIGZAG

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Sequence

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.takeoff()
drone.fly_sequence(Sequence.ZIGZAG) # Fly zigzag (move left and right 2 times each while move forward)
drone.fly_sequence(Sequence.SPIRAL)     # Fly Spiral shape
drone.fly_sequence(Sequence.SQUARE)     # Fly square shape

drone.land()
drone.close()
```
<hr/>

### go()

#### Description
A simpler Junior level function that represents flight with direction with more natural language.
It simply flies in the given direction for a given duration and power.

#### Syntax
```go(direction)```<br />
```go(direction, duration)```<br />
```go(direction, duration, power)```

#### Parameters
***enum* Direction:** an enum in Python. It’s the direction of the flight, which can be one of the following: FORWARD, BACKWARD, LEFT, RIGHT, UP, and DOWN.<br />
***integer* duration:** the duration of the flight motion in seconds. If undefined, defaults to run indefinitely.<br />
***integer* power:** the power at which the drone flies forward. Takes a value from 0 to 100. Defaults to 50 if not defined.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Direction

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()

# Try each of these commands by uncommenting them
#drone.go(Direction.FORWARD)        # Go forward indefinitely at 50% power
#drone.go(Direction.UP, 2)          # Go up for 5 seconds at 50% power
drone.go(Direction.BACKWARD, 3, 40) # Go backwards for 3 seconds at 70% power
drone.land()
drone.close()
```
<hr/>

### hover()

#### Description
This function makes the drone hover for a given amount of time. <br />
If given no parameters, it will hover indefinitely until given a another command.

#### Syntax
```hover(duration)```

#### Parameters
***integer* duration:** the duration of the hovering in seconds.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()
	
drone.hover(3)   # hover for 3 seconds
#drone.hover()   # hover indefinitely 
drone.land()
drone.close()
```
<hr/>

### turn()

#### Description
A function that represents yaw, but with more natural language. It turns CoDrone Mini in the given direction, with the given duration and power.

#### Syntax
```turn(direction)```<br />
```turn(direction, duration)```<br />
```turn(direction, duration, power)```

#### Parameters
***enum* Direction:** an enum in Python. It’s the direction of the turn, which can either ```LEFT``` or ```RIGHT```.<br />
***integer* duration:** the duration of the turn in seconds. If 0, it will turn default to turn indefinitely.<br />
***integer* power:** the power at which the drone turns right. Takes a value from 0 to 100. Defaults to 50 if not defined.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Direction

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()
	
drone.turn(Direction.LEFT)          # Turn left indefinitely at 50 power
drone.turn(Direction.RIGHT, 3, 100) # Turn right for 3 seconds at 100 power
drone.land()
drone.close()
```
<hr className="section_hr"/>

## Flight Variables

### get_pitch()

#### Description
This is a getter function that gets the value of the **pitch** variable.

#### Syntax
```get_pitch()```

#### Parameters
None

#### Returns
***integer* power:** The power of the pitch variable

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current pitch with getter function
print("Current pitch : ", drone.get_pitch())
drone.close()
```
<hr/>

### get_roll()

#### Description
This is a getter function that gets the value of the **roll** variable.

#### Syntax
```get_roll()```

#### Parameters
None

#### Returns
***integer* power:** The power of the roll variable

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini


drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current roll with getter function
print("Current Roll : ", drone.get_roll())
drone.close()
```
<hr/>

### get_throttle()

#### Description
This is a getter function that gets the value of the **throttle** variable.

#### Syntax
```get_throttle()```

#### Parameters
None

#### Returns
***integer* power:** The power of the throttle variable

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current throttle with getter function
print("Current throttle : ", drone.get_throttle())
drone.close()
```
<hr/>

### get_yaw()

#### Description
This is a getter function that gets the value of the **yaw** variable.

#### Syntax
```get_yaw()```

#### Parameters
None

#### Returns
***integer* power:** The power of the yaw variable

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# Print current yaw with getter function
print("Current yaw : ", drone.get_yaw())
drone.close()
```
<hr/>

### move()

#### Description
You can use this function to create more complex flight movements. With no parameters, ```move()``` will just run based on whatever the flight variables have been set to with functions like ```setPitch()``` and ```setThrottle()``` indefinitely.  You can also run it for a certain duration.  The function also takes multiple parameters, where you can set roll, pitch, yaw, and throttle all at once.  You can run it infinitely with 4 parameters, or you can run it for a given duration with 5 parameters. If the drone is not flying, nothing will happen. You must takeoff() first to use a move() function.

#### Syntax
```move()```: runs indefinitely<br />
```move(duration)```: runs the given number of seconds<br />
```move(roll, pitch, yaw, throttle)```: runs indefinitely<br />
```move(duration, roll, pitch, yaw, throttle)```

#### Parameters
***integer* duration:** the duration of the flight motion in seconds.<br />
***integer* roll:** the power of the roll, which is from -100 to 100<br />
***integer* pitch:** the power of the pitch, which is from -100 to 100<br />
***integer* yaw:** the power of the yaw, which is from -100 to 100<br />
***integer* throttle:** the power of the throttle, which is from -100 to 100

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.takeoff()
drone.set_pitch(20)
drone.move(5)                   # Move 5 seconds based on the current value of flight variables
drone.move()                    # Move indefinitely based on the current value of flight variables

drone.set_pitch(0)              # Set pitch back to 0 for the remaining examples
drone.move(5, 0, 0, 80, 80)     # Move up(throttle) and turn left(yaw) for 5 seconds
drone.land()
drone.close()
```
<hr/>

### set_pitch()

#### Description
This is a setter function that allows you to set the **pitch** variable. Once you set pitch, you have to use ```move()``` to actually execute the movement. The pitch variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to pitch again.

#### Syntax
```set_pitch(power)```

#### Parameters
***integer* power:** Sets the pitch variable, between -100 and 100. The number represents the direction and power of the output for that flight motion variable. Negative pitch is backwards, positive pitch is forwards.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()

# Drone goes right for 1 second with 50 power
drone.set_pitch(50)
drone.move(1)               #use move() to execute the movement for 1 second
drone.land()
drone.close()
```
<hr/>

### set_roll()

#### Description
This is a setter function that allows you to set the **roll** variable. Once you set roll, you have to use ```move()``` to actually execute the movement. The roll variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to roll again.

#### Syntax
```set_roll(power)```

#### Parameters
***integer* power:** Sets the roll variable, between -100 and 100. The number represents the direction and power of the output for that flight motion variable. Negative roll is left, positive roll is right.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()

# Drone goes right for 1 second with 50 power
drone.set_roll(50)
drone.move(1)           #use move() to execute the movement for 1 second
drone.land()
drone.close()
```
<hr/>

### set_throttle()

#### Description
This is a setter function that allows you to set the **throttle** variable. Once you set throttle, you have to use ```move()``` to actually execute the movement. The throttle variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to throttle again.

#### Syntax
```set_throttle(power)```

#### Parameters
***integer* power:** Sets the throttle variable, between -100 and 100.. The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()
drone.takeoff()

# Drone goes up for 1 second with 50% power
drone.set_throttle(50)
drone.move(1)               #use move() to execute the movement for 1 second
drone.land()
drone.close()
```
<hr/>

### set_yaw()

#### Description
This is a setter function that allows you to set the **yaw** variable. Once you set yaw, you have to use ```move()``` to actually execute the movement. The yaw variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to yaw again.

#### Syntax
```set_yaw(power)```

#### Parameters
***integer* power:** Sets the pitch variable, between -100 and 100. The number represents the direction and power of the output for that flight motion variable. Negative yaw turns left, positive yaw turns right.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.takeoff()

# Drone turns right for 1 second with 50% power
drone.set_yaw(50)
drone.move(1)           #use move() to execute the movement for 1 second
drone.land()
drone.close()
```
<hr className="section_hr"/>

## LED-and-Buzzer

### LED_color()

#### Description
This function sets the LED color of the CoDrone Mini's LED using RGB values and their brightness with a value from 1 - 100. **NOTE:** If you're setting the LED right before a takeoff, make sure to add a ```time.sleep(1)``` before the ```takeoff()```, otherwise the take off might be skipped.

#### Syntax
```LED_color(red, green, blue, brightness)```<br />

#### Parameters
***integer* red:** the pixel value for the color red from 0 to 255<br/>
***integer* green:** the pixel value for the color green from 0 to 255<br/>
***integer* blue:** the pixel value for the color blue from 0 to 255<br/>
***integer* brightness:** the brightness of the LEDs from 0 to 100<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.LED_color(255, 0, 0, 100)        # set LED color to red using RGB

time.sleep(1)       # Add a time.sleep(1) before takeoff if you're planning to set the LED cover before takeoff, otherwise the takeoff might get missed
drone.takeoff()
drone.land()
drone.close()
```
<hr/>

### LED_pattern()

#### Description
This function sets the color of CoDrone mini LED light and makes it flash in a particular pre-set pattern at a given speed.

#### Syntax
```LED_pattern(red, green, blue, mode)```<br/>
```LED_pattern(red, green, blue, mode, speed)```<br/>

#### Parameters
***integer* red:** the pixel value for the color red from 0 to 255<br/>
***integer* green:** the pixel value for the color green from 0 to 255<br/>
***integer* blue:** the pixel value for the color blue from 0 to 255<br/>
**enum Mode:** an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, PULSE, FADE_IN, FADE_OUT<br/>
***integer* speed:** the speed of the lighting pattern from 1 to 10. 1 is slowest, 10 is fastest. Default value is 5.<br/>

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Mode

drone = CoDrone_mini.CoDrone()
drone.pair()
time.sleep(1) # to prevent skipping the LED command
drone.LED_pattern(0, 100, 0, Mode.PULSE, 5)
drone.close() 
```
<hr/>

### play_note()

#### Description
This function allows you to program the buzzer on the remote, not the drone. <br/>
This function takes two parameters. The first is the note or frequency desired. The second parameter is how long you want the note to play in **seconds**. The Note class must be imported to use this function.

#### Syntax
```play_note(note, duration)```
```play_note(frequency, duration)```

#### Parameters
***enum* Note:** the note of the buzzer based off of the given Note value from Note.C3 to Note.B7<br/>
***integer* frequency:** the note of the buzzer based off of the given frequency in Hertz<br/>
***float* duration:** The duration of the note in seconds<br/>

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
from CoDrone_mini import Note
drone = CoDrone_mini.CoDrone()
drone.pair()

drone.play_note(Note.C4, 0.5)
drone.play_note(Note.D4, 0.5)
drone.play_note(Note.E4, 0.5)
drone.play_note(Note.F4, 0.5)
drone.play_note(Note.G4, 0.5)

drone.play_note(440,0.5) # 440 Hz is Note.C4
drone.close()
```
<hr/>

### reset_LED()

#### Description
This function sets the LED color back to red and sets the mode to SOLID, which is the original default color and pattern.

#### Syntax
```reset_LED()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.reset_LED()
drone.close()
```
<hr/>

### turn_off_LED()

#### Description
This function turns off the LED.

#### Syntax
```turn_off_LED()```

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.turn_off_LED()

drone.close()
```
<hr className="section_hr"/>

## Sensors

### get_altitude()

#### Description
This is a getter function which returns the current **altitude** of the drone. <br />
It uses air pressure from the barometer sensor to estimate the altitude. This function returns the absolute altitude between the drone's current position and "sea level", not the floor.

#### Syntax
```get_altitude()```

#### Parameters
None

#### Returns
***float* altitude:** The current height calculated by the difference between the current and the floor altitude (cm).

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

altitude = drone.get_altitude()
print(altitude)
drone.close()
```
<hr/>

### get_angle()

#### Description
This function gets the **roll, pitch, and yaw angles** from the gyrometer sensor.

#### Syntax
```get_angle()```

#### Parameters
None

#### Returns
***List Object* angles:** A list object with ROLL, PITCH, and YAW properties.

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# print the angle values
angle  = drone.get_angle()
print(angle)
print(angle.ROLL, angle.PITCH, angle.YAW)
drone.close()
```
<hr/>

### get_battery_percentage()

#### Description
This function gets the battery percentage of the drone, returning a value from 0 to 100.

#### Syntax
```get_battery_percentage()```

#### Parameters
None

#### Returns
***integer* percentage:** the battery's percentage from 0 - 100

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

battery = drone.get_battery_percentage()
print(battery)
drone.close()
```
<hr/>

### get_drone_temp()

#### Description
This is a getter function gets the drone's **temperature** from the barometer.<br />
The sensor reads the drone’s temperature, not the air around it.

#### Syntax
```get_drone_temp()```

#### Parameters
None

#### Returns
***integer* temperature:** the temperature in Celsius as an integer.

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini
import time

drone = CoDrone_mini.CoDrone()
drone.pair()

# print the temperature
time.sleep(1) # to prevent skipping for an accurate reading
temperature  = drone.get_drone_temp()
print(temperature)
drone.close()
```
<hr/>

### get_height()

#### Description
This is a getter function which returns the current **height** of the drone. <br />
It checks sea level from the barometer sensor first and then the altitude from the floor right after it is paired. This function returns the distance between the drone's current position and the floor or any surface below from where it took off from.

#### Syntax
```get_height()```

#### Parameters
None

#### Returns
***float* height:** the current height calculated by the difference between the current and the floor altitude(cm).

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

drone.takeoff()
drone.hover(3)
height = drone.get_height()
print(height)
drone.land()
drone.close()
```
<hr/>

### get_pressure()

#### Description
This is a getter function that returns the data from the barometer. The function returns a value in the unit Pascals. **Note:** 1 atm = 101325 Pa

#### Syntax
```get_pressure()```

#### Parameters
None

#### Returns
***float* pressure:** The air pressure of the drone in Pascals.

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# print the pressure
pressure = drone.get_pressure()
print(pressure)
drone.close()
```
<hr/>

### get_trim()

#### Description
This function gets the current trim values of the drone.

#### Syntax
```get_trim()```

#### Parameters
None

#### Returns
***List Object* trim values:** A list object with ROLL, PITCH, YAW, and THROTTLE properties

#### Example Code
##### Python
```python
#Python code
import CoDrone_mini

drone = CoDrone_mini.CoDrone()
drone.pair()

# print the pressure
trim  = drone.get_trim()
print(trim)
print(trim.ROLL, trim.PITCH, trim.YAW, trim.THROTTLE)
drone.close()
```