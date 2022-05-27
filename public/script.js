const logo = document.querySelector('.logo')
const logoMobile = document.querySelector('.logo-mobile')
const blackBg = document.querySelector('.black-bg-mobile')
const burger = document.querySelector('.menu-burger')
const menuClose = document.querySelector('.menu-close')
const navMobile = document.querySelector('nav.mobile')
const dropdownMobile = navMobile.querySelector('.dropdown')

logo.addEventListener('click', () => {
    window.location.assign('/')
})

logoMobile.addEventListener('click', () => {    
    window.location.assign('/')
})


burger.addEventListener('click', toggleMobileMenu)
blackBg.addEventListener('click', toggleMobileMenu)
menuClose.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    navMobile.classList.toggle('active')
    blackBg.classList.toggle('active')
}

dropdownMobile.addEventListener('click', toggleDropdownMobile)

function toggleDropdownMobile() {
    dropdownMobile.classList.toggle('active')
}