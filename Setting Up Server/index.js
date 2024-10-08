// using http module (inbuilt given by node) we can setup a basic server
const http = require('http');
const PORT=3000;

/**
 * Http module contains a function called as createServer
 * this createServer function takes a callback as the input
 * Now inside the callback, we get two arguments
 *  1. request -> this argument contains all the details about the incoming request
 *  2. response -> this argument contains functions using which we can prepare the responses
 * 
 * the createServer function returns us the server object

 */

const server = http.createServer(function exec(request,response){

    console.log(request.method);
    if(request.url == '/home'){
        response.end("welcome to home");
    }
    else if(request.url == '/faq'){
        response.end("welcome to faq");
    }
    // console.log(request.url); // this will print the details of the incoming request
    else{
     response.end("hello world");
    }

});

server.listen(PORT,function process(){
    // once the server has started then this callback will be executed
    console.log("Server started on port", PORT);
});