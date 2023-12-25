/*轮播图部分*/
let left = document.querySelector(".lbt-button-left")
let right = document.querySelector(".lbt-button-right")
let m = document.querySelectorAll(".m")
let images = document.querySelector(".lbt-images")
let index = 0
let time
function position() {
    images.style.left = (index * -100) + "%"
}
function add() {
    if (index >= m.length - 1) {
        index = 0
    } else {
        index++
    }
}
function desc() {
    if (index < 1) {
        index = m.length - 1
    } else {
        index--
    }
}
function timer() {
    time = setInterval(() => {
        index++
        desc()
        add()
        position()
    }, 3000)
}
left.addEventListener("click", () => {
    desc()
    position()
    clearInterval(time)
    timer()
})
right.addEventListener("click", () => {
    add()
    position()
    clearInterval(time)
    timer()
})
for (let i = 0; i < m.length; i++) {
    m[i].addEventListener("click", () => {
        index = i;
        position();
        clearInterval(time)
        timer()
    })
}
timer()