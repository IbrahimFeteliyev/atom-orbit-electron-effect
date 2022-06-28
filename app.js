electron = document.querySelector('.electron')


const pos180 = 500
const pos0 = 900
const pos90 = 200
const pos270 = 600
const radius = 200
const centerX = 700
const centerY = 400
direction = +1
let deg = 0
function move() {
    x = Math.cos(deg * Math.PI / 180) * radius + centerX
    y = Math.sin(deg * Math.PI / 180) * radius + centerY
    electron.style.left = `${x}px`
    electron.style.top = `${y}px`
    deg = (360 + deg + direction) % 360
}

setInterval(() => {
    move()
}, 1);