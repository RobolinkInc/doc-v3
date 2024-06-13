---
title: "Junior Block Documentation"
slug: Junior-Block-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

## Driving

### forward

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/forward.png" width="320px" height="90px"/>  

#### Parameters

**seconds**: A float value for the duration of the movement. <br /> 
**speed**: An integer (0 - 100) for the speed of the movement.

#### Description
Moves Zumi forward for the given duration and speed


#### Returns
None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/forward_example.png" width="320px" height="300px"/>  

<hr/>

### reverse

#### Block
<img src="/img/Zumi/blockly_docu/junior/driving/reverse.png" width="320px" height="90px"/>

#### Parameters

**seconds**: A float value for the duration of the movement. <br /> 
**speed**: An integer (0 - 100) for the speed of the movement.

#### Description

Moves Zumi backwards for the given duration and speed

#### Returns

None

#### Example
<img src="/img/Zumi/blockly_docu/junior/driving/reverse_example.png" width="320px" height="300px"/>

<hr/>

### turn left

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/turn_left.png" width="240px" height="90px"/>

#### Description

Turns Zumi to the left a number of specified degrees.

#### Parameters

**degrees**: An integer in degrees <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/turn_left_example.png" width="371px" height="240px"/>

<hr/>

### turn right

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/turn_right.png" width="240px" height="90px"/>

#### Description

Turns Zumi to the right a number of specified degrees.

#### Parameters

**degrees**: An integer in degrees. <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/turn_right_example.png"  width="371px" height="240px"/>

<hr/>

### stop

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/stop.png" width="150px" height="90px"/>

#### Description

Stops Zumi's motors when running indefinite move commands such as the Senior forward_step() block.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/stop_example.png"  width="370px" height="230px"/>

<hr/>

### left u turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/left_u_turn.png" width="240px" height="90px"/>

#### Description

Makes Zumi perform a left "U-turn". As the speed increases, the turn radius gets larger.

#### Parameters

**speed**: An integer (0 - 100)

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/left_u_turn_example.png" width="240px"/>

<hr/>

### right u turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/right-u-turn.png" width="240px" height="90px"/>

#### Description

Makes Zumi perform a right "U-turn". As the speed increases, the turn radius gets larger.

#### Parameters

**speed**: An integer (0 - 100)

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/right_u_turn_example.png" width="240px"/>

<hr/>

### parallel park

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/parallel_park.png" width="230px" height="100px"/>

#### Description

Drives Zumi in reverse into a parallel park.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/parallel_park_example.png" width="350px" height="140px"/>

<hr/>

### calibrate gyro

#### Block

<img src="/img/Zumi/blockly_docu/junior/driving/calibrate_gyro.png" width="240px" height="90px"/>

#### Description

Recalibrates Zumi's gyroscope. Use when the gyroscope returns values with high error due to drift. During recalibration, Zumi should be stationary on a flat surface.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/driving/calibrate_gyro.png" width="240px" height="90px"/>

<hr/>

## Shapes

### triangle

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/triangle.png" width="240px"/>

#### Description

Drives Zumi in the shape of a triangle using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/triangle_params.png" width="240px"/>

**left**: Makes a triangle with left turns <br /> 
**right**: Makes a triangle with right turns <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/triangle_example.png" width="360px" height="150px"/>

<hr/>

### square

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/square.png" width="240px"/>

#### Description

Drives Zumi in the shape of a square using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/square_params.png" width="240px"/>

**left**: Makes a square with left turns. <br/>
**right**: Makes a square with right turns. <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/square_example.png" width="380px" height="150px"/>

<hr/>

### rectangle

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/rectangle.png" width="240px"/>

#### Description

Drives Zumi in the shape of a rectangle using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/rectangle_params.png" width="240px"/>

**left**: Makes a rectangle with left turns. <br/>
**right**: Makes a rectangle with right turns. <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/rectangle_example.png" width="360px" height="150px"/>

<hr/>

### circle

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/circle.png" width="240px"/>

#### Description

Drives Zumi in the shape of a circle using either left or right turns.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/shapes/circle_params.png" width="240px"/>

**left**: Makes a circle turning to the left. <br/> 
**right**: Makes a circle turning to the right. <br/> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/circle_example.png" width="280px" height="150px"/>

<hr/>

### figure 8

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/figure8.png" width="170px" height="100px"/>

#### Description

Drives Zumi in the shape of a figure 8. Zumi does a full circle to the right, and then a full circle to the left.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/figure8_example.png" width="260px" height="150px"/>

<hr/>

### j turn

#### Block

