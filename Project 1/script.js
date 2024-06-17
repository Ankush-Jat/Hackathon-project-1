var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.3,
    spaceBetween: 10,
    mousewheel: true,
    freeMode: true,

  });



window.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY * 2;
    const image = document.querySelector('#animate img');

    if(image){
        image.style.transform = `translateY(${scrollPosition / 20}px)`
    }
})


