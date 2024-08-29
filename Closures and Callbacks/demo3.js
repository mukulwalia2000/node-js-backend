function a(name){
    return function b(){
        console.log(name);
    }
}

const y= a("mukul");
console.log(y);
y();