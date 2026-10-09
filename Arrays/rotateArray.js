/**
 * Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place. 
 * Note: Consider the array as circular.
 * 
 * Examples -
 * 
 * Input: arr[] = [1, 2, 3, 4, 5], d = 2 
 * Output: [3, 4, 5, 1, 2]
 * Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
 * 
 * Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3 
 * Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6] 
 * Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
 * 
 * Input: arr[] = [7, 3, 9, 1], d = 9 
 * Output: [3, 9, 1, 7]
 * Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.
 */

/**
 * @param {number[]} arr
 * @param {number} d
 */

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    
    rotateArr(arr, d) {
        // code here
        // Solution is not optimized we can optimize this using performing mod on d by array length. 

        // while (d > 0) {
        //     let item = arr.splice(0, 1);
        //     arr.push(...item);
        //     d--;
        // }

        // This approach is optimized
        d = d % arr.length;
        arr.push(...arr.splice(0, d));

        console.log(arr);
    }
}

let solution = new Solution();
let arr = [1, 2, 3, 4, 5];
solution.rotateArr(arr, 2);