<img src="/img/Zumi/blockly_docu/junior/shapes/jturn.png" width="170px" height="100px"/>

#### Description

Drives Zumi in the shape of a J turn. Zumi will start by driving forward

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/shapes/jturn_example.png" width="260px" height="150px"/>

<hr/>

## Screen

### draw text

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/drawtext.png" width="240px"/>

#### Description

Draws a string of letters and characters and centers them on Zumi's screen. The screen can draw a maximum of three lines of text, each around 14 characters long.

#### Parameters

**string**: string of characters to display <br /> 

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/drawtext_example.png" width="240px"/>

<hr/>

### sad

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/sad.png" width="180px" height="100px"/>

#### Description

Displays Zumi's sad eyes on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/sad_closed_sleepy_happy_example.png" width="240px"/>

<hr/>

### closed

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/closed.png" width="200px" height="100px"/>

#### Description

Displays Zumi's closed eyes on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/sad_closed_sleepy_happy_example.png" width="240px"/>

<hr/>

### sleepy

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/sleepy.png" width="200px" height="100px"/>

#### Description

Displays Zumi's sleepy eyes on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/sad_closed_sleepy_happy_example.png" width="240px"/>

<hr/>

### happy

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/happy.png" width="200px" height="100px"/>

#### Description

Displays Zumi's happy eye animation on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/sad_closed_sleepy_happy_example.png" width="240px"/>

<hr/>

### glimmer

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/glimmer.png" width="200px" height="100px"/>

#### Description

Displays Zumi's glimmer eye animation on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/glimmer_blinking_angry_open_example.png" width="240px"/>

<hr/>

### blinking

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/blinking.png" width="200px" height="100px"/>

#### Description

Displays Zumi's blinking eye animation on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/glimmer_blinking_angry_open_example.png" width="240px"/>

<hr/>

### angry

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/angry.png" width="200px" height="110px"/>

#### Description

Displays Zumi's angry eyes on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/glimmer_blinking_angry_open_example.png" width="240px"/>

<hr/>

### open

#### Block

<img src="/img/Zumi/blockly_docu/junior/screen/open.png" width="200px" height="95px"/>

#### Description

Displays Zumi's open eyes on the screen.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/screen/glimmer_blinking_angry_open_example.png" width="240px"/>

<hr/>

## Sounds

### play note

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/playnote.png" width="300px" height="100px"/>

#### Description

Plays a single note for a specified  duration in milliseconds.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/sounds/playnote_params.png" width="260px" height="300px"/>

**note**: The note that is played. Ranging from C2 to B6 <br/>
**duration**: An integer in milliseconds <br/>

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/playnote_example.png" width="260px" height="260px"/>

<hr/>

### angry

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/angry.png" width="160px" height="100px"/>

#### Description

Plays Zumi's angry sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/angry_example.png" width="220px" height="160px"/>

<hr/>

### happy

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/happy.png" width="180px" height="90px"/>

#### Description

Plays Zumi's happy sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/happy_example.png" width="210px" height="150px"/>

<hr/>

### blink

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/blink.png" width="180px" height="100px"/>

#### Description

Plays Zumi's blinking sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/blink_example.png" width="240px"/>

<hr/>

### celebrate

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/celebrate.png" width="180px" height="100px"/>

#### Description

Plays Zumi's celebration sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/celebrate_example.png" width="240px" height="170px"/>

<hr/>

### wakeup

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/wakeup.png" width="180px" height="100px"/>

#### Description

Plays Zumi's wake up sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/wakeup_example.png" width="240px"/>

<hr/>

### disoriented

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/disoriented.png" width="200px" height="100px"/>

#### Description

Plays Zumi's disoriented sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/disoriented_example.png" width="240px" height="160px"/>

<hr/>

### oops front

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/oopsfront.png" width="180px" height="100px"/>

#### Description

Plays Zumi's front sensor detect sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/oopsfront_example.png" width="380px" height="180px"/>

<hr/>

### oops back

#### Block

<img src="/img/Zumi/blockly_docu/junior/sounds/oopsback.png" width="180px" height="100px"/>

#### Description

Plays Zumi's back sensor detecct sound effect.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sounds/oopsback_example.png" width="380px" height="160px"/>

<hr/>

## Sensors

### get ir reading

#### Block

<img src="/img/Zumi/blockly_docu/junior/sensors/getIRreading.png" width="320px" height="105px"/>

#### Description

Gets the current IR reading from Zumi's sensors. The closer the value is to 0, the more IR light is being detected. Used commonly when detecting objects since an object or obstacle nearby will reflect IR light back to the receiver.

