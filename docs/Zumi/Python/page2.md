---
title: "Python Documentation"
slug: Python-Documentation
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