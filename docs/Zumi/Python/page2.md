---
title: "Function Documentation"
slug: Function-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

## MPU

### calibrate_gyro()

#### Description
Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will
create an offsets file by taking the average of multiple readings from the sensor. While running this function, make 
sure Zumi is not moving and is resting on a flat surface. This function calls ```zumi.mpu.calibrate_MPU()```.


#### Syntax
```calibrate_gyro()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()
zumi.calibrate_gyro()
print("Done")
```
<hr/>

### calibrate_MPU()

#### Description
Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will
create an offsets file by taking the average of multiple readings from the sensor. While running this function, make 
sure Zumi is not moving and is resting on a flat surface.

#### Syntax
```calibrate_MPU()```<br />
```calibrate_MPU(count=100)```<br />

#### Parameters
**count:** the number of samples you want Zumi to take. Increase to improve accuracy. 

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

#Zumi will take 500 samples/readings
zumi.mpu.calibrate_MPU(count=500)

#this is the order the offsets will be printed
print("angular speed rad/sec Gx,Gy,Gz")
print("linear acceleration   Ax,Ay,Az")

#print the offsets of each Axis
zumi.mpu.print_offsets()

```
<hr/>

### get_orientation()

#### Description
Uses the acceleration values to find Zumi's orientation with respect to the strongest force being applied to Zumi (gravity).

#### Syntax
```get_orientation()```<br />

#### Parameters
None

#### Returns
Integer denoting orientation state.<br />

*Orientation state* <br />
-1 = unknown<br />
 0 = probably falling or moving between states<br />
 1 = camera straight up<br />
 2 = camera facing down<br />
 3 = on right side<br />
 4 = on left side<br />
 5 = wheels on floor<br />
 6 = wheels facing up (upside down)<br />
 7 = accelerating faster than 1g<br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

#grab zumi and place it on any side 
#example: upside down, on its nose etc.
for i in range(20):
    orientation = zumi.get_orientation()
    print(orientation)
    time.sleep(0.5)
print(" done ")

```
<hr/>

### read_x_angle()

#### Description
Calls ```update_angles()``` and returns only the x-angle.

#### Syntax
```read_x_angle()```<br />

#### Parameters
None

#### Returns
**float:** current x-angle

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_x_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```
<hr/>

### read_y_angle()

#### Description
Calls ```update_angles()``` and returns only the y-angle.

#### Syntax
```read_y_angle()```<br />

#### Parameters
None

#### Returns
**float:** current y-angle

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_y_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```
<hr/>

### read_z_angle()

#### Description
Calls ```update_angles()``` and returns only the z-angle.

#### Syntax
```read_z_angle()```<br />

#### Parameters
None

#### Returns
float: current z-angle

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_z_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```
<hr/>

### reset_drive()

#### Description
Calls both ```reset_PID()``` and ```reset_gyro()```.
Use for driving straight or turning accurately.

#### Syntax
```reset_drive()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,50):
    zumi.forward_step(0,50)
    
print(zumi.angle_list[2],", ", zumi.error_past)
    
zumi.stop()
zumi.reset_drive()

print(" Now ")
print(zumi.angle_list[2],", ", zumi.error_past)
    

```
<hr/>

### reset_gyro()

#### Description
Resets all values in the angle list to 0.
Use for driving straight or turning accurately.

#### Syntax
```reset_gyro()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

print("z angle " , zumi.angle_list[2])

zumi.turn_left(90,1.2)

print("z angle " , zumi.angle_list[2])

zumi.reset_gyro()

print("z angle " , zumi.angle_list[2])
```
<hr/>

### reset_PID()

#### Description
Resets the sum of the gyro error to zero as well as the PID error sum.
Use for driving straight or turning accurately.
This does not reset the P, I, and D values of the Zumi PID control.

#### Syntax
```reset_PID()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

for i in range(0,50):
    zumi.go_straight(50,0)
    #print the error of the z angle along with some of the PID accumulators
    print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum," , ", zumi.angle_list[2])

zumi.stop()

#this will reset those values
zumi.reset_PID()
print(" Now ")
print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum, " , ", zumi.angle_list[2])

```
<hr/>

### update_angles()

#### Description
Reads angular speeds and updates the list of angles:
The first 3 are angles produced from the gyroscope readings.<br />
X angle, Y angle and Z angle in degrees.<br />
The next 2 angles are produced by finding the tilt with respect to gravity.<br />
X and Y acceleration angles in degrees. Work well if Zumi's wheels point to the floor<br />
The next 2 angles are the complementary filtered angles are produced by combining both gyroscope and accelerometer angles for the x and y axis.<br />
The next 3 are the rotation angles which are produced using the accelerometer.<br />
rotation along X, Y and Z with respect to gravity.<br />
The last one is the tilt state.<br />

#### Syntax
```update_angles()```<br />

#### Parameters
None

#### Returns
List [Gyro x,Gyro y,Gyro z,Acc x,Acc y,Comp x,Comp y,Rot_x,Rot_y,Rot_z,tilt_state]

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()


for i in range(0,100):
    angles = zumi.update_angles()
    z_angle = angles[2]
    print(z_angle)
print(" done ")

```
<hr className="section_hr"/>

