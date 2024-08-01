function fetchCustom(url){  // we are mimicing the function
        // Download content of the url
        // this downloading can take sometime,
        // we will download the content from url,and then whatever is the result,we will pass in the callback
        console.log("Starting downloading");
        setTimeout(function process(){
            console.log("Download completed");
            // we are passing the result in the callback
            let response ="Dummy data";
           return response;       
        },3000);
    }
    
    const response = fetchCustom("www.google.com");
    console.log(response);
    
        