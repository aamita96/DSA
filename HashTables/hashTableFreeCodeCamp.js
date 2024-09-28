var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};
  // Only change code below this line
  this.add = function (key, value) {
    const index = hash(key);
    this.collection[index] = this.collection[index] || {};
    this.collection[index][key] = value;
  };

  this.remove = function (key) {
    const index = hash(key);
    delete this.collection[index][key];
    if (Object.keys(this.collection[index]).length === 0) {
      delete this.collection[index];
    }
  };

  this.lookup = function (key) {
    const index = hash(key);
    return this.collection[index][key];
  };
  // Only change code above this line
};

const hashTable = new HashTable();

// hashTable.add('Amit', 4);
hashTable.add('Amit', 'person');
hashTable.add('Fido', 'dog');
hashTable.add('rex', 'dinasour');
hashTable.add('tux', 'penguin');

console.log('Before deleting \n', hashTable.collection);

hashTable.remove('Amit');
hashTable.remove('Fido');

console.log('After deleting \n', hashTable.collection);

console.log(hashTable.lookup('Fido'));

