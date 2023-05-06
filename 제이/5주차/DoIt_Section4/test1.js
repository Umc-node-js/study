var url = require("url");
var urlStr = "https://naver.com?query=popcorn";

var curUrl = url.parse(urlStr);
console.dir(curUrl);

console.log("query -> " + curUrl.query);

// queryString 추출
var queryString = require("queryString");
var params = queryString.parse(curUrl.query);
console.log("검색어 : " + params.query);