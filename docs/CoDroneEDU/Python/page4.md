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
version 1.9 ([Changelog](/docs/CoDroneEDU/Python/Python-Changelog))
</div>

## Connection

### pair()

#### Syntax
``pair()``    
``pair(portname)``

#### Parameters
**portname:** A string containing the port name or number.

#### Description
This function connects your controller with the program. You can also set the specific USB port name.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair() # pair automatically, may not always work
# drone.pair(port_name = 'COM3')    # pair with a specific port

drone.takeoff()
drone.hover(1)
drone.land()
drone.close()
```

<hr className="section_hr"/>


## Flight Commands (Start / Stop)

### take_off()

#### Syntax
``takeoff()``    


#### Parameters
None

#### Description
This function makes the drone takeoff and hover. The drone will always hover for 1 second in order to stabilize before it executes the next command.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
    
drone.hover(3)
drone.land()
drone.close()
```

<hr/>

### land()

#### Syntax
``land()``    


#### Parameters
None

#### Description
This function makes the drone stop all commands, hover, and make a soft landing where it is. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and immediately land, it is recommended to run a ``hover()`` or ``time.sleep()`` in between the ``takeoff()`` and ``land()``, because the CoDrone EDU may miss the land command otherwise.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.hover(3) # include a hover() or time.sleep() to prevent land() from skipping
drone.land()
drone.close()
```

<hr/>

### emergency_stop()

#### Syntax
``emergency_stop()``    


#### Parameters
None

#### Description
This function immediately stops all commands and motors, so the drone will stop flying immediately. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and emergency stop, it is recommended to run a ``hover()`` or ``time.sleep()`` in between the ``takeoff()`` and ``emergency_stop()``, because the CoDrone EDU might miss the emergency_stop() command.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.hover(3) #Recommended to have a hover() or time.sleep(1) before landing
drone.emergency_stop()
drone.close()
```

<hr/>

### set_trim()

#### Syntax
``set_trim(roll, pitch)``    


#### Parameters
**roll:** the power of the roll, which is an int from -100 to 100  
**pitch:** the power of the pitch, which is an int from -100 to 100

#### Description
You can set the **roll** and **pitch** trim of the drone in case your drone is drifting. For example, if the drone is drifting to its right, you may want to set the roll to a small negative value. This trim will remain saved, even after powering off until you've changed the trim either programmatically, or done a reset with the remote. **NOTE:** If you're setting the trim right before a takeoff, make sure to add a ``time.sleep(1)`` before the ``takeoff()``, otherwise the takeoff commmand might be skipped.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

drone.set_trim(-5, 0) # example: drone is drifting right, so trim to roll left a little bit

time.sleep(1) # Add a time.sleep(1) before takeoff if you're planning to set the trim before takeoff
drone.takeoff()
drone.hover(3)
drone.land()
drone.close()
```

<hr/>

### reset_trim()

#### Syntax
``reset_trim()``    


#### Parameters
None

#### Description
You can reset the roll and pitch trim of the drone in case your drone is drifting. This function will reset the roll and pitch trim values back to zero.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
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

### reset_sensor()

#### Syntax
``reset_sensor()``    


#### Parameters
None

#### Description
This function will reset the gyro angles back to zero for roll, pitch, and yaw. **NOTE:** If you're resetting right before a takeoff, make sure to add a ``time.sleep(1)`` before the ``takeoff()``, otherwise the take off might be skipped.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
print("Before")
print("X angle:", drone.get_x_angle())
print("Y angle:", drone.get_y_angle())
print("Z angle:", drone.get_z_angle())
drone.takeoff()
drone.set_yaw(50)
drone.move(1)
drone.land()
print("After")
print("X angle:", drone.get_x_angle())
print("Y angle:", drone.get_y_angle())
print("Z angle:", drone.get_z_angle())
drone.reset_sensor() 
print("Reset")
print("X angle:", drone.get_x_angle())
print("Y angle:", drone.get_y_angle())
print("Z angle:", drone.get_z_angle())
drone.close()
```

<hr/>

### stop_motors()

#### Syntax
``stop_motors()``    


#### Parameters
None

#### Description
This function immediately stops all commands and motors, so the drone will stop flying immediately. The function will also reset the flight motion variables to 0. **NOTE:** If you want to take off and stop_motors, it is recommended to run a ``hover()`` or ``time.sleep()`` in between the ``takeoff()`` and ``stop_motors()``, because the CoDrone EDU might miss the ``stop_motors()`` command.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.hover(3) #Recommended to have a hover() or time.sleep(1) before landing
drone.stop_motors()
drone.close()
```

<hr className="section_hr"/>

## Flight Commands (Movement)

### avoid_wall()

#### Syntax
``avoid_wall()``    
``avoid_wall(timeout)``    
``avoid_wall(distance)``    
``avoid_wall(timeout, distance)``

#### Parameters
**timeout:** timeout is an optional paramaeter that is the duration in seconds that the function will run. the default value is 2    
**distance:** distance is an optional parameter that is the distance in centimeters the drone will stop at in front of an object. the default value is 70

#### Description
A looped method that makes the drone fly forward until it reaches a desired distance based on the front range sensor. The range of front sensor is from 0cm-100cm

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# fly forward until a wall is found 50 cm away. run this loop for 10 seconds.
drone.avoid_wall(10, 50)
drone.land()
drone.close()
```

<hr/>

### circle()

#### Syntax
``circle()``    
``circle(speed, direction)``


#### Parameters
**speed:** optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 75.    
**direction:** optional parameter that determines the direction of the circle. 1 is right, -1 is left. default value is 1.

#### Description
Flies the drone in the shape of a circle.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# default circle parameters (75, 1)
drone.circle()
drone.land()
drone.close()
```

<hr/>

### detect_wall()

#### Syntax
``detect_wall()``    
``detect_wall(distance)``  


#### Parameters
**distance:** An optional parameter that is the threshold in centimeters that will return True. The default value is 50

#### Description
Returns True when a distance below the threshold is reached. The sensor range is up to 1.5 meters (150cm)

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# if a wall is detected in less than 500mm true will be returned.
if drone.detect_wall():
    print("wall detected!")
else:
    print("no wall detected!")

drone.land()
drone.close()
```

<hr/>

### flip()

#### Syntax
``flip()``     
``flip(direction)``  


#### Parameters
**direction:** optional parameter that is the direction the drone will flip. default is "back"

#### Description
This functions makes the drone flip backward, forward, right, or left. Make sure your battery percentage is over 50% for the flip to execute.

#### Returns
None

#### Example Code
Add a hover or delay after the flip if you need to stabilize before your next command. The drone takes 3-4 seconds after a flip before it can do another flight command.
```python
#Python code
import time
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()

drone.hover(3)
drone.flip("back")  # send flip command
time.sleep(4)  # wait for flip to complete

drone.set_pitch(30) # move forward for 1 second
drone.move(1)

drone.set_pitch(-30) # move backward for 1 second
drone.move(1)

drone.land()

drone.close()
```

<hr/>

### hover()

#### Syntax
``hover(duration)``    


#### Parameters
**duration:** Duration of the hovering in seconds

#### Description
This function makes the drone hover for a given amount of time. If given no parameters, it will hover indefinitely until given a another command.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.hover(3)
drone.land()
drone.close()
```

<hr/>

### keep_distance()

#### Syntax
``keep_distance()``   
``keep_distance(timeout)``  
``keep_distance(distance)``  
``keep_distance(timeout, distance)``


#### Parameters
**timeout:** the duration in seconds that the function will execute. The default value is 2 seconds.
**distance:** the distance in centimeters the drone will stop and maintain distance in front of an object. The default value is 50 centimeters.

#### Description
A looped method that makes the drone fly forward until it reaches a desired distance. Once the desired distance in reached the drone will maintain that distance. The sensor range is up to 150 cm.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# maintain a distance of 60cm from an object once detected for 10 seconds
drone.keep_distance(10, 60)
drone.land()
drone.close()
```

