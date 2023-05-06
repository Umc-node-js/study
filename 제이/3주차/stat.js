// 하나의 모듈이 여려개의 값을 반환하는 예제
const pi = 3.14;
const mean = (arr) => {
  if (arr.length == 0) return 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

module.exports = {
  // key : value
  pi: pi,
  mean: mean,
};
