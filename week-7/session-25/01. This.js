//global scope
console.log(this);

//strict mode
//"use strict"
console.log(this);

//this inside a function
function show(){
    console.log(this);
}

show();

//this inside an Object 
let user ={
    name: "Nikunj Soni",
    greet: function(){
        console.log(this.name);
    }
};

user.greet();


//this in arrow function
let user1={
    name: "Nikunj Soni",
    greet: ()=>{
        console.log(this.name);
    } 
}

user1.greet();