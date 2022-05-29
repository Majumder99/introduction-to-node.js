// console.log("Hello sourav");
// setTimeout(() => console.log("Four seconds have passed"), 4000);
let time = 0;

let timer = setInterval(() => {
  time += 2;
  console.log(time + " sec has passed");
  if (time > 6) {
    clearInterval(timer);
  }
}, 1000);

console.log(__dirname);
console.log(__filename);
