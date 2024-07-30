function a(name){
    return function b(){
        console.log(name);
    }
}

let x= a("mukul");
console.log(x);
x();