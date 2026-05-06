
let box=document.getElementById("box");
let countText=document.getElementById("count");
let cartList=document.getElementById("cartList");
let totalText=document.getElementById("total");
let cart=[];

  let products = [
  { name: "Samsung Galaxy A15", price: 58000 },
  { name: "Apple iPhone 13", price: 185000 },
  { name: "Infinix Note 40", price: 52000 },
  { name: "Dell Inspiron Laptop", price: 145000 },
  { name: "Sony Headphones WH-CH520", price: 12500 }
];


  for(let i=0; i<products.length;i++)
  {
    box.innerHTML +=`
    <div class="card">
    <p> ${products[i].name}</p>
    <p> ${products[i].price}</p>
    <button onclick="addToCart('${products[i].name}', ${products[i].price})"> add To Cart 🛒
    </button>
    
    </div>`;
  }
  function addToCart(name,price)
  {
    let found = false;
    for(let i=0;i<cart.length;i++)
    {
      if(cart[i].name===name)
      {
        cart[i].qty++ ;
        found=true;
        break;
      }
    }
    if(!found)
    {
    cart.push({name:name,price:price, qty:1});
    }
    updateCart();
    alert("Added: " + name + " - " + price);
  }
  function decreaseItem(index)
  {
     cart[index].qty--;
     if(cart[index].qty===0)
     {
      cart.splice(index,1);
     }
     updateCart();
  }
  function removeItem(index)
  {
     cart.splice(index,1);
     updateCart();
  }
  function updateCart()
  {
  countText.innerText = "Cart Items:" + cart.length;
  cartList.innerHTML="";
  let total=0;
  for (let i=0;i<cart.length;i++)
  {
    total+=cart[i].price * cart[i].qty;
    cartList.innerHTML+=`
    <li>
    <button onclick="addToCart('${cart[i].name}', ${cart[i].price})">➕</button>
      <button onclick="decreaseItem(${i})">➖</button>
    ${cart[i].name} - ${cart[i].price} (x${cart[i].qty})
     <button onclick="removeItem(${i})">❌ Remove</button>
    </li>`;
  }
  totalText.innerText="Total:" + total +  "💰";
}
  
  

