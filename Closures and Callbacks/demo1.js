function todo(task){
    console.log("Start of todo");
    setTimeout(function fun(){
        console.log("Completed",task);
    },2000);
    console.log("End of todo");
}

console.log("Starting");
todo("assignments");
console.log("Ending");
