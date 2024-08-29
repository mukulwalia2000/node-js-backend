function a(name){
    return function b(){
        console.log(name);
    }
}

const x= a("mukul");
console.log(x);
x();