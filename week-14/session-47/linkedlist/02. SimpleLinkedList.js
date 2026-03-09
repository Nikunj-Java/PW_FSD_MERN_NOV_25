class Node {
    constructor(data){
        this.data=data;
        this.next=this.next;
    }
}

class LinkedList{
    constructor(){
        this.head=null
    }
    insert(data){
        let newNode= new Node(data);

        if(this.head === null){
            this.head= newNode;
            return;
        }

        let current =this.head;
        while(current.next !=null){
            current= current.next;
        }
        current.next= newNode;
    }
    display(){
        let current= this.head;
        while(current !=null){
            console.log(current.data);
            current=current.next;
        }
    }
}

let linkedList= new LinkedList();
linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);
linkedList.insert(40);

linkedList.display();
