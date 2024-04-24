const greetings = (name) => {
  console.log(`Hello ${name}`);
};

greetings("Raju");
greetings("Abhi");

var add = require("./calculator1"); // default import common js module

console.log(add(1, 2));

var { add, sub, mul, div } = require("./calculator2"); // named import common js module
console.log(add(8, 9));
console.log(sub(8, 9));
console.log(mul(8, 9));
console.log(div(8, 9));