## Sensors

### back_left_detect()

#### Description
Returns True if the back left IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

#### Syntax
```back_left_detect()```<br />
```back_left_detect(threshold=100)```

#### Parameters
**threshold:** Integer between 0-255

#### Returns
Boolean that returns True if sensor is triggered. <br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    if zumi.back_left_detect():
        print("Detected!")
    time.sleep(0.1) # Delay for I2C

```
<hr/>

### back_right_detect()

#### Description
Returns True if the back right IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

#### Syntax
```back_right_detect()```<br />
```back_right_detect(threshold=100)```

#### Parameters
**threshold:** Integer between 0-255

#### Returns
Boolean that returns True if sensor is triggered. <br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    if zumi.back_right_detect():
        print("Detected!")
    time.sleep(0.1) # Delay for I2C

```
<hr/>

### bottom_left_detect()

#### Description
Returns True if the bottom left IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

#### Syntax
```bottom_left_detect()```<br />
```bottom_left_detect(threshold=100)```

#### Parameters
**threshold:** Integer between 0-255

#### Returns
Boolean that returns True if sensor is triggered. <br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    if zumi.bottom_left_detect():
        print("Detected!")
    time.sleep(0.1) # Delay for I2C

```
<hr/>

### bottom_right_detect()

#### Description
Returns True if the bottom right IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

#### Syntax
```bottom_right_detect()```<br />
```bottom_right_detect(threshold=100)```

#### Parameters
**threshold:** Integer between 0-255

#### Returns
Boolean that returns True if sensor is triggered. <br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    if zumi.bottom_right_detect():
        print("Detected!")
    time.sleep(0.1) # Delay for I2C

```
<hr/>

### calibrate_gyro()

#### Description
Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will
create an offsets file by taking the average of multiple readings from the sensor. While running this function, make 
sure Zumi is not moving and is resting on a flat surface. This function calls ```zumi.mpu.calibrate_MPU()```.

#### Syntax
```calibrate_gyro()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()
zumi.calibrate_gyro()
print("Done")
```
<hr/>

### calibrate_MPU()

#### Description
Reads from the previous MPU offsets file unless the file does not exist. If an offsets file does not exist, then it will
create an offsets file by taking the average of multiple readings from the sensor. While running this function, make 
sure Zumi is not moving and is resting on a flat surface.

#### Syntax
```calibrate_MPU()```<br />
```calibrate_MPU(count=100)```<br />

#### Parameters
**count:** the number of samples you want Zumi to take. Increase to improve accuracy. 

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

#Zumi will take 500 samples/readings
zumi.mpu.calibrate_MPU(count=500)

#this is the order the offsets will be printed
print("angular speed rad/sec Gx,Gy,Gz")
print("linear acceleration   Ax,Ay,Az")

#print the offsets of each Axis
zumi.mpu.print_offsets()

```
<hr/>

### front_left_detect()

#### Description
Returns True if the front left IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

#### Syntax
```front_left_detect()```<br />
```front_left_detect(threshold=100)```

#### Parameters
**threshold:** Integer between 0-255

#### Returns
Boolean that returns True if sensor is triggered. <br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    if zumi.front_left_detect():
        print("Detected!")
    time.sleep(0.1) # Delay for I2C

```
<hr/>

### front_right_detect()

#### Description
Returns True if the front right IR sensor detects a value below a threshold. The value decreases as the light reflected back to the receiver increases.

#### Syntax
```front_left_detect()```<br />
```front_left_detect(threshold=100)```

#### Parameters
**threshold:** Integer between 0-255

#### Returns
Boolean that returns True if sensor is triggered. <br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    if zumi.front_right_detect():
        print("Detected!")
    time.sleep(0.1) # Delay for I2C

```
<hr/>

### get_all_IR_data()

#### Description
Returns the readings from all 6 IR sensors.

#### Syntax
```get_all_IR_data()```<br />

#### Parameters
None

#### Returns
List with 6 values between 0 and 255. <br />

*IR sensor indices:* <br />
 0 Front right sensor <br />
 1 Bottom right sensor <br />
 2 Back right sensor <br />
 3 Bottom left sensor <br />
 4 Back left sensor <br />
 5 Front left sensor <br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    ir_readings = zumi.get_all_IR_data()
    print(ir_readings)
    time.sleep(0.1) # Delay for I2C

```
<hr/>

### get_battery_voltage()

#### Description
Get the reading from battery level.

If you are charging Zumi RED LED ON you will 
see roughly 1.1-1.20 volts. 

The battery should reach a max of 4.20 volts 
and the lowest it should ever reach is 3.0 volts. 
These values will only show up if the switch
is in the on position and the RED led is not visible.

#### Syntax
```get_battery_voltage()```<br />

#### Parameters
None

#### Returns
Voltage reading

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,10):
    # battery level is updated every 500ms or half a second
    time.sleep(0.5)
    battery = zumi.get_battery_voltage()
    print(battery)
