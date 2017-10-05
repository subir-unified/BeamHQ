$(function(){
	$('ul.nav li.dropdown').hover(function() {
		$(this).addClass('active');
	  	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
	}, function() {
		$(this).removeClass('active');
	  	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
	});

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
});