// function test(){
//     var a = 1;
//     function inside(){
//         console.log("inside is ",a);
//     }
//     inside();
//     console.log(a);
// }
// test();


function exampleFunction() {
    var localVar = "I am local"; // This variable is scoped to exampleFunction
    console.log(localVar); // Accessible here
}

exampleFunction();
console.log(localVar); // Error: localVar is not defined outside the function
