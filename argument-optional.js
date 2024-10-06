/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. 
 * For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function. 
 * Calling this returned function with a single argument will then return the sum:
 * 
 * var sumTwoAnd = addTogether(2);
 * sumTwoAnd(3) returns 5. 
 * 
 * If either argument isn't a valid number, return undefined.
 * 
 * HINT: This function solution uses closure concpet in javascript.  
 */

// Solution #1
function addTogether() {
    const [first, second] = arguments;

    if (typeof first === 'number') {
        if (typeof second === 'number') return first + second;
        if (arguments.length > 1) return (second) => addTogether(first, second);
    }
}

// Solution #2
function addTogether2() {
    const len = arguments.length;
    const first = arguments[0];
    const second = arguments[1];

    const isNum = function (arg) { return Number.isFinite(arg); }

    if (len === 1 && isNum(first)) {
        return function (x) {
            if (isNum(x)) {
                return first + x;
            }
        }
    }
    else if (len === 2 && isNum(first) && isNum(second)) {
        return first + second;
    }
}

// console.log(addTogether2("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether2(2)(6));