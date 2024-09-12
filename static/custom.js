const waitForMenuLoadInterval = setInterval(() => {
    const menulinks = document.querySelectorAll('a.menu__link')
    if (menulinks.length) {
        menulinks.forEach(function(nodo) {
            nodo.addEventListener("click", initScrollSpy);
        });
        clearInterval(waitForMenuLoadInterval)
    }
    setTimeout(() => {
        if (menulinks.length === 0) {
            clearInterval(waitForMenuLoadInterval)
        }
    }, 10000);
}, 200);

const initScrollSpy = () => {
    const waitForNodesLoadInterval = setInterval(() => {
        const spyContent = document.querySelectorAll('h2.anchor, h3.anchor')
        const spyTableItems = document.querySelectorAll('.table-of-contents a')
        const scrollableContentContainer = document.querySelector('.row > .col:first-child') 

        if (spyContent.length && spyTableItems.length && scrollableContentContainer) {

            scrollableContentContainer.onscroll = (event) => {
                spyContent.forEach(contentSec => {
                    const top = event.target.scrollTop
                    const offset = contentSec.offsetTop - 150
                    const height = contentSec.offsetHeight
                    const id = contentSec.getAttribute('id')

                    if (top === 0) {
                        spyTableItems.forEach(links => {
                            links.classList.remove('table-of-contents__link--active')
                        })
                        spyTableItems[0].classList.add('table-of-contents__link--active')
                    } else if (top >= offset) {
                        spyTableItems.forEach(links => {
                            links.classList.remove('table-of-contents__link--active')
                        })
                        //document.querySelector('.table-of-contents a[href*=' + id + ']').classList.add('table-of-contents__link--active')
                        const elements = document.querySelectorAll('.table-of-contents a[href*=' + id + ']');
                        elements.forEach(element => {
                            const href = element.getAttribute('href');
                            const anchor = href.split('#')[1]; 
                            if (anchor && anchor === id) {
                                element.classList.add('table-of-contents__link--active');
                            }
                        });
                    }   
                })

            }


            clearInterval(waitForNodesLoadInterval)
        }
        setTimeout(() => {
            if (spyContent.length === 0 || spyTableItems.length === 0 || !scrollableContentContainer) {
                clearInterval(waitForMenuLoadInterval)
            }
        }, 10000);
    }, 200);
}

initScrollSpy()

const documentBackgroundUpdate = setInterval(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/docs/terms-of-use") || currentPath.includes("/docs/privacy-policy")) {
        const mainWrapper = document.getElementById('__docusaurus_skipToContent_fallback');
        if(mainWrapper){
            mainWrapper.style.backgroundImage = "none";
        }
    }
    setTimeout(() => {
        clearInterval(documentBackgroundUpdate);
    }, 2000);
}, 100);


function closeModalFooter() {
    document.getElementById('modalWrap_footer').style.display = 'none';
}

function openModalFooter() {
    document.getElementById('modalWrap_footer').style.display = 'block';
}

function closeModalPython() {
    document.getElementById('modalWrap_python').style.display = 'none';
}

function openModalPython() {
    document.getElementById('modalWrap_python').style.display = 'block';
}

function handleExternalPython() {
    window.location.href = 'https://www.python.org/downloads/';
}

const waitForBreadcrumbs = setInterval(() => {
    const menuLinks = document.querySelectorAll(".theme-doc-sidebar-menu .theme-doc-sidebar-item-link-level-1:first-child a");

    menuLinks.forEach(function(link) {
      const text = link.textContent;
  
      if (text === "CoDrone EDU") {
        link.style.background = "linear-gradient(to right, #B33785, #D94054)";
        link.classList.add("breadcrumbs_CDE");
      } else if (text === "CoDrone Mini") {
        link.style.background = "#F2CC03";
        link.classList.add("breadcrumbs_CDM");
      } else if (text === "CoDrone Pro/Lite") {
        link.style.background = "#B8202D";
        link.classList.add("breadcrumbs_CDP");
      } else if (text === "Zumi") {
        link.style.background = "#0DD9C5";
        link.classList.add("breadcrumbs_ZUMI");
      }
    });
    setTimeout(() => {
        if(!menuLinks){
          clearInterval(waitForBreadcrumbs);
        }
    }, 3000);
}, 100);

function loadBlocklyXml(xmlId) {
    let fullUrl = '';
    let currentHost = '';
    try {
        fullUrl = window.top.location.href;
        const url = new URL(fullUrl);
        currentHost = url.hostname;
    } catch (e) {
        currentHost = '';
    }
    const docsSiteHost = 'docs.robolink.com'; 
    const testSiteHost = 'staging-docs.robolink.com';
    if (currentHost === docsSiteHost || currentHost === testSiteHost) {
        const newUrl = `https://codrone.robolink.com/edu/blockly-dev/?xmlId=${encodeURIComponent(xmlId)}`;
        window.open(newUrl, '_blank');
    } else {
        window.parent.postMessage({ type: 'loadBlocklyXml', xmlId }, '*');
    }
}

function loadPFRPython(pyId) {
    let fullUrl = '';
    let currentHost = '';
    try {
        fullUrl = window.top.location.href;
        const url = new URL(fullUrl);
        currentHost = url.hostname;
    } catch (e) {
        currentHost = '';
    }
    const docsSiteHost = 'docs.robolink.com'; 
    const testSiteHost = 'staging-docs.robolink.com';
    if (currentHost === docsSiteHost || currentHost === testSiteHost) {
        //const newUrl = `https://codrone.robolink.com/edu/python/?pyId=${encodeURIComponent(pyId)}`;
        const newUrl = `https://codrone.robolink.com/edu/python-staging/?pyId=${encodeURIComponent(pyId)}`;
        window.open(newUrl, '_blank');
    } else {
        window.parent.postMessage({ type: 'loadPFRPython', pyId }, '*');
    }
}

// window.addEventListener("message", (event) => {
//     if(event.origin !== "https://codrone.robolink.com"){
//         console.log("Not from codrone robolink");
//         return;
//     }
//     if(event.data == "href") {
//         event.source.postMessage(window.location.href, event.origin);
//     }
//     if(event.data == "back") {
//         window.history.back();
//     }
//     if(event.data == "forward"){
//         window.history.forward();
//     }
// });



window.openModalPython = openModalPython;
window.closeModalPython = closeModalPython;
window.handleExternalPython = handleExternalPython;