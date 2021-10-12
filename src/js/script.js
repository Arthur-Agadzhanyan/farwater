@@include('webpTest.js');
@@include('swiper.js');


const defaultSlider = (className) =>{
    return {
        pagination:{
            el:className,
            clickable: true,
        },
        loop: true,
    
        autoplay:{
            delay: 5000,
        },
        speed: 1000,
        // grabCursor: true,
        slidesPerView: 1,
    }
}

const headerBtn = document.getElementById("header-mb-menu-btn")
const mobileMenu = document.getElementById("mb-menu")
const mobileMenuLinks = document.querySelectorAll(".mb_nav_item")

let isOpen = false

mobileMenuLinks.forEach(el=>{
    el.addEventListener("click",()=>{
        mobileMenu.style.top = "-150vh"
        return isOpen = false
    })
})


headerBtn.addEventListener("click",()=>{
    if(isOpen){
        mobileMenu.style.top = "-150vh"
        return isOpen = false
    }else{
        mobileMenu.style.top = "84px"
        return isOpen = true
    }
})

// 1 modal
const bellModal = document.querySelector(".modal_bell")
const bellBtns = document.querySelectorAll(".bell_btn")

const thanksBtn = document.getElementById("bell-form")

const modalThanks = document.querySelector(".modal__thanks")
let showBellModal = false

bellBtns.forEach(el=>{
    el.addEventListener("click",()=>{
        bellModal.style.display = "flex"
        document.body.style.overflow = "hidden"
        setTimeout(()=>bellModal.style.opacity = "1",100)
        return
    })
})

thanksBtn.onsubmit = (e)=>{
    e.preventDefault()
    bellModal.style.opacity = "0"
    document.body.style.overflow = "auto"
    setTimeout(()=>bellModal.style.display = "none",300)

    modalThanks.style.opacity = "1"
    document.body.style.overflow = "hidden"
    setTimeout(()=>modalThanks.style.display = "flex",300)
    return
}

const closeModals = document.querySelectorAll(".close_modal")

closeModals.forEach(el=>{
    el.addEventListener("click",()=>{
        bellModal.style.opacity = "0"
        document.body.style.overflow = "auto"
        setTimeout(()=>bellModal.style.display = "none",300)

        modalThanks.style.opacity = "0"
        document.body.style.overflow = "auto"
        setTimeout(()=>modalThanks.style.display = "none",300)

        return
    })
})




const introSlider = new Swiper(".intro__slider",{
    pagination:{
        el:".intro__pagination",
        clickable: true,
        renderBullet: function(index,className){
            return `<span class="${className}">${index+1}</span>`
        }
    },
    loop: true,

    autoplay:{
        delay: 5000,
    },
    speed: 1000,
    // grabCursor: true,
    slidesPerView: 1,
    
})


const restaurantSlider = new Swiper(".restaurant-slider", {
    ...defaultSlider(".restaurant-bullets"),
    autoHeight: true,

})
const restaurantMobileSlider = new Swiper(".restaurant-mb-slider", {
    ...defaultSlider(".restaurant-mb-bullets"),
    autoHeight: true,
})

const eventsSlider = new Swiper(".events-slider",{
    ...defaultSlider(".events-bullets") 
})

const eventsMobileSlider = new Swiper(".events-mb-slider",{
    ...defaultSlider(".events-mb-bullets") 
})

const residenceSlider = new Swiper(".residence-slider",{
    ...defaultSlider(".residence-bullets")
})

const residenceMobileSlider = new Swiper(".residence-mb-slider",{
    ...defaultSlider(".residence-mb-bullets")
})

const perksSlider = new Swiper(".perks-slider",{
    ...defaultSlider(".perks-bullets"),
    autoHeight: true,   
})

const perksMobileSlider = new Swiper(".perks-mb-slider",{
    ...defaultSlider(".perks-mb-bullets"),
    autoHeight: true,   
})

const instagramSlider = new Swiper(".instagram-slider",{
    pagination:{
        el:".instagram-bullets",
        clickable: true,
    },

    autoplay:{
        delay: 5000,
    },
    speed: 1000,
    // grabCursor: true,  
    freeMode: true,

    breakpoints:{
        320:{
            slidesPerView: 1.4,
        },
        420:{
            slidesPerView: 2.3,
        },
        800:{
            slidesPerView: 3.3,
        },
        1200:{
            slidesPerView: 5.3,
        }
    }
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}