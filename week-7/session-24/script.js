let books = [];

// Function with multiple parameters
function createBook(title, author) {
  return {
    title: title,
    author: author
  };
}

// Function to add book
function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;

  if (title === "" || author === "") {
    alert("Please enter both fields");
    return;
  }

  let book = createBook(title, author);
  books.push(book);

  displayBooks();
  clearInputs();
}

// Arrow function
const displayBooks = () => {
  let list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach((book, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${book.title} by ${book.author}
      <button onclick="removeBook(${index})">❌</button>
    `;
    list.appendChild(li);
  });
};

// Function with single parameter
function removeBook(index) {
  books.splice(index, 1);
  displayBooks();
}

// Function without parameters
function clearInputs() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
}
