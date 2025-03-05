// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was-
// hello     world    my    name   is       raman


// After the program runs, the output should be-
// hello world my name is raman




//2-----
// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)



// 3--------
/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
}

module.exports = wait;




// 4-------
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
}

module.exports = sleep;



// 5---------

/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;




// 6-------
/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {

}

function wait2(t) {

}

function wait3(t) {

}

function calculateTime(t1, t2, t3) {

}

module.exports = calculateTime;