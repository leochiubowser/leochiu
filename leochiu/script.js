//左側主圖片切換
var select_left = document.getElementById("select_left");
select_left.addEventListener("click", () => {
    select_left.src = "image/select_left_yellow.png";
    changeImage("left");
    var change1 = setInterval(() => {
        select_left.src = "image/select_left.png";
        clearInterval(change1);
    }, 400)
})

//右側主圖片切換
var select_right = document.getElementById("select_right");
select_right.addEventListener("click", () => {
    select_right.src = "image/select_right_yellow.png";
    changeImage("right");
    var change2 = setInterval(() => {
        select_right.src = "image/select_right.png";
        clearInterval(change2);
    }, 400)
})


//主版面圖片途徑

class Main {
    constructor(Image, title, title_notes, link) {
        this.Image = Image;
        this.title = title;
        this.title_notes = title_notes;
        this.link = link;
    }
}

//資料庫

var main1 = new Main("image/beach.jpg", "查看今日線上課程功課", "課程", "homework/homework.html");
var main2 = new Main("image/news.jpg", "最新消息", "新聞", "news/news.html");
var main3 = new Main("image/boat.jpg", " Youtube 頻道資訊 ", "影音", "youtube/youtube.html");
var main4 = new Main("image/talk.jpg", "ANJH711 留言板", "新功能", "comments/index.html");

var mainPath = [
    main1,
    main2,
    main3,
    main4,
]
var nowMainImage = 0;


var main_image = document.getElementById("main_image");
var main_image1_title_notes = document.getElementById("main_image1_title_notes");
var main_image1_title = document.getElementById("main_image1_title");
var main_link = document.getElementById("main_link");

//切換主圖片處理函式(方向)
function changeImage(direction) {
    if (direction == "left") {
        if (nowMainImage == 0) {
            nowMainImage = mainPath.length - 1;
        }
        else {
            nowMainImage -= 1;
        }
    }
    else if (direction == "right") {
        if (nowMainImage == mainPath.length - 1) {
            nowMainImage = 0;
        }
        else {
            nowMainImage += 1;
        }
    }

    updateMainImage();
}

//切換主圖片執行函式

function updateMainImage() {
    main_image.src = mainPath[nowMainImage].Image;
    main_image1_title_notes.textContent = mainPath[nowMainImage].title_notes;
    main_image1_title.textContent = mainPath[nowMainImage].title;
    main_link.href = mainPath[nowMainImage].link;
}


//手機視窗select偵測

var section3 = document.getElementById("section3");
var section4 = document.getElementById("section4");
var show = false;

function open() {
    $("#section").animate({
        width: "65%"
    }, 500);
    $("#section2").animate({
        width: "65%"
    }, 500);
    $("#body").animate({
        backgroundColor: "rgb(80, 80,80)"
    }, 800);
    $("#body1").animate({
        filter: "brightness(110%)",
        opacity: "0.1",
        backgroundColor: "rgb(80,80,80)"
    }, 800);
    section3.style.display = "block";
    section4.style.display = "block";
    show = true;
}

function close() {
    $("#section").animate({
        width: "0%"
    }, 300);
    $("#section2").animate({
        width: "0%"
    }, 300);
    $("#body").animate({
        backgroundColor: "white"
    }, 500);
    $("#body1").animate({
        filter: "brightness(100%)",
        opacity: "1",
        backgroundColor: "white"
    }, 500);
    section3.style.display = "none";
    section4.style.display = "none";
    show = false;
}

$("#select").click(function () {
    if (show) {
        close();
    }
    else {
        open();
    }
});
$("#section3").click(function () {
    if (show) {
        close();
    }
});
$("#section4").click(function () {
    if (show) {
        close();
    }
});
