/**
 * You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. 
 * The operation must be performed in place, meaning you should not use extra space for another array.
 * 
 * Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
 * Output: [1, 2, 4, 3, 5, 0, 0, 0]
 * Explanation: There are three 0s that are moved to the end.
 */


// Approach 1
function pushZerosToEnd(arr) {
    // code here
   let j = 0;
   
   for(let i =0; i < arr.length; i++) {
        if (arr[i] !==0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
   }
    
    return arr;
}

// Appraoch 2 
function pushZerosToEndWithInBuiltMethods(arr) {
    // code here
   let nonZero = arr.filter(num => num !== 0);

   arr.splice(0, nonZero.length, ...nonZero);
   arr.fill(0, nonZero.length);
   return arr;
}

let arr = [0,1,0,3,12];
console.log(pushZerosToEnd(arr));
let arr2 = [1, 2, 0, 4, 3, 0, 5, 0];
console.log(pushZerosToEndWithInBuiltMethods(arr2));