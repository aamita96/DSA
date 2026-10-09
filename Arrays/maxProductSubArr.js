/**
 * Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[]. 
 * Note: It is guaranteed that the output fits in a 32-bit integer.
 * 
 * Examples - 
 * 
 * Input: arr[] = [-2, 6, -3, -10, 0, 2]
 * Output: 180 
 * Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
 * 
 * Input: arr[] = [-1, -3, -10, 0, 6]
 * Output: 30 
 * Explanation: The subarray with maximum product is {-3, -10} with product = (-3) * (-10) = 30.
 * 
 * Input: arr[] = [2, 3, 4]
 * Output: 24 
 * Explanation: For an array with all positive elements, the result is product of all elements. 
 */

/**
 * @param {number[]} arr
 * @return {number}
 */

class Solution {
    // This is a brute force approach which has time complexity of O(n^2) which is not an optimized approach.
    maxProduct(arr) {
        // code here
        let max = Number.NEGATIVE_INFINITY;

        for (let i = 0; i < arr.length; i++) {
            let prod = 1;
            for (let j = i; j < arr.length; j++) {

                prod *= arr[j];

                if (max < prod) {
                    max = prod;
                }
            }
        }
        console.log(max);
    }

    maxProductWithKadanes(arr) {
        let currMin = arr[0];
        let currMax = arr[0];
        let maxProd = arr[0];

        for (let i = 1; i < arr.length; i++) {
            // Temporary variable to store the maximum product ending at the current index.
            const temp = Math.max(arr[i], arr[i] * currMax, arr[i] * currMin);

            // Update the minimum product ending at the current index.
            currMin = Math.min(arr[i], arr[i] * currMax, arr[i] * currMin);

            // Update the maximum product ending at the current index.
            currMax = temp;

            maxProd = Math.max(maxProd, currMax);
        }

        console.log(maxProd);
        // return res;
    }

    maxProductWithTwoPointer(arr) {
        let maxProd = Number.NEGATIVE_INFINITY;
        let n = arr.length;

        let leftToRight = 1;
        let rightToLeft = 1;

        for (let i = 0, j = n; i < n; i++) {
            if (leftToRight === 0) leftToRight = 1;
            if (rightToLeft === 0) rightToLeft = 1;

            // Calculate product from index left to right
            leftToRight *= arr[i];

            j = n - i - 1;
            rightToLeft *= arr[j];
            maxProd = Math.max(leftToRight, rightToLeft, maxProd);
        }
        console.log(maxProd);
    }
}

// let arr = [-2, 6, -3, -10, 0, 2];
let arr = [-1, -3, -10, 0, 6];
// let arr = [2, 3, 4];
let solution = new Solution();
// solution.maxProduct(arr);
// solution.maxProductWithKadanes(arr);
solution.maxProductWithTwoPointer(arr);