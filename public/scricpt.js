window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}



const menuToogle = document.querySelector('#menuToogle')
const navbarMenu = document.querySelector('header div div ul')
const closeNav = document.querySelector('.closeNav') 


menuToogle.addEventListener('click', function() {
    navbarMenu.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbarMenu.classList.toggle('muncul')
})