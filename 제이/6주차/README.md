# 6주차 스터디 : Do it! Node.js 프로그래밍 Section 5

> Section 5

### 웹 서버 만들기
- 노드에 기본으로 들어있는 http 모듈을 사용하여 웹 서버 객체 만듬
```
var http = require("http");
var server = http.createServer();

// 대기
var port = 3000;
server.listen(port, function(){
    console.log("웹서버가 실행되었습니다. 포트번호 : " + port);
});
```

<br/>

- createServer() 메소드로 웹 서버 객체를 만들고 listen() 메소드로 대기
	- listen(port, callback) : 서버를 실행하여 대기
	- close(callback) : 서버를 종료
	
<br/>

- 요청을 받으면 request 이벤트가 발생 write() 메소드를 이용해 응답 전송
    - writeHead(statusCode, statusMessage) : 응답으로 보낼 헤더를 만듬
    - write(chunk, callback) : 응답 본문 데이터 생성
    - end(data, encoding, callback) : 클라이언트로 응답 전송


### 다른 웹사이트 데이터 가져오기
- http 모듈을 사용해 다른 웹사이트의 데이터를 가져와서 필요한 곳에 사용할 수 있음
- [test4.js](https://github.com/aeeazip/UMC_4th_Node/blob/main/6%EC%A3%BC%EC%B0%A8/DoIt_Section5/test4.js) 참조
```
var http = require("http");
var options = {
    host: "www.google.com",
    port: 80,
    path: "/"
};

var req = http.get(options, function(res){
    var resData = "";
    res.on("data", function(chunk){
        resData += chunk;
    });

    res.on("end", function(){
        console.log(resData);
    });
});
```

<br/>

- Post 방식으로 요청할 때는 request() 메소드 사용
- [test5.js](https://github.com/aeeazip/UMC_4th_Node/blob/main/6%EC%A3%BC%EC%B0%A8/DoIt_Section5/test5.js) 참조
```
var resData = "";
var req = http.request(options, function(res){
    res.on("data", function(chunk){
        resData += chunk;
    });

    res.on("end", function(){
        console.log(resData);
    });
});
```

<br/>

### Express로 웹서버 만들기
- Express app 객체의 주요 메소드
    - set(name, value) : 서버 설정을 위한 속성 지정 + get 메소드로 꺼내 확인 가능
    - get(name) : 서버 설정을 위해 지정한 속성을 꺼내 옴
    - use(path, function) : 미들웨어 함수를 사용하도록 함
    - get(path, function) : 특정 path로 요청된 정보를 처리
 
 <br/>
 
- Express app 객체의 주요 속성
    - env : 서버 모드를 설정
    - views : 뷰들이 들어 있는 폴더 또는 폴더 배열을 설정
    - view engine : 디폴트로 사용할 뷰 엔진을 설정

<br/>

- 미들웨어
    - 클라이언트의 요청을 처리함
    - 미들웨어는 중간에 요청을 처리
    - 라우터는 요청 path에 따라 분기하여 처리
    
 <br/>

- Express 요청 객체에 추가한 메소드
    - query : 클라이언트에서 GET 방식으로 전송한 요청 파라미터를 확인
    - body : 클라이언트에서 POST 방식으로 전송한 요청 파라미터를 확인 (단 body-parser와 같은 외장 모듈 사용)
    - header(name) : 헤더를 확인
    
    ex) 주소 문자열 : http://localhost:3000/?name=chaewon
    
    → `[req.query.name](http://req.query.name) = chaewon`

