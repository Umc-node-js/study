# 3주차 스터디 : Node.js 환경셋팅과 모듈

### 1. NPM이란?
- Node Package Manager의 약자로 nodejs의 모듈 관리를 위해 사용
- npm init (초기화) → package.json 파일 생성
```
package name : 패키지명

version : 패키지 버전 (default = 1.0.0)

description : 패키지 설명

entry point : 시작 파일 명 (default = index.js)

test command : npm test를 호출할 때마다 실행되는 명령

git repository : 패키지가 저장되어 있는 깃 저장소 url

keywords : 패키지 키워드

author : 원작자의 이름

license : 패키지 사용에 대한 라이선스 (default = ISC)
```

<br/>

- package.json : 프로젝트 정보와 의존성을 관리하는 문서

<img src="https://user-images.githubusercontent.com/97737822/235308528-474ad98d-0cf2-4309-819c-2e33ee57a1c6.png" width="650" height="350" />


<br/>

### 2. Node 모듈

- module 생성
    - module.exports = 생성 모듈 선언
    - const 변수 = require(”경로”) 선언

- Core module 생성
    - readline (입출력)
    - file system

<br/>

### 3. NPM 패키지
    
- ex) express, readline-sync
- express 설치 : npm install express → 오래전부터 사용(안정적)
    
- readline-sync 설치 : npm install readline-sync
  - node_modules 생성
  - package-lock.json 생성 : 원하는 버전을 다운받을 수 있도록 도와줌
  - package.json의 dependencies에 readline-sync가 추가됨
  
> readline-sync 설치 예제
```
// readline-sync
const readline = require("readline-sync");

const name = readline.question("What is your name?\n");
console.log(name);
```
  
<br/>

### 4. Module 생성 예제
- [index.js](https://github.com/aeeazip/UMC_Node_Assignment/blob/main/3%EC%A3%BC%EC%B0%A8/index.js)
- [add.js](https://github.com/aeeazip/UMC_Node_Assignment/blob/main/3%EC%A3%BC%EC%B0%A8/add.js)
- [mult.js](https://github.com/aeeazip/UMC_Node_Assignment/blob/main/3%EC%A3%BC%EC%B0%A8/mult.js)
- [stat.js](https://github.com/aeeazip/UMC_Node_Assignment/blob/main/3%EC%A3%BC%EC%B0%A8/stat.js)

<br/>

### 5. Core Module 생성 예제

> readline 설치 예제
```
const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? ", (answer) => {
  console.log("Hello " + answer);

  rl.close();
});
```
  
<br/>

> file system 설치 예제
```
// file system
const fs = require("fs");

// 텍스트 파일 생성
// fs.writeFileSync("./hello.txt", "This is an UMC Assignment!");

// 파일 읽기
const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
console.log(data);

// 이어쓰기
fs.appendFileSync("./hello.txt", "\nWelcome!");
```
  