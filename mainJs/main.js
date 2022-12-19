$(function() {
	// fixed header
	let menu = $("#menu")
	let burger = $(".burger")
	let header = $("#header")
	let intro = $("#intro")
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	checkScroll(scrollPos, introH);


	$(window).on("scroll resize", function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});




// SmOOTHSCROLL======================================
$("[data-scroll]").on("click", function(event){
	event.preventDefault();
	let blockID = $(this).data('scroll')
	let blockOffset = $(blockID).offset().top;
	console.log(blockOffset);

$("html, body").animate({
	scrollTop: blockOffset 
},700);

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