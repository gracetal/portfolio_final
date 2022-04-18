console.log("hi!")
var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("")
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	 video.play();
	 document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
});
