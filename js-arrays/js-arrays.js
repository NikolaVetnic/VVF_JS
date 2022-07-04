// 1) Create an array of colours
let clrs = ["gold", "purple", "silver", "jet"];

// 2) Loop through the array using the for loop and log the colour to the console
for (let i = 0; i < clrs.length; i++) {
    console.log(clrs[i]);
}

// 3) Loop through the array using the forEach loop and log the colour to the console
clrs.forEach((c) => console.log(c));

// 4) Write a function that will rotate an array to the right by a certain number of "steps"
const rotate = (arr, num) => {
    if (num > arr.length) {
        throw "num cannot be greater than array length";
    }

    let out = [...arr];
    let tmp = [...arr];

    tmp.splice(0, tmp.length - num);
    out.splice(out.length - num, num);
    out.splice(0, 0, ...tmp);

    return out;
};

try {
    console.log(rotate(clrs, 2));
} catch (err) {
    console.log("Error!");
}

const rotateAlt = (arr, num) => {
    let tmp = [...arr];
    num = num % arr.length;

    for (let i = 0; i < num; i++) {
        let curr = tmp.shift();
        tmp.push(curr);
    }

    return tmp;
};

console.log(rotateAlt(clrs, 2));

// 5) Write a function that uses the native Array .reduce method to sum up an array of numbers, but starting at 50.
const sumUp = (n, start) => {
    let range = (n) => [...Array(n).keys()];
    return range(n + start).reduce((p, q) => p + q, start);
};

console.log("sum : " + sumUp(5, 5));

// 6) Create a function that takes a number as an argument and returns an array...
const getArr = (n) => {
    let range = (n) => [...Array(n).keys()];
    return [...range(n).splice(0, n - 1), ...range(n).reverse()];
};

console.log(getArr(5));

// 7) Write a function zooInventory that takes...
var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]],
];

const zooInfo = (zoo) => {
    let out = zoo.map((el) => el[0] + " the " + el[1][0] + " is " + el[1][1]);
    return out;
};

zooInfo(myZoo);
