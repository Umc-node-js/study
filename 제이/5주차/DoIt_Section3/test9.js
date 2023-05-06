function add(a, b, callback){
    var result = a + b;
    callback(result);

    // history 연산 과정 출력
    var history = function(){
        return a + "+" + b + "=" + result;
    };

    return history;
}

var add_history = add(10, 10, function(result){
    console.log("result : " + result);
});

console.log("add_history의 자료형 : " + typeof(add_history));
