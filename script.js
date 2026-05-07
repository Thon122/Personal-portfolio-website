console.log("JS is successfully linked!");
// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Changes menu icon to an 'X'
    navbar.classList.toggle('active'); // Slides the menu in/out
};

// Remove toggle icon and navbar when clicking navbar links (scroll)
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};