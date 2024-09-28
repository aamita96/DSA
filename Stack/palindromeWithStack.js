/* Stack! */

// functions: push, pop, peek, length

// Note - Javascript has array object that already has all the functions we need in order to use it as a stack. So we can use array as a stack.

const letters = []; // This is our stack.

const word = 'racecar' // bob, 12321, maam, racecar

let rword = '';

// put letters of word into stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if(rword === word) {
    console.log(word + ' is a palindrome.');
}else {
    console.log(word + ' is a not palindrome.');
}

