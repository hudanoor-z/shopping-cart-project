let box = document.getElementById("box");
let cartList = document.getElementById("cartList");
let countText = document.getElementById("count");

let cart = [];

let products = [
  {name:"Infinix", price: 50000},
  {name:"Apple", price: 90000}
];

// show products
for(let i = 0; i < products.length; i++)
{
  box.innerHTML += `
  <div class="card">
    <p>${products[i].name}</p>
    <p>${products[i].price}</p>

    <button onclick="addToCart('${products[i].name}')">
      Add To Cart
    </button>
  </div>`;
}

// add function
function addToCart(name)
{
  cart.push(name);
  updateCart();
  alert("added " + name);
}

// remove function
function removeItem(index)
{
  cart.splice(index, 1);
  updateCart();
}

function updateCart()
{
  countText.innerText = "Cart Items: " + cart.length;

  cartList.innerHTML = "";

  for(let i = 0; i < cart.length; i++)
  {
    cartList.innerHTML += `
    <li>
      ${cart[i]}
      <button onclick="removeItem(${i})">❌ Remove</button>
    </li>`;
  }
}