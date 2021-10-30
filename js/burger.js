// humburger-menu
const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')

//открыть/закрыть меня при клике на кнопку бергера
const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}


burger.addEventListener ('click', () => toggleMenu())

//закрыть меню при нажатии на ссылку
linksHead.forEach (link => {
    link.addEventListener('click', () => {
        menuElem.classList.remove('menu-active') || burger.classList.remove('humburger-menu-active')
    })
})



