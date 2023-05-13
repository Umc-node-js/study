var express = require("express");
var http = require("http");

var app = express();

// 시스템 환경 변수 PORT 값이 없으면 뒤에 있는 값(3000) 사용
app.set("port", process.env.PORT || 3000);

// 미들웨어 등록
app.use(function(req, res, next) {
    console.log("첫번째 미들웨어 호출됨");

    req.user = "chaewon";

    // 미들웨어를 떠나게 됨
    // 그 다음 미들웨어가 요청을 받아서 처리
    next();
});

app.use(function(req, res, next) {
    console.log("두번째 미들웨어 호출됨");

    // 더 간단하게 응답을 보낼 수 있는 방법
    // res.send("<h1>서버에서 응답한 결과입니다. : " + req.user + "</h1>")

    var person = {name: "jinny", age: 23};
    // res.send(person);

    var personStr = JSON.stringify(person);
    // res.send(personStr);

    res.writeHead("200", {"Content-Type": "application/json;charset=utf-8"});
    res.write(personStr);
    res.end();
})
var server = http.createServer(app).listen(app.get("port"), function(){
    console.log("Express로 웹 서버를 실행 : " + app.get("port"));
});