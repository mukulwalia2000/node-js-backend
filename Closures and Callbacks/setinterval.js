// setInterval(function(){
//     console.log("task done again");
// },3000);  // after 3 second print the (task done again) again and again




let id = setInterval(function(){
    console.log("task done again");
},3000);

setTimeout(function(){
    clearInterval(id);
},13000);   // after the 13 second clear the setinterval 