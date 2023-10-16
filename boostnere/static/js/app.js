/* Template Name: Peyso - Bootstrap 5 Landing Page Template
   Author: Themesdesign
   File Description: Main JS file of the template
*/

//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// client-slider

var slider = tns({
    container: '.client-slider',
    items: 1,
    loop: true,
    autoplay: true,
    navPosition: "bottom",
    controls: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsText: ["<i class='mdi mdi-arrow-left'></i>", "<i class='mdi mdi-arrow-right'></i>"],
    responsive: {
        640: {
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30,
            items: 1
        },
        900: {
            items: 2
        }
    }
});



