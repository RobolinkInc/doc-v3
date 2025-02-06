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
version 1.2.8
</div>

## Connection

### disconnect()

#### Description
This function disconnects with the drone that you're connected to.

#### Syntax
```disconnect()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()
drone.hover(1)
drone.land()
drone.disconnect() # disconnects from drone
drone.close()
```
<hr/>

### pair()

#### Description
This function pairs the BLE board to the CoDrone. After establishing a connection, it always waits for 3 seconds before executing the next command. With Python, pair() with no parameters will pair with the last paired CoDrone, which is saved in a file called "PairInfo." If it's your first time running pair(), it will just find the nearest CoDrone it can find, then "lock in" with that CoDrone, save it to "PairInfo" and always pair with it until you run pair(drone.Nearest).

#### Syntax
```pair()```

#### Parameters
**Nearest:** Nearest in Python, it will pair with the first drone it finds (which may not always be the nearest CoDrone, in some cases, just the first CoDrone it finds). This function can be used to "unlock" the drone from only pairing with the CoDrone it's been "locked in" with. Once you've paired with a nearest CoDrone, you can run pair() again with no parameters, and it will only pair with the "locked in" CoDrone.<br/>
**address:** This is the address of the CoDrone. This is the 4-digit number that identifies the CoDrone.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
# drone.pair(“5349”)
# drone.pair(drone.Nearest)

# you can set specific port name for pairing especially Windows need/require this 
# drone.pair(port_name = 'COM3')
# drone.pair('1234', 'COM3')
# drone.pair(drone.Nearest, 'COM3')

drone.takeoff()
drone.hover(3)
drone.land()
drone.close()
```

<hr className="section_hr"/>

## Flight Commands (Start/Stop)

### takeoff()

#### Description
This function makes the drone take off and begin hovering. The drone will always hover for 3 seconds in order to stabilize before it executes the next command.
If it receives no command for 8 seconds, it will automatically land.

#### Syntax
```takeoff()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff() # CoDrone takes off from ground

drone.hover(3)
drone.land()
drone.close()
```

<hr/>

### land()

#### Description
This function makes the drone stop all commands, hovers, and makes a soft landing where it is. The function will also zero-out all of the flight motion variables to 0.

#### Syntax
```land()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.hover(3)
drone.land() # lands the CoDrone
drone.close()
```

<hr/>

### emergency_stop()

#### Description
This function immediately stops all commands and stops all motors, so the drone will stop flying immediately.
The function will also zero-out all of the flight motion variables to 0.

#### Syntax
```emergency_stop()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.emergency_stop() # stops commands/motors, falls down
drone.close()
```
<hr className="section_hr"/>

## Flight Commands (Movement)

### fly_sequence()

#### Description
This function make drone fly specific shape and hover after finish. The options are square, circle, spiral, triangle, hop, sway, zigzag.

#### Syntax
```fly_sequence(sequence)```

#### Parameters
***enum* Sequence:** SQUARE, CIRCLE, SPIRAL, TRIANGLE, HOP, SWAY, ZIGZAG

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Sequence

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()
drone.fly_sequence(Sequence.TRIANGLE)   # Fly triangle shape
drone.fly_sequence(Sequence.SPIRAL)     # Fly spiral shape
drone.fly_sequence(Sequence.SQUARE)     # Fly square shape
drone.land()
drone.close()
```
<hr/>

### go_to_height()

#### Description
This is a setter function will make the drone fly to the given height above the object directly below its IR sensor (usually the ground).
It’s effective between 20 and 2000 millimeters. It uses the IR sensor to continuously check for its height.

#### Syntax
```go_to_height(height)```

#### Parameters
**height:** An int from 20 to 2000 in millimeters

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# Fly 1500mm away from bottom and hover
drone.takeoff()
drone.go_to_height(1500)
drone.land()
drone.close()
```
<hr/>

### go()

#### Description
A simpler Junior level function that represents positive flight with a direction, but with more natural language. It simply flies in the given direction for the given duration and power.

#### Syntax
```go(direction)```<br/>
```go(direction, duration)```<br/>
```go(direction, duration, power)```<br/>

#### Parameters
***enum* Direction:** an enum in Python. It’s the direction of the flight, which can be one of the following: FORWARD, BACKWARD, LEFT, RIGHT, UP, and DOWN.<br/>
**duration:** the duration of the flight motion in seconds. If undefined, defaults to 1 seconds. If duration is 0, it will turn right indefinitely.<br/>
**power:** the power at which the drone flies forward. Takes a value from 0 to 100. Defaults to 50 if not defined.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Direction

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.go(Direction.FORWARD)         # Go forward for 1 second at 50% power
drone.go(Direction.UP, 5)           # Go up for 5 seconds at 50% power
drone.go(Direction.BACKWARD, 3, 70) # Go backwards for 3 seconds at 70% power
drone.land()
drone.close()
```
<hr/>

