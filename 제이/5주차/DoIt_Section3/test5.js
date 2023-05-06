// 배열은 대괄호로 생성
var names = ["jay", "julia", "jinny", "yeonny", "mobi"];
var users = [{name: "jay", age: 23}, {name: "julia", age: 23}];

// 기존 배열에 추가하려고 할 때, push 사용
users.push({name: "jinny", age: 23});

console.log("총 사용자 수 : " + users.length);
console.log("첫 번째 사용자 이름 : " + users[0].name);

var operation = function(a, b){
    return a + b;
};

// 배열에 함수 추가
users.push(operation);

console.dir(users);
console.log("네 번째 배열 요소를 함수로 실행 : " + users[3](10, 10));