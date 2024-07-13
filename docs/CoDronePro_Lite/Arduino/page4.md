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
version 2.2.1
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
```c
//Arduino code
#include<CoDrone.h>		//header

void setup(){
	//below this have to code in setup
	//open serial and connect
	CoDrone.begin(115200);
	CoDrone.pair(Nearest);

	CoDrone.takeoff();
	CoDrone.hover(3);
	CoDrone.land();
	CoDrone.disconnect(); 	// disconnects	
}

void loop(){
	
}
```
<hr/>

### pair()

#### Description
This function pairs the BLE board to the CoDrone.  After establishing a connection, it always waits for 3 seconds before executing the next command. Pair works a bit differently between Arduino and Python.  With the Arduino-based remote, ```pair()``` with no parameters will pair with the last paired CoDrone. If it's your first time running ```pair()```, it will just find the nearest CoDrone it can find, then "lock in" with that CoDrone, save it to "PairInfo" and always pair with it until you run ```pair(drone.Nearest)```.

#### Syntax
```pair()```<br/>
```pair(Nearest)```<br/>
```pair(bluetoothAddress)```

#### Parameters
**Nearest:** If you specify ```Nearest``` in Arduino, it will pair with the first drone it finds (which may not always be the nearest CoDrone, in some cases, just the first CoDrone it finds). This function can be used to "unlock" the drone from only pairing with the CoDrone it's been "locked in" with. Once you've paired with a nearest CoDrrone, you can run ```pair()``` again with no parameters, and it will only pair with the "locked in" CoDrone.<br />
**address:** This is the address of the CoDrone. In Arduino, this is a 6-index array of bytes representing the Bluetooth address.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>		//header

void setup(){
  //below this have to code in setup
  CoDrone.begin(115200);

  //IMPORATNT: You would only run ONE of the 3 options below

  /* 1) This will pair with the last drone that the remote was paired to. If this is the first time pairing, 
   *    this function will pair with whatever first drone it finds, and "lock in" to that drone and only pair with 
   *    that drone
   */
  CoDrone.pair();

   /* 2) This will pair with the nearest drone that the BLE board finds. You can use this function to "unlock" a 
   *    remote that's been "locked in" to a drone. So first run this code, then just upload and run with "CoDrone.pair()" *    to "lock in" to that drone
   */
  CoDrone.pair(Nearest);

}

void loop(){

}

```

<hr className="section_hr"/>

## Flight Commands (Start/Stop)

### emergencyStop()

#### Description
This function immediately stops all commands and stops all motors, so the drone will stop flying immediately.
The function will also zero-out all of the flight motion variables to 0.

#### Syntax
```emergencyStop()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();      // take off and hover for 3 second
    CoDrone.emergencyStop();    // emergency stop   
}

void loop(){

}
```
<hr/>

### land()

#### Description
This function makes the drone stop all commands, hovers, and makes a soft landing where it is.
The function will also zero-out all of the flight motion variables to 0.

#### Syntax
```land()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //below this have to code in setup
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();      // take off and hover for 3 second
    CoDrone.hover(3);       // hover for 3 second
    CoDrone.land();     //landing   
}

void loop(){

}
```
<hr/>

### takeoff()

#### Description
This function makes the drone take off and begin hovering.
The drone will always hover for 3 seconds in order to stabilize before it executes the next command.
If it receives no command for 8 seconds, it will automatically land.

#### Syntax
```takeoff()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //below this have to code in setup
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();      // take off and hover for 3 second
    CoDrone.hover(3);       // hover for 3 second
    CoDrone.land();     //landing   
}

void loop(){

}
```
<hr className="section_hr"/>

## Flight Commands (Movement)

### flySequence()

#### Description
This function make drone fly specific shape and hover after finish. The options are square, circle, spiral, triangle, hop, sway, zigzag


#### Syntax
```flySequence(sequence)```

#### Parameters
***const* Sequence**: SQUARE, CIRCLE, SPIRAL, TRIANGLE, HOP, SWAY, ZIGZAG

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.flySequence(TRIANGLE);  // Fly triangle shape
    CoDrone.flySequence(SPIRAL);    // Fly spiral shape
    CoDrone.flySequence(SQUARE);    // Fly square (right -> forward -> left -> backward)
    CoDrone.land();
}

void loop(){

}
```
<hr/>

