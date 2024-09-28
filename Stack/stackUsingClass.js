class CustomStack {
    #items = [];
    
    push(val) {
        this.#items.push(val); // Push the element at the top of the stack.
    }
    
    pop() {
        if(this.#items.length < 0) {
            return 'Stack Underflow!';
        }
        return this.#items.pop(); // Pop element from the top of the stack.
    }
    
    peek() {
        const len = this.#items.length;
        return this.#items[len - 1]; // Returns the element at the top of the stack.
    }
    
    isEmpty() {
        return this.#items.length === 0;
    }

    printStack() {
        console.log(this.#items);
    }
}

const stack = new CustomStack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
console.log('Element ' + stack.pop() + ' popped from stack!');
console.log('Element at the top is',stack.peek());
console.log('Is stack empty?', stack.isEmpty());
console.log(stack.printStack());