/**
 * Flatten a nested array. You must account for varying levels of nesting.
 * 
 * Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
 */

/**
 * 
 * @param {Array} arr - The array to flatten, which can contain nested arrays. 
 * @returns {Array} - A new array containing all elements from the input array, flattened to a single level.
 * 
 * Solution #1
 */

function steamrollArray(arr) {
    const newArry = [];

    const flat = (value) => {
        if (Array.isArray(value)) {
            for (let item of value) {
                flat(item); // Recursively flatten each item
            }
        } else {
            newArry.push(value); // Push non-array values directly to newArry
        }
    };

    flat(arr);
    return newArry; // Return the flattened array
}

// Solution #2
function steamrollArrayWithFor(arr) {
    const flattenedArray = [];

    arr.forEach((item) => {
        if (Array.isArray(item)) {
            // Recursively flatten entries that are arrays
            // and push into the flattenedArray
            flattenedArray.push(...steamrollArrayWithFor(item));
        } else {
            flattenedArray.push(item);
        }
    });
    return flattenedArray;
}

// Solution #3
function steamrollArrayWithSome(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArrayWithSome(flat) : flat;
}


console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArrayWithFor([1, [2], [3, [[4]]]]));
console.log(steamrollArrayWithSome([1, [2], [3, [[4]]]]));