function mySet() {
    // the collection will hold the set 
    const collection = [];

    // this method will check for the presence of an element and return true of false
    this.has = function (element) {
        return collection.indexOf(element) !== -1;
    }

    // this method will return all the values in the set. 
    this.values = function () {
        return collection;
    }

    // the method will add an element to the set.
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    }

    // this method will remove an element from a set.
    this.remove = function (element) {
        if (this.has(element)) {
            const index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // this method will return the size of the collection
    this.size = function () {
        return collection.length;
    }

    // this method will return the union of two sets.
    this.union = function (otherSet) {
        const unionSet = new mySet();
        const firstSet = this.values();
        const secondSet = otherSet.values();

        firstSet.forEach(e => {
            unionSet.add(e);
        });
        secondSet.forEach(e => {
            unionSet.add(e);
        });
        return unionSet.values();
    }

    // this method will return the intesection of two sets.
    this.intersection = function (otherSet) {
        const intersectionSet = new mySet(); // This will contains values that are common in both sets.
        const firstSet = this.values();

        firstSet.forEach(e => {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet.values();
    }

    // this method will return the difference of two sets.
    this.difference = function (otherSet) {
        const differenceSet = new mySet(); // This will contains values that are in the first set but not in the other set.
        const firstSet = this.values();

        firstSet.forEach(e => {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet.values();
    }

    // this method will test if the set is a subset of a different set.
    this.subset = function (otherSet) {
        const firstSet = this.values();
        return firstSet.every(value => {
            return otherSet.has(value);
        });
    }
}

const set = new mySet();
set.add(1);
set.add(2);
set.add(3);
console.log(set.values());
console.log('has 4?', set.has(4))
console.log('has 3?', set.has(3));
// console.log('then remove it.', set.remove(3));
console.log(set.values());
const anotherSet = new mySet();
// anotherSet.add('A')
// anotherSet.add('B')
// anotherSet.add('C');
anotherSet.add(1);
anotherSet.add(3);
anotherSet.add(2);
anotherSet.add(5);
anotherSet.add(7);
// console.log('Union => ',set.union(anotherSet));
console.log('Intersection => ', set.intersection(anotherSet));
console.log('Difference => ', set.difference(anotherSet));
console.log('Subset => ', set.subset(anotherSet));
