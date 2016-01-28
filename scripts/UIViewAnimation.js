
//$( ".block" ).animate({ "left": "+=50px" }, "slow" );
var slideMove = function(){
	$('.btn').click(function(){
		$( ".slide" ).animate({ "marginTop": "-20em" }, 700);
	});
}

$(document).ready(slideMove);