<hr/>

### move()

#### Syntax
``move(duration)``    


#### Parameters
**duration:** Duration of the movement

#### Description
The move command will move the drone based on the set flight variables (set_pitch, set_roll, etc). If given a parameter the move command will execute the movement for the given amount of seconds. If given no parameter then the drone will execute the move command indefinitley. You must ``takeoff()`` first to use a ``move()`` function.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# Drone goes up for 1 second with 50 power
drone.set_pitch(50)
drone.move(1) # move command executes the movement for 1 second
drone.land()
drone.close()
```

<hr/>

### print_move_values()

#### Syntax
``print_move_values()``    


#### Parameters
None

#### Description
Prints the current values of roll, pitch, yaw, and throttle flight variables.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.set_pitch(50)
drone.set_roll(50)
drone.print_move_values() # will print pitch and roll at 50 and throttle and yaw at 0
drone.land()
drone.close()
```

<hr/>

### reset_move()

#### Syntax
``reset_move()``  
``reset_move(attempts)``    


#### Parameters
**attempts:** Optional parameter that sends the reset_move command multiple times.

#### Description
The reset_move command will reset the values of roll, pitch, yaw, and throttle to 0.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.set_pitch(50)
drone.set_roll(50)
drone.reset_move() # reset the pitch and roll to 0.
drone.land()
drone.close()
```

<hr/>

### sendControl()

#### Syntax
``sendControl(roll, pitch, yaw, throttle)``    


#### Parameters
**roll:** An int from -100 to 100 that sets the roll variable. negative is left, positive is right  
**pitch:** An int from -100 to 100 that sets the pitch variable. negative is backwards, positive is forwards  
**yaw:** An int from -100 to 100 that sets the yaw variable. negative is left, positive is right  
**throttle:** An int from -100 to 100 that sets the throttle variable. negative is down, positive is up 

#### Description
Send roll, pitch, yaw, and throttle values to the drone.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.sendControl(0, 30, 0, 0) # setting pitch to 30
time.sleep(1) # wait for 1 second while the drone is moving forward
drone.land()
drone.close()
```

<hr/>

### sendControlWhile()

#### Syntax
``sendControlWhile(roll, pitch, yaw, throttle, duration)``    


#### Parameters
**roll:** An int from -100 to 100 that sets the roll variable. negative is left, positive is right  
**pitch:** An int from -100 to 100 that sets the pitch variable. negative is backwards, positive is forwards  
**yaw:** An int from -100 to 100 that sets the yaw variable. negative is left, positive is right  
**throttle:** An int from -100 to 100 that sets the throttle variable. negative is down, positive is up   
**duration:** A duration in milliseconds  

#### Description
Send roll, pitch, yaw, and throttle values to the drone continously for the given duration in milliseconds

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.sendControlWhile(0, 30, 0, 0,1000)  # set pitch to 30 and move for 1000 ms (1 second)
drone.land()
drone.close()
```

<hr/>

### set_pitch()

#### Syntax
``set_pitch(power)``    


#### Parameters
**power:** An int from -100 to 100 that sets the pitch variable. The number represents the direction and power of the output for that flight motion variable. Negative pitch is backwards, positive pitch is forwards.

#### Description
This is a setter function that allows you to set the pitch variable. Once you set pitch, you have to use move() to actually execute the movement. The pitch variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to pitch again.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# Drone goes forward for 1 second with 50 power
drone.set_pitch(50)
drone.move(1) # move command executes the movement for 1 second
drone.land()
drone.close()
```

<hr/>

### set_roll()

#### Syntax
``set_roll(power)``    


#### Parameters
**power:** An int from -100 to 100 that sets the roll variable. The number represents the direction and power of the output for that flight motion variable. Negative roll is left, positive roll is right.

#### Description
This is a setter function that allows you to set the roll variable. Once you set roll, you have to use ``move()`` to actually execute the movement. The roll variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to roll again.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# Drone goes right for 1 second with 50 power
drone.set_roll(50)
drone.move(1) # move command executes the movement for 1 second
drone.land()
drone.close()
```

<hr/>

### set_throttle()

#### Syntax
``set_throttle(power)``    


#### Parameters
**power:** An int from -100 to 100 that sets the throttle variable. The number represents the direction and power of the output for that flight motion variable. Negative throttle is down, positive throttle is up.

#### Description
This is a setter function that allows you to set the throttle variable. Once you set throttle, you have to use move() to actually execute the movement. The throttle variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to throttle again.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# Drone goes up for 1 second with 50 power
drone.set_throttle(50)
drone.move(1) # move command executes the movement for 1 second
drone.land()
drone.close()
```

<hr/>

### set_yaw()

#### Syntax
``set_yaw(power)``    


#### Parameters
**power:** An int from -100 to 100 that sets the yaw variable. The number represents the direction and power of the output for that flight motion variable. Negative yaw is left, positive yaw is right.

#### Description
This is a setter function that allows you to set the yaw variable. Once you set yaw, you have to use ``move()``to actually execute the movement. The yaw variable will remain what you last set it until the end of the flight sequence, so you will have to set it back to 0 if you don't want the drone to yaw again.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# Drone turns right for 1 second with 50 power
drone.set_yaw(50)
drone.move(1) # move command executes the movement for 1 second
drone.land()
drone.close()
```

<hr/>

### spiral()

#### Syntax
``spiral()``  
``spiral(speed, seconds, direction)``    


#### Parameters
**speed:** optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 50.     
**seconds:** optional parameter that is the duration in seconds the drone flies in a downward spiral. default value is 5.   
**direction:** optional parameter that determines the direction of the spiral. 1 is right, -1 is left. default value is 1.    

#### Description
Flies the drone in the shape of a downward spiral.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# default spiral parameters (50, 5, 1)
drone.spiral()
drone.land()
drone.close()
```

<hr/>

### square()

#### Syntax
``square()``  
``square(speed, seconds, direction)``

#### Parameters
**speed:** optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 60.   
**seconds:** optional parameter that is the duration in seconds the drone flies for each side of the square. default value is 1.    
**direction:** optional parameter that determines the direction of the square. 1 is right, -1 is left. default value is 1.    

#### Description
Flies the drone in the shape of a square.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# default square parameters (60, 1, 1)
drone.square()
drone.land()
drone.close()
```

<hr/>

### sway()

#### Syntax
``sway()``    
``sway(speed, seconds, direction)``


#### Parameters
**speed:** optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 30.   
**seconds:** optional parameter that is the duration in seconds the drone will fly in each "sway" motion. default value is 2.    
**direction:** optional parameter that determines the direction of the sway. 1 is right, -1 is left. default value is 1.    

#### Description
Flies the drone in a swaying motion.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# default sway parameters (30, 2, 1)
drone.sway()
drone.land()
drone.close()
```

<hr/>

### triangle()

#### Syntax
``triangle()``     
``triangle(speed, seconds, direction)``


#### Parameters
**speed:** optional parameter that is the speed the drone will move. integer from 0 - 100. default value is 60.   
**seconds:** optional parameter that is the duration in seconds the drone flies for each side of the triangle. default value is 1.    
**direction:** optional parameter that determines the direction of the triangle. 1 is right, -1 is left. default value is 1.    

