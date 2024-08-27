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
version 2.92
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
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.forward(40,2.0)
time.sleep(2)
zumi.calibrate_gyro()
time.sleep(2)
zumi.forward(40,2.0)

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
***integer* count:** the number of samples you want Zumi to take. Increase to improve accuracy. 

#### Returns
None

#### Example Code
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

***integer* Orientation state:** <br />
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
***float* x-angle:** The current x-angle of the Zumi

#### Example Code
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
***float* y-angle:** The current y-angle of the Zumi

#### Example Code
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
***float* z-angle:** The current z-angle of the Zumi

#### Example Code
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

#### Syntax
```reset_drive()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
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
```python
#Python code
from zumi.zumi import Zumi
zumi = Zumi()

for i in range(0,50):
    zumi.go_straight(50,0)
    # print the error of the z angle along with some of the PID accumulators
    print(zumi.PID_time_past,", ", zumi.error_past,", ", zumi.error_sum," , ", zumi.angle_list[2])

zumi.stop()
# this will reset those values
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
***list* angles:** The updated list of angles in the following format, ```[Gyro x,Gyro y,Gyro z,Acc x,Acc y,Comp x,Comp y,Rot_x,Rot_y,Rot_z,tilt_state]```

#### Example Code
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
***integer* threshold:** Threshold value (0 - 255) of the back left IR sensor

#### Returns
***boolean* detected:** Returns True if sensor is triggered.<br />

#### Example Code
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
***integer* threshold:** Threshold value (0 - 255) of the back right IR sensor

#### Returns
***boolean* detected:** Returns True if sensor is triggered.<br />

#### Example Code
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
***integer* threshold:** Threshold value (0 - 255) of the bottom left IR sensor

#### Returns
***boolean* detected:** Returns True if sensor is triggered.<br />

#### Example Code
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
***integer* threshold:** Threshold value (0 - 255) of the bottom right IR sensor

#### Returns
***boolean* detected:** Returns True if sensor is triggered.<br />

#### Example Code
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
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.forward(40,2.0)
time.sleep(2)
zumi.calibrate_gyro()
time.sleep(2)
zumi.forward(40,2.0)

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
***integer* count:** the number of samples you want Zumi to take. Increase to improve accuracy. 

#### Returns
None

#### Example Code
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
***integer* threshold:** Threshold value (0 - 255) of the front left IR sensor

#### Returns
***boolean* detected:** Returns True if sensor is triggered.<br />

#### Example Code
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
***integer* threshold:** Threshold value (0 - 255) of the front right IR sensor

#### Returns
***boolean* detected:** Returns True if sensor is triggered.<br />

#### Example Code
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
***list* IR sensor readings:** list of all 6 IR sensor values (0 - 255)<br />

*IR sensor indices:*<br/>
 index 0 - Front right sensor <br />
 index 1 - Bottom right sensor <br />
 index 2 - Back right sensor <br />
 index 3 - Bottom left sensor <br />
 index 4 - Back left sensor <br />
 index 5 - Front left sensor <br />

#### Example Code
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
***float* voltage:** The battery's voltage in units of Volts. 

#### Example Code
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
***integer* ir_sensor_index:** The specified index (0 - 5) from the IR sensors reading list.

*IR sensor indices:*
*  0  IR.FRONT_RIGHT = Front right sensor
*  1  IR.BOTTOM_RIGHT = Bottom right sensor
*  2  IR.BACK_RIGHT = Back right sensor
*  3  IR.BOTTOM_LEFT = Bottom left sensor
*  4  IR.BACK_LEFT = Back left sensor
*  5  IR.FRONT_LEFT = Front left sensor

#### Returns
***integer* IR sensor reading:** IR sensor value for the given sensor (0 - 255).

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()
FRONT_RIGHT = 0

for i in range(5):
    zumi.forward(40,1)
    ir_reading = zumi.get_IR_data(FRONT_RIGHT)
    print(ir_reading)
    # Divide by 4 because note is between 0 and 60
    
    time.sleep(0.05)
```
<hr/>

### get_orientation_message()

#### Description
Uses the acceleration values to find Zumi's orientation with respect to the strongest force being applied to Zumi (gravity).
This function returns the orientation as a string.

#### Syntax
```get_orientation_message()```<br />

#### Parameters
None

#### Returns
***string* orientation state**: a description of the orientation state<br />

*Descriptions of rientation state:*<br />
"unknown"<br />
"face up"<br />
"face down"<br />
"right side down"<br />
"left side down"<br />
"upright"<br />
"upside down"<br />
"accelerating"<br />

#### Example Code
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
***integer* Orientation state:** <br />
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
***float* x-angle:** The current x-angle of Zumi

#### Example Code
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
***float* x-angle:** The current y-angle of Zumi

#### Example Code
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
***float* x-angle:** The current z-angle of Zumi

#### Example Code
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
***list* angles:** The updated list of angles in the following format, ```[Gyro x,Gyro y,Gyro z,Acc x,Acc y,Comp x,Comp y,Rot_x,Rot_y,Rot_z,tilt_state]```

#### Example Code
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
***integer* speed:** The driving speed (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
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
***integer* speed:** The driving speed (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
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
***integer* speed:** The driving speed (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)
***integer* direction:** -1 for clockwise and +1 for counterclockwise<br />
***float* delay:** The time delay between each angle step

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
zumi.circle(speed=60, step=4, direction=-1)

```
<hr/>

### control_motors()

#### Description
Sets the speed of each individual motor. The changes take place immediately. This function does not include a stop command or any sensor feedback.

#### Syntax
```control_motors(right,left)```<br />

#### Parameters
***integer* right:** The speed value of the right motor (-126-127). Positive values for forward, negative values for reverse.<br />
***integer* left:** The speed value of the left motor (-126-127). Positive values for forward, negative values for reverse.<br />

#### Returns
None

#### Example Code
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
***integer* road_markers:** The number of road markers to drive over<br />
***integer* speed:** The speed value (0 - 80)<br />
***integer* ir_threshold:** The IR threshold value for the bottom left IR sensors to detect black or white.<br />
***integer* time_out:** Number of seconds before the timeout ends and Zumi stops driving.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

#must start off in a black area.
zumi.drive_over_markers(5)

