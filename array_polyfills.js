// forEach - returns (value, index, array)
function forEach(array, cb) {
    for (let i = 0; i < array.length; i++) {
        cb(array[i], i, array);
    }
}

Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
}

// map - returns (value, index, array)

function map(array, cb) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(cb(array[i], i, array));
    }
    return newArray;
}

Array.prototype.myMap = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }
    return newArr;
}

// filter - returns (value, index, array)

function filter(array, cb) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (cb(element, i, array)) {
            newArr.push(element);
        }
    }
    return newArr;
}

Array.prototype.myFilter = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}


// reduce - returns (value, index, array), takes initialValue
function reduce(array, cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        if (initialValue == null && i === 0) {
            accumulator = array[i]
        } else {
            accumulator = cb(accumulator, array[i], i, array);
        }
    }
    return accumulator;
}

Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (initialValue == null && i === 0) {
            accumulator = this[i];
        } else {
            accumulator = cb(accumulator, this[i], i, this);
        }
    }
    return accumulator;
}

// some - returns (value, index, array)

function some(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if (cb(array[i], i, array)) return true
    }

    return false;
}
// every - returns (value, index, array)
function every(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if (!cb(array[i], i, array)) return false
    }

    return true;
}

// falt

function falt(array, depth = 1) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (Array.isArray(element) && depth > 0) {
            newArr.push(...falt(element, depth - 1));
        } else {
            newArr.push(element);
        }
    }
    return newArr;
}

// find - returns (value, index, array)

function find(array, cb) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (cb(element, i, array)) return element;
    }
}

const arr = [1, 2, 3, 4];
const arr2D = [[1, 2, 3, 4], [5, 6, [7, 8, 9, [10, 11, [12]]]]];


// console.log(map(arr, value => value + value));
// console.log(arr.myMap(value => value + value));

// console.log(filter(arr, value => value >= 3));
// console.log(arr.myFilter(value => value >= 3));
// console.log(reduce(arr, (acc, cur) => acc + cur));
// console.log(arr.myReduce((acc, cur) => acc + cur));

// console.log(some(arr, (value) => value > 2));
// console.log(every(arr, (value) => value > 0));
// console.log(falt(arr2D, 4));
console.log(find(arr, (value => value > 1)));