const waitForMenuLoadInterval=setInterval((()=>{const o=document.querySelectorAll("a.menu__link");o.length&&(o.forEach((function(o){o.addEventListener("click",initScrollSpy)})),clearInterval(waitForMenuLoadInterval)),setTimeout((()=>{0===o.length&&clearInterval(waitForMenuLoadInterval)}),1e4)}),200),initScrollSpy=()=>{const o=setInterval((()=>{const e=document.querySelectorAll("h2.anchor, h3.anchor"),t=document.querySelectorAll(".table-of-contents a"),n=document.querySelector(".row > .col:first-child");e.length&&t.length&&n&&(n.onscroll=o=>{e.forEach((e=>{const n=o.target.scrollTop,l=e.offsetTop-150,a=(e.offsetHeight,e.getAttribute("id"));if(0===n)t.forEach((o=>{o.classList.remove("table-of-contents__link--active")})),t[0].classList.add("table-of-contents__link--active");else if(n>=l){t.forEach((o=>{o.classList.remove("table-of-contents__link--active")}));document.querySelectorAll(".table-of-contents a[href*="+a+"]").forEach((o=>{const e=o.getAttribute("href").split("#")[1];e&&e===a&&o.classList.add("table-of-contents__link--active")}))}}))},clearInterval(o)),setTimeout((()=>{0!==e.length&&0!==t.length&&n||clearInterval(waitForMenuLoadInterval)}),1e4)}),200)};initScrollSpy(),window.addEventListener("message",(o=>{"https://codrone.robolink.com"===o.origin&&("href"==o.data&&o.source.postMessage(window.location.href,o.origin),"back"==o.data&&window.history.back(),"forward"==o.data&&window.history.forward())}));const documentBackgroundUpdate=setInterval((()=>{const o=window.location.pathname;if(o.includes("/docs/terms-of-use")||o.includes("/docs/privacy-policy")){const o=document.getElementById("__docusaurus_skipToContent_fallback");o&&(o.style.backgroundImage="none")}setTimeout((()=>{clearInterval(documentBackgroundUpdate)}),2e3)}),100);function closeModalFooter(){document.getElementById("modalWrap_footer").style.display="none"}function openModalFooter(){document.getElementById("modalWrap_footer").style.display="block"}function closeModalPython(){document.getElementById("modalWrap_python").style.display="none"}function openModalPython(){document.getElementById("modalWrap_python").style.display="block"}function handleExternalPython(){window.location.href="https://www.python.org/downloads/"}const waitForBreadcrumbs=setInterval((()=>{const o=document.querySelectorAll(".theme-doc-sidebar-menu .theme-doc-sidebar-item-link-level-1:first-child a");o.forEach((function(o){const e=o.textContent;"CoDrone EDU"===e?(o.style.background="linear-gradient(to right, #B33785, #D94054)",o.classList.add("breadcrumbs_CDE")):"CoDrone Mini"===e?(o.style.background="#F2CC03",o.classList.add("breadcrumbs_CDM")):"CoDrone Pro/Lite"===e?(o.style.background="#B8202D",o.classList.add("breadcrumbs_CDP")):"Zumi"===e&&(o.style.background="#0DD9C5",o.classList.add("breadcrumbs_ZUMI"))})),setTimeout((()=>{o||clearInterval(waitForBreadcrumbs)}),3e3)}),100);function loadBlocklyXml(o){window.parent.postMessage({type:"loadBlocklyXml",xmlId:o},"*"),console.log(`${o} clicked!`)}function loadBlocklyXml(o){const e=window.location.host;if(console.log(e),"codrone.robolink.com/edu/blockly-staging"===e)window.parent.postMessage({type:"loadBlocklyXml",xmlId:o},"*"),console.log(`${o} clicked!`);else if("staging-docs.robolink.com"===e){const e=`https://codrone.robolink.com/edu/blockly-staging/?xmlId=${encodeURIComponent(o)}`;window.open(e,"_blank"),console.log(`Opening new site with xmlId=${o}`)}else console.log("Unable Host")}window.openModalPython=openModalPython,window.closeModalPython=closeModalPython,window.handleExternalPython=handleExternalPython;