### goToHeight()

#### Description
This is a setter function will make the drone fly to the given height above the object directly below its IR sensor (usually the ground).
It’s effective between 20 and 2000 millimeters. It uses the IR sensor to continuously check for its height.

#### Syntax
```goToHeight(height)```

#### Parameters
**height:** An int from 20 to 2000 in millimeters

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.goToHeight(1000);       // Fly 1000mm away from bottom and hover    
}

void loop(){

}
```
<hr/>

### go()

#### Description
A simpler Junior level function that represents positive flight with a direction, but with more natural language. It simply flies in the given direction for the given duration and power.

#### Syntax
```go(direction)```<br />
```go(direction, duration)```<br />
```go(direction, duration, power)```

#### Parameters
***const* Direction**:	a constant in Arduino. It’s the direction of the flight, which can be one of the following: FORWARD, BACKWARD, LEFT, RIGHT, UP, and DOWN.<br />
**duration**:	the duration of the flight motion in seconds. If undefined, defaults to 1 seconds. If duration is 0, it will turn right indefinitely.<br />
**power**: the power at which the drone flies forward. Takes a value from 0 to 100. Defaults to 50 if not defined.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.go(FORWARD);        // Go forward at 50% power for 1 second
    CoDrone.go(UP, 5);          // Go up for 5 seconds at 50% power
    CoDrone.go(BACKWARD, 3, 70) // Go backwards for 3 seconds at 70% power  
}

void loop(){

}
```
<hr/>

### hover()

#### Description
This function makes the drone hover for a given amount of time. If you enter a 0 or None, it will hover indefinitely until given a another command.

#### Syntax
```hover(duration)```

#### Parameters
**duration**: the duration of the hovering in seconds.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();      // take off and hover for 3 second
    CoDrone.hover(3);       // hover for 3 second
    CoDrone.land();         //landing   
}

void loop(){

}
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
```c
```
<hr/>

### turnDegree()

#### Description
A Senior level function that yaws by a given degree in a given direction. This function takes an input degree in an input direction, and turns until it reaches the given degree. In some instances, the drone may turn past the given degree and need to rotate all the way around again before reaching the correct degree.

#### Syntax
```turnDegree(direction, degree)```

#### Parameters
***const* Direction**: LEFT or RIGHT<br />
***const* Degree**: a constant in Arduino. The degree the drone will turn to the right, with its starting position representing 0 degrees, ANGLE_30, ANGLE_45, ANGLE_60, ANGLE_90, ANGLE_120, ANGLE_135, ANGLE_150, ANGLE_180, ANGLE_210, ANGLE_225, ANGLE_240, ANGLE_270, ANGLE_300, ANGLE_315, ANGLE_330

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.turnDegree(LEFT, ANGLE_45);         // Turn left 45 degrees
}

void loop(){

}
```
<hr/>

### turn()

#### Description
A function that represents yaw, but with more natural language. It simply turns in the given direction, duration and power.

#### Syntax
```turn(direction)```<br />
```turn(direction, duration)```<br />
```turn(direction, duration, power)```

#### Parameters
***const* Direction**: a constant in Arduino. It’s the direction of the turn, which can be one of the following: LEFT or RIGHT.<br />
**duration**: the duration of the turn in seconds. If 0, it will turn right indefinitely. Defaults to 1 second if not defined.<br />
**power**: the power at which the drone turns right. Takes a value from 0 to 100. Defaults to 50 if not defined.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.turn(LEFT);             // Turn left for 1 second at 50 power
    CoDrone.turn(LEFT, 0);          // Turn left at 50 power indefinitely
    CoDrone.turn(RIGHT, 5, 100);    // Turn right for 5 seconds at 100 power    
}

void loop(){

}
```
<hr className="section_hr"/>

## Flight Variables

### getPitch()

#### Description
This is a getter function that gets the value of the pitch variable.

#### Syntax
```getPitch()```

#### Parameters
None

