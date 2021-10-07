@@include('webpTest.js');
@@include('swiper.js');


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

const restaurantSlider = new Swiper(".restaurant-slider",{
    pagination:{
        el:".restaurant-bullets",
        clickable: true,
    },
    loop: true,

    autoplay:{
        delay: 5000,
    },
    speed: 1000,
    // grabCursor: true,
    slidesPerView: 1,
    
})

const eventsSlider = new Swiper(".events-slider",{
    pagination:{
        el:".events-bullets",
        clickable: true,
    },
    loop: true,

    autoplay:{
        delay: 5000,
    },
    speed: 1000,
    // grabCursor: true,
    slidesPerView: 1,
    
})

const residenceSlider = new Swiper(".residence-slider",{
    pagination:{
        el:".residence-bullets",
        clickable: true,
    },
    loop: true,

    autoplay:{
        delay: 5000,
    },
    speed: 1000,
    // grabCursor: true,
    slidesPerView: 1,
    
})

const perksSlider = new Swiper(".perks-slider",{
    pagination:{
        el:".perks-bullets",
        clickable: true,
    },
    loop: true,

    autoplay:{
        delay: 5000,
    },
    speed: 1000,
    // grabCursor: true,
    slidesPerView: 1,
    
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
    slidesPerView: 5.3,
    freeMode: true
    
})