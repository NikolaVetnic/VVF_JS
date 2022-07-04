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
var outside_var = "WORLD";

function foo(start) {
    var inner_var = "Will not work...";

    for (let i = 0; i < start; i++) {
        var curr_var = i * 2;
        let curr_let = i * 3;
        console.log("curr_var : " + curr_var + " | curr_let : " + curr_let);
    }

    console.log("for_end");
    console.log("curr_var : " + curr_var);
    // console.log("curr_let : " + curr_let);
    console.log("Hello, " + outside_var + "!");
}

// console.log(inner_var);

foo(5);
