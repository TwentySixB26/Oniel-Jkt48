const menuToogle = document.querySelector('#menuToogle')
const navbarMenu = document.querySelector('header div div ul')
const closeNav = document.querySelector('.closeNav') 

menuToogle.addEventListener('click', function() {
    navbarMenu.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbarMenu.classList.toggle('muncul')
})