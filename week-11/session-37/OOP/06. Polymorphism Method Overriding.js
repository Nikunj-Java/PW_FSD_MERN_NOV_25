// Polymorphism in JavaScript
// poly means Many
// morph means Forms
// same method name but different implementation(behaviour)
// method overriding
class Animal{
    speak(){
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog barks");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cat meows");
    }
}

let dog1= new Dog();
dog1.speak(); // Dog barks

let cat1= new Cat();
cat1.speak(); // Cat meows