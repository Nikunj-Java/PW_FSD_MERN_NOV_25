//class
class Person{
    //must have one constructor if not create an empty one
    // consturctor carries the proeperties of class
    constructor(name,email,password,mobile){
        this.name=name;
        this.email=email;
        this.password=password;
        this.mobile=mobile;
    }

    sayHello(){
        console.log("Hello! "+ this.name);
    }

    printDetails(){
        console.log("Email: "+this.email);
        console.log("Password: "+this.password);
        console.log("Mobile: "+this.mobile);
    }

}

//object
let user1= new Person("Nikunj","nikunj@gmail.com","Nikunj@123","9876543210");
let user2= new Person("Jhon","jhon@gmail.com","jhon@123","9876543210");
user2.sayHello();
user2.printDetails();