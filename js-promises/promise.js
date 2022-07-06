const promise0 = new Promise((resolve, reject) => {
    setTimeout(function () {
        Math.random() < 0.5 ? resolve() : reject(new Error("error"));
    }, 250);
});

promise0.then(
    (value) => console.log("Success!"),
    (error) => console.log("Error!")
);

const promise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        Math.random() < 0.5 ? resolve("SUCCESS") : reject(new Error("FAILED"));
    }, 250);
});

promise1.then(
    (result) => console.log(result),
    (error) => console.log(error)
);
