//讀取Json file 

fetch("./data/comments.json")
    .then(data => data.json())
    .then(result => {
        Getresult(result);
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

        //從Json file 賦值
        title.textContent = index.title;
        author.textContent = index.user_name;
        time.textContent = index.time.year + "/" + index.time.month + "/" + index.time.date + "  " + index.time.hour + ":" + index.time.minute;
        content.textContent = index.content;

        var body = document.querySelector("body");
        body.appendChild(title);
        body.appendChild(author);
        body.appendChild(time);
        body.appendChild(content);
    }
}