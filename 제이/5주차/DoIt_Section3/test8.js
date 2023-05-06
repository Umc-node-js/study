var users = [{name: "jay", age: 23}, {name: "julia", age: 23}];
console.log("배열 원소의 개수 : " + users.length);

// 배열 맨 앞에 추가
users.unshift({name: "jinny", age: 23});
console.log("배열 원소의 개수 : " + users.length);

// 배열 맨 앞 삭제
var user = users.shift();
console.log("배열 원소의 개수 : " + users.length);
console.log("shift으로 확인한 원소 : ");
console.dir(user)

// 배열 원소를 삭제할 때 delete 사용 안함
delete users[1];
console.dir(users);
users.forEach(function(elem, index){
    console.log("원소 #" + index);
    console.dir(elem);
});

// 추가
users.splice(1, 0, {name: "mobi", age: 23});
console.dir(users);

// 삭제
users.splice(2, 1);
console.dir(users);

//
var user2 = users.slice(1, 2);
console.log("Users 객체");
console.dir(users);

console.log("user2 객체");
console.dir(user2);