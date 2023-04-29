const add = (a, b) => {
    return a + b
};
module.exports = add;

const stat = require('./stat');
console.log(stat.pi);
console.log(stat.mean([1, 2, 3, 4, 5]));