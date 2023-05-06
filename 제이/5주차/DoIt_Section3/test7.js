var users = [{name: "jay", age: 23}, {name: "julia", age: 23}];
console.log("배열 원소의 개수 : " + users.length);

users.push({name: "jinny", age: 23});
console.log("배열 원소의 개수 : " + users.length);

var user = users.pop();
console.log("배열 원소의 개수 : " + users.length);
console.log("pop으로 확인한 원소 : ");
console.dir(user)