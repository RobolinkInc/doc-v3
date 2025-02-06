---
title: "Python Changelog"
slug: Python-Changelog
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---


## CoDrone EDU Python Library Changelog

### Version 2.1
#### January 6, 2025
**New Features** :sparkles:
- New function get_raw_motion_data() implemented

**Improvements** :arrow_up:
- Reversed the parameters in the turn() function so that power (direction) comes first before duration (in seconds)
- Addressed cases where get_control_speed() did not return updated values
- Added library functionality to improve color calibration
- Added library functionality to properly detect disconnections of the programming software to the drone or controller
- Addressed cases where controller_draw_image() missed pixels while drawing

**Bug Fixes** :bug:
- Corrected the turning direction in the turn() function to handle positive and negative values correctly.

<hr/>

### Version 2.0
#### November 7, 2024
**New Features** :sparkles:
- added get_movement_state()
- added get_count_data()
- added get_address_data()
- added get_information_data()
- get_error_data() now includes state data in addition to sensor data
- controller_preview_canvas() no longer contains image parameter

**Improvements** :arrow_up:
- improved error handling messages for the user
- print_move_values() was renamed to get_move_values() which can be printed as needed
- renamed reset_sensor() -> reset_gyro() and increased delay to ensure reset
- renamed reset_move() -> reset_move_values()
- renamed get_temperature() -> get_drone_temperature()
- renamed get_flow_x() -> get_flow_velocity_x()
- renamed get_flow_y() -> get_flow_velocity_y()
- renamed get_x_accel() -> get_accel_x()
- renamed get_x_accel() -> get_accel_y()
- renamed get_x_accel() -> get_accel_z()
- renamed get_x_angle() -> get_angle_x()
- renamed get_x_angle() -> get_angle_y()
- renamed get_x_angle() -> get_angle_z()
- renamed load_classifier() -> load_color_data()
- all controller screen draw functions have an image parameter (functions not compatible with JROTC ed.)
- send_absolute_position(), move_forward(), move_backward(), move_left(), and move_right() have been improved for testing
- get_image_data() is now a Drone class method (ex. drone.get_image_data())

**Bug Fixes** :bug:
- fixed the pkg_resources error for versions of Python greater than 3.11
- fixed set_trim() and reset_trim() delays to work with CoDrone EDU (JROTC ed.)
- fixed an issue that appeared when calibrating only 3 colors using the KNN model
- corrected the index value for get_flow_velocity_y()

<hr/>

### Version 1.9
#### October 8, 2023

**Bug Fixes** :bug:
- Fixed a bug in returning controller button press data for the custom controller lesson      

<hr/>

### Version 1.8
#### April 15, 2023

**New Features** :sparkles:
- added get_sensor_data()  

**Improvements** :arrow_up:
- Removed pynput dependency 

**Bug Fixes** :bug:     
- Fixed bug where sensor requests would return 0 right after takeoff  

<hr/>

### Version 1.7
#### February 16, 2023

**New Features** :sparkles:
- added start_controller_buzzer()       
- added stop_controller_buzzer()        
- added get_error_data()

**Improvements** :arrow_up:
- renamed get_x_gyro() -> get_angular_speed_x()     
- renamed get_y_gyro() -> get_angular_speed_y()     
- renamed get_z_gyro() -> get_angular_speed_z()     
- codrone-edu library version prints to console         

<hr/>

### Version 1.6
#### December 28, 2022

**New Features** :sparkles:
- added start_drone_buzzer()        
- added stop_drone_buzzer()     
- added get_temperature()       
- added move_forward()      
- added move_left()     
- added move_right()        
- added move_backward()

**Improvements** :arrow_up:
- updated send_absolute_position()          

<hr/>

### Version 1.5
#### November 14, 2022

**New Features** :sparkles:
- added stop_motors()
- added reset_sensor()

**Improvements** :arrow_up:
- avoid wall default unit changed from mm to cm    
- get_pressure() and get_drone_temp() have been modified


<hr/>

### Version 1.4
#### August 17, 2022

**New Features** :sparkles:
- added error checking to load_classifier() method      
- added height_from_pressure()      
- Virtual ceiling method integrated

**Improvements** :arrow_up:
- Changed yaw directional values (positive yaw now turns left)      

<hr/>

### Version 1.3
#### June 27, 2022

**New Features** :sparkles:
- added go()        
- added 'ESC' key kill switch       
- waypoints now support multiple takeoffs       
- Motor diagnostic integrated as motor_test()       
- Added virtual ceiling to the background of the drone class        
- added turn()

**Improvements** :arrow_up:
- turn_degree() method improved     


<hr/>

### Version 1.2
#### June 10, 2022

