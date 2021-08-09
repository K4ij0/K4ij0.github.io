var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");


icon.onclick = function(){
  
    if(mySong.paused){
        mySong.play();
        icon.src = "svg/pause-button.png";
        mySong.loop = true;
    }
    else{
        mySong.pause();
        icon.src = "svg/play.png";
    }

    if(mySong.paused){
        mySong.pause();
        icon.src = "svg/play.png";
        mySong.currentTime = 0;
        mySong.load();
    }
    
}

icon.src = "svg/pause-button.png";
mySong.play();
mySong.loop = true;


