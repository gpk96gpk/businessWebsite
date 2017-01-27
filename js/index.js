var navPosition = $('nav').offset().top;
function navScroll(){
	if ($(window).scrollTop()>=navPosition){
		$('nav')
			.css('position','fixed')
			.css('top','0')
			.css('backround-color','#242424')
			/*.css('text-align','center')*/
			.css('opacity','.6')
			.css('z-index','2')
			.css('margin-top','0px')
	} else{
		$('nav')
			.css('width','120%')
			.css('z-index','2')
			.css('position','absolute')
			.css('backround-color','#242424')
			.css('opacity','1')
			.css('margin','70px 0 0 -20px')
			}
}
window.onscroll = navScroll;