// Question 1: Truncate the text
// Input: str = "Programming is awesome!", maxlength = 9
// Output: Programmi...

function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength) + '...' : str;
}

console.log('Question 1 -> ', truncate('Programming is awesome!', 9));

/**
 * Question 2: Palindrome number
 * An Integer is a palindrome when it reads the same forward and backward.
 * 
 * Input: x = 121 =>>  Output: true
 * Input: x = 10  =>>  Output: false
 */

function isPalindrome(num) {
    return num < 0 ? false : num === +num.toString().split('').reverse().join('');
}

console.log('Question 2 -> ', isPalindrome(1221) ? 'It is a palindrome number.' : 'Its not a palindrome number.');

/**
 * Question 3: Hamming Distance
 * 
 * Given two strings x and y, return the Hamming distance between them.
 * Hamming distance meaning how many different characters while comparing two strings we get.
 * 
 * Input: x = 'hello', y = 'hwllr';
 * Output: 2
 * Explanation:
 *      (hello)
 *      (hwllr)
 *        ⬆  ⬆
 */

function hammingDistance(str1, str2) {
    if (str1.length !== str2.length) throw new Error('String must be of same length.');

    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i])
            count++;
    }
    return count;
}

console.log('Question 3 -> ', hammingDistance('hello', 'hello'));

/**
 * Hamming Distance
 * 
 * Variation 2: Given two integers x and y, return the Hamming distance between their bits.
*/

function hammingDistanceByBits(x, y) {
    x = x.toString(2);
    y = y.toString(2);

    if (x.length < y.length) {
        while (x.length !== y.length)
            x = '0' + x;
    } else {
        while (x.length !== y.length)
            y = '0' + y;
    }

    let count = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== y[i])
            count++;
    }
    return count;
}
console.log('Question 3 -> ', hammingDistanceByBits(2, 4));

/**
 * Question 4: Valid Anagram
 * An Anagram is a word or phrase formed by rearranging the letters of
 * a different word or phrase, using all the original letters exactly once.
 * 
 * Input: (s="anagram"), (t="nagaram"); ---->>> Output: true;
 * Input: (s="rat"), (t="car"); ---->>>> Output: false;
 */

// Solution #1
function isAnagram(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');

    return s === t;
}

console.log('Question 4 -> ', isAnagram('car', 'arc'));

// Solution #2 - optimized approached

function isAnagram2(s, t) {
    if (s.length !== t.length) return false;

    const sObj = {};
    const tObj = {};

    for (let i = 0; i < s.length; i++) {
        sObj[s[i]] = (sObj[s[i]] || 0) + 1;
        tObj[t[i]] = (tObj[t[i]] || 0) + 1;
    }
    for (const key in sObj) {
        if (sObj[key] !== tObj[key])
            return false;
    }
    return true;
}
console.log('Question 4 -> ', isAnagram2('ram', 'arm'));
console.log('Question 4 -> ', isAnagram2('ram', 'cat'));