/**
 * Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.
 * 
 * Examples -
 * 
 * Input: arr[] = [8, -8, 9, -9, 10, -11, 12] 
 * Output: 22 
 * Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
 * 
 * Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1] 
 * Output: 23 
 * Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
 * 
 * Input: arr[] = [-1, 40, -14, 7, 6, 5, -4, -1] 
 * Output: 52 
 * Explanation: Circular Subarray [7, 6, 5, -4, -1, -1, 40] has the maximum sum, which is 52.
 */

/**
 * @param {[number[]} arr
* @returns {number}
*/
class Solution {
    // Function to find maximum circular subarray sum.

    // This approach's time complexity is O(n^2) which is expensive and violates the criteria hence we need to improve it.
    circularSubarraySumApproach1(arr) {
        // code here
        let n = arr.length;
        let res = arr[0];

        for (let i = 0; i < n; i++) {
            let currSum = 0;

            // Considering all possible endpoints of the subarray that begins with index i
            for (let j = 0; j < n; j++) {

                // Circular index
                let idx = (i + j) % n;
                currSum += arr[idx];
                res = Math.max(res, currSum);
            }
        }
        console.log(res);
    }

    circularSubarraySumApproach2(arr) {
        // code here
        let totalSum = 0;
        let currMaxSum = 0;
        let currMinSum = 0;
        let maxSum = arr[0];
        let minSum = arr[0];

        for (let i = 0; i < arr.length; i++) {
            // Kadane's to find maximum sum subarray
            currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
            maxSum = Math.max(maxSum, currMaxSum);

            // Kadane's to find maximum sum subarray
            currMinSum = Math.min(currMinSum + arr[i], arr[i]);
            minSum = Math.min(minSum, currMinSum);

            // Sum of all the elements of input array
            totalSum += arr[i];
        }

        let normalSum = maxSum;
        let circularSum = totalSum - minSum;


        if (minSum == totalSum) {
            return normalSum;
        }

        // return Math.max(normalSum, circularSum);
        console.log(Math.max(normalSum, circularSum));
    }
}

const arr = [8, -8, 9, -9, 10, -11, 12];
let solution = new Solution();
// solution.circularSubarraySumApproach1(arr);
solution.circularSubarraySumApproach2(arr);