#### Description
Flies the drone in the shape of a triangle.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
# default triangle parameters (60, 1, 1)
drone.triangle()
drone.land()
drone.close()
```

<hr/>

### turn_degree()

#### Syntax
``turn_degree(degree, timeout, p_value)``    


#### Parameters
**degree:** integer from -180->180 degrees    
**timeout:** optional parameter that is duration in seconds that drone will try to turn. default value is 3.   
**p_value:** optional parameter that is the gain of the proportional controller, if this increased CDE will turn quicker, the smaller the slower. default value is 10.     

#### Description
Turns right or left with absolute reference frame to drone's initial heading. Positive degrees turn to right and negative degrees turn to the left.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.turn_degree(90) # drone will turn left 90 degrees
drone.land()
drone.close()
```

<hr/>

### turn_left()

#### Syntax
``turn_left()``        
``turn_left(degree)``    
``turn_left(timeout)``    
``turn_left(degree, timeout)``   


#### Parameters
**degree:** optional parameter that turns the drone in the given degree. default value is 90.   
**timeout:** optional parameter that is duration in seconds that drone will try to turn. default value is 3.

#### Description
Turns the drone left using the built in gyroscope. The default degree is 90.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.turn_left() # make a 90 degree left turn.
drone.hover(1) # wait for 1 second in the air
drone.turn_left(30, 3) # make a 30 degree left turn with a 3 second timeout.
drone.land()
drone.close()
```

<hr/>

### turn_right()

#### Syntax
``turn_right()``     
``turn_right(degree)``      
``turn_right(timeout)``    
``turn_right(degree, timeout)``   


#### Parameters
**degree:** optional parameter that turns the drone in the given degree. default value is 90.   
**timeout:** optional parameter that is duration in seconds that drone will try to turn. default value is 3. 

#### Description
Turns the drone right using the built in gyroscope. The default degree is 90.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.turn_right() # make a 90 degree right turn.
drone.hover(1) # wait for 1 second in the air
drone.turn_right(30, 3) # make a 30 degree right turn with a 3 second timeout.
drone.land()
drone.close()
```

<hr/>

### go()

#### Syntax
``go(roll, pitch, yaw, throttle, duration)``    


#### Parameters
**roll:** roll power. int from -100-100   
**pitch:** pitch power. int from -100-100   
**yaw:** yaw power. int from -100-100   
**throttle:** throttle power. int from -100-100   
**duration:** Duration of the movement in seconds   

#### Description
Sends roll, pitch, yaw, throttle values continuously to the drone for duration (seconds)

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.go(50, 50, 0, 0, 5) # Drone flies diagonally forward and right for 5 seconds
drone.land()
drone.close()
```

<hr/>

### move_forward()

#### Syntax
``move_forward(distance)``    
``move_forward(distance, unit, speed)``   


#### Parameters
**distance:** the numerical value of the value to move    
**unit:** The unit of measurement for the distance flown. Available units are "cm" (centimeter), "ft" (feet), "in" (inches), "m" (meter).     
**speed:** default 1 meter per second. Max is 2 meters/second     

#### Description
Moves the drone forward for the given distance and unit for that distance.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
drone.takeoff()
drone.move_forward(distance=50, units="cm", speed=1)
time.sleep(3) # make sure to add a delay so the drone has enough time to fly
drone.land()
drone.close()
```

<hr/>

### move_backward()

#### Syntax
``move_backward(distance)``      
``move_backward(distance, unit, speed)``   


#### Parameters
**distance:** the numerical value of the value to move    
**unit:** The unit of measurement for the distance flown. Available units are "cm" (centimeter), "ft" (feet), "in" (inches), "m" (meter).   
**speed:** default 1 meter per second. Max is 2 meters/second   

#### Description
Moves the drone backward for the given distance and unit for that distance.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
drone.takeoff()
drone.move_backward(distance=50, units="cm", speed=1)
time.sleep(3) # make sure to add a delay so the drone has enough time to fly
drone.land()
drone.close()
```

<hr/>

### move_left()

#### Syntax
``move_left(distance)``    
``move_left(distance, unit, speed)``  


#### Parameters
**distance:** the numerical value of the value to move    
**unit:** The unit of measurement for the distance flown. Available units are "cm" (centimeter), "ft" (feet), "in" (inches), "m" (meter).   
**speed:** default 1 meter per second. Max is 2 meters/second

#### Description
Moves the drone left for the given distance and unit for that distance.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
drone.takeoff()
drone.move_left(distance=50, units="cm", speed=1)
time.sleep(3) # make sure to add a delay so the drone has enough time to fly
drone.land()
drone.close()
```

<hr/>

### move_right()

#### Syntax
``move_right(distance)``     
``move_right(distance, unit, speed)`` 


#### Parameters
**distance:** the numerical value of the value to move    
**unit:** The unit of measurement for the distance flown. Available units are "cm" (centimeter), "ft" (feet), "in" (inches), "m" (meter).   
**speed:** default 1 meter per second. Max is 2 meters/second 

#### Description
Moves the drone right for the given distance and unit for that distance.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()
drone.takeoff()
drone.move_right(distance=50, units="cm", speed=1)
time.sleep(3) # make sure to add a delay so the drone has enough time to fly
drone.land()
drone.close()
```

<hr/>

### send_absolute_position()

#### Syntax
``send_absolute_position(positionX, positionY, positionZ, velocity, heading, rotationalVelocity)``    


#### Parameters
**positionX:** Float value from -10 ~ 10 meters. The X position of the drone. Forward is positive. Backwards is negative.   
**positionY:** Float value from -10 ~ 10 meters. The Y position of the drone. Left is positive. Right is negative.    
**positionZ:** Float value from -10 ~ 10 meters. The Z position of the drone. Up is positive. Down is negative.   
**velocity:** Float value from 0.5 ~ 10 meters per second. The movement speed of the drone.   
**heading:** Integer value from -360 - 360 degrees. Positive turns the drone left. Negative turns the drone right.    
**rotationalVelocity:** Integer value from 0 - 360 degrees per second. Left and right rotation speed of the drone.    

#### Description
Sends a movement command to the drone based on its absolute position from its takeoff location. **Note:** A sleep command for the length of the movement may be needed after using this movement command.   
The 'x' position of the drone is forwards and reverse.    
The 'y' position of the drone is left and right.    
The 'z' position of the drone is up and down.   
<img src="/img/CDE/python_docu/topdown_xy.png" width="70%"/>
<br/>
<img src="/img/CDE/python_docu/xyz.jpg"  width="70%"/>

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()

# Sending the drone forward from its takeoff location 0.5 meters moving at 0.5 m/s
drone.send_absolute_position(0.5, 0, 1, 0.5, 0, 0)
time.sleep(1) # Sleep command needed in order for this movement to execute.

# Sending the same command will cause the drone to hover around 
# the same area since this command uses absolute positioning from the takeoff location
drone.send_absolute_position(0.5, 0, 1, 0.5, 0, 0)
time.sleep(1)

drone.land()
```

<hr className="section_hr"/>

## LED

### controller_LED_off()

#### Syntax
``controller_LED_off()``    


#### Parameters
None 

#### Description
Turns off the controller LEDs.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.controller_LED_off()
drone.close()
```

<hr/>

### drone_LED_off()

#### Syntax
``drone_LED_off()``    


#### Parameters
None 

#### Description
Turns off the drone LED.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.drone_LED_off()
drone.close()
```

<hr/>

### set_controller_LED()

#### Syntax
``set_controller_LED(red, green, blue, brightness)``    


#### Parameters
**red:** int value from 0 -255    
**green:** int value from 0 -255    
**blue:** int value from 0 -255   
**brightness:** int value from 0 - 100    

#### Description
This function sets the LED color and brightness of the CoDrone EDU controller's LEDs. This is done by setting RGB values (0 - 255) and brightness level (0 - 100).

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.set_controller_LED(0, 0, 255, 100)
drone.close()
```

<hr/>

### set_drone_LED()

#### Syntax
``set_drone_LED(red, green, blue, brightness)``    


#### Parameters
**red:** int value from 0 -255    
**green:** int value from 0 -255    
**blue:** int value from 0 -255   
**brightness:** int value from 0 - 100    

#### Description
This function sets the LED color and brightness of the CoDrone EDU's LED. This is done by setting RGB values (0 - 255) and brightness level (0 - 100).

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.set_drone_LED(0, 0, 255, 100)
drone.close()
```

