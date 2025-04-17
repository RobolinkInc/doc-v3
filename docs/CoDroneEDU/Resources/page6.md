---
title: "Programming Mat"
slug: Programming-Mat
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

## Getting Started with the Programming Mat

The CoDrone EDU Programming Mat is designed to enhance the performance of your drone’s sensors during flight. The printed pattern on the mat provides clear visual reference points that help the drone more accurately detect motion and maintain stable position and altitude.

Whether you are piloting with the controller or running code-based missions, the mat improves:
- Hover stability
- Straight-line accuracy
- Distance detection

The mat can also be used for optical flow sensor applications and position-based commands. (Coming soon!)

<img src="/img/CDE/mat_v5.2.png" width="600"/>

### Do I need the mat?

The mat is an optional tool that minimizes variation in flooring across different classrooms and creates a consistent testing environment. It helps improve the drone's flight stability and repeatability. While you can complete all of our curriculum without the mat, if you plan to run programs that require higher sensor reliability, it’s a great addition to your classroom.

The mat also provides a grid to simplify navigation and facilitate coordinate-based programming. For example, if you want to use the [`move_distance()`](https://docs.robolink.com/docs/CoDroneEDU/Python/Drone-Function-Documentation#move_distance) or [`send_absolute_position()`](https://docs.robolink.com/docs/CoDroneEDU/Python/Drone-Function-Documentation#send_absolute_position) functions, the mat makes it easier to test code and validate your position compared to the sensor data.

## Using the Programming Mat
 
In the center of the mat, there are four dots — two of them are red to match the red propellers on your drone. If you're using the mat as a navigation tool, it's important to place the drone at the center of the grid. Line up the drone's motor bumpers with the dots, matching the red-propeller motors to the red dots. If you've swapped your propeller colors, just make sure the two front motors align with the red dots. The front of the drone is indicated by the front range sensor or the action button.

<img src="/img/CDE/drone_front.png"/>

If you're not using the coordinate plane on the mat, you can place your drone anywhere and run your code as you normally would. The distinct pattern still improves stability for both position-based commands and general flying.

### Understanding the Drone's Coordinate System

Think back to your 2-dimensional coordinate plane. There are two axes that form the plane, and we typically divide it into four quadrants.

<img src="/img/CDE/mat_quadrants.png" width="600"/>

The drone’s coordinate system initializes with the drone “facing” the positive x-axis. In other words, when you pitch forward, the drone travels along the x-axis in the positive direction. To demonstrate this, look at your sensor dashboard after taking off and moving forward for 1 second at 50% power.

<img src="/img/CDE/mat_example_1.png" width="600"/>

Reset the drone to the starting position. Add a command to your code to move left after moving forward. Run it again and then open your sensor dashboard.

<img src="/img/CDE/mat_example_2.png" width="600"/>

Since the drone moved forward and to the left, its internal coordinate system will indicate it's in the first quadrant of the coordinate plane.

### Resetting the Drone's Coordinate System

The drone’s internal coordinate system resets to (0, 0, 0) every time you insert the battery, and again each time you take off. If you try to read or print sensor data while walking the drone to its takeoff location, it may be inaccurate.

### Checking Your Position

When you're starting out with CoDrone EDU, you typically use time-based commands like the ones we showed above. For example: "Fly to the left for 3 seconds at 40% speed." You can combine flight movements with sensor data from the optical flow sensor to check if you've arrived at a certain position. See this example to see how you can use a loop and a conditional to compare your current x-position and desired x-position.

**Note:** Even with the mat, the optical flow sensor is not always perfect! Make sure your drone frame, motors, and propellers are in good working condition.

<img src="/img/CDE/mat_example_3.png" width="600"/>

While the optical flow sensor has limitations due to the drone’s educational design, it still offers valuable opportunities to explore control systems and autonomous flight algorithms. More lessons on position sensing will be available soon on Basecamp—stay tuned!