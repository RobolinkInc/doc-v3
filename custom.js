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
                        document.querySelector('.table-of-contents a[href*=' + id + ']').classList.add('table-of-contents__link--active')
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

function handleSearchFocus() {
    var navbar_it = document.querySelector('.navbar__items');
    var search_bar = document.querySelector('.navbar__search-input');
    var navbar = document.querySelector('.navbar');
    const total_width = navbar.offsetWidth;
    var num = (total_width - 312)/2;
    navbar_it.style.display = 'none';
    search_bar.style.marginRight = num+'px';
}

function handleSearchFocusOut() {
    var navbar_it = document.querySelector('.navbar__items');
    var search_bar = document.querySelector('.navbar__search-input');
    navbar_it.style.display = '';
    search_bar.style.marginRight = '';
}


const waitForSearchbar = setInterval(() => {
    var navbarSearch = document.querySelector('.navbar__search-input');

    if (navbarSearch) {
        if(window.matchMedia('(max-width: 600px)').matches) {
            navbarSearch.addEventListener('focus', handleSearchFocus);            

            navbarSearch.addEventListener('focusout', handleSearchFocusOut);

            clearInterval(waitForSearchbar); 
        }
    }
}, 100);


const waitForPopup = setInterval(() => {
    var popupBtn = document.getElementById('popupBtn');
    var modal = document.getElementById('modalWrap');

    if (popupBtn && modal) {
        popupBtn.onclick = function() {
            modal.style.display = 'block';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        clearInterval(waitForPopup); 
    }
}, 100);


const waitForBreadcrumbs1 = setInterval(() => {
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
          clearInterval(waitForBreadcrumbs1);
        }
    }, 3000);
}, 100);

  

const startBreadcrumbs = () => {
    const startBreadcrumbsInterval = setInterval(() => {
        console.log("working2"); 
        const breadcrumbs = document.querySelector('.breadcrumbs');
        const breadcrumbItems = document.querySelectorAll('.breadcrumbs__item');
        if (breadcrumbs && breadcrumbItems.length <= 2) {
            breadcrumbs.style.display = 'none';
            clearInterval(startBreadcrumbsInterval); 
        } else if (breadcrumbs) {
            breadcrumbs.style.display = 'block';
            clearInterval(startBreadcrumbsInterval); 
        }
        setTimeout(() => {
            if(!breadcrumbs){
            clearInterval(startBreadcrumbsInterval);
            console.log("no breadcrumbs"); 
            }
        }, 3000);
    }, 100); 
}
  
const waitForBreadcrumbs2 =  setInterval(() => {
  console.log("working1"); 
  const sidebar = document.querySelector(".theme-doc-sidebar-menu");
  if (sidebar) {
    clearInterval(waitForBreadcrumbs2); 
    sidebar.addEventListener('click', () => {
      startBreadcrumbs();
    });
  }
  setTimeout(() => {
    if (!sidebar) {
        clearInterval(waitForBreadcrumbs2); 
        console.log("no sidebar"); 
    }
  }, 3000);
}, 100);
