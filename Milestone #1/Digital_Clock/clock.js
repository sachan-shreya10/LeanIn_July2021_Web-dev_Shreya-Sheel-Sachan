setInterval(clocks, 500);
function clocks() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    if(sec<10)
        sec='0'+sec;
    if(min<10)
        min='0'+min;
    if(hrs<10)
        hrs='0'+hrs;

    document.getElementById('clock').innerHTML = hrs + ':' + min + ':' + sec;
}
