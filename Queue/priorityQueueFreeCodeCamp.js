function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
        console.log(this.collection);
    };
    // Only change code below this line
    this.enqueue = function (item) {
        const index = this.collection.findIndex(val => val[1] > item[1]);
        if (index !== -1) {
            this.collection.splice(index, 0, item);
        } else {
            this.collection.push(item);
        }
    };
    this.dequeue = function () {
        return this.collection.shift()[0];
    };
    this.size = function () {
        return this.collection.length;
    };
    this.front = function () {
        return this.collection[0][0];
    };
    this.isEmpty = function () {
        return this.size() === 0;
    };

    // Only change code above this line
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(['Amit', 5]);
priorityQueue.enqueue(['Amit', 2]);
priorityQueue.enqueue(['Shubham', 2]);
priorityQueue.enqueue(['Amit', 1]);
priorityQueue.printCollection();