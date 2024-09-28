// Currying in javascript
// Example f(a,b) into f(a)(b)

/* function f(a, b) {
    console.log(a, b);
} */

function f(a) {
    return function (b) {
        console.log(a, b);
    }
}
f(1)(2);

/**
 * Question - Why do we use currying?
 * https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
 * 
 * Answers 
 * 1) To avoid passing same variables again and again.
 * 2) To create higher order functions.
 * 3) To make your functions pure and less prone to errors.
 */


// Question 1 - sum(2)(6)(1)

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log('Question 1 -> ', sum(2)(6)(1));

/**
 * Question 2 - 
 * evaluate("sum")(4)(2) => 6
 * evaluate("multiply")(4)(2) => 8
 * evaluate("divide")(4)(2) => 2
 * evaluate("substract")(4)(2) => 2
 */


function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation === 'sum') return a + b;
            else if (operation === 'multiply') return a * b;
            else if (operation === 'divide') return a / b;
            else if (operation === 'substract') return a - b;
            else return "Invalid operation!";
        }
    }
}

console.log('Question 2 -> ', evaluate('substract')(2)(3));

// We can use above function in another way, which is shown below- 

const mul = evaluate('multiply'); // Initialize it once, so you don't have to initialize it again and again.

console.log('Question 2 ->', mul(3)(2)); // 6
console.log('Question 2 ->', mul(5)(2)); // 10

// Question 3 -> Infinite Currying -> sum(1)(2)(3)(4)........(n)

function sumCurrying(a) {
    return function (b) {
        return b ? sumCurrying(a + b) : a;
    }
}

console.log('Question 3 ->', sumCurrying(2)(3)(4)(6)());

// Question 4 -> Currying vs Partial Application

/**
 * What is a currying function ?
 * Number of nested functions a curried function has depends on the number of arguments it receives,
 * that's what make function a curry.
 */

function partialApp(a) {
    return function (b, c) {
        return a + b + c;
    }
}

// In this case we have 3 arguments but we are returing 2 functions, so this right here is not currying.
console.log('Partial Application example -> ', partialApp(1)(3, 6));

// Question 5 -> Manipulating DOM


// function updateElementText(id) {
//     return function (content) {
//         document.querySelector('#' + id).textContent = content;
//     }
// }

// const updateHeader = updateElementText('heading') // Here we are expecting id is 'heading'.

// updateHeader('Subscribe to my channel!');

// Question 6 -> curry() implementation (Most Important Question of currying series)
// converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
    return function curriedFunc(...args) {
        console.log(args.length)
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}
const simpleSum = (a, b, c) => a + b + c;
const totalSum = curry(simpleSum)

console.log(totalSum(1)(2)(3));