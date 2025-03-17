// Hamburguer Menu
document.getElementById('menu-button').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    const menuButton = this;

    navMenu.classList.toggle('active');
    menuButton.classList.toggle('open');

    if (menuButton.classList.contains('open')) {
        menuButton.textContent = '✕'; // Close icon
    } else {
        menuButton.textContent = '☰'; // Hamburger icon
    }

});