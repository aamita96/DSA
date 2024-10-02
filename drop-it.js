/**
 * 
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
 * 
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

// Solution #1
function dropElements(arr, func) {
    for(const item of arr) {
        if(func(item)) {
            const index = arr.indexOf(item);
            return arr.slice(index);
        }
    }
    return [];
}

// Solution #2 (more optimized)
function dropElementsOptimized(arr, func) {
    const index = arr.findIndex(func);
    return arr.slice(index >= 0 ? index : arr.length);
}

// Solution #3 (shift way)
function dropElementsShiftWay(arr, func) {
    while(arr.length > 0 && !func(arr[0])) {
        arr.shift();
    }
    return arr;
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
console.log(dropElementsOptimized([1, 2, 3, 9, 2], function(n) {return n > 2;}));
console.log(dropElementsShiftWay([1, 2, 3, 9, 2], function(n) {return n > 2;}));
