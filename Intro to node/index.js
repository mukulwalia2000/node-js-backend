// const searching = require(__dirname + "/searching.js");
const searching = require('./searching.js');
// import searching from './searching.js';   // can not use it
console.log("Start");
let arr = [5,4,4,8,7,6,5,4,9];
let x=6;
// console.log(searching);  // yeh function ka name print krega

console.log(searching.linear(arr,x));  // yeh value print krega