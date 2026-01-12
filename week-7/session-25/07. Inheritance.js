function Person(name){
    this.name=name;
    //with no methods
}

Person.prototype.sayHello= function (){
    console.log("Hello! "+this.name);
}

let p1= new Person("Nikunj Soni");
p1.sayHello();

//Here Method is Shared Among ALL the Object