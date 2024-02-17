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
let dots          = 4;
let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) =>{
		
	dotElem.addEventListener('click', (e) => {

		let currentPos = parseInt(sliderElem.getAttribute('data-pos'))
		let newPos     = parseInt(dotElem.getAttribute('data-pos'))

		let newDirection     = (newPos > currentPos ? 'right' : 'left')
		let currentDirection = (newPos < currentPos ? 'right' : 'left')

		indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
		indicatorElem.classList.add(`slider__indicator--${ newDirection }`)		
		sliderElem.setAttribute('data-pos', newPos)
		
	})
	
})