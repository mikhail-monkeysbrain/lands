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
  $(".slide-three").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    responsive:{
      0:{
        items:1
      },
      1000:{
        items:3
      }
    }
  });
  //var width = $('.landing--masonry').width()
  //$('.landing--masonry').height(width*2)
})