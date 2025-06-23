let cart={};
const products=[
  { id: 1, name: "Apple", price: 1.0 },
  { id: 2, name: "Banana", price: 0.5 },
  { id: 3, name: "Cherry", price: 2.0 },
];

// function showProducts() {
//   console.log("Available products:");
//   products.forEach(product => {
//     console.log(`${product.id}: ${product.name} - $${product.price}`);
//   });
//   let str=``;
//   products.map(product=>{
//     str+=`${product.id}: ${product.name} - $${product.price}`;
//   })
//   console.log(str);
// }
// showProducts();


// const addToCart = (productId, quantity) => {
//     const product = products.find(p => p.id === productId);
//     if (product) {
//         if (!cart[productId]) {
//         cart[productId] = { ...product, quantity: 0 };
//         }
//         cart[productId].quantity += quantity;
//         console.log(`${quantity} ${product.name}(s) added to the cart.`);
//     } else {
//         console.log("Product not found.");
//     }
// };


function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) {
    console.log("Product not found.");
    return;
  }

  if (cart[id]) {
    cart[id].quantity += 1;
  } else {
    cart[id] = { ...product, quantity: 1 };
  }

  console.log(`${product.name} added to the cart.`);
}

function showCart() {
  console.log("Your cart:");
  let isEmpty = true;

  for (let id in cart) {
    const item = cart[id];
    console.log(`${item.name} - $${item.price} x ${item.quantity}`);
    isEmpty = false;
  }

  if (isEmpty) {
    console.log("Your cart is empty.");
  }
}


function removeFromCart(id) {
  if (cart[id]) {
    delete cart[id];
    console.log(`Product with ID ${id} removed from the cart.`);
  } else {
    console.log(`Product with ID ${id} not found in the cart.`);
  }
}

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
addToCart(1);
addToCart(2);
addToCart(1);
addToCart(3);
addToCart(4);
showCart();
orderValue();