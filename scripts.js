let prevButtom = document.getElementById("prev")
let nextButtom = document.getElementById("next")
let container = document.querySelector(".container")
let items = container.querySelectorAll(".list .item")
let indicator = document.querySelector(".indicators")
let dots = indicator.querySelectorAll("ul li")
let list = document.querySelector(".list")

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {
    let oldItem = container.querySelector(".list .item.active")
    oldItem.classList.remove("active")

    oldDots = container.querySelector("ul li.active")
    oldDots.classList.remove("active")
    dots[active].classList.add("active")

    indicator.querySelector(".number").innerHTML = "0" + (active + 1)
}

prevButtom.addEventListener('click', () => {
    list.style.setProperty("--calculation", -1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add("active")
})

nextButtom.addEventListener('click', () => {
    list.style.setProperty("--calculation", 1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add("active")
})