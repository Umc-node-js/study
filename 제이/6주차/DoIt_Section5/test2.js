var http = require("http");
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
    // console.dir(req);

    // 헤더 출력
    res.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    res.write("<h1>웹서버로부터 받은 응답</h1>");
    res.end();
});