<hr className="section_hr"/>

## Status Checkers

### controller_buzzer()

#### Syntax
``controller_buzzer(note, duration)``    


#### Parameters
**note:** Integer frequency in Hz or a Note object
**duration:** Duration of the note in milliseconds

#### Description
Plays a note using the controller's buzzer.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.controller_buzzer(400, 300)
drone.controller_buzzer(600, 300)
drone.close()
```

<hr/>

### drone_buzzer()

#### Syntax
``drone_buzzer(note, duration)``    


#### Parameters
**note:** Integer frequency in Hz or a Note object
**duration:** Duration of the note in milliseconds

#### Description
Plays a note using the drone's buzzer.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.drone_buzzer(400, 300)
drone.drone_buzzer(600, 300)
drone.close()
```

<hr/>

### start_drone_buzzer()

#### Syntax
``start_drone_buzzer(note)``    


#### Parameters
**note:** Integer frequency in Hz or a Note object

#### Description
This function allows the drone buzzer to be played in the background while other commands are given to the drone.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.start_drone_buzzer(500) # starting the buzzer

# these commands run while the buzzer runs in the background
for i in range(5):
    drone.set_drone_LED(255, 0, 0, 100)
    time.sleep(0.5)
    drone.set_drone_LED(0, 255, 0, 100)
    time.sleep(0.5)

drone.stop_drone_buzzer() # stops the buzzer
drone.close()
```

<hr/>

### stop_drone_buzzer()

#### Syntax
``start_drone_buzzer()``    


#### Parameters
None

#### Description
Stops the drone buzzer if started in the background.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.start_drone_buzzer(500) # starting the buzzer

# these commands run while the buzzer runs in the background
for i in range(5):
    drone.set_drone_LED(255, 0, 0, 100)
    time.sleep(0.5)
    drone.set_drone_LED(0, 255, 0, 100)
    time.sleep(0.5)

drone.stop_drone_buzzer() # stops the buzzer
drone.close()
```

<hr/>

### start_controller_buzzer()

#### Syntax
``start_controller_buzzer(note)``    


#### Parameters
**note:** Integer frequency in Hz or a Note object

#### Description
This function allows the controller buzzer to be played in the background while other commands are given to the drone.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.start_controller_buzzer(Note.A4) # starting the buzzer

# these commands run while the buzzer runs in the background
for i in range(3):
    drone.set_controller_LED(255, 0, 0, 100)
    time.sleep(0.5)
    drone.set_controller_LED(0, 255, 0, 100)
    time.sleep(0.5)

drone.stop_controller_buzzer() # stops the buzzer
drone.close()
```

<hr/>

### stop_controller_buzzer()

#### Syntax
``stop_controller_buzzer(note)``    


#### Parameters
**note:** Integer frequency in Hz or a Note object

#### Description
This function allows the controller buzzer to be played in the background while other commands are given to the drone.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.start_controller_buzzer(440) # starting the buzzer

# these commands run while the buzzer runs in the background
for i in range(3):
    drone.set_controller_LED(255, 0, 0, 100)
    time.sleep(0.5)
    drone.set_controller_LED(0, 255, 0, 100)
    time.sleep(0.5)

drone.stop_controller_buzzer() # stops the buzzer
drone.close()
```

<hr className="section_hr"/>

## Sensors

### get_battery()

#### Syntax
``get_battery()``    


#### Parameters
None

#### Description
This function returns the current battery level percentage of the drone.

#### Returns
The current battery percentage of the drone's battery.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
battery = drone.get_battery()
print(battery)
drone.close()
```

<hr/>

### get_bottom_range()

#### Syntax
``get_bottom_range()``      
``get_bottom_range(unit="<cm, in, mm, m>)"``    

#### Parameters
**unit:** The unit of measurement that is chosen for the height distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.

#### Description
This is a getter function which returns the current bottom range of the drone. The default unit of measurement is centimeters.
This function uses the bottom range sensor to measure distance from the drone to the surface below the drone.

#### Returns
The current bottom range calculated by the bottom range sensor (cm default).

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(3)
bottom_range = drone.get_bottom_range()
print(bottom_range)
drone.land()
drone.close()
```

<hr/>

### get_temperature()

#### Syntax
``get_temperature()``   
``get_temperature(unit)``   


#### Parameters
**unit:** A string for the unit of temperature of the drone. Available units are "C" (Celcius), "F" (Fahrenheit), and "K" (Kelvin).

#### Description
This is a getter function gets the drone's **temperature** from the barometer.
The sensor reads the drone’s temperature, not the air around it. Default unit is Celcius.

#### Returns
The temperature of the drone in the given unit as a float. Default unit is Celcius.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
temperature = drone.get_temperature()
print(temperature)
drone.close()
```

<hr/>

### get_flight_state()

#### Syntax
``get_flight_state()``    


#### Parameters
None

#### Description
``get_flight_state()`` is a getter function that gets the current flight state of the drone.

#### Returns
The current flight state of the drone.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
print(drone.get_flight_state())
drone.close()
```

<hr/>

### get_flow_x()

