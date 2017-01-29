var navPosition = $('nav').offset().top;
function navScroll(){
	if ($(window).scrollTop()>=navPosition){
		$('nav')
			.css('position','fixed')
			.css('top','0')
			.css('backround-color','#242424')
			/*.css('text-align','center')*/
			.css('opacity','.6')
			.css('z-index','3')
			.css('margin-top','0')
	} else{
		$('nav')
			.css('width','100vw')
			.css('z-index','3')
			.css('position','absolute')
			.css('backround-color','#242424')
			.css('opacity','1')
			.css('margin','0')
			.css('top','7.5vw')
			}
}
window.onscroll = navScroll;