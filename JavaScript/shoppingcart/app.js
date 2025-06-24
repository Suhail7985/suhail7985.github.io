let cart = {};

const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

function showProducts() {
  document.getElementById("product-list-section").style.display = "block";
  document.getElementById("cart-section").style.display = "none";

  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    productDiv.innerHTML = `
      <strong>${product.name}</strong><br />
      Price: $${product.price}<br />
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productDiv);
  });
}

function displayCart() {
  document.getElementById("product-list-section").style.display = "none";
  document.getElementById("cart-section").style.display = "block";

  const root = document.getElementById("root");
  root.innerHTML = "";

  let total = 0;

  products.forEach((product) => {
    const qty = cart[product.id];
    if (qty) {
      const subtotal = qty * product.price;
      total += subtotal;

      root.innerHTML += `
        <div>
          ${product.name} - $${product.price} × ${qty} = $${subtotal}
          <button onclick="decrement(${product.id})">−</button>
          <button onclick="increment(${product.id})">+</button>
        </div>
      `;
    }
  });

  root.innerHTML += `<hr /><strong>Total: $${total}</strong>`;
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  showCount();
  
}

function increment(id) {
  if (cart[id]) {
    cart[id]++;
    displayCart();
  }
}

function decrement(id) {
  if (cart[id]) {
    cart[id]--;
    if (cart[id] <= 0) {
      delete cart[id];
    }
    displayCart();
  }
}

function showCount() {
  const countSpan = document.getElementById("cart-count-text");
  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  if (totalItems > 0) {
    countSpan.textContent = ` (${totalItems})`;
  } else {
    countSpan.textContent = ""; // hide if nothing in cart
  }
}