### hover()

#### Description
This function makes the drone hover for a given amount of time.
If you enter a 0 or None, it will hover indefinitely until given a another command.

#### Syntax
```hover(duration)```

#### Parameters
**duration:** the duration of the hovering in seconds.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.hover(3) ## hovers in the air for 3 seconds
drone.land()
drone.close()
```
<hr/>

### rotate180()

#### Description
This function makes the drone rotate 180 degrees. Only rotates in a random direction, because this is a pre-set flight event in the firmware.

#### Syntax
```rotate180()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()
drone.rotate180()

drone.land()
drone.close()
```
<hr/>

### turn_degree()

#### Description
A Senior level function that yaws by a given degree in a given direction.
This function takes an input degree in an input direction, and turns until it reaches the given degree. In some instances, the drone may turn past the given degree and need to rotate all the way around again before reaching the correct degree.

#### Syntax
```turn_degree(direction,degree)```

#### Parameters
***enum* Direction:** an enum in Python. It’s the direction of the turn, which can be one of the following: LEFT and RIGHT<br/>
***enum* Degree:** an enum in Python. The degree the drone will turn to the right, with its starting position representing 0 degrees,Degree.ANGLE_30, Degree.ANGLE_45, Degree.ANGLE_60, Degree.ANGLE_90, Degree.ANGLE_120, Degree.ANGLE_135, Degree.ANGLE_150, Degree.ANGLE_180, Degree.ANGLE_210, Degree.ANGLE_225, Degree.ANGLE_240, Degree.ANGLE_270, Degree.ANGLE_300, Degree.ANGLE_315, Degree.ANGLE_330

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Direction, Degree

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.turn_degree(Direction.LEFT, Degree.ANGLE_45)  # Turn left 45 degrees
drone.land()
drone.close()
```
<hr/>

### turn()

#### Description
A function that represents yaw, but with more natural language. It simply turns in the given direction, duration and power.

#### Syntax
```turn(direction)```<br/>
```turn(direction, duration)```<br/>
```turn(direction, duration, power)```<br/>

#### Parameters
***enum* Direction:** an enum in Python. It’s the direction of the turn, which can be one of the following: LEFT or RIGHT.<br/>
**duration:** the duration of the turn in seconds. If 0, it will turn right indefinitely. Defaults to 1 second if not defined.<br/>
**power:** the power at which the drone turns right. Takes a value from 0 to 100. Defaults to 50 if not defined.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Direction

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

drone.turn(Direction.LEFT)          # Turn left for 1 second at -50 power
drone.turn(Direction.LEFT, 0)       # Turn left at -50 power indefinitely
drone.turn(Direction.RIGHT, 3, 100) # Turn right for 3 seconds at 100 power
drone.land()
drone.close()
```
<hr className="section_hr"/>

## Flight Variables

### get_pitch()

#### Description
This is a getter function that gets the value of the pitch variable.

#### Syntax
```get_pitch()```

#### Parameters
None

#### Returns
**power:** returns the power of the pitch variable (int)

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# Print current pitch with getter function
print("Current pitch : ", drone.get_pitch())
drone.close()
```
<hr/>

### get_roll()

#### Description
This is a getter function that gets the value of the roll variable.

#### Syntax
```get_roll()```

#### Parameters
None

#### Returns
**power:** The power of the roll variable (int)

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# Print current roll with getter function
print("Current Roll : ", drone.get_roll())
drone.close()
```
<hr/>

### get_throttle()

#### Description
This is a getter function that gets the value of the throttle variable.

#### Syntax
```get_throttle()```

#### Parameters
None

#### Returns
**power:** The power of the throttle variable (int)

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# Print current throttle with getter function
print("Current throttle : ", drone.get_throttle())
drone.close()
```
<hr/>

### get_yaw()

