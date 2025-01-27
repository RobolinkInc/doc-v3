---
title: "Function Documentation (Swarm)"
slug: Function-Documentation-Swarm
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

<div className='change_version'>
version 2.2 ([Changelog](/docs/CoDroneEDU/Python/Python-Changelog))
</div>

## Classes

### Swarm

#### Description
This class is used to connect to multiple drones and allow the connected drones to perform commands at the same time or different times.

#### Syntax
``Swarm()``<br/>
``Swarm(enable_print=True)``<br/>
``Swarm(enable_pause=True)``<br/>
``Swarm(enable_color=True, enable_print=True)``<br/>
``Swarm(enable_color=True, enable_print=True, enable_pause=True)``

#### Parameters
***boolean* enable_color:** If ``True``, when using ``swarm.connect()``, the each drone will be assigned a different LED color to distinguish from each other. By default, this is set to ``True``.<br/>
***boolean* enable_print:** If this value is ``True`` and enable_color is ``True``, when using ``swarm.connect()``, the console prints the assigned color and index of each drone. The index is important when using ``swarm.run_drone()`` for running drone commands for a given drone or using ``sequence.add()`` for scheduling commands for a given drone. By default, this is set to ``True``.<br/>
***boolean* enable_pause:** If ``True``, when using ``swarm.connect()``, the console will wait for the user to press Enter in the console to continue running the program. This is useful when the user needs time to fix their set-up. By default, this is set to ``True``.

#### Returns
***Swarm* swarm object:** This returns a swarm object that allows the user to connect to multiple drones and run drone commands.

#### Example Code 1
```python
from codrone_edu.swarm import * # this line is required!

swarm = Swarm() # enable_print, enable_color, and enable_pause are set to True by default

swarm.connect()
'''
Console Output:
Running codrone-edu library version 2.2
Connected to CoDrone EDU.
Battery = 100%
Connected to CoDrone EDU.
Battery = 90%

Drone 0 at port COM16: red
Drone 1 at port COM22: blue
Press Enter to start swarm...
'''

swarm.disconnect()
```

#### Example Code 2
```python
from codrone_edu.swarm import *

swarm = Swarm(enable_print=False)

swarm.connect() # same result if enable_color=False (even if enable_print=True)
'''
Console Output:
Running codrone-edu library version 2.2
Connected to CoDrone EDU.
Battery = 100%
Connected to CoDrone EDU.
Battery = 90%

Press Enter to start swarm...
'''

swarm.disconnect()
```

#### Example Code 3
```python
from codrone_edu.swarm import *

swarm = Swarm(enable_pause=False)

swarm.connect() # doesn't pause the program
'''
Console Output:
Running codrone-edu library version 2.2
Connected to CoDrone EDU.
Battery = 100%
Connected to CoDrone EDU.
Battery = 90%

Drone 0 at port COM16: red
Drone 1 at port COM22: blue
'''

swarm.disconnect()
```

### Sequence

#### Description
This class is used to schedule a sequence of drone commands for a given drone. To learn more about its function, read this <a href="#sequenceadd">section</a>.

#### Syntax
``Sequence(index)``

#### Parameters
***integer* index:** The index of the drone. To view drone indices, ``enable_print`` and ``enable_color`` must be set to ``True`` for the ``Swarm`` object.

#### Returns
***Sequence* sequence object:** A sequence object that can schedule drone commands for a given drone.

#### Example Code
```python
from codrone_edu.swarm import *

swarm = Swarm() # enable_print, enable_color, and enable_pause are set to True by default

swarm.connect() # displays drone indices and LED color

sequence_0 = Sequence(0) # store Sequence object that will schedule drone commands for drone 0 in a variable

sequence_0.add('turn_left', 45)
sequence_0.add('turn_right', degree=90)

sequence_1 = Sequence(1) # store Sequence object that will schedule drone commands for drone 1 in a variable

sequence_1.add('turn_left')

sync = Sync(sequence_0, sequence_1)

swarm.takeoff()

swarm.run(sync)

swarm.land()

swarm.disconnect()
```

### Sync

#### Description
This class is used to store Sequence objects from each drone in order to synchronize the drones with ``swarm.run()``. To learn more about its function, read this <a href="#syncadd">section</a>.

#### Syntax
``Sync(*args)``

#### Parameters
**\*args:** Sequence object(s). If there are multiple Sequence objects to be added, each value must be separated by a comma. Can store however many the user needs.

#### Returns
***Sync* sync object:** A sync object that stores multiple Sequence objects that are assigned to drones. Ready to be used with ``swarm.run()``.

