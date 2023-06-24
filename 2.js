function updateCart() {
  updateCartDisplay();
  updateCartData();
}


function addToCart(pizzaName, size, price, imageSrc) {
  var pizzaOrdersDiv = document.querySelector('.pizza-orders');
  var pizzaItems = pizzaOrdersDiv.getElementsByClassName('item');
  var existingItem = null;

  for (var i = 0; i < pizzaItems.length; i++) {
    var pizzaItem = pizzaItems[i];
    var itemName = pizzaItem.querySelector('p').textContent;
    if (itemName === `${pizzaName} (${size})`) {
      existingItem = pizzaItem;
      break;
    }
  }

  if (existingItem) {
    var counter = existingItem.querySelector('.counter p');
    var count = parseInt(counter.textContent);
    count++;
    counter.textContent = count;
    cartQuantity++;
    cartTotal += price;
  } else {
    var newItem = document.createElement('section');
    newItem.className = 'item';

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
      <div class="counter">
        <p>1</p>
      </div>
      <button class="button add-button">
        <p>+</p>
      </button>
      <button class="button cancel-button">
        <p>x</p>
      </button>

      <img class="pizza1" src="${imageSrc}" alt="p1">
      <hr style="margin-top: -5px;">
    `;

    pizzaOrdersDiv.appendChild(newItem);

    var removeButton = newItem.querySelector('.remove-button');
    var addButton = newItem.querySelector('.add-button');
    var cancelButton = newItem.querySelector('.cancel-button');
    var counter = newItem.querySelector('.counter p');

    removeButton.addEventListener('click', function() {
      var count = parseInt(counter.textContent);
      if (count > 1) {
        count--;
        counter.textContent = count;
        cartQuantity--;
        cartTotal -= price;
      } else {
        pizzaOrdersDiv.removeChild(newItem);
        cartQuantity--;
        cartTotal -= price;
      }
      updateCart();
    });

    addButton.addEventListener('click', function() {
      var count = parseInt(counter.textContent);
      count++;
      counter.textContent = count;
      cartQuantity++;
      cartTotal += price;
      updateCart();
    });

    cancelButton.addEventListener('click', function() {
      var count = parseInt(counter.textContent);
      cartQuantity -= count;
      cartTotal -= price * count;
      pizzaOrdersDiv.removeChild(newItem);
      updateCart();
    });

    cartQuantity++;
    cartTotal += price;
  }

  updateCart();
}


function clearCart() {
  var pizzaOrdersDiv = document.querySelector('.pizza-orders');
  pizzaOrdersDiv.innerHTML = '';

  cartQuantity = 0;
  cartTotal = 0;

  updateCart();
}


function updateCartDisplay() {
  var amountOrder = document.querySelector('.amount-order');
  amountOrder.textContent = cartQuantity;

  var sumNumber = document.querySelector('.sumnumber');
  sumNumber.textContent = cartTotal + ' грн';
}


function updateCartData() {
  var pizzaOrdersDiv = document.querySelector('.pizza-orders');
  var cartItems = Array.from(pizzaOrdersDiv.querySelectorAll('.item'));

  var cartData = {
    quantity: cartQuantity,
    total: cartTotal,
    items: cartItems.map(item => item.innerHTML) 
  };

  localStorage.setItem('cart', JSON.stringify(cartData));
}


function retrieveCartData() {
  var cartData = localStorage.getItem('cart');
  if (cartData) {
    var { quantity, total, items } = JSON.parse(cartData);
    cartQuantity = quantity;
    cartTotal = total;
    updateCartDisplay();

    var pizzaOrdersDiv = document.querySelector('.pizza-orders');
    pizzaOrdersDiv.innerHTML = items.join(''); 

    var removeButtons = pizzaOrdersDiv.getElementsByClassName('remove-button');
    var addButtons = pizzaOrdersDiv.getElementsByClassName('add-button');
    var cancelButtons = pizzaOrdersDiv.getElementsByClassName('cancel-button');

    for (var i = 0; i < removeButtons.length; i++) {
      var removeButton = removeButtons[i];
      var addButton = addButtons[i];
      var cancelButton = cancelButtons[i];

      var counter = removeButton.parentNode.querySelector('.counter p');
      var price = parseFloat(removeButton.parentNode.querySelector('.price').textContent);

      removeButton.addEventListener('click', function() {
        var count = parseInt(counter.textContent);
        if (count > 1) {
          count--;
          counter.textContent = count;
          cartQuantity--;
          cartTotal -= price;
        } else {
          pizzaOrdersDiv.removeChild(this.parentNode);
          cartQuantity--;
          cartTotal -= price;
        }
        updateCart();
      });

      addButton.addEventListener('click', function() {
        var count = parseInt(counter.textContent);
        count++;
        counter.textContent = count;
        cartQuantity++;
        cartTotal += price;
        updateCart();
      });

      cancelButton.addEventListener('click', function() {
        var count = parseInt(counter.textContent);
        cartQuantity -= count;
        cartTotal -= price * count;
        pizzaOrdersDiv.removeChild(this.parentNode);
        updateCart();
      });
    }
  }
}


window.addEventListener('load', retrieveCartData);
