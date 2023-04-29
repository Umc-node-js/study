// //module
// // library dependency, package
// const add = require('./add');


// const result = add(1, 2);
// const mult = require('./mult');
// console.log(result);
// console.log(mult(5, 10));
// const { read } = require("fs");
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// rl.question("whatisyourname", (answer) => {
//     console.log(`hello ${answer}`)
//     rl.close();
// })

//const fs = require("fs");
//fs.writeFileSync("./hello.txt", "hello jinny");
//파일을 작성하는데 sync하게 한다. 동기화?

//const data = fs.readFileSync("./hello.txt", { encoding: "utf-8" });
//fs.appendFileSync("./hello.txt", " \n\nwelcome");
//console.log(data);

//fs.readdirSync(".");

const readline = require('readline-sync');

console.log(readline.question("what is your name ? "));