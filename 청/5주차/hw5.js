var express = require('express');
var http = require('http');

var app = express(); //함수 실행 //express 서버 객체

//port 라는 속성 설정(사용자 설정) //app.port 식으로 설정가능
app.set('port', process.env.PORT || 3000); //상세설정 // 환경변수없으면 3000

app.use(function(req, res, next) {
    res.send('<h1>결과</h1>');
});
//express 이용한 웹서버
var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('웹 서버 실행함');
});