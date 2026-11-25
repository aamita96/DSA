/**
 * For polyfill reference - 
 * https://dev.to/devsmitra/javascript-promise-methods-with-polyfill-example-a-cheat-sheet-for-developer-2h0e
 */
// 1. Promise.all
// Promise.all() — Fulfills when all fulfill; rejects as soon as a rejection is observed.

// Example:
// const promises = [1, 2, 3].map((item) => Promise.resolve(item));
// Promise.all(promises).then(console.log); // [1, 2, 3]

// Polyfill Example: 
function all(promises) {
    return new Promise((resolve, reject) => {
        let result = [];
        let count = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(res => {
                result[index] = res;
                count++;
                if (count === promises.length)
                    resolve(result);
            }).catch(err => {
                reject(err);
            });
        })
    });
}

// 2. Promise.race
// Promise.race() — First settled promise wins, success or failure.

// Example:
const promises = [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)];
// Promise.race(promises).then(console.log); // 1

// Polyfill Example:
function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise) =>
            Promise.resolve(promise).then(resolve, reject)
        );
    })
}

race(promises).then(console.log);

// 3. Promise.allSettled
// Promise.allSettled() — Waits for every promise to settle.

// Example:
const promisesExampleForSettled = [Promise.resolve(1), Promise.reject(2), Promise.resolve(3)];
Promise.allSettled(promisesExampleForSettled).then(console.log); // [{status: "fulfilled", value: 1}, {status: "rejected", reason: 2}, {status: "fulfilled", value: 3}]

// Polyfill Example:
function allSettled(promises) {
    return new Promise((resolve) => {
        const result = [];
        let count = 0;
        const handleResult = (value, index, status) => {
            result[index] = { status, value };
            count++;

            if (count === promises.length)
                resolve(result);
        }

        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(
                (res) => handleResult(res, i, 'fulfilled'),
                (err) => handleResult(err, i, 'rejected')
            );
        });
    })
}

allSettled(promisesExampleForSettled).then(console.log)

// 4. Promise.any
// Promise.any() — First fulfilled promise wins; rejects only if all promises reject.