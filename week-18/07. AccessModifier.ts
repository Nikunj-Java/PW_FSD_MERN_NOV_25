class Person{
    public name: string;
    private bankBalanace: number;
    
    constructor(name:string , bankBalanace: number ){
        this.name=name;
        this.bankBalanace=bankBalanace;
        
    }
    greet():void{
        console.log("Hello "+ this.name);
        console.log("Bank Balance "+ this.bankBalanace);
         
    }
}

const p1= new Person("Nikunj Soni",20000); // object of a class
p1.greet();
console.log(p1.name);
console.log(p1.bankBalanace);// it will throw an Error