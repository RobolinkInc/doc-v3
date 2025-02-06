---
title: "Junior Block Documentation"
slug: Junior-Block-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---


<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

<div className='change_version'>

version 2.2.5 ([Changelog](/docs/CoDroneEDU/Blockly/Blockly-Changelog))

</div>

## Flight Commands

### take off

#### Block

<img src="/img/CDE/blockly_docu/junior/takeoff.png" width="120px"/>

#### Description
This functions makes the drone take off. CoDrone EDU takes off at an average height of 80 centimeters off the ground. A takeoff block must be used before any other flight command or flight movement. **NOTE:** The takeoff height cannot be modified.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('takeoff_land_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/takeoff_land_example.png" width="120px"/>  

<hr/>

### land

#### Block

<img src="/img/CDE/blockly_docu/junior/land.PNG" width="90px"/>  

#### Description
This function makes the drone land by throttling down safely.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('takeoff_land_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/takeoff_land_example.png" width="120px"/>  

<hr/>

### emergency stop

#### Block

<img src="/img/CDE/blockly_docu/junior/emergencystop.png" width="180px"/>  

#### Description
This function stops all motors immediately. Use with caution to avoid damaging your drone.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('emergencystop_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/emergencystop_example.png" width="180px"/>  

<hr/>

### hover for [seconds] seconds

#### Block

<img src="/img/CDE/blockly_docu/junior/hover.png" width="220px"/>  

#### Description
This function makes the drone hover in place for a given duration in seconds.

#### Parameters
***integer* duration:** the duration of hover, in seconds

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('hover_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/hover_example.png" width="240px"/>  

<hr/>

### go [direction] for [seconds] seconds at [power] % power

#### Block

<img src="/img/CDE/blockly_docu/junior/go_for_seconds_at_power.png" width="480px"/>  

#### Description
This function flies the drone in a direction for a given duration and a power percentage.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/go_at_power_params.png" width="480px"/> 

**direction:** forward, backward, up, down, left, right     
***integer* duration:** the duration of movement, in seconds       
***integer* power:** the power/speed of drone between 0 and 100

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('go_at_power_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/go_at_power_example.png" width="420px"/>  

<hr/>

### turn [direction] [degrees] degrees

#### Block

<img src="/img/CDE/blockly_docu/junior/turn_to.png" width="240px"/>  

#### Description
Turns CoDrone EDU to the left or to the right a given number of degrees.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/turn_to_params.png" width="240px"/>  

**direction:** left, right      
***integer* degrees:** the angle of the turn between -180 and +180

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('turn_to_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/turn_to_example.png" width="240px"/>  

<hr/>

### turn [direction] for [seconds] seconds at [power]% power

#### Block

<img src="/img/CDE/blockly_docu/junior/turn_direction_seconds_power.png" width="450px"/>  

#### Description
Turns CoDrone EDU to the left or to the right for a duration in seconds at a percentange of power.

#### Parameters
**direction:** left, right      
***integer* duration:** the duration of the movement, in seconds       
***integer* power:** the power/speed of the drone between 0 and 100

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('turn_direction_seconds_power_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/turn_direction_seconds_power_example.png" width="450px"/>  

<hr className="section_hr"/>

## Flight Sequences

### flip [direction]

#### Block

<img src="/img/CDE/blockly_docu/junior/flip.png" width="180px"/>  

#### Description
This functions makes the drone flip back, front, right, or left. Make sure your battery percentage is over 50% for the flip to execute.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/flip_params.png" width="200px"/>  

**direction:** back, front, right, left

#### Returns
None

#### Example
Add a hover or delay block after the flip if you need to stabilize before your next command. The drone takes 3-4 seconds after a flip before it can do another flight command.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('flip_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/flip_example.png" width="500px"/>  

<hr className="section_hr"/>


## Lights

### set drone LED color to [color], with a brightness of [brightness]

#### Block

<img src="/img/CDE/blockly_docu/junior/set_drone_led.png" width="450px"/>  

#### Description
Sets the color and brightness of the CoDrone EDU drone LED.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/set_drone_led_params.png" width="450px"/>  

**color:** select a color from the color palette        
***integer* brightness:** the brightness of the LED between 0 and 255

#### Returns
None

#### Example

In this example, the program is switching between three colors (red, yellow, and green) every half second for 10 times.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_drone_led_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/set_drone_led_example.png" width="500px"/>
<br/>
<br/>
In this example, a list variable ``test_list`` is created ``["Red", "Blue", "White"]``. For 25 iterations, the ``color`` is set to a random color (a string) from ``test_list``, and the drone's LED color lights up with that color.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_drone_led_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/set_drone_led_example2.png" width="540px"/>  

<hr/>

### turn drone LED off

#### Block

<img src="/img/CDE/blockly_docu/junior/drone_led_off.png" width="180px"/>  

#### Description
Turns off the CoDrone EDU drone LED.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('drone_led_off_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/drone_led_off_example.png" width="480px"/>  

<hr/>

### set controller LED to [color], with a brightness of [brightness]

#### Block

<img src="/img/CDE/blockly_docu/junior/set_controller_led.png" width="475px"/>  

#### Description
Sets the color and brightness of the CoDrone EDU controller LED.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/set_controller_LED_params.png" width="475px"/>  

**color:** select a color from the color palette        
***integer* brightness:** positive integer between 0 and 255

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_controller_LED_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/set_controller_LED_example.png" width="500px"/>  

<hr/>

### turn controller LED off

#### Block

<img src="/img/CDE/blockly_docu/junior/controller_led_off.png" width="220px"/>  

#### Description
Turns off the CoDrone EDU controller LED.

#### Parameters
None

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('controller_led_off_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/controller_led_off_example.png" width="480px"/>  

<hr className="section_hr"/>

## Sound

### play this note [note] for [duration] seconds on drone

#### Block

<img src="/img/CDE/blockly_docu/junior/play_note_drone.png" width="430px"/>  

#### Description
Plays a note for a duration in seconds using the CoDrone EDU drone buzzer.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/play_note_drone_params.png" width="430px"/>  

**note:** note range from C3 to B7, Mute, Fin       
***integer* duration:** the duration of the note played, in seconds

#### Returns
None

#### Example
In this example, a different note is being played for half a second on the drone.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('play_note_drone_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/play_note_drone_example.png" width="430px"/>
<br/>
<br/>
In the example below, the G7 note is played for 3 seconds on the drone before takeoff. After takeoff, the G7 note played for 3 seconds again on the drone. After turning to the left 90 degrees, the G7 note is played again for 3 seconds.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('play_note_drone_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/play_note_drone_example2.png" width="430px"/>

<hr/>

### play this note [note] for [duration] seconds on controller

#### Block

<img src="/img/CDE/blockly_docu/junior/play_note_controller.png" width="450px"/>  

#### Description
Plays a note for a duration in seconds using the CoDrone EDU controller buzzer.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/play_note_controller_params.png" width="450px"/>  

**note:** note range from C3 to B7, Mute, Fin       
***integer* duration:** the duration of the note played, in seconds

#### Returns
None

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('play_note_controller_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/play_note_controller_example.png" width="450px"/>  

<hr className="section_hr"/>

## Lists

### create empty list

#### Block

<img src="/img/CDE/blockly_docu/junior/create_empty_list.png" width="180px"/> 

#### Description

Creates an empty list (a list with no items).

#### Parameters

None

#### Returns

***list*:** An empty list ``[]``

#### Example

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_empty_list_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_empty_list_example.png" width="360px"/> 

<hr/>

### create list with

#### Block

<img src="/img/CDE/blockly_docu/junior/create_list_with.png" width="200px"/> 

#### Description

Creates a list based on given values attached to the "create list with" block. The list could contain values with different data types: strings, integers, floats.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/create_list_with_params.png" width="260px"/>
Clicking on the gear icon will give you the option to manually add or reduce the number of items.

#### Returns

***list*:** A list with values attached onto the "create list with" block

#### Example
In this example, a list variable was created with a value of the same data type. The ``test_list`` variable is assigned the value of ``[2.5,3.5,1]``

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_list_with_example1_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_list_with_example1.png" width="420px"/><br/>

In this example, a list variable was created with a value of different data types. The ``test_list`` variable is assigned the value of ``[2,True,"Hello"]``

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_list_with_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_list_with_example2.png" width="490px"/> 

<hr/>

### create list with item [item] repeated [number] times

#### Block

<img src="/img/CDE/blockly_docu/junior/create_list_repeated.png" width="410px"/> 

#### Description

Creates a list with a given value repeated a given number of times by the user. The both parameters could contain an operation like "1+1", as long as it returns a value&mdash;integer or float. The first parameter can be a string value as well.

#### Parameters

***integer/float/string***&nbsp;&nbsp;**value repeated:** value that will be repeated in the list<br/>
***integer*&nbsp;&nbsp;repeats:** the number of times the given value will be in the list. 

#### Returns

***list*:** A list containing the given value repeated a given number of times.

#### Example

In this example, instead of simply putting a number block, the first parameter contains an operation block that will return a number, which is 2. The second parameter contains a number block of 3. Printing test_list will result in ``[2,2,2]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('create_list_repeated_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/create_list_repeated_example.png" width="800px"/> 

<hr/>

### length of

#### Block

<img src="/img/CDE/blockly_docu/junior/length.png" width="120px"/> 

#### Description

Returns the length of the list, which is the number of items that are inside the list.

#### Parameters

None

#### Returns

***int* length:** The length (number of items in the list) of the list.

#### Example

After creating the list ``[1,2,3]`` and assigning it to the variable ``test_list``, the console will print the length of ``test_list``, which is ``3`` (three items in the list). 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('length_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/length_example.png" width="400px"/> 

<hr/>

### [list] is empty

#### Block

<img src="/img/CDE/blockly_docu/junior/is_empty.png" width="140px"/> 

#### Description

Returns a boolean value indicating if the list is empty or not (if the list has no items or not).

#### Parameters

***list* list variable:** a variable that's a list

#### Returns

***boolean*&nbsp;&nbsp;is empty:** ``True`` if there are items in the list. Otherwise, returns ``False`` 

#### Example
In this example, ``test_list`` block is attached to the "create empty list" block. The console prints ``test_list``, which is ``[]``. Then, the console prints the length of ``test_list``, which is 0. Finally, the console prints whether or not ``test_list`` is empty, which is ``True``. These 3 printing statements are ways to verify if the list is indeed empty or not. "is empty" is useful when applying if-statements to it.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('is_empty_example1_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/is_empty_example1.png" width="340px"/><br/>

In this example, the console prints whether or not ``test_list`` is empty, which is ``False``. ``test_list`` indeed is not empty since there are items in it.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('is_empty_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/is_empty_example2.png" width="400px"/> 

<hr/>

### in list [list] find [occurrence] occurrence of item [item] 

#### Block

<img src="/img/CDE/blockly_docu/junior/find_occurrence.png" width="440px"/> 

#### Description

Retuns the index (position) of the first/last occurrence of the given item in the given list variable.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/find_occurrence_params.png" width="440px"/>

***list* list variable:** a variable that is a list<br/>
**occurrence:** the first or last occurrence of the item<br/>
***integer/float/string***&nbsp;&nbsp;**item:** value of the item

#### Returns

***integer* index:** The position of the item in the list

#### Example

In this example, the ``test_list`` variable is assigned the value of ``[1,2,3]``. The console prints ``2`` as the first occurrence of the item "2" in ``test_list`` since it is the second item in ``test_list``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('find_occurrence_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/find_occurrence_example.png" width="580px"/>

<hr/>

### in list [list] get/remove [occurrence]

#### Block

<img src="/img/CDE/blockly_docu/junior/get_remove.png" width="290px"/> 

#### Description

If choosing the "get" option, it returns the value of the item in a given position of the list. If choosing the "remove" option, it removes the item in a given position of the list. If choosing the "get and remove" option, it returns the value of the item and removes the item in a given position of the list.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/get_remove_params1.png" width="290px"/><br/>
<img src="/img/CDE/blockly_docu/junior/get_remove_params2.png" width="300px"/>

***list*&nbsp;&nbsp;list variable:** A variable that is a list<br/>
**command:** option to whether to get, get and remove, or remove an item from the list<br/>
**position:** The position of the item. **(Some options require an integer input like the "#" and "# from end").**

#### Returns

***integer/float/string*&nbsp;&nbsp;item:** If choosing "get" or "get and remove", the value of the item is returned. If choosing "remove", returns ``None``

#### Example
In this example, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. For the first and third print statements, ``undefined`` is printed since the position numbers are out of range (the positions don't exist) in ``test_list``. ``5`` and ``3`` are printed for the second and fourth print statements, respectively, since ``5`` is in position #2 and ``3`` is in position #4. 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_remove_example1_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/get_remove_example1.png" width="470px"/>
<br/>
<br/>

In the example below, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. Then, in order, the items at position #4, position #3, and position #2 are removed from ``test_list``. The console prints ``test_list``, which outputs ``[100]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_remove_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/get_remove_example2.png" width="430px"/>
<br/>
<br/>

In the example below, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. Then, in order, the items at positiong #4, position #3, and position #2 are printed on the console and removed from ``test_list``. The console prints ``test_list``, which outputs ``[100]``. **NOTE:** "get and removed" option makes the block capable to be attached to a variable block as well.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('get_remove_example3_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/get_remove_example3.png" width="550px"/> 

<hr/>

### in list [list] set/insert [occurence] as [value]

#### Block

<img src="/img/CDE/blockly_docu/junior/set_insert.png" width="340px"/> 

#### Description

If choosing the "set" option, the block will set an existing item at a given position to a given value. If choosing the "insert at" option, the block insert/add a new item a given value into a given position in the list.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/set_insert_params1.png" width="340px"/><br/>
<img src="/img/CDE/blockly_docu/junior/set_insert_params2.png" width="340px"/>

***list*: list variable:** a variable that is a list that you'll be modifying<br/>
**command:** option to whether set an existing item to a value or insert a new item into the list.<br/>
**position:** The position of the item. **(Some options require an integer input like the "#" and "# from end").**<br/>
***integer/float/string* value:** The value that the updated or new item will be. 

#### Returns

None

#### Example

In this example, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. On the next block, the item at position #1 (``100``) be a set with a new value given by the **value** parameter. The new value is equal to the current value of the item at position #1 (represented by the "get" block inside) subtracted by 1 (``99``). Finally, printing ``test_list`` will result this output: ``[99,5,2,3]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_insert_example1_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/set_insert_example1.png" width="880px"/>
<br/>
<br/>

In this example, the list variable ``test_list`` is created with a value of ``[100,5,2,3]``. On the next block, a new item will be inserted/at position #5 with a value given by the **value** parameter. The new item's value is equal to the value of the item at position #1 (represented by the "get" block inside) subtracted by 1 (``99``). Finally, printing ``test_list`` will result this output: ``[100,5,2,3,99]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('set_insert_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/set_insert_example2.png" width="880px"/>

<hr/>

### in list [list] get sub-list from [position1] to [position2] 

#### Block

<img src="/img/CDE/blockly_docu/junior/sublist.png" width="480px"/> 

#### Description

Returns a list that is sub-list of a given list from a given starting position to a given ending position. It does not modify the given list.

#### Parameters

<img src="/img/CDE/blockly_docu/junior/sublist_params1.png" width="480px"/> 
<img src="/img/CDE/blockly_docu/junior/sublist_params2.png" width="500px"/>

***list* list variable:** a variable that is a list<br/>
**starting position:** The position on the list where the sub-list will start at. **(Some options require an integer input like the "#" and "# from end").**<br/>
**ending position:** The position on the list where the sub-list will end at. **(Some options require an integer input like the "#" and "# from end").**<br/>

#### Returns

***list* sub-list:** The sub-list from the given list

#### Example

In this example, the list variable ``test_list`` is created with a value of ``[23,2,100,5,4,3]``. The list variable ``new_list`` is created with a value of ``[23,2,100,5]``. This is because the "get sub-list" block gets a portion of ``test_list`` from position #1 (``23``) to position #4 (``5``). 

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sublist_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sublist_example.png" width="800px"/> 

<hr/>

### sort numeric/alphabetic ascending/descending

#### Block

<img src="/img/CDE/blockly_docu/junior/sort.png" width="300px"/> 

#### Description

Returns sorted list based on numerical/alphaetical order and ascending/descending order. This could be attached to a "print" block or a "set variable" block.<br/><br/>
**NOTE:** alphabetical ordering, in programming, is done using the strings' letters' <a href="https://www.geeksforgeeks.org/ascii-table/" target="_blank">ASCII codes</a>. The uppercase alphabet (A-Z) has ASCII values between 65 and 90, and the lowercase alphabet (a-z) has ASCII values between 97 and 122. This means lowercase alphabet has higher ASCII values than the uppercase alphabet. 

#### Parameters

<img src="/img/CDE/blockly_docu/junior/sort_params1.png" width="300px"/><br/>
<img src="/img/CDE/blockly_docu/junior/sort_params2.png" width="300px"/>

**order type:** The way the list is sorted, by alphabetical or numerical order <br/>
**order:** ascending (A-z or smallest to biggest) or descending (z-A or biggest to smallest)

#### Returns

***list* sorted list:** a sorted list

#### Example

In this example, a list variable ``test_list`` is created with a value of ``[5,2,3]``. The console prints the output of the sorted list from ``test_list`` in ascending, numerical order ``[2,3,5]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sort_example1_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sort_example1.png" width="500px"/>
<br/>
<br/>

In the example below, a list variable ``test_list`` is created with a value of ``["Zebra","apple","Mouse"]``. The console prints the sorted list from ``test_list`` in descending alphabetical order, which is ``["apple", "Zebra", "Mouse"]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sort_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sort_example2.png" width="500px"/>
<br/>
<br/>

In the example below, a list variable ``test_list`` is created with a value of ``["Zebra","apple","Mouse"]``. The console prints the sorted list from ``test_list`` in descending alphabetical order (ignoring case), which is ``["Zebra", "Mouse", "apple"]``. Ignoring case essentially reads the uppercase letters as lowercase letters, so a lowercase "z" has a greater ASCII value than a lowercase "m" (and lowercase "m" greater than lowercase "a").

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('sort_example3_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/sort_example3.png" width="600px"/>

<hr/>

### make [list from text/text from list] [text/list] with delimiter [value]

#### Block

<img src="/img/CDE/blockly_docu/junior/delimiter.png" width="400px"/> 

#### Description

If choosing the "list from text" option, the block internally splits the given text into parts based on the given delimiter and returns a list. For example, the string ``"12!23!5!"`` with a delimiter of ``"!"`` will be converted to ``[12,23,5]``. If choosing the "text from list" option, the block internally joins the given list's items based on the given delimiter and returns a string. For example, the list ``[12,3,5]`` with a delimiter of ``"--"`` will be converted to ``"12--3--5"``.<br/>

#### Parameters

<img src="/img/CDE/blockly_docu/junior/delimiter_params1.png" width="400px"/> 

***string/list* string/list variable:** the variable, which is a list or text, that will be converted into a string or list.<br/>
***string* delimiter:** a string of characters that will join a list's items or split the text's contents.

#### Returns

***string/list* converted string or list:** a list (or string) that is the result of the conversion of the given string (or list) with the given delimiter.

#### Example
In this example, the string ``"14,2,1"`` will be converted into a list with the ``","`` delimiter. The list variable ``test_list`` will be set to this conversion. The console will print ``test_list``, which is ``[14,2,1]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('delimiter_example1_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/delimiter_example1.png" width="700px"/>

In this example, the list variable ``test_list`` will have value of ``[23,2,100]``. The string variable ``test_string`` will have the value of ``"23--2--100"`` since it's set to the value of the converted list of ``test_list`` with the ``--`` delimiter.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('delimiter_example2_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/delimiter_example2.png" width="700px"/>

<hr/>

### reverse [list]

#### Block

<img src="/img/CDE/blockly_docu/junior/reverse_list.png" width="140px"/> 

#### Description

Returns a list with the reversed order of the given list.

#### Parameters

***list* list variable:** the list variable that will its order reversed

#### Returns

***list* reversed list:** a reversed list of the given list

#### Example

In this example, the list variable ``test_list`` has a value of ``[23,2,100,5,4,3]``. Then, the list variable ``new_list`` is set to the value of a reversed list of ``test_list``. The console will print ``[3,4,5,100,2,23]``.

<div className="loadXmlDiv">
  <button className="loadXmlButton" onClick={() => loadBlocklyXml('reverse_list_example_junior')}>
    <img src="/img/Open_in_Blockly_logo.png" alt="Logo" className="button-logo"/>
    <span className="button-text">Open in Blockly</span>
  </button>
</div>

<img src="/img/CDE/blockly_docu/junior/reverse_list_example.png" width="450px"/>
