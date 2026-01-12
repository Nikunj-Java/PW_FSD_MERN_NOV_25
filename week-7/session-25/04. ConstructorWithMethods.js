//Constructor Function with Method
function Book(title, author){
    this.title=title;
    this.author=author;

    this.getDetails=function (){
        return this.title+" :By "+this.author
    }
}

let book1= new Book("Atomic Habits","James");
let book2= new Book("Origin of Species","Darvin");
let book3= new Book("Rich Dad And Poor Dad","R.Kiyosaki");


console.log(book1.getDetails());
console.log(book2.getDetails());
console.log(book3.getDetails());
