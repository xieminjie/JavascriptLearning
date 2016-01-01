$(document).ready(function(){
	$('.menu_btn').click(function(){
		$('.menu').animate({
      	left: "0px"
   		 }, 200)

    	$('main').animate({
      	left: "285px"
    	}, 200);
	});
});