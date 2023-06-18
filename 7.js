  // Очистка кошику

  //  // Отримання кнопки за допомогою класу
  //  var cleanButton = document.querySelector('.clean-orders');

  //  // Функція, яка очищує елементи замовлення та змінює суму та кількість на 0
  //  function cleanOrderItems() {
  //    // Отримання елементів замовлення за допомогою класу
  //    var item1 = document.querySelector('.item1');
  //    var item2 = document.querySelector('.item2');
  //    var item3 = document.querySelector('.item3');
 
  //    // Видалення елементів замовлення
  //    item1.remove();
  //    item2.remove();
  //    item3.remove();
 
  //    // Зміна суми на 0
  //    var sumNumber = document.querySelector('.sumnumber');
  //    sumNumber.textContent = '0 грн';
 
  //    // Зміна кількості на 0
  //    var amountOrder = document.querySelector('.amount-order');
  //    amountOrder.textContent = '0';
  //  }
 
  //  // Додавання обробника події при натисканні на кнопку
  //  cleanButton.addEventListener('click', cleanOrderItems);


//   // Global array variable to store the cart items
// let cartItems = [];

// // Function to add a pizza item to the cart
// function addToCart(pizzaName, size, price) {
//   // Add your existing addToCart logic here
  
//   // Update cart items array
//   cartItems.push({ name: pizzaName, size: size, price: price });

//   // Update cart quantity and total price
//   const cartQuantity = cartItems.length;
//   const cartTotal = calculateCartTotal();

//   // Update the cart display
//   updateCartDisplay(cartQuantity, cartTotal);
// }

// // Function to clear the cart
// function clearCart() {
//   // Clear your existing cart clearing logic here
  
//   // Reset cart items array
//   cartItems = [];

//   // Reset cart quantity and total price
//   const cartQuantity = 0;
//   const cartTotal = 0;

//   // Update the cart display
//   updateCartDisplay(cartQuantity, cartTotal);
// }

// // Function to calculate the cart total price
// function calculateCartTotal() {
//   let total = 0;
//   for (let i = 0; i < cartItems.length; i++) {
//     total += cartItems[i].price;
//   }
//   return total;
// }

// // Function to update the cart display
// function updateCartDisplay(cartQuantity, cartTotal) {
//   // Update the cart quantity
//   const amountOrder = document.querySelector('.amount-order');
//   amountOrder.textContent = cartQuantity;

//   // Update the cart total price
//   const sumNumber = document.querySelector('.sumnumber');
//   sumNumber.textContent = cartTotal + ' грн';
// }
