//讀取Json file 
var body = document.querySelector("span")

fetch("../comments/data/comments.json")
    .then(data => data.json())
    .then(result => {
        Getresult(result);
    })



//將資料傳到函式中處理


function Getresult(data) {

    var i = data.length - 1;

    while (i > 0 || i == 0) {
        var index = data[i];
        //創建Element 
        var author = document.createElement("h2");
        var time = document.createElement("p");
        var content = document.createElement("p");
        //定位
        time.id = "time"
        author.id = "author"
        //從Json file 賦值
        author.textContent = index.user_name;
        time.textContent = getTime(index.time);
        content.textContent = index.content;

        var div = document.createElement("div");
        div.appendChild(author);
        div.appendChild(time);
        div.appendChild(content);
        div.id = "divs"
        body.appendChild(div)
        //是否增加底線
        if (i != 0) {
            div.style.borderBottom = "2px solid gray";
        }
        i -= 1
    }
}

//處理時間

var date1 = new Date()
var year
var month
var date
var day
var hour
var minute
var second

function upDateTime() {
    year = date1.getFullYear()
    month = date1.getMonth() + 1
    date = date1.getDate()
    hour = date1.getHours()
    minute = date1.getMinutes()
    second = date1.getSeconds()
}


function getTime(index) {
    upDateTime();

    if (year - index.year > 0) {
        return `${year - index.year}年前`
    }
    else if (month - index.month > 0) {
        return `${month - index.month}個月前`
    }
    else if (date - index.date > 0) {
        return `${date - index.date}天前`
    }
    else if (hour - index.hour > 0) {
        return `${hour - index.hour}小時前`
    }
    else if (minute - index.minute > 0) {
        return `${minute - index.hour}分鐘前`
    }
    else if (second - index.second > 0) {
        return `${second - index.second}秒前`
    }
    else {
        return "現在";
    }
}