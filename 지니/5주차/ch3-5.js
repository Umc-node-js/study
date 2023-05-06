var users = [{ name: 'jinny', age: 23 }, { name: 'jinny', age: 23 }, { name: 'jinny', age: 23 }];
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name);
}

users.forEach(function (elem, index) {
    console.log(index + elem.name);
})

//push(),pop(),unshift(),shift() splice()
users.push();
users.pop();
