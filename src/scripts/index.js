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
		console.log(data);
		var myScroll;
		myScroll = new IScroll('#wrapper', {
			mouseWheel: true
		});
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

			}

		});

	})

})