// fun();                             
// function fun(){
//     console.log("Hello");
// }

// normal function declaration
// function is hoisted

// test();
// var test=function(){
//     console.log("Hello");
// }

// function expression
// this function is not hoisted



// This will throw an error because the function is not yet defined
greet(); // Error: greet is not a function

const greet = function() {
    console.log('Hi there!');
};
