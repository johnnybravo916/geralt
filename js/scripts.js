
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
function loadMenu(){
  $(".js-MenuReference").clone().appendTo(".js-MenuClone");
  $(".js-MenuClone li:has(ul)").append( "<div class='js-subMenu'><i class='fa fa-chevron-right'></i></div>");
  $('.js-subMenu').click(function(){
    $(this).children('.fa').toggleClass('fa-chevron-right fa-chevron-down');
    $(this).siblings('ul').slideToggle();
  });
}
function responsiveAccordion(){
  $('.mobile-iconAccordion').click(function(){
    $(this).children('.fa').toggleClass('fa-chevron-right fa-chevron-down');
    $(this).parent().siblings(".block-homeLinks--content").toggle();
  });
}
$(document).ready(function() {
//SIDR
  $('#menu-responsive').sidr({
    timing: 'ease-in-out',
    speed: 500,
    side: 'left',
    onOpen: function () {
      $('.jsClose-sidr').fadeIn();
    },
    onClose: function () {
      $('.jsClose-sidr').fadeOut();
    },
  });
  $('.jsClose-sidr').click(function(){
    $.sidr('close', 'sidr');
  });

//Call functions here
  responsiveClasses();
  getYear();
  loadMenu();
  responsiveAccordion();
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
$( window ).resize(function () {
  $.sidr('close', 'sidr');
});


