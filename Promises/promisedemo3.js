// function demo1(){
//     return new Promise(function(resolve, reject){
//         console.log("hi");
//         setTimeout(function(){
//             console.log("world");
//             resolve("hi everyone");
//         },10000);
//         console.log("by");
//     });
// }

// x=demo1();
// console.log(x);


function demo2(val){
    return new Promise(function (resolve, reject){
        console.log("Start");
        setTimeout(function process(){
            console.log("End");
            if(val%2==0){
                // even number
                resolve("even");
            } else{
                // odd number
                reject("odd");  
            }
        },1000);
        console.log("Somewhere");
});
}
a= demo2(4);
console.log(a);