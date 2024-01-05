"use strict";

$(document).ready(function(){

	/*-------------------------------------
	Top menu - Superfish
	-------------------------------------*/
	$('ul.sf-menu').superfish({
		delay: 200,
		speed: 'fast',
		cssArrows: true,
		disableHI: false,
		easing: 'fade',
		touchMove: false,
		swipe: false
	});

	/*-------------------------------------
	Sticky menu
	-------------------------------------*/
	$('#top-nav').sticky({
		topSpacing:0,
		zIndex: 40
	});

	/*-------------------------------------
	Drag images restagt
	-------------------------------------*/
	$('img, a').on('dragstart', function(event) { event.preventDefault(); });

	/*-------------------------------------
	Smooth Scroll to link
	-------------------------------------*/
	$('a.smooth-scroll').on('click', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 1000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		});
		event.preventDefault();
	});



	/*-------------------------------------
	Back to top link
	-------------------------------------*/
	$(document).scroll(function () {
		var y = $(this).scrollTop();
		if (y > 500) {
			$('.top').fadeIn('slow');
		} else {
			$('.top').fadeOut('slow');
		}
	});

	/*-------------------------------------
	Animation blocks
	-------------------------------------*/
	if (typeof $.fn.animated !== 'undefined') {
		$(function () {
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			} else {
				$('.iphone-nalf').animated('fadeInUp');
				$('.section-class-image > img').animated('fadeInUp');
				$('.iphones > .right-mob-back, .left-mob-back').animated('fadeInUp');
				$('.heading-title > h2').animated('fadeInDown');
				$('.heading-title > p').animated('fadeInUp');
				$('.heading-title > h1').animated('fadeInDown');
				$('.heading-title-box > h5').animated('fadeInDown');
				$('.heading-title-box > h2').animated('fadeInUp');
				$('.heading-title-box > p').animated('fadeIn');
				$('.link-register').animated('fadeInDown');
				$('.content-slide > h2').animated('fadeInDown');
				$('.description > p').animated('fadeInUp');
				$('.button-slide-try').animated('fadeInDown');
				$('.footer-text').animated('fadeInUp');
				$('.content-cards .card-exf').animated('fadeInUp');
			}
		}());
	}

	/*-------------------------------------
	Mobile menu - full screen menu
	-------------------------------------*/
	$(function() {

		var $menu = $('#mobile-menu'),
			$body = $('body'),
			$fn = $('#mobile-menu'),
			$fnToggle = $('.toggle-mnu'),
			$window = $(window);

			$menu.find('.menu-item-has-children > a').on('click', function(e) {
				e.preventDefault();
				if ($(this).next('ul').is(':visible')) {
					$(this).removeClass('sub-active').next('ul').slideUp(250);
				} else {
					$('.menu-item-has-children > a').removeClass('sub-active').next('ul').slideUp(250);
					$(this).addClass('sub-active').next('ul').slideToggle(250);
				}
			});

			var fnOpen = false;

			var fnToggleFunc = function() {
				fnOpen = !fnOpen;
				$body.toggleClass('fullscreen-nav-open');
				$fn.stop().fadeToggle(500);
				$('.toggle-mnu').toggleClass('on');
				$('.logo').toggleClass('on');

				return false;
			};

			$fnToggle.on('click', fnToggleFunc);

			$(document).on('keyup', function(e) {
				if (e.keyCode == 27 && fnOpen) {
					fnToggleFunc();
				}
			});

			$fn.find('li:not(.menu-item-has-children) > a').one('click', function() {
				fnToggleFunc();
				return true;
			});

			$menu.on('click', function(){
				fnToggleFunc();
				return true;
			});

			$('.inner-wrap, .fullscreen-menu-toggle').on('click', function(e){
				e.stopPropagation();
			});
	});


 	


	/*-------------------------------------
	Testimonials
	-------------------------------------*/
	$('.testimonials-items').slick({
		dots: true,
		dotsClass: 'dots',
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 8000,
		infinite: true,
		slidesToShow: 3,
		arrows: false,
		responsive: [
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 1170,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 2,
				infinite: false,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 1024,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: false,
				arrows: false,
				dots: true
			}
		},

		{
		breakpoint: 600,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
			}
		},

		{
		breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
			}
		}
	 // You can unslick at a given breakpoint now by adding:
	 // settings: "unslick"
	 // instead of a settings object
		]
	});





});