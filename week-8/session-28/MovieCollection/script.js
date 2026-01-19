// =======================
// Constructor Function
// =======================
function Movie(title, rating) {
  this.title = title;
  this.rating = rating;
}

// =======================
// Movie Collection Array
// =======================
let movies = [];

// =======================
// Add Movie
// =======================
function addMovie() {
  let title = document.getElementById("title").value;
  let rating = document.getElementById("rating").value;

  if (title === "" || rating === "") {
    alert("Please enter movie title and rating!");
    return;
  }

  let newMovie = new Movie(title, Number(rating));
  movies.push(newMovie);

  displayMovies(movies);

  document.getElementById("title").value = "";
  document.getElementById("rating").value = "";
}

// =======================
// Display Movies
// =======================
function displayMovies(movieArray) {
  let list = document.getElementById("movieList");
  list.innerHTML = "";

  movieArray.map((movie, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      🎥 ${movie.title} - ⭐ ${movie.rating}
      <button class="delete" onclick="deleteMovie(${index})">X</button>
    `;
    list.appendChild(li);
  });
}

// =======================
// Delete Movie (findIndex + splice)
// =======================
function deleteMovie(index) {
  movies.splice(index, 1);
  displayMovies(movies);
}

// =======================
// Filter Top Rated Movies
// =======================
function filterTopMovies() {
  let topMovies = movies.filter(movie => movie.rating >= 8);
  displayMovies(topMovies);
}

// =======================
// Search Movies
// =======================
function searchMovies() {
  let keyword = document.getElementById("search").value.toLowerCase();

  let result = movies.filter(movie =>
    movie.title.toLowerCase().includes(keyword)
  );

  displayMovies(result);
}

// =======================
// Show All Movies
// =======================
function showAllMovies() {
  displayMovies(movies);
}
