/* Stack! */

// functions: push, pop, peek, length, isEmpty

const Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function () {
        if (this.count === 0) {
            return null;
        }
        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result
    }

    this.size = function () {
        return this.count;
    }
    
    // Returns the value at the end of the stack.
    this.peek = function () {
        return this.storage[this.count - 1];
    }
}

const stack = new Stack();
console.log('Initial size of stack -> ', stack.size());
stack.push(1)
stack.push(2)

console.log('Stack size ->', stack.size());
console.log('Stack peek ->', stack.peek());
console.log(stack.pop());

console.log('Stack size after popping->', stack.size());
console.log('Stack peek after popping ->', stack.peek());