startTime();
function startTime() {
    var today = new Date();
    var lastday = new Date("Dec 24, 2018 00:00:00");
    var timeInterval = lastday - today;
    var d = Math.floor((timeInterval / (24 * 3600 * 1000)));
    var h = Math.floor((timeInterval / (3600 * 1000)) - d * 24);
    var m = Math.floor((timeInterval / (60 * 1000)) - (d*24+h) * 60);
    var s = Math.floor((timeInterval / (1000)) - ((d*24+h) * 60+m) * 60);
    // add a zero in front of numbers<10
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    
    if(d < 0) {d = "0" ;h = "00"; m = "00"; s = "00"}

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('r-day').innerHTML = d;
    document.getElementById('r-hour').innerHTML = h;
    document.getElementById('r-min').innerHTML = m;
    document.getElementById('r-sec').innerHTML = s;
    t = setTimeout('startTime()', 1000);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i }
    return i
}