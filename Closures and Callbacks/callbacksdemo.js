function fun(x,fn){
    /**
     * x => number
     * fn => callback function
     */

    // some logic
    for(let i=0;i<x;i++){
        console.log(i);
    }
    fn(); // calling the callback function passed
    // some more logic
}

fun(10,function log(){
    // this is the callback function 
    console.log("Custom logger");
});

// fun(20,function(){
//     console.log("anonymous logger");
// });


// let g = function process(){
//     console.log("inside g");
// }

// function gun(){
//     console.log("inside gun");
// }
// fun(10,gun); // passing the function g as a callback
// //  fun(2,g()); // -> fun (2,undefined) 