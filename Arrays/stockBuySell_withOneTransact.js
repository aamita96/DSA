/**
 * Given an array prices[] of length n, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. 
 * Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0. 
 * 
 * Note: Stock must be bought before being sold.
 * 
 * Examples - 
 * 
 * Input: prices[] = [7, 10, 1, 3, 6, 9, 2] 
 * Output: 8 
 * Explanation: You can buy the stock on day 2 at price = 1 and sell it on day 5 at price = 9. Hence, the profit is 8.
 * 
 * Input: prices[] = [7, 6, 4, 3, 1] 
 * Output: 0 
 * Explanation: Here the prices are in decreasing order, hence if we buy any day then we cannot sell it at a greater price. Hence, the answer is 0.
 * 
 * Input: prices[] = [1, 3, 6, 9, 11] 
 * Output: 10 
 * Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and selling at price[n-1].
 */


/**
 * @param {number[]} prices
 * @returns {number}
 */

class Solution {
    // Function to find the maximum profit.
    maximumProfit(prices) {
        // your code here
        let profit = 0;
        let min = prices[0];

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < prices[i + 1]) {
                min = prices[i] < min ? prices[i] : min;
                const localProfit = prices[i + 1] - min;
                if (localProfit > profit) {
                    profit = localProfit;
                }
            }
        }

        console.log(profit)
    }
}

// let arr = [7, 10, 1, 3, 6, 9, 2];
// let arr = [1, 3, 6, 9, 11];
let arr = [7, 6, 4, 3, 1];
let solution = new Solution();
solution.maximumProfit(arr);