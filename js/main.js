$(document).ready(function(){

  const swiper = new Swiper('.slider-work', {

  slidesPerView: 4,
  spaceBetween: 10,
  slidesPerGroup: 1,
  loop: true,
  
  

 

  // Navigation arrows
  navigation: {
    nextEl: '.slider-work__button--next',
    prevEl: '.slider-work__button--prev',
  },

  breakpoints: {
  1150: {
   slidesPerView: 4,
   spaceBetween: 10
  },
  875: {
   slidesPerView: 3,
   spaceBetween: 10
  },
  750: {
   slidesPerView: 2,
   spaceBetween: 120
 },
 320: {
  slidesPerView: 1,
  spaceBetween: 10
 },
 100: {
   slidesPerView: 1,
   spaceBetween: 10
 }
}
 
 
});

});