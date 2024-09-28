/**
 * A closure is a combination of a function bundled together with references to its surronding state (The lexical environment).
 */

// Example 1 - A simple example of closure.
function Outer() {
    return function Inner() {
        console.log('This is a simple example of closure.');
    }
}

const Inner = Outer();
Inner();

// Example of sum of two numbers using closure.
function Sum() {
    var x = 1;
    return function Inner() {
        var y = 2;
        const sum = x + y
        console.log(sum);
    }
}
const sum = Sum();
sum();

// Example of counter using closures.

function Counter() {
    var count = 0;
    return function innerCount() {
        count += 1;
        console.log(count)
    }
}

const count = Counter();
console.log('-----------Counter--------------')
count();
count();
count();