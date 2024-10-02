/**
 * -- Problem
 * 
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 * 
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * 
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
 * 
 * 1. smallestCommons([1, 3]) should return 6.
 * 2. smallestCommons([1, 5]) should return 60.
 * 
 * -- Problem Explanation
 * 
 * The smallest common multiple between two numbers is the smallest number that both numbers can divide into evenly. This concept can be extended to more than two numbers as well.
 * 
 * We can first start with finding the smallest common multiple between two numbers. Naively, we can start writing out multiple of each number until we write a multiple that exists from both numbers.
 * 
 * An example would be the numbers 3 and 4. The multiples of 3 are 3, 6, 9, 12, 15, 18, ... and the multiples of 4 are 4, 8, 12, 16, 20, .... The first smallest number we run into in both lists is 12 so this is the smallest common multiple between 3 and 4.
 * 
 * An faster approach is to check all multiples of 4 to see if they are also multiples of 3, by checking the remainder when we divide the multiple of 4 by 3.
 * 
 * Be careful - do not forget the keyword range. If we are given [1, 5], then we have to check for the smallest common multiple for all the numbers [1, 2, 3, 4, 5], which is the smallest number that is evenly divisible by all of them.
 */

function smallestCommons(arr) {
    // const startTime = performance.now();
    console.time('Execution Time');

    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      // Check if every value in range divides 'multiple'
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        // Count divisors
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        // const endTime = performance.now();
        // console.log(`Execution Time ${endTime - startTime} ms`);
        console.timeEnd('Execution Time');

        return multiple;
      }
    }
  }
  
  console.log(smallestCommons([23, 18]));