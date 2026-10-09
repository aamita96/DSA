/**
 * You are given an array of integers arr[]. Your task is to reverse the given array. 
 * Note: Modify the array in place.
 * 
 * Example - 
 * Input: arr = [1, 4, 3, 2, 6, 5]
 * Output: [5, 6, 2, 3, 4, 1]
 * Explanation: The elements of the array are 1 4 3 2 6 5. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is 5 6 2 3 4 1.
 */

class Solution {
    // Function to reverse the array.
    // Solution 1
    reverseArray(arr) {
        // your code here
        return arr.reverse();
    }

    // Solution 2
    reverseArray2(arr) {
        let left = 0, right = arr.length - 1;

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }

        console.log(arr)
    }
}

let solution = new Solution();
let arr = [1, 4, 3, 2, 6, 5];
solution.reverseArray2(arr);