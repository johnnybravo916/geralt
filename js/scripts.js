
function responsiveClasses() {
    var current_width = $(window).width();
    if (current_width < 481)
        $('html').addClass("m320").removeClass("m768").removeClass("desktop").removeClass("m480");
    else if (current_width < 739)
        $('html').addClass("m768").removeClass("js-desktop").removeClass("m320").removeClass("tablet");
    else if (current_width < 970)
        $('html').addClass("tablet").removeClass("js-desktop").removeClass("m320").removeClass("m768");
    else if (current_width > 971)
        $('html').addClass("js-desktop").removeClass("m320").removeClass("m768").removeClass("tablet");
}
function getYear(){
  var currentYear = (new Date).getFullYear();
  $(".js-year").text((new Date).getFullYear());
}

$(document).ready(function() {
//Call functions here
  responsiveClasses();
  getYear();
//SLICK SLIDER
  $(".js-slider-main").slick({
    autoplay:true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    dotsClass: 'js-slider-main--dots'
  });
  $(".js-slider-carouselMain").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
    dotsClass: 'js-slider-carouselMain--dots',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
