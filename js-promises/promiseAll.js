let promise0 = new Promise((resolve, reject) => {
    setTimeout(resolve, 250, "zero");
});

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "one");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "two");
});

// useful in situations where one should wait for all the related promises to resolve before proceeding
Promise.all([promise0, promise1, promise2]).then((values) => {
    console.log(values);
});
