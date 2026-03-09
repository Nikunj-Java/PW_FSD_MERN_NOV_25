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

    display() {

        let current = this.head;

        while (current !== null) {

            console.log(current.data);

            current = current.next;

        }

    }

}

let list = new DoublyLinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

list.display();

//null ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → null