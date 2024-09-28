class FreeCodeCampSet {
    constructor() {
      // Dictionary will hold the items of our set
      this.dictionary = {};
      this.length = 0;
    }
  
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
  
    // This method will return all the values in the set
    values() {
      return Object.values(this.dictionary);
    }
  
    // Only change code below this line
    add(element) {
        if(!this.has(element)) {
            this.dictionary[element] = element;
            return true;
        } else {
          return false;  
        }
    }

    remove(element) {
        if(this.has(element)) {
            delete this.dictionary[element];
            return true;
        } else {
            return false
        } 
    }

    size() {
        return Object.keys(this.dictionary).length;
    }
    
    union(otherSet) {
        const unionSet = new FreeCodeCampSet();
        const firstSet = this.values();
        const secondSet = otherSet.values();

        firstSet.forEach( e => {
            unionSet.add(e);
        });

        secondSet.forEach(e=> {
            unionSet.add(e);
        });

        return unionSet.values();
    }

    intersection(otherSet) {
        const intersectionSet = new FreeCodeCampSet();
        const firstSet = this.values();

        firstSet.forEach( e=> {
            if(otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    }

    difference(otherSet) {
        const differenceSet = new FreeCodeCampSet();
        const firstSet = this.values();

        firstSet.forEach( e=> {
            if(!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    isSubsetOf(otherSet) {
        const firstSet = this.values();
        return firstSet.every(value => {
            return otherSet.has(value);
        });
    }
    // Only change code above this line
  }


const codeCampSet = new FreeCodeCampSet();
codeCampSet.add(1);
codeCampSet.add(2);
codeCampSet.add(1);
codeCampSet.add(4);

console.log(codeCampSet.values());
console.log(codeCampSet.size());
codeCampSet.remove(2);
console.log(codeCampSet.values());

const otherSet = new FreeCodeCampSet();

otherSet.add(1);
otherSet.add('a');
otherSet.add('b');
// console.log(codeCampSet.union(otherSet));
// console.log(codeCampSet.intersection(otherSet).values());
// console.log(codeCampSet.difference(otherSet).values());
console.log(codeCampSet.isSubsetOf(otherSet));

