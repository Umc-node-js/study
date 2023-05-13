var http = require("http");
var fs = require("fs");

var server = http.createServer();

var host = "192.168.219.104";
var port = 3000;
server.listen(port, host, 50000, function(){
    console.log("웹서버 실행");
});

server.on("connection", function(socket){
    console.log("클라이언트 접속");
});

server.on("request", function(req, res){
    console.log("클라이언트 요청이 들어옴");
    
    // 파일 읽기
    var filname = "dongeul.jpg";
    fs.readFile(filename, function(err, data){
        // 헤더 출력
        res.writeHead(200, {"Content-Type" : "image/png"});
        res.write("<h1>웹서버로부터 받은 응답</h1>");
        res.end();
    });

});