#### Returns
**power:** The power of the pitch variable (int)

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // save current pitch value in variable “current_pitch”
    int current_pitch = CoDrone.getPitch(); 
}
void loop(){

}
```
<hr/>

### getRoll()

#### Description
This is a getter function that gets the value of the roll variable.

#### Syntax
```getRoll()```

#### Parameters
None

#### Returns
**power:** The power of the roll variable (int)

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // save current roll value in variable “current_roll”
    int current_roll = CoDrone.getRoll(); 
}
void loop(){

}
```
<hr/>

### getThrottle()

#### Description
This is a getter function that gets the value of the throttle variable.

#### Syntax
```getThrottle()```

#### Parameters
None

#### Returns
**power:** The power of the throttle variable (int)

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // save current throttle value in variable “current_throttle”
    int current_throttle = CoDrone.getThrottle(); 
}
void loop(){

}
```
<hr/>

### getYaw()

#### Description
This is a getter function that gets the value of the yaw variable.

#### Syntax
```getYaw()```

#### Parameters
None

#### Returns
**power:** The power of the yaw variable (int)

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // save current yaw value in variable “current_yaw”
    int current_yaw = CoDrone.getYaw(); 
}
void loop(){

}
```
<hr/>

### move()

#### Description
You can use this function to create more complex flight movements.  With no parameters, ```move()``` will just run based on whatever the flight variables have been set to with functions like ```setPitch()``` and ```setThrottle()``` indefinitely.  You can also run it for a certain duration.  The function also takes multiple parameters, where you can set roll, pitch, yaw, and throttle all at once.  You can run it infinitely with 4 parameters, or you can run it for a given duration with 5 parameters.  If the drone is not flying, nothing will happen.


#### Syntax
```move()```: runs infinitely<br />
```move(duration)```<br />
```move(roll, pitch, yaw, throttle)```: runs infinitely<br />
```move(duration, roll, pitch, yaw, throttle)```

#### Parameters
**duration:** the duration of the flight motion in seconds. If 0, the duration is infinity.<br />
**roll:** the power of the roll, which is an int from -100 to 100<br />
**pitch:** the power of the pitch, which is an int from -100 to 100<br />
**yaw:** the power of the yaw, which is an int from -100 to 100<br />
**throttle:** the power of the throttle, which is an int from -100 to 100

#### Returns
None

#### Example Code
```c
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();          // take off

    // Move indefinitely with pitch set to 50
    CoDrone.setPitch(50);
    CoDrone.move();

    // Move 5 seconds to the right with roll set to 50
    CoDrone.setRoll(50);
    CoDrone.move(5);

    CoDrone.move(0, 0, 0, 80, 80);  // Move up(throttle) and turn left(yaw) indefinitely
    CoDrone.move(5, 0, 0, 80, 80);  // Move up(throttle) and turn left(yaw) for 5 seconds

    CoDrone.land();             //land
}

void loop(){

}
```
<hr/>

### setPitch()

#### Description
This is a setter function that allows you to set the pitch variable.

#### Syntax
```setPitch(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the pitch variable.  The number represents the direction and power of the output for that flight motion variable. Negative pitch is backwards, positive pitch is forwards.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.setPitch(60);       // set pitch power for 60%
    CoDrone.move(5);        // move drone for 5 seconds
    CoDrone.land();
}

void loop(){

}	
```
<hr/>

### setRoll()

#### Description
This is a setter function that allows you to set the roll variable.

#### Syntax
```setRoll(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the roll variable.  The number represents the direction and power of the output for that flight motion variable.  Negative roll is left, positive roll is right.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.setRoll(60);        // set roll power for 60%
    CoDrone.move(5);        // move drone for 5 seconds
    CoDrone.land();
}

void loop(){

}
```
<hr/>

### setThrottle()

#### Description
This is a setter function that allows you to set the throttle variable.

#### Syntax
```setThrottle(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the throttle variable.  The number represents the direction and power of the output for that flight motion variable. Negative throttle descends, positive throttle ascends.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.setThrottle(60);    // set throttle power for 60%
    CoDrone.move(5);            // move drone for 5 seconds
    CoDrone.land();
}

void loop(){

}
```
<hr/>