#### Description
This is a getter function that gets the value of the yaw variable.

#### Syntax
```get_yaw()```

#### Parameters
None

#### Returns
**power:** The power of the yaw variable (int)

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# Print current yaw with getter function
print("Current yaw : ", drone.get_yaw())
drone.close()
```
<hr/>

### move()

#### Description
You can use this function to create more complex flight movements. With no parameters, move() will just run based on whatever the flight variables have been set to with functions like set_pitch() and set_throttle() indefinitely. You can also run it for a certain duration. The function also takes multiple parameters, where you can set roll, pitch, yaw, and throttle all at once. You can run it infinitely with 4 parameters, or you can run it for a given duration with 5 parameters. If the drone is not flying, nothing will happen.

#### Syntax
```move()``` runs infinitely<br/>
```move(duration)```<br/>
```move(roll, pitch, yaw, throttle)``` runs infinitely<br/>
```move(duration, roll, pitch, yaw, throttle)```<br/>

#### Parameters
**duration:** the duration of the flight motion in seconds. If 0, the duration is infinity.<br/>
**roll:** the power of the roll, which is an int from -100 to 100<br/>
**pitch:** the power of the pitch, which is an int from -100 to 100<br/>
**yaw:** the power of the yaw, which is an int from -100 to 100<br/>
**throttle:** the power of the throttle, which is an int from -100 to 100<br/>

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()

drone.move()                  # Move indefinitely based on the current value of flight variables
drone.move(5)                 # Move 5 seconds based on the current value of flight variables
drone.move(0, 0, 30, 30)      # Move up(throttle) and turn left(yaw) indefinitely
drone.move(5, 0, 0, 50, 50)   # Move up(throttle) and turn left(yaw) for 5 seconds

drone.land()
drone.close()
```
<hr/>

### set_pitch()

#### Description
This is a setter function that allows you to set the pitch variable.

#### Syntax
```set_pitch(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the pitch variable. The number represents the direction and power of the output for that flight motion variable. Negative pitch is backwards, positive pitch is forwards.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

# Drone goes right for 1 second with 50 power
drone.set_pitch(50)
drone.move(1)

drone.land()
drone.close()
```
<hr/>

### set_roll()

#### Description
This is a setter function that allows you to set the roll variable.

#### Syntax
```set_roll(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the roll variable. The number represents the direction and power of the output for that flight motion variable. Negative roll is left, positive roll is right.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

# Drone goes right for 1 second with 50 power
drone.set_roll(50)
drone.move(1)

drone.land()
drone.close()
```
<hr/>

### set_throttle()

#### Description
This is a setter function that allows you to set the throttle variable.

#### Syntax
```set_throttle(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the throttle variable. The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

# Drone goes up for 1 second with 50 power
drone.set_throttle(50)
drone.move(1)

drone.land()
drone.close()
```
<hr/>

### set_yaw()

#### Description
This is a setter function that allows you to set the yaw variable.

#### Syntax
```set_yaw(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the yaw variable. The number represents the direction and power of the output for that flight motion variable. Negative yaw turns left, positive yaw turns right.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()

# Drone turns right for 1 second with 50 power
drone.set_yaw(50)
drone.move(1)

drone.land()
drone.close()
```
<hr className="section_hr"/>

## LED

### arm_color()

#### Description
This function sets the LED color of the arms using RGB values and their brightness with value from 1 - 100.

#### Syntax
```arm_color(color, brightness)```<br/>
```arm_color(red, green, blue, brightness)```

#### Parameters
***enum* Color:** an enum, which can be set using predefined colors out of the list below in "Example Code" under "LED Color Options"<br/>
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue:** int value from 0 to 255<br/>
**brightness:** in value from 0 to 100, which represents the brightness of the light

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Color

drone = CoDrone.CoDrone()
drone.pair()