#### Parameters

<img src="/img/Zumi/blockly_docu/junior/sensors/getIRreading_params.png" width="260px" height="260px"/>


#### Returns

**IR sensor value**: An integer from 0-255

#### Example

<img src="/img/Zumi/blockly_docu/junior/sensors/getIRreading_example.png" width="380px" height="280px"/>

<hr/>

### get z angle

#### Block

<img src="/img/Zumi/blockly_docu/junior/sensors/getZangle.png" width="180px" height="100px"/>

#### Description

Gets the current Z angle from Zumi's gyroscope.

#### Parameters

None

#### Returns

**angle**: An integer ranging from 0 to 360.

#### Example

<img src="/img/Zumi/blockly_docu/junior/sensors/getZangle_example.png" width="240px" height="260px"/>

<hr/>

### get x angle

#### Block

<img src="/img/Zumi/blockly_docu/junior/sensors/getXangle.png" width="180px" height="100px"/>

#### Description

Gets the current X angle from Zumi's gyroscope.

#### Parameters

None

#### Returns

**angle**: An integer ranging from 0 to 360.

#### Example

With this example, tilt Zumi left and right with your hands to see the X angle change!
<img src="/img/Zumi/blockly_docu/junior/sensors/get_x_angle_example.png" width="240px" height="220px"/>

<hr/>

### get y angle

#### Block

<img src="/img/Zumi/blockly_docu/junior/sensors/getYangle.png" width="180px" height="100px"/>

#### Description

Gets the current Y angle from Zumi's gyroscope.

#### Parameters

None

#### Returns

**angle**: An integer ranging from 0 to 360.

#### Example

With this example, rock Zumi forward and backward with your hands to see the Y angle change!
<img src="/img/Zumi/blockly_docu/junior/sensors/get_y_angle_example.png" width="240px" height="220px"/>

<hr/>

### reset gyro

#### Block

<img src="/img/Zumi/blockly_docu/junior/sensors/resetgyro.png" width="180px" height="100px"/>

#### Description

Resets Zumi's gyroscope x, y, and z angles to 0. Use this function to reset Zumi's heading.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/sensors/resetgyro_example.png" width="300px" height="340px"/>

<hr/>

### get battery voltage

#### Block

<img src="/img/Zumi/blockly_docu/junior/sensors/get_battery_voltage.png" width="270px" height="110px"/>

#### Description

Gets the current voltage from Zumi's battery. It typically varies from 3.45V-4.14V when not connected over USB. If connected over USB, this function may return 1.7V or below.

#### Parameters

None

#### Returns

**voltage**: A float value in units of Volts

#### Example

<img src="/img/Zumi/blockly_docu/junior/sensors/get_battery_voltage_example.png" width="260px" height="120px"/>

<hr/>

### get battery percentage

#### Block

<img src="/img/Zumi/blockly_docu/junior/sensors/get_battery_percentage.png" width="290px" height="110px"/>

#### Description

Gets the current battery percentage from Zumi's battery when not connected over USB power. The percentage will vary while driving since it is dependent on battery voltage.

#### Parameters

None

#### Returns

**percent**: An integer value from 0 to 100

#### Example

<img src="/img/Zumi/blockly_docu/junior/sensors/get_battery_percentage_example.png" width="330px" height="120px"/>

<hr/>

## Camera

### import camera

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/import_camera.png" width="220px" height="90px"/>

#### Description

Imports the camera library. This block must be included at the top of any code that uses camera functions.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/show_image_example.png" width="280px" height="300px"/>

<hr/>

### start camera

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/start_camera.png" width="220px" height="90px"/>

#### Description

Turns on Zumi's camera. A red LED will turn on next to the camera to indicate the camera is on. The camera needs to turn on before taking any pictures and will stay on until it is manually turned off with the close_camera() block.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/show_image_example.png" width="280px" height="300px"/>

<hr/>

### close camera

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/close_camera.png" width="220px" height="90px"/>

#### Description

Turns off Zumi's camera. It is recommended to always turn off the camera when not in use to conserve battery. The camera cannot be started again unless the camera is already off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/show_image_example.png" width="280px" height="300px"/>

<hr/>

### take picture

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/take_picture.png" width="240px" height="90px"/>

#### Description

Captures a color image with Zumi's camera and stores the array as a frame object. Use the image object with show_image() to display in Blockly. This block cannot be used without importing and starting the camera.

#### Parameters

None

#### Returns

**image**: A frame object composed of a 160x128 array of pixels.

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/show_image_example.png" width="280px" height="300px"/>

<hr/>

