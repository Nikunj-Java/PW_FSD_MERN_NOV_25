function getUser(callback) {
  setTimeout(() => callback({ id: 1, name: "Rahul" }), 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => callback([{ id: 101 }]), 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => callback({ id: 101, product: "Laptop" }), 1000);
}

function getShipping(orderId, callback) {
  setTimeout(() => callback("Delivered to Mumbai"), 1000);
}

getUser(function (user) {
  getOrders(user.id, function (orders) {
    getOrderDetails(orders[0].id, function (details) {
      getShipping(details.id, function (shipping) {
        console.log(shipping);
      });
    });
  });
});
