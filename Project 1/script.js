// var tl = gsap.timeline();

// tl.to("#page1", {
//     y:"40vh",
//     scale:0.5,
//     duration:0
// })
// tl.to("#page1", {
//     y:"0vh",
//     duration:1,
//     delay:1
// })
// tl.to("#page1", {
//     rotate:360,
//     scale:1
// })
// tl.to(".page2", {
//     opacity:1
// })

// -------- cards ----------------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.3,
  spaceBetween: 10,
  // mousewheel: true,
  freeMode: true,
});

window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY * 2;
  const image = document.querySelector("#animate img");

  if (image) {
    image.style.transform = `translateY(${scrollPosition / 20}px)`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const nsvSlide = document.querySelector(".nsvslide");
  const slideContents = document.querySelectorAll(".nsvslide-content");
  let timeout;

  if (!navItems.length || !nsvSlide || !slideContents.length) {
    console.error("Required elements not found");
    return;
  }

  function showSlide(event) {
    clearTimeout(timeout);
    const slideId = event.target.getAttribute("data-slide");

    slideContents.forEach((content) => {
      if (content.id === `${slideId}-content`) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });

    nsvSlide.classList.add("active");
  }

  function hideSlide() {
    timeout = setTimeout(() => {
      nsvSlide.classList.remove("active");
    }, 200);
  }

  navItems.forEach((item) => {
    item.addEventListener("mouseenter", showSlide);
    item.addEventListener("mouseleave", hideSlide);
  });

  nsvSlide.addEventListener("mouseenter", () => clearTimeout(timeout));
  nsvSlide.addEventListener("mouseleave", hideSlide);

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