**New Features** :sparkles:
- Added move() command with input parameters        
- Added hyperlink to "drone may not be paired" message.     
- Added floor test as a method test_floor()     
- Added a motor test that uses all 4 motors individually to determine if one is faulty. motor_test()        
- Added waypoint system     
- Added joystick and button functions       

<hr/>

### Version 1.1
#### May 17, 2022

**Improvements** :arrow_up:
- removed serial library

**Bug Fixes** :bug:
- Fixed screen error on controller 

<hr/>

### Version 1.0
#### May 17, 2022

**New Features** :sparkles:
- Speed defaults to 2 when starting a program       
- Added speed_change() and get_control_speed() functions        
- Pillow library added as dependency        
- Added error message if serial library is not detected     
- Added error handling when calling load_classifier()       

<hr/>

### Version 0.9
#### May 17, 2022

**New Features** :sparkles:
- Added Swarm class

<hr/>

### Version 0.8
#### Mar 1, 2022

**New Features** :sparkles:
- Added movement as a state in the state list       
- Added temperature_convert()

<hr/>

### Version 0.7
#### Feb 18, 2022

**New Features** :sparkles:
- Added luminosity to knn.fit for a fourth data point
- Added controller screen drawing functions

**Bug Fixes** :bug:
- Fixed turn_degree() to be absolute and smoother and turn 180 degrees      
- Fixed turn_right()        
- Fixed turn_left()

<hr/>

### Version 0.6
#### Feb 4, 2022

**New Features** :sparkles:
- Added and fixed sendMotor     
- Added and fixed sendMotorSingle
- Added buzzer flip warning when battery is less than 50%       
- convert_meter can now return meter        
- Added drone.append_color_data() - appends data to an existing text file       
- Added error handling when load_classifier is empty 

**Improvements** :arrow_up:
- drone.get_flow_x, y converted from m to cm        
- All distance sensors now return in centimeter by default  
- drone.turn_degree() is now absolute and division by 0 is fixed        
- drone.get_height() now uses time of flight instead of barometer
- Updated set_trim() to only change roll and pitch      
- Updated get_trim_data() to return only roll and pitch
- Changed dir variable in add_color()

**Bug Fixes** :bug:
- Fixed all functions effected by centimeter being returned by default      
- Fixed buzzer functions  
- Fixed drone.avoid_wall()      
- Fixed issue when adding to a dataset that already exists      

<hr/>

### Version 0.5
#### Jan 10, 2022

**New Features** :sparkles:
- Added drone.flip()        
- Added convert_millimeter() and convert_meter() to return centimeter by default for all positional functions       
- Added error handling in the color classifier      
- Added docstrings  

<hr/>

### Version 0.4
#### Dec 15, 2021

**New Features** :sparkles:
- Added drone.get_drone_temp()      
- Added drone.get_pressure()        
- Added drone.drone_buzzer()        
- Added drone.controller_buzzer()       
- Added drone.set_trim()        
- Added drone.get_height()        
- Added drone.get_pressure()        
- Added the flight sequences square, triangle, spiral, and sway.

**Improvements** :arrow_up:
- Improved takeoff command      
- Improved port connection

<hr/>

### Version 0.3
#### Nov 23, 2021

**New Features** :sparkles:
- Added drone.avoid_wall() - Obstacle avoidance command. is similar to zumi.forward_avoid_collision()       
- Added drone.detect_wall() - Uses front range sensor to detect a wall      
- Added drone.keep_distance() - Keep distance command makes the drone maintain a distance to an obstacle        
- Added drone.turn_left() - Can be given a degree and the drone will turn to the left       
- Added drone.turn_right() - Can be given a degree and the drone will turn to the right     
- Added drone.turn_degrees() - Can take an absolute degree command and will turn to that degree.        
- Added drone.hover() - Will make the drone hover.      
- Added reset_YPRT() - Resets the yaw pitch roll and throttle and sends the command to the drone.       
- Added drone.keep_height() - Keep height command. A single command that is looped.     
- Added get_colors() - returns a list [1, 2]        
- Added get_front_color() - gets first color in get_colors() list       
- Added get_back_color() - gets second color in get_colors() list       
- Added predict_color() - predicts a color if you have trained the model and there is an existing file      
- Finished basic LEDs

<hr/>

### Version 0.1 - 0.2
#### Oct 10, 2021

**New Features** :sparkles:
- Added Drone.acceleration_x, y, z
- Added Drone.angle_roll, yaw, pitch
- Added Drone.range_front()
- Added Drone.range_bottom()
- Added Drone.get_battery()
- Added Drone.open()
- Added Drone.takeoff()
- Added Drone.land()

<hr/>
