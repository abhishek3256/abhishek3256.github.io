var products = [
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Banana', price: 2 },
    { id: 3, name: 'Orange', price: 1.5 },
    { id: 4, name: 'Mango', price: 3 }
];
var cart = {};

function renderProducts() {
    var productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(function(product) {
        var div = document.createElement('div');
        div.className = 'product';
        div.innerHTML =
            '<span>' + product.name + ' ($' + product.price + ')</span>' +
            '<button onclick="addToCart(' + product.id + ')">Add to Cart</button>';
        productList.appendChild(div);
    });
}

function renderCart() {
    var cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    var hasItems = false;
    for (var id in cart) {
        hasItems = true;
        var item = cart[id];
        var div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML =
            '<span>' + item.name + ' (x' + item.qty + ') - $' + (item.price * item.qty).toFixed(2) + '</span>' +
            '<span>' +
                '<button onclick="decrement(' + id + ')">-</button>' +
                '<button onclick="increment(' + id + ')">+</button>' +
                '<button onclick="removeFromCart(' + id + ')">Remove</button>' +
            '</span>';
        cartList.appendChild(div);
    }
    if (!hasItems) {
        cartList.innerHTML = '<em>Cart is empty.</em>';
    }
}

function addToCart(id) {
    var product = products.find(function(p) { return p.id === id; });
    if (cart[id]) {
        cart[id].qty += 1;
    } else {
        cart[id] = { name: product.name, price: product.price, qty: 1 };
    }
    renderCart();
}

function increment(id) {
    cart[id].qty += 1;
    renderCart();
}

function decrement(id) {
    if (cart[id].qty > 1) {
        cart[id].qty -= 1;
    } else {
        delete cart[id];
    }
    renderCart();
}

function removeFromCart(id) {
    delete cart[id];
    renderCart();
}

function clearCart() {
    cart = {};
    renderCart();
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('clear-cart').onclick = clearCart;
    renderProducts();
    renderCart();
}); 