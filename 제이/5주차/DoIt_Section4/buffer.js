var output = "안녕!";
var buffer = new Buffer(10);

var len = buffer.write(output, "utf-8");
console.log("첫 번째 버퍼에 쓰인 문자열 : " + buffer.toString());
console.log("버퍼에 쓰인 문자열의 길이 : " + len);

console.log("버퍼 객체인지 여부 : " + Buffer.isBuffer(buffer));

var byteLen = Buffer.byteLength(buffer);
console.log("byteLen : " + byteLen);

var str1 = buffer.toString("utf-8", 0, 6);
console.log("Str1 : " + str1);

var buffer2 = Buffer.from("Hello", "utf-8");
console.log("두 번째 버퍼의 길이 : " + Buffer.byteLength(buffer2));

var str2 = buffer2.toString("utf-8", 0, Buffer.byteLength(buffer2));
console.log("str2 : " + str2);


var fs = require("fs");

fs.createReadStream("./output.txt", {flags: "r"});
infile.on("data", function(data){
    console.log("읽어들인 데이터 : " + data);
});

infile.on("end", function(){
    console.log("읽기 종료");
});