#### Example Code
```python
from codrone_edu.swarm import *

swarm = Swarm()

swarm.connect()

sequence_0 = Sequence(0)
sequence_0.add('turn_left', 45)
sequence_0.add('turn_right', 90)

sequence_1 = Sequence(1)
sequence_1.add('turn_left')

sync = Sync(sequence_0, sequence_1)
# inputs however many sequences needed
# stores sequences/schedules for drone 0 and drone 1

swarm.takeoff() # all drones take off

swarm.run(sync) # executes scheduled drone commands in sync object for drone 0 and 1 at the same time

swarm.land() # all drones land

swarm.disconnect()
```

<hr className="section_hr"/>

## Connection

### swarm.connect()

#### Description
This function connects all of the CoDroneEDU controllers with the program.

#### Syntax
``swarm.connect()``

#### Parameters
None

#### Returns
None

#### Example Code
```python
from codrone_edu.swarm import * # this line is required!

swarm = Swarm() # creates Swarm object, also required

swarm.connect() # connects with controllers

swarm.disconnect()
```

<hr/>

### swarm.disconnect()

#### Description
This function disconnects all of the CoDroneEDU controllers from the program.

#### Syntax
``swarm.connect()``

#### Parameters
None

#### Returns
None

#### Example Code
```python
from codrone_edu.swarm import *

swarm = Swarm()

swarm.connect() 

swarm.close() # disconnects controllers from the program
```
<hr className='section_hr'/>

## Commands

### swarm.run_drone()

#### Description
This function runs a Drone function for only one drone in the swarm. To view the available Drone functions, head to <a href='/docs/CoDroneEDU/Python/Function-Documentation-Drone'>this page</a> in our documentation site!

#### Syntax
``run_drone(index, method_name, *args, **kwargs)``

#### Parameters
***int* index:** index of desired Drone that will execute Drone function<br/>
***string* method_name:** name of Drone function (command) that will be executed<br/>
**\*args:** value(s) for the parameter of the given Drone function. If there are multiple parameters required for the Drone function, each value must be separated by a comma<br/>
**\*\*kwargs:** value(s) for the parameter of the given Drone function, in form of ``parameter=value``.

#### Returns
Depending on what Drone function you are calling, it will return the value of that function. For example, if method_name is "get_position_data", ``run_drone()`` will return a list of the drone's position data since ``get_position_data()`` returns a list of a drone's position data. Also, if method_name is "get_battery", ``run_drone()`` will return an integer value of the drone's battery since ``get_battery()`` returns an integer value of a drone's battery.

#### Example Code 1
```python
from codrone_edu.swarm import *

swarm = Swarm()
swarm.connect()

swarm.run_drone(0, "set_drone_LED", 255, 255, 0, brightness=255)
# index: 0
# method_name: "set_drone_LED"
# *args: 255, 255, 0
# **kwargs: brightness=255

# *args and **kwargs are not required unless the Drone function requires certain parameters to be inputted. In this case, set_drone_LED() does require all of the parameters. NOTE: The run_drone() commands in Example 1, 2, and 3 do the same thing.

swarm.disconnect()
```

#### Example Code 2
```python
from codrone_edu.swarm import *

swarm = Swarm()
swarm.connect()

swarm.run_drone(0,"set_drone_LED", 255, 255, 0, 255)
# index: 0
# method_name: "set_drone_LED"
# *args: 255, 255, 0, 255
# **kwargs:

swarm.disconnect()
```
#### Example Code 3
```python
from codrone_edu.swarm import *

swarm = Swarm()
swarm.connect()

swarm.run_drone(0,"set_drone_LED", r=255, g=255, b=0, brightness=255)
# index: 0
# method_name: "set_drone_LED"
# *args:
# **kwargs: r=255, g=255, b=0, brightness=255

swarm.disconnect()
```
#### Example Code 4
```python
from codrone_edu.swarm import *

swarm = Swarm()
swarm.connect()

print(swarm.run_drone(1, "get_position_data"))
# index: 1
# method_name: "get_position_data"
# *args:
# **kwargs:

swarm.disconnect()
```
#### Example Code 5
```python
from codrone_edu.swarm import *

swarm = Swarm(enable_pause=False)
swarm.connect()

swarm.takeoff()

height0 = swarm.run_drone(0, "get_pressure")
# index: 0
# method_name: "get_pressure"
# *args:
# **kwargs:
height1 = swarm.run_drone(1, "get_pressure")
# index: 1
# method_name: "get_pressure"
# *args:
# **kwargs:

print(height0, height1)

swarm.land()

swarm.disconnect()
```
<hr/>

