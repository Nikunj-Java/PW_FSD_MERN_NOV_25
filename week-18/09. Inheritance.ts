// parent class
class Animal{
    makeSound(){
        console.log("Animal Sound");
    }
}
// child class
// dog is type of Animal
class Dog extends Animal{ // extends keyword used for inheritence
    bark(){
        console.log("Dog Barks")
    }
}
const d= new Dog();
d.makeSound(); // from parent property
d.bark();