// 내장 모듈
var os = require("os");

console.log("hostname : " + os.hostname());
console.log("memory : " + os.freemem());

// Path
var path = require("path");

var directories = ["Users", "Mars", "Docs"];
var dirStr = directories.join();
console.log("dir : " + dirStr);

var dirStr2 = directories.join(path.sep);
console.log("dir2 : " + dirStr2);

// 파일 Path를 구성하기 위한 각각의 요소를 붙여줌
// 가장 많이 쓰는 방법
var dirStr3 = path.join("/Users/Mars", "notepad.exe");
console.log("dir3 : " + dirStr3);

var dirname = path.dirname(dirStr3);
console.log(dirname);

var basename = path.basename(dirStr3);
console.log("basename : " + basename);

var extname = path.extname(dirStr3);
console.log("extname : " + extname);
