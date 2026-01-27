// ======================
// Product Constructor
// ======================
function Product(name, available) {
  this.name = name;
  this.available = available;
}

// ======================
// Product Array
// ======================
let products = [];

// ======================
// Add Button Event
// ======================
document.getElementById("addProduct").addEventListener("click", addProduct);

// ======================
// Add Product
// ======================
function addProduct() {
  let name = document.getElementById("productName").value.trim();

  if (name === "") {
    alert("Please Enter Product Name!");
    return;
  }

  let newProduct = new Product(name, true);
  products.push(newProduct);

  displayProducts();
  document.getElementById("productName").value = "";
}

// ======================
// Event Delegation (Toggle Buttons)
// ======================
document.getElementById("productList").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    let index = event.target.getAttribute("data-index");
    toggleStatus(index);
  }
});

// ======================
// Display Products
// ======================
function displayProducts() {
  let list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product, index) => {
    list.innerHTML += `
      <li>
        ${product.name}
        <span class="${product.available ? 'available' : 'not-available'}">
          ${product.available ? 'Available' : 'Out of Stock'}
        </span>
        <button data-index="${index}">
          Toggle
        </button>
      </li>
    `;
  });
}

// ======================
// Toggle Availability
// ======================
function toggleStatus(index) {
  products[index].available = !products[index].available;
  displayProducts();
}
