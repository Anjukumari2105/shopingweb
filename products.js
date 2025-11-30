const allProducts = {
  clothes: [
    {name: "T-Shirt Red", price: 300, img:"https://i.imgur.com/ZKq8z2j.png"},
    {name: "T-Shirt Blue", price: 350, img:"https://i.imgur.com/ZKq8z2j.png"},
    {name: "Hoodie", price: 800, img:"https://i.imgur.com/Tr2NlJt.png"}
  ],

  grocery: [
    {name: "Rice 1kg", price: 50, img:"https://i.imgur.com/X6n4CTc.png"},
    {name: "Milk 1L", price: 35, img:"https://i.imgur.com/kts2WZF.png"},
    {name: "Bread", price: 40, img:"https://i.imgur.com/0GvH8mE.png"}
  ],

  stationary: [
    {name: "Notebook", price: 40, img:"https://i.imgur.com/jfV9NBG.png"},
    {name: "Pen Pack", price: 20, img:"https://i.imgur.com/Hc8xK5Z.png"},
    {name: "Pencil Box", price: 80, img:"https://i.imgur.com/cjHcmLw.png"}
  ]
};

let category = localStorage.getItem("category");
document.getElementById("cat-title").innerText = category.toUpperCase();

let list = document.getElementById("product-list");
let items = allProducts[category];

items.forEach(item => {
  list.innerHTML += `
    <div class="item">
      <img src="${item.img}">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
      <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    </div>
  `;
});
