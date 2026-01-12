// Create a Constructor function to handle title, author, isAvailable
function LibraryBook(title, author, isAvailable) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;

  this.toggleStatus = function () {
    this.isAvailable = !this.isAvailable;
  };
}

let book1 = new LibraryBook("JavaScript Basics", "Nikunj", true);

book1.toggleStatus();
console.log(book1.isAvailable); // true
book1.toggleStatus();
console.log(book1.isAvailable); // false
