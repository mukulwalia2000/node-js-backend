// function fetchCustom(url,fn){  // we are mimicing the function
//     // Download content of the url
//     // this downloading can take sometime,
//     // we will download the content from url,and then whatever is the result,we will pass in the callback
//     console.log("Starting downloading");
//     setTimeout(function process(){
//         console.log("Download completed");
//         // we are passing the result in the callback
//         let response ="Dummy data";
//         fn(response);
//         console.log("Ending the function");
//     },3000);
// }

// fetchCustom("www.google.com",function downloadcallback(response){
//     console.log("Downloading response is :",response);
// });


// Tasks:
// 1. Create a function called fetchCustom which takes two parameters, url and fn
// 2. Inside the function, download the content of the url
// 3. write a function to save that downloaded data in a file and return the filename
// 4. pass the filename in the callback function
// 5. write the function to upload the file written i previous step to a new url
function fetchCustom(url,fn){
    //download content of url 
    // it takes 3 sec to download
    //we will download the content from the url and pass it to the callback.
    console.log("start downloading");
    setTimeout(function process(){
        console.log("Download completed");
        let response="Dummy Data";
        fn(response);
       
    },3000);

}

function writefile(data,fn)
{
    console.log("started writing  data",data);
    setTimeout(function process(){
        console.log("writing completed");    
        let filename="output.txt";
        fn(filename);
    },4000);
}

function uploadfile(filename,newurl,fn)
{
    console.log("started uploading");
    setTimeout(function process(){
        console.log(filename,"upload completed on ",newurl);
        let uploadResponse="success";
        fn(uploadResponse);
    },2000);
}
fetchCustom('www.google.com',function downloadCallback(response){
    console.log("Download response is:",response);
    
    writefile(response,function writecallback(filenameResponse){
        console.log("New file written is",filenameResponse);
        uploadfile(filenameResponse,'www.googledrive.com',function uploadcallback(uploadResponse){
            console.log("successfully uploaded",uploadResponse);
            console.log("ending the function");
        });
    });
});
