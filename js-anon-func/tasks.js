// 1) Using the built-in map array function and an anonymous function, square all items in a number array
[0, 1, 1, 2, 3, , 5, 8, 13, 21]
    .map((i) => i * i)
    .forEach((i) => console.log(i));

// 2) Write an IIFE function using an anonymous function which sums two numbers and logs the sum out to the console
((p, q) => {
    console.log(p + q);
})(34, 55);

// 3) Make this function an arrow function...
const timesTwo = (a) => console.log(a * 2);
timesTwo(101);
