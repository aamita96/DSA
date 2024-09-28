/**
 * Hash Table
 * for more details about Hash Table go to below link-
 * https://www.geeksforgeeks.org/hash-table-data-structure/ 
 */

/**
 * 
 * @param {string} is a string that we want to hash. 
 * @param {max} is the number of buckets we are using in our hash table to store values.
 * @returns hash id which is of type number;
 */
const hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % max;
}

function HashTable() {
    const storage = [];
    const storageLimit = 4;

    this.print = function () {
        console.log(storage);
    };

    this.add = function (key, value) {
        const index = hash(key, storageLimit);

        if (storage[index] === undefined) {
            storage[index] = [
                [key, value]
            ]
        } else {
            let inserted = false;
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }
    };

    this.remove = function (key) {
        const index = hash(key, storageLimit);
        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }
            }
        }
    };

    this.lookup = function (key) {
        const index = hash(key, storageLimit);
        if (storage[index] === undefined) {
            return undefined;
        } else {
            for (let i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    return storage[index][i][1];
                }
            }
        }
    }
}

const hashTable = new HashTable();

// hashTable.add('Amit', 4);
hashTable.add('Amit', 'person');
hashTable.add('Fido', 'dog');
hashTable.add('rex', 'dinasour');
hashTable.add('tux', 'penguin');
hashTable.print();

console.log(hashTable.lookup('Fido'));