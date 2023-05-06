# 4주차 스터디 : JS 콜백 및 동기/비동기 처리

### 1. 비동기 프로그램

- 자바스크립트는 동기적
- hoisting : 변수나 함수 선언이 제일 위로 올라가는 것 (var, function declaration)
- hoising이 된 이후로 우리가 작성한 코드가 하나하나 동기적으로 실행

- 올바른 콜백 함수 예제 : [callback.js](https://github.com/aeeazip/UMC_Node_Assignment/blob/main/4%EC%A3%BC%EC%B0%A8/async/callback.js)
- 콜백 지옥 함수 예제 : [callbackHell.js](https://github.com/aeeazip/UMC_Node_Assignment/blob/main/4%EC%A3%BC%EC%B0%A8/async/callbackHell.js)

<br/>

### 2. Promise

- JS에서 제공하는 비동기를 간편하게 처리할 수 있도록 돕는 오브젝트
- 정해진 기능을 수행하고 (state = pending)
    - 정상적으로 수행 : 성공 메시지 + 처리된 결과값 반환 (state = fulfilled)
    - 에러 발생 : 에러 전달 (state = rejected)
- **`새로운 promise 함수가 만들어질 땐 전달한 executor가 바로 실행된다.`**

- 콜백 지옥 Promise 활용해서 정리 : [callback-to-promise.js](https://github.com/aeeazip/UMC_Node_Assignment/blob/main/4%EC%A3%BC%EC%B0%A8/async/callback-to-promise.js)

<br/>

### 3. Async + Await
    
- 깔끔하게 Promise를 사용할 수 있게 해주는 방법
- await 키워드 사용 : delay가 끝날 때까지 기다림
- Promise.all() : Promise 배열을 전달하면 모든 Promise가 병렬적으로 다 닫을때까지 모아준다.
- Promise.race() : Promise 배열 중 값이 먼저 리턴되는 것을 하나 선택한다.
  
> Promise 내장 함수 예제
```
async function getApple() {
  // 3초가 지나면 resolve 호출
  // await 키워드 사용 : delay가 끝날 때까지 기다림 -> apple 리턴
  await delay(3000);
  return "apple";
}

async function getBanana() {
  // 3초가 지나면 resolve 호출
  // await 키워드 사용 : delay가 끝날 때까지 기다림 -> banana 리턴
  await delay(3000);
  return "banana";
}

// 3. useful Promise APIs
function pickAllFruits(){
    // Promise 배열을 전달하면 모든 Promise가
    // 병렬적으로 다 닫을때까지 모아줌
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);
```
 