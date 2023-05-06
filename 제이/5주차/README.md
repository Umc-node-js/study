# 5주차 스터디 : Do it! Node.js 프로그래밍 Section 2-4

> Section 2

### console : 다양한 함수를 내장 (전역객체)
- log : 로그 출력
    - __filename : 파일의 절대 경로 출력
    - __dirname : 현재 파일이 속한 디렉토리 경로 출력
- dir : 객체를 그대로 출력 (객체의 속성을 함께 확인할 수 있음)
- time : 실행하는데 걸리는 시간 측정

```
console.time("duration");

var result = 0;
for(var i=0; i<100000; i++){
	result += i;
}

console.timeEnd("duration");
```
→ 출력 : duration: 2.389ms

### 노드에서 모듈 사용하기
- 파일을 읽을 때 필요한 코드를 기능별로 각각의 파일에 나누어 넣을 수 있음
- ex) 파일이 있는지 확인 / 파일 읽기 / 화면에 내용 넣기를 각각의 파일로 분리

#### 모듈
- 별도의 파일로 분리된 독립 기능
- 모듈을 만들어 놓으면 다른 파일에서 모듈을 불러와 사용 O
- 분리한 파일명 : module.js
```
exports.함수이름 = 함수정의;
```
- 원래 파일명 : main.js
```
var module = require("module");
module.함수이름();
```

- 객체를 직접 할당하는 경우 : module.exports도 사용 O
- module.js
```
exports.add = function(a, b){
	return a + b;
};

exports.multiply = function(a, b){
	return a * b;
};
```
- module2.js
```
var calc = {};

calc.add = function(a, b){
	return a + b;
};

calc.multiply = function(a, b){
	return a * b;
};

module.exports = calc;
```

<br/><br/>

> Section 3

### 자바스크립트 객체와 함수

#### 자바와 자바스크립트의 변수 타입 비교
- 자바는 자료형(타입)을 명시
- 자바스크립트는 자료형을 명시하지 않음
- 내부에서는 자료형에 따라 변수 상자의 크기가 달라짐
- boolean, number, string이 있으며 그외에 undefined, null, Object 자료형이 있음
    - undefined : 값을 할당하지 않은 변수의 값
    - null : 존재하지 않는 값을 가리키는 값
    - Object : 객체를 값으로 가지는 자료형

#### 자바와 자바스크립트의 함수 비교
- 파라미터의 타입과 반환되는 값의 타입을 명시하지 않음
- 함수 앞에는 function 키워드를 붙임

#### 함수를 변수에 할당하기
- 자바스크립트에서는 함수를 일급 객체로 다룸
- 따라서 함수가 변수에 할당될 수 있음
- 변수에 할당될 경우 두 가지 이름으로 함수를 호출할 수 있으므로 원래의 함수 이름을 생략하고 익명함수라고 부름


### 배열

#### 배열이 만들어지는 모양
- 배열은 여러 개의 데이터를 하나의 변수에 담아둘 수 있는 방법
- 배열의 요소는 대괄호를 이용해 접근할 수 있음

#### 배열에 값 추가 및 삭제하기
- 배열의 끝에 원소 추가 : push
- 배열의 끝에 원소 삭제 : pop
- 배열의 앞에 원소를 추가 : unshift
- 배열의 앞에 원소를 삭제 : shift
- 여러 개의 원소를 한꺼번에 추가 및 삭제 : splice
    - ex) splice(index, removeCount [,object]) : 여러 개의 객체를 요소

### 콜백 함수

#### 함수를 파라미터로 전달
- 변수에 함수를 할당할 수 있으므로 함수를 호출할 때 파라미터로 다른 함수 전달 가능

### 프로토타입 객체

#### 자바스크립트에서 객체지향 방식으로 생성
- 객체의 원형을 프로토타입이라 하고, 이 프로토타입이 클래스의 역할을 함
- 프로토타입을 만들고 new 연산자를 이용해 새로운 객체를 만들어낼 수 있음

<br/><br/>
> Section 4

### 주소 문자열과 요청 파라미터

#### 주소 문자열을 구분할 때 사용하는 URL 모듈
- 일반 문자열을 URL 객체로 만들거나 URL 객체를 일반 문자열로 변환
- parse() : 주소 문자열을 파싱하여 URL 객체를 만들어 준다.
- format() :  URL 객체를 주소 문자열로 변환한다.
```
var url = require("url");
var urlStr = "https://naver.com";

var curUrl = url.parse(urlStr);
console.dir(curUrl);
```

### 이벤트
- 비동기 방식으로 처리하기 위해 한 쪽에서 다른 쪽으로 데이터 전달
- EventEmitter 사용
- 한 쪽에서 이벤트를 emit으로 보내고 다른 쪽에서 리스너를 등록하여 on으로 받음

### 파일 다루기 (buffer.js 참고)
**readFile로 읽고 writeFile로 쓰기**

- readFile(filename, encoding, callback) : 비동기로 파일 읽기
- readFileSync(filename, encoding) : 동기로 파일 읽기
- writeFile(filename, data, encoding, callback) : 비동기로 파일 쓰기
- writeFile(filename, data, encoding) : 동기로 파일 쓰기

<br/>

**open, read, write, close 등의 메소드가 사용됨**

- open(path, flags, mode, callback) : 파일 열기
- read(fd, buffer, offset, length, position, callback) : 지정한 부분의 파일 내용을 읽어 들임
- write(fd, buffer, offset, length, position, callback) : 파일의 지정한 부분에 데이터를 씀
- close(fd, callback) : 파일을 닫아줌




