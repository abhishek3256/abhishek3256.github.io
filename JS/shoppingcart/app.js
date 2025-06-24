let cart = {};
const products = [
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Cherry", price: 2.0 },
];

function renderProducts() {
  const root = document.getElementById('root');
  let html = '<h2>Products</h2>';
  html += '<div id="product-list">';
  products.forEach(product => {
    html += `<div style='margin-bottom:8px;'>${product.name} ($${product.price}) <button onclick="addToCart(${product.id})">Add to Cart</button></div>`;
  });
  html += '</div>';
  html += '<h2>Cart</h2>';
  html += '<div id="cart-list"></div>';
  html += '<button onclick="clearCart()">Clear Cart</button>';
  root.innerHTML = html;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  let html = '';
  let hasItems = false;
  for (let id in cart) {
    hasItems = true;
    const item = cart[id];
    html += `<div>${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)} ` +
      `<button onclick="decrement(${id})">-</button>` +
      `<button onclick="increment(${id})">+</button>` +
      `<button onclick="removeFromCart(${id})">Remove</button></div>`;
  }
  if (!hasItems) {
    html = '<em>Cart is empty.</em>';
  }
  cartList.innerHTML = html;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  if (cart[id]) {
    cart[id].quantity += 1;
  } else {
    cart[id] = { ...product, quantity: 1 };
  }
  renderCart();
}

function increment(id) {
  if (cart[id]) {
    cart[id].quantity += 1;
    renderCart();
  }
}

function decrement(id) {
  if (cart[id]) {
    if (cart[id].quantity > 1) {
      cart[id].quantity -= 1;
    } else {
      delete cart[id];
    }
    renderCart();
  }
}

function removeFromCart(id) {
  if (cart[id]) {
    delete cart[id];
    renderCart();
  }
}

function clearCart() {
  cart = {};
  renderCart();
}

document.addEventListener('DOMContentLoaded', renderProducts);

const orderValue = () => {
    let total = 0;
    total=products.reduce((sum, product) => {
        if (cart[product.id]) {
            sum += product.price * cart[product.id].quantity;
            return sum;
        }

    }, 0);
console.log(total);

}

function checkout() {
  if (Object.keys(cart).length === 0) {
    console.log("Your cart is empty. Cannot proceed to checkout.");
    return;
  }

  let total = 0;
  for (let id in cart) {
    const item = cart[id];
    total += item.price * item.quantity;
  }

  console.log(`Total amount due: $${total.toFixed(2)}`);
  console.log("Thank you for your purchase!");
  cart = {}; 
}

//
//