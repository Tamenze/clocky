//Note: In order to see the effects of Tasks 2 and 3, comment out Task 1. 
$(document).ready(function(){

	setInterval (function(){
		var dateTime = new Date(); 
		var hours = dateTime.getHours();
		var minutes = dateTime.getMinutes();
		var seconds = dateTime.getSeconds();
	var milliseconds = dateTime.getMilliseconds();
	
		//Hours: Convert Military time to cycle of 1-12, add meridiem  
		if (hours < 10){
			$("#hours").text("0" + hours);
			$("#meridian").text(" AM"); 
			}else if(hours > 12){
			$("#hours").text(hours - 12);
			$("#meridian").text(" PM");
			} else if (hours === 12){
			$("#hours").text(hours);
			$("#meridian").text(" PM");
			}else {
			$("#hours").text(hours);
			$("#meridian").text(" AM");
			};
		//Minutes: Add 0 to single digits 
		if (minutes < 10){
			$("#minutes").text("0" + minutes);
			}else{
			$("#minutes").text(minutes);	
			};
		// Seconds: Add 0 to single digits
		if (seconds < 10){
			$("#seconds").text("0" + seconds)
		  	} else {
		  	$("#seconds").text(seconds);
		  	};

		//Milliseconds: Add 0 or 00 to numbers with 1 or 2 digits respectively
		if (milliseconds < 10){
			$("#milliseconds").text("00" + milliseconds);
		  	} else if (milliseconds > 10 && milliseconds < 100){
		  	$("#milliseconds").text("0" + milliseconds);
			} else{
			$("#milliseconds").text(milliseconds);
			}

			//Task 1-> Minutes: Make background change on even/odd
			if(minutes % 2 !== 0 ){
				$("body").css({"background-color":"black",
								"color":"white"});
				}else{
				$("body").css("background-color","blue");
				};

			//Easter Egg Experiment 1: Dance Break between :30 and :35
			if (minutes > 29 && minutes < 36  ){
			$("#danceBreak").html("<a href=\"https://youtu.be/Z0HPsZA-Vx4\" style = \"text-decoration:none\" target = \"_blank\">Dance Break!!</a>");
			} else{
			$("#danceBreak").text("");
			};

			//Easter Egg Experiment 2: Font Change at Specific Times
			if (minutes === 17 || minutes === 27|| minutes === 47){
			$("h1").css("font-family","Lobster");
			} else {
			$("h1").css("font-family", "Courier");
			};


	//end of get Time + replace into HTML		
	},1000);
// 


//Task 2-> Change background color every five minutes
setInterval(function(){fiver()
	}, 300* 1000);

function fiver(){
		var color = Math.floor(Math.random()*16777215).toString(16);

		$("body").css("background-color",'#'+color);
}


//Task 3-> Change text color every hour using colors from array
setInterval(function(){fontly()
	},3600 * 1000 );	

var fontColor = [ "red", "green", "gold","purple", "DarkOrchid", "DeepPink", "Maroon", "Navy", "Magenta", "OrangeRed"];

function fontly(){
	$("body").css("color",fontColor[Math.floor(Math.random() * fontColor.length)]);
};



//end of document ready snippet
});




	

 