```
<hr/>

### get_IR_data()

#### Description
Get the reading from the IR sensors and the index specified. 

#### Syntax
```get_IR_data(ir_sensor_index)```<br />

#### Parameters
ir_sensor_index: Integer from 0 to 5.

*IR sensor indices:*
*  0  IR.FRONT_RIGHT = Front right sensor
*  1  IR.BOTTOM_RIGHT = Bottom right sensor
*  2  IR.BACK_RIGHT = Back right sensor
*  3  IR.BOTTOM_LEFT = Bottom left sensor
*  4  IR.BACK_LEFT = Back left sensor
*  5  IR.FRONT_LEFT = Front left sensor

#### Returns
Value between 0 and 255.

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,100):
    FRONT_RIGHT = 0
    ir_reading = zumi.get_IR_data(FRONT_RIGHT)
    zumi.play_note(int(ir_reading/4),20) 
    # Divide by 4 because note is between 0 and 60
    
    time.sleep(0.05)
```
<hr/>

### get_orientation_message()

#### Description
Uses the acceleration values to find Zumi's orientation with respect to the strongest force being applied to Zumi (gravity).
This function returns the orientation as a String.

#### Syntax
```get_orientation_message()```<br />

#### Parameters
None

#### Returns
String: a description of the orientation state<br />

*Orientation state*<br />
"unknown"<br />
"face up"<br />
"face down"<br />
"right side down"<br />
"left side down"<br />
"upright"<br />
"upside down"<br />
"accelerating"<br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

#grab zumi and place it on any side 
#example: upside down, on its nose etc.
for i in range(20):
    orientation = zumi.get_orientation_message()
    print(orientation)
    time.sleep(0.5)
print(" done ")

```
<hr/>

### get_orientation()

#### Description
Uses the acceleration values to find Zumi's orientation with respect to the strongest force being applied to Zumi (gravity).

#### Syntax
```get_orientation()```<br />

#### Parameters
None

#### Returns
Integer denoting orientation state.<br />

*Orientation state* <br />
-1 = unknown<br />
 0 = probably falling or moving between states<br />
 1 = camera straight up<br />
 2 = camera facing down<br />
 3 = on right side<br />
 4 = on left side<br />
 5 = wheels on floor<br />
 6 = wheels facing up (upside down)<br />
 7 = accelerating faster than 1g<br />

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

#grab zumi and place it on any side 
#example: upside down, on its nose etc.
for i in range(20):
    orientation = zumi.get_orientation()
    print(orientation)
    time.sleep(0.5)
print(" done ")

```
<hr/>

### read_x_angle()

#### Description
Calls ```update_angles()``` and returns only the x-angle.

#### Syntax
```read_x_angle()```<br />

#### Parameters
None

#### Returns
**float:** current x-angle

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_x_angle())
    IPython.display.clear_output(wait=True) 
print("done")
```
<hr/>

### read_y_angle()

#### Description
Calls ```update_angles()``` and returns only the y-angle.

#### Syntax
```read_y_angle()```<br />

#### Parameters
None

#### Returns
**float:** current y-angle

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_y_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```
<hr/>

### read_z_angle()

#### Description
Calls ```update_angles()``` and returns only the z-angle.

#### Syntax
```read_z_angle()```<br />

#### Parameters
None

#### Returns
**float:** current z-angle

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import IPython.display

zumi = Zumi()

for i in range(100):
    print(zumi.read_z_angle())
    IPython.display.clear_output(wait=True) 
print("done")

```
<hr/>

### reset_drive()

#### Description
Calls both ```reset_PID()``` and ```reset_gyro()```.
Use for driving straight or turning accurately.

#### Syntax
```reset_drive()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

for i in range(0,50):
    zumi.forward_step(0,50)
    
print(zumi.angle_list[2],", ", zumi.error_past)
    
zumi.stop()
zumi.reset_drive()

print(" Now ")
print(zumi.angle_list[2],", ", zumi.error_past)
    

```
<hr/>

### reset_gyro()

#### Description
Resets all values in the angle list to 0.
Use for driving straight or turning accurately.

#### Syntax
```reset_gyro()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

print("z angle " , zumi.angle_list[2])

zumi.turn_left(90,1.2)

print("z angle " , zumi.angle_list[2])

zumi.reset_gyro()

print("z angle " , zumi.angle_list[2])
```
<hr/>

### reset_PID()

#### Description
Resets the sum of the gyro error to zero as well as the PID error sum.
Use for driving straight or turning accurately.
This does not reset the P, I, and D values of the Zumi PID control.

#### Syntax
```reset_PID()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

for i in range(0,50):
    zumi.go_straight(50,0)
    #print the error of the z angle along with some of the PID accumulators
    print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum," , ", zumi.angle_list[2])

zumi.stop()

#this will reset those values
zumi.reset_PID()
print(" Now ")
print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum, " , ", zumi.angle_list[2])

