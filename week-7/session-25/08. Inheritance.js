function Animal(name){
    this.name=name;
}

//Parent Methods
Animal.prototype.eat= function(){
    console.log(this.name + "is eating!");
}

//child Methods
function Dog(name,sound){
    //call parent constructor
    Animal.call(this,name);
    this.sound=sound;
}

//Inheritate Parent Prototype
Dog.prototype=Object.create(Animal.prototype)

//Resest Constructor
Dog.prototype.constructor= Dog;

//child methods
Dog.prototype.bark= function(){
    console.log(this.name+ " Says "+this.sound);
};

let dog1= new Dog("Buddy","Woof Woof");
dog1.eat(); //here dog is accessing Parent Method--> Inheritance (Child using Parent's Property)
dog1.bark();// child method