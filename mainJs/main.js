$(function() {

	// fixed header
	let menu = $("#menu")
	let burger = $(".burger")
	let header = $("#header")
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	checkScroll(scrollPos, introH);


	$(window).on("scroll resize", function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});




function checkScroll(scrollPos, introH){
	if ( scrollPos  >  introH ) {
			header.addClass("fixed");
		}
		else{
			header.removeClass("fixed");
		}
};





// 	burger//////////////
	burger.on("click", function(event){
		event.preventDefault();
		menu.toggleClass("burger__menu");
		header.toggleClass("show")
	});


});