drone.arm_color(Color.Red, 100)        # set color to red using Color
drone.arm_color(255, 0, 0, 100)        # set color to red using RGB
drone.close()
```

##### LED Color Options
```LED Color Options
    AliceBlue, AntiqueWhite, Aqua,
    Aquamarine, Azure, Beige,
    Bisque, Black, BlanchedAlmond,
    Blue, BlueViolet, Brown,
    BurlyWood, CadetBlue, Chartreuse,
    Chocolate, Coral, CornflowerBlue,
    Cornsilk, Crimson, Cyan,
    DarkBlue, DarkCyan, DarkGoldenRod,
    DarkGray, DarkGreen, DarkKhaki,
    DarkMagenta, DarkOliveGreen, DarkOrange,
    DarkOrchid, DarkRed, DarkSalmon,
    DarkSeaGreen, DarkSlateBlue, DarkSlateGray,
    DarkTurquoise, DarkViolet, DeepPink,
    DeepSkyBlue, DimGray, DodgerBlue,
    FireBrick, FloralWhite, ForestGreen,
    Fuchsia, Gainsboro, GhostWhite,
    Gold, GoldenRod, Gray,
    Green, GreenYellow, HoneyDew,
    HotPink, IndianRed, Indigo,
    Ivory, Khaki, Lavender,
    LavenderBlush, LawnGreen, LemonChiffon,
    LightBlue, LightCoral, LightCyan,
    LightGoldenRodYellow, LightGray, LightGreen,
    LightPink, LightSalmon, LightSeaGreen,
    LightSkyBlue, LightSlateGray, LightSteelBlue,
    LightYellow, Lime, LimeGreen,
    Linen, Magenta, Maroon,
    MediumAquaMarine, MediumBlue, MediumOrchid,
    MediumPurple, MediumSeaGreen, MediumSlateBlue,
    MediumSpringGreen, MediumTurquoise, MediumVioletRed,
    MidnightBlue, MintCream, MistyRose,
    Moccasin, NavajoWhite, Navy,
    OldLace, Olive, OliveDrab,
    Orange, OrangeRed, Orchid,
    PaleGoldenRod, PaleGreen, PaleTurquoise,
    PaleVioletRed, PapayaWhip, PeachPuff,
    Peru, Pink, Plum,
    PowderBlue, Purple, RebeccaPurple,
    Red, RosyBrown, RoyalBlue,
    SaddleBrown, Salmon, SandyBrown,
    SeaGreen, SeaShell, Sienna,
    Silver, SkyBlue, SlateBlue,
    SlateGray, Snow, SpringGreen,
    SteelBlue, Tan, Teal,
    Thistle, Tomato, Turquoise,
    Violet, Wheat, White,
    WhiteSmoke, Yellow, YellowGreen,
    EndOfColors
```
<hr/>

### arm_default_color()

#### Description
This function sets the default LED color of the eyes as well as the mode, so it will remain that color even after powering off and back on. The colors set are using RGB values.

#### Syntax
```arm_default_color(red, green, blue, brightness)```

#### Parameters
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue:** int value from 0 to 255<br/>
**brightness:** in value from 0 to 100, which represents the brightness of the light

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Mode

drone = CoDrone.CoDrone()
drone.pair()

# set default arm color to an RGB of (0, 0, 100) with full brightness
drone.arm_default_color(0, 0, 100, 100)
drone.close()
```
<hr/>

### arm_default_pattern()

#### Description
This function sets the default color of the arm LED lights to flash in a particular pre-set pattern at a given speed, which means the lights will remain in that color and pattern when powered off and back on.

#### Syntax
```arm_default_pattern(color, mode)```<br/>
```arm_default_pattern(color, mode, speed)```<br/>
```arm_default_pattern(red, green, blue, mode)```<br/>
```arm_default_pattern(red, green, blue, mode, speed)```

#### Parameters
***enum* Color:** an enum, which can be set using predefined colors out of the list under <a href="#led-color-options">"LED Color Options"</a><br/>
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue:** int value from 0 to 255<br/>
***enum* Mode:** an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING, PULSE, REVERSE_PULSE<br/>
**speed:** int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Mode

drone = CoDrone.CoDrone()
drone.pair()