### setYaw()

#### Description
This is a setter function that allows you to set the yaw variable.

#### Syntax
```setYaw(power)```

#### Parameters
**power:** An int from -100 to 100 that sets the yaw variable. The number represents the direction and power of the output for that flight motion variable. Negative yaw turns left, positive yaw turns right.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.takeoff();
    CoDrone.setYaw(60);     // set yaw power for 60%
    CoDrone.move(5);        // move drone for 5 seconds
    CoDrone.land();
}

void loop(){

}	
```
<hr className="section_hr"/>

## LED

### armColor()

#### Description
This function sets the LED color of the arms using RGB values and their brightness with value from 1 - 100.

#### Syntax
```armColor(color, brightness)```<br />
```armColor(red, green, blue, brightness)```

#### Parameters
***const* Color**: a const in Arduino, which can be set using predefined colors out of the list below in "Example Code" under "LED Color Options" <br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**brightness**: in value from 0 to 100, which represents the brightness of the light<br />

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.armColor(White, 100);          // set color to red using Color
    CoDrone.armColor(255, 0, 0, 100);      // set color to red using RGB
}

void loop(){

}
```
##### LED Color options
```
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
    EndOfColor
```
<hr/>

### armDefaultColor()

#### Description
This function sets the default LED color of the eyes as well as the mode, so it will remain that color even after powering off and back on. The colors set are using RGB values.

#### Syntax
```armDefaultColor(red, green, blue, brightness)```

#### Parameters
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**brightness**: in value from 0 to 100, which represents the brightness of the light<br />

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // set default arm color to an RGB of (0, 120, 155) with full brightness
    CoDrone.armDefaultColor(0, 120, 155, 100);
}

void loop(){

}
```
<hr/>

### armDefaultPattern()

#### Description
This function sets the default color of the arm LED lights to flash in a particular pre-set pattern at a given speed, which means the lights will remain in that color and pattern when powered off and back on.

#### Syntax
```armDefaultPattern(color, mode)```<br />
```armDefaultPattern(color, mode, speed)```<br />
```armDefaultPattern(red, green, blue, mode)```<br />
```armDefaultPattern(red, green, blue, mode, speed)```

#### Parameters
***const* Color**: a const which can be set using predefined colors out of the list under <a href="#led-color-options">"LED Color Options"</a> <br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
***const* Mode**: an const in Arduino which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING, PULSE, REVERSE_PULSE<br />
**speed**: int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // set default arm pattern to blue using RGB and double blink slowly
    CoDrone.armDefaultPattern(0, 0, 100, BLINK, 150);
}

void loop(){

}
```
<hr/>

### armOff()

#### Description
This function turns off the arm LEDs

#### Syntax
```armOff()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.armOff();
}

void loop(){

}
```
<hr/>

### armPattern()

#### Description
This function sets the color of the arm LED lights to flash in a particular pre-set pattern at a given speed.

#### Syntax
```armPattern(color, mode)```<br />
```armPattern(color, mode, speed)```<br />
```armPattern(red, green, blue, mode)```<br />
```armPattern(red, green, blue, mode, speed)```

#### Parameters
***const* color**: a const in Arduino which can be set using predefined colors out of the list under <a href="#led-color-options">"LED Color Options"</a><br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
***const* mode**: a const in Arduino which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING, PULSE, REVERSE_PULSE<br />
**speed**: int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.armPattern(Red, DOUBLE_BLINK, 200);                 // Set arms to double blink red slowly using Color
    CoDrone.armPattern(0, 0, 255, PULSE, 200);                  // Set arms to pulse blue slowly using RGB
}

void loop(){

}
```
<hr/>

### armStrobe()

#### Description
This function makes the arms to strobe in various colors

#### Syntax
```armStrobe()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // strobe the arms
    CoDrone.armStrobe();
}

