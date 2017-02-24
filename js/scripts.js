jQuery(".header-searchWrap input[type=submit]").click(function() {
  var searchScope = $(".header-searchWrap select").val();
  var searchKeyword = $(".header-searchWrap input[type=text]").val();
  var searchResultUrl = "";
  if (jQuery.trim(searchKeyword) == "") return;
  if (searchScope == "AGC") {
      searchResultUrl = "http://www.google.com/cse?cx=013994675213973956921:vdefhuv4hdy&q=" + searchKeyword;
  }
  else if (searchScope == "default") {
      searchResultUrl = "http://www.google.com/cse?cx=013994675213973956921:0rsugoxsmoo&q=" + searchKeyword;
  }
  else if (searchScope == "within_biz") {
      searchResultUrl = "http://www.google.com/cse?cx=013994675213973956921:12rl19e3h2m&q=" + searchKeyword;
  }
  else if (searchScope == "within_cit_res") {
      searchResultUrl = "http://www.google.com/cse?cx=013994675213973956921:ypk0wsxxp8e&q=" + searchKeyword;
  }
  else if (searchScope == "within_non_res") {
      searchResultUrl = "http://www.google.com/cse?cx=013994675213973956921:wna8hpzlqlk&q=" + searchKeyword;
  }
  window.open(searchResultUrl);
});
jQuery(".header-searchWrap select, .header-searchWrap input[type=text]").keypress(function(e) {
  if (e.which == 13) {
      e.preventDefault();
      jQuery(".header-searchWrap input[type=submit]").click();
  }
});
function printPage(){
  $(".print").click(function(){
    window.print();
  });
}
function textResize() {
    // show text resizing links
    var originalFontSize = jQuery("body").css("font-size");
    // reset link
    jQuery(".fontresize-reset").bind("click", function() {
        jQuery("body").css("font-size", originalFontSize);
    });
    // text Inc++
    jQuery(".fontresize-plus").click(function() {

        var currentFontSize = jQuery("body").css("font-size");
        var currentFontSizeNum = parseFloat(currentFontSize, 10);
        if (currentFontSizeNum < 18) {
            var newFontSize = currentFontSizeNum * 1.1;
            if (newFontSize, 11) {
                jQuery("body").css("font-size", newFontSize);
            }
        }
        return false;
    });
    jQuery(".fontresize-minus").bind("click", function() {
        var currentFontSize = jQuery("body").css("font-size");
        var currentFontSizeNum = parseFloat(currentFontSize, 10);
        if (currentFontSizeNum > 9) {
            var newFontSize = currentFontSizeNum * 0.9;
            if (newFontSize, 11) {
                jQuery("body").css("font-size", newFontSize);
            }
        }
        return false;
    });
}
function responsiveClasses() {
    var current_width = $(window).width();
    var current_widthSidr = current_width * 0.98;
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
  $(".js-MenuClone li:has(ul)").append( "<div class='js-subMenu'><i class='fa fa-chevron-right'></i></div>").addClass('js-subMenuBttn');
  $('.js-subMenuBttn > a').click(function(){
    $(this).siblings().children('.fa').toggleClass('fa-chevron-right fa-chevron-down');
    $(this).siblings('ul').slideToggle();
    return false;
  });
}
function responsiveAccordion(){
  $('.mobile-iconAccordion').click(function(){
    $(this).children('.fa').toggleClass('fa-chevron-right fa-chevron-down');
    $(this).parent().siblings(".block-homeLinks--content").toggle();
  });
}
function sideMenu(){
  $('.sidebar_main li:has(ul) a').click(function(){
    $(this).siblings('ul').slideToggle();
    return false;
  });
}
function sidrSize(){
  var current_width = $(window).width();
  var current_widthSidr = current_width * 0.98;
  $('#sidr').css({'left':"-"+ current_widthSidr + 'px','width': current_widthSidr + 'px'});
}
function headerSize(){
  var current_width = $(window).width();
  $('.header-mastheadResponsive').css('width',current_width);
}
$(document).ready(function() {
//SIDR

  var current_width = $(window).width();
  var current_widthSidr = current_width * 0.98;
  $('#menu-responsive').sidr({
    timing: 'ease-in-out',
    speed: 500,
    side: 'left',
    onOpen: function () {
      $('.jsClose-sidr').fadeIn();
      $('body').css('left',current_widthSidr + 'px');
      headerSize();
    },
    onClose: function () {
      $('.jsClose-sidr').fadeOut();
      sidrSize();
      headerSize();
    },
  });
  $('.jsClose-sidr').click(function(){
    $.sidr('close', 'sidr');
  });

//Call functions here
  responsiveClasses();
  getYear();
  loadMenu();
  sideMenu()
  responsiveAccordion();
  textResize();
  sidrSize();
  printPage();
  headerSize();
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
  responsiveClasses();
  sidrSize();
  headerSize();
});


function customPager(){
  //first pager
  $('.k-pager-first').prepend('<i class="fa fa-angle-left" aria-hidden="true"></i>');
  $('.k-pager-first span').text('First');
  //previous page
  $('.k-link[title="Go to the previous page"]').prepend('<i class="fa fa-angle-double-left" aria-hidden="true"></i>');
  $('.k-link[title="Go to the previous page"] span').text('Previous');
  //next page
  $('.k-link[title="Go to the next page"]').append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
  $('.k-link[title="Go to the next page"] span').text('Next');
  //last page
  $('.k-pager-last').append('<i class="fa fa-angle-double-right" aria-hidden="true"></i>');
  $('.k-pager-last span').text('Last');
  //strip words
  var str = $('.k-label').text();
  var lastIndex = str.lastIndexOf(" ");
  str = str.substring(0, lastIndex);
}
$( window ).load(function() {
  customPager();
});