# set default arm pattern to RGB (0, 125, 155) and double blink quickly
drone.arm_default_pattern(0, 125, 155, Mode.DOUBLE_BLINK, 10)
drone.close()
```



### arm_off()

#### Description
This function turns off the arm LEDs

#### Syntax
```arm_off()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# turn off the arms
drone.arm_off()
drone.close()
```
<hr/>

### arm_pattern()

#### Description
This function sets the color of the arm LED lights to flash in a particular pre-set pattern at a given speed.

#### Syntax
```arm_pattern(color, mode)```<br/>
```arm_pattern(color, mode, speed)```<br/>
```arm_pattern(red, green, blue, mode)```<br/>
```arm_pattern(red, green, blue, mode, speed)```

#### Parameters
***enum* Color:** an enum, which can be set using predefined colors out of the list under <a href="#led-color-options">"LED Color Options"</a><br/>
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue: int value from 0 to 255<br/>
***enum* Mode:** an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING, PULSE, REVERSE_PULSE<br/>
**speed:** int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest.

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Mode, Color

drone = CoDrone.CoDrone()
drone.pair()

drone.arm_pattern(Color.Red, Mode.DOUBLE_BLINK, 200)        # Set arms to double blink red slowly using Color
drone.arm_pattern(0, 100, 0, Mode.PULSE, 200)               # Set arms to pulse green slowly using RGB
drone.close()
```
<hr/>

### arm_strobe()

#### Description
This function makes the arms to strobe in various colors

#### Syntax
```arm_strobe()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# strobe the arms
drone.arm_strobe()
drone.close()
```
<hr/>

### eye_color()

#### Description
This function sets the LED color of the arms using RGB values and their brightness with value a from 1 - 100.

#### Syntax
```eye_color(color, brightness)```<br/>
```eye_color(red, green, blue, brightness)```

#### Parameters
***enum* Color:** an enum, which can be set using predefined colors out of the list under <a href="#led-color-options">"LED Color Options"</a><br/>
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue:** int value from 0 to 255<br/>
**brightness:** in value from 0 to 100, which represents the brightness of the light

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Color

drone = CoDrone.CoDrone()
drone.pair()

drone.eye_color(Color.Red, 100)         # set color to red using Color
drone.eye_color(255, 0, 0, 100)         # set color to red using RGB
drone.close()
```
<hr/>

### eye_default_color()

#### Description
This function sets the default LED color of the eyes using RGB values and their brightness with a value from 1 - 100. This means the color will remain, even after the CoDrone has been powered off and back on.

#### Syntax
```eye_default_color(red, green, blue, brightness)```

#### Parameters
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue:** int value from 0 to 255<br/>
**brightness:** in value from 0 to 100, which represents the brightness of the light

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Mode

drone = CoDrone.CoDrone()
drone.pair()

# set default eye color to an RGB of (0, 0, 100) with full brightness
drone.eye_default_color(0, 0, 100, 100)
drone.close()
```
<hr/>

### eye_default_pattern()

#### Description
This function sets the default color of the eyes LED lights to flash in a particular pre-set pattern at a given speed, which means the lights will remain in that color and pattern when powered off and back on.

#### Syntax
```eye_default_pattern(color, mode)```<br/>
```eye_default_pattern(color, mode, speed)```<br/>
```eye_default_pattern(red, green, blue, mode)```<br/>
```eye_default_pattern(red, green, blue, mode, speed)```

#### Parameters
***enum* Color:** an enum, which can be set using predefined colors out of the list under <a href="#led-color-options">"LED Color Options"</a><br/>
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue:** int value from 0 to 255<br/>
***enum* Mode:** an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING<br/>
**speed:** int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Mode

drone = CoDrone.CoDrone()
drone.pair()

# set default eye pattern to RGB (0, 125, 155) and double blink slowly
drone.eye_default_pattern(0, 125, 155, Mode.DOUBLE_BLINK, 200)
drone.close()
```
<hr/>

### eye_off()

#### Description
This function turns off the eye LEDs

#### Syntax
```eye_off()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# turn off the eyes
drone.eye_off()
drone.close()
```
<hr/>

### eye_pattern()

#### Description
This function sets the color of the eye LED lights to flash in a particular pre-set pattern at a given speed.

#### Syntax
```eye_pattern(color, mode)```  
```eye_pattern(color, mode, speed)```  
```eye_pattern(red, green, blue, mode)```  
```eye_pattern(red, green, blue, mode, speed)```  

#### Parameters
***enum* Color:** an enum, which can be set using predefined colors out of the list under <a href="#led-color-options">"LED Color Options"</a><br/>
**red:** int value from 0 to 255<br/>
**green:** int value from 0 to 255<br/>
**blue:** int value from 0 to 255<br/>
***enum* Mode:** an enum, which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING<br/>
**speed:** int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Color, Mode

drone = CoDrone.CoDrone()
drone.pair()

drone.eye_pattern(Color.Red, Mode.BLINK, 1)            # Set eyes to blink red slowly using Color
drone.eye_pattern(255, 0, 0, Mode.DIMMING, 200)        # Set eyes to dim red slowly using RGB
drone.close()
```
<hr/>

