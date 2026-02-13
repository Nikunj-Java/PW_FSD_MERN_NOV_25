// inheritance means child class can use propeties and methods of parent class
// animal (parent | super class)
// dog , cat (child | sub class)

class Animal {
    eat(){
        console.log("Animal is eating");
    }
}

class Dog extends Animal{
    // extends keyword is used to inherit the properties and methods of parent class
    bark(){
        console.log("Dog is barking");
    }
}

class cat extends Animal{
    // extends keyword is used to inherit the properties and methods of parent class
    meow(){
        console.log("Cat is meowing");
    }
}


let d1= new Dog();
d1.eat(); // inherited method from Animal class
d1.bark(); // method of Dog class

let c1= new cat();
c1.eat(); // inherited method from Animal class
c1.meow(); // method of cat class