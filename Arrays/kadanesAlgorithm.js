/**
 * Given an integer array arr[]. You need to find the maximum sum of a subarray.
 * 
 * Example - 
 * 
 * Input: arr[] = [2, 3, -8, 7, -1, 2, 3] 
 * Output: 11 
 * Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
 * 
 * Input: arr[] = [-2, -4] 
 * Output: -2 
 * Explanation: The subarray {-2} has the largest sum -2.
 * 
 * Input: arr[] = [5, 4, 1, 7, 8] 
 * Output: 25 
 * Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.
 */

class Solution {
    /**
     * @param {number[]} arr
     * @returns {number}
     */
    // By making all the possible sub array and try to hold the maximum sum from the subarray can lead us to the goal.
    // This approach is actually bit expensive in time complexity as we're doing O(n) * O(n) = O(n^2) N square which is a bit expensive and space complexity is O(1).
    maxSubarraySumApproach2(arr) {
        // Your code here

        let res = Number.NEGATIVE_INFINITY;

        // 
        for (let i = 0; i < arr.length; i++) {
            let sum = 0;
            for (let j = i; j < arr.length; j++) {
                sum += arr[j];

                if (res < sum) {
                    res = sum;
                }
            }

        }

        // return res;
        console.log(res)
    }

    // By using the Kadane's Algorithm we can find the maximum sum of the subarray with the time complexity of O(n).
    maxSubarraySumApproach1(arr) {
        let maxEnding = 0;
        let res = arr[0];

        for (let i = 0; i < arr.length; i++) {
            // Find the Maximum sum ending at index i by either extending the maximum sum subarray ending at index i -1 or by starting a new subarray from index i.
            maxEnding = Math.max(maxEnding + arr[i], arr[i]);

            res = Math.max(res, maxEnding);
        }

        console.log(res);
    }
}

let arr = [2, 3, -8, 7, -1, 2, 3];
// let arr = [-2, -4];
let solution = new Solution();
// solution.maxSubarraySumApproach2(arr);
solution.maxSubarraySumApproach1(arr);