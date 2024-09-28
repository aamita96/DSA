/**
 * Below is an example of Ascending Order Priority Queue where smallest numbers gets the highest priority in a priority queue.
 * 
 * For further info about priority queue, consider reading below blog.
 * https://www.geeksforgeeks.org/priority-queue-set-1-introduction/
 */

function PriorityQueue() {
    const collection = [];

    this.print = function () {
        console.log(collection);
    }

    this.enqueue = function (value) {
        if (this.isEmpty()) {
            collection.push(value);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++) {
                if (value[1] < collection[i][1]) { // checking priorities
                    collection.splice(i, 0, value);
                    added = true;
                    break;
                }
            }

            if (!added) {
                collection.push(value);
            }
        }
    }
    this.dequeue = function () {
        return  collection.shift();
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

const queue = new PriorityQueue();
queue.enqueue(['A', 1]);
queue.enqueue(['C', 2]);
queue.enqueue(['B', 1]);

queue.print();

console.log('Dequeue element', queue.dequeue());

console.log('Now who is at front?', queue.front());

console.log('Size is ', queue.size());

console.log('Is Empty ?', queue.isEmpty());