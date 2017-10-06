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

	// Procuct Section Scroll
	$('.nav a').on('click', function() {

	    var scrollAnchor = $(this).attr('data-scroll'),
	        scrollPoint = $('div[data-anchor="' + scrollAnchor + '"]').offset().top - 110;

	    $('body,html').animate({
	        scrollTop: scrollPoint
	    }, 500);

	    return false;

	})

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


});








