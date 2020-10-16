var source = "assets/mnc.mov"
 var video = document.createElement("video");
 //
 video.autoplay = true;
 //
 video.load()
 video.addEventListener("load", function() { 
     video.play(); 
 }, true);
 video.src = source;


 