---
title: "Firmware"
slug: Firmware
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

## Updating CoDrone EDU Firmware
CoDrone EDU is always improving, so it's important to update the firmware for both the drone and the controller. Click **<a href="https://codrone.robolink.com/edu/updater/">here</a>** to start updating your controller's firmware.

<div className="firmware-row">
  <div className="firmware_div">
    <h3>CoDrone EDU</h3>
    <div className="firmware_div-fig">
      <img src="/img/CDE/drone_remote-4.png" width="350px"/>
    </div>
    <h4>Drone Version</h4>
    <p>Latest Version: 24.9.1</p>
    <h4>Controller Version</h4>
    <p>Latest Version: 24.9.1</p>
</div>

  <div className="firmware_div">
    <h3>CoDrone EDU (JROTC edition)</h3>
    <div className="firmware_div-fig">
      <img src="/img/CDE/drone_remote_cdej-3.jpg" width="350px"/>
    </div>
    <h4>Drone Version</h4>
    <p>Latest Version: 24.2.12</p>
    <h4>Controller Version</h4>
    <p>Latest Version: 23.12.11</p>
  </div>
</div>

<hr className="section_hr"/>

## CoDrone EDU Drone Release Notes

### Version 24.9.1
#### October 23, 2024
**New Features** :sparkles:
- Motor Stall Prevention &mdash; If the drone detects a problem with one of the motors (like it’s stuck or acting strangely) during takeoff, it will automatically stop trying to fly.

**Bug Fixes** :bug:
- Takeoff improvement &mdash; The firmware has been improved to reduce the frequency of an error with the height sensor during takeoff.

- Flight Count Issue Resolved &mdash; Previously, resetting the drone’s settings would also reset the flight time. This has been corrected so your flight time remains accurate.

<hr className="section_hr"/>

## CoDrone EDU Controller Release Notes

### Version 24.9.1
#### October 23, 2024

**New Features** :sparkles:
- Motor Stall Prevention &mdash; The controller will display "MOTOR STALL" when the drone detects a problem with one or more motors.

- Color Sensor Notification During Flight &mdash; When flying, the color sensor status screen will now display a message that it is disabled during flight.

**Improvements** :arrow_up:
- Display Stability &mdash; The screen will now go blank less often thanks to a speed improvement in how the drone communicates with the display.

- New Screens Added &mdash; We’ve updated the interface to include new screens to match CoDrone EDU (JROTC ed.)

**Bug Fixes** :bug:
- Takeoff improvement &mdash; If the error with the height sensor occurs during a takeoff attempt, the controller will automatically display a “[RANGE GROUND] WRONG VALUE” message.

<hr className="section_hr"/>

## CoDrone EDU (JROTC edition) Drone Release Notes

*No new release yet.*

<hr className="section_hr"/>

## CoDrone EDU (JROTC edition) Controller Release Notes

*No new release yet.*