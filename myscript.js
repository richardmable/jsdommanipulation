$(document).ready(
	function(){
		console.log("ready")

	$("form").submit(function(e){
		e.preventDefault();
	});

	$("form").submit(function(){
		if($("#birthday").val() == ""){
			alert("Please enter a birthday!")
		}


	});



});




// 06/16/1988 birthday format
// 0123456789 birthday array order