void loop(){

}
```
<hr/>

### eyeColor()

#### Description
This function sets the LED color of the arms using RGB values and their brightness with value a from 1 - 100.

#### Syntax
```eyeColor(color, brightness)```<br />
```eyeColor(red, green, blue, brightness)```

#### Parameters
***const* color**: a const in Arduino which can be set using predefined colors out of the list under  <a href="#led-color-options">"LED Color Options"</a><br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**brightness**: in value from 0 to 100, which represents the brightness of the light<br />

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.eyeColor(White, 100);          // set color to red using Color 
    CoDrone.eyeColor(255, 0, 0, 100);      // set color to red using RGB
}

void loop(){

}
```
<hr/>

### eyeDefaultColor()

#### Description
This function sets the default LED color of the eyes using RGB values and their brightness with a value from 1 - 100. This means the color will remain, even after the CoDrone has been powered off and back on.

#### Syntax
```eyeDefaultColor(red, green, blue, brightness)```

#### Parameters
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
**brightness**: in value from 0 to 100, which represents the brightness of the light

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // set default eye color to an RGB of (0, 0, 100) with full brightness
    CoDrone.eyeDefaultColor(0, 120, 155, 100);
}

void loop(){

}
```
<hr/>

### eyeDefaultPattern()

#### Description
This function sets the default color of the eyes LED lights to flash in a particular pre-set pattern at a given speed, which means the lights will remain in that color and pattern when powered off and back on.

#### Syntax
```eyeDefaultPattern(color, mode)```<br />
```eyeDefaultPattern(color, mode, speed)```<br />
```eyeDefaultPattern(red, green, blue, mode)```<br />
```eyeDefaultPattern(red, green, blue, mode, speed)```

#### Parameters
***const* color**: a const in Arduino which can be set using predefined colors out of the list under  <a href="#led-color-options">"LED Color Options"</a><br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
***const* mode**: a const in Arduino which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING<br />
**speed**: int value from 0-255, which represents the speed of the pattern. 255 is slowest, 0 is fastest

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // set default arm pattern to blue using RGB and blink quickly
    CoDrone.eyeDefaultPattern(0,0,100, BLINK, 20);
}

void loop(){

}
```
<hr/>

### eyeOff()

#### Description
This function turns off the eye LEDs

#### Syntax
```eyeOff()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // turn off the eyes
    CoDrone.eyeOff();
}

void loop(){

}
```
<hr/>

### eyePattern()

#### Description
This function sets the color of the eye LED lights to flash in a particular pre-set pattern at a given speed.

#### Syntax
```eyePattern(color, mode)```<br />
```eyePattern(color, mode, speed)```<br />
```eyePattern(red, green, blue, mode)```<br />
```eyePattern(red, green, blue, mode, speed)```

#### Parameters
***const* color**: a const in Arduino which can be set using predefined colors out of the list under  <a href="#led-color-options">"LED Color Options"</a> <br />
**red:** int value from 0 to 255<br/>
**green**: int value from 0 to 255<br/>
**blue**: int value from 0 to 255<br/>
***const* mode**: a const in Arduino which can be selected from the following predefined list: BLINK, DOUBLE_BLINK, DIMMING<br />
**speed**: int value from 0 - 255, which represents the speed of the pattern. 255 is slowest, 0 is fastest.

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    CoDrone.eyePattern(Red, DOUBLE_BLINK, 1);             // Set eyes to double blink red quickly using Color
    CoDrone.eyePattern(255, 0, 0, DOUBLE_BLINK, 10);       // Set eyes to double blink red quickly using RGB
}

void loop(){

}
```
<hr/>

### eyeStrobe()

#### Description
This function makes the arms to strobe in various colors

#### Syntax
```eyeStrobe()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // strobe the eyes
    CoDrone.eyeStrobe();
}

void loop(){

}
```
<hr/>

### resetDefaultLED()

#### Description
This function sets the LED color of the eyes and arms back to red and sets the mode to SOLID, which is the original default color.

#### Syntax
```resetDefaultLED()```

#### Parameters
None

#### Returns
None

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // Reset Drone’s LED to holding the Red color 
    CoDrone.resetDefaultLED();  
}

void loop(){

}
```
<hr className="section_hr"/>

## Status Checkers

### isFlying()

#### Description
This function checks whether the drone is flying and returns a boolean

#### Syntax
```isFlying()```

#### Parameters
None

