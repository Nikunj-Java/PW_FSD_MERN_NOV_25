// Create a Map
let products = new Map();

// Add or Update Product
function addProduct() {
    let id = parseInt(document.getElementById("productId").value);
    let name = document.getElementById("productName").value;

    if (!id || !name) {
        alert("Please enter valid ID and Name");
        return;
    }

    products.set(id, name);
    displayProducts();
}

// Delete Product
function deleteProduct() {
    let id = parseInt(document.getElementById("productId").value);

    if (!products.has(id)) {
        alert("Product not found!");
        return;
    }

    products.delete(id);
    displayProducts();
}

// Clear All Products
function clearProducts() {
    products.clear();
    displayProducts();
}

// Display Map Data
function displayProducts() {
    let list = document.getElementById("productList");
    list.innerHTML = "";

    for (let [id, name] of products) {
        let li = document.createElement("li");
        li.textContent = `ID: ${id} | Name: ${name}`;
        list.appendChild(li);
    }
}