# 7주차 스터디 : Rest API

## Node와 MySQL 연동

### 필요한 패키지 설치
```
npm init
npm install express cors path body-parser mysql2   // 필요한 패키지들 설치
```

### 데이터베이스 연결 정보 : database.json
- host : host name 값 (127.0.0.1 = localhost)
- user : user 이름 (default = user)
- password : Store in Vault… 선택해서 입력 or Root password (mysql 생성 시 만든 비번)
- port : port값 (default = 3306)
- database :  defatult 스키마 이름
```
{
    "host" : "localhost",
    "user" : "root",
    "password" : "example",
    "port" : "3306",
    "database" : "mydb"
}
```

### config.json
- java의 getConnection 함수와 같은 역할
- 파일을 모듈화해서 어디서든 connection을 획득할 수 있도록 export 하기
```
const fs = require("fs");

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql2");

// 보안을 위해서 connection 내용을 직접 쓰지 않고
// 다른 파일로 작성해서 변수를 통해 접근하기
// database.json은 꼭 gitignore에 추가!
const connection = mysql.createConnection({
    host:conf.host,
    user:conf.user,
    password:conf.password,
    port:conf.port,
    databse:conf.database
})

connection.connect();

// 어디서든 쓸 수 있도록 module을 export 해주기
module.exports = connection;
```

<br/>

## Controller와 Route
- 하나로 합쳐도 무방

### Route
- 파일은 java의 RequestMapping과 같은 역할
- 특정 요청을 처리하는 “controller.함수명”을 지정

### Controller
- DB 연결 설정 파일인 config.js을 얻어 connection에 담음
- CRUD를 수행하는 함수를 선언
- REQ 요청 값이 있는 경우
    - req body를 사용하는 경우
        ```
        const {nickname, password, email} = req.body;
        const sql = `insert into mydb.user(nickname, password, email) values ('${nickname}', '${password}', '${email}');`
        ```
        
    - req pathvariable을 사용하는 경우
        ```
        const id = req.params.userIdx;
        connection.query("delete from mydb.user where id = ?", [id], (error, rows) => {
            if(error) throw error;
            else if(rows.affectedRows > 0) {
              res.send("User deleted successfully.");
            } else {
              res.status(404).send('User not found.');
            }
        })
        ```
        
  <br/>
  
  ## User API 명세서
  <img src="https://github.com/aeeazip/UMC_4th_Node/assets/97737822/1fbcd1cc-14b6-4712-886a-52d1543769cd" width="800" height="300" />
  
	