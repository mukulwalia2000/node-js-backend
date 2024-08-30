function test(name){
    return function b(){
        console.log(name);
    }
}

const x= test("mukul");
console.log(x);
x();