### eye_strobe()

#### Description
This function makes the arms to strobe in various colors

#### Syntax
```eye_strobe()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# strobe the eyes
drone.eye_strobe()
drone.close()
```
<hr/>

### reset_default_led()

#### Description
This function sets the LED color of the eyes and arms back to red and sets the mode to SOLID, which is the original default color.

#### Syntax
```reset_default_led()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.reset_default_led()
drone.close()
```
<hr className="section_hr"/>

## Status Checker

### is_flying()

#### Description
This function checks whether the drone is flying and returns a boolean

#### Syntax
```is_flying()```

#### Parameters
None

#### Returns
**Boolean:** Returns True/False whether the drone is flying

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()
#land if flying.
if drone.is_flying():
    drone.land()
drone.close()
```
<hr/>

### is_ready_to_fly()

#### Description
This function checks whether the drone is ready to fly by returning a boolean.<br/>The drone is ready to fly if it is oriented right-side up, and not flying.

#### Syntax
```is_ready_to_fly()```

#### Parameters
None

#### Returns
**Boolean:** Returns True/False whether the drone is ready to fly.

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

#land if flying.
if drone.is_ready_to_fly():
    drone.takeoff()
drone.land()
drone.close()
```
<br/>

### is_upside_down()

#### Description
This function checks whether the drone is upside-down and returns a boolean

#### Syntax
```is_upside_down()```

#### Parameters
None

#### Returns
**Boolean:** Returns True/False whether the drone is upside-down

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# takeoff when drone isn’t upside down
if not drone.is_upside_down():
    drone.takeoff()
drone.land()
drone.close()
```
<hr/>

### on_low_battery()

#### Description
Add callback function when CoDrone battery percentage is lower than 50%

#### Syntax
```on_low_battery(function)```

#### Parameters
**function:** a callback function when battery is lower than 50%

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Mode

# define function for change drone's arm LED green
def set_arm_green():
    drone.set_arm_LED(0,255,0, Mode.SOLID)

drone = CoDrone.CoDrone()
drone.pair()

#set eventhandler to run self-defined "set_arm_green" function
drone.on_low_battery(set_arm_green)
drone.close()
```
<hr className="section_hr"/>

## Sensors

### get_accelerometer()

#### Description
This function gets the accelerometer sensor data, which returns x, y, and z.

#### Syntax
```get_accelerometer()```

#### Parameters
None

#### Returns
***class* AccelData:** Returns an acceleration class with x-, y-, and z-acceleration levels 

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the acceleration of drone
acceleration = drone.get_accelerometer()
print(acceleration.X, acceleration.Y, acceleration.Z)
drone.close()
```
<hr/>

### get_angular_speed()

#### Description
This function gets the data from the gyrometer sensor for the roll, pitch, and yaw angular speed.

#### Syntax
```get_angular_speed()```

#### Parameters
None

#### Returns
***class* GyroAngleData:** Returns a class with angular speed data

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the angular speed of drone
gyrodata = drone.get_angular_speed()
print(gyrodata.ROLL, gyrodata.PITCH, gyrodata.YAW)
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
**percentage:** The battery’s percentage as an integer from 0 - 100.

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()
drone.takeoff()

# stop the drone if battery is lower than 10 percent.
battery = drone.get_battery_percentage()
if battery < 10:
    drone.emergency_stop()
drone.land()
drone.close()
```
<hr/>

### get_battery_voltage()

#### Description
This function gets the voltage of the battery.

#### Syntax
```get_battery_voltage()```

#### Parameters
None

#### Returns
**voltage:** The voltage of the battery as an a float

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the battery voltage of drone.
battery = drone.get_battery_voltage()
print(battery)
drone.close()
```
<hr/>

### get_drone_temp()

#### Description
This is a getter function gets the data from the drone’s temperature sensor. Importantly, it reads the drone’s temperature, not the air around it.

#### Syntax
```get_drone_temp()```

#### Parameters
None

#### Returns
**temperature:** The temperature in Celsius as an integer.

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

## print the temperature of drone
temperature = drone.get_drone_temp()
print(temperature)
drone.close()
```
<hr/>

### get_gyro_angles()

