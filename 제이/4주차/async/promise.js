// Promise is s Javascript object fro asynchronous operation.
// state : pending(수행중일때) -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  // promise가 만들어지는 순간 바로 실행
  // 사용자가 버튼을 눌렀을 때 실행되어야 한다면 이렇게 작성하면 X
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no network")); // 에러 발생!
  }, 2000);
});

// 2. Consumers : then, catch, finally
promise
  .then((value) => {
    // promise 함수가 정상적으로 종료되면 resolve의 값 ellie가 반환
    // value엔 ellie가 담겨있을 것!
    // then을 호출하면 promise를 리턴 -> error 발생한 경우에도 catch문으로 들어감
    console.log(value);
  })
  .catch((error) => {
    // error가 발생한 경우를 처리하는 코드
    console.log(error);
  })
  .finally(() => {
    // 성공 실패 여부와 상관없이 무조건 실행
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // 1
});

// 최종적으로 소요되는 시간 = 2초
fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); // 5
    });
  })
  .then((num) => console.log(num));