#### Returns
**Boolean:** Returns True/False whether the drone is flying

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // If drone is flying land the drone
    if(CoDrone.isFlying()==true)    
        CoDrone.land();
}
void loop(){

}
```
<hr/>

### isReadyToFly()

#### Description
This function checks whether the drone is ready to fly by returning a boolean. The drone is ready to fly if it is oriented right-side up, and not flying.

#### Syntax
```isReadyToFly()```

#### Parameters
None

#### Returns
**Boolean:** Returns True/False whether the drone is ready to fly.

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
//open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    // if drone is ready to fly, take off the drone
    if(CoDrone.isReadyToFly() == true)  
        CoDrone.takeoff()   
}
void loop(){

}
```
<hr/>

### isUpsideDown()

#### Description
This function checks whether the drone is upside-down and returns a boolean

#### Syntax
```isUpsideDown()```

#### Parameters
None

#### Returns
**Boolean:** Returns True/False whether the drone is upside-down

#### Example Code
```c
//Arduino code
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    if(CoDrone.isUpsideDown()==false)   // if drone is not upside down take off the drone
        CoDrone.takeoff();  
}

void loop(){

}
```
<hr/>

### onLowBattery()

#### Description
Add callback function when CoDrone battery percentage is lower than 50%

#### Syntax
```onLowBattery(function)```

#### Parameters
**function:** a callback function when battery is lower than 50%

#### Returns
None

#### Example Code
```c
//Arduino code
//Not supported
```
<hr className="section_hr"/>

## Sensors

### getAccelerometer()

#### Description
This function gets the accelerometer sensor data, which returns x, y, and z. It outputs as a struct in Arduino.

#### Syntax
```getAccelerometer()```

#### Parameters
None

#### Returns
***struct* acceldata:** Returns a struct with acceleration data.

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);  
}

void loop(){
    // Struct for get accelerometer data
    acceldata accel;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    accel = CoDrone.getAccelerometer();     //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("accel x : \t");
    Serial.println(accel.x);
    Serial.print("accel y : \t");
    Serial.println(accel.y);
    Serial.print("accel z : \t");
    Serial.println(accel.z);    
}
```
<hr/>

### getAngularSpeed()

#### Description
This function gets the data from the gyrometer sensor for the roll, pitch, and yaw angular speed.

#### Syntax
```getAngularSpeed()```

#### Parameters
None

#### Returns
***struct* gyrodata:** Returns a struct with angular speed data.

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);  
}

void loop(){
    // Struct for get Angular speed(gyro) data
    gyrodata gyro;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    gyro = CoDrone.getAngularSpeed();                       //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("gyro roll : \t");
    Serial.println(gyro.roll);
    Serial.print("gyro pitch : \t");
    Serial.println(gyro.pitch);
    Serial.print("gyro yaw : \t");
    Serial.println(gyro.yaw);   
}
```
<hr/>

### getBatteryPercentage()

#### Description
This function gets the battery percentage of the drone, returning a value from 0 to 100.

#### Syntax
```getBatteryPercentage()```

#### Parameters
None

#### Returns
**percentage:** The battery’s percentage as an integer from 0 - 100.

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);
}

void loop(){
    int batteryPercentage;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    batteryPercentage = CoDrone.getBatteryPercentage();     //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("batteryPercentage : \t");
    Serial.println(batteryPercentage);  
}
```
<hr/>

### getBatteryVoltage()

#### Description
This function gets the voltage of the battery

#### Syntax
```getBatteryVoltage()```

#### Parameters
None

#### Returns
**voltage:** The voltage of the battery as an a float

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);
}

void loop(){
    int batteryVoltage;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    batteryVoltage = CoDrone.getBatteryVoltage();       //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("batteryVoltage : \t");
    Serial.println(batteryVoltage); 
}
```
<hr/>

### getDroneTemp()

#### Description
This is a getter function gets the data from the drone’s temperature sensor. Importantly, it reads the drone’s temperature, not the air around it.

#### Syntax
```getDroneTemp()```

#### Parameters
None

#### Returns
**temperature:** The temperature in Celsius as an integer.

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);      
}

