var person1 = {name: "jay1", age: 20};
var person2 = {name: "jay2", age: 20};

// 붕어빵 틀
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.walk = function(speed){
    console.log(speed + "km 속도로 걸어갑니다.");
};

// 붕어빵
var person3 = new Person("jinny", 23);
person3.walk(20);