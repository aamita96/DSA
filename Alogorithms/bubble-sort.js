/**
 * Ques 1- Implement bubble sort in javascript.
 * Write a function to Sort the given array nums in ascending order. 
 * 
 * [9, 5, 6, 1, 0]
 *  ⬆  ⬆
 * compare two elements in a loop at a time if finds greater then swap the elements.
 * [5, 9, 6, 1, 0]
 *     ⬆  ⬆
 * [5, 6, 9, 1, 0]
 *        ⬆  ⬆
 * [5, 9, 1, 9, 0]
 *           ⬆  ⬆
 * [5, 6, 1, 0, 9]
 *  ⬆  ⬆
 * 
 * comparison will continue and swap will be performed if element find greater until the lenght of input array. 
 */

// Input
const input1 = [8, 9, 5, 6458, 100, 12, 1];
const input2 = [9, 5, 6, 1, 0];

// Outputs

// Output 1
// [1, 5, 8, 9, 12, 100, 6458];
// Output 2
// [0,1,5,6,9]

const bubbleSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // let j =0; j < n-1; j++ // This will do the job as well but above condition (n - i - 1) used is a bit optimized.
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort(input2));