### show image

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/show_image.png" width="240px"/>

#### Description

Show an image that was taken with Zumi's camera in Blockly.

#### Parameters

**image**: A frame object composed of an array of pixels.

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/show_image_example.png" width="280px" height="300px"/>

<hr/>

### get qr code

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/get_qr_code.png" width="290px" height="100px"/>

#### Description

Searches an image for a QR code message. If a QR code was found, the encoded message is saved to a string.

#### Parameters

**image**: A frame object composed of an array of pixels.

#### Returns

**string**: A string containing the message of the QR code. Returns ```None``` if no QR code was detected.

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/get_qr_code_example.png" width="300px" height="350px"/>

<hr/>

### find stop sign

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/find_stop_sign.png" width="240px" height="95px"/>

#### Description

Searches an image for a stop sign. Returns True if a stop sign was found.

#### Parameters

**image**: A frame object composed of an array of pixels.

#### Returns

**boolean**: Returns True if a stop sign was detected. Otherwise, returns False.

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/find_stop_sign_example.png" width="300px" height="350px"/>

<hr/>

### find face

#### Block

<img src="/img/Zumi/blockly_docu/junior/camera/find_face.png" width="230px" height="95px"/>

#### Description

Searches an image for a face. Returns True if a face was detected

#### Parameters

**image**: A frame object composed of an array of pixels.

#### Returns

**boolean**: Returns True if a face was detected. Otherwise, returns False.

#### Example

<img src="/img/Zumi/blockly_docu/junior/camera/find_face_example.png" width="300px" height="350px"/>

<hr/>

## AI

### prediction from frame

#### Block

<img src="/img/Zumi/blockly_docu/junior/ai/predict_from_frame.png" width="290px" height="105px"/>

#### Description

Predicts a label from an image based on a previously trained color model. A KNN color model needs to be trained and loaded into the program to use predict_from_frame(). 

#### Parameters

**image**: A frame object composed of an array of pixels.

#### Returns

**string**: A string containing the predicted label.

#### Example

<img src="/img/Zumi/blockly_docu/junior/ai/predict_from_frame_example.png" width="300px" height="360px"/>

<hr/>

## Lights

### lights on

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/lights_on.png" width="200px" height="100px"/>

#### Description

Turns on both Zumi's headlights and brake lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/lights_example.png" width="240px"/>

<hr/>

### lights off

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/lights_off.png" width="200px" height="100px"/>

#### Description

Turns off both Zumi's headlights and brake lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/lights_example.png" width="240px"/>

<hr/>

### headlights on

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/headlights_on.png" width="240px"/>

#### Description

Turns on Zumi's headlights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/headlights_example.png" width="240px"/>

<hr/>

### headlights off

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/headlights_off.png" width="240px" height="120px"/>

#### Description

Turns off Zumi's headlights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/headlights_example.png" width="240px"/>

<hr/>

### brake lights on

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/brake_lights_on.png" width="240px"/>

#### Description

Turns on Zumi's brake lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/brake_lights_example.png" width="240px"/>

<hr/>

### brake lights off

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/brake_lights_off.png" width="240px"/>

#### Description

Turns off Zumi's brake lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/brake_lights_example.png" width="240px"/>

<hr/>

### hazard lights on

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/hazard_lights_on.png" width="240px"/>

#### Description

Turns on Zumi's flashing hazard lights. They will flash indefinitely until turned off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/hazard_lights_example.png" width="240px"/>

<hr/>

### hazard lights off

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/hazard_lights_off.png" width="240px"/>

#### Description

Turns off Zumi's flashing hazard lights.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/hazard_lights_example.png" width="240px"/>

<hr/>

### left signal on

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/left_signal_on.png" width="210px" height="110px"/>

#### Description

Turns on Zumi's left turn signal. This function flashes Zumi's back left red LED until turned off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/left_signal_example.png" width="240px"/>

<hr/>

### left signal off

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/left_signal_off.png" width="210px" height="110px"/>

#### Description

Turns off Zumi's flashing left turn signal.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/left_signal_example.png" width="240px"/>

<hr/>

### right signal on

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/right_signal_on.png" width="240px"/>

#### Description

Turns on Zumi's right turn signal. This function flashes Zumi's back right red LED until turned off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/right_signal_example.png" width="240px"/>

<hr/>

### right signal off

#### Block

<img src="/img/Zumi/blockly_docu/junior/lights/right_signal_off.png" width="240px"/>

#### Description

Turns off Zumi's flashing right turn signal.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/Zumi/blockly_docu/junior/lights/right_signal_example.png" width="240px"/>