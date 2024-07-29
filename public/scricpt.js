// navbar transparan 
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}
// akhir navbar transparan 


// navbar 
const menuToogle = document.querySelector('#menuToogle')
const navbarMenu = document.querySelector('header div div ul')
const closeNav = document.querySelector('.closeNav') 


menuToogle.addEventListener('click', function() {
    navbarMenu.classList.toggle('muncul')
})

closeNav.addEventListener('click', function() {
    navbarMenu.classList.toggle('muncul')
})
// akhir navbar 






// ketika mouse di gerakan 
const carousel = document.querySelector('.carousel') ; 
const arrowsButton = document.querySelectorAll('.wrapper img') ; 
const firstCard = carousel.querySelector(".card").offsetWidth ; 
const carouselChildrens = [...carousel.children] ;
// const card = carousel.querySelectorAll(".card") ; 

let cardPreview = Math.round(carousel.offsetWidth / firstCard) ; 
let isDraging = false , startX , startScrollLeft; 


carousel.addEventListener("mousemove",function (e) {
    if (!isDraging) {
        return 
    }
    carousel.scrollLeft = startScrollLeft - (e.pageX -startX) ; 
})

carousel.addEventListener("mousedown",function (e) {
    isDraging = true ;  
    carousel.classList.add("dragging") ;
    startX = e.pageX ; 
    startScrollLeft = carousel.scrollLeft;
})

carousel.addEventListener("mouseup",function () {
    isDraging = false
    carousel.classList.remove("dragging")
})
//akhir ketika mouse di gerakan 



// button next dan back 
arrowsButton.forEach(function (btn) {
    btn.addEventListener("click",function () {
        carousel.scrollLeft += btn.id === "back" ? -(firstCard+16) : (firstCard+16) ; 
    })
})

// akhir button next dan back 




// infinite scrolling 
carouselChildrens.slice(0,7).reverse().forEach(function (card) {
    carousel.insertAdjacentHTML("afterbegin",card.outerHTML) ; 
}) //-cardPreview

carouselChildrens.slice(0,7).forEach(function (card) {
    carousel.insertAdjacentHTML("beforeend",card.outerHTML) ; 
}) //0, cardPreview


carousel.addEventListener("scroll", function () {
    if (carousel.scrollLeft === 0 ) {
        carousel.classList.add('no-transition') ;
        // carousel.scrollLeft = carousel.scrollWidth - (9*carousel.offsetWidth)  ; 
        carousel.scrollLeft = (firstCard+16) *7 ;
        carousel.classList.remove('no-transition') ; 

    } else if (carousel.scrollLeft >= (firstCard+16) *16){
        // carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth
        carousel.classList.add('no-transition') ;
        // carousel.scrollLeft = 0 ;
        console.log('hiii')
        carousel.scrollLeft = (firstCard+16) *9 ;

        carousel.classList.remove('no-transition') ; 
    }
    
})
// akhir infinity scrolling 




// img galery 
const images = document.querySelectorAll('.imageGalery img');
const cameraBtn = document.querySelectorAll('#cameraBtn') ; 

// popup
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
// const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
// const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; 

cameraBtn.forEach((item, i) => {
    item.addEventListener('click', () => {

        popup.classList.toggle('active');
        let srcImage = images[i].getAttribute('src') ;
        updateImage(srcImage,i);
    })
})


const updateImage = (srcImage,i) => {
    let path = srcImage;
    largeImage.src = path;
    // imageName.innerHTML = path;
    // imageIndex.innerHTML = i+1;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        index = index-1
        let indexBack = images[index] ; 
        let srcBack = indexBack.getAttribute('src') ;
        updateImage(srcBack, index);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        index = index+1
        let indexNext = images[index] ; 
        let srcNext = indexNext.getAttribute('src') ;
        // console.log(imgNext) ;
        updateImage(srcNext, index);
    }
})


// akhir img galery 