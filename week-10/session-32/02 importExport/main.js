import { laptop, phone } from "./products.js";
import { addToCart, calculateTotal } from "./cart.js";

let cart = [];

const output = document.getElementById("output");

document.getElementById("addLaptop").addEventListener("click", () => {
  addToCart(laptop, cart);
  showCart();
});

document.getElementById("addPhone").addEventListener("click", () => {
  addToCart(phone, cart);
  showCart();
});

function showCart() {
  const total = calculateTotal(cart);
  output.textContent = `Items in cart: ${cart.length}, Total = ₹${total}`;
}