#### Syntax
``get_flow_x()``    
``get_flow_x(unit="<cm, in, mm, m>)"``

#### Parameters
**unit:** The unit of measurement that is chosen for the distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.

#### Description
This getter function gets the relative position value calculated by the optical flow sensor from the x direction (forward and reverse).
<img src="/img/CDE/python_docu/topdown_xy.png" height="249px"/>

#### Returns
The relative position value calculated by the optical flow sensor from the x direction. (cm default).

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.set_pitch(50)
drone.move(1)
print(drone.get_flow_x())
drone.land()
drone.close()
```

<hr/>

### get_flow_y()

#### Syntax
``get_flow_y()``    
``get_flow_y(unit="<cm, in, mm, m>)"``

#### Parameters
**unit:** The unit of measurement that is chosen for the distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.

#### Description
This getter function gets the relative position value calculated by the optical flow sensor from the y direction (left and right).
<img src="/img/CDE/python_docu/topdown_xy.png" height="249px"/>

#### Returns
The relative position value calculated by the optical flow sensor from the y direction. (cm default). 

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
drone.set_roll(50)
drone.move(1)
print(drone.get_flow_y())
drone.land()
drone.close()
```

<hr/>

### get_front_range()

#### Syntax
``get_front_range()``     
``get_front_range(unit="<cm, in, mm, m>")``


#### Parameters
**unit:** A string for the unit of measurement that is chosen for the range distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified "cm" is chosen by default.

#### Description
This is a getter function which returns the current **Range** from the front range sensor. The default unit of measurement is centimeters.
This function uses the front range sensor to measure distance from the drone to the surface in front of the drone.

#### Returns
The current range calculated by the front range sensor (cm by default).
-10 or 0 when the sensor returns an error value.
999 when the detected object is out of range (1.5 meters) or the sensor timed out.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(3)
distance = drone.get_front_range()
print(distance)
drone.land()
drone.close()
```

<hr/>

### get_pos_x()

#### Syntax
``get_pos_x()``   
``get_pos_x(unit="<cm, in, mm, m>)``


#### Parameters
**unit:** The unit of measurement that is chosen for the position distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.

#### Description
Getter function that gets the x position of the drone. (x is forwards and backwards)
<img src="/img/CDE/python_docu/topdown_xy.png" height="249px"/>

#### Returns
The current x position of the drone.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_pos_x())
drone.land()
drone.close()
```

<hr/>

### get_pos_y()

#### Syntax
``get_pos_y()``   
``get_pos_y(unit="<cm, in, mm, m>)``


#### Parameters
**unit:** The unit of measurement that is chosen for the position distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.

#### Description
Getter function that gets the y position of the drone. (y is left and right)
<img src="/img/CDE/python_docu/topdown_xy.png" height="249px"/>

#### Returns
The current y position of the drone.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_pos_y())
drone.land()
drone.close()
```

<hr/>

### get_pos_z()

#### Syntax
``get_pos_z()``   
``get_pos_z(unit="<cm, in, mm, m>)``    


#### Parameters
**unit:** The unit of measurement that is chosen for the position distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.

#### Description
Getter function that gets the z position of the drone. (z is up and down)
<img src="/img/CDE/python_docu/xyz.jpg" height="249px"/>

#### Returns
The current z position of the drone.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_pos_z())
drone.land()
drone.close()
```

<hr/>

### get_position_data()

#### Syntax
``get_position_data()``   
``get_position_data(delay)``


#### Parameters
**delay:** the delay in seconds before the position data is returned. default value is 0.01. 

#### Description
get_position_data is a getter function that retuns a list of position data for the drone.
The 'x' position of the drone is forwards and reverse.
The 'y' position of the drone is left and right.
The 'z' position of the drone is up and down.
<img src="/img/CDE/python_docu/topdown_xy.png" width="70%"/>
<img src="/img/CDE/python_docu/xyz.jpg" width="70%"/>

#### Returns
A list of position data for the drone. The list contains the current time of the running program [0], x position data [1], y position data [2], z position data [3].

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
data = drone.get_position_data()
print(data)
drone.land()
drone.close()
```

<hr/>

### get_pressure()

#### Syntax
``get_pressure()``    


#### Parameters
None

#### Description
This is a getter function that returns the data from the barometer. The function returns a value in the unit Pascals. **Note:** 1atm = 101325 Pa

#### Returns
Float that represents air pressure in Pascals.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# print the pressure
pressure = drone.get_pressure()
print(pressure)
drone.close()
```

<hr/>

### get_trim()

#### Syntax
``get_trim()``    

#### Parameters
None

#### Description
This function gets the current trim values of the drone.

#### Returns
A list of trim data

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# print the pressure
trim  = drone.get_trim()
print(trim)
print(trim[0])
print(trim[1])
drone.close()
```

<hr/>

### get_x_accel()

#### Syntax
``get_x_accel()``    


#### Parameters
None

#### Description
Getter function that gets the x acceleration of the drone. (x is forwards and backwards)
<img src="/img/CDE/python_docu/topdown_xy.png" height="249px"/>

#### Returns
The current x acceleration of the drone.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_x_accel())
drone.land()
drone.close()
```

<hr/>

### get_x_angle()

#### Syntax
``get_x_angle()``    


#### Parameters
None

#### Description
This is a getter function which returns the current X angle from the gyroscope in the drone. This angle is on the "roll" axis.

#### Returns
The current angle in regards to the X direction.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

print(drone.get_x_angle())

drone.close()
```

<hr/>

### get_y_accel()

#### Syntax
``get_y_accel()``    


#### Parameters
None

#### Description
Getter function that gets the y acceleration of the drone. (y is left and right)
<img src="/img/CDE/python_docu/topdown_xy.png" height="249px"/>

#### Returns
The current y acceleration of the drone.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_y_accel())
drone.land()
drone.close()
```

<hr/>

### get_y_angle()

#### Syntax
``get_y_angle()``    


#### Parameters
None

#### Description
This is a getter function which returns the current Y angle from the gyroscope in the drone. This angle is on the "pitch" axis.

#### Returns
The current angle in regards to the Y direction.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

print(drone.get_y_angle())

drone.close()
```

<hr/>

### get_z_accel()

#### Syntax
``get_z_accel()``    


#### Parameters
None 

#### Description
Getter function that gets the z acceleration of the drone. (z is up and down)
<img src="/img/CDE/python_docu/xyz.jpg" height="249px"/>

#### Returns
The current z acceleration of the drone.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.takeoff()
print(drone.get_z_accel())
drone.land()
drone.close()
```

<hr/>

### get_z_angle()

#### Syntax
``get_z_angle()``    


#### Parameters
None

#### Description
This is a getter function which returns the current Z angle from the drone. This is angle is the "yaw" direction.

#### Returns
The current angle in regards to the Z direction.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

print(drone.get_z_angle())

drone.close()
```

<hr/>

### get_height()

#### Syntax
``get_height()``    
``get_height(unit="<cm, in, mm, m>)"``


#### Parameters
**unit:** The unit of measurement that is chosen for the height distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.

#### Description
This is a getter function which returns the current **height** of the drone. The default unit of measurement is centimeters.
This function uses the bottom range sensor to measure distance from the drone to the surface below the drone.

#### Returns
The current range calculated by the bottom range sensor (cm default).
-10 or 0 when the sensor returns an error.
999 when the detected object is out of range (1.5 meters) or the sensor timed out.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.takeoff()
drone.hover(3)
height = drone.get_height()
print(height)
drone.land()
drone.close()
```

<hr/>

### get_back_color()

#### Syntax
``get_back_color()``    


#### Parameters
None

#### Description
``get_back_color()`` is a getter function that calls ``get_color_data()`` but only returns the data for the back color sensor.

#### Returns
Returns the back color sensor data.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
color_data = drone.get_back_color()
print(color_data)
drone.close()
```

<hr/>

### get_color_data()

#### Syntax
``get_color_data()``    


#### Parameters
None

#### Description
Getter function that gets a list of color data from the drone.

#### Returns
Returns a list of color data.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
color_data = drone.get_color_data()
drone.close()
```

<hr/>

### get_front_color()

#### Syntax
``get_front_color()``    


#### Parameters
None

#### Description
``get_front_color()`` is a getter function that calls ``get_color_data()`` but only returns the data for the front color sensor.

#### Returns
Returns the front color sensor data.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
color_data = drone.get_front_color()
print(color_data)
drone.close()
```

<hr/>

### load_classifier()

#### Syntax
``load_classifier()``   
``load_classifier(dataset, show_graph)``   


#### Parameters
**dataset:** An optional parameter to load a custom color set. If no color set is given then the default color set will be used.
**show_graph:** An optional boolean parameter that will show a graph of the color set data. The default value is False.

#### Description
``load_classifier()`` is a function that can load a custom color set onto the CoDrone EDU. If no custom color set is given then the default color set is loaded. There is also an option to show the color set as a graph.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
# This example assumes the "custom_color_data" directory exists
drone.load_classifier("custom_color_data")

color_data = drone.get_color_data()
color = drone.predict_colors(color_data)
print(color)
drone.close()
```

<hr/>

### predict_colors()

#### Syntax
``predict_colors(color_data)``    


#### Parameters
**color_data:** loaded from drone.get_color_data()

#### Description
Predicts what color the color sensors are currently seeing.

#### Returns
A prediction of which color the color sensors are currently seeing

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.load_classifier("color_data_file")
color_data = drone.get_color_data()
color = drone.predict_colors(color_data)
print(color)
drone.close()
```

<hr/>

### get_colors()

#### Syntax
``get_colors()``    


#### Parameters
None

#### Description
``get_colors()`` is a getter function that returns one of the 8 pre-calibrated colors (provided in the color cards).

#### Returns
A list containing the front and back color sensor predictions as strings (Red, Green, Yellow, Blue, Cyan, Magenta, Black, White, Unknown)

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
colors = drone.get_colors()
print(colors)
drone.close
```

<hr/>

### new_color_data()

#### Syntax
``new_color_data(label, data, dataset)``    


#### Parameters
**label:** String label name that will be used for the filename.    
**data:** List of HSV data samples    
**dataset:** String folder name where the text file will be stored.   

#### Description
``new_color_data()`` is a function that creates a new dataset of custom color prediction data.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time
drone = Drone()
drone.pair()
dataset = "color_data"
colors = ["green", "purple", "red", "lightblue", "blue", "yellow", "black", "white"]
for color in colors:
    data = []
    samples = 500
    for i in range(1):
        print("Sample: ", i+1)
        next = input("Press enter to calibrate " + color)
        print("0% ", end="")
        for j in range(samples):
            color_data = drone.get_color_data()[0:9]
            data.append(color_data)
            time.sleep(0.005)
            if j % 10 == 0:
                print("-", end="")
        print(" 100%")
    drone.new_color_data(color, data, dataset)
print("Done calibrating.")
```

<hr/>

### append_color_data() 

#### Syntax
``append_color_data(label, data, dataset)``    

#### Parameters
**label:** String label name that will be used for the filename.    
**data:** List of HSV data samples    
**dataset:** String folder name where the text file will be stored.   

#### Description
``append_color_data()`` is a function that adds onto an existing dataset of custom color prediction data. the dataset parameter must already exist in order to use this function.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time
drone = Drone()
drone.pair()
dataset = "color_data"
colors = ["green", "purple", "red", "lightblue", "blue", "yellow", "black", "white"]
for color in colors:
    data = []
    samples = 500
    for i in range(1):
        print("Sample: ", i+1)
        next = input("Press enter to calibrate " + color)
        print("0% ", end="")
        for j in range(samples):
            color_data = drone.get_color_data()[0:9]
            data.append(color_data)
            time.sleep(0.005)
            if j % 10 == 0:
                print("-", end="")
        print(" 100%")
    drone.append_color_data(color, data, dataset)
print("Done calibrating.")
```

<hr/>

### height_from_pressure()

#### Syntax
``height_from_pressure()``    
``height_from_pressure(b, m)``   


#### Parameters
**b:** slope intercept in pascals (default is set to 0)     
**m:** slope in centimeters/pascals (default is set to 9.34)

#### Description
This function gets the drone's current height in centimeters based on the initial pressure sensor reading. You must call **set_initial_pressure()** to establish a reference point.

#### Returns
Estimated height in centimeters relative to starting position.

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.set_initial_pressure() # Take an initial pressure reading as a reference 

for i in range(300):
    print(drone.height_from_pressure(), " centimeters")
    time.sleep(0.2)
```

<hr/>

### set_initial_pressure()

#### Syntax
``set_initial_pressure()``    


#### Parameters
None

#### Description
This function saves an initial pressure reading to the drone. This function is used in combination with other functions such as ``height_from_pressure()``

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# Here is where we save our initial pressure. Now the 'height_from_pressure()' function has a reference for height
drone.set_initial_pressure()

# The drone will not take off in this example but by moving it up and down manually the resulting height will print
for i in range(300):
    print(drone.height_from_pressure(), " millimeters")
    time.sleep(0.2)
```

<hr/>

### get_angular_speed_x()

#### Syntax
``get_angular_speed_x()``    


#### Parameters
None

#### Description
This function returns the current angular speed in degrees per second around the x-axis ("roll" axis).

#### Returns
**angular speed:** positive or negative integer in degrees per second

#### Example Code
Tilt the drone left and right while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

for i in range(100):
    print(drone.get_angular_speed_x())
    time.sleep(0.05)
drone.close()
```

<hr/>

### get_angular_speed_y()

#### Syntax
``get_angular_speed_y()``    


#### Parameters
None

#### Description
This function returns the current angular speed in degrees per second around the y-axis ("pitch" axis).

#### Returns
**angular speed:** positive or negative integer in degrees per second

#### Example Code
Tilt the drone forward and backward while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

for i in range(100):
    print(drone.get_angular_speed_y())
    time.sleep(0.05)
drone.close()
```

<hr/>

### get_angular_speed_z()

#### Syntax
``get_angular_speed_z()``    


#### Parameters
None

#### Description
This function returns the current angular speed in degrees per second around the z-axis ("yaw" axis).

#### Returns
**angular speed:** positive or negative integer in degrees per second

#### Example Code
Turn the drone left and right on a flat surface while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.pair()

for i in range(100):
    print(drone.get_angular_speed_z())
    time.sleep(0.05)
drone.close()
```

<hr/>

### get_sensor_data()

#### Syntax
``get_sensor_data()``    
``get_sensor_data(delay)``   


#### Parameters
**delay:** The delay in seconds for each sensor request (out of 5). The total delay will be 5x this delay value. The default value is 0.1 seconds.

#### Description
This functions returns a list of 31 values including time stamps and sensor values. It requests 5 distinct lists of data and compiles them into one list. This function returns data more quickly than individual sensor requests. 

#### Returns
A list of length 31.
* data[0] Altitude time stamp
* data[1] Temperature in Celsius
* data[2] Pressure (Pascals)
* data[3] Elevation output from barometer (meters)
* data[4] Height value output from bottom range sensor (meters)
* data[5] Motion data time stamp
* data[6] acceleration X Int16 2 Byte -1568 ~ 1568 (-156.8 ~ 156.8) m/s2 x 10 X
* data[7] acceleration Y Int16 2 Byte -1568 ~ 1568 (-156.8 ~ 156.8) m/s2 x 10 Y
* data[8] acceleration Z Int16 2 Byte -1568 ~ 1568 (-156.8 ~ 156.8) m/s2 x 10 Z
* data[9] gyroRoll: Int16 2 Byte -2000 ~ 2000 degree/second Roll
* data[10] gyroPitch Int16 2 Byte -2000 ~ 2000 degree/second Pitch
* data[11] gyroYaw Int16 2 Byte -2000 ~ 2000 degree/second Yaw
* data[12] angleRoll Int16 2 Byte -180 ~ 180 degree Roll
* data[13] anglePitch Int16 2 Byte -180 ~ 180 degree Pitch
* data[14] angleYaw Int16 2 Byte -180 ~ 180 degree Yaw
* data[15] Position data time stamp
* data[16] x Float32 4 Byte - X axis in meters
* data[17] y Float32 4 Byte - Y axis in meters
* data[18] z Float32 4 Byte - z axis in meters
* data[19] Range sensor data time stamp
* data[20] Front range sensor (millimeters)
* data[21] Bottom range sensor (millimeters)
* data[22] Drone state time stamp
* data[23] modeSystem (system operating mode)
* data[24] modeFlight (flight controller operating mode)
* data[25] modeControlFlight (flight control mode)
* data[26] modeMovement (moving state)
* data[27] headless (headless setting status)
* data[28] sensorOrientation (sensor orientation)
* data[29] battery parcentage level
* data[30] current speed setting

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

# collect multiple data points
data = drone.get_sensor_data()
for i in range(len(data)):

    print(i, data[i])  # print out each data point

drone.close()
```

<hr/>

### get_error_data()

#### Syntax
``get_error_data()``     
``get_error_data(delay)``    


#### Parameters
**delay:** The delay in seconds that the command will wait for a response. The default value is 0.1.

#### Description
This command requests if the drone is in an error state. One or more of the following error states can be printed to console.   
* **Motion_Calibrating:** Drone is calibrating.    
* **Motion_NoAnswer:** Gyroscope Accelerometer is unresponsive and may be damaged.    
* **Motion_WrongValue:** Gyroscope Accelerometer is giving erroneous data.   
* **Motion_NotCalibrated:** Gyroscope Accelerometer is not calibrated.   
* **Pressure_NoAnswer:** Barometer is unresponsive.    
* **Pressure_WrongValue:** Barometer is giving erroneous data.   
* **RangeGround_NoAnswer:** Bottom Range sensor is unresponsive.     
* **RangeGround_WrongValue:** Bottom range sensor has given an incorrect value.    
* **Flow_NoAnswer:** Optical flow sensor is unresponsive.    
* **Flow_CannotRecognizeGroundImage:** Optical flow sensor is giving erroneous data due to the image.   

#### Returns
**error state:** String of one or more error messages

#### Example Code
Turn the drone left and right on a flat surface while the program runs to see the angular speed change. Then, hold the drone as still as possible and watch angular speed drop.
```python
#Python code
from time import sleep
from codrone_edu.drone import *
from codrone_edu.protocol import *

drone = Drone()
drone.pair()

# For demonstration purposes, activate motion calibration
drone.sendCommand(CommandType.ClearBias)
sleep(0.1)
for i in range(10):
    drone.get_error_data() # see motion error state during calibration
    time.sleep(0.5)
drone.close()
```

<hr className="section_hr"/>

## Controller

### down_arrow_pressed()

#### Syntax
``down_arrow_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's down arrow button has been pressed.

#### Returns
True if the down arrow button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.down_arrow_pressed():
        print("down arrow button has been pressed!")
```

<hr/>

### get_button_data()

#### Syntax
``get_button_data()``    


#### Parameters
None

#### Description
``get_button_data()`` is a function that will return a list of information about the most recent button pressed.

#### Returns
A list a of data that includes the time of the current program, the number associated with the most recent button pressed, and finally the state of the most recent button pressed. (Down, Pressed, Up)

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_button_data())
```

<hr/>

### h_pressed()

#### Syntax
``h_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's H button has been pressed.

#### Returns
True if the H button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.h_pressed():
        print("H button has been pressed!")
```

<hr/>

### l1_pressed()

#### Syntax
``l1_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's L1 button has been pressed.

#### Returns
True if the L1 button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.l1_pressed():
        print("L1 button has been pressed!")
```

<hr/>

### l2_pressed()

#### Syntax
``l2_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's L2 button has been pressed.

#### Returns
True if the L2 button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.l2_pressed():
        print("L2 button has been pressed!")
```

<hr/>

### left_arrow_pressed()

#### Syntax
``left_arrow_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's left arrow button has been pressed.

#### Returns
True if the left arrow button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.left_arrow_pressed():
        print("left arrow button has been pressed!")
```

<hr/>

### p_pressed()

#### Syntax
``p_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's P button has been pressed.

#### Returns
True if the P button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.p_pressed():
        print("P button has been pressed!")
```

<hr/>

### power_pressed()

#### Syntax
``power_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's power button has been pressed. Since pressing the power button also switches the drone to flight mode, this function only detects alternate button presses. In other words, the function can only detect a power button press when in LINK state.

#### Returns
True if the power button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.power_pressed():
        print("power button has been pressed!")
```

<hr/>

### r1_pressed()

#### Syntax
``r1_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's R1 button has been pressed.

#### Returns
True if the R1 button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.r1_pressed():
        print("R1 button has been pressed!")
```

<hr/>

### r2_pressed()

#### Syntax
``r2_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's R2 button has been pressed.

#### Returns
True if the R2 button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.r2_pressed():
        print("R2 button has been pressed!")
```

<hr/>

### right_arrow_pressed()

#### Syntax
``right_arrow_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's right arrow button has been pressed.

#### Returns
True if the right arrow button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.right_arrow_pressed():
        print("right arrow button has been pressed!")
```

<hr/>

### s_pressed()

#### Syntax
``s_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's S button has been pressed.

#### Returns
True if the S button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.s_pressed():
        print("S button has been pressed!")
```

<hr/>

### up_arrow_pressed()

#### Syntax
``up_arrow_pressed()``    


#### Parameters
None

#### Description
A function that determines if the controller's up arrow button has been pressed.

#### Returns
True if the up arrow button is pressed or held. Otherwise the function will return false.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    if drone.up_arrow_pressed():
        print("up arrow button has been pressed!")
```

<hr/>

### get_joystick_data()

#### Syntax
``get_joystick_data()``    


#### Parameters
None

#### Description
``get_joystick_data()`` is a getter function that gets a list of data about the state of both joysticks on the controller.

#### Returns
A list of data that includes the time of the current program, and information about the left and right joysticks.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_joystick_data())
```

<hr/>

### get_left_joystick_x()

#### Syntax
``get_left_joystick_x()``    


#### Parameters
None

#### Description
``get_left_joystick_x()`` is a getter function that gets the position of the left joystick's x position.

#### Returns
A value between -100 and 100 depending on the x position of the left joystick.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_left_joystick_x())
```

<hr/>

### get_left_joystick_y()

#### Syntax
``get_left_joystick_y()``    


#### Parameters
None

#### Description
``get_left_joystick_y()`` is a getter function that gets the position of the left joystick's y position.

#### Returns
A value between -100 and 100 depending on the y position of the left joystick.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_left_joystick_y())
```