void loop(){
    int temperature;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    temperature = CoDrone.getDroneTemp();                   //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("temperature : \t");
    Serial.println(temperature);    
}
```
<hr/>

### getGyroAngles()

#### Description
This function gets the data from the gyrometer sensor to determine the roll, pitch, and yaw as angles.

#### Syntax
```getGyroAngles()```

#### Parameters
None

#### Returns
***struct* angledata:** Returns a struct with angle data.

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);  
}

void loop(){
    // Struct for get angles(attitude) data
    angledata angle;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    angle = CoDrone.getGyroAngles();                        //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("angle roll : \t");
    Serial.println(angle.roll);
    Serial.print("angle pitch : \t");
    Serial.println(angle.pitch);
    Serial.print("angle yaw : \t");
    Serial.println(angle.yaw);  
}
```
<hr/>

### getHeight()

#### Description
This is a getter function gets the current height of the drone from the object directly below its IR sensor.

#### Syntax
```getHeight()```

#### Parameters
None

#### Returns
**height:** The current height above the object directly below the drone’s IR height sensor as an int (mm).

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

}

void loop(){
    int height;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    height = CoDrone.getHeight();                           //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("height : \t");
    Serial.println(height); 
}
```
<hr/>

### getOptFlowPosition()

#### Description
This function gets the x and y coordinates from the optical flow sensor. Keep in mind, the positioning does not take rotation into account.

#### Syntax
```getOptFlowPosition()```

#### Parameters
None

#### Returns
***struct* optdata:** Returns a struct with optical flow sensor data

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);  
}

void loop(){
    // Struct for get optical flow sensor data
    optdata opt;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    opt = CoDrone.getOptFlowPosition();                     //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("opt x : \t");
    Serial.println(opt.x);
    Serial.print("opt y : \t");
    Serial.println(opt.y);  
}
```
<hr/>

### getPressure()

#### Description
This is a getter function gets the data from the barometer sensor.

#### Syntax
```getPressure()```

#### Parameters
None

#### Returns
**pressure:** The barometer’s air pressure in millibars at (0.13 resolution).

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);  
}

void loop(){
    int pressure;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    pressure = CoDrone.getPressure();                       //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("pressure : \t");
    Serial.println(pressure);   
}
```
<hr/>

### getState()

#### Description
This function gets the state of the drone, as in whether it’s: ready, takeoff, flight, flip, stop, landing, reverse, accident, error.

#### Syntax
```getState()```

#### Parameters
None

#### Returns
***enum* state:** Returns an enum value (fMode_Ready, fMode_TakeOff, fMode_Flight, fMode_Flip, fMode_Stop, fMode_Landing, fMode_Reverse, fMode_Accident, fMode_Error).

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);

    int state;

    state = CoDrone.getState();                       //save request data
    delay(50);

    if(state == fMode_Ready)
        CoDrone.takeoff();

    CoDrone.hover(3);
    CoDrone.land();
}
void loop(){

}
```
<hr/>

### getTrim()

#### Description
This function gets the current trim values of the drone.

#### Syntax
```getTrim()```

#### Parameters
None

#### Returns
***struct* trimdata:** Returns a struct with trim data

#### Example Code
```c
//Arduino code
//Code for print request data to serial monitor
#include<CoDrone.h>     //header

void setup(){
    //open serial and connect
    CoDrone.begin(115200);
    CoDrone.pair(Nearest);  
}

void loop(){
    // Struct for get trim data
    trimdata trim;

    CoDrone.Send_LinkModeBroadcast(LinkBroadcast_Active);   //link module mode change => Active
    trim = CoDrone.getTrim();                               //save request data
    delay(100);

    CoDrone.Send_LinkModeBroadcast(LinkModeMute);           //link module mode change => Mute
    delay(100);

    Serial.println("");
    Serial.println("--------- Now -----------");
    Serial.print("trim roll : \t");
    Serial.println(trim.roll);
    Serial.print("trim pitch : \t");
    Serial.println(trim.pitch);
    Serial.print("trim yaw : \t");
    Serial.println(trim.yaw);
    Serial.print("trim throttle : \t");
    Serial.println(trim.throttle);  
}
```