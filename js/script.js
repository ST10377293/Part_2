//Hamburger Menu js
document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menu-toggle');
  var navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', function() {
    navbar.classList.toggle('open');
  });
});