```
<hr/>

### update_angles()

#### Description
Reads angular speeds and updates the list of angles:
The first 3 are angles produced from the gyroscope readings.<br />
X angle, Y angle and Z angle in degrees.<br />
The next 2 angles are produced by finding the tilt with respect to gravity.<br />
X and Y acceleration angles in degrees. Work well if Zumi's wheels point to the floor<br />
The next 2 angles are the complementary filtered angles are produced by combining both gyroscope and accelerometer angles for the x and y axis.<br />
The next 3 are the rotation angles which are produced using the accelerometer.<br />
rotation along X, Y and Z with respect to gravity.<br />
The last one is the tilt state.<br />

#### Syntax
```update_angles()```<br />

#### Parameters
None

#### Returns
List [Gyro x,Gyro y,Gyro z,Acc x,Acc y,Comp x,Comp y,Rot_x,Rot_y,Rot_z,tilt_state]

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()


for i in range(0,100):
    angles = zumi.update_angles()
    z_angle = angles[2]
    print(z_angle)
print(" done ")

```
<hr className="section_hr"/>

## Driving

### circle_left()

#### Description
Drives Zumi in a counterclockwise circle.

#### Syntax
```circle_left()```<br />
```circle_left(speed=30, step=2)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.circle_left(step=3)

```
<hr/>

### circle_right()

#### Description
Drives Zumi in a clockwise circle.

#### Syntax
```circle_right()```<br />
```circle_right(speed=30, step=2)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.circle_right(step=3)

```
<hr/>

### circle()

#### Description
Drives Zumi in a circle (counterclockwise by default).

#### Syntax
```circle()```<br />
```circle(speed=30, step=2, direction=1, delay=0.02)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
**direction:** -1 for clockwise and +1 for counterclockwise<br />
**delay:** The time delay between each angle step

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()
zumi.circle(speed=60, step=4, direction=-1)

```
<hr/>

### control_motors()

#### Description
Sets the speed of each individual motor. The changes take place immediately. This function does not include a stop command or any sensor feedback.

#### Syntax
```control_motors(right,left)```<br />

#### Parameters
**right:** Integer between -126 and 127. Positive values for forward, negative values for reverse.<br />
**left:** Integer between -126 and 127. Positive values for forward, negative values for reverse.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.control_motors(30,30)
time.sleep(2)
zumi.stop()
```
<hr/>

### drive_over_markers()

#### Description
Zumi will drive over the specified number of alternating black and white horizontal lines at least 2 centimeters wide. Zumi will stop when the number of markers have been crossed or if the timeout ends, whichever is first. (Avoid making the speed very high, zumi will most likely overshoot since it has a lot of speed)

#### Syntax
```zumi.drive_over_markers(5)```<br />
```zumi.drive_over_markers(road_markers=3,speed=10,ir_threshold=120,time_out=3)```<br />

#### Parameters
**road_markers:** The number of road markers to drive over<br />
**speed:** Positive integer value for speed between 0 and 80<br />
**ir_threshold:** The IR threshold value for the bottom left IR sensors to detect black or white.<br />
**time_out:** Number of seconds before the timeout ends and Zumi stops driving.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

#must start off in a black area.
zumi.drive_over_markers(5)

#Drive over 10 road marker with a timeout of 6 seconds
zumi.drive_over_markers(road_markers=10,speed=30,time_out=6)

```
<hr/>

### figure_8()

#### Description
Drives Zumi in a figure 8.

#### Syntax
```figure_8()```<br />
```figure_8(speed=30, step=3, delay=0.02)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
**delay:** The time delay between each angle step<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.figure_8(step=5)

```
<hr/>

### forward_avoid_collision()

#### Description
Drives Zumi forward at a default speed of 40 for 1 second in the direction Zumi is currently facing.
If either of the front IR sensor values go below the threshold, Zumi will stop even if the duration or timeout is not complete.

#### Syntax
```forward_avoid_collision(speed=40, duration=1.0)```<br />
```forward_avoid_collision(speed=40, duration=1.0, desired_angle=None, left_th=150, right_th=150)```<br />

