//async await -> 체이닝을 하는 것보단 프로미스+api 를 이용하여 더 편하게 한다.
//1 async
function fetchUser() {
    //return 'jinny';

    return new Promise((resolve, reject) => {
        resolve('jinny');
    })
    //동기적 약속, 비동기적 실행 방법
}

const user = fetchUser();
user.then(console.log);
console.log(user);
//비동기적 처리가 필요함

//더 간편한 비동기처리
async function fetchUser() {
    return 'jinny';
}

//2.await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function getApple() {
    await delay(3000);
    return '🍎';
}
async function getBanana() {
    await delay(3000);
    return '🍌';
}
function getBanana() {
    return delay(3000);
}// 체이닝 말고 동기적인 것 같이 비동기적으로 쓰는게 좋음
function pickFruits() {
    return getApple()
        .then(apple => {
            return getBanana.then(banana => `${apple}` + `${banana}`);
        })
}
//체이닝 중독

async function pickFruits() {
    try {
        const apple = await getApple();
        const banana = await getBanana();
        //순차적으로 비동기 처리하면 각각 1초가 걸려 비효율 적임
    } catch { }
    return `${apple}` + `${banana}`
}
pickFruits().then(console.log)

async function pickFruits() {
    //프로미스 안에 있는 코드브록이 바로 실행 됨
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise();
    const banana = await bananaPromise();
    // 병렬적 비동기 처리 방법
    return `${apple}` + `${banana}`
}

//3.유용한 프로미스 api
async function pickFruits() {
    return Promise.all(getApple(), getBanana())
        .then(fruits => fruits.join('+'));
}
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana]);
}//가장 먼저 리턴하는 값부터 전달 됨

pickOnlyOne().then(console.log);