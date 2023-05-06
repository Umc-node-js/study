//callback함수
//변수에 함수를 할당할 수 이쓰므로 함수를 호출할 때 파라미터로 다른 함수 전달 가능
//콜백함수를 파라미터로 전달 
function add(a, b) {
    var result = a + b;
    callback(result);
}
add(10, 10, function (result) {
    console.log(result);
})
function add(a, b, callback) {
    var result = a + b;
    callback(result);
    var count = 0;
    var history = function () {
        count += 1;
        return a + b + result
    };
}
var addhis = add(20, 20, function (result) {
    console.log(result);
})

console.log(typeof (addhis));
console.log(addhis);