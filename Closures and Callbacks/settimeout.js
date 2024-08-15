// setTimeout(function execute(){
//     // Your code here
//     console.log('Hello World');
// },4000);   // after 4 second print the hello world


// console.log("start");
// setTimeout(function execute(){
//     // Your code here
//     console.log('Hello World');
// },4000);   // after 4 second print the hello world
// console.log("end");



// console.log("start");
// setTimeout(function execute(){
//     // Your code here
//     console.log('Hello World');
// },0);
// console.log("end");



// let id1 = setTimeout(function execute(){
//     // Your code here
//     console.log('task completed 1');
// },10000);

// let id2 = setTimeout(function execute(){
//     // Your code here
//     console.log('task completed 2');
//     clearTimeout(id1);
// },5000);



const id1 = setTimeout(function execute(){
    // Your code here
    console.log('task completed 1');
},10000);

const id2 = setTimeout(function execute(){
    // Your code here
    console.log('task completed 2');
    clearTimeout(id1);
},5000);



