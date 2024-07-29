// const add = (function exec(){
//     let count = 0;
//     return function process(){
//         count++;
//         return count;
//     }
// })();
// console.log(add()); // 1
// console.log(add());// 2
// console.log(add()); // 3




const add = (function exec(){
    let count = 0;
    return function process(){
        count++;
        return count;
    }
})();
console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3