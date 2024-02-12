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


const checkForFunctionToggle = setInterval(() => {
    var functionButton = document.getElementById('functionButton');
    var juniorFunction = document.getElementById('junior_function');
    var seniorFunction = document.getElementById('senior_function');

    if (functionButton && juniorFunction && seniorFunction) {
        functionButton.addEventListener("click", function() {
            if (juniorFunction.style.display !== "none") {
                juniorFunction.style.display = "none";
                seniorFunction.style.display = "block";
            } else {
                juniorFunction.style.display = "block";
                seniorFunction.style.display = "none";
            }
        });

        clearInterval(checkForFunctionToggle);
    }

}, 100);

const checkForChangelogToggle = setInterval(() => {
    var changelogButton = document.getElementById('changelogButton');
    var pythonFunction = document.getElementById('python_changelog');
    var webpyFunction = document.getElementById('webpy_changelog');

    if (changelogButton && pythonFunction && webpyFunction) {
        changelogButton.addEventListener("click", function() {
            if (pythonFunction.style.display !== "none") {
                pythonFunction.style.display = "none";
                webpyFunction.style.display = "block";
            } else {
                pythonFunction.style.display = "block";
                webpyFunction.style.display = "none";
            }
        });

        clearInterval(checkForChangelogToggle);
    }

}, 100);
