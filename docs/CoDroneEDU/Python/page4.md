---
title: "Function Documentation"
hide_title: true
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='level3_body'>

## Flight Commands

### take_off()

### land()


### emergency_stop()

### hover()

### move()

### flip()

### turn_degree()

### avoid_wall()

## Flight Variables

## Status Checkers

### code_is_running()

## Lights

## Sensors

### get_range()

### get_angle()

### get_gyro()

### get_accel()

### get_pos()

### get_battery()

#### Syntax
``get_battery()``

#### Parameters
None

#### Discription
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

### get_bottom_range()

#### Syntax
``get_bottom_range()``  
``get_bpttom_range(unit="<cm, in, mm, m>")``

### get_temperature()

### get_elevation

### get_color()

### get_hsvl()

### get_state_data()

### reset_sensor()

## Sound

### drone_buzzer()

### controller_buzzer()

### drone_buzzer_hertz()

### controller_buzzer_herts()

## Screen

### controller_draw_line()

### controller_draw_string()

### controller_draw_rectangle()

### controller_draw_square()

### controller_draw_point()

### controller_clear_screen()

</div>