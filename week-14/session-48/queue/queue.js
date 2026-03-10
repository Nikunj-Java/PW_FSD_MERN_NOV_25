class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.items.length === 0){
            return "Queue Underflow";
        }
        return this.items.shift();
    }
    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    display(){
        console.log(this.items);
    }
}


let queue= new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

queue.display();

console.log("Front Element: ",queue.peek());
queue.dequeue();
queue.display();
