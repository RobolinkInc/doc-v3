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

//mobile nav bar search icon

// document.addEventListener("DOMContentLoaded", function () {
//     const searchBar = document.getElementById("search_input_react");
//     const nav = document.querySelector(".navbar");

//     // Add event listener for focus on the search input
//     searchBar.addEventListener("focus", function () {
//         // Add the class to show only the search box
//         nav.classList.add("searchBox_ZlJk");
//     });

//     // Add event listener for blur on the search input
//     searchBar.addEventListener("blur", function () {
//         // Remove the class to revert to the original state
//         nav.classList.remove("searchBox_ZlJk");
//     });
// });