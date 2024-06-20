---
title: "Senior Block Documentation"
slug: Senior-Block-Documentation
customHeadElements:
  - <link rel="manifest" href="manifest.json" />
---

<div className='print_div'>

<button id="print_page" onClick={() => window.print()}>Print</button>

</div>

## Flight Commands

### take off

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/takeoff.png"/>

#### Description

Makes the drone take off.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/takeoff_example.png"/>

<hr/>

### land

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/land.png"/>

#### Description

Makes the drone land.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/land_example.png"/>

<hr/>

### emergency stop

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/emergency_stop.png"/>

#### Description

Stops all commands to motors. The drone will stop flying immediately.

#### Parameters

None

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/emergency_stop_example.png"/>

<hr/>

### move([duration] sec, [roll] %, [pitch] %, [yaw] %, [throttle] %)

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/move.png"/>

#### Description

Moves the drone for a certain amount of time (in seconds) in a given direction determined by the flight parameters.

#### Parameters

**duration**: positive integer in seconds<br/>
**roll**: roll power percentage as an integer between -100 and +100<br/> 
**pitch**: pitch power percentage as an integer between -100 and +100<br/> 
**yaw**: yaw power percentage as an integer between -100 and +100<br/> 
**throttle**: throttle power percentage as an integer between -100 and +100<br/> 

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/move_example.png"/>

<hr/>

### turn([direction] , [duration] seconds, [power] %)

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/turn.png"/>

#### Description

Turns CoDrone Mini left or right for a duration in seconds and at a power percentage from 0 to 100% speed.

#### Parameters

<img src="/img/CDM/blockly_docu/senior/flight_commands/turn_params.png"/>

**direction**: left, right <br /> 
**duration**: positive integer in seconds <br />
**power**: integer from 0 to 100 <br />

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/turn_example.png"/>

<hr/>

### hover([seconds] sec)

#### Block

<img src="/img/CDM/blockly_docu/senior/flight_commands/hover.png"/>

#### Description

This function makes the drone hover for a duration in seconds.

#### Parameters

**duration**: positive integer in seconds

#### Returns

None

#### Example

<img src="/img/CDM/blockly_docu/senior/flight_commands/hover_example.png"/>

<hr className="section_hr"/>

## Flight Variables

### set_roll()

#### Block



#### Description



#### Parameters



#### Returns



#### Exmaple
