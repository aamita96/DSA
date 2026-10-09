// Synchronous = Executes line by line consecutively in a sequential manner.
//               Code that waits for an operation to complete.

// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await


// Synchronous Code
console.log('Synchronous Code\n');

console.log('Task 1');
console.log('Task 2');
console.log('Task 3');

// Output
// Task 1
// Task 2
// Task 3

console.log('-----------------------------')

// Asynchronous Code
console.log('Asynchronous Code\n');

setTimeout(() => console.log('Task 1'), 1000);
console.log('Task 2');
console.log('Task 3');