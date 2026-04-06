class Person{
    constructor(public name: string){}
}

class Student extends Person{
    constructor(name: string,public marks:number){
        super(name); // call parent's constructor
    }
}

const s1= new Student("Nikunj Soni", 90);
console.log(s1);