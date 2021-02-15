// ———————————————————————————————————————————————
// # main.js file.
// # Author: Akshay Bawane
// ———————————————————————————————————————————————

$(function($) {
	$(window).on("scroll resize", function() {
		if ($(window).scrollTop() >= 200) {
			$(".scroll-top").css("bottom", "15px");
		}
		if ($(window).scrollTop() < 200) {
			$(".scroll-top").css("bottom", "-52px");
		}
	});
	$(".scroll-top").on("click", function() {
		return $("html, body").animate({
			scrollTop: 0
		});
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 40) {
			$('#navbar_top').addClass("header-scrolled");
		} else {
			$('#navbar_top').removeClass("header-scrolled");
		}
	});
});
