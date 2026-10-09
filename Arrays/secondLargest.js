/**
 * Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1. 
 * Note: The second largest element should not be equal to the largest element.
 * 
 * Examples -
 * Input: arr[] = [12, 35, 1, 10, 34, 1] 
 * Output: 34 
 * Explanation: The largest element of the array is 35 and the second largest element is 34.
 * 
 * Input: arr[] = [10, 5, 10] 
 * Output: 5 
 * Explanation: The largest element of the array is 10 and the second largest element is 5.
 * 
 * Input: arr[] = [10, 10, 10] 
 * Output: -1 
 * Explanation: The largest element of the array is 10 and the second largest element does not exist.
 */

class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Code Here
        // Approach 1- 
        let heap = new Set();

        for (let num of arr) {
            heap.add(num);
            if (heap.size > 2) {
                heap.delete(Math.min(...heap));
            }
        }

        return heap.size < 2 ? -1 : Math.min(...heap)
    }

    getSecondLargest2(arr) {
        // Appraoch 2 -

        // This approach is unoptimized because of sorting. 
        // Sorting will take place for each element so more the elements more it will take time.
        let uniqueArr = [...new Set(arr)].sort((a, b) => b - a);
        return uniqueArr.length > 1 ? uniqueArr[1] : -1;
    }
}

let arr = [12, 35, 1, 10, 34, 1];
let solution = new Solution();
console.log(solution.getSecondLargest2(arr));