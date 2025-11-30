function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let div = document.getElementById("cart-items");

  let total = 0;
  div.innerHTML = "";

  cart.forEach(item => {
    div.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
    total += item.price;
  });

  localStorage.setItem("cartTotal", total);
  document.getElementById("total").innerText = "Total: ₹" + total;
}

function payNow() {
  alert("Payment Successful!");

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.forEach(item => orders.push(`${item.name} - ₹${item.price}`));

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");

  window.location.href = "orders.html";
}
