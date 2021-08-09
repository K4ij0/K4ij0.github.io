function createHeart(){
    const heart = document.createElement
    ('div');
    heart.classList.add('heart')

    heart.style.left= Math.random(0,150) * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 5 + 's';

    heart.innerText = ['❄️'];
    

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 1200);

function realtimeClock(){
    
    var rtcClock = new Date();

    var hours = rtcClock.getHours();
    var minutes = rtcClock.getMinutes();
    var seconds = rtcClock.getSeconds();

    // add am and pm system
    var amPm = ( hours < 12) ? "AM" : "PM";

    //convert hours
    hours = (hours > 24 ) ? hours - 24 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    //display
    document.getElementById('clock').innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;
    var t = setTimeout(realtimeClock, 500);
}