// console.log 또한 함수
console.log("Test");
console.log("숫자입니다. %d", 10);
console.log("문자입니다. %s", "안뇽");

var person = {
    name: "정채원", 
    age: "23"
};
console.log("자바스크립트 객체입니다. %j", person);

// 객체 그대로 출력
console.dir(person);

// 시간 측정
console.time("duration");
var result = 0;
for(var i=0; i<10000; i++){
    result += i;
}
console.timeEnd("duration");

console.log("파일 이름 : %s", __filename);
console.log("패스 : %s", __dirname);