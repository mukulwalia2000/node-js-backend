// var teacher ="mukul";
// function fun(){
//     var teacher = "rohit";
//     console.log(teacher);
// }
// console.log(teacher);

// fun();



// var teacher ="mukul";
// function fun(){
//     var teacher = "rohit";
//     console.log(teacher);
// }

// fun();
// console.log(teacher);





// var teacher ="mukul";
// function fun(){
//     var teacher = "rohit";
//     teachingAssistant="sanit";
//     console.log(teacher);
//     console.log(teachingAssistant);
// }

// fun();
// console.log(teacher);
// console.log(teachingAssistant);  // autoglobal



// var teacher ="mukul";
// function fun(){
//     var teacher = "rohit";
//     teachingAssistant="sanit";
//     console.log(teacher);
//     console.log(teachingAssistant);
// }
// console.log(teachingAssistant);  // error
// fun();
// console.log(teacher);
// console.log(teachingAssistant);  // autoglobal




var teacher ="mukul";
function fun(){
    console.log(subject);  // undefined
    var teacher = "rohit";
    var subject="javascript";
    teachingAssistant="sanit";
    console.log(teacher);
    console.log(teachingAssistant);
}

fun();
console.log(teacher);
console.log(teachingAssistant);  // autoglobal


