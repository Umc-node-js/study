const getMen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("chicken"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("${hen} => egg"), 1000);
  });

const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("${egg} => cook"), 1000);
  });

getMen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    // 계란을 받아오는데 실패해도 문제 없음
    return "egg fail";
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
