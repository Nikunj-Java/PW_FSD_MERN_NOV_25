//Public Field
class User{
    name="Nikunj Soni";
}

let u1= new User();
console.log(u1);

//Private Field
class BankAccount{
    #balance=10000; // # indicates private field
    showBalance(){
        console.log("Balance:",this.#balance);
    }
}
let account1= new BankAccount();
account1.showBalance();
//console.log(account1.#balance) // This will give an error because #balance is private and cannot be accessed outside the class.
//account1.#balance; // This will give an error because #balance is private and cannot be accessed outside the class.