let stack=[];

//push
stack.push(10);
stack.push(20);
stack.push(30);

//peak
console.log("Top Element(LIFO) :",stack[stack.length-1]);

//pop
stack.pop();
console.log("Stack after pop operation : ",stack);

//isEmpty
console.log("Is stack is Empty? :",stack.length===0);
