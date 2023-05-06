process.on("trick", function(count){
    console.log("trick 이벤트 발생 : " + count);
});

setTimeout(function(){
    console.log("2초 후에 실행되었음");
    process.emit("trick", "2");
}, 2000);