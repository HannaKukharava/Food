const icons = document.querySelectorAll('.container .icons i')
let i = 1;
const activeClass = 'active'

setInterval(() => {
    i++;
    const activeIcon = document.querySelector(`.container .icons i.${activeClass}`)
    activeIcon.classList.remove(activeClass)
    if (i > icons.length) {
        icons[0].classList.add(activeClass)
        i = 1
    } else {
        activeIcon.nextElementSibling.classList.add(activeClass)
    }
}, 4000)
