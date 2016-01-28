$(document).ready(function(){
	$('.menu_btn').click(function(){
		$('.menu_btn').hide();
		$('.menu').animate({
      	"left": "0px"
   		 }, 200);
	});
});