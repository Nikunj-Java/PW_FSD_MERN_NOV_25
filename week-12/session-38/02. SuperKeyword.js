class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // calling parent constructor
        this.breed = breed;
    }

    getDetails() {
        console.log(this.name + " is a " + this.breed);
    }
}

const dog1 = new Dog("Tommy", "Labrador");
dog1.getDetails();
