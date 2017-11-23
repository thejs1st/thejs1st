window.onload = function(){
	$(window).resize().scroll();
	$('.js_cover').show();
}

$(document).ready(function(){

$('#modal, header, #popup .info').on('touchmove mousewheel', function(){
	return false;
});

$('#visual').removeClass('ready');

(function(){ // Start : Side Menu
	$('nav .btn').on('click', function(){
		$('nav').toggleClass('active');
		$('nav .menu ul').hide();
		$('#modal').fadeToggle(500);
		$('nav').hasClass('active') ? overflow = 'hidden' : overflow = "auto";
		$('body').css({'overflow':overflow});
	});
	$(window).resize(function(){
		if ($('nav').hasClass('active')){
			$('nav .btn').click();
		}
	});
})(); // End : Side Menu

(function(){ // Start : Accordion Menu

	$(window).resize(function(){

		if ($(window).width()>768) {// PC mode

			$('.menu').on('mouseover', function(){

				$('.menu').not(this).find('ul').stop().slideUp();
				$(this).find('ul').stop().slideDown();
			}).on('mouseout', function(){

				$('.menu ul').stop().slideUp();
			}).off('click');

		} else { // Mobile mode

			$('.menu').on('click', function(){

				$('.menu').not(this).find('ul').stop().slideUp();
				if ($(this).find('ul').is(':hidden')) {

					$(this).find('ul').stop().slideDown();
				}
			}).off('mouseover').off('mouseout');
		}
	})
})(); // End : Accordion Menu

(function(){// Start : Video Size Set
	$(window).resize(function(){

		var win_w = $(window).width();
		var win_h = $(window).height();
		var video_w = $('.js_cover').width(); //1920
		var video_h = $('.js_cover').height(); //1080 //1.77777...

		if (win_w/win_h>video_w/video_h) {

			$('.js_cover').css({'width': '100%', 'height': 'auto'});
		} else {

			$('.js_cover').css({'width': 'auto', 'height': '100%'});
		}
	});
})();// End : Video Size Set

(function(){//Start : POPUP

	$('#popup').on('mousewheel',function(){
		event.stopPropagation();
	});

	//preset
	$('#pop .pop').each(function(){
		var popid = $(this).attr('data-popid');
		var img_src = $('#'+popid).find('img').attr('src');
		$(this).children().css({'background-image': 'url('+img_src+')'});
	});

	$('#pop .pop').on('click', function(){

		$('#modal').css({'z-index':'13'}).fadeIn(300);
		var popid = $(this).attr('data-popid');
		$('#popup .item').not('#'+popid).stop().fadeOut(300);
		$('#'+popid).stop().fadeIn(300);
		$('body').css({'overflow':'hidden'});
	});

	$('#popup .close').on('click', function(){
		
		$('#modal').fadeOut(300,function(){
			$(this).css({'z-index':'11'});
		});
		$('#popup .item').stop().fadeOut(300);
		$('body').css({'overflow':'auto'});
	});

})();//End : POPUP

(function(){// Start : PROGRESS BAR	

	$(window).scroll(function(){

		var top = $(window).scrollTop();
		var win_h = $(window).height();

		$('.bar i').each(function(){

			var txt = $(this).siblings('span').text();
			var offset = $(this).offset().top;
			if (offset<top+win_h) $(this).stop().animate({'width': txt+'%'},1000);
		});
		
	});
// 	// var w = [];
// 	// var state = [0,0,0,0];
// 	$(window).on('scroll', function(){

// 		var top = $(window).scrollTop();
// 		var win_h = $(window).height();

// 		$('.bar i').each(function(i){

// 			// w[i] = 0;

// 			var obj = $(this);
// 			var txt = obj.siblings('span').text();
// 			var offset = obj.offset().top;
// 			if(offset<top+win_h) $(this).animate({'width': txt+'%'}, 1000);
// 			// if(offset<top+win_h) {
// 			// 	console.log(state[i]);
// 			// 	if (state[i] == 1) return false;
// 			// 	var loop = [];
// 			// 	loop[i] = setInterval(increase, 100);
// 			// 	function increase() {
// 			// 		if (w[i] < txt) {
// 			// 			w[i]++;
// 			// 			obj.siblings('span').text(w[i]);
// 			// 			state[i] = 1;
// 			// 			obj.stop().animate({'width' : w[i]+'%'},100);
// 			// 		} else {
// 			// 			clearInterval(loop[i]);
// 			// 		}
// 			// 	}
// 			// }

// 		});
		
// 	});
})();// End : PROGRESS BAR

(function(){ // Start : PARALLAX SCROLL

	$(window).resize(function(){
		var win_w = $(window).width();
		var win_h = $(window).height();
		$('section').css({'height' : win_h});

	}).resize();

	$('#container').append('<div class="scroll_nav"></div>');
	$('section').each(function(){

		var txt = $(this).attr('id');
		$('.scroll_nav').append('<i><span>'+txt+'</span></i>');
		var span_w = $('.scroll_nav i').last().children().width();
		$('.scroll_nav i').last().attr('data-w', span_w).css({'width': 0});
	});

	function now(){

		var idx;
		var top = $(window).scrollTop();
		$('section').each(function(i){

			var offset = $(this).offset().top;
			var Y = $(window).height()*0.333;
			if (top>=offset-Y) idx = i;
		});
		return idx;
	}

	$(window).scroll(function(){

		var idx = now();
		var span_w = $('.scroll_nav i').eq(idx).attr('data-w');
		$('.scroll_nav i').css({'width' : 0}).eq(idx).css({'width' : span_w});
	});

	$(document).on('mousewheel', function(){

		var win_w = $(window).width();
		var idx = now();
		var delta = (event.wheelDelta/120)*-1;
		idx+=delta;
		if (idx<0) idx=0;
		if (idx>$('section').length) idx=$('section').length;
		if (win_w>768) move(idx);
	});

	function move(i){

		if (i==$('section').length) return false;

		var T = $('section').eq(i).offset().top;
		$('html,body').stop().animate({ scrollTop : T});
	}

	$('.scroll_nav i').on('click', function(){

		move($(this).index());
	});

})(); // End : PARALLAX SCROLL
(function(){ // Start : SLIDE

	$(window).resize(function(){

		navigator.maxTouchPoints>0?$('.controler a').hide():$('.controler a').show();
	});
	

	var sX,mX;
	var item_leng = $('#slide .item').length;
	var speed = 600;
	var interval = 3000;

	var clone_first = $('#slide .slide_cnt li').first().clone().addClass('clone');
	var clone_last = $('#slide .slide_cnt li').last().clone().addClass('clone');
	$('#slide .slide_cnt').append(clone_first);
	$('#slide .slide_cnt').prepend(clone_last);
	for (var i=0; i<item_leng; i++){
		$('#slide .navi').append('<i></i>');
	}
	$('#slide .navi i').css({'transition': 'width '+(speed/1000)+'s'}).first().addClass('active');
	$('#slide .slide_cnt').css({'width' : (item_leng+2)+'00%', 'left' : '-100%'});
	$('#slide .item').css({'width' : (100/(item_leng+2))+'%'});
	
	var idx = 1;
	var navi_idx = 0;

	function slide (i) {

		sX = undefined;

		$(document).off('touchmove');
		if ($('#slide .slide_cnt').is(':animated')) return false;
		
		idx+=i;
		
		$('#slide .slide_cnt').stop().animate({'left': (idx*-1)+'00%'}, speed, function (){
			if (idx==0) {
				idx=item_leng;
			} else if (idx==item_leng+1){
				idx=1;
			};
			$('#slide .slide_cnt').css({'left': (idx*-1)+'00%'});
			$(document).on('touchmove',function(){
				move();
			});
		});

		navi_idx+=i;
		if (navi_idx>item_leng-1) navi_idx=0;
		if (navi_idx<0) navi_idx=item_leng-1;

		$('#slide .navi i').removeClass().eq(navi_idx).addClass('active');
	}

	$('#slide .controler a').on('click', function(){

		var idx = $(this).index();
		if(idx==0) idx=-1;
		slide(idx);
	});

	$('#slide .navi i').on('click',function(){

		slide($(this).index()-$('#slide .active').index());
	});

	$('#slide .item').not('.clone').on('touchstart',function(){

		sX = event.targetTouches[0].pageX;
	});

	function move(){

		var item_w = $('#slide .item').width();		

		mX = event.targetTouches[0].pageX-sX;

		$('#slide .slide_cnt').css({'left': ((item_w*idx*-1)+mX)+'px'});


		if (mX>=60) {
			slide(-1);
		} else if (mX<=-60){
			slide(1);
		};
	}

	$(document).on('touchmove',function(){
		move();
	});

	$(document).on('touchend',function(){
		if (mX<60&&mX>-60) {
			// sX = undefined;
			$(document).off('touchmove');
			$('#slide .slide_cnt').stop().animate({'left': (idx*-1)+'00%'}, 300, function(){
				$(document).on('touchmove',function(){
					move();
				});
			});
		} 
	});

	var loop = setInterval(function(){
		slide(1);
	}, interval);

	$('#slide .slide_frm').hover(function(){
		clearInterval(loop);
	},function(){
		loop = setInterval(function(){
			slide(1);
		}, interval);
	});

})(); // End : SLIDE
(function(){ // Start : TAB

	$('#tab nav a').on('click', function(){

		$('.active, .selected').removeClass();
		var idx = $(this).index();
		$(this).addClass('selected');
		$('.cnt div').hide();
		$('.cnt div').eq(idx).show().addClass('active');
	});
})();// End : TAB

});