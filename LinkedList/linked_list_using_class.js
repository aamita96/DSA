// A custom data structure - "Linked List"
/**
 * Linked list is a list containing elements which are linked to each other.
 * Every element knows about the next element inline 
 */

class LinkedList {
    constructor() {
        this.head = null; // First element of the list
        this.tail = null; // Last element of the list
    }

    append(value) {
        const newNode = { value, next: null };

        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }
    }

    toArray() {
        const elements = [];

        let curNode = this.head;
        while (curNode) {
            elements.push(curNode.value);
            curNode = curNode.next;
        }
        // console.log(elements.map(Element => Element.value));
        console.log(elements);
    }

    prepend(value) {
        const newNode = { value, next: this.head };
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete(value) {
        if (!this.head)
            return null;

        // if (this.head && this.head.value === value) {
        //     this.head = this.head.next;  // To delete first matched element.
        // }
        while (this.head && this.head.value === value) {
            this.head = this.head.next; // To delete all first matched elements which is linked to head.
        }

        let curNode = this.head;
        while (curNode.next) {
            if (curNode.next.value === value) {
                curNode.next = curNode.next.next;
            } else {
                curNode = curNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = curNode;
        }
    }

    find(value) {
        if (!this.head)
            return null;

        let curNode = this.head;
        while (curNode) {
            if (curNode.value === value) {
                return curNode;
            }
            curNode = curNode.next;
        }
        return null;
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);
        if (existingNode) {
            const newNode = { value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }
}

const linkedList1 = new LinkedList();
linkedList1.append(11)
linkedList1.append(5);
linkedList1.append(10);
linkedList1.append(50);
linkedList1.append(50);
linkedList1.append(25);
linkedList1.append(54);
linkedList1.append(18.51);
linkedList1.prepend(11)
linkedList1.prepend(11)
linkedList1.toArray();
linkedList1.delete(11)
linkedList1.delete(50)
linkedList1.delete(18.51);
linkedList1.toArray();
linkedList1.append(77.88);
linkedList1.toArray();

linkedList1.insertAfter(20,10);
linkedList1.toArray();
console.log(linkedList1.find(25));
console.log(linkedList1.find(11)); // null as we deleted the value