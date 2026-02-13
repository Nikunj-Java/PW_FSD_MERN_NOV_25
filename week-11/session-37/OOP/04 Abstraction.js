// Abstraction is a fundamental concept in object-oriented programming (OOP) that focuses on hiding the complex implementation details of an object and exposing only the necessary features to the user. It allows developers to create a simplified model of a complex system, making it easier to understand and use.

// In JavaScript, we can achieve abstraction using classes and methods. We can define a class with private properties and methods that are not accessible from outside the class, while providing public methods to interact with the object.
//hiding (implementation) complexity and showing only essential features to the user

class CoffeMachine{
    start(){
        this.boilWater();
        this.brewCoffee();
        console.log("Your coffee is ready!");
    }
    boilWater(){
        console.log("Boiling water...");
    }
    brewCoffee(){
        console.log("Brewing coffee...");
    }

}

let machine= new CoffeMachine();
machine.start(); // This will call the start method, which in turn calls the private methods boilWater and brewCoffee. The user does not need to know how these methods work, they just need to know that calling start will give them a cup of coffee.