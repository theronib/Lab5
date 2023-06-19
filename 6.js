// КАТЕГОРІЯ ВЕГА
var filterButton = document.querySelector('.pizza-6');

var menuItems = document.querySelectorAll('.menu-1, .menu-2, .menu-3, .menu-4, .menu-5'); 

filterButton.addEventListener('click', function() {
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    if (menuItem.classList.contains('menu-3')) {
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

// КАТЕГОРІЯ УСІ
var allButton = document.querySelector('.pizza-1'); // Оновіть клас кнопки, якщо потрібно
var menuItems = document.querySelectorAll('.menu-1, .menu-2, .menu-3, .menu-4, .menu-5'); // Оновіть класи, якщо потрібно

allButton.addEventListener('click', function() {
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.style.display = 'block';
  }
});


// КАТЕГОРІЯ МЯСНІ 
var meatButton = document.querySelector('.pizza-2');
var menuItems = document.querySelectorAll('.menu-1, .menu-2, .menu-3, .menu-4, .menu-5'); // Оновіть класи, якщо потрібно

meatButton.addEventListener('click', function() {
  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    if (menuItem.querySelector('.menu-type').textContent === "М'ясна піца") {
      menuItem.style.display = 'block';
    } else {
      menuItem.style.display = 'none';
    }
  }
});