<hr/>

### get_right_joystick_x()

#### Syntax
``get_right_joystick_x()``    


#### Parameters
None

#### Description
``get_right_joystick_x()`` is a getter function that gets the position of the right joystick's x position.

#### Returns
A value between -100 and 100 depending on the x position of the right joystick.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_right_joystick_x())
```

<hr/>

### get_right_joystick_y()

#### Syntax
``get_right_joystick_y()``    


#### Parameters
None 

#### Description
``get_right_joystick_y()`` is a getter function that gets the position of the right joystick's y position.

#### Returns
A value between -100 and 100 depending on the y position of the right joystick.

#### Example Code
```python
#Python code
from codrone_edu.drone import *
import time

drone = Drone()
drone.open()

while True:
    time.sleep(0.1)
    print(drone.get_right_joystick_y())
```

<hr className="section_hr"/>

## Screen

### controller_clear_screen()

#### Syntax
``controller_clear_screen()``   
``controller_clear_screen(pixel)``


#### Parameters
**pixel:** optional parameter that assigns all pixels to either white or black. white is the default value.

#### Description
clears all drawings from the controller screen

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
drone.controller_clear_screen()
drone.close()
```

<hr/>

### controller_create_canvas()

#### Syntax
``controller_create_canvas()``    


#### Parameters
None

