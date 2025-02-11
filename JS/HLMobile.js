// JavaScript Document
var timer = null;
var l = 0;
function scrollLogo() {
	var ads = document.getElementsByClassName("ads")[0];
	var span = document.querySelectorAll("div.ads > span")[0];
	var inc = 1;
	var imgWidth = 115;
	
	timer = setInterval(function() {
		if (l + span.offsetWidth - 30 < 0)
			l = ads.offsetWidth - 30;
		
		l -= inc;
			
		span.style.left = l + "px";

	}, 30);
}

function stopScrollLogo() {
	if (timer != null)
		clearInterval(timer);
}

