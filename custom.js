const waitForMenuLoadInterval=setInterval((()=>{const e=document.querySelectorAll("a.menu__link");e.length&&(e.forEach((function(e){e.addEventListener("click",initScrollSpy)})),clearInterval(waitForMenuLoadInterval)),setTimeout((()=>{0===e.length&&clearInterval(waitForMenuLoadInterval)}),1e4)}),200),initScrollSpy=()=>{const e=setInterval((()=>{const t=document.querySelectorAll("h2.anchor, h3.anchor"),o=document.querySelectorAll(".table-of-contents a"),n=document.querySelector(".row > .col:first-child");t.length&&o.length&&n&&(n.onscroll=e=>{t.forEach((t=>{const n=e.target.scrollTop,l=t.offsetTop-150,a=(t.offsetHeight,t.getAttribute("id"));if(0===n)o.forEach((e=>{e.classList.remove("table-of-contents__link--active")})),o[0].classList.add("table-of-contents__link--active");else if(n>=l){o.forEach((e=>{e.classList.remove("table-of-contents__link--active")}));document.querySelectorAll(".table-of-contents a[href*="+a+"]").forEach((e=>{const t=e.getAttribute("href").split("#")[1];t&&t===a&&e.classList.add("table-of-contents__link--active")}))}}))},clearInterval(e)),setTimeout((()=>{0!==t.length&&0!==o.length&&n||clearInterval(waitForMenuLoadInterval)}),1e4)}),200)};initScrollSpy(),window.addEventListener("message",(e=>{"https://codrone.robolink.com"===e.origin&&("href"==e.data&&e.source.postMessage(window.location.href,e.origin),"back"==e.data&&window.history.back(),"forward"==e.data&&window.history.forward())}));const documentBackgroundUpdate=setInterval((()=>{const e=window.location.pathname;if(e.includes("/docs/terms-of-use")||e.includes("/docs/privacy-policy")){const e=document.getElementById("__docusaurus_skipToContent_fallback");e&&(e.style.backgroundImage="none")}setTimeout((()=>{clearInterval(documentBackgroundUpdate)}),2e3)}),100);function closeModalFooter(){document.getElementById("modalWrap_footer").style.display="none"}function openModalFooter(){document.getElementById("modalWrap_footer").style.display="block"}function closeModalPython(){document.getElementById("modalWrap_python").style.display="none"}function openModalPython(){document.getElementById("modalWrap_python").style.display="block"}function handleExternalPython(){window.location.href="https://www.python.org/downloads/"}const waitForBreadcrumbs=setInterval((()=>{const e=document.querySelectorAll(".theme-doc-sidebar-menu .theme-doc-sidebar-item-link-level-1:first-child a");e.forEach((function(e){const t=e.textContent;"CoDrone EDU"===t?(e.style.background="linear-gradient(to right, #B33785, #D94054)",e.classList.add("breadcrumbs_CDE")):"CoDrone Mini"===t?(e.style.background="#F2CC03",e.classList.add("breadcrumbs_CDM")):"CoDrone Pro/Lite"===t?(e.style.background="#B8202D",e.classList.add("breadcrumbs_CDP")):"Zumi"===t&&(e.style.background="#0DD9C5",e.classList.add("breadcrumbs_ZUMI"))})),setTimeout((()=>{e||clearInterval(waitForBreadcrumbs)}),3e3)}),100);function loadBlocklyXml(e){window.parent.postMessage({type:"loadBlocklyXml",xmlId:e},"*"),console.log(`${e} clicked!`)}window.openModalPython=openModalPython,window.closeModalPython=closeModalPython,window.handleExternalPython=handleExternalPython;