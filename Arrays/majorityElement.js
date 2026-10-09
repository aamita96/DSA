

class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        // Your code goes here
        let map = new Map();
        let length = arr.length;
        
        for (const vote of arr) {
            if (map.has(vote)) {
                let count = map.get(vote);
                map.set(vote, count + 1);
            }
            else {
                map.set(vote, 1);
            }
        }
        
        let votes = [];
        
        for (const voteCount of map) {
            let oneThird = length / 3;
            
            if (voteCount[1] > oneThird) {
                votes.push(voteCount[0]);
            }
        }
        
        return votes.sort();
    }
}

const arr = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6];
let solution = new Solution();
console.log(solution.findMajority(arr)); 