//讀取Json file 
var body = document.querySelector("span")

fetch("../comments/data/comments.json")
    .then(data => data.json())
    .then(result => {
        Getresult(result);
        resize(result);
    })



//將資料傳到函式中處理


function Getresult(data) {


    for (let i = 0; i < data.length; i++) {
        var index = data[i];
        //創建Element 

        var title = document.createElement("h1");
        var author = document.createElement("h2");
        var time = document.createElement("p");
        var content = document.createElement("p");

        //刪除Element


        //從Json file 賦值
        title.textContent = index.title;
        author.textContent = index.user_name;
        time.textContent = index.time.year + "/" + index.time.month + "/" + index.time.date + "  " + index.time.hour + ":" + index.time.minute;
        content.textContent = index.content;

        var div = document.createElement("div");
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(time);
        div.appendChild(content);
        body.appendChild(div)

        var br = document.createElement("br")
        var hr = document.createElement("hr")
        body.appendChild(br)
        body.appendChild(hr)
    }
}

function resize(result) {
    var span = document.getElementById("span")
    span.style.top = 10 + (result.length - 1) * 3 + "cm"
}