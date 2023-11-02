---
title: "Offline App Documentation"
hide_title: true
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='level3_body'>

## Flight Commands

### take_off()

#### Block

<img src="/img/CDE/take_off.png" width="16%"/>  

#### Code

<span class="light_gray">drone.</span><span class="dark_gray">takeoff()</span>

#### Discription

This function makes the drone take off and begin hovering. The drone will always hover for 3 seconds in order to stabilize before it executes the next command.  If it receives no command for 8 seconds, it will automatically land.

#### Example

<img src="/img/CDE/take_off_ex.png" width="35%"/>  

<hr/>

### land()

#### Block

<img src="/img/CDE/land.png" width="16%"/>  

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

### get_height()

### get_pressure()

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