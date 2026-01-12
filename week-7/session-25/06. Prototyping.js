let person ={
    greet: function(){
        console.log("Hello!");
    }
};

let user={
    name:"Nikunj"
}

user.__proto__=person;
user.greet(); //Hello!

//How JavaScript Looks for a Property
//user.name //found in user
//user.greet() //not in user==> check in Prototype
