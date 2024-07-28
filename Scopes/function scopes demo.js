function test(){
    var a = 1;
    function inside(){
        console.log("inside is ",a);
    }
    inside();
    console.log(a);
}
test();