### Drone Functions

#### Description
Any function that belongs in the Drone class can be used as a Swarm function with similar syntax. Using the ``swarm.drone_function()`` syntax will execute the given Drone function, in parallel (at the same time), for all drones in the swarm. To view the available Drone functions, head to <a href='/docs/CoDroneEDU/Python/Function-Documentation-Drone'>this page</a> in our documentation site!

#### Syntax
``drone_function()``<br/>
``drone_function(*args, **kwargs)``

#### Parameters
**\*args:** value(s) for the parameter of the given Drone function. If there are multiple parameters required for the Drone function, each value must be separated by a comma<br/>
**\*\*kwargs:** value(s) for the parameter of the given Drone function, in form of ``parameter=value``

#### Returns
***list* list of data:** A list of drone data from each drone. The drone data can be a list, integer, float, etc. depending on what Drone function you are calling. For example, ``swarm.get_position_data()`` will return a list of each of the drones' position data, which are also lists. ``swarm.get_battery()`` will return a list of each of the drones' battery, which are integers.

#### Example Code 1
```python
from codrone_edu.swarm import *

swarm = Swarm()

swarm.connect()

swarm.takeoff() # drones will take off at the same time

swarm.land() # drones will land at the same time

swarm.disconnect()
```

#### Example Code 2
```python
from codrone_edu.swarm import *

swarm = Swarm()
swarm.connect()

swarm.takeoff()

swarm.set_pitch(20) # pitch variable for all drones will be set to 20
swarm.set_roll(-20) # roll variable for all drones will be set to -20
swarm.move(2) # all drones move at 20% pitch and -20% roll power for 2 seconds

swarm.set_pitch(0) # pitch variable for all drones will be set to 0
swarm.set_roll(0) # roll variable for all drones will be set to 0
swarm.set_yaw(50) # yaw variable for all drones will be set to 50
swarm.move(3) # all drones move at 50% yaw power for 3 seconds

swarm.land()

swarm.disconnect()

```

#### Example Code 3
```python
from codrone_edu.swarm import *

swarm = Swarm()
swarm.connect()
swarm.takeoff()

swarm.turn_left() # all drones will make a 90 degree left turn

swarm.hover(3) # all drones will hover for 1 second in the air

swarm.turn_right(30, timeout=3) # all drones will make a 30 degree right turn with a 3 second timeout

swarm.land()

swarm.disconnect()
```

#### Example Code 4
If printing/storing a function call like ``swarm.get_angle_x()``, index 0 of the list will show drone 0's x-angle data, index 1 of the list will show drone 1's x-angle data, etc.
```python
from codrone_edu.swarm import *

swarm = Swarm()
swarm.connect()

for i in range(100):
    x_angles = swarm.get_angle_x() # returns a list of x-angles for each drone
    print(x_angles)
    time.sleep(0.05)

'''
Console Output:
Running codrone-edu library version 2.2
Connected to CoDrone EDU.
Battery = 43%
Connected to CoDrone EDU.
Battery = 91%

Drone 0 at port COM16: red
Drone 1 at port COM22: blue
Press Enter to start swarm...
[14, 0]
[21, -3]
[17, 10]
[2, 26]
[2, 31]
[2, 27]
[2, 27]
[21, 24]
[50, 23]
'''

swarm.disconnect()
```

<hr className="section_hr"/>

## Synchronization

### sequence.add()

#### Description
This function adds a drone command to be scheduled in the sequence.

#### Syntax
``add(method_name, *args, **kwargs)``

#### Parameters
***string* method_name:** name of Drone function (command) to be scheduled<br/>
**\*args:** value(s) for the parameter of the given Drone function. If there are multiple parameters required for the Drone function, each value must be separated by a comma<br/>
**\*\*kwargs:** value(s) for the parameter of the given Drone function, in form of ``parameter=value``.

#### Returns
None

#### Example Code
```python
from codrone_edu.swarm import *

swarm = Swarm()

swarm.connect()

sequence_0 = Sequence(0)

sequence_0.add('turn_left', 45) # drone 0 is scheduled to run turn_left(45)
sequence_0.add('turn_right', degree=90) # drone 0 is scheduled to run turn_right(90) after turn_left(45)

sequence_1 = Sequence(1)

sequence_1.add('turn_left') # drone 1 is scheduled to run turn_left(90)

sync = Sync(sequence_0, sequence_1)

swarm.takeoff()

swarm.run(sync)

swarm.land()

swarm.disconnect()
```

<hr/>

### sync.add()

