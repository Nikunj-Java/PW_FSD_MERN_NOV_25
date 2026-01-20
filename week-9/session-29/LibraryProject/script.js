// =======================
// Constructor Function
// =======================
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// =======================
// Book Collection Array
// =======================
let books = [];

// =======================
// Add Book
// =======================
function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let year = document.getElementById("year").value;

  if (title === "" || author === "" || year === "") {
    alert("Please fill all fields!");
    return;
  }

  let newBook = new Book(title, author, year);
  books.push(newBook);

  displayBooks(books);

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("year").value = "";
}

// =======================
// Display Books (map)
// =======================
function displayBooks(bookArray) {
  let list = document.getElementById("bookList");
  list.innerHTML = "";

  bookArray.map((book, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      📖 <strong>${book.title}</strong> by ${book.author} (${book.year})
      <button class="delete" onclick="deleteBook(${index})">X</button>
    `;
    list.appendChild(li);
  });
}

// =======================
// Delete Book (findIndex + splice)
// =======================
function deleteBook(index) {
  books.splice(index, 1);
  displayBooks(books);
}

// =======================
// Search Books (filter)
// =======================
function searchBooks() {
  let keyword = document.getElementById("search").value.toLowerCase();

  let result = books.filter(book =>
    book.title.toLowerCase().includes(keyword)
  );

  displayBooks(result);
}
