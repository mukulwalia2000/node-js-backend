let promise = new Promise(function(resolve, reject) {
    resolve(10);
});

promise
    .then(function(result) {
        console.log(result); // 10
        return result * 2;
    })
    .then(function(result) {
        console.log(result); // 20
        return result * 3;
    })
    .then(function(result) {
        console.log(result); // 60
    });
