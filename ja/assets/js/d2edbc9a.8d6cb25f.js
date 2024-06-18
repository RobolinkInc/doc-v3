"use strict";(self.webpackChunkdoc_v_3=self.webpackChunkdoc_v_3||[]).push([[8505],{428:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(4848),i=t(8453);const r={title:"Setup and Installation",customHeadElements:['<link rel="manifest" href="manifest.json" />']},a=void 0,l={id:"CoDroneEDU/Python/page2",title:"Setup and Installation",description:"Setup and Installation",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/CoDroneEDU/Python/page2.md",sourceDirName:"CoDroneEDU/Python",slug:"/CoDroneEDU/Python/page2",permalink:"/ja/docs/CoDroneEDU/Python/page2",draft:!1,unlisted:!1,editUrl:"https://github.com/RobolinkInc/doc-v3/tree/main/docs/docs/CoDroneEDU/Python/page2.md",tags:[],version:"current",frontMatter:{title:"Setup and Installation",customHeadElements:['<link rel="manifest" href="manifest.json" />']},sidebar:"CoDroneEDU",previous:{title:"What is Python?",permalink:"/ja/docs/CoDroneEDU/Python/page1"},next:{title:"Update Library",permalink:"/ja/docs/CoDroneEDU/Python/page3"}},s={},c=[{value:"Setup and Installation",id:"setup-and-installation",level:2},{value:"How to install Python",id:"how-to-install-python",level:3},{value:"How to install Pycharm",id:"how-to-install-pycharm",level:3},{value:"How to install CoDrone EDU library",id:"how-to-install-codrone-edu-library",level:3}];function d(e){const o={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)("div",{className:"level3_body",children:[(0,n.jsx)(o.h2,{id:"setup-and-installation",children:"Setup and Installation"}),(0,n.jsx)(o.h3,{id:"how-to-install-python",children:"How to install Python"}),(0,n.jsxs)(o.p,{children:["Install Python on your Mac or Windows machine. If you\u2019re using a guest or limited account, ",(0,n.jsx)(o.strong,{children:"make sure you have access to admin credentials"})," for installing new software on the computer. This is especially important for students using a school computer or parent computer with limited access. If you\u2019re on a Mac computer, you may need to modify the security settings in system preferences in order to download software."]}),(0,n.jsxs)(o.p,{children:["\u26a0\ufe0f ",(0,n.jsx)(o.strong,{children:"Note (Last Edited 10/30/23):"})," The latest version of Python (3.12) has an issue with a library that manages packages in virtual environments. Please use ",(0,n.jsx)(o.a,{href:"https://www.python.org/downloads/release/python-3116/",children:"Python 3.11"})," when following along with this tutorial."]}),(0,n.jsxs)(o.p,{children:["Click ",(0,n.jsx)(o.a,{href:"https://www.python.org/downloads/release/python-3116/",children:"here"})," to go to the Python website to install v3.11. Follow along with the instructions in the video below. Regardless of the Python version shown in the video, the instructions will still apply."]}),(0,n.jsx)("div",{className:"youtube_video",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/55vxDds3uIY?si=DK5OM6QMpTYH68R9",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,n.jsx)("div",{className:"youtube_video",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/DXDzuI6DMsA?si=pQ9iObTkPd9YTIt8",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,n.jsx)(o.h3,{id:"how-to-install-pycharm",children:"How to install Pycharm"}),(0,n.jsx)(o.p,{children:"Next, install PyCharm Community (free) edition , which is what we\u2019ll use for writing out our Python code and running it on CoDrone EDU."}),(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Note:"})," If you choose not to use PyCharm and prefer your own editor or IDE, you will need to know how to install packages on your platform of choice. If you are not sure how to do this, we recommend following the tutorial for PyCharm instead."]}),(0,n.jsxs)(o.p,{children:["Click ",(0,n.jsx)(o.a,{href:"https://www.jetbrains.com/pycharm/download/",children:"here"})," to go to the PyCharm download page and follow the instructions in the video below."]}),(0,n.jsx)("div",{className:"youtube_video",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zK9yZAEnd38?si=yRgi33qqTCxki5Bc",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,n.jsx)("div",{className:"youtube_video",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/uLmv5c_v5kE?si=0HEBeBoE2qYbhzPW",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,n.jsx)(o.h3,{id:"how-to-install-codrone-edu-library",children:"How to install CoDrone EDU library"}),(0,n.jsx)(o.p,{children:"Now you need to create a new project and set it up with the CoDrone EDU library. Follow along with the video instructions below. In the tutorial, you will need to copy and paste the import statement into the generated main.py. You do not need to connect your drone yet."}),(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"from codrone_edu.drone import *\n"})}),(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Note: If a main.py file was not generated, you can make a new one by right clicking on the project name and selecting \u201cNew>Python File\u201d. This is for both Windows and Mac."})}),(0,n.jsx)("img",{src:"/img/CDE/Python_setup_installation_1.png",width:"650px"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"youtube_video",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/KLysZBM3gVw?si=3pjSPPiVFLnmhwEL",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})}),(0,n.jsx)("div",{className:"youtube_video",children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Iobi5pVSzyc?si=oyGfJOsTtdFPlnXk",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}function h(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>a,x:()=>l});var n=t(6540);const i={},r=n.createContext(i);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);