#### Parameters
**speed:** Positive integer value for speed between 0 and 80<br />
**duration:** Number of seconds Zumi will drive and check for collision<br />
**desired_angle:** Heading or desired angle (Default to None which is Zumi's current heading)<br />
**left_th:** threshold of the front left IR sensor<br />
**right_th:** threshold of the front right IR sensor<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.forward_avoid_collision(40,2)

```
<hr/>

### forward_step()

#### Description
Takes one drive "step" to correct for the set heading. This function only works when called inside of a loop.

#### Syntax
```forward_step(speed, desired_angle)```<br />
```forward_step(speed, desired_angle, max_speed=127)```<br />

#### Parameters
**speed:** Drive speed between 0 and 127; must be below the max_speed<br />
**desired_angle:** heading (0 degrees is defined when the Zumi object is created.)<br />
**max_speed:** Caps the max speed. Default to 127.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 200):
    zumi.forward_step(80,0)

zumi.stop()
```
<hr/>

### forward()

#### Description
Drives Zumi forward at a default speed of 40 for 1 second in the direction Zumi is currently facing.

#### Syntax
```forward()```<br />
```forward(speed=40, duration=1.0, desired_angle=None)```<br />

#### Parameters
**speed:** Positive integer value for speed between 0 and 80<br />
**duration:** Number of seconds Zumi will drive forward<br />
**desired_angle:** Heading or desired angle to drive in (When None is selected Zumi drives wherever she is facing)

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.forward()
time.sleep(1)
zumi.forward(speed=50)
time.sleep(1)
zumi.forward(duration=2.1)
time.sleep(1)

```
<hr/>

### funnel_align()

#### Description
Zumi will try to align to the funnel piece on the competition field (Click [here](https://learn.robolink.com/wp-content/uploads/2021/06/current_funnel.pdf) for a PDF version).

#### Syntax
```funnel_align(speed=20, duration=1.0)```<br />
```funnel_align(speed=20, duration=1, angle=None, angle_adj=2, l_th=100, r_th=100)```<br />

#### Parameters
**speed:** Positive integer value for speed between 0 and 80<br />
**duration:** Number of seconds Zumi will try to align to the funnel piece<br />
**angle:** Heading or desired angle (Default to None which is Zumi's current heading)<br />
**angle_adj:** The number of degrees Zumi will turn if one IR sensor detects white<br />
**l_th:** threshold of the bottom left IR sensor<br />
**r_th:** threshold of the bottom right IR sensor<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.funnel_align(speed=10,duration=3,angle_adj=1.1)

```
<hr/>

### go_reverse()

#### Description
Takes one drive "step" in reverse to correct for the set heading. This function only works when called inside of a loop.

#### Syntax
```go_reverse(speed, desired_angle)```<br />
```go_reverse(speed, desired_angle, max_speed=127)```<br />

#### Parameters
**speed:** Drive speed between 0 and 127; must be below the max_speed<br />
**desired_angle:** heading (0 degrees is defined when the Zumi object is created.)<br />
**max_speed:** Caps the max speed. Default to 127.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 200):
    zumi.go_reverse(40,0)

zumi.stop()
```
<hr/>

### go_straight()

#### Description
Takes one drive "step" to correct for the set heading. This function only works when called inside of a loop.

#### Syntax
```go_straight(speed, desired_angle)```<br />
```go_straight(speed, desired_angle, max_speed=127)```<br />

#### Parameters
**speed:** Drive speed between 0 and 127; must be below the max_speed<br />
**desired_angle:** heading (0 degrees is defined when the Zumi object is created.)<br />
**max_speed:** Caps the max speed. Default to 127.

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 200):
    zumi.go_straight(40,0)

zumi.stop()
```
<hr/>

### j_turn()

#### Description
Drives Zumi in a j-turn.

#### Syntax
```j_turn()```<br />
```j_turn(speed=80, step=4, delay=0.005)```<br />

#### Parameters
**speed:** Positive value for forward speed between 0 and 80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
**delay:** The time delay between each angle step

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()
zumi.j_turn(speed=60, delay=0.003)

```
<hr/>

### left_u_turn()

#### Description
Drives Zumi in a left u-turn.

#### Syntax
```left_u_turn()```<br />
```left_u_turn(speed=30, step=4, delay=0.02)```<br />

#### Parameters
**speed:** Positive value for forward speed between 0 and 80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
**delay:** The time delay between each angle step<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.left_u_turn()
time.sleep(1)
zumi.left_u_turn(step=3)

```
<hr/>

### line_follow_gyro_assist()

#### Description
Drives Zumi forward at a default speed of 20 for 1 second in the direction Zumi is currently facing. Zumi will stop when the duration or timeout is over.
If the bottom IR sensors detect a black line, Zumi will continue to drive. If one or the other sensor detects white, Zumi will auto-adjust to stay on the line.
If both sensors detect white, Zumi will stop even if the duration has not been met.

#### Syntax
```line_follow_gyro_assist(speed=20, duration=1.0)```<br />
```line_follow_gyro_assist(speed=20, duration=1, angle=None, angle_adj=2, l_th=100, r_th=100)```<br />