#### Description
This function gets the data from the gyrometer sensor to determine the roll, pitch, and yaw as angles.

#### Syntax
```get_gyro_angles()```

#### Parameters
None

#### Returns
***class* AngleData:** Returns a class that contains angle data 
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the angles of drone
GyroAngles = drone.get_gyro_angles()
print(GyroAngles.ROLL, GyroAngles.PITCH, GyroAngles.YAW)
drone.close()
```
#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the angles of drone
GyroAngles = drone.get_gyro_angles()
print(GyroAngles.ROLL, GyroAngles.PITCH, GyroAngles.YAW)
drone.close()
```
<hr/>

### get_height()

#### Description
This is a getter function gets the current height of the drone from the object directly below its IR sensor. 

#### Syntax
```get_height()```

#### Parameters
None

#### Returns
**height:** The current height above the object directly below the drone’s IR height sensor as an int (mm).

#### Example Code
```python
#Python code
import CoDrone
from CoDrone import Direction
import time

drone = CoDrone.CoDrone()
drone.pair()

drone.takeoff()

# fly between 500mm and 1000mm
for i in range(200):
    height = drone.get_height()
    if height > 1000:
        drone.go(Direction.DOWN)
    elif height < 500:
        drone.go(Direction.UP)
    time.sleep(0.1)

drone.land()
drone.close()
```
<hr/>

### get_opt_flow_position()

#### Description
This function gets the x and y coordinates from the optical flow sensor. Keep in mind, the positioning does not take rotation into account.

#### Syntax
```get_opt_flow_position()```

#### Parameters
None

#### Returns
***class* OptFlowData:** it returns a class in Python indicating optical flow position

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the optical flow position x,y value
position = drone.get_opt_flow_position()
print(position.X, position.Y)
drone.close()
```
<hr/>

### get_pressure()

#### Description
This is a getter function gets the data from the barometer sensor.

#### Syntax
```getPressure()```

#### Parameters
None

#### Returns
**pressure:** The barometer’s air pressure in millibars at (0.13 resolution).

#### Example Code
```python
Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# print the pressure
pressure = drone.get_pressure()
print(pressure)
drone.close()
```
<hr/>

### get_state()

#### Description
This function gets the state of the drone, as in whether it’s: ready, takeoff, flight, flip, stop, landing, reverse, accident, error.

#### Syntax
```get_state()```

#### Parameters
None

#### Returns
***string* state**: Returns a string indicating a state (READY, TAKE_OFF, FLIGHT, FLIP, STOP, LANDING, REVERSE, ACCIDENT, ERROR)

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

# take off the drone if state is not on flight
state = drone.get_state()
if state != "FLIGHT":
    drone.takeoff()

drone.hover(3)
drone.land()
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
***class* TrimData:** returns a class indicating trim levels

#### Example Code
```python
#Python code
import CoDrone

drone = CoDrone.CoDrone()
drone.pair()

#print current drone's trim value
trim = drone.get_trim()
print(trim.ROLL, trim.PITCH, trim.YAW, trim.THROTTLE)
drone.close()
```
<hr/>

### set_plot_sensor()/draw_plot_sensor()

#### Description
This function is used for drawing sensor data.  The function should be used in pairs, with set_plot_sensor() starting the recording process, and draw_plot_sensor() doing the actual drawing process.  You can plot the height sensor, the temperature sensor, the gyro angles, gyro raw sensor values, the image flow sensor, and the accelerometer sensor.

#### Syntax
```set_plot_sensor(sensor)/draw_plot_sensor()```

#### Parameters
***class* PlotType:** PlotType.height, PlotType.angle, PlotType.temperature, PlotType.gyro, PlotType.image_flow, PlotType.accel

#### Returns
None

#### Example Code
```python
#Python code
import CoDrone
from CoDrone.protocol import PlotType
import time

drone= CoDrone.CoDrone()
drone.pair(drone.Nearest)

# set up sensor for plotting. It will grab sensor data every second
drone.set_plot_sensor(PlotType.height)
# drone.set_plot_sensor(PlotType.height, PlotType.angle, PlotType.temperature, PlotType.gyro, PlotType.image_flow, PlotType.accel)
# PlotType.angle, PlotType.temperature, PlotType.gyro, PlotType.image_flow, PlotType.accel
drone.takeoff()
time.sleep(5)
drone.land()
drone.draw_plot_sensor()
drone.close()
```
