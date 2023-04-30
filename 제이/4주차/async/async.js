// async & await
// clear style of using promise

// 1. async
function fecthUser() {
  // do network request in 10 sec...
  // return 'ellie';
  return new Promise((resolve, reject) => {
    resolve("ellie");
  });
}

/*
- async 키워드를 붙여주면 위의 함수와 같은 기능 수행
- async 키워드만 붙여도 코드 블럭이 자동으로 promise로 변경

async function fetchUser(){
    // do network request in 10 sec...
    return 'ellie';
}
*/

// 비동기 처리를 해주지 않으면
// 사용자의 데이터를 받아올 때까지 10초가 소요
// 사용자는 10초간 텅 빈 웹 페이지를 봐야 함
const user = fetchUser();
user.then(console.log); // ellie 출력
console.log(user);

// 2. await
function delay(ms) {
  // 정해진 ms가 지나면 resolve를 호출
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  // 3초가 지나면 resolve 호출
  // await 키워드 사용 : delay가 끝날 때까지 기다림 -> apple 리턴
  await delay(1000);
  return "apple";
}

async function getBanana() {
  // 3초가 지나면 resolve 호출
  // await 키워드 사용 : delay가 끝날 때까지 기다림 -> banana 리턴
  await delay(2000);
  return "banana";
}

/*
- 위와 동일하지만 Promise를 쓰는 함수
function getBanana(){
    return delay(3000)
    .then(() => 'banana');
}
*/

/*
- 콜백 지옥 예제
- 아래와 같은 기능을 수행하는 함수
function pickFruits() {
  // promise를 이용한 코드
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}
*/

// async + await을 활용
// 병렬적으로 사과와 바나나를 동시에 따서 수행
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // 프로미스 배열을 전달하면 모든 프로미스가
  // 병렬적으로 다 닫을때까지 모아줌
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

// 어떤 것이든 상관없이 먼저 따지는 과일을 출력하는 함수
function pickOnlyOne() {
  // 배열 중 값이 먼저 리턴되는 것을 출력
  // 사과는 1초, 바나나는 2초
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
