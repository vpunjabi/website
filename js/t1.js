$(function() {
	//$(".navbar").css({ opacity: 0.5 });
	//$("#contactForm").load(("contact.php"  + "?" + Math.random()));
	$(".scroll").click(function(event){
		event.preventDefault();
		var that = this;
		$('body').animate({scrollTop:$(this.hash).offset().top - $(".navbar").height()}, 1200, function(){
			$(".active").removeClass("active");
			$(that).closest("li").addClass("active");
		});
	});
	$(".showcontact").on("click", function (event) {
		event.preventDefault(event);
		$(".contactInfo").load($(this).attr("href") + "?" + Math.random());
	});
	var $scrollItems = $(".scrollAnchor");
	var $links = $(".scroll").not(".hideThis");
	$(window).scroll(function(){
		if($(window).scrollTop() + $(window).height() >= ($(document).height() - 10)){
			$(".active").removeClass("active");
			$($links[$links.length - 1]).closest("li").addClass("active");
			return;
		}
		var barPos = $(".navbar").offset().top;
		for(var i = 0; i < $scrollItems.length; i++){
			if(($($scrollItems[i]).offset().top - $(".navbar").height())  <= barPos){
				$(".active").removeClass("active");
				$($links[i]).closest("li").addClass("active");
			}
		}
	});
	centerText();
	resizeDescHeight();
	$(window).resize(function(){
		centerText();
		resizeDescHeight();
	});
	$(".social-icons a").on("mouseenter", function(){
		$(".social-icons a").css({
			opacity:"0.1"
		});
		$(this).css({
			opacity:"1"
		});
	});
	$(".social-icons a").on("mouseleave", function(){
		$(".social-icons a").each(function(){
			$(this).css({
				opacity:"1"
			});
		});
	});
	if(!MobileEsp.DetectMobileQuick()){
		$(".bcg").addClass("desktopAnimation");
	}
	$(document).keydown(function(objEvent) {
	    if (objEvent.keyCode == 9) {
	        objEvent.preventDefault();
	    }
	});
});

function resizeDescHeight(){
	$(".resume").load(("resume.html"  + "?" + Math.random()), function(){
		$(".resume").closest(".bcg").height($(".resume").outerHeight());
	});
	$(".about").load(("about.html"  + "?" + Math.random()), function(){
		$(".about").closest(".bcg").height($(".about").outerHeight());
	});
	$("#contactForm").load(("contact.html"  + "?" + Math.random()), function(){
		/* $("#contactForm").closest(".bcg").height($("#contactForm").outerHeight()); */
		centerText();
	});
}

function centerText(){
	$(".centerText").each(function(){
		$(this).css({
			left: ($(this).closest(".bcg").width() - $(this).width())/2,
			top: ($(this).closest(".bcg").height() - $(this).height())/2
		});
	});
}

/*
fade in headline when it is above half way mark and move from top to center (scrolling down); do reverse when scrolling up
*/