class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.items.length===0){
            return "stack underflow";
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    display(){
        console.log(this.items);
    }
}

let stack= new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.display();
console.log("Top Element (LIFO) : ",stack.peek());
stack.pop();
stack.display();
console.log("Is stack is Empty? :",stack.isEmpty());