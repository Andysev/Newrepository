$(function(){
	$('.products_slider').slick({
		prevArrow: '<button class="slider-btn slider-btn_left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
		nextArrow: '<button class="slider-btn slider-btn_right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
		infinite: false,

	});

	$('.quest_item-title').on('click', function(){
		$('.quest_item').removeClass('quest_item--active');
		$(this).parent().addClass('quest_item--active');
	});
	$('.menu_btn').on('click', function(){
		$('.menu_btn').toggleClass('menu_btn--active');
		$('.menu_list').toggleClass('menu_list--active');
	});
	$('.menu_list-link').on('click', function(){
		$('.menu_btn').toggleClass('menu_btn--active');
		$('.menu_list').removeClass('menu_list--active');
	});
	$('.top_btn').on('click', function(){
		$('.top_btn').toggleClass('top--active');
		$('.top_btn').toggleClass('top_btn--active');
		$('.top_nowtextbtn').toggleClass('top_nowtextbtn--active');
		$('.top_nowtext').toggleClass('top_nowtext--active');
		$('.top_now').toggleClass('top_now--active');
	});
	$('.li1 input').on('click', function(){
		$('.li1').toggleClass('li1--active');
		$('.li2').removeClass('li2--active');
		$('.li3').removeClass('li3--active');
		$('.li4').removeClass('li4--active');
	});
	$('.li2 input').on('click', function(){
		$('.li2').toggleClass('li2--active');
		$('.li1').removeClass('li1--active');
		$('.li3').removeClass('li3--active');
		$('.li4').removeClass('li4--active');
	});
	$('.li3 input').on('click', function(){
		$('.li3').toggleClass('li3--active');
		$('.li1').removeClass('li1--active');
		$('.li2').removeClass('li2--active');
		$('.li4').removeClass('li4--active');
	});
	$('.li4 input').on('click', function(){
		$('.li4').toggleClass('li4--active');
		$('.li1').removeClass('li1--active');
		$('.li2').removeClass('li2--active');
		$('.li3').removeClass('li3--active');
	});
	
	$('.next_btn').on('click', function(){
		
		if ($('.news_containernew').hasClass('news-show'))
		{
				$('.news_containernew').css('opacity', '0');
				$('.news_containernew').css('height', '0');
				$('.news_containernew').removeClass('news-show');
		}
		else {
			$('.news_containernew').css('opacity', '1');
			$('.news_containernew').toggleClass('news-show');
			$('.news_containernew').css('height', '100%');
		}
	});
	
});