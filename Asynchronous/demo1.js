// function process(){
//     console.log("Start");
//     setTimeout(function exec(){
//         console.log("Executed some task");
//     },3000);
//     for(let i=0;i<10000000000;i++)
//     {
//         // some task
//     }
//     console.log("End");
// }
// process();
// console.log("hello");




// function process(){
//     console.log("Start");
//     setTimeout(function exec(){
//         console.log("Executed some task1");
//     },10000);
//     setTimeout(function exec(){
//         console.log("Executed some task2");
//     },5000);
//     for(let i=0;i<10000000000;i++)
//     {
//         // some task
//     }
//     console.log("End");
// }
// process();
// console.log("hello");


function process(){
    console.log("Start");
    setTimeout(function exec(){
        console.log("Executed some task1");
    },5000);
    setTimeout(function exec(){
        console.log("Executed some task2");
    },5000);
    for(let i=0;i<10000000000;i++)
    {
        // some task
    }
    console.log("End");
}
process();
console.log("hello");