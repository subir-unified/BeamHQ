$(function(){

  if ($(window).width() > 768) {
     $('ul.nav li.dropdown').hover(function() {
      $(this).addClass('active');
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
    }, function() {
      $(this).removeClass('active');
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
    });
  }

	$(window).scroll(function(){
	  var header = $('.site-header'),
	      scroll = $(window).scrollTop();

	  if (scroll >= 50) {
	  	header.addClass('shadow');
	  	//header.removeClass('transparent-bg');
	  }
	  else {
	  	header.removeClass('shadow');
	  }
	});

	// $('.banner-section.inner-page, .site-header').hover(function() {
	// 	$('.site-header').removeClass('transparent-bg');
	// }, function() {
	// 	$('.site-header').addClass('transparent-bg');
	// });

	// Procuct Section Scroll
	$('.nav a').on('click', function() {

	    var scrollAnchor = $(this).attr('data-scroll'),
	        scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 110;

	    $('body,html').animate({
	        scrollTop: scrollPoint
	    }, 500);

	    return false;

	})

if($('.section-tab').length > 0){

	var stickyTop = $('.section-tab').offset().top - 67;
	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop();
	    if (windscroll >= stickyTop) {
	        $('body').addClass('fixed-sec-tab');
	        $('.pr-sections .pr-block').each(function(i) {
	            if ($(this).position().top <= windscroll - 20) {
	                $('.nav a.active').removeClass('active');
	                $('.nav a').eq(i).addClass('active');
	            }
	        });
	    } else {
	        $('body').removeClass('fixed-sec-tab');
	        $('.nav a.active').removeClass('active');
	        $('.nav a:first').addClass('active');
	    }

	}).scroll();
	}


});

$(document).ready(function(){

$('.counter').counterUp({
    delay: 20,
    time: 1000
});

});


$(document).ready(function(){

    var galleryThumbs = new Swiper('.videoSales-slider-thumbs', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });

   var galleryTop = new Swiper('.videoSales-slider-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


})


/*$(document).ready(function(){

    var swiper = new Swiper('.videoSales-video-slider .swiper-container', {
      pagination: {
        el: '.videoSales-video-slider .swiper-pagination',
        clickable: true,
      },
    });

});*/

$(document).ready(function(){

    var galleryThumbs = new Swiper('.videoSales-video-slider1 .slider-thumbs', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      spaceBetween: 10,
    });

   var galleryTop = new Swiper('.videoSales-video-slider1 .slider-top', {
      effect: 'fade',
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


})

$(document).ready(function(){

    var galleryThumbs = new Swiper('.videoSales-video-slider2 .slider-thumbs', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      spaceBetween: 10,
    });

   var galleryTop = new Swiper('.videoSales-video-slider2 .slider-top', {
      effect: 'fade',
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


})

$(document).ready(function(){

    var galleryThumbs = new Swiper('.videoSales-video-slider3 .slider-thumbs', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      spaceBetween: 10,
    });

   var galleryTop = new Swiper('.videoSales-video-slider3 .slider-top', {
      effect: 'fade',
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


})

$(document).ready(function(){

    var galleryThumbs = new Swiper('.videoSales-video-slider4 .slider-thumbs', {
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      spaceBetween: 10,
    });

   var galleryTop = new Swiper('.videoSales-video-slider4 .slider-top', {
      effect: 'fade',
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


});






