var users = [{name: "jay", age: 23}, {name: "julia", age: 23}];

// C style for문
for(var i=0; i<users.length; i++){
    console.log("배열 원소 #" + i + " : " + users[i].name);
}

// forEach를 활용한 반복문
users.forEach(function(elem, index){
    console.log("배열 원소 #" + index + " : " + elem.name);
});