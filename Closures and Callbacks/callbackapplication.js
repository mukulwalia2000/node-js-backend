let arr = [2,3,4,5,6];
let x=arr.map(function process(v,i){
    /**
     * v => value
     * i => index
     */
    console.log(v,i);
    return v*v;
});

console.log(x);
console.log(arr);