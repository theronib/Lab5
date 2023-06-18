function addToCart(pizzaName, size, price) {
    // Create a new item element
    var newItem = document.createElement('section');
    newItem.className = 'item';
    
    // Set the content of the new item
    newItem.innerHTML = `
      <p>${pizzaName} (${size})</p>
      <img src="1.png" alt="1">
      <p class="measures">30</p>
      <img src="2.png" alt="2">
      <p class="measures">460</p>
      <p class="price">${price} грн</p>
  
      <button class="button remove-button">
        <p>-</p>
      </button>
      <div id="counter">
        <p>1</p>
      </div>
      <button class="button add-button">
        <p>+</p>
      </button>
      <button class="button cancel-button">
        <p>x</p>
      </button>
  
      <img class="pizza1" src="pizza_1.jpg" alt="p1">
      <hr style=" margin-top: -100px;">
    `;
    
    // Append the new item to the pizza-orders div
    var pizzaOrdersDiv = document.querySelector('.pizza-orders');
    pizzaOrdersDiv.appendChild(newItem);

    // Update cart quantity and total price
  cartQuantity++;
  cartTotal += price;

  // Update the cart display
  updateCartDisplay();

  updateCartData();

  }
  

  // Global variables to keep track of the cart quantity and total price
let cartQuantity = 0;
let cartTotal = 0;


// Function to clear the cart
function clearCart() {
    // Clear your existing cart clearing logic here
  
    // Clear the cart items from the DOM
    const pizzaOrdersDiv = document.querySelector('.pizza-orders');
    pizzaOrdersDiv.innerHTML = '';
  
    // Reset cart quantity and total price
    cartQuantity = 0;
    cartTotal = 0;
  
    // Update the cart display
    updateCartDisplay();

    updateCartData();

  }
  

// Function to update the cart display
function updateCartDisplay() {
  // Update the cart quantity
  const amountOrder = document.querySelector('.amount-order');
  amountOrder.textContent = cartQuantity;

  // Update the cart total price
  const sumNumber = document.querySelector('.sumnumber');
  sumNumber.textContent = cartTotal + ' грн';

  updateCartData();

}
  
  // Function to update the cart data in localStorage
function updateCartData() {
    const pizzaOrdersDiv = document.querySelector('.pizza-orders');
    const cartItems = Array.from(pizzaOrdersDiv.querySelectorAll('.item'));
  
    const cartData = {
      quantity: cartQuantity,
      total: cartTotal,
      items: cartItems.map(item => item.innerHTML) // Save the HTML content of each item
    };
  
    localStorage.setItem('cart', JSON.stringify(cartData));
  }
  
  // Function to retrieve cart data from localStorage
  function retrieveCartData() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const { quantity, total, items } = JSON.parse(cartData);
      cartQuantity = quantity;
      cartTotal = total;
      updateCartDisplay();
  
      const pizzaOrdersDiv = document.querySelector('.pizza-orders');
      pizzaOrdersDiv.innerHTML = items.join(''); // Restore the saved item HTML content
    }
  }
  
  
  // Call retrieveCartData() when the page loads to retrieve and update the cart data
  window.addEventListener('load', retrieveCartData);