#### Description
Creates a new image object for drawing

#### Returns
Returns a new image object that is 127 x 63 pixels

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()
image = drone.controller_create_canvas() # see controller_draw_canvas for how to draw on this new image object
drone.close()
```

<hr/>

### controller_draw_arc()

#### Syntax
``controller_draw_arc(arc_list, start_angle, end_angle, image, pixel_width)``    


#### Parameters
**arc_list:** Two points to define the bounding box. Sequence of [(x0, y0), (x1, y1)], where x1 >= x0 and y1 >= y0.   
**start_angle:** Starting angle, in degrees. Angles are measured from 3 o’clock, increasing clockwise.    
**end_angle:** Ending angle, in degrees.    
**image:** image object created from ``create_image_canvas()``.    
**pixel_width:** optional parameter that is the line width, in pixels. default value is 1.   

#### Description
Draws an arc (a portion of a circle outline) between the start and end angles, inside the given bounding box.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing
image = drone.controller_create_canvas()  # create image object

arc_list = [(20, 40), (50, 50)]
drone.controller_draw_arc(arc_list, 0, 180, image) # set arc onto image object

drone.controller_draw_canvas(image)  # draw image onto controller screen

drone.close()
```

<hr/>

### controller_draw_canvas()

#### Syntax
``controller_draw_canvas(image)``    


#### Parameters
**image:** image object to be drawn onto the controller screen

#### Description
Draws custom image canvas onto the controller screen

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing
image = drone.controller_create_canvas()  # create image object

arc_list = [(20, 40), (50, 50)]
ellipse_list = [(10, 10), (40, 40)]
chord_list = [(60, 20), (100, 50)]

