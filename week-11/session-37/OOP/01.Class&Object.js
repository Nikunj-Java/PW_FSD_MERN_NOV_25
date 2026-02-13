class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello My Name Is ${this.name} and I am ${this.age} Years Old`);
    }
}


let person1= new Person("Suhas",25);
person1.greet();

let person2= new Person("Danish",30);
person2.greet();

let person3= new Person("Nikhil",22);
person3.greet();

let person4= new Person("Ashi",12);
person4.greet();

let person5= new Person("Nikunj",36);
person5.greet();