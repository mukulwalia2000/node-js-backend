function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("going to start downloading");
        setTimeout(function process(){
            let data ="Dummy download data";
            console.log("download completed");
            resolve(data);
        },10000);
        console.log("Timer to mimic download started");
    });
}

console.log("Starting the program");
console.log("we are expecting to mimic a downloader");
x = fetchdata("www.google.com");
console.log("New promise object created successfully, but downloading still going on");
console.log(x);