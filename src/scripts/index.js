var $ = require('./common/libs/zepto-modules/zepto');
require('./common/libs/zepto-modules/event');
require('./common/libs/zepto-modules/ajax');
require('./common/libs/zepto-modules/fx');
require('./common/libs/zepto-modules/touch');

var Swiper = require('./common/libs/swiper/swiper.min.js');
var swiperAni = require('./common/libs/swiper/swiper.animate1.0.2.min.js');
var IScroll = require('./common/libs/iscroll/iscroll.js');

// edit index
$(".firstAn").show();
$("#mainContainer").hide();

$('.firstAn .slideTitle span').eq(0).animate({
	color: '#975A4F'
}, 500, 'linear', function() {
	$('.firstAn .slideTitle span').eq(1).animate({
		color: '#975A4F'
	}, 500, 'linear', function() {
		$('.firstAn .slideTitle span').eq(2).animate({
			color: '#975A4F'
		}, 500, 'linear', function() {

			$('.firstAn .slideTitle span').eq(3).animate({
				color: '#975A4F'
			}, 500, 'linear', function() {
				$('.myName span').eq(0).animate({
					color: '#975A4F'
				}, 500, 'linear', function() {
					$('.myName span').eq(1).animate({
						color: '#975A4F'
					}, 500, 'linear', function() {

					})

				})

			})

		})

	})

})

var swiper = new Swiper('.firstAn .swiper-container', {
	pagination: '.firstAn .swiper-pagination',
	paginationClickable: true,
	onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
		swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
		swiperAni.swiperAnimate(swiper); //初始化完成开始动画
	},
	onSlideChangeEnd: function(swiper) {
		swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

	}

});

$('.firstAn .swiper-slide').each(function(i) {
	$(this).css({
		background: "url(images/pic" + i + ".jpg) no-repeat",
		backgroundSize: "100% 100%"

	})

})

$(".enterBtn").tap(function() {
	$(".firstAn").hide()
	$("#mainContainer").show();

	$.post('http://localhost:8000/skill', function(data) {
		var str = '';
		for(var i = 0; i < data.length; i++) {

			str += '<li>' +
				'<div class="mainLogo">' +
				'<img src="' + data[i].img + '" />' +
				'</div>' +
				'<div class="intro">' +
				'<p class="introTitle"><strong>Category：</strong><span>' + data[i].category + '</span></p>' +
				'<p class="introMain"><strong>Name：</strong><span>' + data[i].name + '</span></p>' +
				'<p class="introMain"><strong>Time：</strong><span>' + data[i].time + '</span></p>' +
				'<p class="introMain"><strong>level：</strong><span>' + data[i].level + '</span></p>' +
				'</div>' +
				'</li>';

		}

		$('.swiper-slide ul').eq(0).html(str)

		var myScroll;
		myScroll = new IScroll('#wrapper', {
			mouseWheel: true,
			scrollX: false,
		})
		document.addEventListener('touchmove', function(e) {
			e.preventDefault();
		}, false);
		var swiper = new Swiper('#scroller .swiper-container', {
			pagination: '#scroller .swiper-pagination',
			paginationClickable: true,
			onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
				swiperAni.swiperAnimateCache(swiper); //隐藏动画元素 
				swiperAni.swiperAnimate(swiper); //初始化完成开始动画
			},
			onSlideChangeEnd: function(swiper) {
				swiperAni.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				var num = swiper.activeIndex;
				$('#footer li').eq(num).addClass('active').siblings('li').removeClass('active')
				myScroll.refresh();
				myScroll.scrollTo(0, 0);

				if(num == 3) {
		
					$('.bgline span').eq(0).animate({
						color: '#F34C1D'
					}, 200, 'linear', function() {
						$('.bgline span').eq(1).animate({
							color: '#F34C1D'
						}, 200, 'linear', function() {
							$('.bgline span').eq(2).animate({
								color: '#F34C1D'
							}, 200, 'linear', function() {

								$('.bgline span').eq(3).animate({
									color: '#F34C1D'
								}, 200, 'linear', function() {
									
									$('.bgline span').eq(4).animate({
						color: '#F34C1D'
					}, 200, 'linear', function() {
						
						
							$('.bgline span').eq(5).animate({
						color: '#F34C1D'
					}, 200, 'linear', function() {
						
							$('.bgline span').eq(6).animate({
						color: '#F34C1D'
					}, 200, 'linear', function() {})
						
					})
						
					})
									
									
								})
							})

						})

					})

				}

			}

		});

		$('#footer li').tap(function() {
			num = $(this).index()
			$('#footer li').eq(num).addClass('active').siblings('li').removeClass('active')
			swiper.slideTo(num, 500, true);
			myScroll.scrollTo(0, 0);
			myScroll.refresh();

		})

	})

	$.post('http://localhost:8000/project', function(data) {

		var str = '';
		for(var i = 0; i < data.length; i++) {

			str += '<li>' +
				'<div class="mainLogo">' +
				'<img src="' + data[i].img + '">' +
				'</div>' +
				'<div class="intro">' +
				'<p class="introTitle"><strong>Category：</strong><span>' + data[i].category + '</span></p>' +
				'<p class="introMain"><strong>Name：</strong><span>' + data[i].name + '</span></p>' +
				'<p class="introMain"><strong>Url：</strong><span>' + data[i].url + '</span></p>' +
				'<p class="introMain"><strong>Description：</strong><span>' + data[i].description + '</span></p>' +
				'<p class="introMain"><strong>Detail：</strong><span>' + data[i].detail + '</span></p>' +
				'<p class="introMain"><strong>Tech：</strong><span>' + data[i].tech + '</span></p>' +
				'</div></li>';

		}

		$('.swiper-slide ul').eq(1).html(str)

	})

	$.post('http://localhost:8000/work', function(data) {

		var str = '';
		for(var i = 0; i < data.length; i++) {

			str += '<li>' +
				'<div class="mainLogo">' +
				'<img src="' + data[i].img + '">' +
				'</div>' +
				'<div class="intro">' +
				'<p class="introTitle"><strong>Category：</strong><span>' + data[i].category + '</span></p>' +
				'<p class="introMain"><strong>Name：</strong><span>' + data[i].name + '</span></p>' +
				'<p class="introMain"><strong>Url：</strong><span>' + data[i].url + '</span></p>' +
				'<p class="introMain"><strong>Time：</strong><span>' + data[i].time + '</span></p>' +
				'<p class="introMain"><strong>Posts：</strong><span>' + data[i].posts + '</span></p>' +
				'<p class="introMain"><strong>Reportto：</strong><span>' + data[i].reportto + '</span></p>' +
				'<p class="introMain"><strong>Peoples：</strong><span>' + data[i].peoples + '</span></p>' +
				'<p class="introMain"><strong>Projects：</strong><span>' + data[i].projects + '</span></p>' +
				'</div></li>';

		}

		$('.swiper-slide ul').eq(2).html(str)

	})

})
var music=document.getElementById("music")

	$('.musicConte').tap(function(){
		
		if(music.paused){
			$('#change').addClass('anMuci')
			music.play();
		}else{
			music.pause();
			$('#change').removeClass('anMuci')
				
		}

		
	})
