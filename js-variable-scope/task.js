/*
 * 1) Create a function which has a for loop in it. Declare
 * a variable with var inside the for loop. Log the variable
 * to the console after the loop. What happened?
 * =-=-=-= curr was hoisted to the top of its code block, ie. the
 * function foo() and so is visible even outside its for loop.
 *
 * 2) Add a variable declared with let to the for loop. Log the
 * variable to the console after the loop. What happened?
 * =-=-=-= variables declared with let or const are not hoisted.
 *
 * 3) Create a variable outside of the function.  Log the variable
 * to the console inside the function. What happened?
 * =-=-=-= variable declared on top level is visible in sub-blocks.
 *
 * 4) Create a variable inside the function.  Log the variable to
 * the console outside the function. What happened?
 * =-=-=-= variable is not visible outside the function.
 */
var outsideVar = "WORLD";

function foo(start) {
    var innerVar = "Will not work...";

    for (let i = 0; i < start; i++) {
        var currVar = i * 2;
        let currLet = i * 3;
        console.log("currVar : " + currVar + " | currLet : " + currLet);
    }

    console.log("FOR end");
    console.log("currVar : " + currVar);
    // console.log("currLet : " + currLet);
    console.log("Hello, " + outsideVar + "!");
}

// console.log(innerVar);

foo(5);
