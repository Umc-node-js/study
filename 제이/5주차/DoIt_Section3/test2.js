// 객체는 중괄호 사용
var person = {};

person['name'] = "소녀시대";
person["age"] = 20;

console.log("name : " + person.name);
console.log("age : " + person["age"]);

person.add = function(a, b){
    return a + b;
};

console.log("더하기 : " + person.add(20, 20));