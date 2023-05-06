//자바스크립트의 함수
//함수 앞에 function 키워드를 붙임
//파라미터의 타입과 반환되는 값의 타입을 명시하지 않음
//함수를 일급 객체
//함수가 변수에 할당될 수 있음
//두가지 이름으로 함수를 호출할 수 있으르모 원래의 함수이름을 생략하고 익명함수라고 부름
function add(a, b) { return a + b; }
var result = add(10, 10);

var person = {};
person.name = 'ttt';
person['age'] = 20;
person.add = function (a, b) { return a + b; }

person.add(10, 10);