#### Description
This function adds a sequence in the Sync object.

#### Syntax
``add(sequence_obj)``

#### Parameters
***Sequence* sequence_obj:** The Sequence object to be added.

#### Returns
None

#### Example Code
```python
from codrone_edu.swarm import *

swarm = Swarm()

swarm.connect()

sequence_0 = Sequence(0)
sequence_0.add('turn_left', 45)
sequence_0.add('turn_right', degree=90)

sequence_1 = Sequence(1)
sequence_1.add('turn_left')

sequence_2 = Sequence(2)
sequence_2.add('set_drone_LED', 255,255,0,255)

sync = Sync(sequence_0, sequence_1)

sync.add(sequence_2) # adds sequence for drone 2

swarm.takeoff()

swarm.run(sync)

swarm.land()

swarm.disconnect()
```

<hr/>

### swarm.run()

#### Description
Runs each of the drone's sequences independently, at the same time, or runs each of the drone's sequences one by one.

#### Syntax
``run(sync_obj)``<br/>
``run(sync_obj, type="parallel", delay=None, order=None)``


#### Parameters
***Sync* sync_obj:** Sync object that will be executed.<br/>
***string* type:** Type of synchronization: ``"sequential"`` and ``"parallel"``. If ``"sequential"``, drones execute commands one by one.<br/>
***float* delay:** Delay between drone commands, if ``type="sequential"``.<br/>
***list* order:** order of execution between drones, if ``type="sequential"``.

An example of the structure of order is:
``[[0,1,3,4,2],[4,3,2,1,0],[0,1,2,3,4]]``
- The ith-nested list represents the order of execution for the drones' ith task
- The 1st nested list will run drone 0's 1st command, then drone 1's 1st command, then drone 3's 1st command, then drone 4's 1st command, and finally drone 2's 1st command
- The 2nd nested list will run drone 4's 2nd command, then drone 3's 2nd command, then drone 2's 2nd command, then drone 1's 2nd command, and finally drone 0's 2nd command
- The 3rd nested list will run drone 0's 3rd command, then drone 1's 3rd command, then drone 2's 3rd command, then drone 3's 2nd command, and finally drone 4's 2nd command
- If a drone has less commands than others, the drone will hover instead.

#### Returns
***list* drone data:** 2D list of drone data from each drone for every command ran. This list is relevant if one of the commands for any drone returns drone data. ``swarm.run()`` doesn't need to be stored in a variable if necessary.

This is the general structure of the 2D list:
```
[[drone_0_value, drone_1_value,...,drone_n_value], --> list of return values from each drone's 1st command
[drone_0_value, drone_1_value,...,drone_n_value], --> list of return values from each drone's 2nd command
,...,
[drone_0_value, drone_1_value,...,drone_n_value]] --> list of return values from each drone's nth command
```


#### Example Code
```python
from codrone_edu.swarm import *

# First, create Sequence instances for each drone (or drone index)
sequence_0 = Sequence(0)
sequence_0.add('get_battery')
sequence_0.add('set_pitch', 20)
sequence_0.add('set_throttle', power=20)
sequence_0.add('move',2.5)
sequence_0.add('get_position_data')

sequence_1 = Sequence(1)
sequence_1.add('get_battery')
sequence_1.add('set_pitch', -20)
sequence_1.add('set_throttle', power=35)
sequence_1.add('move',4)
sequence_1.add('get_position_data')
sequence_1.add('set_pitch', 20)
sequence_1.add('set_throttle', power=-20)
sequence_1.add('move',2.5)
sequence_1.add('get_battery')

# store sequences in Sync object
sync = Sync(sequence_0, sequence_1)

# create Swarm instance and all drones are connected
swarm = Swarm()
swarm.connect()

# all drones takeoff
swarm.takeoff()

# run synchronization, drones execute their tasks individually
result = swarm.run(sync) # returns 2D list containing return values from each drone

swarm.land()

print(result) 
'''
Console Output:
Running codrone-edu library version 2.2
Connected to CoDrone EDU.
Battery = 43%
Connected to CoDrone EDU.
Battery = 91%

Drone 0 at port COM16: red
Drone 1 at port COM22: blue
Press Enter to start swarm...
[[26, 80],
[None, None],
[None, None],
[None, None],
[[13.884961605072021, 0.4637690782546997, -0.234191432595253, 0.20280465483665466], [13.884961605072021, 0.03511320427060127, -0.03844326362013817, 0.5322286486625671]],
[None, None],
[None, None],
[None, None],
[None, 67]]
'''

swarm.close()
```

<hr/>