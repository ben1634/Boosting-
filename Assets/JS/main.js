console.log("JavaScript loaded");

let input = document.querySelector("#phone");
  const hamBtn = document.querySelector(".ham");
  const navbar = document.querySelector(".navbar");
  const navlinks = document.querySelector(".nav-links");




  

// Hamburger
hamBtn.addEventListener("click", function () {
  hamBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  navlinks.classList.toggle("active");
});



 var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

         navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    window.intlTelInput(input,{});



  
