const linksHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const mainButton = document.querySelector('.main__button')
const newArray = [... linksHead, mainScroll, mainButton]

newArray.forEach( link => {
    link.addEventListener('click', (event) => {
        event.preventDefault()

        const ID = event.target.getAttribute('href').substr(1)
        
        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})