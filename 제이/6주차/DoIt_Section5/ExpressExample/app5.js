var express = require("express");
var http = require("http");

var app = express();

// 시스템 환경 변수 PORT 값이 없으면 뒤에 있는 값(3000) 사용
app.set("port", process.env.PORT || 3000);

// 미들웨어 등록
app.use(function(req, res, next) {
    console.log("첫번째 미들웨어 호출됨");

    var userAgent = req.header("User-Agent");
    var paramName = req.query.name;

    res.send("<h3>서버에서 응답. User-Agent -> " + userAgent + "</h3><h3>Param Name -> " + paramName + "</h3");
});

var server = http.createServer(app).listen(app.get("port"), function(){
    console.log("Express로 웹 서버를 실행 : " + app.get("port"));
});