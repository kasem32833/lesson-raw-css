const YTplayerOverlay = document.querySelector('.youtube-player-overlay')
console.log(YTplayerOverlay);
const playBtn = document.querySelector('.watch-btn');

playBtn.addEventListener('click', ()=>{
    YTplayerOverlay.classList.add('active');
});

YTplayerOverlay.addEventListener('click', ()=>{
    YTplayerOverlay.classList.remove('active')
})


// testimonial slider

$('.testimonial-wrapper').slick({
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,

})

// blog slider
$('.blog-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows:false,
    
})
// couse slider
$('.courses-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.course-prev'),
    nextArrow: $('.course-next')
})

// slick slider 



