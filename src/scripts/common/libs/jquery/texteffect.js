(function($) {
	"use strict";
		var isOn = 0, sets, fx, toAnimate = "#effect", settings = {
			animation:8,
			animationType: "in",
			backwards: false,
			easing: "easeOutQuint",
			speed: 400,
			sequenceDelay: 100,
			startDelay: 0,
			offsetX: 100,
			offsetY: 50,
			onComplete: fireThis,
			restoreHTML: true
		};

		jQuery(document).ready(function() {
			fx = jQuery("#effect");
			jQuery.cjTextFx(settings);
			jQuery.cjTextFx.animate(toAnimate);
		});
			
		function fireThis() {
			if(isOn === 12) return;
				(isOn < 12) ? isOn++ : isOn = 0;
				
				switch(isOn) {

					case 1:
						sets = {animation: 8,animationType: "out", restoreHTML: false};
					break;
					
					case 2:
						fx.html("作品：音乐播放器");
						sets = {animation: 11};
					break;
					
					case 3:
						sets = {animation: 11, animationType: "out", restoreHTML: false};
					break;
					
					case 4:
						fx.html("制作组：叶静小组");
						sets = {animation: 1};
					break;
					
					case 5:
						sets = {animation: 1, animationType: "out", restoreHTML: false};
					break;

					case 6:
						fx.html("251458365@qq.com");
						sets = {animation: 6, backwards: true};
					break;
					
					case 7:
						sets = {animation: 4, animationType: "out", backwards: true, restoreHTML: false};
					break;
					
					case 8:
						fx.html("指导老师：张燕姑");
						sets = {animation: 2, easing: "easeOutBounce"};
					break;
					
					case 9:
						sets = {animation: 2, animationType: "out", speed: 500, easing: "easeInBack", restoreHTML: false};
					break;
					
					case 10:
						fx.html("多提宝贵意见");
						sets = {animation: 14, startDelay: 1000, easing: "easeInBack", restoreHTML: false};
					break;
					
					case 11:
						sets = {animation: 6, animationType: "out", speed: 500, easing: "easeInBack", restoreHTML: false};
					break;
					
						
			   	    default :
						isOn =2;//在这设定返回从头开始
					break;


				}
				

			jQuery.cjTextFx.animate(toAnimate, sets);
		}

})(jQuery);