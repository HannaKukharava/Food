const icons = document.querySelectorAll('.main .icons i')
let i = 1;
const activeClass = 'active'

setInterval(() => {
    i++;
    const activeIcon = document.querySelector(`.main .icons i.${activeClass}`)
    activeIcon.classList.remove(activeClass)
    if (i > icons.length) {
        icons[0].classList.add(activeClass)
        i = 1
    } else {
        activeIcon.nextElementSibling.classList.add(activeClass)
    }
}, 4000)


document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item)=> {
        item.classList.toggle('change')
    })
})
