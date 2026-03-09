class Node {

    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }

}

class DoublyLinkedList {

    constructor() {
        this.head = null;
    }

    insert(data) {

        let newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;

    }

    forwardTraversal() {

        let current = this.head;

        while (current !== null) {

            console.log(current.data);

            current = current.next;

        }

    }

    backwardTraversal() {

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        while (current !== null) {

            console.log(current.data);

            current = current.prev;

        }

    }

}

let list = new DoublyLinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

console.log("Forward Traversal:");
list.forwardTraversal();

console.log("Backward Traversal:");
list.backwardTraversal();