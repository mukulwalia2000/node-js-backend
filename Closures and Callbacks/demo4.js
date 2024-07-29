function fun(){
    let name="mukul";
    function callback(params){
        console.log(college);
        console.log(name);
    }
    return callback;
}
let x=fun();
x();
var college = "IIT";
x();