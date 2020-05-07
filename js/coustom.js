$(document).ready(function(){
	/* Banner-carousel start */
	$('.banner-slider').owlCarousel({
		items: 1,
		smartSpeed: 2000,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		margin: 0,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items:1
			}
		}
	});


	/* testimonial-carousel start */
	$('.testimonial-slider').owlCarousel({
		items: 1,
		smartSpeed: 2000,
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		margin: 0,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				
			},
			600: {
				items: 1,
				
			},
			1000: {
				items: 1,
				
			},
			1200: {
				items:1
			}
		}
	});




});