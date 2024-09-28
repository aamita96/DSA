function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
        const newNode = new Node(element);
        if(this.head() == null) {
            head = newNode;
        } else {
            let currentNode = this.head();
            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        length++;
    };

    // this.remove = function (element) {
    //   let currentNode = this.head();
      
    //   if (currentNode && currentNode.element === element) {
    //     head = currentNode.next;
    //     length--;
    //   }

    //   while(currentNode.next !== null) {
    //     if(currentNode.next.element === element) {
    //       currentNode.next = currentNode.next.next;
    //       currentNode = currentNode.next;
    //       length--;
    //       break;
    //     } else {
    //       currentNode = currentNode.next;
    //     }
    //   }
    // };

    // another improved/optimized solution for remove method

    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){
        head = currentNode.next;
      } else {
        while(currentNode.element !== element) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
      }

      length --;
    };

    this.print = function () {
      console.log(JSON.stringify(this.head()));
    };

    this.isEmpty = function () {
      return length === 0;
    };

    this.indexOf = function (element) {
      let index = -1;
      let curNode = this.head();
      while(curNode) {
        index ++;
        if(curNode.element === element) {
          return index;
        }
        curNode = curNode.next;
      }
      return -1;
    };

    this.elementAt = function (index) {
      let count = 0;
      let curNode = this.head();
      
      while(count < index) {
        count ++;
        curNode = curNode.next;
      }

      return curNode?.element;
    };

    this.removeAt = function (index) {
      let currentIndex = 0;
      let currentNode = this.head();
      let previousNode;

      if (index < 0 || index >= length) return null;

      if (index === 0) {
        head = currentNode.next;
      } else {
        while (currentIndex < index) {
          currentIndex++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next;
      }
      length--;
      return currentNode.element;
    };

    this.addAt = function (index, element) {
      let currentIndex = 0;
      let currentNode = this.head();
      let previousNode;
      
      if(index < 0 || index > length) return false;

      const node = new Node(element);

      if(index === 0) {
        node.next = currentNode;
        head = node;
      } else {
        while (currentIndex < index) {
          currentIndex ++;
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
      }
      length ++;
    };
  }

  
  const linkedList = new LinkedList();
  linkedList.add('tux');
  linkedList.add('rex');
  linkedList.add('olly');
  linkedList.add('java');
  linkedList.add('pug');

  linkedList.print();
  // console.log('Is list empty?', linkedList.isEmpty());
  // console.log('Index of Pug is => ', linkedList.indexOf('pug'));
  // linkedList.remove('java');
  // linkedList.print();
  console.log('Index of java is => ', linkedList.indexOf('java'));
  console.log('Element at index 0 :', linkedList.elementAt(5));
  // console.log('Length of linkedList: ', linkedList.size());
  console.log('Remove Element at index 3 :', linkedList.removeAt(3));
  linkedList.addAt(2,'sofie');
  linkedList.print();
