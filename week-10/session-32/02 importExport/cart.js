export function addToCart(product, cart) {
  cart.push(product);
}

export function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}
