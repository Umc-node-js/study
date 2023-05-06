// 이벤트 대표 : 프로세스

// 이벤트를 받아서 처리함
// exit 이벤트 발생하면 함수 실행
process.on("exit", function(){
    console.log("exit 이벤트 발생함.");
});

setTimeout(function(){
    console.log("2초 후에 실행되었음");
    process.exit();
}, 2000);

console.log("2초 후에 실행될 것임");