// КАТЕГОРІЯ ВЕГА
// Отримуємо посилання на кнопку "Вега"
var filterButton = document.querySelector('.pizza-6');

// Отримуємо посилання на всі елементи меню піци
var menuItems = document.querySelectorAll('.menu-1, .menu-2, .menu-3, .menu-4, .menu-5'); 

// Встановлюємо обробник події при натисканні на кнопку "Вега"
filterButton.addEventListener('click', function() {
  // Перебираємо всі елементи меню піци
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    // Перевіряємо, чи елемент має клас "menu-3" (піца Вега)
    if (menuItem.classList.contains('menu-3')) {
      // Залишаємо видимим тільки піцу Вега, решта піц приховуємо
      menuItem.style.display = 'block';
    } else {
      menuItem.style.display = 'none';
    }
  }
});



// КАТЕГОРІЯ МОРЕПРОДУКТИ

var seafoodButton = document.querySelector('.pizza-5');

var menuItems = document.querySelectorAll('.menu-1, .menu-2, .menu-3, .menu-4, .menu-5'); 

seafoodButton.addEventListener('click', function() {
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    if (menuItem.classList.contains('menu-5')) {
      menuItem.style.display = 'block';
    } else {
      menuItem.style.display = 'none';
    }
  }
});

// КАТЕГОРІЯ З ГРИБАМИ
var mushroomButton = document.querySelector('.pizza-4');
var menuItems = document.querySelectorAll('.menu-1, .menu-2, .menu-3, .menu-4, .menu-5'); // Оновіть класи, якщо потрібно

mushroomButton.addEventListener('click', function() {
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    if (menuItem.classList.contains('menu-1') && menuItem.querySelector('.menu-type').textContent === 'З грибами') {
      menuItem.style.display = 'block';
    } else {
      menuItem.style.display = 'none';
    }
  }
});

// КАТЕГОРІЯ МЯСНІ
// var meatButton = document.querySelector('.pizza-2'); // Оновіть клас кнопки, якщо потрібно
// var menuItems = document.querySelectorAll('.menu-1.menu-2, .menu-1.menu-4'); // Оновіть класи меню, якщо потрібно

// meatButton.addEventListener('click', function() {
//   for (var i = 0; i < menuItems.length; i++) {
//     var menuItem = menuItems[i];

//     if (menuItem.classList.contains('menu-2') && menuItem.classList.contains('menu-4')) {
//       menuItem.style.display = 'block';
//     } else {
//       menuItem.style.display = 'none';
//     }
//   }
// });

