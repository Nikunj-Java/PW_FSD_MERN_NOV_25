//Encapsulation is the process of hiding the internal details of an object
//  and only exposing a public interface for interacting with it. 
// This is achieved by using access modifiers (like private, protected, and public) 
// to restrict access to certain properties and methods of a class.

class BankAccount{
    #balance; //private variable
    constructor(initialBalance){
        this.#balance= initialBalance;
    }
    deposit(amount){
        if(amount > 0){
            this.#balance +=amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
        }
    }
    //getter method to access the private variable
    getBalance(){
        return this.#balance;
    }
}

 const account= new BankAccount(1000);
 account.deposit(500); // Deposited: 500. New Balance: 1500
 console.log(account.getBalance()); // 1500

 //console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
