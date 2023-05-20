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