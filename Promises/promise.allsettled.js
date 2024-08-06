const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First");
    }, 1000);
});

const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Second");
    }, 2000);
});

Promise.allSettled([promise1, promise2]).then((results) => {
    console.log(results);
    // [{ status: "fulfilled", value: "First" }, { status: "rejected", reason: "Second" }]
});
