/**
 * The cost of stock on each day is given in an array price[]. Each day you may decide to either buy or sell the stock i at price[i], you can even buy and sell the stock on the same day. 
 * Find the maximum profit that you can get. 
 * 
 * Note: A stock can only be sold if it has been bought previously and multiple stocks cannot be held on any given day.
 * 
 * Examples -
 * 
 * Input: prices[] = [100, 180, 260, 310, 40, 535, 695] 
 * Output: 865 
 * Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210. Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655. Maximum Profit = 210 + 655 = 865.
 * 
 * Input: prices[] = [4, 2, 2, 2, 4] 
 * Output: 2 
 * Explanation: Buy the stock on day 3 and sell it on day 4 => 4 – 2 = 2. Maximum Profit = 2.
 */


class Solution {
    /**
    * @param number[] prices

    * @returns number
    */

    // Solution #1
    // Solution #1 might be more intuitive since it explicitly finds the buy and sell points.
    // Time complexity of the below method is O(n) but uses nested loop.
    maximumProfit(prices) {
        // code here
        let totalProfit = 0;
        let localMin = prices[0], localMax = prices[0];
        let len = prices.length;

        let i = 0;
        while (i < len - 1) {

            // Find local minima
            while (i < len - 1 && prices[i] >= prices[i + 1]) {
                i += 1;
                localMin = prices[i];
            }

            // Find local maxima
            while (i < len - 1 && prices[i] <= prices[i + 1]) {
                localMax = prices[i + 1];
                i += 1;
            }

            totalProfit += localMax - localMin;
        }
        return totalProfit;
    }

    // Solution #2
    // Solution 2 is better as its time complexity is O(n) as well and is more efficient in terms of code simplicity because it eliminates unnecessary loops.
    maximumProfit2(prices) {
        // code here
        let totalProfit = 0;
        let len = prices.length;

        let i = 0;
        while (i < len - 1) {
            if (prices[i] < prices[i + 1]) {
                totalProfit += prices[i + 1] - prices[i];
            }
            i += 1;
        }
        return totalProfit;
    }
}

// const arr = [100, 180, 260, 310, 40, 535, 695];
const arr = [4, 2, 2, 2, 4];
let solution = new Solution();
// console.log(solution.maximumProfit(arr));
console.log(solution.maximumProfit2(arr));