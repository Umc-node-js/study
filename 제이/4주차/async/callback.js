// Synchronous callback
function printImmediately(print) {
  print();
}

// Asynchronous callback
// print와 얼마정도 timeout하고 싶은지 설정
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting : var, function declaration
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

printImmediately(() => console.log("hello"));
printWithDelay(() => console.log("async callback"), 2000);
