const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed");
    }, 1000);
});

promise
    .then((message) => {
        console.log(message);
    })
    .finally(() => {
        console.log("Cleanup actions");
    });