#Drive over 10 road marker with a timeout of 6 seconds
zumi.drive_over_markers(5,40,100,3)

```
<hr/>

### figure_8()

#### Description
Drives Zumi in a figure 8.

#### Syntax
```figure_8()```<br />
```figure_8(speed=30, step=3, delay=0.02)```<br />

#### Parameters
***integer* speed:** The driving speed (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
***float* delay:** The time delay between each angle step<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
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
***integer* speed:** The driving speed value (0 - 80)<br />
***float* duration:** Number of seconds Zumi will drive and check for collision<br />
***integer* desired_angle:** Heading or desired angle, in degrees (Default to None which is Zumi's current heading)<br />
***integer* left_th:** threshold of the front left IR sensor (0 - 255)<br />
***integer* right_th:** threshold of the front right IR sensor (0 - 255)<br />

#### Returns
None

#### Example Code
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
***integer* speed:** The drive speed value (0 - 127); must be below the max_speed<br />
***integer* desired_angle:** heading (0 degrees is defined when the Zumi object is created.)<br />
***integer* max_speed:** Caps the max speed. Default to 127.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(0, 200):
    zumi.forward_step(40,20)

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
***integer* speed:** The driving speed value (0 - 80)<br />
***float* duration:** Number of seconds Zumi will drive forward<br />
***integer* desired_angle:** Heading or desired angle, in degrees, to drive in (When None is selected Zumi drives wherever she is facing)

#### Returns
None

#### Example Code
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
***integer* speed:** The driving speed value (0 - 80)<br />
***float* duration:** Number of seconds Zumi will try to align to the funnel piece<br />
***integer* angle:** Heading or desired angle, in degrees, (Default to None which is Zumi's current heading)<br />
***integer* angle_adj:** The angle, in degrees, Zumi will turn if one IR sensor detects white<br />
***integer* l_th:** threshold of the bottom left IR sensor (0 - 255)<br />
***integer* r_th:** threshold of the bottom right IR sensor (0 - 255)<br />

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed (0 - 127); must be below the max_speed<br />
***integer* desired_angle:** heading (0 degrees is defined when the Zumi object is created.)<br />
***integer* max_speed:** Caps the max speed. Default to 127.

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed (0 - 127); must be below the max_speed<br />
***integer* desired_angle:** heading (0 degrees is defined when the Zumi object is created.)<br />
***integer* max_speed:** Caps the max speed. Default to 127.

#### Returns
None

#### Example Code
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
***integer* speed:** The forward speed (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
***float* delay:** The time delay between each angle step

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
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
***integer* speed:** The forward speed (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
***float* delay:** The time delay between each angle step

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
zumi.left_u_turn()
time.sleep(1)
zumi.left_u_turn(step=3)

```
<hr/>

### line_follower()

#### Description
On the road, Zumi uses the camera to detect lanes and stay inside of them.

#### Syntax
```zumi.line_follower(duration=3, left_thresh=100,right_thresh=100)```

