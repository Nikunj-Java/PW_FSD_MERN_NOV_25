class Person{
    public name: string;
    
    constructor(name:string ){
        this.name=name;
        
    }
    greet():void{
        console.log("Hello "+ this.name);
         
    }
}

const p1= new Person("Nikunj Soni"); // object of a class
p1.greet();
