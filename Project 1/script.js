// ----- section 1 -------


// var parent = document.querySelector(".hero-section");
// var show = document.querySelector('.hero-content-visible');
// var hide = document.querySelector('.hero-content-invisible');

// function showContainer(){
//     show.style.display = 'none';
//     hide.style.display = 'block';
// }
// function hideContainer(){
//     hide.style.display = 'none';
//     show.style.display = 'block';
// }






// -------- cards ----------------

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.3,
    spaceBetween: 10,
    // mousewheel: true,
    freeMode: true,

  });



window.addEventListener('scroll', function(){
    const scrollPosition = window.scrollY * 2;
    const image = document.querySelector('#animate img');

    if(image){
        image.style.transform = `translateY(${scrollPosition / 20}px)`
    }
})



document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
    const nsvSlide = document.querySelector('.nsvslide');
    const slideContents = document.querySelectorAll('.nsvslide-content');
    let timeout;

    if (!navItems.length || !nsvSlide || !slideContents.length) {
        console.error('Required elements not found');
        return;
    }

    function showSlide(event) {
        clearTimeout(timeout);
        const slideId = event.target.getAttribute('data-slide');
        
        slideContents.forEach(content => {
            if (content.id === `${slideId}-content`) {
                
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });

        nsvSlide.classList.add('active');
    }

    function hideSlide() {
        timeout = setTimeout(() => {
            nsvSlide.classList.remove('active');
        }, 200);
    }

    navItems.forEach(item => {
        item.addEventListener('mouseenter', showSlide);
        item.addEventListener('mouseleave', hideSlide);
    });

    nsvSlide.addEventListener('mouseenter', () => clearTimeout(timeout));
    nsvSlide.addEventListener('mouseleave', hideSlide);

    // console.log('Event listeners added successfully');
});






// product categories

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
  });
