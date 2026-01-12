//Simple Constructor Function
function Book(title, author){
    this.title=title;
    this.author=author;
    //Here The Scope of this is within the function
}

let book1= new Book("Atomic Habits","James");
let book2= new Book("Origin of Species","Darvin");
let book3= new Book("Rich Dad And Poor Dad","R.Kiyosaki");


console.log(book1.title);
console.log(book2.title+":"+book2.author);
console.log(book3.title+":"+book3.author);
