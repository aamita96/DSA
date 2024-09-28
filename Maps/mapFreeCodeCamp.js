var customMap = function () {
    this.collection = {};
    // Only change code below this line
    this.add = function (key, value) {
        this.collection[key] = value;
    };
    this.remove = function (key) {
        if (this.has(key)) {
            delete this.collection[key];
        }
    };
    this.get = function (key) {
        if (this.has(key)) {
            return this.collection[key];
        } else {
            return undefined;
        }
    };
    this.has = function (key) {
        // return this.collection[key] !== undefined;
        return this.collection.hasOwnProperty(key);
    }
    this.values = function () {
        return Object.values(this.collection);
    };
    this.size = function () {
        return Object.keys(this.collection).length;
    };
    this.clear = function () {
        this.collection = {};
    };
    // Only change code above this line
};

const map = new customMap();
map.add(1, 1);
map.add('a', 'A');
map.add('Country', 'India');
map.add('Alive', true);
map.add(false, 'test');
console.log(map.values());
map.remove(false);
console.log(map.values());
console.log(map.has('Alive'));
console.log(map.size());
console.log(map.clear());
