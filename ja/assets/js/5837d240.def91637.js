"use strict";(self.webpackChunkdoc_v_3=self.webpackChunkdoc_v_3||[]).push([[56],{6100:(e,l,r)=>{r.r(l),r.d(l,{assets:()=>a,contentTitle:()=>o,default:()=>_,frontMatter:()=>n,metadata:()=>d,toc:()=>s});var t=r(5893),i=r(1151);const n={title:"Offline App Documentation",hide_title:!0,customHeadElements:['<link rel="manifest" href="manifest.json" />']},o=void 0,d={id:"CoDroneEDU/Blockly/page2",title:"Offline App Documentation",description:"Flight Commands",source:"@site/docs/CoDroneEDU/Blockly/page2.md",sourceDirName:"CoDroneEDU/Blockly",slug:"/CoDroneEDU/Blockly/page2",permalink:"/ja/docs/CoDroneEDU/Blockly/page2",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CoDroneEDU/Blockly/page2.md",tags:[],version:"current",frontMatter:{title:"Offline App Documentation",hide_title:!0,customHeadElements:['<link rel="manifest" href="manifest.json" />']},sidebar:"CoDroneEDU",previous:{title:"What is Blockly?",permalink:"/ja/docs/CoDroneEDU/Blockly/page1"},next:{title:"Block Documentation",permalink:"/ja/docs/CoDroneEDU/Blockly/page3"}},a={},s=[{value:"Flight Commands",id:"flight-commands",level:2},{value:"take_off()",id:"take_off",level:3},{value:"Block",id:"block",level:4},{value:"Code",id:"code",level:4},{value:"Discription",id:"discription",level:4},{value:"Example",id:"example",level:4},{value:"land()",id:"land",level:3},{value:"Block",id:"block-1",level:4},{value:"emergency_stop()",id:"emergency_stop",level:3},{value:"hover()",id:"hover",level:3},{value:"move()",id:"move",level:3},{value:"flip()",id:"flip",level:3},{value:"turn_degree()",id:"turn_degree",level:3},{value:"avoid_wall()",id:"avoid_wall",level:3},{value:"Flight Variables",id:"flight-variables",level:2},{value:"Status Checkers",id:"status-checkers",level:2},{value:"code_is_running()",id:"code_is_running",level:3},{value:"Lights",id:"lights",level:2},{value:"Sensors",id:"sensors",level:2},{value:"get_range()",id:"get_range",level:3},{value:"get_angle()",id:"get_angle",level:3},{value:"get_gyro()",id:"get_gyro",level:3},{value:"get_accel()",id:"get_accel",level:3},{value:"get_pos()",id:"get_pos",level:3},{value:"get_battery()",id:"get_battery",level:3},{value:"get_height()",id:"get_height",level:3},{value:"get_pressure()",id:"get_pressure",level:3},{value:"get_temperature()",id:"get_temperature",level:3},{value:"get_elevation",id:"get_elevation",level:3},{value:"get_color()",id:"get_color",level:3},{value:"get_hsvl()",id:"get_hsvl",level:3},{value:"get_state_data()",id:"get_state_data",level:3},{value:"reset_sensor()",id:"reset_sensor",level:3},{value:"Sound",id:"sound",level:2},{value:"drone_buzzer()",id:"drone_buzzer",level:3},{value:"controller_buzzer()",id:"controller_buzzer",level:3},{value:"drone_buzzer_hertz()",id:"drone_buzzer_hertz",level:3},{value:"controller_buzzer_herts()",id:"controller_buzzer_herts",level:3},{value:"Screen",id:"screen",level:2},{value:"controller_draw_line()",id:"controller_draw_line",level:3},{value:"controller_draw_string()",id:"controller_draw_string",level:3},{value:"controller_draw_rectangle()",id:"controller_draw_rectangle",level:3},{value:"controller_draw_square()",id:"controller_draw_square",level:3},{value:"controller_draw_point()",id:"controller_draw_point",level:3},{value:"controller_clear_screen()",id:"controller_clear_screen",level:3}];function c(e){const l={h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)("div",{className:"level3_body",children:[(0,t.jsx)(l.h2,{id:"flight-commands",children:"Flight Commands"}),(0,t.jsx)(l.h3,{id:"take_off",children:"take_off()"}),(0,t.jsx)(l.h4,{id:"block",children:"Block"}),(0,t.jsx)("img",{src:"/img/CDE/take_off.png",width:"180px"}),(0,t.jsx)(l.h4,{id:"code",children:"Code"}),(0,t.jsx)("span",{className:"light_gray",children:"drone."}),(0,t.jsx)("span",{className:"dark_gray",children:"takeoff()"}),(0,t.jsx)(l.h4,{id:"discription",children:"Discription"}),(0,t.jsx)(l.p,{children:"This function makes the drone take off and begin hovering. The drone will always hover for 3 seconds in order to stabilize before it executes the next command.  If it receives no command for 8 seconds, it will automatically land."}),(0,t.jsx)(l.h4,{id:"example",children:"Example"}),(0,t.jsx)("img",{src:"/img/CDE/take_off_ex.png",width:"320px"}),(0,t.jsx)("hr",{}),(0,t.jsx)(l.h3,{id:"land",children:"land()"}),(0,t.jsx)(l.h4,{id:"block-1",children:"Block"}),(0,t.jsx)("img",{src:"/img/CDE/land.png",width:"180px"}),(0,t.jsx)(l.h3,{id:"emergency_stop",children:"emergency_stop()"}),(0,t.jsx)(l.h3,{id:"hover",children:"hover()"}),(0,t.jsx)(l.h3,{id:"move",children:"move()"}),(0,t.jsx)(l.h3,{id:"flip",children:"flip()"}),(0,t.jsx)(l.h3,{id:"turn_degree",children:"turn_degree()"}),(0,t.jsx)(l.h3,{id:"avoid_wall",children:"avoid_wall()"}),(0,t.jsx)(l.h2,{id:"flight-variables",children:"Flight Variables"}),(0,t.jsx)(l.h2,{id:"status-checkers",children:"Status Checkers"}),(0,t.jsx)(l.h3,{id:"code_is_running",children:"code_is_running()"}),(0,t.jsx)(l.h2,{id:"lights",children:"Lights"}),(0,t.jsx)(l.h2,{id:"sensors",children:"Sensors"}),(0,t.jsx)(l.h3,{id:"get_range",children:"get_range()"}),(0,t.jsx)(l.h3,{id:"get_angle",children:"get_angle()"}),(0,t.jsx)(l.h3,{id:"get_gyro",children:"get_gyro()"}),(0,t.jsx)(l.h3,{id:"get_accel",children:"get_accel()"}),(0,t.jsx)(l.h3,{id:"get_pos",children:"get_pos()"}),(0,t.jsx)(l.h3,{id:"get_battery",children:"get_battery()"}),(0,t.jsx)(l.h3,{id:"get_height",children:"get_height()"}),(0,t.jsx)(l.h3,{id:"get_pressure",children:"get_pressure()"}),(0,t.jsx)(l.h3,{id:"get_temperature",children:"get_temperature()"}),(0,t.jsx)(l.h3,{id:"get_elevation",children:"get_elevation"}),(0,t.jsx)(l.h3,{id:"get_color",children:"get_color()"}),(0,t.jsx)(l.h3,{id:"get_hsvl",children:"get_hsvl()"}),(0,t.jsx)(l.h3,{id:"get_state_data",children:"get_state_data()"}),(0,t.jsx)(l.h3,{id:"reset_sensor",children:"reset_sensor()"}),(0,t.jsx)(l.h2,{id:"sound",children:"Sound"}),(0,t.jsx)(l.h3,{id:"drone_buzzer",children:"drone_buzzer()"}),(0,t.jsx)(l.h3,{id:"controller_buzzer",children:"controller_buzzer()"}),(0,t.jsx)(l.h3,{id:"drone_buzzer_hertz",children:"drone_buzzer_hertz()"}),(0,t.jsx)(l.h3,{id:"controller_buzzer_herts",children:"controller_buzzer_herts()"}),(0,t.jsx)(l.h2,{id:"screen",children:"Screen"}),(0,t.jsx)(l.h3,{id:"controller_draw_line",children:"controller_draw_line()"}),(0,t.jsx)(l.h3,{id:"controller_draw_string",children:"controller_draw_string()"}),(0,t.jsx)(l.h3,{id:"controller_draw_rectangle",children:"controller_draw_rectangle()"}),(0,t.jsx)(l.h3,{id:"controller_draw_square",children:"controller_draw_square()"}),(0,t.jsx)(l.h3,{id:"controller_draw_point",children:"controller_draw_point()"}),(0,t.jsx)(l.h3,{id:"controller_clear_screen",children:"controller_clear_screen()"})]})}function _(e={}){const{wrapper:l}={...(0,i.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,l,r)=>{r.d(l,{Z:()=>d,a:()=>o});var t=r(7294);const i={},n=t.createContext(i);function o(e){const l=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(n.Provider,{value:l},e.children)}}}]);