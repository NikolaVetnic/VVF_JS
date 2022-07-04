let prms0 = new Promise((resolve, reject) => {
    setTimeout(resolve, 250, "zero");
});

let prms1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one");
});

let prms2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "two");
});

// useful in situations where one should wait for all the related promises to resolve before proceeding
Promise.all([prms0, prms1, prms2]).then((values) => {
    console.log(values);
});