#### Parameters
**speed:** Positive integer value for speed between 0 and 80<br />
**duration:** Number of seconds Zumi will drive on the line<br />
**angle:** Heading or desired angle (default is None which is Zumi's current heading)<br />
**angle_adj:** The number of degrees Zumi will turn if one IR sensor detects white. <br />
**l_th:** threshold of the bottom left IR sensor.<br />
**r_th:** threshold of the bottom right IR sensor.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.line_follow_gyro_assist(speed=10,duration=3,angle_adj=1.1)

```
<hr/>

### move_centimeters()

#### Description
This method uses a best fit linear approximation of the distance traveled over time.
It uses the equation y = mx + b, where:
* y is the distance traveled
* m is the predicted speed in centimeters per second
* x is the time elapsed
* b is the slope intercept

If the PID values are not set the internal default values will be set.

If the angle is not input Zumi will drive to whatever angle it is currently facing. 

#### Syntax
```move_centimeters(distance, angle)```<br />
```move_centimeters(distance, angle=None, k_p=None, k_i=None, k_d=None)```<br />

#### Parameters
**distance:** the distance in centimeters you want to travel<br />
**angle:** heading (0 degrees is defined when the Zumi object is created.) Default to None<br />
**k_p:** P-gain. Default to None.<br />
**k_i:** I-gain. Default to None.<br />
**k_d:** D-gain. Default to None.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.move_centimeters(10)
zumi.move_centimeters(10,90)
zumi.move_centimeters(15,0)
```
<hr/>

### move_inches()

#### Description
This method uses a best fit linear approximation of the distance traveled over time.
It uses the equation y = mx + b, where:
* y is the distance traveled
* m is the predicted speed in inches per second
* x is the time elapsed
* b is the slope intercept

If the PID values are not set the internal default values will be set.

If the angle is not input Zumi will drive to whatever angle it is currently facing.

#### Syntax
```move_inches(distance, angle)```<br />
```move_inches(distance, angle=None, k_p=None, k_i=None, k_d=None)```<br />

#### Parameters
**distance:** the distance in inches you want to travel<br />
**angle:** heading (0 degrees is defined when the Zumi object is created.) Default to None<br />
**k_p:** P-gain. Default to None.<br />
**k_i:** I-gain. Default to None.<br />
**k_d:** D-gain. Default to None.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.move_inches(5)
zumi.move_inches(6,90)
zumi.move_inches(5,0)
```
<hr/>

### move_to_coordinate()

#### Description
This method drives Zumi from an origin to an x,y position in inches. Using this function will keep track of Zumi's coordinates. To reset the origin, use the reset_coordinate() function. This method uses a best fit linear approximation of the distance traveled over time.
It uses the equation y = mx + b, where:
* y is the distance traveled
* m is the predicted speed in inches per second
* x is the time elapsed
* b is the slope intercept

#### Syntax
```move_to_coordinate(desired_x, desired_y)```<br />
```move_to_coordinate(desired_x, desired_y, k_p=None, k_i=None, k_d=None, units="in"):```<br />

#### Parameters
**desired_x:** The x-coordinate of the destination<br />
**desired_y:** The y-coordinate of the destination<br />
**k_p:** P-gain. Default to None.<br />
**k_i:** I-gain. Default to None.<br />
**k_d:** D-gain. Default to None.<br />
**units:** Defaults to "in" or inches. Set it to "cm" for centimeters.<br />

#### Returns
None

#### Example Code
##### Python Sample 1
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

# a square
zumi.move_to_coordinate(6,0)
zumi.move_to_coordinate(6,6)
zumi.move_to_coordinate(0,6)
zumi.move_to_coordinate(0,0)
```

##### Python Sample 2
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

# Avoid this
zumi.move_to_coordinate(10,0)
time.sleep(1)
# zumi wont drive the second time since its already at (10, 0)
zumi.move_to_coordinate(10,0)
```

##### Python Sample 3
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

# Avoid this
zumi.move_to_coordinate(10,0)
time.sleep(1)

zumi.reset_coordinate()
# zumi will drive the second time since its position will be reset, and will move a total of 20 inches from the start
zumi.move_to_coordinate(10,0)
```
<hr/>

### parallel_park()

#### Description
Drives Zumi in a parallel park maneuver.

#### Syntax
```parallel_park()```<br />
```parallel_park(speed=15, step=1, delay=0.01)```<br />

#### Parameters
**speed:** Drive speed between 0 and 80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
**delay:** The time delay between each angle step<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()
zumi.parallel_park(speed=20, step=2)

```
<hr/>

### rectangle_left()

#### Description
Drives Zumi in a counterclockwise rectangle.

#### Syntax
```rectangle_left()```<br />
```rectangle_left(speed=40, seconds=1.0, ratio=2)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds for shorter side<br />
**ratio:** Ratio of longer side to shorter side (Multiply ```ratio``` by ```seconds``` to get the duration of the longer side) <br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.rectangle_left(ratio=3)
```
<hr/>

### rectangle_right()

#### Description
Drives Zumi in a clockwise rectangle.

#### Syntax
```rectangle_right()```<br />
```rectangle_right(speed=40, seconds=1.0, ratio=2)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds for shorter side<br />
**ratio:** Ratio of longer side to shorter side (Multiply ```ratio``` by ```seconds``` to get the duration of the longer side) <br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.rectangle_right(ratio=3)
```
<hr/>

### rectangle()

#### Description
Drives Zumi in a rectangle.

#### Syntax
```rectangle()```<br />
```rectangle(speed=40, seconds=1.0, direction=1, ratio=2)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds for shorter side<br />
**direction:** 1 for counterclockwise and -1 for clockwise<br />
**ratio:** Ratio of longer side to shorter side (Multiply ```ratio``` by ```seconds``` to get the duration of the longer side) <br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.rectangle(ratio=3)
```
<hr/>

### reset_coordinate()

#### Description
Will reset the coordinate to (0,0).

#### Syntax
```reset_coordinate()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.move_to_coordinate(10,0)
zumi.reset_coordinate()
#zumi will drive another 10 inches
zumi.move_to_coordinate(10,0)

```
<hr/>

### reverse_avoid_collision()

#### Description
Drives Zumi in reverse at a default speed of 40 for 1 second in the direction Zumi is currently facing.
If either of the back IR sensor values go below the threshold, Zumi will stop even if the duration or timeout is not complete.

#### Syntax
```reverse_avoid_collision(speed=40, duration=1.0)```<br />
```reverse_avoid_collision(speed=40, duration=1.0, desired_angle=None, left_th=150, right_th=150)```<br />

#### Parameters
**speed:** Positive integer value for speed between 0 and 80<br />
**duration:** Number of seconds Zumi will drive and check for collision<br />
**desired_angle:** Heading or desired angle (Default to None which is Zumi's current heading)<br />
**left_th:** threshold of the back left IR sensor<br />
**right_th:** threshold of the back right IR sensor<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.reverse_avoid_collision(40,2)

```
<hr/>

### reverse_step()

#### Description
Takes one drive "step" in reverse to correct for the set heading. This function only works when called inside of a loop.

#### Syntax
```reverse_step(speed, desired_angle)```<br />
```reverse_step(speed, desired_angle, max_speed=127)```<br />

#### Parameters
**speed:** Drive speed between 0 and 127; must be below the max_speed<br />
**desired_angle:** heading (0 degrees is defined when the Zumi object is created.)<br />
**max_speed:** Caps the max speed. Default to 127.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 200):
    zumi.reverse_step(80,0)

