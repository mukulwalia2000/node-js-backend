// how can we write a function to download some data from a url, and not use callbacks
// instead use promises ?

function fetchdata(url){
    return new Promise(function(resolve,reject){
        console.log("Starting fetching from ",url);
        setTimeout(function process(){
            let data = "Dummy data";
            console.log("completed Data fetched");
            // Some how we need to return the data ? - TODO
            resolve(data);  // return some data on success
        },4000);
    });
}

fetchdata("www.google.com");

