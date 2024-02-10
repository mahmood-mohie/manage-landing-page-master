const hamburgerMenu = document.querySelector("#hamburger-menu");
const header = document.querySelector(".header")
const fadeElems = document.querySelectorAll(".has-fade")

hamburgerMenu.addEventListener("click", ()=> {
    if (header.classList.contains("open")) { //opened
        header.classList.remove("open")
        fadeElems.forEach((e)=> {
            e.classList.add("fade-out")
            e.classList.remove("fade-in")
        })
    } else { //closed
        header.classList.add("open")
        fadeElems.forEach((e)=> {
            e.classList.add("fade-in")
            e.classList.remove("fade-out")
        })
    }
})