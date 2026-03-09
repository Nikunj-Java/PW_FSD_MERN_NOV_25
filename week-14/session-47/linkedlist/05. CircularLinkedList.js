class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

class CircularLinkedList {

    constructor() {
        this.head = null;
    }

    insert(data) {

        let newNode = new Node(data);

        if (this.head === null) {

            this.head = newNode;
            newNode.next = this.head;
            return;

        }

        let current = this.head;

        while (current.next !== this.head) {
            current = current.next;
        }

        current.next = newNode;
        newNode.next = this.head;

    }

    display() {

        let current = this.head;

        do {

            console.log(current.data);

            current = current.next;

        } while (current !== this.head);

    }

}

let list = new CircularLinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

list.display();