var users = [{ name: 'jinny', age: 23 }, { name: 'jinny', age: 23 }, { name: 'jinny', age: 23 }];
users.unshift();
users.shift();

console.dir(users);
delete users[1];

users.forEach(function (elem, index) {
    console.log(index + elem.name);
})
//배열원소의 중간에 삭제할 땐 딜리트가 아니라 슬라이스가 맞음
//딜리트는 그대로 남아있음 길이가
users.splice(1, 0, { name: 'jin', age: 22 });
users.splice(2, 1, { name: 'jin', age: 22 });//2부터 하나만 삭제하겠다
//중간에 삭제하고 추가하는 함수
