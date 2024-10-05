/**
 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
 * In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
 * In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context. 
 * Remember, you can access object properties through either dot notation or [] notation.
 */

// Solution #1
function truthCheck(collection, pre) {
    let flag = true;
    for (const val of collection) {
        if (!val[pre]) {
            flag = false;
            break;
        }
    }

    return flag;
}

// Solution #2
function truthCheck2(collection, pre) {
    return collection.every(element => element[pre]);
}

console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));
console.log(truthCheck2([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));