zumi.stop()
```
<hr/>

### reverse()

#### Description
Drives Zumi in reverse at a default speed of 40 for 1 second in the direction Zumi is currently facing.

#### Syntax
```reverse()```<br />
```reverse(speed=40, duration=1.0, desired_angle=None)```<br />

#### Parameters
**speed:** Positive integer value for speed between 0 and 80<br />
**duration:** Number of seconds Zumi will drive reverse<br />
**desired_angle:** Heading or desired angle to drive in (When None is selected Zumi drives wherever she is facing)

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.reverse()
time.sleep(1)
zumi.reverse(speed=50)
time.sleep(1)
zumi.reverse(duration=2.1)
time.sleep(1)

```
<hr/>

### right_u_turn()

#### Description
Drives Zumi in a right u-turn.

#### Syntax
```right_u_turn()```<br />
```right_u_turn(speed=30, step=4, delay=0.02)```<br />

#### Parameters
**speed:** Positive value for forward speed between 0 and 80<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
**delay:** The time delay between each angle step.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.right_u_turn(speed=20)
time.sleep(1)
zumi.right_u_turn(delay=0.04)

```
<hr/>

### smooth_forward()

#### Description
Causes Zumi to gradually accelerate forward to max speed during a given duration before decelerating back to zero.

#### Syntax
```smooth_forward(duration)```<br />
```smooth_forward(duration, rate=1)```<br />

#### Parameters
**duration:** Total duration of drive command including acceleration and deceleration<br />
**rate:** rate at which speed changes. Default to 1<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.smooth_forward(3)
time.sleep(1)
zumi.smooth_forward(duration=3,rate=2)

```
<hr/>

### smooth_reverse()

#### Description
Causes Zumi to gradually accelerate in reverse to max speed during a given duration before decelerating back to zero.

#### Syntax
```smooth_reverse(duration)```<br />
```smooth_reverse(duration, rate=1)```<br />

#### Parameters
**duration:** Total duration of drive command including acceleration and deceleration<br />
**rate:** rate at which speed changes. Default to 1<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.smooth_reverse(3)
time.sleep(1)
zumi.smooth_reverse(duration=3,rate=2)

```
<hr/>

### smooth_turn_left()

#### Description
Turns left gradually to reach the desired angle while also going forward. Default to 90 degrees.

#### Syntax
```smooth_turn_left()```<br />
```smooth_turn_left(desired_angle=90,speed=20,step=2)```<br />

#### Parameters
**desired_angle:** Degrees you want to turn from your starting position <br />
**speed:** Positive integer value for speed between 0 and 80. Default to 20.<br />
**step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.smooth_turn_left()
time.sleep(1)
zumi.smooth_turn_left(speed=30)

```
<hr/>

### smooth_turn_right()

#### Description
Turns right gradually to reach the desired angle while also going forward. Default to 90 degrees.

#### Syntax
```smooth_turn_right()```<br />
```smooth_turn_right(desired_angle=90,speed=20,step=2)```<br />

#### Parameters
desired_angle: Degrees you want to turn from your starting position <br />
speed: Positive integer value for speed between 0 and 80. Default to 20.<br />
step: The angle step size (decrease for wider turns, increase for tighter turns)<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.smooth_turn_right()
time.sleep(1)
zumi.smooth_turn_right(speed=30)

