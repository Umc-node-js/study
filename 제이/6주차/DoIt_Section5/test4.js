// Get 방식으로 요청할 때 : get 메소드 사용
var http = require("http");

// 외부 서버 주소와 port
var options = {
    host: "www.google.com",
    port: 80,
    path: "/"
};

var req = http.get(options, function(res){
    // 응답 처리
    var resData = "";
    res.on("data", function(chunk){
        resData += chunk;
    });

    res.on("end", function(){
        console.log(resData);
    });
});

req.on("error", function(err){
    console.log("에러 발생 : " + err.message);
});
