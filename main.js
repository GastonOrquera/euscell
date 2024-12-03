let arrow = document.querySelector('.arrow');

arrow.addEventListener('click', () => {
    window.location.hash = 'servicios';
});

let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');

    navLinks.forEach((links) => {
        links.addEventListener('click', () => {
            nav.classList.remove('active');
        })
    })
});
