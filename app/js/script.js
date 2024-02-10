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