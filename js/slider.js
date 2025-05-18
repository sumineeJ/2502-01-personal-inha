$(document).ready(function(){

  //Slider
	const swiper_pop = new Swiper('.swiper_pop', {
		loop: true,
		autoplay:true,

		slidesPerView: 2,
		spaceBetween: 50,
		slidesPerGroup: 2,
		loopFillGroupWithBlank: true,
	
		navigation: {
			nextEl: '.pop-next',
			prevEl: '.pop-prev',
		},
	});

  /* index.html */
  // main visual
	const swiper_main = new Swiper('.swiper_main', {
	  // Optional parameters
		loop: true,
		autoplay:true,
		effect: "fade",
		fadeEffect: { crossFade: true },
	
	  // If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	});

  // section 01 news
	const swiper_news = new Swiper('.swiper_news', {
		loop: true,
		autoplay:true,

    slidesPerView: 1,
    spaceBetween: 20,
		slidesPerGroup: 1,
		loopFillGroupWithBlank: true,

		breakpoints: {
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 2,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 20,
				slidesPerGroup: 4,
			},
		},
	
		pagination: {
			el: '.swiper-pagination',
			clickable : true,
		},
	});

  // section 03 research
	const swiper_research = new Swiper('.swiper_research', {
		loop: true,
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

});