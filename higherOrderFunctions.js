const numArr = [1, 2, 3, 4, 5, 6];

// Write a function that will take this array as an argument and return square of each element.

function square(arr) {
    const elemSqr = [];
    for (const elm of arr) {
        elemSqr.push(elm * elm);
    }
    return elemSqr;
}

console.log(square(numArr));

/**
 * Higher order functions are the functions that operates on another function.
 * A higher-order function is a function that takes a function as an argument or returns a function in Javascript.
 */

// forEach - method calls a function for each element in an array.
// The forEach() method does not execute the function for empty elements.
console.log('forEach example ->');
numArr.forEach((value) => console.log(value * value));

// map - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// The map() method does not change the original array.
console.log('Map example ->', numArr.map(num => num * num));

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

const conversionRateForDollar = 82.88;
console.log('Inr to Dollar conversions', transactions.map(transaction => Number((transaction / conversionRateForDollar).toFixed(2))));

/**
 * filter -  method creates a new array filled with elements that pass a test provided by a function.
 * The filter() method does not execute the function for empty elements.
 * The filter() method does not change the original array.

 * Filter returns a new Array it will return all those elements that matches the specific condition.
 * if the conditions is true it will return the element for that condition and if it is false it will discard that element.
 */

const numbers = [2, 3, 5, 8, 9, 7, 6, 45, 66, 67, 88, 56];

console.log('filter even numbers example ->', numbers.filter(value => value % 2 === 0));

console.log('filtering out all the credited transactions -> ', transactions.filter(amt => amt > 0));

// Chaining of functions together

const arrObj = [
    { name: 'A', age: 14, gender: 'M' },
    { name: 'B', age: 34, gender: 'M' },
    { name: 'C', age: 24, gender: 'F' },
    { name: 'D', age: 44, gender: 'F' },
    { name: 'E', age: 28, gender: 'M' },
    { name: 'I', age: 36, gender: 'F' },
    { name: 'G', age: 47, gender: 'M' }
];

// Age of all the mens (Males)

const ageOfMales = arrObj.filter(member => member.gender === 'M').map(mens => mens.age);

console.log(ageOfMales);

/**
 * find - method returns the value of the first element that passes a test.
 * This method returns undefined if no elements are found.
 * This method does not execute the function for empty elements.
 * This  method does not change the original array.
 */

const firstWithdrawl = transactions.find(amt => amt < 0);

console.log('find example ->', firstWithdrawl);

/**
 * some - method checks if any array elements pass a test (provided as a callback function).
 * This method executes the callback function once for each array element.
 * This method returns true (and stops) if the function returns true for one of the array elements.
 * This method returns false if the function returns false for all of the array elements.
 * This method does not execute the function for empty array elements.
 * This method does not change the original array. 
 */

const ages = [3, 10, 18, 20];
const alienAges = [-3, -10, -18, -20];
console.log('Some example ->', ages.some(age => age < 18)); // True

/**
 * every - method executes a function for each array element.
 * This method returns true if the function returns true for all elements.
 * This method returns false if the function returns false for one element.
 * This method does not execute the function for empty elements.
 * This method does not change the original array.
 */

console.log('Every example -> ', ages.every(age => age > 18)); // false
console.log('Every another example ->', alienAges.every(age => age < 0)); // true

/**
 * reduce - method executes a reducer function for array element.
 * This method returns a single value: the function's accumulated result.
 * This method does not execute the function for empty array elements.
 * This method does not change the original array.
 */
const arr = [1, 2, 3, 4, 5];
const balance = transactions.reduce((prevVal, currentVal) => prevVal + currentVal, 0);

console.log('reduce example -> ', balance);
console.log('Total sum should be 15 | reduce example -> ', arr.reduce((pre, curr) => pre + curr, 0)); // 15
console.log('Multiplication of all values | reduce example -> ', arr.reduce((acc, value) => acc * value, 1)); // 120