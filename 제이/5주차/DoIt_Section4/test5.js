var fs = require("fs");

// 동기 방식 : 파일을 다 읽을 때까지 대기
var data = fs.readFileSync("../../package.json", "utf-8");
console.log(data);

// 비동기 방식 : 파일을 읽던 말던 넘어감 (다 읽을 때까지 대기 X)
fs.readFile("../../package.json", "utf-8", function(err, data){
    console.log(data);
});


fs.writeFile("./output.txt", "Hello", function(err){
    if(err){
        console.log("error");
        console.dir(err);
        return;
    }

    console.log("output.txt에 write 성공");
});