let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise 1 resolved");
    }, 1000);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise 2 resolved");
    }, 2000);
});

Promise.all([promise1, promise2]).then(function(values) {
    console.log(values); // ["Promise 1 resolved", "Promise 2 resolved"]
});