drone.controller_draw_ellipse(ellipse_list, image) # draw onto image object
drone.controller_draw_arc(arc_list, 0, 180, image)
drone.controller_draw_chord(chord_list, 0, 180, image)

drone.controller_draw_canvas(image)  # draw image onto controller screen

drone.close()
```

<hr/>

### controller_draw_chord()

#### Syntax
``controller_draw_chord(arc_list, start_angle, end_angle, image, pixel_width)``    


#### Parameters
**chord_list:** Two points to define the bounding box. Sequence of [(x0, y0), (x1, y1)], where x1 >= x0 and y1 >= y0.   
**start_angle:** Starting angle, in degrees. Angles are measured from 3 o’clock, increasing clockwise.    
**end_angle:** Ending angle, in degrees.    
**image:** image object created from ``create_image_canvas()``.   
**pixel_width:** optional parameter that is the line width, in pixels. default value is 1.    

#### Description
Same as controller_draw_arc(), but connects the end points with a straight line.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing
image = drone.controller_create_canvas()  # create image object

chord_list = [(20, 40), (50, 50)]
drone.controller_draw_chord(chord_list, 0, 180, image) # set chord onto image object

drone.controller_draw_canvas(image)  # draw image onto controller screen

drone.close()
```

<hr/>

### controller_draw_ellipse()

#### Syntax
``controller_draw_ellipse(ellipse_list, image, fill_in, pixel_width)``    


#### Parameters
**ellipse_list:** Two points to define the bounding box. Sequence of [(x0, y0), (x1, y1)] where x1 >= x0 and y1 >= y0.    
**image:** image object created from ``create_image_canvas()``.   
**fill_in:** optional parameter. None by default. 0 will fill with black.   
**pixel_width:** optional parameter that is the line width, in pixels. default value is 1.    

#### Description
Draws an ellipse inside the given bounding box.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing
image = drone.controller_create_canvas()  # create image object

ellipse_list = [(10, 10), (40, 40)]
drone.controller_draw_ellipse(ellipse_list, image) # set ellipse onto image object

drone.controller_draw_canvas(image)  # draw image onto controller screen

drone.close()
```

<hr/>

### controller_draw_image()

#### Syntax
``controller_draw_image(pixel_list)``    


#### Parameters
**pixel_list:** the list of image data. can be obtained using ``get_image_data()`` function.

#### Description
draws image when given a pixel_list of image data

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing

image = get_image_data("example.png") # where example.png is an image in the same directory as the program

drone.controller_draw_image(image) # draws the image onto the controller's screen

drone.close()
```

<hr/>

### controller_draw_line()

#### Syntax
``controller_draw_line(x1, y1, x2, y2, pixel, line_type)``    


#### Parameters
**x1:** point 1 x coordinate    
**y1:** point 1 y coordinate    
**x2:** point 2 x coordinate    
**y2:** point 2 y coordinate    
**pixel:** optional parameter that changes the pixel color of the line. default value is Black    
**line_type:** optional parameter that is the type of line drawn. default is Solid    

#### Description
draws a line between points (x1, y1) and (x2, y2)
```python
(x1,y1) \
         \
          \
           \ (x2,y2)
```

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing

drone.controller_draw_line(0,0, 60, 60)

drone.close()
```

<hr/>

### controller_draw_point()

#### Syntax
``controller_draw_point(x, y, pixel)``    


#### Parameters
**x:** x coordinate
**y:** y coordinate
**pixel:** optional parameter that changes the pixel color of the line. default value is Black

#### Description
draws a single pixel at the point (x,y)

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing

drone.controller_draw_point(10, 10) # place a pixel at the (10,10) coordinate

drone.close()
```

<hr/>

### controller_draw_polygon()

#### Syntax
``controller_draw_polygon(point_list)``    


#### Parameters
**point_list:** the list of coordinates

#### Description
The polygon outline consists of straight lines between the given coordinates, plus a straight line between the last and the first coordinate.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen()

point_list_square = ((10, 10), (30, 10), (30, 30), (10, 30)) # creating a list of coordinates

drone.controller_draw_polygon(point_list_square)

drone.close()
```

<hr/>

### controller_draw_rectangle()

#### Syntax
``controller_draw_rectangle(x, y, width, height, pixel, fill, line_type)``    


#### Parameters
**x:** top left corner x coordinate   
**y:** top left corner y coordinate   
**width:** width of rectangle   
**height:** height of rectangle   
**pixel:** optional parameter that changes the pixel color of the line. default value is Black    
**fill:** optional parameter to fill in the rectangle or not. default value is False    
**line_type:** optional parameter that is the type of line drawn. default is Solid

#### Description
draws a rectangle onto the controller screen starting from point (x,y) and extends to given height and width
```python
width
(x,y)|---------------|
     |               | height
     |_______________|
```

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen()

drone.controller_draw_rectangle(30, 15, 50, 30)

drone.close()
```

<hr/>

### controller_draw_square()

#### Syntax
``controller_draw_square(x, y, width, pixel, fill, line_type)``    


#### Parameters
**x:** top left corner x coordinate   
**y:** top left corner y coordinate   
**width:** width of square    
**pixel:** optional parameter that changes the pixel color of the line. default value is Black    
**fill:** optional parameter to fill in the square or not. default value is False   
**line_type:** optional parameter that is the type of line drawn. default is Solid

#### Description
draws a square on the controller screen starting from point (x,y) and will extend to the given width
```python
width
(x,y)|------|
     |      | width
     |______|
```

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen()

drone.controller_draw_square(10, 10, 25)

drone.close()
```

<hr/>

### controller_draw_string_align()

#### Syntax
``controller_draw_string_align(x_start, x_end, y, string, alignment, string_font, pixel_color)``    


#### Parameters
**x_start:** starting x position    
**x_end:** ending x position    
**y:** y position   
**string:** the string to write   
**alignment:** optional parameter that is the alignment between x_start and x_end. can align Left, Right, or Center. default value is Center    
**string_font:** optional parameter that is the font of the string to be written. default value is LiberationMono5x8    
**pixel_color:** optional parameter that is the pixel color of the written string. default value is Black

#### Description
Draws a string from the given x_start, x_end and y positions. The string can be aligned along the x_start and x_end positions

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen()

drone.controller_draw_string_align(0, 70, 0, "Hello, world!")

drone.close()
```

<hr/>

### controller_draw_string()

#### Syntax
``controller_draw_string(x, y, string, string_font, pixel_color)``    


#### Parameters
**x:** starting x position    
**y:** starting y position    
**string:** the string to write   
**string_font:** optional parameter that is the font of the string to be written. default value is LiberationMono5x8    
**pixel_color:** optional parameter that is the pixel color of the written string. default value is Black   

#### Description
Draws a string from the given x_start, x_end and y positions. The string can be aligned along the x_start and x_end positions

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen()
drone.controller_draw_string(0, 0, "Hello, world!")

drone.close()
```

<hr/>

### controller_preview_canvas()

#### Syntax
``controller_preview_canvas(image)``    


#### Parameters
**image:** image object to be previewed

#### Description
creates a pop up window to preview your current image object on your computer screen.

#### Returns
None

#### Example Code
```python
#Python code
from codrone_edu.drone import *

drone = Drone()
drone.pair()

drone.controller_clear_screen() # clear screen for drawing
image = drone.controller_create_canvas()  # create image object

arc_list = [(20, 40), (50, 50)]
ellipse_list = [(10, 10), (40, 40)]
chord_list = [(60, 20), (100, 50)]

drone.controller_draw_ellipse(ellipse_list, image) # draw onto image object
drone.controller_draw_arc(arc_list, 0, 180, image)
drone.controller_draw_chord(chord_list, 0, 180, image)

drone.controller_preview_canvas(image)  # draw image onto controller screen

drone.close()
```

<hr/>