```
<hr/>

### speed_calibration()

#### Description
In order to use this method you will need a speed calibration sheet (Click [here](https://learn.robolink.com/wp-content/uploads/2021/06/calibration.pdf) for a PDF version).
Zumi will drive over 5 horizontal white lines that are 2 centimeters wide.
The slope and y_intercept will be generated for the best fit line of the speed prediction.
These values will be saved to the Zumi as a text file.

This function is necessary for move_to_coordinate(), move_inches(), and move_centimeters().

#### Syntax
```speed_calibration()```<br />
```speed_calibration(speed=40, ir_threshold=100, time_out=3, cm_per_brick=2, show_graphs=False)```<br />

#### Parameters
**speed:** Integer value that goes from (0 - 80). The lower the more accurate the speed prediction.<br />
**ir_threshold:** Integer value for the bottom left IR threshold (0-255).<br />
**time_out:** The number of seconds before the timeout.<br />
**cm_per_brick:** The width of each road marker in centimeters.<br />
**show_graphs:** Boolean default to False. If set to True, a graph will be displayed with the best fit line prediction. *Note: You may need to run this function twice to see the graph.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

# Place Zumi on the black portion of the speed calibration sheet 
zumi.speed_calibration()

# To show the graphs, replace the original "zumi.speed_calibration" with the following line  
# zumi.speed_calibration(show_graphs = True) 

```
<hr/>

### square_left()

#### Description
Drives Zumi in a counterclockwise square.

#### Syntax
```square_left()```<br />
```square_left(speed=40, seconds=1.0)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds Zumi drives for each side

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.square_left(seconds=1.5)
```
<hr/>

### square_right()

#### Description
Drives Zumi in a clockwise square.

#### Syntax
```square_right()```<br />
```square_right(speed=40, seconds=1.0)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds Zumi drives for each side

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.square_right(seconds=1.5)
```
<hr/>

### square()

#### Description
Drives Zumi in a square. Default to counterclockwise.

#### Syntax
```square()```<br />
```square(speed=40, seconds=1, direction=1)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds Zumi drives for each side<br />
**direction:** -1 for clockwise and +1 for counterclockwise<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.square(seconds=1.0)
time.sleep(1)
zumi.square(speed=60,seconds=1.2)
```
<hr/>

### stop()

#### Description
Stops Zumi's motors immediately.

#### Syntax
```stop()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 30):
	zumi.go_straight(30,0)

zumi.stop()
```
<hr/>

### triangle_left()

#### Description
Drives Zumi in a counterclockwise triangle.

#### Syntax
```triangle_left()```<br />
```triangle_left(speed=40, seconds=1.5)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds Zumi drives for each side<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.triangle_left(speed=30)
```
<hr/>

### triangle_right()

#### Description
Drives Zumi in a clockwise triangle.

#### Syntax
```triangle_right()```<br />
```triangle_right(speed=40, seconds=1.5)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds Zumi drives for each side<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.triangle_right(speed=30)
```
<hr/>

### triangle()

#### Description
Drives Zumi in a triangle. Default is counterclockwise.

#### Syntax
```triangle()```<br />
```triangle(speed=40, seconds=1.5, direction=1)```<br />

#### Parameters
**speed:** Drive speed between 0-80<br />
**seconds:** Duration in seconds Zumi drives for each side<br />
**direction:** -1 for clockwise and +1 for counterclockwise

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
zumi.triangle(speed=30, direction=-1)
```
<hr/>

### turn_left()

#### Description
Causes Zumi to turn left the specified number of degrees. Default to 90 degrees.

#### Syntax
```turn_left()```<br />
```turn_left(desired_angle=90, duration=1.0)```<br />

#### Parameters
**desired_angle:** Degrees you want to turn to the left from your starting position. Default to 90. Only positive values.<br />
**duration:** The amount of time in seconds Zumi will try and complete the turn. Increase for turns greater than 90 degrees.<br />


#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.turn_left()
time.sleep(1)
zumi.turn_left(130,1.5)

```
<hr/>

### turn_right()

#### Description
Causes Zumi to turn right the specified number of degrees. Default to 90 degrees.

#### Syntax
```turn_right()```<br />
```turn_right(desired_angle=90,duration=1.0)```<br />

#### Parameters
**desired_angle:** Degrees you want to turn to the right from your starting position. Default to 90. Only positive values.<br />
**duration:** The amount of time in seconds Zumi will try and complete the turn. Increase for turns greater than 90 degrees.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()

zumi.turn_right(45)
time.sleep(1)
zumi.turn_right(200,duration=1.3)

```
<hr/>

### turn()

#### Description
Zumi will turn to a desired angle.

#### Syntax
```turn(desired_angle)```<br />
```turn(desired_angle, duration=1.5, max_speed=25, accuracy=1):```<br />

#### Parameters
**desired_angle:** Angle to turn. Positive degrees to the left. Negative degrees to the right.<br />
**duration:** Number of seconds Zumi will perform the command.<br />
**speed:** The max motor speed for turning. A positive integer value between 0 and 80.<br />
**accuracy:** The tolerance of +- degrees.Ex: an accuracy = 1 will be +1 or -1 degree off from desired_angle.<br />

#### Returns
None

#### Example Code
##### Python
```python
#Python code
from zumi.zumi import Zumi
import time
zumi = Zumi()
# zumi will turn to the left
zumi.turn(90)

#zumi will turn to the right 90 degrees from the starting angle
zumi.turn(-90)

```