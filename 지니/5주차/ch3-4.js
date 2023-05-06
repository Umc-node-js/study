//배열 여러개의 데이터를 하나의 변수에 담아 둘 수 있는 방법
//대괄호를 이용해 접근가능
var names = ['jinny', 'jin'];

var users = [{ name: 'jinny', age: 23 }];//객체배열 

users.push({ name: 'jin', age: 23 })
var len = users.length;

users[0].name;

var oper = function (a, b) { return a + b; };
users.push(oper);
console.dir(users);
users[1](10, 10); //1번째 객체에 함수를 넣음