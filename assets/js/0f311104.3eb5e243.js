"use strict";(self.webpackChunkdoc_v_3=self.webpackChunkdoc_v_3||[]).push([[624],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),v=l,g=u["".concat(d,".").concat(v)]||u[v]||_[v]||o;return r?n.createElement(g,a(a({ref:t},c),{},{components:r})):n.createElement(g,a({ref:t},c))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=v;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},1100:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>_,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),l=(r(7294),r(3905));const o={title:"Function Documentation",hide_title:!0,customHeadElements:['<link rel="manifest" href="manifest.json" />']},a=void 0,i={unversionedId:"CoDroneEDU/Python/page4",id:"CoDroneEDU/Python/page4",title:"Function Documentation",description:"Flight Commands",source:"@site/docs/CoDroneEDU/Python/page4.md",sourceDirName:"CoDroneEDU/Python",slug:"/CoDroneEDU/Python/page4",permalink:"/docs/CoDroneEDU/Python/page4",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/CoDroneEDU/Python/page4.md",tags:[],version:"current",frontMatter:{title:"Function Documentation",hide_title:!0,customHeadElements:['<link rel="manifest" href="manifest.json" />']},sidebar:"CoDroneEDU",previous:{title:"Update",permalink:"/docs/CoDroneEDU/Python/page3"},next:{title:"Documents",permalink:"/docs/CoDroneEDU/Documents/"}},d={},s=[{value:"Flight Commands",id:"flight-commands",level:2},{value:"take_off()",id:"take_off",level:3},{value:"land()",id:"land",level:3},{value:"emergency_stop()",id:"emergency_stop",level:3},{value:"hover()",id:"hover",level:3},{value:"move()",id:"move",level:3},{value:"flip()",id:"flip",level:3},{value:"turn_degree()",id:"turn_degree",level:3},{value:"avoid_wall()",id:"avoid_wall",level:3},{value:"Flight Variables",id:"flight-variables",level:2},{value:"Status Checkers",id:"status-checkers",level:2},{value:"code_is_running()",id:"code_is_running",level:3},{value:"Lights",id:"lights",level:2},{value:"Sensors",id:"sensors",level:2},{value:"get_range()",id:"get_range",level:3},{value:"get_angle()",id:"get_angle",level:3},{value:"get_gyro()",id:"get_gyro",level:3},{value:"get_accel()",id:"get_accel",level:3},{value:"get_pos()",id:"get_pos",level:3},{value:"get_battery()",id:"get_battery",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Discription",id:"discription",level:4},{value:"Returns",id:"returns",level:4},{value:"Example Code",id:"example-code",level:4},{value:"get_bottom_range()",id:"get_bottom_range",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Discription",id:"discription-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"get_temperature()",id:"get_temperature",level:3},{value:"get_elevation",id:"get_elevation",level:3},{value:"get_color()",id:"get_color",level:3},{value:"get_hsvl()",id:"get_hsvl",level:3},{value:"get_state_data()",id:"get_state_data",level:3},{value:"reset_sensor()",id:"reset_sensor",level:3},{value:"Sound",id:"sound",level:2},{value:"drone_buzzer()",id:"drone_buzzer",level:3},{value:"controller_buzzer()",id:"controller_buzzer",level:3},{value:"drone_buzzer_hertz()",id:"drone_buzzer_hertz",level:3},{value:"controller_buzzer_herts()",id:"controller_buzzer_herts",level:3},{value:"Screen",id:"screen",level:2},{value:"controller_draw_line()",id:"controller_draw_line",level:3},{value:"controller_draw_string()",id:"controller_draw_string",level:3},{value:"controller_draw_rectangle()",id:"controller_draw_rectangle",level:3},{value:"controller_draw_square()",id:"controller_draw_square",level:3},{value:"controller_draw_point()",id:"controller_draw_point",level:3},{value:"controller_clear_screen()",id:"controller_clear_screen",level:3}],c={toc:s},u="wrapper";function _(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"level3_body"},(0,l.kt)("h2",{id:"flight-commands"},"Flight Commands"),(0,l.kt)("h3",{id:"take_off"},"take_off()"),(0,l.kt)("h3",{id:"land"},"land()"),(0,l.kt)("h3",{id:"emergency_stop"},"emergency_stop()"),(0,l.kt)("h3",{id:"hover"},"hover()"),(0,l.kt)("h3",{id:"move"},"move()"),(0,l.kt)("h3",{id:"flip"},"flip()"),(0,l.kt)("h3",{id:"turn_degree"},"turn_degree()"),(0,l.kt)("h3",{id:"avoid_wall"},"avoid_wall()"),(0,l.kt)("h2",{id:"flight-variables"},"Flight Variables"),(0,l.kt)("h2",{id:"status-checkers"},"Status Checkers"),(0,l.kt)("h3",{id:"code_is_running"},"code_is_running()"),(0,l.kt)("h2",{id:"lights"},"Lights"),(0,l.kt)("h2",{id:"sensors"},"Sensors"),(0,l.kt)("h3",{id:"get_range"},"get_range()"),(0,l.kt)("h3",{id:"get_angle"},"get_angle()"),(0,l.kt)("h3",{id:"get_gyro"},"get_gyro()"),(0,l.kt)("h3",{id:"get_accel"},"get_accel()"),(0,l.kt)("h3",{id:"get_pos"},"get_pos()"),(0,l.kt)("h3",{id:"get_battery"},"get_battery()"),(0,l.kt)("h4",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"get_battery()")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"discription"},"Discription"),(0,l.kt)("p",null,"This function returns the current battery level percentage of the drone."),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,"The current battery percentage of the drone's battery."),(0,l.kt)("h4",{id:"example-code"},"Example Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\nbattery = drone.get_battery()\nprint(battery)\ndrone.close()\n")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"get_bottom_range"},"get_bottom_range()"),(0,l.kt)("h4",{id:"syntax-1"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"get_bottom_range()"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("inlineCode",{parentName:"p"},'get_bottom_range(unit="<cm, in, mm, m>")')),(0,l.kt)("h4",{id:"discription-1"},"Discription"),(0,l.kt)("p",null,"This is a getter function which returns the current bottom range of the drone.\nThe default unit of measurement is centimeters.This function uses the bottom range sensor to measure distance from the drone to the surface below the drone."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"unit"),': The unit of measurement that is chosen for the height distance. Available units are "m" (meter), "cm" (centimeter), "mm" (millimeter), or "in" (inch). If a parameter is not specified cm is chosen by default.'),(0,l.kt)("h3",{id:"get_temperature"},"get_temperature()"),(0,l.kt)("h3",{id:"get_elevation"},"get_elevation"),(0,l.kt)("h3",{id:"get_color"},"get_color()"),(0,l.kt)("h3",{id:"get_hsvl"},"get_hsvl()"),(0,l.kt)("h3",{id:"get_state_data"},"get_state_data()"),(0,l.kt)("h3",{id:"reset_sensor"},"reset_sensor()"),(0,l.kt)("h2",{id:"sound"},"Sound"),(0,l.kt)("h3",{id:"drone_buzzer"},"drone_buzzer()"),(0,l.kt)("h3",{id:"controller_buzzer"},"controller_buzzer()"),(0,l.kt)("h3",{id:"drone_buzzer_hertz"},"drone_buzzer_hertz()"),(0,l.kt)("h3",{id:"controller_buzzer_herts"},"controller_buzzer_herts()"),(0,l.kt)("h2",{id:"screen"},"Screen"),(0,l.kt)("h3",{id:"controller_draw_line"},"controller_draw_line()"),(0,l.kt)("h3",{id:"controller_draw_string"},"controller_draw_string()"),(0,l.kt)("h3",{id:"controller_draw_rectangle"},"controller_draw_rectangle()"),(0,l.kt)("h3",{id:"controller_draw_square"},"controller_draw_square()"),(0,l.kt)("h3",{id:"controller_draw_point"},"controller_draw_point()"),(0,l.kt)("h3",{id:"controller_clear_screen"},"controller_clear_screen()")))}_.isMDXComponent=!0}}]);