#### Parameters
***integer* duration:** Number of seconds Zumi will drive on the line<br />
***integer* left_thresh:** threshold of the bottom left IR sensor. By default, threshold is 100<br />
***integer* right_thresh:** threshold of the bottom right IR sensor. By default, threshold is 100<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.line_follower(3)
zumi.line_follower(3, left_thresh=100,right_thresh=100)
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
***integer* speed:** The drive speed value (0 - 80)<br />
***integer* duration:** Number of seconds Zumi will drive on the line<br />
***integer* angle:** Heading or desired angle, in degrees (default is None which is Zumi's current heading)<br />
***integer* angle_adj:** The number of degrees Zumi will turn if one IR sensor detects white. <br />
***integer* l_th:** threshold of the bottom left IR sensor.<br />
***integer* r_th:** threshold of the bottom right IR sensor.<br />

#### Returns
None

#### Example Code
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
***float* distance:** the distance in centimeters you want to travel<br />
***integer* angle:** heading, in degrees (0 degrees is defined when the Zumi object is created.) Default to None<br />
***float* k_p:** P-gain. Default to None.<br />
***float* k_i:** I-gain. Default to None.<br />
***float* k_d:** D-gain. Default to None.<br />

#### Returns
None

#### Example Code
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
***float* distance:** the distance in inches you want to travel<br />
***integer* angle:** heading, in degrees (0 degrees is defined when the Zumi object is created.) Default to None<br />
***float* k_p:** P-gain. Default to None.<br />
***float* k_i:** I-gain. Default to None.<br />
***float* k_d:** D-gain. Default to None.<br />

#### Returns
None

#### Example Code
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
***float* desired_x:** The x-coordinate of the destination<br />
***float* desired_y:** The y-coordinate of the destination<br />
***float* k_p:** P-gain. Default to None.<br />
***float* k_i:** I-gain. Default to None.<br />
***float* k_d:** D-gain. Default to None.<br />
***string* units:** Defaults to "in" or inches. Set it to "cm" for centimeters.<br />

#### Returns
None

#### Example Code Sample 1
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
 Sample 2
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
 Sample 3
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
***integer* speed:** Drive speed (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
***float* delay:** The time delay between each angle step<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,2)
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
***integer* speed:** Drive speed between (0 - 80)<br />
***float* seconds:** Duration in seconds for shorter side<br />
***float* ratio:** Ratio of longer side to shorter side (Multiply ```ratio``` by ```seconds``` to get the duration of the longer side) <br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
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
***integer* speed:** Drive speed between (0 - 80)<br />
***float* seconds:** Duration in seconds for shorter side<br />
***float* ratio:** Ratio of longer side to shorter side (Multiply ```ratio``` by ```seconds``` to get the duration of the longer side) <br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
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
***integer* speed:** Drive speed between (0 - 80)<br />
***float* seconds:** Duration in seconds for shorter side<br />
***integer* direction:** direction of turn (1 for counterclockwise and -1 for clockwise)<br />
***float* ratio:** Ratio of longer side to shorter side (Multiply ```ratio``` by ```seconds``` to get the duration of the longer side) <br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
import time

zumi = Zumi()

zumi.forward(40,1)
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
***integer* speed:** Driving speed (0 - 80)<br />
***float* duration:** Number of seconds Zumi will drive and check for collision<br />
***integer* desired_angle:** Heading or desired angle, in degrees (Default to None which is Zumi's current heading)<br />
***integer* left_th:** threshold of the back left IR sensor<br />
***integer* right_th:** threshold of the back right IR sensor<br />

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed between (0 - 127); must be below the max_speed<br />
***integer* desired_angle:** heading, in degrees (0 degrees is defined when the Zumi object is created.)<br />
***integer* max_speed:** Caps the max speed. Default to 127.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

for i in range(50):
    zumi.reverse_step(40,0)

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
***integer* speed:** Driving speed between (0 - 80)<br />
***float* duration:** Number of seconds Zumi will drive reverse<br />
***integer* desired_angle:** Heading or desired angle to drive in, in degrees (When None is selected Zumi drives wherever she is facing)

#### Returns
None

#### Example Code
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
zumi.reverse(50,2.1,45)

```
<hr/>

### right_u_turn()

#### Description
Drives Zumi in a right u-turn.

#### Syntax
```right_u_turn()```<br />
```right_u_turn(speed=30, step=4, delay=0.02)```<br />

#### Parameters
***integer* speed:** Driving speed value (0 - 80)<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />
***float* delay:** The time delay between each angle step.<br />

#### Returns
None

#### Example Code
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
***float* duration:** Total duration of drive command including acceleration and deceleration<br />
***float* rate:** rate at which speed changes. Default to 1<br />

#### Returns
None

#### Example Code
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
***float* duration:** Total duration of drive command including acceleration and deceleration<br />
***float* rate:** Rate at which speed changes. Default to 1<br />

#### Returns
None

#### Example Code
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
***integer* desired_angle:** Degrees you want to turn from your starting position <br />
***integer* speed:** Driving speed (0 - 80). Default to 20.<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />

#### Returns
None

#### Example Code
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
***integer* desired_angle:** Degrees you want to turn from your starting position <br />
***integer* speed:** Driving speed between 0 and 80. Default to 20.<br />
***integer* step:** The angle step size (decrease for wider turns, increase for tighter turns)<br />

#### Returns
None

#### Example Code
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
***integer* speed:** Driving speed value (0 - 80). The lower the more accurate the speed prediction.<br />
***integer* ir_threshold:** Integer value for the bottom left IR threshold (0-255).<br />
***float* time_out:** The number of seconds before the timeout.<br />
***float* cm_per_brick:** The width of each road marker in centimeters.<br />
***boolean* show_graphs:** Defaults to False. If set to True, a graph will be displayed with the best fit line prediction. *Note: You may need to run this function twice to see the graph.<br />

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed value (0 - 80)<br />
***float* seconds:** Duration in seconds Zumi drives for each side

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed value (0 - 80)<br />
***float* seconds:** Duration in seconds Zumi drives for each side

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed between 0-80<br />
***float* seconds:** Duration in seconds Zumi drives for each side<br />
***integer* direction:** Direction of turn (-1 for clockwise and +1 for counterclockwise)<br />

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed value (0 - 80)<br />
***float* seconds:** Duration in seconds Zumi drives for each side<br />

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed value (0 - 80)<br />
***float* seconds:** Duration in seconds Zumi drives for each side<br />

#### Returns
None

#### Example Code
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
***integer* speed:** Drive speed value (0 - 80)<br />
***float* seconds:** Duration in seconds Zumi drives for each side<br />
***integer* direction:** Direction of turn (-1 for clockwise and +1 for counterclockwise)

#### Returns
None

#### Example Code
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
***integer* desired_angle:** Degrees you want to turn to the left from your starting position. Default to 90. Only positive values.<br />
***float* duration:** The amount of time in seconds Zumi will try and complete the turn. Increase for turns greater than 90 degrees.<br />


#### Returns
None

#### Example Code
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
***integer* desired_angle:** Degrees you want to turn to the right from your starting position. Default to 90. Only positive values.<br />
***float* duration:** The amount of time in seconds Zumi will try and complete the turn. Increase for turns greater than 90 degrees.<br />

#### Returns
None

#### Example Code
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
***integer* desired_angle:** Angle to turn. Positive degrees to the left. Negative degrees to the right.<br />
***float* duration:** Number of seconds Zumi will perform the command.<br />
***integer* speed:** The max motor speed for turning (0 - 80).<br />
***integer* accuracy:** The tolerance of +- degrees (e.g. accuracy = 1 means +1 or -1 degree off from desired_angle).<br />

#### Returns
None

#### Example Code
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

<hr className="section_hr"/>

## LEDs-and-Buzzer

### all_lights_off()

#### Description
Turns all LEDs off

#### Syntax
```all_lights_off()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
import time

zumi = Zumi()

zumi.all_lights_on()
time.sleep(2)
zumi.all_lights_off()
```
<hr/>

### all_lights_on()

#### Description
Turns all LEDs on
the 2 front white leds and the rear 2 leds.

#### Syntax
```all_lights_on()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.all_lights_on()
```
<hr/>

### brake_lights_off()

#### Description
Turns off front LEDs only

#### Syntax
```brake_lights_off()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
import time
zumi = Zumi()

zumi.brake_lights_on()
time.sleep(2)
zumi.brake_lights_off()
```
<hr/>

### brake_lights_on()

#### Description
Turns on back LEDs only

#### Syntax
```brake_lights_on()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.brake_lights_on()
```
<hr/>

### hazard_lights_off()

#### Description
Turns off flashing front and back LEDs

#### Syntax
```hazard_lights_off()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
import time

zumi = Zumi()

zumi.hazard_lights_on()
time.sleep(2)
zumi.hazard_lights_off()
```
<hr/>

### hazard_lights_on()

#### Description
Flashes both front and back LEDs

#### Syntax
```hazard_lights_on()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 

zumi = Zumi()

zumi.hazard_lights_on()
```
<hr/>

### headlights_off()

#### Description
Turns off front LEDs only

#### Syntax
```headlights_off()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
import time

zumi = Zumi()

zumi.headlights_on()
time.sleep(2)
zumi.headlights_off()
```
<hr/>

### headlights_on()

#### Description
Turns on front LEDs only

#### Syntax
```headlights_on()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
import time

zumi = Zumi()

zumi.headlights_on()
```
<hr/>

### play_note()

#### Description
Play a note, from C2 - B6.

#### Syntax
```play_note(note_type)```<br />
```play_note(note_type, note_duration=500)```<br />

##### Parameters
***integer/enum* note_type:** Integer from 0 to 60 or enum from Note class. Setting the note to 0 will result in no sound.<br />
***integer* note_duration:** Default to 500 milliseconds but can be an integer from 0 to 2500 milliseconds. Must be in 100 millisecond increments ex. 100, 200, 500, 2000. If 0 note will play forever.<br />

***class* Note:**<br />
    C2 = 1<br />
    CS2 = 2<br />
    D2 = 3<br />
    DS2 = 4<br />
    E2 = 5<br />
    F2 = 6<br />
    FS2 = 7<br />
    G2 = 8<br />
    GS2 = 9<br />
    A2 = 10<br />
    AS2 = 11<br />
    B2 = 12<br />
    C3 = 13<br />
    CS3 = 14<br />
    D3 = 15<br />
    DS3 = 16<br />
    E3 = 17<br />
    F3 = 18<br />
    FS3 = 19<br />
    G3 = 20<br />
    GS3 = 21<br />
    A3 = 22<br />
    AS3 = 23<br />
    B3 = 24<br />
    C4 = 25<br />
    CS4 = 26<br />
    D4 = 27<br />
    DS4 = 28<br />
    E4 = 29<br />
    F4 = 30<br />
    FS4 = 31<br />
    G4 = 32<br />
    GS4 = 33<br />
    A4 = 34<br />
    AS4 = 35<br />
    B4 = 36<br />
    C5 = 37<br />
    CS5 = 38<br />
    D5 = 39<br />
    DS5 = 40<br />
    E5 = 41<br />
    F5 = 42<br />
    FS5 = 43<br />
    G5 = 44<br />
    GS5 = 45<br />
    A5 = 46<br />
    AS5 = 47<br />
    B5 = 48<br />
    C6 = 49<br />
    CS6 = 50<br />
    D6 = 51<br />
    DS6 = 52<br />
    E6 = 53<br />
    F6 = 54<br />
    FS6 = 55<br />
    G6 = 56<br />
    GS6 = 57<br />
    A6 = 58<br />
    AS6 = 59<br />
    B6 = 60<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
from zumi.protocol import Note
import time

zumi = Zumi()

zumi.play_note(30, 500)
time.sleep(1)
zumi.play_note(Note.C4)
time.sleep(1)
# will stop the buzzer
zumi.play_note(0, 0)
```
<hr/>

### signal_left_off()

#### Description
Turns off flashing both left front and left back LEDs

#### Syntax
```signal_left_off()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
import time

zumi = Zumi()

zumi.signal_left_on()
time.sleep(2)
zumi.signal_left_off()
```
<hr/>

### signal_left_on()

#### Description
Flashes both left front and left back LEDs

#### Syntax
```signal_left_on()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 

zumi = Zumi()

zumi.signal_left_on()
```
<hr/>

### signal_right_off()

#### Description
Turns off flashing both right front and right back LEDs

#### Syntax
```signal_right_off()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi 
import time

zumi = Zumi()

zumi.signal_right_on()
time.sleep(2)
zumi.signal_right_off()
```
<hr/>

### signal_right_on()

#### Description
Flashes both right front and right back LEDs

#### Syntax
```signal_right_on()```<br />

##### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi

zumi = Zumi()

zumi.signal_right_on()
```
<hr className="section_hr"/>

## Camera

### capture()

#### Description
Takes a picture using the PiCamera and saves it in an array.

#### Syntax
```capture()```

#### Parameters
None

#### Returns
***ndarray* image array:** a NumPy array representing the captured image

#### Example Code
#### Python
```python
#Python code

from zumi.util.camera import Camera
import time

camera=Camera()

camera.start_camera()
frame = camera.capture()
camera.show_image(frame)
time.sleep(5)   
camera.close()
```

<hr/>

### clear_output()

#### Description
Clear the output for the next image to show.

#### Syntax
```clear_output()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
from zumi.util.camera import Camera

camera = Camera()

camera.start_camera()
try:
    for x in range(30):
        frame = camera.capture()
        camera.show_image(frame)
        camera.clear_output() # Clear the output for the next image to show
finally:
    camera.close()
```
<hr/>

### close()

#### Description
Releases camera's resources 

#### Syntax
```close()```

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.camera import Camera

camera=Camera()

camera.start_camera()
camera.save_photo()
camera.close() # closes camera stream
```
<hr/>

### is_closed()

#### Description
Checks if the camera stream is open

#### Syntax
```is_closed()```

#### Parameters
None

#### Returns
***Boolean***: Returns True if camera stream is open. Otherwise returns False

#### Example Code
```python
#Python code
from zumi.util.camera import Camera

camera=Camera()

camera.start_camera()
camera.close()
print("Camera is closed?")
print(camera.is_closed())
if not camera.is_closed():
    camera.close()
```
<hr/>

### save_photo()

#### Description
Captures an image and saves it in the working directory.

#### Syntax
```save_photo()```<br />
```save_photo(file_name)```

#### Parameters
***string* file_name:** The name of the image file that will be saved. Default name (no input) is the current time.

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.camera import Camera

camera=Camera()

camera.start_camera()
camera.save_photo() 
#"<current_time>.jpg" file will be saved in the current working directory
camera.save_photo("Cheese") 
#"Cheese.jpg" file will be saved in the current working directory
camera.close() 
```
<hr/>

### show_image()

#### Description
Displays an image taken from Zumi's camera.

#### Syntax
```show_image(frame)```<br />

#### Parameters
***ndarray* frame:** An image array that will be displayed

#### Returns
None

#### Example Code
```python
#Python code

from zumi.util.camera import Camera
import time

camera=Camera()

camera.start_camera()
frame = camera.capture()
camera.show_image(frame)
camera.close()
```
<hr/>

### start_camera()

#### Description
Turns on the camera

#### Syntax
```start_camera()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.camera import Camera
import cv2
import IPython.display
import PIL.Image
from io import BytesIO
import time

# you can change the resolution of the camera
# using the image_w = image width 
# and the   image_h = image heigth 
#camera = Camera(image_w=1280,image_h=960)
#camera = Camera(image_w=1024,image_h=768)
#camera = Camera(image_w=128,image_h=64)
camera = Camera(image_w=60,image_h=32)

camera.start_camera() # opens camera stream

time_start = time.time()
try: 
    for i in range(30):
        frame = camera.capture()

        img = PIL.Image.fromarray(frame, "RGB")
        buffer = BytesIO()
        img.save(buffer,format="JPEG") 
        
        IPython.display.display(IPython.display.Image(data=buffer.getvalue()))

        IPython.display.clear_output(wait=True) 
        
finally:
    print(30/(time.time()-time_start))
```
<hr className="section_hr"/>

## Colors

### fit()

#### Description
Fits values for prediction. By default, HSV is fitted.

#### Syntax
```fit(values)```<br />

#### Parameters
***string* values**: values to be fitted for prediction. By default hsv is fitted.

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.camera import Camera
from zumi.util.screen import Screen
from zumi.util.color_classifier import ColorClassifier
import time
camera = Camera()
screen = Screen()
zumi = Zumi()

user_name = 'username' # Type your actual username here
project_name = 'project_name' # Type your actual project name here

knn = ColorClassifier(user_name=user_name) # Must include "user_name="
train = knn.load_model(project_name)
knn.fit("hsv") # Fitting to HSV

camera.start_camera()
while True:
    user_input = input("Press 'enter' to predict or 'q to quit:  ") 
    if user_input == "q":
        break
    image = camera.capture()
    predict = knn.predict(image)
    screen.draw_text_center(predict)
camera.close()
```
<hr/>

### predict()

#### Description
Predicts a color captured from the Zumi camera.

#### Syntax
```predict(pred_features)```<br />

#### Parameters
***ndarray* p*red_features**: The image to draw the prediction from

#### Returns
***string* prediction**: The prediction made by the knn color classifier

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.camera import Camera
from zumi.util.screen import Screen
from zumi.util.color_classifier import ColorClassifier
import time
camera = Camera()
screen = Screen()
zumi = Zumi()

user_name = 'username' # Type your actual username here
project_name = 'project_name' # Type your actual project name here

knn = ColorClassifier(user_name=user_name) # Must include "user_name="
train = knn.load_model(project_name)
knn.fit("hsv") # Fitting to HSV

camera.start_camera()
while True:
    user_input = input("Press 'enter' to predict or 'q to quit:  ") 
    if user_input == "q":
        break
    image = camera.capture()
    predict = knn.predict(image) # Based on the image taken, the knn color classifier will predict a color
    screen.draw_text_center(predict) # This prediction gets written to the Zumi screen
camera.close()
```
<hr/>

### load_model()

#### Description
Loads the model based on your project name.

#### Syntax
```load_model(name)```<br />

#### Parameters
***string* name**: The project name. This will depend on what you chose to name your project

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.camera import Camera
from zumi.util.screen import Screen
from zumi.util.color_classifier import ColorClassifier
import time
camera = Camera()
screen = Screen()
zumi = Zumi()
user_name = 'username' # Type your actual username here
project_name = 'project_name' # Type your actual project name here

knn = ColorClassifier(user_name=user_name) # Must include "user_name="
train = knn.load_model(project_name) # Loads the model based on your project name.
knn.fit("hsv")

camera.start_camera()
while True:
    user_input = input("Press 'enter' to predict or 'q to quit:  ") 
    if user_input == "q":
        break
    image = camera.capture()
    predict = knn.predict(image)
    screen.draw_text_center(predict)
camera.close()
```
<hr className="section_hr"/>

## Vision

### convert_to_gray()

#### Description
Converts captured image into a grayscaled image.

#### Syntax
```convert_to_gray(img)```

#### Parameters
***ndarray* img:** an image array to be converted

#### Returns
***ndarray* image array:** a modified image array of *img* for grayscaling

#### Example Code
```python
from zumi.util.vision import Vision
from zumi.util.camera import Camera

camera = Camera()
vision = Vision()

camera.start_camera()
img = camera.capture()
camera.close()
gray = vision.convert_to_gray(img) # Convert it to grayscaled version of img
camera.show_image(gray)

```
<hr/>

### convert_to_hsv()

#### Description
Converts captured image to an HSV image.

#### Syntax
```convert_to_hsv(img)```

#### Parameters
***ndarray* img:** An image array to be converted

#### Returns
***ndarray* image array**: A modified image array of *img* in the HSV colorspace


#### Example Code
```python
from zumi.util.vision import Vision
from zumi.util.camera import Camera

camera = Camera()
vision = Vision()

camera.start_camera()
img = camera.capture()
camera.close()
hsv = vision.convert_to_hsv(img) # Convert it to HSV, hue saturation and value
camera.show_image(hsv)

```
<hr/>

### get_QR_message()

#### Description
Returns the message from decoded QR code.

#### Syntax
```get_QR_message(Qr_object)```

#### Parameters
***Decoded* Qr_object:** decoded QR data (an object of class Decoded) that find_QR_code()


#### Returns
***string* message:** decoded message from QR code

#### Example Code
```python
from zumi.util.vision import Vision
from zumi.util.camera import Camera

camera = Camera()

camera.start_camera()
frame = camera.capture()
camera.close()
qr_code = vision.find_QR_code(frame)
message = vision.get_QR_message(qr_code) # returns None if QR code was not detected
print(message)
```
<hr/>

### find_face()

#### Description
Searches captured image for facial features to find face's pixel location in the image.

#### Syntax
```find_face(frame, scale_factor=1.05, min_neighbors=8, min_size=(40,40))```

#### Parameters
***ndarray* frame:** an image array<br/> 
***float* scale_factor:** a number to reduce image size for easier training. By default, scale_factor is 1.05 (reducing the image by 5%)<br/>
***integer* min_neighbors:** minimum number of neighbors (features that have similarities)<br/>
***integer* min_size:** minimum size of face to be detected<br/>

#### Returns
***list* area:** [x,y,w,h] of the face's x and y coordinates along with the area's width and height. Returns ```None``` if not detected

#### Example Code
```python
from zumi.util.camera import Camera
from zumi.util.vision import Vision

camera = Camera()
vision = Vision()

camera.start_camera()
image = camera.capture()
camera.close()

face_location = vision.find_face(image, scale_factor = 1.05, min_neighbors=8, min_size= (40,40))
# returns location of face frame within image. None if not found

print("[x,y,w,h] =",face_location)
camera.show_image(image) # displays image with outlined face (if it exists) in Jupyter Notebook
```
<hr/>

### find_stop_sign()

#### Description

Searches an image for a stop sign and returns a list containing x-y coordinates, width, and height of the stop sign's frame.

#### Syntax

``find_stop_sign(frame, scale_factor=1.05, min_neighbors=8, min_size=(40,40))``

#### Parameters

***ndarray* frame:** an image array<br/> 
***float* scale_factor:** a number to reduce image size for easier training. By default, scale_factor is 1.05 (reducing the image by 5%)<br/>
***integer* min_neighbors:** minimum number of neighbors (features that have similarities)<br/>
***integer* min_size:** minimum size for the stop sign to be detected<br/>

#### Returns

***list* area:** [x,y,w,h] of the stop sign's x and y coordinates along with the area's width and height. Returns ```None``` if not detected

#### Example
```python
from zumi.util.camera import Camera
from zumi.util.vision import Vision

camera = Camera()
vision = Vision()

camera.start_camera()
image = camera.capture()
camera.close()

stop_sign_location = vision.find_stop_sign(image, scale_factor = 1.05, min_neighbors=8, min_size= (40,40))
# returns location of stop sign frame within image. None if not found

print("[x,y,w,h] =",stop_sign_location)
camera.show_image(image) # displays image with outlined stop sign (if it exists) in Jupyter Notebook
```

<hr/>

### find_QR_code()

#### Description
Processes the image that is given as a parameter and draws a rectangle around the QR code with the decoded message on it.

#### Syntax
```find_QR_code(frame)```

#### Parameters
***ndarray frame:** a NumPy array representing a captured image (image array)

#### Returns
***Decoded* decoded_Qr:** decoded QR data (an object of Decoded class). Returns ```None``` if QR code is not detected

#### Example Code
```python
from zumi.zumi import Zumi
from zumi.util.camera import Camera
from zumi.util.vision import Vision

camera = Camera()
vision = Vision()

camera.start_camera()
try: 
    for i in range(50):
        frame = camera.capture()
        vision.find_QR_code(frame)
        camera.show_image(frame)
        camera.clear_output()
finally:
    print("Done!")
    camera.close()
```
<hr/>

### find_smile()

#### Description
Searches captured image for smiling facial features to find smile's pixel location in the image.

#### Syntax
```find_smile(frame, scale_factor=1.05, min_neighbors=8, min_size=(40,40))```

#### Parameters
***ndarray* frame:** a NumPy array representing a captured image (image array)<br/>
***float* scale_factor:** a number to reduce image size for easier training. By default, scale_factor is 1.05 (reducing the image by 5%)<br/>
***integer* min_neighbors:** minimum number of neighbors (features that have similarities)<br/>
***integer* min_size:** minimum size of face to be detected<br/>
***integer* max_size:** maximum size of face to be detected<br/>

#### Returns
***list* area:** [x,y,w,h] of the smiles's x and y coordinates along with the area's width and height. Returns None if not detected

#### Example Code
```python
from zumi.util.camera import Camera
from zumi.util.vision import Vision

camera = Camera()
vision = Vision()

camera.start_camera()
image = camera.capture()
camera.close()


smile_location = vision.find_smile(image, scale_factor = 1.05, min_neighbors=8, min_size= (40,40))
# returns location of smile frame within image. None if not found

print("[x,y,w,h] =",smile_location)
camera.show_image(image) # displays image with outlined smile (if it exists) in Jupyter Notebook
```
<hr className="section_hr"/>

## Screen

### angry()

#### Description
Draws Zumi's angry eyes on the screen.

#### Syntax
```angry()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.angry()
```
<hr/>

### blink()

#### Description
Draws Zumi's blinking animation on the screen.

#### Syntax
```blink()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.blink()
```
<hr/>

### clear_display()

#### Description
Clears everything on the OLED by drawing a black rectangle.

#### Syntax
```clear_display()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.print("Hello")
screen.clear_display()

```
<hr/>

### clear_drawing()

#### Description
Clears the drawing canvas object without clearing the OLED screen. Use this before using any new draw functions.

#### Syntax
```clear_drawing()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.draw_circle(30,30,10)
time.sleep(1)
screen.clear_drawing()
screen.print("Hello")

```
<hr/>

### clock()

#### Description
Clears the screen and draws a clock with the given hour and minute set by the user.

#### Syntax
```clock(hour, minute)```<br />
```clock(hour, minute, string='', font_size=18)```<br />

#### Parameters
***integer* hour:** hour set by user<br />
***integer* minute:** minute set by user<br />
***string* message:** an 8 character message to be displayed under the clock (optional). Defaults to an empty string.<br />
***integer* font_size:** the font-size of the time

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.clock(3,15,"Monday")
```
<hr/>

### close_eyes()

#### Description
Draws Zumi's closed eyes on the screen.

#### Syntax
```close_eyes()```<br />

#### Parameters
None

#### Returns
None


#### Example Code
```python
#Python code
from zumi.util.screen import Screen

screen = Screen()

screen.close_eyes()
```
<hr/>

### draw_arc()

#### Description
Draws an arc within the boundaries of points x1,y1, and x2,y2 at the specified starting and ending angles.

#### Syntax
```draw_arc(x1, y1, x2, y2, start_ang, end_ang)```<br />
```draw_arc(x1, y1, x2, y2, start_ang, end_ang,fill_in=True)```<br />

#### Parameters
***integer* x1:** x coordinate of top-left corner for the rectangle enclosing the arc<br />
***integer* y1:** y coordinate of top-left corner for the rectangle enclosing the arc<br />
***integer* x2:** x coordinate of bottom-right corner for the rectangle enclosing the arc<br />
***integer* y2:** y coordinate of bottom-right corner for the rectangle enclosing the arc<br />
***integer* start_ang:** starting arc angle, in degrees<br />
***integer* end_ang:** ending arc angle, in degrees<br />
***boolean* fill_in:** Boolean that selects if the triangle will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen

screen=Screen()

screen.draw_arc(0,0,50,50,-180,0)
```
<hr/>

### draw_chord()

#### Description
Draws a chord within the boundaries of points x1,y1, and x2,y2 at the specified starting and ending angles.

#### Syntax
```draw_chord(x1, y1, x2, y2, start_ang, end_ang)```<br />
```draw_chord(x1, y1, x2, y2, start_ang, end_ang,fill_in=True)```<br />

#### Parameters
***integer* x1:** x coordinate of top-left corner for the rectangle enclosing the chord<br />
***integer* y1:** y coordinate of top-left corner for the rectangle enclosing the chord<br />
***integer* x2:** x coordinate of bottom-right corner for the rectangle enclosing the chord<br />
***integer* y2:** y coordinate of bottom-right corner for the rectangle enclosing the chord<br />
***integer* start_ang:** starting angle<br />
***integer* end_ang:** ending angle<br />
***boolean* fill_in:** Boolean that selects if the triangle will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen

screen=Screen()

screen.draw_chord(0,0,20,20,-180,0)
screen.draw_chord(30,30,50,50,-180,0)

#do a 360 from -180 degrees to 180 degrees
screen.draw_chord(60,30,100,50,-180,180)
```
<hr/>

### draw_circle()

#### Description
Draws a circle that fits inside a square with its top-left corner at x,y and a width/height of the circle's diameter.

#### Syntax
```draw_circle(x, y, diameter)```<br />
```draw_circle(x, y, diameter, fill_in=True)```<br />

#### Parameters
***integer* x:** x-coordinate of the top-left corner of the enclosing square<br />
***integer* y:** y-coordinate of the top-left corner of the enclosing square<br />
***integer* diameter:** diameter of the circle (also the width and height of enclosing square)<br />
***boolean* fill_in:** Boolean that selects if the triangle will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.draw_circle(10,0,20,fill_in=False)
```
<hr/>

### draw_ellipse()

#### Description
Draws an ellipse that fits in a rectangle with its top-left corner at x,y and a set width and height.

#### Syntax
```draw_ellipse(self, x, y, width, height)```<br />
```draw_ellipse(self, x, y, width, height, fill_in=True)```<br />

#### Parameters
***integer* x:** x coordinate of the top-left corner of the enclosing rectangle<br />
***integer* y:** y coordinate of the top-left corner of the enclosing rectangle<br />
***integer* width:** width of enclosing rectangle<br />
***integer* height:** height of enclosing rectangle<br />
***boolean* fill_in:** Boolean that selects if the triangle will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.draw_ellipse(0,0,100,30,fill_in=True)
```
<hr/>

### draw_image()

#### Description
Draws the image on the screen.

#### Syntax
```draw_image(img)```<br />

#### Parameters
***Image* img:** An image object that's produced using ```screen.path_to_image(path)```, "path" being the file location of your image.

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
path = "/usr/local/lib/python3.5/dist-packages/zumi/util/images/happy1.ppm"
screen.draw_image(screen.path_to_image(path))

```
<hr/>

### draw_line()

#### Description
Draws a line between points (x1,y1) and (x2,y2).

#### Syntax
```draw_line(x1, y1, x2, y2)```<br />
```draw_line(x1, y1, x2, y2, thickness=1,fill_in=True)```<br />

#### Parameters
***integer* x1:** x coordinate of the starting point<br />
***integer* y1:** y coordinate of the starting point<br />
***integer* x2:** x coordinate of the ending point<br />
***integer* y2:** y coordinate of the ending point<br />
***integer* thickness:** pixel width of the line<br />
***boolean* fill_in:** Boolean that selects if the line will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.draw_line(0,0,40,40,fill_in=True)
screen.draw_line(40,0,0,40,thickness=10,fill_in=True)
```
<hr/>

### draw_point()

#### Description
Draws a single pixel at the set x and y coordinate.

#### Syntax
```draw_point(x, y)```<br />
```draw_point(x, y,fill_in=True)```<br />

#### Parameters
***integer* x:** the x coordinate<br />
***integer* y:** the y coordinate<br />
***boolean* fill_in:** Boolean that selects if the point will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.draw_point(100,30)
```
<hr/>

### draw_polygon()

#### Description
Draws lines between points in a given list ```[(x1,y1),...,(xn,yn)]``` to form a shape.

#### Syntax
``` draw_polygon(points_list)```<br />
``` draw_polygon(points_list,fill_in = True):```<br />

#### Parameters
***list* points_list:** A list ```[x1,y1,x2,y2,....xn,yn]``` with at least 3 points <br />
***boolean* fill_in:** Boolean that selects if the polygon will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()
points = [(30,50),(90,10),(20,10),(5,20)]

screen.draw_polygon(points)
```
<hr/>

### draw_rect()

#### Description
Draws a rectangle on the screen.

#### Syntax
```draw_rect(x, y, width, height)```<br />
```draw_rect(x, y, width, height, thickness=1, fill_in=False)```<br />

#### Parameters
***integer* x:** the top left corner x coordinate<br />
***integer* y:** the top left corner y coordinate<br />
***integer* width:** width of rectangle<br />
***integer* height:** height of rectangle<br />
***integer* thickness:** thickness of rectangle border, default to 1<br />
***boolean* fill_in:** Boolean that selects if the shape will be filled in. Default to False.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.draw_rect(0,0,128,64,thickness=1,fill_in=True)
```
<hr/>

### draw_square()

#### Description
Draws a square on the screen.

#### Syntax
```draw_square(x, y, width)```<br />
```draw_square(x, y, width, thickness=1, fill_in=False)```<br />

#### Parameters
***integer* x:** the top left corner x coordinate<br />
***integer* y:** the top left corner y coordinate<br />
***integer* width:** width of each side<br />
***integer* thickness:** thickness of rectangle border, default to 1<br />
***integer* fill_in:** Boolean that selects if the shape will be filled in. Default to False.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.draw_square(0,0,30,thickness=1,fill_in=True)
```
<hr/>

### draw_text_center()

#### Description
Draws text to the center of the screen

#### Syntax
```draw_text_center(string, font_size=16)```<br />
```draw_text_center(string)```<br />
```draw_text_center(string, font_size)```<br />

#### Parameters
***string* string**: The text that Zumi will show on the screen
***integer* font_size**: The font size of the text, defaults to 16 pixels.

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time


screen=Screen()

screen.draw_text_center('hello',font_size=10)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=20)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=30)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=40)
time.sleep(0.5)
screen.draw_text_center('hello',font_size=50)
time.sleep(0.5)
```
<hr/>

### draw_text()

#### Description
Draws text to the upper lefthand corner of the screen

#### Syntax
```draw_text(string)```<br />
```draw_text(string, x, y, font_size)```  (display, clear)..

#### Parameters
***string* string**: The text that Zumi will show on the screen<br />
***integer* x**: The x coordinate start value of the string, defaults to 1<br />
***integer* y**: The y coordinate start value of the string, defaults to 1<br />
***integer* font_size**: The font size of the string, defaults to 16 pixels

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

for i in range(10):
    screen.draw_text(str(i)+'!')
    time.sleep(0.1)
screen.clear_display()
```
<hr/>

### draw_triangle()

#### Description
Draws a triangle with 3 points (x1,y1), (x2,y2), (x3,y3): ```x1, y1, x2, y2, x3, y3```.

#### Syntax
``` draw_triangle(x1,y1,x2,y2,x3,y3)```<br />
``` draw_triangle(x1,y1,x2,y2,x3,y3,fill_in=True):```<br />

#### Parameters
***integer* x1:** the x coordinate of point 1<br />
***integer* y1:** the y coordinate of point 1<br />
***integer* x2:** the x coordinate of point 2<br />
***integer* y2:** the y coordinate of point 2<br />
***integer* x3:** the x coordinate of point 3<br />
***integer* y3:** the y coordinate of point 3<br />
***boolean* fill_in:** Boolean that selects if the triangle will be filled in (white). Default to True.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen

screen=Screen()

screen.draw_triangle(0,10,20,50,50,0)
```
<hr/>

### glimmer()

#### Description
Draws an animation of Zumi's eyes glimmering on the screen.

#### Syntax
```glimmer()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.glimmer()
```
<hr/>

### happy()

#### Description
Draws an animation of Zumi's happy eyes.

#### Syntax
```happy()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.happy()
```
<hr/>

### hello()

#### Description
Draws Zumi's default eyes on the screen.

#### Syntax
```hello()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.hello()
```
<hr/>

### look_around_open()

#### Description
Draws Zumi's eyes looking around left and right on the screen.

#### Syntax
```look_around_open()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.look_around_open()
```
<hr/>

### look_around()

#### Description
Makes zumi look around

#### Syntax
```look_around()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.look_around()
```
<hr/>

### print()

#### Description
Prints any number of strings on the screen. 

#### Syntax
```print(*messages)```<br />
```print(*messages,x=0, y=0, fill_in=True,font_size=12)```<br />

#### Parameters
***string* messages:** Any number of strings that will print to the screen<br />
***integer* x:** x coordinate of the string. Default to 0.<br />
***integer* y:** y coordinate of the string. Default to 0.<br />
***boolean* fill_in:** Boolean that selects if text will be white(True) or black (False). Default to True.<br />
***integer* font_size:** Pixel size of the font. Default to 12.<br />

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen
import time

screen=Screen()

screen.print("12345678")
screen.print("hello", y=15)
screen.print("\n\n","Zumi")

time.sleep(1)
screen.clear_drawing()
screen.print("ZUMI",font_size=20)

```
<hr/>

### sad()

#### Description
Draws Zumi's sad eyes on the screen.

#### Syntax
```sad()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 

screen = Screen()

screen.sad()
```
<hr/>

### show_screen()

#### Description
Displays an image on Zumi's screen taken from Zumi's camera.

#### Syntax
```show_image(frame)```<br />

#### Parameters
***ndarray* frame:** A NumPy array representing a captured image

#### Returns
None

#### Example Code
```python
from zumi.util.screen import Screen
from zumi.util.camera import Camera

screen = Screen()
camera = Camera()

camera.start_camera() # Turn on the camera
image = camera.capture() # Take a picture
camera.close() # Make sure to close the camera stream
screen.show_image(image) # Display image on OLED
```

<hr/>

### sleeping()

#### Description
Draws an animation of Zumi sleeping on the screen.

#### Syntax
```sleeping()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.sleeping()
```
<hr/>

### sleepy_eyes()

#### Description
Draws Zumi's sleepy eyes on the screen.

#### Syntax
```sleepy_eyes()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.sleepy_eyes()
```
<hr/>

### sleepy_left()

#### Description
Draws a sleepy left eye on the screen.

#### Syntax
```sleepy_left()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.sleepy_left()
```
<hr/>

### sleepy_right()

#### Description
Draws a sleepy right eye on the screen.

#### Syntax
```sleepy_right()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.util.screen import Screen 
screen = Screen()

screen.sleepy_right()
```
<hr className="section_hr"/>

## Personality

### angry()

#### Description
Draws Zumi's angry eyes on the screen.

#### Syntax
```angry()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.angry()
```
<hr/>

### awake()

#### Description
Draws Zumi opening her eyes with the wake up sound effect.

#### Syntax
```awake()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.awake()
```
<hr/>

### celebrate()

#### Description
Makes Zumi celebrate.

#### Syntax
```celebrate()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.celebrate()
```
<hr/>

### disoriented_left()

#### Description
Draws Zumi's eyes looking to the left with the disoriented sound effect.

#### Syntax
```disoriented_left()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.disoriented_left()
```
<hr/>

### disoriented_right()

#### Description
Draws Zumi's eyes looking to the right with the disoriented sound effect.

#### Syntax
```disoriented_right()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.disoriented_right()
```

<hr/>

### happy()

#### Description
Makes Zumi wiggle and make a happy sound.

#### Syntax
```happy()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.happy()
```
<hr/>

### look_around_open()

#### Description
Makes Zumi look around with wide open eyes.

#### Syntax
```look_around_open()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.look_around_open()
```
<hr/>

### look_around()

#### Description
Makes Zumi look around.

#### Syntax
```look_around()```<br />

#### Parameters
None

#### Returns
None

#### Example Code
```python
#Python code
from zumi.zumi import Zumi
from zumi.util.screen import Screen
from zumi.personality import Personality

zumi = Zumi()
screen = Screen()
personality = Personality(zumi, screen)

personality.look_around()
```