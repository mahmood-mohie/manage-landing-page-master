const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector(".header")
const fadeElems = document.querySelectorAll(".has-fade")
const body = document.querySelector("body")

hamburgerMenu.addEventListener("click", ()=> {
    if (header.classList.contains("open")) { //opened
        header.classList.remove("open")
        fadeElems.forEach((e)=> {
            e.classList.add("fade-out")
            e.classList.remove("fade-in")
        })
        body.classList.remove("noscroll")
    } else { //closed
        header.classList.add("open")
        fadeElems.forEach((e)=> {
            e.classList.add("fade-in")
            e.classList.remove("fade-out")
        });
        body.classList.add("noscroll")

    }
})

//Testimonial Swipe Silder
let dots = document.querySelectorAll(".dot")
let cards = document.querySelectorAll(".testimonials__card")

if (window.innerWidth < 1100) {
    currentCard(0) 
}
function currentCard (indexOfDot, event){  
    if (event) {
        event.preventDefault(); // Prevent default behavior (page reload)
    }
    for (let i=0; i< cards.length; i++) {
        if (indexOfDot == i) {
            cards[i].classList.add("active-card")
            dots[indexOfDot].classList.add("active")
        } else {
            cards[i].classList.remove("active-card")
            dots[indexOfDot].classList.remove("active")
        }
    }
}
