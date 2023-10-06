/**
 * Swap two numbers given below.
 */

// Solution 1. -- Swap with a third variable.

const withVariable = (a, b) => {
    console.log('Before Swap \n a -> %d b-> %d', a, b);
    const temp = a;
    a = b;
    b = temp;
    console.log('After Swap \n a -> %d b-> %d', a, b);
}

// console.log(withVariable(10, 20));

// Solution 2. -- Swap without a third variable.

const withOutVariable = (a, b) => {
    console.log('Before Swap \n a -> %d b-> %d', a, b);
    a = a + b; // 10 20 = 30
    b = a - b; // 30 - 20 = 10;
    a = a - b; // 30 - 10 = 20  
    console.log('After Swap \n a -> %d b-> %d', a, b);
};
// console.log(withOutVariable(10, 20));

// Solution 3 -- Swap without using addition and substraction i.e, (using XOR operator)

const withXor = (a, b) => {
    console.log('Before Swap \n a -> %d b-> %d', a, b);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log('After Swap \n a -> %d b-> %d', a, b);
}

console.log(withXor(3, 5))