const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Completed");
    }, 5000);
});

promise
    .then((message) => {
        console.log(message);
    })
    .finally(() => {
        console.log("Cleanup actions");
    });
