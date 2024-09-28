function Queue() {
    const collection = [];

    this.print = function () {
        console.log(collection);
    }

    this.enqueue = function (value) {
        collection.push(value);
    }
    this.dequeue = function () {
        return collection.shift();
    }
    this.front = function () {
        return collection[0];
    }
    this.size = function () {
        return collection.length;
    }
    this.isEmpty = function () {
        return collection.length === 0;
    }
}

const queue = new Queue();
queue.enqueue('C');
queue.enqueue('B');
queue.enqueue('A');

queue.print();

console.log('Dequeue element', queue.dequeue());

console.log('Now who is at front?', queue.front());

console.log('Size is ', queue.size());

console.log('Is Empty ?', queue.isEmpty());