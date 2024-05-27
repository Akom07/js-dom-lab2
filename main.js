const div0 = document.querySelector(".div1")


const rand = () => {
    div0.style.background = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    div0.style.top = `${Math.floor(Math.random() * 1000) + 1}px`
    div0.style.right = `${Math.floor(Math.random() * 1000) + 1}px`
    div0.style.hieght = `${Math.floor(Math.random() * 1000) + 50}px`
    div0.style.width = `${Math.floor(Math.random() * 1000) + 50}px`
}

const inter = setInterval(rand, 2000)
