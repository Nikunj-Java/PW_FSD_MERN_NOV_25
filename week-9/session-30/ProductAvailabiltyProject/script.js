
//product Constructor
function Product(name, available) {
    this.name = name;
    this.available = available;
}

//product array
let products = [];

function addProduct() {
    let name = document.getElementById("productName").value;

    if (name === "") {
        alert("Please Enter Product Name!");
        return
    }

    let newProduct = new Product(name, true);
    products.push(newProduct);//push is array method

    //console.log(newProduct);
    displayProducts();
    document.getElementById("productName").value="";

}

//function to display Products
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
            <button class="${product.available ? 'out' : ''}" onclick="toggleStatus(${index})">
              Toggle
            </button>
          </li>
        `;
    });
}

function toggleStatus(index) {
    products[index].available = !products[index].available;
    displayProducts();
}

