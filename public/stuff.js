//One method to export

// const counter = (arr) => {
//   return "This array has " + arr.length + " elements";
// };
// const adder = (a, b) => {
//   return `Sum is ${a + b}`;
// };
// const pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//Second method to export
// module.exports.counter = (arr) => {
//   return "This array has " + arr.length + " elements";
// };
// module.exports.adder = (a, b) => {
//   return `Sum is ${a + b}`;
// };
// module.exports.pi = 3.14;

//Third method to export

const counter = (arr) => {
  return "This array has " + arr.length + " elements";
};
const adder = (a, b) => {
  return `Sum is ${a + b}`;
};
const pi = 3.14;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi,
};
