let prms = new Promise((resolve, reject) => {
    setTimeout(function () {
        Math.random() < 0.5 ? resolve() : reject(new Error("error"));
    }, 250);
});

prms.then(
    (value) => console.log("Success!"),
    (error) => console.log("Error!")
);
