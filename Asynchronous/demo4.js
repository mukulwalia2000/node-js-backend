// function process(){
//     setTimeout(function exec(){
//         console.log("Executed some task1");
//     },5000);
//     setTimeout(function exec(){
//         console.log("Executed some task2");
//     },3000);
    
// }
// process();
// setTimeout(function exec(){
//     console.log("Executed some task3");
// },7000);



function process(){
    console.log("process called");
    setTimeout(function exec(){
        console.log("Executed some task1");
    },5000);
    setTimeout(function exec(){
        console.log("Executed some task2");
    },3000);
    
}
process();
for(let i=0;i<10000000000;i++){
    // do nothing
}
setTimeout(function exec(){
    console.log("Executed some task3");
},0);
