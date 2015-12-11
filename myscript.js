$(document).ready(
	function(){
		console.log("ready")

	$("form").submit(function(e){
		e.preventDefault();
	});

	$("form").submit(function(){
		//create var to store birthday input box input
		var birthInput = $("#birthday");
		console.log(birthInput);
		//check to see if any value was entered into birthday
		// if($("#birthday").val() == ""){
		// 	alert("Please enter a birthday!");
		// //check if string length is longer than needed i.e. 10 chars	
		// }else if (birthInput.length > 10){
		// 	alert("Invalid, too long");
		// //uses substring() to check for a valid month
		// }else if (birthInput.substring(0, 1) > 12 && birthInput.substring(0, 1) < 1){
		// 	alert("Invalid, please pick a valid month");
		// //uses substring() to check for a valid day
		// }else if (birthInput.substring(3,4) > 31 && birthInput.substring(3,4) < 1){
		// 	alert("Invalid, please pick a valid day");
		// //uses substring() to check for a valid year
		// }else if (birthInput.substring(6,9) > 2015 && birthInput.substring(6,9)< 1899){
		// 	alert("Invalid, please enter a realistic year");
		// //checks at index 2 whether there is a / for formatting
		// }else if (birthInput.charAt(2) != "/"){
		// 	alert("Invalid, please use /'s");
		// //checks at index 5 whether there is a / for formatting
		// }else if (birthInput.charAt(5) != "/"){
		// 	alert("Invalid, please use /'s");
		// //victory
		// }else{
		// 	alert("GREAT SUCCEESS!!!!");
		});
		



});


// try to rewrite program using split() on / and then access the array to check
// the data

// "Richard"
// ["R", "I"]

// 06/16/1988 birthday format
// 0123456789 birthday array order
// var f = "00/00/0000"
// f[2]
// f[5] 

// substring

// var x = 12;

// if (x <= 12  && x > 0  ) {

// 	alert("TRUE");
// };