var Node = function(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  };
  var DoublyLinkedList = function() {
    this.head = null;
    this.tail = null;
    // Only change code below this line
    this.add = function (element) {
        const node = new Node(element, this.tail);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let tempNode = this.tail;
            tempNode.next = node;
            this.tail = node;
        }
    }

    this.remove = function (element) {
        if (this.head === null) return null;
        let tempNode = this.head;
        while (tempNode !== this.tail) {
            if (tempNode.data === element) {
                if (tempNode === this.head) {
                    this.head = tempNode.next;
                    tempNode.next.prev = null;
                } else {
                    let prevNode = tempNode.prev;
                    prevNode.next = tempNode.next;
                }
            }
            tempNode = tempNode.next;
        }
        if (tempNode.data === element) {
            this.tail = tempNode.prev;
            tempNode.prev.next = null;
        }
    }

    this.reverse = function () {
        if (this.head === null) return null;
        let temp;
        let current = this.head;

        this.tail = current;
        
        while(current != null) {
         temp = current.prev;
         current.prev = current.next;
         current.next = temp;
         current = current.prev;   
        }

        if (temp != null) {
            this.head = temp.prev;
        }
    }

    this.toArray = function () {
        const items = [];
        let currentNode = this.head;
        
        while(currentNode) {
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(items);
    }
    // Only change code above this line
  };

  const doublyList = new DoublyLinkedList();
  doublyList.add(1)
  doublyList.add(2)
//   doublyList.add(3)
  doublyList.add(4)
//   doublyList.add(3)

//   doublyList.toArray();
  
//   doublyList.remove(3);
  
  doublyList.toArray();

  doublyList.reverse();

  doublyList.toArray();