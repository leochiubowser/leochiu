//Sound effect controller

//import button 
var bgm1 = document.getElementById("bgm1");
var bgm2 = document.getElementById("bgm2");
var bgm3 = document.getElementById("bgm3");
var bgm4 = document.getElementById("bgm4");
var bgm5 = document.getElementById("bgm5");
var bgm6 = document.getElementById("bgm6");
var bgm7 = document.getElementById("bgm7");
var bgm8 = document.getElementById("bgm8");
var bgm9 = document.getElementById("bgm9");
var bgm10 = document.getElementById("bgm10");
var bgm11 = document.getElementById("bgm11");
var bgm12 = document.getElementById("bgm12");
var bgm13 = document.getElementById("bgm13");
var bgm14 = document.getElementById("bgm14");
var bgm15 = document.getElementById("bgm15");
var stopbgm = document.getElementById("stopbgm");
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");


//import audio
var s1 = document.getElementById("s1");
var s2 = document.getElementById("s2");
var s3 = document.getElementById("s3");
var s4 = document.getElementById("s4");
var s5 = document.getElementById("s5");
var s6 = document.getElementById("s6");
var s7 = document.getElementById("s7");
var s8 = document.getElementById("s8");
var s9 = document.getElementById("s9");
var s10 = document.getElementById("s10");
var s11 = document.getElementById("s11");
var s12 = document.getElementById("s12");
var s13 = document.getElementById("s13");
var s14 = document.getElementById("s14");
var s15 = document.getElementById("s15");

var giselle_bgm = document.getElementById("giselle_bgm");
var sleep_bgm = document.getElementById("sleep_bgm");
//click & Play

bgm1.addEventListener("click", () => {
    s1.play();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm2.addEventListener("click", () => {
    s2.play();
    s1.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm3.addEventListener("click", () => {
    s3.play();
    s1.pause();
    s2.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm4.addEventListener("click", () => {
    s4.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm5.addEventListener("click", () => {
    s5.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm6.addEventListener("click", () => {
    s6.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm7.addEventListener("click", () => {
    s7.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm8.addEventListener("click", () => {
    s8.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm9.addEventListener("click", () => {
    s9.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm10.addEventListener("click", () => {
    s10.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm11.addEventListener("click", () => {
    s11.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm12.addEventListener("click", () => {
    s12.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})
bgm13.addEventListener("click", () => {
    s13.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s14.pause();
    s15.pause();
})

bgm14.addEventListener("click", () => {
    s14.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s15.pause();
})

bgm15.addEventListener("click", () => {
    s15.play();
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
})



sleep_bgm.addEventListener("click", () => {
    a1.pause();
    a2.play();
})

giselle_bgm.addEventListener("click", () => {
    a2.pause();
    a1.play();
})


stopbgm.addEventListener("click", () => {
    s1.pause();
    s2.pause();
    s3.pause();
    s4.pause();
    s5.pause();
    s6.pause();
    s7.pause();
    s8.pause();
    s9.pause();
    s10.pause();
    s11.pause();
    s12.pause();
    s13.pause();
    s14.pause();
    s15.pause();
})







//timer
var timer = document.getElementById("time");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var restart = document.getElementById("restart");
var second = 0;
var smaller_second = 0;
var minutes = 0;
var If_start = false;

start.addEventListener("click", function () {
    If_start = true;
})
pause.addEventListener("click", function () {
    If_start = false;
})
restart.addEventListener("click", function () {
    If_start = false;
    second = 0;
    smaller_second = 0;
    minutes = 0;
})

setInterval(() => {
    if (If_start) {
        if (smaller_second > 100 || smaller_second == 100) {
            smaller_second = 0;
            second += 1;
        }
        else {
            smaller_second += 1;
        }
        if (second > 60 || second == 60) {
            minutes += 1;
            second = 0;
        }

    }

    timer.textContent = `${minutes}:${second}:${smaller_second}`;
}, 10);

