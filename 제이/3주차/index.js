// readline
/*
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
  console.log("Hello " + answer);

  rl.close();
});
*/

// file system
/*
const fs = require("fs");

// 텍스트 파일 생성
// fs.writeFileSync("./hello.txt", "This is an UMC Assignment!");

// 파일 읽기
const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
console.log(data);

// 이어쓰기
fs.appendFileSync("./hello.txt", "\nWelcome!");
*/

// readline-sync
const readline = require("readline-sync");

const name = readline.question("What is your name?\n");
console.log(name);
