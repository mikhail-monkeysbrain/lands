$(function () {
  $(".slide-two").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      1000:{
        items:2
      }
    }
  });
})