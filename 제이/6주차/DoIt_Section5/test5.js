var http = require("http");

// 외부 서버 주소와 port
var options = {
    host: "www.google.com",
    port: 80,
    path: "/"
};

var resData = "";
var req = http.request(options, function(res){
    res.on("data", function(chunk){
        resData += chunk;
    });

    res.on("end", function(){
        console.log(resData);
    });
});